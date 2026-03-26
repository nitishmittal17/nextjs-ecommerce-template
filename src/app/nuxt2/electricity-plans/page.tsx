import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "Electricity Plans | EnergySage",
  description:
    "Compare electricity plans and find the best rates in your area. Switch to clean energy and save.",
};

export default function ElectricityPlansPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "Electricity Plans" }]} />

      <section className="bg-gradient-to-r from-[#1a2332] to-[#2a3a52] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Compare Electricity Plans
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Find competitive electricity rates and clean energy plans in
              deregulated markets. Compare plans to lower your monthly bill.
            </p>
            <Link
              href="/nuxt/solar-calculator"
              className="bg-[#f26522] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
            >
              Compare Plans in Your Area
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-8">
            Types of Electricity Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fixed Rate",
                desc: "Lock in a stable rate for 12-36 months. Protection against price spikes.",
                pros: ["Price stability", "Budget predictability", "No surprises"],
              },
              {
                title: "Variable Rate",
                desc: "Rate changes monthly based on market prices. Can save when rates are low.",
                pros: ["No contract", "Potential savings", "Flexibility"],
              },
              {
                title: "Green Energy",
                desc: "100% renewable energy sourced from wind and solar farms.",
                pros: ["Clean energy", "Carbon neutral", "Often competitive"],
              },
            ].map((plan, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-[#333] text-lg mb-2">{plan.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                <ul className="space-y-2">
                  {plan.pros.map((pro, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#333] mb-4">
            Want to generate your own electricity?
          </h2>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            With solar panels, you can produce your own clean electricity and
            dramatically reduce or eliminate your electricity bill.
          </p>
          <Link
            href="/nuxt/home-solar"
            className="inline-block bg-[#f26522] text-white px-8 py-3 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
          >
            Explore Home Solar
          </Link>
        </div>
      </section>
    </>
  );
}
