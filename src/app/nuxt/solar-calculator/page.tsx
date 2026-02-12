"use client";
import { useState } from "react";
import Link from "next/link";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export default function SolarCalculatorPage() {
  const [zip, setZip] = useState("");
  const [bill, setBill] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip && bill) setSubmitted(true);
  };

  const estimatedSize = bill ? Math.round(Number(bill) / 12.5) : 0;
  const estimatedCost = estimatedSize * 2580;
  const incentiveCost = Math.round(estimatedCost * 0.7);
  const savings25 = estimatedSize * 3500;

  return (
    <>
      <ESBreadcrumb items={[{ label: "Solar Calculator" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div>
              <h1 className="text-3xl font-bold text-[#333] mb-4">
                Solar Calculator
              </h1>
              <p className="text-gray-500 mb-8">
                Get a quick estimate of your solar panel costs and savings based
                on your location and electricity usage.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent"
                    placeholder="Enter your ZIP code"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">
                    Average Monthly Electric Bill ($)
                  </label>
                  <input
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent"
                    placeholder="e.g. 150"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f26522] text-white py-3.5 rounded-md font-semibold hover:bg-[#d4551a] transition-colors text-sm"
                >
                  See Solar Prices
                </button>
                <p className="text-xs text-gray-400 text-center">
                  100% free to use &bull; No obligation
                </p>
              </form>
            </div>

            {/* Results */}
            <div>
              {submitted ? (
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                  <h2 className="text-xl font-bold text-[#333] mb-6">
                    Your Estimated Solar Savings
                  </h2>
                  <div className="space-y-5">
                    <div className="bg-gray-50 rounded-lg p-5">
                      <p className="text-xs text-gray-400 uppercase font-semibold mb-1">
                        Recommended System Size
                      </p>
                      <p className="text-2xl font-bold text-[#333]">
                        {estimatedSize} kW
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-5">
                      <p className="text-xs text-gray-400 uppercase font-semibold mb-1">
                        Estimated Cost (before incentives)
                      </p>
                      <p className="text-2xl font-bold text-[#333]">
                        ${estimatedCost.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-5">
                      <p className="text-xs text-[#f26522] uppercase font-semibold mb-1">
                        Cost After Incentives (est.)
                      </p>
                      <p className="text-2xl font-bold text-[#f26522]">
                        ${incentiveCost.toLocaleString()}
                      </p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-5">
                      <p className="text-xs text-green-600 uppercase font-semibold mb-1">
                        Estimated 25-Year Savings
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        ${savings25.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/nuxt/financing"
                      className="flex-1 text-center bg-[#f26522] text-white py-3 rounded-md text-sm font-medium hover:bg-[#d4551a] transition-colors"
                    >
                      Explore Financing
                    </Link>
                    <Link
                      href="/nuxt/solar-incentives"
                      className="flex-1 text-center border border-[#f26522] text-[#f26522] py-3 rounded-md text-sm font-medium hover:bg-orange-50 transition-colors"
                    >
                      View Incentives
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-[#f26522]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#333] mb-2">
                    Enter your details
                  </h3>
                  <p className="text-sm text-gray-500 max-w-sm">
                    Fill in your ZIP code and average monthly electric bill to
                    see your personalized solar cost estimate.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
