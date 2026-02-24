"use client";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import ESHeader from "@/components/EnergySage/ESHeader";
import ESFooter from "@/components/EnergySage/ESFooter";

export default function NuxtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ESHeader />
      <main
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/bg-landscape.png')" }}
      >
        {children}
      </main>
      <ESFooter />
    </>
  );
}
