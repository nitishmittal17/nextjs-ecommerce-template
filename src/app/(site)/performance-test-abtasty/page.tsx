import Home from "@/components/Home";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "NextCommerce | Performance Test AB Tasty Page",
  description: "Performance test page with AB Tasty sync script",
};

export default function PerformanceTestAbTastyPage() {
  return (
    <>
      {/* AB Tasty sync script - using both next/script and direct injection for reliability */}
      <Script
        src="https://try.abtasty.com/81677aa3dd7b49d4a23ac9870dfee7ce.js"
        strategy="beforeInteractive"
      />

      <Home />
    </>
  );
}


