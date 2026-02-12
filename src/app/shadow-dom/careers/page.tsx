"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const departments = [
  {
    name: "Engineering",
    openings: 45,
    desc: "Build the software that powers digital transformation for the world's leading manufacturers.",
  },
  {
    name: "Product Management",
    openings: 12,
    desc: "Define the vision and strategy for products used by millions of engineers worldwide.",
  },
  {
    name: "Sales",
    openings: 28,
    desc: "Help customers find the right solutions to transform their product development processes.",
  },
  {
    name: "Customer Success",
    openings: 18,
    desc: "Ensure customers achieve maximum value from PTC solutions throughout their journey.",
  },
  {
    name: "Marketing",
    openings: 9,
    desc: "Tell the PTC story and help customers understand the power of digital transformation.",
  },
  {
    name: "Corporate Functions",
    openings: 15,
    desc: "Support the business through finance, legal, HR, IT, and other essential functions.",
  },
];

const benefits = [
  "Competitive compensation & equity",
  "Comprehensive health benefits",
  "Flexible work arrangements",
  "Professional development programs",
  "Generous PTO & parental leave",
  "401(k) matching",
  "Employee resource groups",
  "Community volunteer programs",
];

export default function CareersPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "Careers" }]} />

      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-72 h-72 bg-[#00a651]/8 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers at PTC</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Be part of a team that is changing the way the world designs,
            manufactures, and services products. We&apos;re always looking for
            talented people who are passionate about technology and innovation.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section className="bg-[#12122a] py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">Explore Departments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f23] border border-white/5 rounded-xl p-6 hover:border-[#00a651]/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{dept.name}</h3>
                  <span className="text-xs bg-[#00a651]/10 text-[#00a651] px-2.5 py-1 rounded-full font-semibold">
                    {dept.openings} open
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Benefits & Perks</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-5 flex items-start gap-3"
              >
                <svg className="w-5 h-5 text-[#00a651] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-gray-400 mb-8">Explore open positions and join the PTC team.</p>
          <Link
            href="/shadow-dom/contact"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
          >
            View All Openings
          </Link>
        </div>
      </section>
    </div>
  );
}
