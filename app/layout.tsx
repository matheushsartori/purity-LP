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
