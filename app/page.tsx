import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Users,
  MapPin,
  Phone,
  Mail,
  Star,
  ArrowRight,
  FileText,
  Activity,
  Stethoscope,
} from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teste de Biorressonância - Mapeie Parasitas, Metais Pesados e Deficiências | Clínica Purity',
  description: 'Descubra com precisão parasitas intestinais, metais pesados, alimentos incompatíveis e deficiências nutricionais em apenas 7 dias. Mais de 5.000 casos de sucesso. Atendimento nacional.',
  keywords: 'teste biorressonância, parasitas intestinais, giardia, candida albicans, metais pesados, mercúrio, chumbo, alumínio, alimentos incompatíveis, deficiências vitaminas, minerais, terreno biológico',
  openGraph: {
    title: 'Teste de Biorressonância - Descubra a Causa dos Seus Sintomas',
    description: 'Com apenas uma amostra de urina, mapeamos parasitas, metais pesados, alimentos incompatíveis e deficiências. Tecnologia de biorressonância com 5.000+ casos de sucesso.',
    images: [
      {
        url: '/images/testes.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipamento de Teste de Biorressonância da Clínica Purity',
      },
    ],
  },
}

export default function LandingPage() {
  return (
    <>
      {/* Google Tag Manager */}
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
      
      <div className="min-h-screen bg-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZD95P3"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="container mx-auto px-4 py-6 flex items-center justify-center">
            <div className="flex items-center justify-center">
              <Image src="/images/logo.svg" alt="Clínica Purity - Testes de Biorressonância e Terreno Biológico" height={80} width={250} />
            </div>
          </div>
        </header>

        {/* 1ª Seção - Hero */}
        <section className="bg-[#f4f2ea] py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#244545] mb-8 leading-tight">
              Teste de Mapeamento do
              <br />
              Terreno Biológico
            </h1>
            <p className="text-xl text-gray-700  max-w-5xl mx-auto leading-relaxed font-light">
              Com apenas sua amostra de urina, conseguimos mapear{" "}
              <span className="font-semibold text-[#244545]">parasitas (vermes, vírus, fungos e bactérias)</span>, metais
              pesados, alimentos incompatíveis, deficiência de vitaminas e minerais, órgãos entrando em processo de
              adoecimento.
            </p>
          </div>
        </section>

        {/* 2ª Seção - Credibilidade */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#244545] mb-16 leading-tight">
              Somos a maior referência em
              <br />
              Testes de Biorressonância do Brasil
            </h2>

            {/* Espaço para imagem acima dos cards */}
            <div className="mb-16">
              <Image
                src="/images/lair2.png"
                alt="Clínica Purity - Maior referência em testes de biorressonância do Brasil"
                width={800}
                height={300}
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">

                <Card className="border border-gray-200 hover:border-[#d9b975]/50 transition-colors bg-white shadow-sm">
                  <CardHeader className="pb-6 pt-8">
                    <Activity className="h-16 w-16 text-[#d9b975] mx-auto mb-6" />
                    <CardTitle className="text-4xl font-bold text-[#244545] mb-2">1.000</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">Testes por Mês</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border border-gray-200 hover:border-[#d9b975]/50 transition-colors bg-white shadow-sm">
                  <CardHeader className="pb-6 pt-8">
                    <Users className="h-16 w-16 text-[#d9b975] mx-auto mb-6" />
                    <CardTitle className="text-4xl font-bold text-[#244545] mb-2">5.000</CardTitle>
                    <CardDescription className="text-gray-600 text-lg">Pessoas Tratadas</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 3ª Seção - O Que Mapeamos */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#244545] mb-8 leading-tight">
                Com apenas a sua amostra de urina,
                <br />
                conseguimos mapear:
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card className="border border-gray-200 hover:border-[#d9b975]/50 transition-colors bg-white shadow-sm p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#d9b975] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#244545] mb-2">
                          Parasitas (Vermes, Vírus, Fungos e Bactérias)
                        </h3>
                        <p className="text-gray-600">
                          Identificamos todos os tipos de parasitas que podem estar causando seus sintomas
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="border border-gray-200 hover:border-[#d9b975]/50 transition-colors bg-white shadow-sm p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#d9b975] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#244545] mb-2">
                          Metais Pesados e Toxinas Ambientais
                        </h3>
                        <p className="text-gray-600">
                          Detectamos acúmulo de metais pesados e toxinas que intoxicam seu organismo
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="border border-gray-200 hover:border-[#d9b975]/50 transition-colors bg-white shadow-sm p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#d9b975] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#244545] mb-2">
                          Alimentos incompatíveis
                        </h3>
                        <p className="text-gray-600">
                          Mapeamos quais alimentos estão causando inflamação no seu corpo
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="border border-gray-200 hover:border-[#d9b975]/50 transition-colors bg-white shadow-sm p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#d9b975] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#244545] mb-2">
                          Deficiência de Vitaminas e Minerais
                        </h3>
                        <p className="text-gray-600">
                          Identificamos exatamente quais nutrientes seu corpo precisa
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="border border-gray-200 hover:border-[#d9b975]/50 transition-colors bg-white shadow-sm p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-[#d9b975] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#244545] mb-2">
                          Órgãos vibrando na frequência de adoecimento
                        </h3>
                        <p className="text-gray-600">
                          Detectamos órgãos em processo de desequilíbrio antes dos sintomas aparecerem
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Isso é possível através da <span className="font-semibold text-[#244545]">tecnologia de biorressonância</span>, onde reagimos a energia celular contida na sua amostra biológica (urina), com cada um dos testadores abaixo:
              </p>
            </div>

            {/* Espaço para foto do teste */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-12 max-w-2xl mx-auto">
                <Image
                    src="/images/testes.jpg"
                    alt="Equipamento de Teste de Biorressonância"
                    width={600}
                    height={300}
                    className="mx-auto rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-4 italic">
                  Equipamento de Biorressonância utilizado nos testes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3ª Seção - Como Funciona */}
        <section className="py-20 bg-[#f4f2ea]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#244545] mb-16">
              Veja todos os itens que analisamos no teste.
            </h2>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Parasitas (Vermes)
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">• 1 – Giardia Lamblia:</p>
                        <p className="ml-4">Sintomas: Diarreia, flatulência, desconforto abdominal, náusea.</p>
                        <p className="ml-4">Doença: Giardíase, desnutrição e desidratação em casos graves.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 2 – Entamoeba histolytica:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, diarreia (por vezes com sangue), febre.</p>
                        <p className="ml-4">Doença: Amebíase, Abscesso hepático amebiano e colite grave.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 3 – Entamoeba Gingivalis:</p>
                        <p className="ml-4">
                          Sintomas: Geralmente não causa sintomas, mas está associada a doença periodontal.
                        </p>
                        <p className="ml-4">Doença: Problemas periodontais.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 4 – Enterobius Vermicularis:</p>
                        <p className="ml-4">Sintomas: Coceira anal intensa, desconforto abdominal, insônia.</p>
                        <p className="ml-4">Doença: Oxiuríase e Complicações como apendicite e infecções secundárias.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 5 – Eurytrema Pancreaticum:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, náusea, possível perda de peso.</p>
                        <p className="ml-4">Doença: Pancreatite crônica e obstrução do ducto pancreático.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 6 – Fasciola Burski:</p>
                        <p className="ml-4">
                          Sintomas: Dor abdominal, náusea, vômito, febre, urticária, erupções cutâneas, perda de peso,
                          indigestão, mal-estar e fadiga.
                        </p>
                        <p className="ml-4">Doença: Colangite, cirrose hepática e obstrução biliar.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 7 – Strongyloides Stercoralis:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, diarreia, tosse, erupções cutâneas.</p>
                        <p className="ml-4">Doença: Estrongiloidíase.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 8 – Clonorchis Sinensis:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, febre, icterícia.</p>
                        <p className="ml-4">Doença: Clonorquíase (Câncer de ducto biliar).</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 9 – Necator Americanus:</p>
                        <p className="ml-4">Sintomas: Anemia, perda de apetite, dor abdominal.</p>
                        <p className="ml-4">Doença: Ancilostomíase.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 10 – Ancylostoma Duodenale:</p>
                        <p className="ml-4">Sintomas: Anemia, dor abdominal, perda de peso.</p>
                        <p className="ml-4">Doença: Ancilostomíase.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 11 – Schistosoma Mansoni:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, diarreia com sangue, problemas hepáticos.</p>
                        <p className="ml-4">
                          Doença: Esquistossomose, Fibrose hepática, hipertensão portal e câncer de bexiga.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 12 – Trichinella Spiralis:</p>
                        <p className="ml-4">Sintomas: Dor muscular, febre, edema facial, problemas gastrointestinais.</p>
                        <p className="ml-4">Doença: Triquinose, Miocardite, encefalite e complicações pulmonares.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 13 – Toxoplasma Gondii:</p>
                        <p className="ml-4">
                          Sintomas: Geralmente assintomático, mas pode causar problemas em imunocomprometidos e gestantes.
                        </p>
                        <p className="ml-4">Doença: Toxoplasmose, complicações raras de obstrução intestinal.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 14 – Taenia Saginata:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, perda de peso, distúrbios digestivos.</p>
                        <p className="ml-4">Doença: Teníase.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 15 – Taenia Solium:</p>
                        <p className="ml-4">Sintomas: Sintomas gastrointestinais; larvas podem causar cisticercose.</p>
                        <p className="ml-4">
                          Doença: Teníase, cisticercose e neurocisticercose, que pode causar epilepsia e outros problemas
                          neurológicos.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 16 – Endolimax Nana:</p>
                        <p className="ml-4">Sintomas: Geralmente assintomático.</p>
                        <p className="ml-4">Doença: Raramente causa doenças.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 17 – Ascaris Lumbricoides:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, perda de apetite, presença de vermes nas fezes.</p>
                        <p className="ml-4">Doença: Ascaridíase, obstrução intestinal e complicações biliares.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 18 – Diphyllobothrium Latum:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, diarreia, deficiência de vitamina B12.</p>
                        <p className="ml-4">
                          Doença: Difilobotríase e Anemia megaloblástica devido à deficiência de vitamina B12.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 19 – Hymenolepis Nana:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, diarreia, inquietação.</p>
                        <p className="ml-4">Doença: Himenolepíase.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 20 – Fasciola Hepática:</p>
                        <p className="ml-4">
                          Sintomas: Dor abdominal, icterícia, fadiga, perda de peso e distúrbios digestivos.
                        </p>
                        <p className="ml-4">
                          Doenças: Fasciolíase hepática, obstrução biliar, colangite, e, em casos graves, cirrose
                          hepática.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Bactérias
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">• 1 – Chlamydia Trachomatis:</p>
                        <p className="ml-4">Sintomas: Muitas vezes assintomática, dor ao urinar, corrimento genital.</p>
                        <p className="ml-4">Doenças: Infecções genitais, tracoma, linfogranuloma venéreo.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 2 – Gardnerella Vaginalis:</p>
                        <p className="ml-4">Sintomas: Corrimento vaginal com odor desagradável, irritação vaginal.</p>
                        <p className="ml-4">Doenças: Vaginose bacteriana.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 3 – Helicobacter Pylori:</p>
                        <p className="ml-4">Sintomas: Dor abdominal, náusea, perda de apetite, inchaço.</p>
                        <p className="ml-4">Doenças: Úlceras gástricas, gastrite crônica, câncer de estômago.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 4 – Mycoplasma:</p>
                        <p className="ml-4">Sintomas: Tosse, febre, dor de cabeça, dor no peito, dor de garganta.</p>
                        <p className="ml-4">Doenças: Pneumonia por Mycoplasma, infecções genitais.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 5 – Streptococcus (Grupo MTS):</p>
                        <p className="ml-4">Sintomas: Dor de garganta, febre, manchas vermelhas na pele.</p>
                        <p className="ml-4">Doenças: Faringite estreptocócica, febre reumática e glomerulonefrite.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 6 – Escherichia Coli:</p>
                        <p className="ml-4">Sintomas: Diarreia (por vezes sanguinolenta), cólicas abdominais, náusea.</p>
                        <p className="ml-4">Doenças: Infecções gastrointestinais, infecções urinárias.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 7 – Enterococcus Gallinarum:</p>
                        <p className="ml-4">Sintomas: Febre e sinais de infecção em casos graves.</p>
                        <p className="ml-4">Doenças: Endocardite, infecções urinárias, bacteremia.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 8 – Mycobacterium (assumindo Tuberculose):</p>
                        <p className="ml-4">Sintomas: Tosse persistente, febre, perda de peso, suores noturnos.</p>
                        <p className="ml-4">Doenças: Tuberculose.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 9 – Borrelia Burgdorferi:</p>
                        <p className="ml-4">
                          Sintomas: Eritema migratório, febre, fadiga, dores musculares e articulares.
                        </p>
                        <p className="ml-4">Doenças: Doença de Lyme.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 10 – Clostridium Botulinum:</p>
                        <p className="ml-4">
                          Sintomas: Fraqueza muscular, visão turva, dificuldade em falar e engolir, paralisia.
                        </p>
                        <p className="ml-4">Doenças: Botulismo.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 11 – Proteus Mirabilis:</p>
                        <p className="ml-4">Sintomas: Dor ao urinar, urgência urinária, febre.</p>
                        <p className="ml-4">Doenças: Infecções do trato urinário, formação de cálculos renais.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 12 – Salmonella:</p>
                        <p className="ml-4">Sintomas: Diarréia, febre, cólicas abdominais.</p>
                        <p className="ml-4">Doenças: Salmonelose, febre tifóide (algumas espécies).</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 13 – Shigella spp:</p>
                        <p className="ml-4">Sintomas: Diarreia (frequentemente com sangue), febre, cólicas abdominais.</p>
                        <p className="ml-4">Doenças: Disenteria por Shigella.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 14 – Staphylococcus Aureus:</p>
                        <p className="ml-4">Sintomas: Infecções na pele, febre, pus em feridas.</p>
                        <p className="ml-4">
                          Doenças: Infecções de pele, pneumonia, intoxicação alimentar, síndrome do choque tóxico.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 15 – Streptococcus pyogenes:</p>
                        <p className="ml-4">
                          Sintomas: Dor de garganta, febre, manchas vermelhas na pele, dor de cabeça.
                        </p>
                        <p className="ml-4">Doenças: Faringite estreptocócica, febre reumática, escarlatina.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Vírus
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">• Herpes Zoster:</p>
                        <p className="ml-4">
                          Sintomas: Erupção cutânea dolorosa e vesicular, geralmente em um lado do corpo, febre, dor de
                          cabeça, fadiga.
                        </p>
                        <p className="ml-4">Doenças: Zoster ou "cobreiro", neuralgia pós-herpética.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• Herpes Tipo 1 e 2:</p>
                        <p className="ml-4">Sintomas: Bolhas dolorosas na boca ou genitais, coceira, dor ao urinar.</p>
                        <p className="ml-4">Doenças: Herpes labial (HSV-1), herpes genital (HSV-2).</p>
                      </div>

                      <div>
                        <p className="font-semibold">• HPV (Papilomavírus Humano):</p>
                        <p className="ml-4">
                          Sintomas: Muitas vezes assintomático; verrugas genitais ou na pele em alguns casos.
                        </p>
                        <p className="ml-4">
                          Doenças: Verrugas genitais, câncer cervical, câncer anal, câncer de garganta.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• Dengue:</p>
                        <p className="ml-4">
                          Sintomas: Febre alta, dor de cabeça severa, dor atrás dos olhos, dores nas articulações e
                          músculos, fadiga, erupção cutânea.
                        </p>
                        <p className="ml-4">Doenças: Dengue, dengue hemorrágica.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• Zika:</p>
                        <p className="ml-4">
                          Sintomas: Febre baixa, erupção cutânea, conjuntivite, dor nas articulações, mal-estar.
                        </p>
                        <p className="ml-4">Doenças: Zika, complicações na gravidez como microcefalia em fetos.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• Chikungunya:</p>
                        <p className="ml-4">
                          Sintomas: Febre, dor intensa nas articulações, erupção cutânea, dores musculares, fadiga.
                        </p>
                        <p className="ml-4">Doenças: Chikungunya, dor crônica nas articulações.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• Citomegalovírus (CMV):</p>
                        <p className="ml-4">
                          Sintomas: Febre, fadiga, dor de garganta, inchaço das glândulas em casos sintomáticos.
                        </p>
                        <p className="ml-4">
                          Doenças: Mononucleose CMV, complicações em imunocomprometidos e recém-nascidos.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• H1N1 (Influenza A):</p>
                        <p className="ml-4">
                          Sintomas: Febre, tosse, dor de garganta, dores no corpo, fadiga, algumas vezes vômitos e
                          diarreia.
                        </p>
                        <p className="ml-4">Doenças: Gripe H1N1, pneumonia viral e complicações respiratórias.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• Vírus Epstein-Barr (EBV):</p>
                        <p className="ml-4">
                          Sintomas: Febre, dor de garganta, fadiga, inchaço dos gânglios linfáticos, esplenomegalia.
                        </p>
                        <p className="ml-4">
                          Doenças: Mononucleose infecciosa, associada a certos tipos de câncer, como linfoma de Hodgkin.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• COVID-19 (SARS-CoV-2):</p>
                        <p className="ml-4">
                          Sintomas: Febre, tosse seca, fadiga, perda do olfato e paladar, dificuldade respiratória.
                        </p>
                        <p className="ml-4">
                          Doenças: COVID-19, complicações como pneumonia, síndrome inflamatória multissistêmica, problemas
                          cardíacos e pulmonares a longo prazo.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Fungos
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">• 1 – Candida Albicans:</p>
                        <p className="ml-4">
                          Sintomas: Infecções fúngicas como coceira, vermelhidão, inchaço, corrimento branco (em casos de
                          candidíase vaginal), placas brancas na boca (sapinho).
                        </p>
                        <p className="ml-4">
                          Doenças: Candidíase (afetando áreas como a boca, pele, unhas, órgãos genitais) e, em casos
                          graves, candidemia ou infecção sistêmica.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 2 – Aspergillus Niger:</p>
                        <p className="ml-4">
                          Sintomas: Problemas respiratórios, tosse, febre, dor no peito, dificuldade para respirar.
                        </p>
                        <p className="ml-4">
                          Doenças: Aspergilose (incluindo aspergilose pulmonar e sinusite aspergilar), otomicose (infecção
                          do ouvido).
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 3 – Trichophyton Mentagrophytes:</p>
                        <p className="ml-4">
                          Sintomas: Coceira, vermelhidão, descamação da pele, bolhas, anéis de bordas elevadas na pele.
                        </p>
                        <p className="ml-4">
                          Doenças: Tinha (infecção fúngica da pele, cabelo e unhas), pé de atleta, tinea cruris.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 4 – Muco Racemosus:</p>
                        <p className="ml-4">Sintomas: Problemas respiratórios, congestão nasal, inchaço facial, febre.</p>
                        <p className="ml-4">
                          Doenças: Mucormicose (infecção fúngica rara, mas grave, que pode afetar os seios nasais,
                          pulmões, pele e cérebro).
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 5 – Candida Glabrata:</p>
                        <p className="ml-4">
                          Sintomas: Semelhantes aos da Candida albicans, mas geralmente menos intensos; infecções
                          vaginais, urinárias, da boca ou da pele.
                        </p>
                        <p className="ml-4">
                          Doenças: Candidíase, especialmente infecções urinárias e genitais, e, em casos graves, infecção
                          sistêmica.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Metais Pesados e Toxinas Ambientais
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">• 1 – Cloro:</p>
                        <p className="ml-4">
                          Sintomas de exposição: Irritação nas vias respiratórias, tosse, dificuldade de respirar, dor no
                          peito e irritação nos olhos. A exposição cutânea pode causar irritação e queimaduras.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Pneumonite (inflamação dos pulmões) e bronquite crônica em exposições
                          prolongadas ou altas concentrações.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 2 – Flúor:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Ingestão excessiva pode levar à fluorose dental (manchas nos dentes) e
                          óssea (dores articulares e rigidez).
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Fluorose esquelética crônica em casos de ingestão crônica e excessiva.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 3 – Platina:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Irritação da pele, olhos e trato respiratório. Alergias de pele também
                          são comuns.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Dermatite alérgica e possíveis efeitos carcinogênicos em exposições a longo
                          prazo.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 4 – Chumbo:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Cansaço, dor abdominal, constipação, anemia, problemas neurológicos e, em
                          crianças, problemas de desenvolvimento.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Encefalopatia por chumbo, insuficiência renal, hipertensão e infertilidade
                          em exposições crônicas.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 5 – Níquel:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Dermatite de contato, asma induzida por níquel, alergias cutâneas.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Câncer de pulmão e nasal em exposições prolongadas e em altas concentrações.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 6 – Bário:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Dificuldade respiratória, aumento da pressão arterial, dores de estômago,
                          fraqueza muscular, alterações no coração.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Toxicidade por bário pode levar a problemas graves de saúde, como arritmias
                          cardíacas e falência renal em casos extremos.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 7 – Mercúrio:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Tremores, insônia, perda de memória, dores de cabeça, alterações na visão
                          e audição, e danos neurológicos.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Minamata (neurotoxicidade grave), perturbações cognitivas e motoras, danos
                          renais.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 8 – Alumínio:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Confusão, fraqueza muscular, dores nos ossos, convulsões em casos de alta
                          exposição.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Suspeita-se de relação com a doença de Alzheimer, problemas ósseos e anemia.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 9 – Titânio:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Geralmente considerado não-tóxico, mas pode causar irritação respiratória
                          se inalado como pó.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Não conhecidas por causar doenças significativas em sua forma metálica.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 10 – Estanho:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Dor de cabeça, febre, fadiga, suores noturnos, problemas respiratórios.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Inflamação dos pulmões em casos de inalação prolongada, doença de Wilson se
                          acumulado no organismo.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 11 – Tálio:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Perda de cabelo, neuropatias, fraqueza muscular, dores abdominais,
                          problemas de visão.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Toxicidade aguda pode levar a danos graves ao sistema nervoso e renal, e até
                          a morte.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 12 – Estrôncio:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: O estrôncio natural não é considerado tóxico, mas o estrôncio radioativo
                          pode causar câncer.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Câncer ósseo e leucemia devido à exposição ao estrôncio radioativo.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 13 – Berílio:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Irritação dos olhos, pele e vias respiratórias, dificuldade para
                          respirar.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Beriliose (doença pulmonar crônica) e possível risco de câncer.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 14 – Bismuto:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Náuseas, diarreia, descoloração da pele e unhas, em casos raros,
                          neurotoxicidade.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Toxicidade renal e hepática em casos de exposição excessiva.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 15 – Arsênico:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Lesões de pele, neuropatia periférica, náuseas, vômitos, diarreia.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Câncer de pele, bexiga e pulmão, doenças cardiovasculares, diabetes.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 16 – Cádmio:</p>
                        <p className="ml-4">Sintomas de Exposição: Problemas respiratórios, dor óssea, danos aos rins.</p>
                        <p className="ml-4">Doenças Potenciais: Câncer de pulmão, osteoporose, doença renal.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 17 – Urânio:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Danos aos rins, problemas respiratórios quando inalado.
                        </p>
                        <p className="ml-4">Doenças Potenciais: Nefrotoxicidade, riscos potenciais de câncer.</p>
                      </div>

                      <div>
                        <p className="font-semibold">• 18 – Tório:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Principalmente associado com exposição radioativa; pode aumentar o risco
                          de câncer.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Câncer de pulmão, pâncreas e outros órgãos com exposição a material
                          radioativo.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 19 – Prata:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Argiria (descoloração azulada da pele) em exposições crônicas.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Efeitos gerais são considerados baixos, mas a argiria é permanente.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 20 – Antimônio:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Irritação dos olhos e pele, problemas gastrointestinais, tosse.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Problemas pulmonares, cardiotoxicidade em exposições elevadas.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 21 – Sílicio:</p>
                        <p className="ml-4">Sintomas de Exposição: Tosse, falta de ar, perda de peso.</p>
                        <p className="ml-4">
                          Doenças Potenciais: Silicose, câncer de pulmão, doenças pulmonares obstrutivas crônicas.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 22 – Enxofre:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Irritação dos olhos, pele e vias respiratórias, especialmente na forma de
                          dióxido de enxofre.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Problemas respiratórios crônicos, como bronquite, em exposições prolongadas.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 23 – Geopatia:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: A geopatia não é reconhecida como uma causa científica de doença, mas
                          alega-se que pode causar insônia, fadiga e dores de cabeça.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Alguns afirmam que pode levar a doenças crônicas, mas falta evidência
                          científica.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 24 – Poluição Eletromagnética:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Dores de cabeça, ansiedade, insônia, fadiga, dificuldades de
                          concentração.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Estudos ainda são inconclusivos, mas preocupações incluem possíveis efeitos
                          carcinogênicos.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 25 – Trialometanos:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Podem incluir irritação da pele e dos olhos após natação em piscinas
                          tratadas com cloro.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Preocupações com riscos de câncer, particularmente câncer de bexiga, com
                          exposição prolongada.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 26 – Dioxina (BPCs):</p>
                        <p className="ml-4">Sintomas de Exposição: Lesões de pele (cloracne), alterações no fígado.</p>
                        <p className="ml-4">
                          Doenças Potenciais: Aumento do risco de câncer, problemas reprodutivos e desenvolvimento,
                          efeitos no sistema imunológico, efeitos neurotóxicos.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 27 – Solventes:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Dor de cabeça, tontura, náusea, irritação nos olhos e pele.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Danos ao sistema nervoso, fígado e rins, problemas respiratórios, potencial
                          carcinogênico.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 28 – Ftalatos:</p>
                        <p className="ml-4">Sintomas de Exposição: Podem afetar o sistema endócrino.</p>
                        <p className="ml-4">
                          Doenças Potenciais: Distúrbios reprodutivos, impactos no desenvolvimento infantil, potenciais
                          efeitos carcinogênicos.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 29 – Bisfenol A (BPA):</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Potencial perturbador endócrino, pode afetar a função hormonal.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Problemas reprodutivos, alterações no desenvolvimento infantil, possíveis
                          efeitos no sistema nervoso.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 30 – Pesticidas:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Náusea, vômito, dor de cabeça, tontura, irritação nos olhos e pele.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Problemas neurológicos, câncer, distúrbios reprodutivos e hormonais.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 31 – Agrotóxicos:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Semelhantes aos dos pesticidas, incluem problemas respiratórios,
                          irritações na pele e olhos, problemas gastrointestinais.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Risco aumentado de câncer, efeitos neurotóxicos, distúrbios hormonais.
                        </p>
                      </div>

                      <div>
                        <p className="font-semibold">• 32 – Focos Dentários:</p>
                        <p className="ml-4">
                          Sintomas de Exposição: Dor ou desconforto na área afetada. Contudo, a ideia de que focos
                          dentários causam doenças sistêmicas é controversa e não amplamente aceita na odontologia
                          moderna.
                        </p>
                        <p className="ml-4">
                          Doenças Potenciais: Teorias alternativas sugerem que podem contribuir para doenças crônicas, mas
                          falta evidência científica robusta.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Vitaminas e Minerais
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <div className="space-y-2">
                      <p>• Magnésio</p>
                      <p>• Zinco</p>
                      <p>• Iodo</p>
                      <p>• Selênio</p>
                      <p>• Cromo</p>
                      <p>• Ferro</p>
                      <p>• Cálcio</p>
                      <p>• Cobre</p>
                      <p>• Vanádio</p>
                      <p>• Manganês</p>
                      <p>• Vitamina D3</p>
                      <p>• Vitamina A</p>
                      <p>• Vitamina E</p>
                      <p>• Vitamina C</p>
                      <p>• Lipossomal</p>
                      <p>• Vitamina K2</p>
                      <p>• Vitamina B1</p>
                      <p>• Vitamina B2</p>
                      <p>• Vitamina B3</p>
                      <p>• Vitamina B5</p>
                      <p>• Biotina</p>
                      <p>• Vitamina B6</p>
                      <p>• Vitamina B9</p>
                      <p>• Vitamina B12</p>
                      <p>• Pool de Lactobacilos</p>
                      <p>• Coenzima Q10</p>
                      <p>• Ômega 3</p>
                      <p>• Creatina</p>
                      <p>• Spirulina</p>
                      <p>• Pool de Aminoácidos</p>
                      <p>• Colágeno</p>
                      <p>• Própolis</p>
                      <p>• Chlorella</p>
                      <p>• Glutamina</p>
                      <p>• Ornitina</p>
                      <p>• Glicina</p>
                    </div>
                    <p className="mt-4">
                      Identificamos carências nutricionais que podem estar na raiz dos seus sintomas.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Alimentos incompatíveis
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <div className="space-y-2">
                      <p>• 1 – Carne Vermelha</p>
                      <p>• 2 – Peixe</p>
                      <p>• 3 – Brócolis</p>
                      <p>• 4 – Leites e Derivados</p>
                      <p>• 5 – Amendoim</p>
                      <p>• 6 – Tomate</p>
                      <p>• 7 – Álcool</p>
                      <p>• 8 – Beterraba</p>
                      <p>• 9 – Ovo</p>
                      <p>• 10 – Frango Caipira</p>
                      <p>• 11 – Milho</p>
                      <p>• 12 – Soja</p>
                      <p>• 13 – Trigo</p>
                      <p>• 14 – Frutas Vermelhas</p>
                      <p>• 15 – Feijão</p>
                      <p>• 16 – Café</p>
                      <p>• 17 – Alho</p>
                      <p>• 18 – Arroz</p>
                      <p>• 19 – Camarão</p>
                      <p>• 20 – Suíno</p>
                      <p>• 21 – Couve Flor</p>
                      <p>• 22 – Cebola</p>
                      <p>• 23 – Nuts</p>
                      <p>• 24 – Frango</p>
                      <p>• 25 – Fibras e Sementes</p>
                      <p>• 26 – Açúcar Mascavo</p>
                      <p>• 27 – Adoçante Aspartame</p>
                      <p>• 28 – Amêndoa</p>
                      <p>• 29 – Azeitona</p>
                      <p>• 30 – Batata Doce</p>
                      <p>• 31 – Castanha do Pará</p>
                      <p>• 32 – Chá Verde</p>
                      <p>• 33 – Fermentos</p>
                      <p>• 34 – Glúten</p>
                      <p>• 35 – Limão</p>
                      <p>• 36 – Laranja</p>
                      <p>• 37 – Mel</p>
                      <p>• 38 – Verduras Cruas</p>
                      <p>• 39 – Cogumelos</p>
                      <p>• 40 – Mandioca</p>
                      <p>• 41 – Inhame</p>
                      <p>• 42 – Banana</p>
                      <p>• 43 – Maçã</p>
                    </div>
                    <p className="mt-4">
                      Estes alimentos podem causar inflamação no seu organismo e estar prejudicando sua saúde.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Órgãos
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <div className="space-y-2">
                      <p>• Pulmão</p>
                      <p>• Coração</p>
                      <p>• Tireoide</p>
                      <p>• Digestão</p>
                      <p>• Fígado</p>
                      <p>• Intestino Delgado</p>
                      <p>• Intestino Grosso</p>
                      <p>• Vesícula</p>
                      <p>• Baço/Pâncreas</p>
                      <p>• Osso</p>
                      <p>• Pele</p>
                      <p>• Útero</p>
                      <p>• Ovário</p>
                      <p>• Próstata</p>
                      <p>• Mental</p>
                      <p>• Vagina</p>
                      <p>• Testículo</p>
                      <p>• Bexiga</p>
                      <p>• Rim</p>
                      <p>• Artérias</p>
                      <p>• Hipófise</p>
                      <p>• Hipotálamo</p>
                      <p>• Ouvido</p>
                      <p>• Visão</p>
                      <p>• Linfa</p>
                      <p>• Pineal</p>
                      <p>• Glândulas mamárias</p>
                    </div>
                    <p className="mt-4">
                      A tecnologia de biorressonância detecta alterações na frequência energética destes órgãos e
                      sistemas, permitindo identificar desequilíbrios antes mesmo que apareçam em exames convencionais.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* 5ª Seção - Casos de Sucesso */}
        <section className="py-20 bg-[#f4f2ea]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#244545] mb-6">
                Mais de 5.000 Casos de Sucesso
                <br />
                de Pacientes da Clínica Purity
              </h2>
              <p className="text-xl text-gray-600 font-light">Veja abaixo alguns deles</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Caso André */}
              <Card className="border border-gray-200 bg-white shadow-lg">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#d9b975] text-[#d9b975]" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-[#244545] font-bold">
                    ANDRÉ - 15 Anos de Sofrimento Resolvidos em 3 Meses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-3 text-sm uppercase tracking-wide">ANTES:</h4>
                    <ul className="text-sm space-y-2 text-red-700">
                      <li>• Insônia crônica há 15 anos</li>
                      <li>• Barriga estufada constantemente</li>
                      <li>• Gases que causavam constrangimento</li>
                      <li>• Cansaço extremo mesmo dormindo</li>
                      <li>• 7 médicos consultados, todos os exames "normais"</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-3 text-sm uppercase tracking-wide">
                      NO TESTE DESCOBRIMOS:
                    </h4>
                    <ul className="text-sm space-y-2 text-blue-700">
                      <li>• Giardia + 2 outros parasitas intestinais</li>
                      <li>• Intolerância a glúten, lactose E aveia</li>
                      <li>• Deficiência severa de magnésio e vitamina D</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-800 mb-3 text-sm uppercase tracking-wide">
                      PROTOCOLO APLICADO:
                    </h4>
                    <ul className="text-sm space-y-2 text-yellow-700">
                      <li>• Antiparasitário específico para os 3 parasitas</li>
                      <li>• Eliminação dos 3 alimentos incompatíveis</li>
                      <li>• Suplementação direcionada de magnésio e vitamina D</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-[#527769]">
                    <h4 className="font-semibold text-[#244545] mb-3 text-sm uppercase tracking-wide">
                      RESULTADO EM 3 MESES:
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#527769] mr-2 flex-shrink-0" />
                        <span className="text-[#244545]">Voltou a dormir 8 horas corridas</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#527769] mr-2 flex-shrink-0" />
                        <span className="text-[#244545]">Eliminou gases e inchaço 100%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#527769] mr-2 flex-shrink-0" />
                        <span className="text-[#244545]">Recuperou energia para trabalhar e se exercitar</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#527769] mr-2 flex-shrink-0" />
                        <span className="text-[#244545]">Não precisa mais de NENHUM remédio</span>
                      </li>
                    </ul>
                  </div>

                  <blockquote className="italic text-[#244545] border-l-4 border-[#d9b975] pl-6 bg-[#d9b975]/5 p-4 rounded-r-lg">
                    "Pela primeira vez em 15 anos, sei exatamente o que estava errado e como resolver. Minha vida mudou
                    completamente." - André, 42 anos
                  </blockquote>
                </CardContent>
              </Card>

              {/* Caso Luciara */}
              <Card className="border border-gray-200 bg-white shadow-lg">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#d9b975] text-[#d9b975]" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-[#244545] font-bold">LUCIARA - Salvou o Rim que Restava</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <h4 className="font-semibold text-red-800 mb-3 text-sm uppercase tracking-wide">ANTES:</h4>
                    <ul className="text-sm space-y-2 text-red-700">
                      <li>• Dores no corpo que ninguém explicava</li>
                      <li>• Ansiedade severa com crises diárias</li>
                      <li>• Azia constante há 8 anos</li>
                      <li>• Formação de pedras nos rins - PERDEU UM RIM</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-3 text-sm uppercase tracking-wide">
                      NO TESTE DESCOBRIMOS:
                    </h4>
                    <ul className="text-sm space-y-2 text-blue-700">
                      <li>• Intoxicação por mercúrio (obturações) e alumínio</li>
                      <li>• Candidíase intestinal severa há anos</li>
                      <li>• Deficiência crítica de magnésio (previne pedras nos rins)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-semibold text-yellow-800 mb-3 text-sm uppercase tracking-wide">
                      PROTOCOLO APLICADO:
                    </h4>
                    <ul className="text-sm space-y-2 text-yellow-700">
                      <li>• Quelação específica de metais pesados</li>
                      <li>• Antifúngico natural para candidíase</li>
                      <li>• Megadose de magnésio + complexo B</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-[#527769]">
                    <h4 className="font-semibold text-[#244545] mb-3 text-sm uppercase tracking-wide">
                      RESULTADO EM 6 MESES:
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#527769] mr-2 flex-shrink-0" />
                        <span className="text-[#244545]">Dores no corpo desapareceram 100%</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#527769] mr-2 flex-shrink-0" />
                        <span className="text-[#244545]">Ansiedade controlada sem medicação</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#527769] mr-2 flex-shrink-0" />
                        <span className="text-[#244545]">Não formou mais NENHUMA pedra no rim</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-[#527769] mr-2 flex-shrink-0" />
                        <span className="text-[#244545]">Azia eliminada completamente</span>
                      </li>
                    </ul>
                  </div>

                  <blockquote className="italic text-[#244545] border-l-4 border-[#d9b975] pl-6 bg-[#d9b975]/5 p-4 rounded-r-lg">
                    "Se eu tivesse feito esse teste há 10 anos, ainda teria meus dois rins." - Luciara, 48 anos
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 6ª Seção - Atendimento Nacional */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#244545] mb-6">
                Faça o teste de qualquer
                <br />
                Lugar do Brasil
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Coluna da Esquerda - Informações */}
                <div className="space-y-8">
                  <div className="bg-[#f4f2ea] p-8 rounded-xl border-l-4 border-[#d9b975]">
                    <div className="flex items-start space-x-4 mb-6">
                      <MapPin className="h-8 w-8 text-[#d9b975] mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-semibold text-[#244545] mb-3">
                          Nossa clínica fica localizada em Curitiba, Paraná
                        </h3>
                        <p className="text-gray-600 text-lg">
                          Mas atendemos milhares de clientes em todo o Brasil através do nosso sistema de envio.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-[#244545]">Como funciona o processo:</h4>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-[#244545] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium text-[#244545]">Adquira o teste</p>
                          <p className="text-gray-600 text-sm">Após a compra, enviamos as instruções detalhadas</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-[#244545] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium text-[#244545]">Colete a amostra</p>
                          <p className="text-gray-600 text-sm">10ml de urina em frasco esterilizado</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-[#244545] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium text-[#244545]">Envie para nossa clínica</p>
                          <p className="text-gray-600 text-sm">Seguindo nosso protocolo de envio seguro</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="bg-[#244545] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <p className="font-medium text-[#244545]">Receba seus resultados</p>
                          <p className="text-gray-600 text-sm">Em até 7 dias úteis com consulta incluída</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coluna da Direita - Destaque e Imagem */}
                <div className="space-y-8">
                  <div className="bg-[#244545] text-white p-8 rounded-xl">
                    <h4 className="text-xl font-bold mb-6 text-[#d9b975]">Por que conseguimos atender todo o Brasil?</h4>

                    <div className="space-y-4 text-sm">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#d9b975] mt-0.5 flex-shrink-0" />
                        <p>A temperatura não interfere no resultado do teste</p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#d9b975] mt-0.5 flex-shrink-0" />
                        <p>O tempo de coleta não altera a frequência celular</p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#d9b975] mt-0.5 flex-shrink-0" />
                        <p>Protocolo seguro de envio desenvolvido especialmente</p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#d9b975] mt-0.5 flex-shrink-0" />
                        <p>Análise baseada na frequência celular, não em componentes químicos</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-[#d9b975]/10 rounded-lg border border-[#d9b975]/20">
                      <p className="text-[#d9b975] font-medium text-center">
                        "Você pode fazer o teste de qualquer cidade do Brasil com total segurança e confiabilidade!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7ª Seção - Prazo de Resultado */}
        <section className="py-20 bg-[#f4f2ea]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#244545] mb-16">RECEBA SEU RESULTADO EM ATÉ 7 DIAS</h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-xl text-gray-600 leading-relaxed">
                Após a chegada da amostra de urina em nosso laboratório, nós faremos o seu teste e entregaremos seu
                resultado em até 7 dias úteis.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed">
              Você participará de uma reunião para interpretar o resultado do teste e apresentar o plano de tratamento personalizado para você conseguir se livrar dos sintomas não diagnosticados que você sofre há anos.
              </p>
            </div>
          </div>
        </section>

        {/* 8ª Seção - O Que Você Recebe */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#244545] mb-16">O Que Você Recebe:</h2>

            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-[#d9b975]/30 bg-white shadow-lg mb-12">
                <CardHeader className="pb-6 pt-8">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-12 w-12 text-[#d9b975]" />
                    <div>
                      <CardTitle className="text-2xl text-[#244545]">RELATÓRIO COMPLETO (12-15 páginas)</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#527769] mt-0.5 flex-shrink-0" />
                        <span className="text-[#244545]">Lista de TODOS os parasitas identificados <br />
                          (Vermes, Vírus, Fungos e Bactérias)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#527769] mt-0.5 flex-shrink-0" />
                        <span className="text-[#244545]">Metais pesados e toxinas ambientais identificadas</span>
                      </li>
                    </ul>
                    <ul className="space-y-4">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#527769] mt-0.5 flex-shrink-0" />
                        <span className="text-[#244545]">Lista de alimentos incompatíveis</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#527769] mt-0.5 flex-shrink-0" />
                        <span className="text-[#244545]">Deficiências nutricionais detalhadas</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#527769] mt-0.5 flex-shrink-0" />
                        <span className="text-[#244545]">Órgãos que estão entrando em processo de adoecimento</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-4 gap-6 ">
                {[
                  {
                    step: "1",
                    title: "Coleta 10ml de urina em frasco esterilizado",
                  },
                  {
                    step: "2",
                    title: "Envia para nossa clínica",
                  },
                  {
                    step: "3",
                    title: "Recebe resultado em 7 dias úteis",
                  },
                  {
                    step: "4",
                    title: "Reunião para interpretação do resultado",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="border border-gray-200 hover:border-[#d9b975]/50 transition-colors bg-white shadow-sm"
                  >
                    <CardHeader className="pb-6 pt-8">
                      <div className="bg-[#244545] text-white rounded-lg px-4 py-3 flex items-center justify-center mx-auto mb-6 min-w-fit">
                        <span className="font-bold text-sm whitespace-nowrap">PASSO {item.step}</span>
                      </div>
                      <CardTitle className="text-sm text-[#244545] text-center leading-tight">{item.title}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* 9ª Seção - Preços */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-4xl font-bold text-[#244545] mb-36 uppercase tracking-wide">
              Encerra em breve: 50% de desconto nos Testes de Biorressonância
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* 4 Testes - Melhor valor */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center relative shadow-sm">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-500 text-white text-md font-bold px-6 py-3 rounded">Melhor valor</span>
                </div>

                <h3 className="text-teal-600 font-bold text-base mb-4 text-center mt-4">4 Testes com 50% de Desconto</h3>

                <div className="mb-4 h-24 w-full flex items-center justify-center">
                  <Image
                      src="/images/4.png"
                      alt="4 Testes de Biorressonância"
                      width={300}
                      height={300}
                      className="object-contain max-w-full max-h-full"
                  />
                </div>

                <p className="text-gray-600 text-sm mb-4 text-center">Ideal para casal e dois filhos</p>

                <div className="mb-4 text-center">
                  <div className="mb-1">
                    <span className="line-through text-red-500 text-sm">R$2.400,00</span>
                    <span className="text-gray-600 text-sm"> por</span>
                  </div>
                  <div className="text-teal-600">
                    <span className="text-lg font-bold">12x </span>
                    <span className="text-3xl font-bold">R$ 122,87</span>
                  </div>
                </div>
                <a href="https://pay.hotmart.com/D91865763J?xcod=1750769386971&off=icjnsuz5&checkoutMode=10&_hi=eyJjaWQiOiIxNzUwNzY5Mzg4NjYxNzA2NzI2MDk5NDgzMDIyMTAwIiwiYmlkIjoiMTc1MDc2OTM4ODY2MTcwNjcyNjA5OTQ4MzAyMjEwMCIsInNpZCI6ImI1ZTkzNzliYWY1ZTRlZjlhOWM0NTYwZGI4ZGJjNmQyIn0=.1751133261112&bid=1712754473790&">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-md w-full mb-3">
                    QUERO 4 TESTES
                  </Button>
                </a>
                <span className="text-green-600 text-sm font-medium italic mb-2">70% esgotado</span>
                <span className="text-gray-500 text-xs">ECONOMIZE R$1.200,00 REAIS</span>
              </div>

              {/* 3 Testes - Mais popular */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center relative shadow-sm">

                <h3 className="text-teal-600 font-bold text-base mb-4 text-center mt-4">3 Testes com 50% de Desconto</h3>

                <div className="mb-4 h-24 w-full flex items-center justify-center">
                  <Image
                      src="/images/3.png"
                      alt="3 Testes de Biorressonância"
                      width={300}
                      height={300}
                      className="object-contain max-w-full max-h-full"
                  />
                </div>

                <p className="text-gray-600 text-sm mb-4 text-center">Ideal para casal e um filho</p>

                <div className="mb-4 text-center">
                  <div className="mb-1">
                    <span className="line-through text-red-500 text-sm">R$1.800,00</span>
                    <span className="text-gray-600 text-sm"> por</span>
                  </div>
                  <div className="text-teal-600">
                    <span className="text-lg font-bold">12x </span>
                    <span className="text-3xl font-bold">R$ 92,15</span>
                  </div>
                </div>
                <a href="https://pay.hotmart.com/D91865763J?xcod=1750769386971&off=2fdvfojk&checkoutMode=10&_hi=eyJjaWQiOiIxNzUwNzY5Mzg4NjYxNzA2NzI2MDk5NDgzMDIyMTAwIiwiYmlkIjoiMTc1MDc2OTM4ODY2MTcwNjcyNjA5OTQ4MzAyMjEwMCIsInNpZCI6ImI1ZTkzNzliYWY1ZTRlZjlhOWM0NTYwZGI4ZGJjNmQyIn0=.1751133260455&bid=1712754473025&">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-md w-full mb-3">
                    QUERO 3 TESTES
                  </Button>
                </a>
                <span className="text-green-600 text-sm font-medium italic mb-2">70% esgotado</span>
                <span className="text-gray-500 text-xs">ECONOMIZE R$900,00 REAIS</span>
              </div>

              {/* 2 Testes */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center relative shadow-sm">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-500 text-white text-md font-bold px-6 py-3 rounded">Mais popular</span>
                </div>
                <h3 className="text-teal-600 font-bold text-base mb-4 text-center mt-4">2 Testes com 50% de Desconto</h3>

                <div className="mb-4 h-24 w-full flex items-center justify-center">
                  <Image
                      src="/images/2.png"
                      alt="2 Testes de Biorressonância"
                      width={300}
                      height={300}
                      className="object-contain max-w-full max-h-full"
                  />
                </div>

                <p className="text-gray-600 text-sm mb-4 text-center">Ideal para casal</p>

                <div className="mb-4 text-center">
                  <div className="mb-1">
                    <span className="line-through text-red-500 text-sm">R$1.200,00</span>
                    <span className="text-gray-600 text-sm"> por</span>
                  </div>
                  <div className="text-teal-600">
                    <span className="text-lg font-bold">12x </span>
                    <span className="text-3xl font-bold">R$ 61,43</span>
                  </div>
                </div>
                <a href="https://pay.hotmart.com/D91865763J?xcod=1750769386971&off=5x0600mn&checkoutMode=10&_hi=eyJjaWQiOiIxNzUwNzY5Mzg4NjYxNzA2NzI2MDk5NDgzMDIyMTAwIiwiYmlkIjoiMTc1MDc2OTM4ODY2MTcwNjcyNjA5OTQ4MzAyMjEwMCIsInNpZCI6ImI1ZTkzNzliYWY1ZTRlZjlhOWM0NTYwZGI4ZGJjNmQyIn0=.1751133259780&bid=1712754472437&">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-md w-full mb-3">
                  QUERO 2 TESTES
                </Button>
                </a>
                <span className="text-green-600 text-sm font-medium italic mb-2">70% esgotado</span>
                <span className="text-gray-500 text-xs">ECONOMIZE R$600,00 REAIS</span>
              </div>

              {/* 1 Teste */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col items-center shadow-sm">
                <h3 className="text-teal-600 font-bold text-base mb-4 text-center mt-4">1 Teste com 50% de Desconto</h3>

                <div className="mb-4 h-24 w-full flex items-center justify-center">
                  <Image
                      src="/images/1.png"
                      alt="1 Teste de Biorressonância"
                      width={300}
                      height={300}
                      className="object-contain max-w-full max-h-full"
                  />
                </div>

                <p className="text-gray-600 text-sm mb-4 text-center">Ideal para uma pessoa</p>

                <div className="mb-4 text-center">
                  <div className="mb-1">
                    <span className="line-through text-red-500 text-sm">R$600,00</span>
                    <span className="text-gray-600 text-sm"> por</span>
                  </div>
                  <div className="text-teal-600">
                    <span className="text-lg font-bold">12x </span>
                    <span className="text-3xl font-bold">R$ 30,72</span>
                  </div>
                </div>
                <a href="https://pay.hotmart.com/D91865763J?xcod=1750769386971&off=yi9mb289&checkoutMode=10&_hi=eyJjaWQiOiIxNzUwNzY5Mzg4NjYxNzA2NzI2MDk5NDgzMDIyMTAwIiwiYmlkIjoiMTc1MDc2OTM4ODY2MTcwNjcyNjA5OTQ4MzAyMjEwMCIsInNpZCI6ImI1ZTkzNzliYWY1ZTRlZjlhOWM0NTYwZGI4ZGJjNmQyIn0=.1751133259197&bid=1712754472437&">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-md w-full mb-3">
                    QUERO 1 TESTE
                  </Button>
                </a>
                <span className="text-green-600 text-sm font-medium italic mb-2">70% esgotado</span>
                <span className="text-gray-500 text-xs">ECONOMIZE R$300,00 REAIS</span>
              </div>
            </div>
          </div>
        </section>


        {/* 10ª Seção - Sobre a Clínica */}
        <section className="py-20 bg-[#f4f2ea]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#244545] mb-8">Clínica Purity</h2>
                <Image
                  src="/images/faixada-purity.png"
                  alt="Fachada da Clínica Purity em Curitiba - Especialista em Biorressonância"
                  width={800}
                  height={400}
                  className="mx-auto rounded-lg shadow-lg mb-12"
                />
              </div>

              <div className="space-y-8 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  A Clínica Purity de Nutrição Integrada foca na Biorregulação do Terreno Biológico dos pacientes.
                </p>

                <p className="text-lg">
                  Entendemos que todo processo de cura deve se iniciar na biorregulação do Terreno Biológico porque, ao
                  equilibrar esse terreno, fortalecemos as defesas naturais do corpo contra agentes patogênicos como
                  parasitas, fungos, vírus e bactérias, além de reduzir a carga de toxinas ambientais.
                </p>

                <p className="text-lg">
                  Este processo de limpeza e fortalecimento do terreno biológico é essencial, conforme destacado pelas
                  pesquisas de Hulda Clark, para criar um ambiente menos propício ao adoecimento.
                </p>

                <p className="text-lg">
                  Acreditamos que, ao remover esses agentes externos e minimizar sua influência, há uma grande chance de
                  reverter os problemas de saúde crônicos e evitar o surgimento de doenças.
                </p>

                <p className="text-lg">
                  Pois, ao limpar o terreno biológico, proporcionamos ao seu corpo a capacidade de se "auto-curar".
                </p>

                <div className="text-center">
                  <p className="font-semibold text-[#244545] text-xl">
                    Somos referência em testes de biorressonância e tratamento do terreno biológico, com milhares de
                    clientes já atendidos dentro e fora do Brasil!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11ª Seção - Depoimentos */}
        <section className="py-20 bg-[#f4f2ea]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#244545] mb-16">
              O que dizem sobre nós?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  nome: "Meire",
                  foto: "/images/meire.png",
                  depoimento:
                    "Estava há 2 anos indo de medico em medico tentando descobrir o motivo das minhas alergias, para entender o meu desespero, até como sarna eu fui tratada. Um dos alimentos que eu descobri que sou incompatível e que eu comia todos os dias era ovo, brócolis e o alho que usava em tudo. Também descobri através desse teste que eu tinha várias intoxicações por metais pesados (cloro, mercúrio, alumínio, etc) e parasitas."
                },
                {
                  nome: "Rozi",
                  foto: "/images/rozi.png",
                  depoimento:
                    "A vida toda com má digestão e muitos gases, intestino preso, dor de cabeça, insônia, dor crônica. Já havia retirado o glúten, lactose, açúcar para melhorar a minha saúde. Mas com o teste de biorresonancia descobri que existem vários alimentos saudáveis que me fazem muito mal. Cebola, maça, laranja, limão. Descobri também que tenho flúor e mercúrio muito alto no meu organismo e parasitas como taxoplasma que está ligado com dor de cabeça e a insônia."
                },
                {
                  nome: "Luciana",
                  foto: "/images/luciana.png",
                  depoimento:
                    "Pareceu um raio x da minha vida ! Todos os meus sintomas estão relacionados a algum tipo de contaminação ou falta de nutriente, etc...por isso não fico equilibrada nunca ! Tomo um monte de vitamina e...nada ! A Dra. me explicou tudo. e não vejo a hora de iniciar o tratamento para ter mais saúde e acabar com minha obesidade!"
                },
                {
                  nome: "Suzana",
                  foto: "/images/suzana.png",
                  depoimento:
                    "Eu vi pelo Instagram e achei interessante. Eu ando com vários problemas de saúde. Nós vamos no médico, eles pedem vários exames, mas não conseguem ver ao certo o que está causando o meu problema de saúde. A gente vai tratando e nada resolver. Quando vi no Instagram a Dra. explicando sobre o teste, resolvi tentar. No meu resultado constou muitos metais pesados e parasitas que estão atrapalhando o meu sistema digestivo."
                },              
                {
                  nome: "Roberta",
                  foto: "/images/roberta.png",
                  depoimento:
                    "Foi interessante saber os alimentos que tenho incompatibilidade e o nome dos vermes... era o exame que eu estava buscando e não encontrava. Fiquei feliz quando apareceu para mim no Insta"
                },
                {
                  nome: "Fabiola",
                  foto: "/images/fabiola.png",
                  depoimento:
                    "Gostei muito! O resultado aponta de forma precisa quais são os elementos que estão prejudicando a minha saúde. Uma coisa nova e inovadora para mim. A Dra. foi muito atenciosa e me explicou direitinho."
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col gap-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                      <Image src={item.foto} alt={item.nome} width={64} height={64} />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-2xl text-[#244545] leading-tight">{item.nome}</span>
                      <span className="text-gray-500 text-base -mt-1 mb-1">Paciente Clínica Purity</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[#d9b975] text-[#d9b975]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-700 text-lg leading-relaxed text-left">{item.depoimento}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12ª Seção - FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#244545] mb-16">
              Perguntas Frequentes
            </h2>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="faq-1" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Onde a clínica fica localizada?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p>
                      A nossa clínica fica localizada em Curitiba, no Paraná.
                    </p>
                    <p className="mt-2">
                      Entretanto, atendemos pessoas do Brasil inteiro.
                    </p>
                    <p className="mt-2">
                      Você, da sua cidade, pode fazer o envio para a nossa clínica sem preocupações.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Moro em outro estado. Posso fazer o teste?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p>
                      Sim! Temos milhares de clientes do Brasil.
                    </p>
                    <p className="mt-2">
                      Você faz o envio da sua amostra de urina para nossa clínica.
                    </p>
                    <p className="mt-2">
                      Após a chegada, em até 7 dias úteis entregamos uma devolutiva com os resultados.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    O tempo de envio pode afetar na qualidade ou na temperatura?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p>
                      Diferente dos exames tradicionais onde o prazo de coleta e a temperatura são importantes, esses fatores não tem relevância para o teste de biorressonância.
                    </p>
                    <p className="mt-2">
                      O que é analisado no teste de biorressonância é a frequência celular contida na urina. Essa frequência celular não é alterada durante meses e nem alterada com a temperatura.
                    </p>
                    <p className="mt-2">
                      Portanto, o prazo de envio e a temperatura não vão alterar em nada o resultado.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4" className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#244545] hover:no-underline">
                    Como eu recebo a devolutiva?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    <p>
                      Após a chegada da sua amostra de urina em nossa clínica, o seu teste é finalizado em até 7 dias úteis.
                    </p>
                    <p className="mt-2">
                      Assim que seu teste estiver pronto, nossos profissionais entrarão em contato com você para marcar uma vídeo-chamada para fazer a devolutiva.
                    </p>
                    <p className="mt-2">
                      Ao invés de te entregarmos apenas um PDF por email ou pelo Whatsapp, nós preferimos fazer a entrega em uma vídeo-chamada para esclarecer suas dúvidas e propor soluções para o que foi apresentado no exame.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
