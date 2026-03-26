import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Panel Cost in 2026 | EnergySage",
  description:
    "Solar panels cost about $30,500 on average—but often pay for themselves several times over through 25-30 years of electricity savings.",
};

const stateData = [
  { state: "California", cost: "$22,271", perWatt: "$2.43", savings: "$136,019", slug: "ca" },
  { state: "Texas", cost: "$30,819", perWatt: "$2.20", savings: "$80,590", slug: "tx" },
  { state: "Florida", cost: "$33,362", perWatt: "$2.20", savings: "$51,881", slug: "fl" },
  { state: "New York", cost: "$35,192", perWatt: "$2.76", savings: "$56,249", slug: "ny" },
  { state: "Arizona", cost: "$29,310", perWatt: "$2.13", savings: "$43,223", slug: "az" },
  { state: "Massachusetts", cost: "$34,743", perWatt: "$3.16", savings: "$154,000", slug: "ma" },
  { state: "New Jersey", cost: "$36,908", perWatt: "$2.81", savings: "$90,027", slug: "nj" },
  { state: "Colorado", cost: "$30,151", perWatt: "$2.82", savings: "$31,022", slug: "co" },
  { state: "Connecticut", cost: "$30,910", perWatt: "$2.77", savings: "$93,864", slug: "ct" },
  { state: "Maryland", cost: "$38,131", perWatt: "$2.65", savings: "$75,359", slug: "md" },
];

const systemSizes = [
  { size: "4 kW", perWatt: "$2.86/W", cost: "$11,440" },
  { size: "6 kW", perWatt: "$2.66/W", cost: "$15,960" },
  { size: "8 kW", perWatt: "$2.61/W", cost: "$20,880" },
  { size: "10 kW", perWatt: "$2.55/W", cost: "$25,500" },
  { size: "12 kW", perWatt: "$2.52/W", cost: "$30,240" },
  { size: "15 kW", perWatt: "$2.44/W", cost: "$36,600" },
];

const costBreakdown = [
  { component: "Solar panels", cost: "$3,801", pct: "12%" },
  { component: "Solar inverter(s)", cost: "$3,111", pct: "10%" },
  { component: "Racking equipment", cost: "$1,037", pct: "3%" },
  { component: "Electrical wiring", cost: "$2,650", pct: "9%" },
  { component: "Supply chain costs", cost: "$2,765", pct: "9%" },
  { component: "Installation labor", cost: "$2,074", pct: "7%" },
  { component: "Sales & marketing", cost: "$5,531", pct: "18%" },
  { component: "Overhead costs", cost: "$3,226", pct: "11%" },
  { component: "Installer profit", cost: "$3,226", pct: "11%" },
  { component: "Permitting", cost: "$2,421", pct: "8%" },
];

export default function SolarPanelCostPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2332] to-[#2a3a52] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#f26522] font-semibold text-sm uppercase tracking-wider mb-3">
                Cost of Solar
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Solar panel cost in 2026: It may be lower than you think
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Solar panels cost about <strong className="text-white">$30,500</strong> on
                average—but often pay for themselves several times over through
                25-30 years of electricity savings.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="text-sm font-semibold mb-4 text-gray-200">
                  Key Takeaways
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Average 12 kW installation: $30,505 before incentives",
                    "Typical savings: $37,000 to $154,000 over 25 years",
                    "Solar panels are just 12% of total installation cost",
                    "State incentives can significantly lower costs",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-200">
                      <svg className="w-4 h-4 text-[#f26522] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/nuxt/solar-calculator"
                className="inline-block bg-[#f26522] text-white px-8 py-3.5 rounded-md font-semibold hover:bg-[#d4551a] transition-colors text-sm"
              >
                Calculate Your Solar Cost
              </Link>
            </div>

            {/* Cost Card */}
            <div className="bg-white rounded-2xl p-8 text-[#333] shadow-2xl">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Average Cost of 12 kW Installation
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-500 text-sm">Low-end</span>
                  <span className="font-bold text-lg">$25,962</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 bg-orange-50 -mx-4 px-4 rounded-lg">
                  <span className="text-[#f26522] font-semibold text-sm">Average</span>
                  <span className="font-bold text-2xl text-[#f26522]">$30,505</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-500 text-sm">High-end</span>
                  <span className="font-bold text-lg">$34,105</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-6">
                *Before any available incentives. Based on EnergySage Marketplace
                data.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  Systems average about <strong>$2.58 per watt</strong> before
                  incentives. Most homeowners save{" "}
                  <strong>$37,000 to $154,000</strong> over 25 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Home Solar", href: "/nuxt/home-solar", icon: "☀️" },
              { title: "Batteries", href: "/nuxt/home-batteries", icon: "🔋" },
              { title: "EV Charging", href: "/nuxt/ev-charging", icon: "⚡" },
              { title: "Heat Pumps", href: "/nuxt/heat-pumps", icon: "🌡️" },
              { title: "Calculator", href: "/nuxt/solar-calculator", icon: "🔢" },
              { title: "Incentives", href: "/nuxt/solar-incentives", icon: "💰" },
            ].map((card, idx) => (
              <Link
                key={idx}
                href={card.href}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center hover:shadow-md hover:border-[#f26522] transition-all group"
              >
                <span className="text-2xl block mb-2">{card.icon}</span>
                <span className="text-sm font-medium text-[#333] group-hover:text-[#f26522] transition-colors">
                  {card.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* State-by-State Cost Table */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333] mb-3">
            Average cost of solar by state
          </h2>
          <p className="text-gray-500 mb-8 max-w-3xl">
            If you live in a hot state and require a lot of air conditioning,
            you&apos;ll probably need more solar panels. Most installers charge
            less per watt for larger systems.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1a2332] text-white">
                  <th className="text-left py-3.5 px-4 text-sm font-semibold rounded-tl-lg">
                    State
                  </th>
                  <th className="text-right py-3.5 px-4 text-sm font-semibold">
                    System Cost*
                  </th>
                  <th className="text-right py-3.5 px-4 text-sm font-semibold">
                    Cost/Watt*
                  </th>
                  <th className="text-right py-3.5 px-4 text-sm font-semibold rounded-tr-lg">
                    25-Year Savings*
                  </th>
                </tr>
              </thead>
              <tbody>
                {stateData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-100 hover:bg-orange-50 transition-colors ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="py-3 px-4 text-sm font-medium text-[#f26522]">
                      <Link href="/nuxt/solar-incentives" className="hover:underline">
                        {row.state}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-sm text-right text-[#333]">
                      {row.cost}
                    </td>
                    <td className="py-3 px-4 text-sm text-right text-[#333]">
                      {row.perWatt}
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-semibold text-green-600">
                      {row.savings}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            *Based on EnergySage Marketplace data. Before available incentives.
          </p>
          <div className="mt-6">
            <Link
              href="/nuxt/solar-incentives"
              className="text-[#f26522] hover:text-[#d4551a] text-sm font-medium"
            >
              View all 50 states &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333] mb-3">
            How to calculate your cost of solar
          </h2>
          <p className="text-gray-500 mb-8 max-w-3xl">
            There&apos;s a lot that goes into the sticker price. Panels are just
            one part of the equation.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Breakdown Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-[#1a2332] text-white py-3 px-5">
                <h3 className="text-sm font-semibold">
                  Cost Breakdown of a $30,505 System
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {costBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-5 py-3 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#333]">{item.component}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium text-[#333]">
                        {item.cost}
                      </span>
                      <span className="text-xs text-gray-400 w-10 text-right">
                        {item.pct}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Size Table */}
            <div>
              <h3 className="text-xl font-bold text-[#333] mb-4">
                Cost by system size
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Bigger systems have a lower average $/W — like buying in bulk.
              </p>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <div className="bg-[#1a2332] text-white py-3 px-5 grid grid-cols-3">
                  <span className="text-sm font-semibold">Size</span>
                  <span className="text-sm font-semibold text-center">
                    $/W
                  </span>
                  <span className="text-sm font-semibold text-right">
                    Total Cost
                  </span>
                </div>
                <div className="divide-y divide-gray-100">
                  {systemSizes.map((row, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-3 px-5 py-3 ${
                        row.size === "12 kW" ? "bg-orange-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <span className={`text-sm ${row.size === "12 kW" ? "font-semibold text-[#f26522]" : "text-[#333]"}`}>
                        {row.size}
                      </span>
                      <span className="text-sm text-center text-[#333]">
                        {row.perWatt}
                      </span>
                      <span className="text-sm text-right font-medium text-[#333]">
                        {row.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/nuxt/solar-calculator"
                  className="inline-block bg-[#f26522] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
                >
                  Calculate Your System Size
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is Solar Worth It */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#333] mb-6">
                Is solar worth the price tag?
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Solar is worth it for most homeowners because it eliminates or
                significantly reduces your electric bill. It takes an average of
                about <strong className="text-[#333]">10 years</strong> to earn back the money you spend.
                After that, the electricity is free.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Most homeowners will save{" "}
                <strong className="text-[#333]">$37,000 to $154,000</strong> over
                25 years. Ten years ago, solar cost $3.16/W — that&apos;s 22%
                more than today&apos;s prices. Now is a great time to get
                quotes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/nuxt/financing"
                  className="inline-block bg-[#f26522] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
                >
                  Explore Financing Options
                </Link>
                <Link
                  href="/nuxt/solar-incentives"
                  className="inline-block border-2 border-[#f26522] text-[#f26522] px-6 py-3 rounded-md font-medium hover:bg-[#f26522] hover:text-white transition-colors text-sm"
                >
                  View Incentives
                </Link>
              </div>
            </div>

            {/* Savings Illustration */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="font-bold text-[#333] mb-6 text-lg">
                Your Solar Investment Timeline
              </h3>
              <div className="space-y-5">
                {[
                  { year: "Year 0", event: "Install solar panels", detail: "$30,505 investment", color: "bg-red-400" },
                  { year: "Year 1-10", event: "Payback period", detail: "Savings offset initial cost", color: "bg-yellow-400" },
                  { year: "Year 10", event: "Break even!", detail: "System has paid for itself", color: "bg-green-400" },
                  { year: "Year 10-25", event: "Pure savings", detail: "$37K–$154K in your pocket", color: "bg-emerald-500" },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`w-3 h-3 ${step.color} rounded-full mt-1.5 flex-shrink-0`} />
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase">
                        {step.year}
                      </p>
                      <p className="font-semibold text-[#333] text-sm">
                        {step.event}
                      </p>
                      <p className="text-xs text-gray-500">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f26522] py-14">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find out what solar panels cost in your area
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            100% free to use, 100% online. Access the lowest prices from
            installers near you.
          </p>
          <Link
            href="/nuxt/solar-calculator"
            className="inline-block bg-white text-[#f26522] px-10 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            See Solar Prices
          </Link>
        </div>
      </section>
    </>
  );
}
