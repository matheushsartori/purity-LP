import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Página Purity'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PZD95P3');
            `,
          }}
        />
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZD95P3"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {children}
        <Script
          id="tracking-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (){
                var links = document.querySelectorAll('a[href*="pay.hotmart.com"]');
                var original = "";
                var sck = "";
                var novoLink = ""
                var arrURL = [];
                var rastreio = "{{utm_campaign}}|{{utm_source}}|{{utm_medium}}|{{utm_content}}|{{utm_term}}" //Valor que vai entrar no SCK lá na HOTMART

                if ("{{utm_medium}}" != "undefined"){ //Ele verifica se existe UTM na URL
                  for( var i = 0; i < links.length; i++){
                    console.log(1);
                    original = links[i].getAttribute("href");
                    sck = "sck=" + rastreio;
                    arrURL = original.split('?');
                   
                    if(arrURL.length == 1){
                      novoLink = original + "?" + sck;
                    }
                    else {
                      novoLink = arrURL[0] + "?" + sck + "&" + arrURL[1];
                    }
                   
                    links[i].setAttribute("href", novoLink)
                  }
                }
              })(); 
            `,
          }}
        />
      </body>
    </html>
  )
}
