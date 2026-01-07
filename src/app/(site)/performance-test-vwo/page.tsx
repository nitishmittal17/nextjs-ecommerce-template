import Home from "@/components/Home";
import { Metadata } from "next";
import VWOScriptLoader from "@/components/Common/VWOScriptLoader";

export const metadata: Metadata = {
  title: "NextCommerce | Performance Test VWO Page",
  description: "Performance test page with VWO SmartCode",
};

export default function PerformanceTestVwoPage() {
  return (
    <>
      {/* VWO SmartCode - client-side loader to ensure it works in dev and production */}
      <VWOScriptLoader accountId="1162388" />

      <Home />
    </>
  );
}


