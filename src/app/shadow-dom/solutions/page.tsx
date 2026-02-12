"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const roles = [
  {
    title: "Engineering Transformation",
    desc: "Empower your engineering teams with modern CAD, simulation, and generative design tools to accelerate product creation and improve quality.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    title: "Manufacturing Excellence",
    desc: "Optimize manufacturing processes, reduce waste, and achieve first-time quality by connecting digital and physical workflows end-to-end.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Service Optimization",
    desc: "Transform service delivery with AI-powered field service management, predictive maintenance, and remote monitoring capabilities.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Enterprise Leadership",
    desc: "Drive digital transformation across your organization with a unified digital thread that connects product data from ideation to retirement.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
];

const industries = [
  "Aerospace & Defense",
  "Automotive",
  "Electronics & High-Tech",
  "Industrial Machinery",
  "Life Sciences",
  "Retail & Consumer Products",
  "Energy & Utilities",
  "Medical Devices",
];

export default function SolutionsPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "Solutions" }]} />

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Find solutions right for your role and industry. PTC helps
            manufacturers drive digital transformation across the entire product
            lifecycle.
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Solutions by Role</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-8 hover:border-[#00a651]/30 transition-colors"
              >
                <div className="w-12 h-12 bg-[#00a651]/10 rounded-lg flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-[#00a651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={role.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-gray-400 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-[#12122a] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Solutions by Industry</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f23] border border-white/5 rounded-xl p-6 text-center hover:border-[#00a651]/30 transition-colors"
              >
                <h3 className="font-semibold text-sm">{ind}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Committed to Your Success</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our customers rely on our best-in-class solutions, open software
            philosophy, extensive partner network, and deep industry expertise.
          </p>
          <Link
            href="/shadow-dom/case-studies"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
          >
            Explore Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}
