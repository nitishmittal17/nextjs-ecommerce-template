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
      <Home />
    </>
  );
}


