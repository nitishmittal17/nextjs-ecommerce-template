import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* begin Convert Experiences code */}
        <Script 
          src="//cdn-4.convertexperiments.com/v1/js/10017053-10017406.js?environment=production"
          strategy="afterInteractive"
        />
        {/* end Convert Experiences code */}
      </head>
      <body>{children}</body>
    </html>
  )
} 