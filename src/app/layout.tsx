"use client";
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { VWOScript } from 'vwo-smartcode-nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const vwoAccountId = searchParams.get('id');
  const isPerformanceTestPage = pathname === '/performance-test-vwo';
  const isPerformanceTestVwoSyncPage = pathname === '/performance-test-vwo-sync';
  const isHomePage = pathname === '/';
  const isPerformanceTestAbTastyPage = pathname === '/performance-test-abtasty';

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
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

        {/* VWO Script - for performance-test-vwo page (async) */}
        {isPerformanceTestPage && <VWOScript accountId="1162388" />}

        {/* VWO Script - for home page with id query param */}
        {isHomePage && vwoAccountId && <VWOScript accountId={vwoAccountId} />}

        {/* VWO Script - for performance-test-vwo-sync page (sync) */}
        {isPerformanceTestVwoSyncPage && <VWOScript accountId="1162388" type="SYNC" />}

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