"use client";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import PTCHeader from "@/components/PTC/PTCHeader";
import PTCFooter from "@/components/PTC/PTCFooter";
import ShadowDomWrapper from "@/components/PTC/ShadowDomWrapper";

export default function ShadowDomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ShadowDomWrapper>
      <PTCHeader />
      <main className="min-h-screen bg-[#0f0f23]">{children}</main>
      <PTCFooter />
    </ShadowDomWrapper>
  );
}
