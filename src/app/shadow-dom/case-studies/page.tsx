"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const caseStudies = [
  {
    company: "Global Aerospace Manufacturer",
    industry: "Aerospace & Defense",
    challenge: "Managing complexity of multi-variant aircraft configurations across global teams with strict regulatory compliance requirements.",
    solution: "Implemented Windchill PLM and Codebeamer ALM for end-to-end traceability from requirements to design to certification documentation.",
    results: ["40% faster change management", "100% regulatory compliance", "30% reduction in design rework"],
  },
  {
    company: "Leading Automotive OEM",
    industry: "Automotive",
    challenge: "Accelerating EV platform development while managing software-hardware integration and supplier collaboration.",
    solution: "Deployed Creo for CAD, Windchill for PLM, and ThingWorx for connected vehicle analytics with an integrated digital thread.",
    results: ["25% shorter development cycles", "50% fewer integration issues", "Real-time vehicle performance insights"],
  },
  {
    company: "Medical Device Innovator",
    industry: "Life Sciences",
    challenge: "Ensuring complete FDA traceability for design controls while accelerating time to market for life-critical devices.",
    solution: "Used Codebeamer for requirements and risk management with full traceability, integrated with Creo for design and Windchill for configuration management.",
    results: ["60% faster audit preparation", "Complete design history file automation", "Zero compliance findings"],
  },
  {
    company: "Industrial Equipment Leader",
    industry: "Industrial Machinery",
    challenge: "Reducing unplanned equipment downtime for customers while optimizing field service technician utilization.",
    solution: "Implemented ServiceMax for field service management and ThingWorx for predictive maintenance using real-time IoT sensor data.",
    results: ["35% reduction in unplanned downtime", "20% improvement in first-time fix rate", "15% increase in service revenue"],
  },
  {
    company: "Electronics Manufacturer",
    industry: "Electronics & High-Tech",
    challenge: "Managing rapid product iterations across global R&D centers with increasing software content in hardware products.",
    solution: "Onshape for cloud-native CAD collaboration, Arena for cloud PLM, and Codebeamer for managing embedded software development alongside hardware.",
    results: ["Real-time global collaboration", "50% fewer version conflicts", "Unified hardware-software BOM"],
  },
  {
    company: "Energy Services Provider",
    industry: "Energy & Utilities",
    challenge: "Training field workers on complex turbine maintenance procedures safely while reducing travel costs for expert supervision.",
    solution: "Deployed Vuforia for AR-guided work instructions and remote assistance, enabling expert support without on-site travel.",
    results: ["80% reduction in training time", "40% fewer service errors", "Significant travel cost savings"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "Case Studies" }]} />

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            See how leading companies use PTC software to drive digital
            transformation, accelerate innovation, and deliver exceptional
            products and services.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-8 hover:border-[#00a651]/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-[#00a651]/10 text-[#00a651] text-xs font-semibold px-3 py-1 rounded-full">
                    {cs.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{cs.company}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#00a651] mb-2 uppercase tracking-wider">Challenge</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#00a651] mb-2 uppercase tracking-wider">Solution</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#00a651] mb-2 uppercase tracking-wider">Results</h4>
                    <ul className="space-y-2">
                      {cs.results.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-sm text-gray-400">
                          <svg className="w-4 h-4 text-[#00a651] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-400 mb-8">Let our experts help you find the right solution for your unique challenges.</p>
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
