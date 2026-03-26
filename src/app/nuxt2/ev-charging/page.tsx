import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "EV Charging Guide | EnergySage",
  description:
    "Everything you need to know about home EV charging. Compare chargers, understand costs, and pair with solar.",
};

export default function EVChargingPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "EV Charging" }]} />

      <section className="bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">EV Charging Guide</h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Charge your electric vehicle at home for a fraction of what it
              costs at public stations. Learn how to choose the right home
              charger and save even more by pairing with solar panels.
            </p>
            <Link
              href="/nuxt/home-solar"
              className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              Solar + EV Charging
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-8">
            Types of EV Chargers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: "Level 1",
                speed: "3-5 miles/hr",
                cost: "$0 (included)",
                desc: "Standard 120V outlet. Slow but no extra equipment needed.",
                best: "PHEVs & overnight charging",
              },
              {
                level: "Level 2",
                speed: "25-30 miles/hr",
                cost: "$400-$900",
                desc: "240V outlet required. The best option for most EV owners.",
                best: "Most home EV owners",
              },
              {
                level: "DC Fast",
                speed: "100-200+ miles/hr",
                cost: "$15,000+",
                desc: "Commercial-grade. Not practical for home use.",
                best: "Public/commercial only",
              },
            ].map((charger, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 border-2 ${
                  idx === 1 ? "border-[#f26522] bg-orange-50" : "border-gray-200 bg-white"
                }`}
              >
                {idx === 1 && (
                  <span className="inline-block bg-[#f26522] text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    RECOMMENDED
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#333] mb-1">{charger.level}</h3>
                <p className="text-sm text-[#f26522] font-medium mb-3">{charger.speed}</p>
                <p className="text-sm text-gray-500 mb-4">{charger.desc}</p>
                <div className="space-y-2 text-sm">
                  <p>Cost: <span className="font-medium text-[#333]">{charger.cost}</span></p>
                  <p>Best for: <span className="font-medium text-[#333]">{charger.best}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#333] mb-4">
                How much does it cost to charge an EV?
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                The average cost to charge an EV at home is about <strong className="text-[#333]">$50-$60 per month</strong>,
                compared to $150-$200 for gasoline. Pair with solar panels and
                your fuel costs drop to nearly zero.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-[#333] mb-3">Monthly Fuel Cost Comparison</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Gasoline</span>
                    <div className="flex items-center gap-2">
                      <div className="w-40 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-400 h-2.5 rounded-full" style={{ width: "100%" }} />
                      </div>
                      <span className="text-sm font-medium text-[#333]">$175</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">EV (Grid)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-40 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "32%" }} />
                      </div>
                      <span className="text-sm font-medium text-[#333]">$55</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">EV (Solar)</span>
                    <div className="flex items-center gap-2">
                      <div className="w-40 bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-400 h-2.5 rounded-full" style={{ width: "6%" }} />
                      </div>
                      <span className="text-sm font-medium text-green-600">$10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#333] text-lg mb-2">Pair Solar + EV</h3>
              <p className="text-sm text-gray-500 mb-4">
                Drive on sunshine. Adding 2-3 kW of solar can offset your
                annual EV charging costs.
              </p>
              <Link
                href="/nuxt/home-solar"
                className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                Learn About Solar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
