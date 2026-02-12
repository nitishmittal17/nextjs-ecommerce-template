import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "Solar Incentives by State | EnergySage",
  description:
    "Explore solar incentives, tax credits, and rebates available in your state. See how much you can save.",
};

const stateIncentives = [
  { state: "California", federal: "30%", stateCredit: "None", netMetering: "Yes", savings: "$136,019" },
  { state: "Texas", federal: "30%", stateCredit: "None", netMetering: "Varies", savings: "$80,590" },
  { state: "New York", federal: "30%", stateCredit: "25% (up to $5,000)", netMetering: "Yes", savings: "$56,249" },
  { state: "Florida", federal: "30%", stateCredit: "None", netMetering: "Yes", savings: "$51,881" },
  { state: "Massachusetts", federal: "30%", stateCredit: "SMART + SRECs", netMetering: "Yes", savings: "$154,000" },
  { state: "New Jersey", federal: "30%", stateCredit: "SRECs", netMetering: "Yes", savings: "$90,027" },
  { state: "Maryland", federal: "30%", stateCredit: "$1,000 rebate", netMetering: "Yes", savings: "$75,359" },
  { state: "Connecticut", federal: "30%", stateCredit: "RSIP rebate", netMetering: "Yes", savings: "$93,864" },
  { state: "Rhode Island", federal: "30%", stateCredit: "REF rebate", netMetering: "Yes", savings: "$100,462" },
  { state: "South Carolina", federal: "30%", stateCredit: "25% state credit", netMetering: "Yes", savings: "$30,396" },
  { state: "Arizona", federal: "30%", stateCredit: "25% (up to $1,000)", netMetering: "Yes", savings: "$43,223" },
  { state: "Colorado", federal: "30%", stateCredit: "Varies by utility", netMetering: "Yes", savings: "$31,022" },
];

export default function SolarIncentivesPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "Solar Incentives" }]} />

      <section className="bg-gradient-to-r from-[#1a2332] to-[#2a3a52] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Solar Incentives &amp; Tax Credits by State
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              The federal Investment Tax Credit (ITC) covers 30% of your solar
              installation cost. Many states offer additional incentives that can
              save you thousands more.
            </p>
          </div>
        </div>
      </section>

      {/* Federal ITC */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-[#f26522] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  FEDERAL
                </span>
                <h2 className="text-2xl font-bold text-[#333] mb-3">
                  30% Federal Solar Tax Credit (ITC)
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  The Investment Tax Credit allows you to deduct 30% of the cost
                  of your solar energy system from your federal taxes. For an
                  average $30,505 system, that&apos;s a savings of{" "}
                  <strong className="text-[#333]">$9,152</strong>.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-sm text-gray-400 mb-1">Example Savings</p>
                <p className="text-xs text-gray-400 mb-3">
                  On a $30,505 system
                </p>
                <p className="text-4xl font-bold text-[#f26522] mb-2">
                  $9,152
                </p>
                <p className="text-sm text-gray-500">Federal tax credit value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Table */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-6">
            State-by-State Incentives
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1a2332] text-white">
                  <th className="text-left py-3 px-4 text-sm font-semibold rounded-tl-lg">State</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold">Federal ITC</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold">State Incentive</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold">Net Metering</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold rounded-tr-lg">25-Year Savings</th>
                </tr>
              </thead>
              <tbody>
                {stateIncentives.map((row, idx) => (
                  <tr key={idx} className={`border-b border-gray-100 hover:bg-orange-50 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-3 px-4 text-sm font-medium text-[#f26522]">{row.state}</td>
                    <td className="py-3 px-4 text-sm text-center text-[#333]">{row.federal}</td>
                    <td className="py-3 px-4 text-sm text-center text-[#333]">{row.stateCredit}</td>
                    <td className="py-3 px-4 text-sm text-center">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${row.netMetering === "Yes" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {row.netMetering}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-semibold text-green-600">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best States */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#333] mb-3">
            States With the Best Solar Incentives
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-sm">
            These states give out the most free money through solar incentive
            programs:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["Maryland", "New York", "Rhode Island", "South Carolina", "Washington D.C."].map(
              (state) => (
                <span
                  key={state}
                  className="bg-white border border-[#f26522] text-[#f26522] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {state}
                </span>
              )
            )}
          </div>
          <Link
            href="/nuxt/solar-calculator"
            className="inline-block bg-[#f26522] text-white px-8 py-3 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
          >
            Check Incentives in Your Area
          </Link>
        </div>
      </section>
    </>
  );
}
