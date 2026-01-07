import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCommerce | Performance Test VWO Sync Page",
  description: "Performance test page with VWO sync script",
};

export default function PerformanceTestVwoSyncPage() {
  return (
    <>
      <Home />
    </>
  );
}
