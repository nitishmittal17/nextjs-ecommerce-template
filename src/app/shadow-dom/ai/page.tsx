"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const aiCapabilities = [
  {
    title: "Generative Design",
    desc: "AI automatically generates optimized design alternatives based on your constraints, materials, and manufacturing methods — accelerating the design process and uncovering innovative solutions.",
  },
  {
    title: "Predictive Maintenance",
    desc: "Leverage machine learning to analyze real-time and historical data from connected products, predicting failures before they happen and reducing unplanned downtime.",
  },
  {
    title: "Intelligent Search",
    desc: "AI-powered search across your entire product data repository helps engineers quickly find and reuse existing designs, reducing duplication and development time.",
  },
  {
    title: "Quality Prediction",
    desc: "Machine learning models identify quality risks early in the development cycle, enabling proactive decisions that prevent costly field failures.",
  },
  {
    title: "Service Optimization",
    desc: "AI analyzes service patterns, parts consumption, and technician performance to optimize scheduling, inventory, and first-time fix rates.",
  },
  {
    title: "Natural Language Interfaces",
    desc: "Interact with complex engineering tools through natural language, making sophisticated analysis and design exploration accessible to more team members.",
  },
];

export default function AIPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "AI at PTC" }]} />

      {/* Hero */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-80 h-80 bg-[#00a651]/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 bg-[#00a651]/10 text-[#00a651] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#00a651]/20">
            AI at PTC
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            AI is Fueling What&apos;s Possible in Product Development
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Built on a trusted product data foundation, and embedded in the
            tools and workflows customers already use every day — PTC&apos;s AI
            empowers customers to unlock more value across the entire product
            lifecycle.
          </p>
        </div>
      </section>

      {/* Two pillars */}
      <section className="bg-[#12122a] py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border border-white/5 rounded-xl p-8 bg-[#0f0f23]">
              <div className="w-14 h-14 bg-[#00a651]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#00a651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI for Engineering</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Unlock the full potential of your engineering data with AI.
                Years of product data are your advantage. AI leverages that
                foundation to streamline workflows, reduce errors, and
                accelerate development from concept to delivery — helping teams
                innovate with confidence.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#00a651] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Generative design and topology optimization
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#00a651] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent part and design reuse
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#00a651] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automated documentation and model-based definition
                </li>
              </ul>
            </div>

            <div className="border border-white/5 rounded-xl p-8 bg-[#0f0f23]">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI for Service</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Unlock the full potential of your service operations with AI.
                Years of service data are your advantage. AI turns that
                foundation into actionable insights — optimizing field
                performance, predicting issues before they occur, and empowering
                teams to deliver exceptional customer experiences.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Predictive maintenance and failure prevention
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-powered scheduling and dispatch optimization
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Intelligent knowledge management for technicians
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">AI Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-6 hover:border-[#00a651]/30 transition-colors"
              >
                <h3 className="text-lg font-bold mb-3">{cap.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore AI-Powered Product Development?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            See how PTC&apos;s AI capabilities can transform your engineering and service operations.
          </p>
          <Link
            href="/shadow-dom/contact"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
          >
            Contact an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
