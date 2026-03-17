"use client";
import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isPerformanceTestPage = pathname === '/performance-test-vwo';
  const isPerformanceTestVwoSyncPage = pathname === '/performance-test-vwo-sync';
  const isHomePage = pathname === '/';
  const isPerformanceTestAbTastyPage = pathname === '/performance-test-abtasty';
  const isReactPage = pathname.startsWith('/react');
  const isNuxtPage = pathname.startsWith('/nuxt');
  const isShadowDomPage = pathname.startsWith('/shadow-dom');

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
       
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TX3P729R');
            `
          }}
        />
          
        {/* Global performance timestamp - set before any test scripts load */}
        {(isPerformanceTestPage || isPerformanceTestVwoSyncPage || isHomePage || isPerformanceTestAbTastyPage) && (
          <Script
            id="performance-timestamp"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.perfTestStartTime = performance.now();`
            }}
          />
        )}

        {/* VWO SmartCode */}
        <script
          referrerPolicy="no-referrer-when-downgrade"
          src="https://dev.visualwebsiteoptimizer.com/tag/1209051.js"
          id="vwoCode"
        ></script>

        {/* AB Tasty script - for home page and performance test page */}
        {isHomePage && (
          <>
            <Script
              src="https://try.abtasty.com/81677aa3dd7b49d4a23ac9870dfee7ce.js"
              strategy="beforeInteractive"
            />

            
            <Script
              src="https://gs.wandzcdn.com/wandz/VWYFVT61MW.js"
              strategy="afterInteractive"
            />
          </>
        )}

        {isPerformanceTestAbTastyPage && (
          <Script
            src="https://try.abtasty.com/81677aa3dd7b49d4a23ac9870dfee7ce.js"
            strategy="beforeInteractive"
          />
        )}

        {/* AB Tasty script - for /react pages */}
        {isReactPage && (
          <Script
            id="abtasty-react"
            src="https://try.abtasty.com/81677aa3dd7b49d4a23ac9870dfee7ce.js"
            strategy="beforeInteractive"
          />
        )}

        {/* AB Tasty script - for /nuxt pages */}
        {isNuxtPage && (
          <Script
            id="abtasty-nuxt"
            src="https://try.abtasty.com/81677aa3dd7b49d4a23ac9870dfee7ce.js"
            strategy="beforeInteractive"
          />
        )}

        {/* AB Tasty script - for /shadow-dom pages */}
        {isShadowDomPage && (
          <Script
            id="abtasty-shadow-dom"
            src="https://try.abtasty.com/81677aa3dd7b49d4a23ac9870dfee7ce.js"
            strategy="beforeInteractive"
          />
        )}

        {/* begin Convert Experiences code */}
        {/* <Script 
          src="//cdn-4.convertexperiments.com/v1/js/10017288-10017622.js?environment=production"
          strategy="afterInteractive"
        /> */}
        {/* end Convert Experiences code */}
        
        {/* Start of Blitz client code snippet */}
        {/*<Script
          id="blitz-client"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var exports = { __esModule: true };
              window._blitzQueue = window._blitzQueue || [];
              function blitz() {
                _blitzQueue.push(arguments);
              }
              (function () {
                var a = document.createElement('script');
                a.type = 'text/javascript';
                a.async = !0;
                a.src = 'https://cdn.blitzllama.com/js/blitz.js';
                var b = document.getElementsByTagName('script')[0];
                b.parentNode.insertBefore(a, b);
              })();
              blitz('init', "key_BikEgtqV6Yw5gP7"); // Replace with your actual API_KEY
            `
          }}
        />
        {/* End of Blitz client code snippet */}
      </head>
      <body>{children}</body>
    </html>
  )
}
