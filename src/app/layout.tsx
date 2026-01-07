import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
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
        
        {children}
      </body>
    </html>
  )
}