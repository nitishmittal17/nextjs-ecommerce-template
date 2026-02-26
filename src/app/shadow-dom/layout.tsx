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
    <>
      {/* Navbar iframe - outside shadow DOM */}
      <div className="bg-[#1a1a2e] flex justify-center py-2">
        <iframe
          src="https://nextjs-ecommerce-template-five.vercel.app/"
          title="Navbar Embed"
          className="rounded"
          style={{
            width: 200,
            height: 36,
            border: "3px solid #001f5b",
          }}
        />
      </div>

      <ShadowDomWrapper
        header={<PTCHeader />}
        footer={<PTCFooter />}
      >
        <main className="min-h-screen bg-[#0f0f23]">{children}</main>
      </ShadowDomWrapper>

      {/* Body iframe - outside shadow DOM */}
      <div className="bg-[#0f0f23] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://nextjs-ecommerce-template-five.vercel.app/"
            title="Body Embed"
            className="w-full rounded-lg"
            style={{
              height: 400,
              border: "4px solid #001f5b",
            }}
          />
        </div>
      </div>
    </>
  );
}
