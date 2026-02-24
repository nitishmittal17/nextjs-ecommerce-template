"use client";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import GrooveHeader from "@/components/Groove/GrooveHeader";
import GrooveFooter from "@/components/Groove/GrooveFooter";

export default function ReactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GrooveHeader />
      <main
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/bg-landscape.png')" }}
      >
        {children}
      </main>
      <GrooveFooter />
    </>
  );
}
