import Home from "@/components/Home";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NextCommerce | Nextjs E-commerce template (Async)",
  description: "This is Home for NextCommerce Template with Async AB Tasty",
  // other metadata
};

export default function HomeAsyncPage() {
  return (
    <>
      {/* AB Tasty Async Script */}
      <Script
        id="abtasty-async"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (i, s, o, g, r, a, m) {
              i["abtiming"] = 1 * new Date();
              a = s.createElement(o),
              m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, "script", "//try.abtasty.com/81677aa3dd7b49d4a23ac9870dfee7ce.js");
          `
        }}
      />
      <Home />
    </>
  );
}
