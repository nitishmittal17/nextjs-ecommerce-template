"use client";
import Link from "next/link";

const features = [
  {
    title: "Manage Product Complexity",
    desc: "Overcome product complexity with solutions for managing configurations and product variants, software and hardware requirements, technical documentation, and more.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z",
    href: "/shadow-dom/solutions",
  },
  {
    title: "Reduce Costs",
    desc: "Transform your product development processes with a digital foundation that minimizes friction and complexity while driving cost reductions across the enterprise value chain.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    href: "/shadow-dom/solutions",
  },
  {
    title: "Improve Product Quality",
    desc: "Exceed quality expectations with an enterprise-wide approach to quality management where everyone plays a role in driving continuous quality improvements.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    href: "/shadow-dom/solutions",
  },
  {
    title: "Drive Growth & Innovation",
    desc: "Innovate faster with a digital foundation that supports collaborative product development and concurrent work across the entire product lifecycle.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    href: "/shadow-dom/solutions",
  },
  {
    title: "Transform Customer Experience",
    desc: "Win over customers by differentiating your product and service offerings through software-driven innovation, streamlined product customization, and service optimization.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    href: "/shadow-dom/solutions",
  },
];

const brands = [
  "Aerospace & Defense",
  "Automotive",
  "Electronics & High-Tech",
  "Industrial Machinery",
  "Life Sciences",
  "Retail & Consumer",
];

export default function ShadowDomPage() {
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0f0f23]" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#00a651]/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[96px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <p className="inline-flex items-center gap-2 bg-[#00a651]/10 text-[#00a651] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#00a651]/20">
            AI at PTC
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            AI is Fueling What&apos;s Possible in{" "}
            <span className="text-[#00a651]">Product Development</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Built on a trusted product data foundation, and embedded in the
            tools and workflows customers already use every day — PTC&apos;s AI
            empowers customers to unlock more value across the entire product
            lifecycle.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shadow-dom/ai"
              className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
            >
              See How
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/shadow-dom/products"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded font-semibold hover:bg-white/5 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* AI For sections */}
      <section className="bg-[#12122a] py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI for Engineering */}
            <div className="bg-gradient-to-br from-[#1a1a3e] to-[#1a1a2e] border border-white/5 rounded-xl p-8 hover:border-[#00a651]/30 transition-colors group">
              <div className="w-12 h-12 bg-[#00a651]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#00a651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI for Engineering</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Years of product data are your advantage. AI leverages that
                foundation to streamline workflows, reduce errors, and accelerate
                development from concept to delivery.
              </p>
              <Link href="/shadow-dom/ai" className="text-[#00a651] text-sm font-semibold hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* AI for Service */}
            <div className="bg-gradient-to-br from-[#1a1a3e] to-[#1a1a2e] border border-white/5 rounded-xl p-8 hover:border-[#00a651]/30 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI for Service</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Years of service data are your advantage. AI turns that
                foundation into actionable insights — optimizing field
                performance, predicting issues before they occur.
              </p>
              <Link href="/shadow-dom/ai" className="text-blue-400 text-sm font-semibold hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#00a651] mb-8">Featured News</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#12122a] border border-white/5 rounded-xl overflow-hidden group hover:border-[#00a651]/30 transition-colors">
              <div className="h-48 bg-gradient-to-br from-[#1a1a3e] to-[#2a2a4e] flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Report</span>
                <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-[#00a651] transition-colors">PTC Named Outright Leader for Enterprise PLM</h3>
                <p className="text-sm text-gray-400">Independent analysis recognizes PTC as a leading provider of product lifecycle management solutions.</p>
              </div>
            </div>
            <div className="bg-[#12122a] border border-white/5 rounded-xl overflow-hidden group hover:border-[#00a651]/30 transition-colors">
              <div className="h-48 bg-gradient-to-br from-[#1a1a3e] to-[#2a2a4e] flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Featured News</span>
                <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-[#00a651] transition-colors">Enterprise ALM Accelerates the Pace of Innovation</h3>
                <p className="text-sm text-gray-400">See how application lifecycle management drives faster product delivery and collaboration.</p>
              </div>
            </div>
            <div className="bg-[#12122a] border border-white/5 rounded-xl overflow-hidden group hover:border-[#00a651]/30 transition-colors">
              <div className="h-48 bg-gradient-to-br from-[#1a1a3e] to-[#2a2a4e] flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Featured News</span>
                <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-[#00a651] transition-colors">PTC Launches ServiceMax AI</h3>
                <p className="text-sm text-gray-400">AI-powered field service management to optimize and predict maintenance operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliver More Value */}
      <section className="bg-[#12122a] py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deliver More Value Through Your Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              With PTC solutions, you can reduce product development friction
              and complexity, creating downstream benefits that improve quality,
              boost revenue, and accelerate innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <Link
                key={idx}
                href={feat.href}
                className="bg-[#0f0f23] border border-white/5 rounded-xl p-6 hover:border-[#00a651]/30 transition-all group"
              >
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#00a651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#00a651] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Thread */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1a1a3e] to-[#12122a] border border-white/5 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Digital Thread: Essential Enabler of Digital Transformation
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                At PTC, we understand the value of product data and, when used
                strategically, the business opportunities it makes possible
                across the value chain.
              </p>
              <Link
                href="/shadow-dom/digital-thread"
                className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
              >
                Explore Digital Thread
              </Link>
            </div>
            <div className="flex-shrink-0 w-full md:w-80 h-56 bg-gradient-to-br from-[#00a651]/10 to-blue-500/5 rounded-xl flex items-center justify-center">
              <svg className="w-24 h-24 text-[#00a651]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-[#12122a] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Brands You Rely On, Rely on PTC
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            You can&apos;t go a single day without encountering a product engineered,
            manufactured, or serviced with PTC software.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f23] border border-white/5 rounded-lg px-4 py-6 flex items-center justify-center hover:border-[#00a651]/20 transition-colors"
              >
                <span className="text-xs text-gray-400 font-medium tracking-wide text-center">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Can We Help You?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            From support and training to expert consultation, we&apos;re here to
            help you succeed.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Support Portal", href: "/shadow-dom/support", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
              { label: "Contact Expert", href: "/shadow-dom/contact", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
              { label: "Training & Skills", href: "/shadow-dom/training", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { label: "Join Community", href: "/shadow-dom/partners", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-[#12122a] border border-white/5 rounded-xl p-6 hover:border-[#00a651]/30 transition-all text-center group"
              >
                <div className="w-10 h-10 bg-[#00a651]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-[#00a651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <span className="text-sm font-semibold group-hover:text-[#00a651] transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
