import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "Home Batteries Guide | EnergySage",
  description:
    "Learn about home battery storage. Backup your home, store solar energy, and save money with the right battery system.",
};

const batteries = [
  { name: "Tesla Powerwall 3", capacity: "13.5 kWh", price: "$9,200", rating: "4.5/5" },
  { name: "Enphase IQ Battery 5P", capacity: "5 kWh", price: "$7,000", rating: "4.3/5" },
  { name: "Franklin WH aPower2", capacity: "13.6 kWh", price: "$10,500", rating: "4.4/5" },
  { name: "SolarEdge Home Battery", capacity: "9.7 kWh", price: "$8,500", rating: "4.2/5" },
];

export default function HomeBatteriesPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "Home Batteries" }]} />

      <section className="bg-gradient-to-r from-[#1a2332] to-[#2a3a52] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Home Battery Guide</h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Home batteries store energy from your solar panels or the grid,
              providing backup power during outages and maximizing your energy
              savings. Learn how to choose the right battery for your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/nuxt/solar-calculator"
                className="bg-[#f26522] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
              >
                Get Battery Quotes
              </Link>
              <Link
                href="/nuxt/home-solar"
                className="border border-white/30 text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors text-sm"
              >
                Solar + Battery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Batteries */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-8">
            Best Home Batteries in 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {batteries.map((battery, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#f26522] transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#333] mb-2">{battery.name}</h3>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>Capacity: <span className="text-[#333] font-medium">{battery.capacity}</span></p>
                  <p>Starting at: <span className="text-[#333] font-medium">{battery.price}</span></p>
                  <p>Rating: <span className="text-[#f26522] font-medium">{battery.rating}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery vs Generator */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-8 text-center">
            Home Batteries vs. Generators
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="font-semibold text-[#333] mb-4 text-lg">Home Batteries</h3>
              <ul className="space-y-3">
                {["Silent operation", "No fuel required", "Pairs with solar", "Low maintenance", "Indoor safe"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="font-semibold text-[#333] mb-4 text-lg">Generators</h3>
              <ul className="space-y-3">
                {["Lower upfront cost", "Unlimited runtime with fuel", "Higher power output", "Noisy operation", "Requires fuel storage"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
