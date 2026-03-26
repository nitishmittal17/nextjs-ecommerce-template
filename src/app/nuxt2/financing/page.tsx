import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "How to Pay for Solar | EnergySage",
  description:
    "Compare cash, loans, and leases to find the best way to finance your solar panel system.",
};

export default function FinancingPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "Financing" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-3xl font-bold text-[#333] mb-4">
              How Should You Pay for Solar?
            </h1>
            <p className="text-gray-500 leading-relaxed">
              How you pay for solar impacts your total cost and long-term
              savings. There are three main ways to pay for home solar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cash Purchase",
                subtitle: "Best long-term savings",
                desc: "Pay upfront, eliminate interest, and own the system immediately. You'll receive all available incentives and maximize savings.",
                pros: ["Best ROI", "No monthly payments", "All incentives yours", "Full ownership"],
                cons: ["High upfront cost"],
                savings: "$37K-$154K over 25 years",
                color: "border-green-500",
                bg: "bg-green-50",
                tag: "BEST VALUE",
              },
              {
                title: "Solar Loan",
                subtitle: "$0 down available",
                desc: "Finance your system with a loan. Start saving on day one while paying off your panels over time.",
                pros: ["$0 down options", "Own the system", "Get tax credits", "Immediate savings"],
                cons: ["Interest reduces ROI"],
                savings: "$25K-$120K over 25 years",
                color: "border-[#f26522]",
                bg: "bg-orange-50",
                tag: "MOST POPULAR",
              },
              {
                title: "Lease / PPA",
                subtitle: "Lowest risk",
                desc: "Pay $0 down and let the solar company handle maintenance. Lower savings but zero hassle.",
                pros: ["$0 down", "No maintenance", "Immediate bill savings", "Flexible"],
                cons: ["Don't own system", "Lower savings"],
                savings: "$10K-$50K over 25 years",
                color: "border-blue-500",
                bg: "bg-blue-50",
                tag: null,
              },
            ].map((option, idx) => (
              <div
                key={idx}
                className={`bg-white border-2 ${option.color} rounded-xl overflow-hidden`}
              >
                {option.tag && (
                  <div className={`${option.bg} py-2 px-4 text-center`}>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#333]">
                      {option.tag}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#333] mb-1">
                    {option.title}
                  </h3>
                  <p className="text-sm text-[#f26522] font-medium mb-3">
                    {option.subtitle}
                  </p>
                  <p className="text-sm text-gray-500 mb-5">{option.desc}</p>

                  <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                    Pros
                  </h4>
                  <ul className="space-y-1.5 mb-4">
                    {option.pros.map((pro, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {pro}
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xs font-semibold text-gray-400 uppercase mb-2">
                    Cons
                  </h4>
                  <ul className="space-y-1.5 mb-5">
                    {option.cons.map((con, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {con}
                      </li>
                    ))}
                  </ul>

                  <div className={`${option.bg} rounded-lg p-3 text-center`}>
                    <p className="text-xs text-gray-400">Est. 25-year savings</p>
                    <p className="font-bold text-[#333]">{option.savings}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-16 bg-[#1a2332] rounded-2xl p-10 text-white">
            <h2 className="text-2xl font-bold mb-6">
              4 Ways to Lower Your Solar Cost
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { num: "1", title: "Finance your system", desc: "Use a solar loan or lease to lower upfront costs." },
                { num: "2", title: "Get multiple quotes", desc: "Comparing quotes on EnergySage saves you 25%+ vs. national averages." },
                { num: "3", title: "Choose smart equipment", desc: "High-quality doesn't always mean highest-priced." },
                { num: "4", title: "Claim all incentives", desc: "Federal ITC + state programs can reduce costs by 30-50%." },
              ].map((tip, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 bg-[#f26522] rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    {tip.num}
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{tip.title}</p>
                    <p className="text-xs text-gray-300">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
