import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "Heat Pump Guide | EnergySage",
  description:
    "Learn about heat pumps — the latest in clean heating and cooling technology. Compare costs, efficiency, and incentives.",
};

export default function HeatPumpsPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "Heat Pumps" }]} />

      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Heat Pump Guide</h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Heat pumps are 2-3x more efficient than traditional HVAC systems.
              They heat and cool your home using electricity, making them the
              perfect companion for solar panels.
            </p>
            <Link
              href="/nuxt/solar-calculator"
              className="bg-white text-teal-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              Get Heat Pump Quotes
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-8">
            How Do Heat Pumps Work?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Heat pumps work by transferring heat between the indoors and
                outdoors. In winter, they extract heat from outdoor air and move
                it inside. In summer, they reverse the process to cool your
                home.
              </p>
              <ul className="space-y-4">
                {[
                  { label: "2-3x more efficient", desc: "Than traditional furnaces and AC systems" },
                  { label: "Heats AND cools", desc: "One system for year-round comfort" },
                  { label: "No fossil fuels", desc: "Runs on electricity — pair with solar for clean energy" },
                  { label: "Tax incentives available", desc: "Federal and state rebates can lower costs 30-50%" },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-medium text-[#333] text-sm">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50 rounded-2xl p-8">
              <h3 className="font-bold text-[#333] mb-4">Average Heat Pump Costs</h3>
              <div className="space-y-4">
                {[
                  { type: "Air-source heat pump", range: "$4,000 - $8,000" },
                  { type: "Mini-split (ductless)", range: "$3,000 - $5,000" },
                  { type: "Geothermal heat pump", range: "$15,000 - $35,000" },
                ].map((hp, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 flex justify-between items-center">
                    <span className="text-sm text-[#333] font-medium">{hp.type}</span>
                    <span className="text-sm text-teal-600 font-semibold">{hp.range}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                *Before available incentives. Installation included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#333] mb-4">
            Pair heat pumps with solar for maximum savings
          </h2>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Since heat pumps run on electricity, powering them with solar panels
            means nearly free heating and cooling for your home.
          </p>
          <Link
            href="/nuxt/home-solar"
            className="inline-block bg-[#f26522] text-white px-8 py-3 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
          >
            Explore Solar + Heat Pumps
          </Link>
        </div>
      </section>
    </>
  );
}
