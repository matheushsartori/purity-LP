from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Request
from fastapi.responses import Response
import uuid
import os
import tempfile
from io import BytesIO
from datetime import datetime
import psycopg2
from psycopg2.extras import RealDictCursor
from fastapi.middleware.cors import CORSMiddleware
# Imports para MinIO
from minio import Minio
from minio.error import S3Error

# Imports para QR Code
import qrcode

# Imports para PDF
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4

# Configurações hardcoded
MINIO_ENDPOINT = "s3.joaodomingos.net"
MINIO_ACCESS_KEY = "LirfpibA3PLcsA1wGvRN"
MINIO_SECRET_KEY = "8xHPE0r5m7jrWFl6PlYOTgoK5idB2mjeQ0XkUC54"
MINIO_BUCKET_NAME = "qrcode"

# PostgreSQL hardcoded
POSTGRES_HOST = "31.97.8.158"
POSTGRES_PORT = "5055"
POSTGRES_DB = "postgres"
POSTGRES_USER = "supabase_admin"
POSTGRES_PASSWORD = "99e46401b7712e2bd2a43141e438a7c8"

# Inicializa FastAPI
app = FastAPI(title="QR Code Video API", version="1.0.0")

# Adiciona middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Inicializa MinIO
minio_client = Minio(
    MINIO_ENDPOINT,
    access_key=MINIO_ACCESS_KEY,
    secret_key=MINIO_SECRET_KEY,
    secure=True
)

def get_db_connection():
    """Conexão com PostgreSQL"""
    return psycopg2.connect(
        host=POSTGRES_HOST,
        port=POSTGRES_PORT,
        database=POSTGRES_DB,
        user=POSTGRES_USER,
        password=POSTGRES_PASSWORD
    )

def ensure_bucket_exists():
    """Garante que o bucket existe"""
    try:
        if not minio_client.bucket_exists(MINIO_BUCKET_NAME):
            minio_client.make_bucket(MINIO_BUCKET_NAME)
            print(f"✅ Bucket '{MINIO_BUCKET_NAME}' criado")
        else:
            print(f"✅ Bucket '{MINIO_BUCKET_NAME}' já existe")
    except Exception as e:
        print(f"❌ Erro ao verificar/criar bucket: {e}")

def upload_to_minio(file_data: bytes, file_name: str, content_type: str) -> str:
    """Upload arquivo para MinIO"""
    try:
        unique_filename = f"{uuid.uuid4()}_{file_name}"
        
        minio_client.put_object(
            MINIO_BUCKET_NAME,
            unique_filename,
            BytesIO(file_data),
            length=len(file_data),
            content_type=content_type
        )
        
        url = f"http://{MINIO_ENDPOINT}/{MINIO_BUCKET_NAME}/{unique_filename}"
        return url
        
    except Exception as e:
        raise Exception(f"Erro no upload para MinIO: {e}")

def generate_qr_code(data: str) -> bytes:
    """Gera QR code"""
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)
    
    qr_image = qr.make_image(fill_color="black", back_color="white")
    
    img_buffer = BytesIO()
    qr_image.save(img_buffer, format='PNG')
    return img_buffer.getvalue()

def create_pdf_with_qr(qr_code_data: bytes, title: str) -> bytes:
    """Cria PDF A4 com QR code no centro e título no rodapé"""
    buffer = BytesIO()
    width, height = A4
    
    c = canvas.Canvas(buffer, pagesize=A4)
    
    # Salva QR code temporariamente
    with tempfile.NamedTemporaryFile(delete=False, suffix='.png') as temp_file:
        temp_file.write(qr_code_data)
        qr_temp_path = temp_file.name
    
    try:
        # QR code no centro (200x200 pontos)
        qr_size = 200
        x_center = (width - qr_size) / 2
        y_center = (height - qr_size) / 2
        
        c.drawImage(qr_temp_path, x_center, y_center, width=qr_size, height=qr_size)
        
        # Título no rodapé centralizado
        c.setFont("Helvetica-Bold", 14)
        text_width = c.stringWidth(title, "Helvetica-Bold", 14)
        x_text = (width - text_width) / 2
        y_text = 50
        
        c.drawString(x_text, y_text, title)
        c.save()
        
    finally:
        # Remove arquivo temporário
        if os.path.exists(qr_temp_path):
            os.remove(qr_temp_path)
    
    buffer.seek(0)
    return buffer.getvalue()

def save_to_db(titulo: str, video_url: str, pdf_url: str) -> int:
    """Salva registro no banco PostgreSQL"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO video_records (titulo, video_url, pdf_url)
        VALUES (%s, %s, %s) RETURNING id
    ''', (titulo, video_url, pdf_url))
    
    record_id = cursor.fetchone()[0]
    conn.commit()
    cursor.close()
    conn.close()
    return record_id

# Inicialização
@app.on_event("startup")
async def startup_event():
    print("🚀 Iniciando API...")
    ensure_bucket_exists()
    print("✅ API pronta!")

@app.options("/{full_path:path}")
async def options_handler(request: Request, full_path: str):
    """Handle OPTIONS requests for CORS preflight"""
    return Response(
        status_code=200,
        headers={
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Max-Age": "86400"
        }
    )

@app.get("/")
async def root():
    return {
        "message": "QR Code Video API funcionando!",
        "endpoints": {
            "upload": "POST /upload-video",
            "records": "GET /records", 
            "docs": "/docs"
        }
    }

@app.post("/upload-video")
async def upload_video(
    video: UploadFile = File(..., description="Arquivo de vídeo"),
    titulo: str = Form(..., description="Título do vídeo")
):
    """
    Processa vídeo e retorna PDF com QR code
    """
    try:
        # Validações
        if not video.content_type or not video.content_type.startswith('video/'):
            raise HTTPException(status_code=400, detail="Arquivo deve ser um vídeo")
        
        if not titulo.strip():
            raise HTTPException(status_code=400, detail="Título é obrigatório")
        
        # Lê conteúdo do vídeo
        video_content = await video.read()
        
        print(f"📤 Uploading vídeo: {video.filename}")
        
        # 1. Upload vídeo para MinIO
        video_url = upload_to_minio(
            file_data=video_content,
            file_name=video.filename,
            content_type=video.content_type
        )
        print(f"✅ Vídeo no MinIO: {video_url}")
        
        # 2. Gera QR code
        qr_code_data = generate_qr_code(video_url)
        print("✅ QR code gerado")
        
        # 3. Cria PDF
        pdf_data = create_pdf_with_qr(qr_code_data, titulo.strip())
        print("✅ PDF criado")
        
        # 4. Upload PDF para MinIO
        pdf_filename = f"{titulo.strip().replace(' ', '_')}_qrcode.pdf"
        pdf_url = upload_to_minio(
            file_data=pdf_data,
            file_name=pdf_filename,
            content_type="application/pdf"
        )
        print(f"✅ PDF no MinIO: {pdf_url}")
        
        # 5. Salva no banco
        record_id = save_to_db(titulo.strip(), video_url, pdf_url)
        print(f"✅ Salvo no banco ID: {record_id}")
        
        # 6. Retorna PDF
        return Response(
            content=pdf_data,
            media_type="application/pdf",
            headers={
                "Content-Disposition": f"attachment; filename=\"{pdf_filename}\"",
                "X-Video-URL": video_url,
                "X-PDF-URL": pdf_url,
                "X-Record-ID": str(record_id)
            }
        )
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"❌ Erro: {e}")
        raise HTTPException(status_code=500, detail=f"Erro interno: {str(e)}")

@app.get("/records")
async def list_records():
    """Lista todos os registros"""
    try:
        conn = get_db_connection()
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        
        cursor.execute('SELECT * FROM video_records ORDER BY created_at DESC')
        records = cursor.fetchall()
        cursor.close()
        conn.close()
        
        return {
            "total": len(records),
            "records": [dict(record) for record in records]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao buscar registros: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    print("🎬 QR Code Video API")
    print("=" * 40)
    print("📡 API: http://localhost:8000")
    print("📚 Docs: http://localhost:8000/docs")
    print("⏹️  Ctrl+C para parar")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 