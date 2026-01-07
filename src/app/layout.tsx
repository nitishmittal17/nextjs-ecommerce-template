'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { VWOScript } from 'vwo-smartcode-nextjs';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isPerformanceTestPage = pathname === '/performance-test-vwo';
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <head>
        {/* VWO Script - Only for performance-test-vwo page */}
        {isPerformanceTestPage && <VWOScript accountId="1162388" />}

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
        
        {/* AB Tasty and Wandz scripts - Only for home page */}
        {isHomePage && (
          <>
            {/* AB Tasty script 123 */}
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
      </head>
      <body>{children}</body>
    </html>
  )
}