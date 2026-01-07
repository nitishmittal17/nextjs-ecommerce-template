"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { VWOScript } from "vwo-smartcode-nextjs";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();
  const isPerformanceTestPage = pathname === '/performance-test-vwo';
  const isHomePage = pathname === '/';
  const isPerformanceTestAbTastyPage = pathname === '/performance-test-abtasty';

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Global performance timestamp - set before any test scripts load */}
        {(isPerformanceTestPage || isHomePage || isPerformanceTestAbTastyPage) && (
          <Script
            id="performance-timestamp"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.perfTestStartTime = performance.now();`
            }}
          />
        )}

        {/* VWO Script - Only for performance-test-vwo page */}
        {isPerformanceTestPage && <VWOScript accountId="1162388" />}

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
      </head>
      <body>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <Header />
                    {children}

                    <QuickViewModal />
                    <CartSidebarModal />
                    <PreviewSliderModal />
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
            <ScrollToTop />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
