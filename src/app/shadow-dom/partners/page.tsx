"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const partnerTypes = [
  {
    title: "Technology Partners",
    desc: "We collaborate with leading technology companies to deliver integrated solutions that extend the value of PTC products. Our technology alliances include partnerships with Microsoft, Rockwell Automation, Ansys, and more.",
    examples: ["Microsoft Azure", "Rockwell Automation", "Ansys", "SAP"],
  },
  {
    title: "Systems Integrators",
    desc: "Our global network of systems integrators helps customers plan, implement, and optimize their PTC deployments. These partners bring deep industry expertise and implementation best practices.",
    examples: ["Accenture", "Deloitte", "Capgemini", "Infosys"],
  },
  {
    title: "Reseller Partners",
    desc: "PTC works with authorized resellers worldwide to ensure customers receive local support, training, and services tailored to their specific regional and industry needs.",
    examples: ["Regional CAD/PLM Resellers", "Industry-Specific VARs", "Cloud Solution Partners"],
  },
  {
    title: "Startup Partners",
    desc: "PTC's Startup Program provides emerging companies access to world-class CAD, ALM, and PLM tools at reduced costs, helping them innovate and bring products to market faster.",
    examples: ["Aerospace Startups", "Medical Device Startups", "Hardware Startups"],
  },
];

export default function PartnersPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "Partners" }]} />

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner Ecosystem</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            PTC&apos;s extensive partner network provides customers flexibility in how
            technology is deployed and ensures access to world-class expertise
            and support.
          </p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {partnerTypes.map((pt, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-8 hover:border-[#00a651]/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3">{pt.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-5">{pt.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pt.examples.map((ex, exIdx) => (
                    <span
                      key={exIdx}
                      className="text-xs bg-[#00a651]/10 text-[#00a651] px-3 py-1 rounded-full border border-[#00a651]/20"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join our partner ecosystem and help customers accelerate their
            digital transformation journey.
          </p>
          <Link
            href="/shadow-dom/contact"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
