import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Clínica Purity - Teste de Biorressonância do Terreno Biológico | Mapeamento Completo de Parasitas, Metais Pesados e Deficiências',
  description: 'Descubra parasitas, metais pesados, alimentos incompatíveis e deficiências nutricionais com apenas uma amostra de urina. Tecnologia de biorressonância com mais de 5.000 casos de sucesso. Atendimento em todo o Brasil.',
  keywords: 'teste biorressonância, parasitas intestinais, metais pesados, alimentos incompatíveis, deficiências nutricionais, terreno biológico, clínica purity, curitiba, saúde integrativa, medicina alternativa',
  authors: [{ name: 'Clínica Purity' }],
  creator: 'Clínica Purity',
  publisher: 'Clínica Purity',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.clinicapurity.com.br',
    siteName: 'Clínica Purity',
    title: 'Clínica Purity - Teste de Biorressonância do Terreno Biológico',
    description: 'Descubra parasitas, metais pesados, alimentos incompatíveis e deficiências nutricionais com apenas uma amostra de urina. Mais de 5.000 casos de sucesso.',
    images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Clínica Purity - Teste de Biorressonância',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@clinicapurity',
    creator: '@clinicapurity',
    title: 'Clínica Purity - Teste de Biorressonância do Terreno Biológico',
    description: 'Descubra parasitas, metais pesados, alimentos incompatíveis e deficiências nutricionais com apenas uma amostra de urina.',
    images: ['/images/logo.svg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://www.clinicapurity.com.br',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
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
        
        {/* Structured Data - JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Clínica Purity",
              "description": "Clínica especializada em testes de biorressonância do terreno biológico, mapeamento de parasitas, metais pesados e deficiências nutricionais",
              "url": "https://www.clinicapurity.com.br",
              "logo": "https://www.clinicapurity.com.br/images/logo.svg",
              "image": "https://www.clinicapurity.com.br/images/faixada-purity.png",
              "telephone": "+55-41-XXXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "addressCountry": "BR"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "R$ 300 - R$ 1200",
              "medicalSpecialty": "Medicina Integrativa",
              "availableService": [
                {
                  "@type": "MedicalTest",
                  "name": "Teste de Biorressonância do Terreno Biológico",
                  "description": "Mapeamento completo de parasitas, metais pesados, alimentos incompatíveis e deficiências nutricionais através de amostra de urina"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "5000",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Testes de Biorressonância",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "1 Teste de Biorressonância",
                      "description": "Ideal para uma pessoa"
                    },
                    "price": "300",
                    "priceCurrency": "BRL",
                    "availability": "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "2 Testes de Biorressonância",
                      "description": "Ideal para casal"
                    },
                    "price": "600",
                    "priceCurrency": "BRL",
                    "availability": "https://schema.org/InStock"
                  }
                ]
              }
            })
          }}
        />
        
        {children}
        <Script
          id="tracking-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (){
                function getUTMParams() {
                  var urlParams = new URLSearchParams(window.location.search);
                  var utmParams = {};
                  urlParams.forEach(function(value, key) {
                    if (key.startsWith('utm_')) {
                      utmParams[key] = value;
                    }
                  });
                  return utmParams;
                }
                function isExternal(link) {
                  try {
                    var url = new URL(link, window.location.origin);
                    return url.hostname !== window.location.hostname;
                  } catch (e) {
                    return false;
                  }
                }
                var utmParams = getUTMParams();
                var utmKeys = Object.keys(utmParams);
                if (utmKeys.length > 0) {
                  var links = document.querySelectorAll('a[href]');
                  for (var i = 0; i < links.length; i++) {
                    var href = links[i].getAttribute('href');
                    if (isExternal(href)) {
                      var url;
                      try {
                        url = new URL(href, window.location.origin);
                      } catch (e) {
                        continue;
                      }
                      // Adiciona/mescla os parâmetros UTM
                      utmKeys.forEach(function(key) {
                        url.searchParams.set(key, utmParams[key]);
                      });
                      links[i].setAttribute('href', url.toString());
                    }
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
