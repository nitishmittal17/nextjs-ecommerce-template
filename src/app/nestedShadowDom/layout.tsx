"use client";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import DLTHeader from "@/components/NestedShadowDom/DLTHeader";
import DLTFooter from "@/components/NestedShadowDom/DLTFooter";
import NestedShadowDomWrapper from "@/components/NestedShadowDom/NestedShadowDomWrapper";

export default function NestedShadowDomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Navbar iframe - outside shadow DOM */}
      <div className="bg-[#0d4a2a] flex justify-center py-2">
        <iframe
          src="https://nextjs-ecommerce-template-five.vercel.app/"
          title="Navbar Embed"
          className="rounded"
          style={{
            width: 200,
            height: 36,
            border: "3px solid #1a6b3c",
          }}
        />
      </div>

      <NestedShadowDomWrapper
        header={<DLTHeader />}
        footer={<DLTFooter />}
      >
        <main className="min-h-screen bg-[#0a3620]">{children}</main>
      </NestedShadowDomWrapper>

      {/* Body iframe - outside shadow DOM */}
      <div className="bg-[#0a3620] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://nextjs-ecommerce-template-five.vercel.app/"
            title="Body Embed"
            className="w-full rounded-lg"
            style={{
              height: 400,
              border: "4px solid #1a6b3c",
            }}
          />
        </div>
      </div>
    </>
  );
}
