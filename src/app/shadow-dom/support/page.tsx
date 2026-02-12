"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const supportOptions = [
  {
    title: "Knowledge Base",
    desc: "Search thousands of technical articles, troubleshooting guides, and best practice documentation for all PTC products.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Submit a Case",
    desc: "Open a support ticket for technical issues. Our global team of product experts is ready to help you resolve problems quickly.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Software Downloads",
    desc: "Access the latest versions, patches, and updates for all PTC software products from the secure download center.",
    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
  },
  {
    title: "Community Forums",
    desc: "Connect with PTC users worldwide. Ask questions, share solutions, and learn from the experiences of your peers.",
    icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
  },
  {
    title: "Release Notes",
    desc: "Stay informed about new features, improvements, and fixes in every PTC product release. Plan your upgrades confidently.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "System Requirements",
    desc: "Check hardware and software prerequisites for all PTC products. Ensure your environment is optimized for the best performance.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function SupportPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "Support" }]} />

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Portal</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Get the help you need. Access technical documentation, submit
            support cases, download software, and connect with the PTC community.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="pb-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#12122a] border border-white/5 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold mb-4">How can we help you?</h2>
            <div className="flex max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search knowledge base..."
                className="flex-1 bg-[#0f0f23] border border-white/10 rounded-l-lg px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00a651]/50"
              />
              <button className="bg-[#00a651] px-6 py-3 rounded-r-lg text-sm font-semibold hover:bg-[#008c44] transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportOptions.map((opt, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-6 hover:border-[#00a651]/30 transition-colors group"
              >
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#00a651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={opt.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#00a651] transition-colors">
                  {opt.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Can&apos;t Find What You Need?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our support team is available to help. Reach out to speak with a
            product expert.
          </p>
          <Link
            href="/shadow-dom/contact"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
}
