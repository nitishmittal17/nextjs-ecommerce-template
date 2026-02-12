"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const threadStages = [
  {
    title: "Design & Engineering",
    desc: "Create and iterate on product designs with full traceability from requirements to 3D models using Creo and Onshape.",
  },
  {
    title: "Lifecycle Management",
    desc: "Manage BOMs, change processes, and configurations across the entire product lifecycle with Windchill and Arena.",
  },
  {
    title: "Manufacturing",
    desc: "Connect engineering data to manufacturing processes, ensuring accurate work instructions and tooling information flow downstream.",
  },
  {
    title: "Quality & Compliance",
    desc: "Embed quality management throughout the lifecycle, with closed-loop traceability from requirements through testing and field performance.",
  },
  {
    title: "Service & Maintenance",
    desc: "Deliver rich, up-to-date product information to service teams through AR experiences and connected field service tools.",
  },
  {
    title: "Analytics & Optimization",
    desc: "Capture real-world product performance data via IoT and feed insights back into the design process for continuous improvement.",
  },
];

export default function DigitalThreadPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "Digital Thread" }]} />

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Digital Thread: Essential Enabler of Digital Transformation
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            At PTC, we understand the value of product data and, when used
            strategically, the business opportunities it makes possible across
            the value chain. The digital thread connects data across the product
            lifecycle, creating a single source of truth.
          </p>
        </div>
      </section>

      {/* Visual */}
      <section className="bg-[#12122a] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col gap-0">
            {threadStages.map((stage, idx) => (
              <div key={idx} className="flex items-start gap-6 relative group">
                {/* Timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 bg-[#00a651] rounded-full flex items-center justify-center text-sm font-bold z-10">
                    {idx + 1}
                  </div>
                  {idx < threadStages.length - 1 && (
                    <div className="w-0.5 h-full bg-[#00a651]/20 min-h-[60px]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[#00a651] transition-colors">
                    {stage.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Digital Thread Matters</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Single Source of Truth",
                desc: "Eliminate data silos and ensure every team works from the same, current product information regardless of their role or location.",
              },
              {
                title: "Accelerated Time to Market",
                desc: "Streamline handoffs between engineering, manufacturing, and service to reduce delays and rework throughout the product lifecycle.",
              },
              {
                title: "Closed-Loop Quality",
                desc: "Connect field performance data back to design, enabling continuous improvement based on real-world usage and service insights.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-8 hover:border-[#00a651]/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your Digital Thread Journey</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Learn how to connect your product data across the entire value chain
            with PTC&apos;s comprehensive digital thread solutions.
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
