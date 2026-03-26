import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "Home Solar Guide | EnergySage",
  description:
    "Everything you need to know about installing solar panels on your home. Learn about costs, savings, equipment, and how to get started.",
};

const guides = [
  {
    title: "How much do solar panels cost?",
    description: "Average costs, state-by-state pricing, and what impacts your price.",
    href: "/nuxt",
    tag: "Editors' Pick",
  },
  {
    title: "Solar Calculator",
    description: "Get a personalized estimate of your solar panel costs and savings.",
    href: "/nuxt/solar-calculator",
    tag: null,
  },
  {
    title: "Solar Incentives & Rebates",
    description: "Tax credits, rebates, and other incentives that can lower your cost.",
    href: "/nuxt/solar-incentives",
    tag: null,
  },
  {
    title: "How to Pay for Solar",
    description: "Compare cash, loans, and leases to find the best financing option.",
    href: "/nuxt/financing",
    tag: null,
  },
  {
    title: "Best Solar Panels",
    description: "Compare the top solar panel brands by efficiency, warranty, and price.",
    href: "/nuxt/home-solar",
    tag: "Popular",
  },
  {
    title: "Solar Panel Maintenance",
    description: "What you need to know about keeping your panels running efficiently.",
    href: "/nuxt/home-solar",
    tag: null,
  },
];

export default function HomeSolarPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "Home Solar" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2a3a52] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#f26522] font-semibold text-sm uppercase tracking-wider mb-3">
              Home Solar
            </p>
            <h1 className="text-4xl font-bold mb-6">
              Your Complete Guide to Home Solar
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Solar panels can slash your electricity bills and increase your
              home&apos;s value. Our comprehensive guide covers everything from
              costs and savings to equipment selection and financing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/nuxt/solar-calculator"
                className="bg-[#f26522] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
              >
                Get Personalized Quotes
              </Link>
              <Link
                href="/nuxt"
                className="border border-white/30 text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors text-sm"
              >
                See Solar Costs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-8">
            Solar Guides & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => (
              <Link
                key={idx}
                href={guide.href}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#f26522] transition-all"
              >
                {guide.tag && (
                  <span className="inline-block bg-orange-100 text-[#f26522] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {guide.tag}
                  </span>
                )}
                <h3 className="font-semibold text-[#333] mb-2 group-hover:text-[#f26522] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-10 text-center">
            How Going Solar Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Get Quotes", desc: "Compare personalized solar quotes from pre-vetted installers." },
              { step: "2", title: "Choose Plan", desc: "Select the best system size, equipment, and financing option." },
              { step: "3", title: "Installation", desc: "Your installer handles permits, equipment, and installation." },
              { step: "4", title: "Start Saving", desc: "Your panels generate electricity and your savings begin." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-[#f26522] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#333] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#333] mb-4">
            Ready to go solar?
          </h2>
          <p className="text-gray-500 mb-6">
            Compare quotes from top-rated installers in your area. 100% free.
          </p>
          <Link
            href="/nuxt/solar-calculator"
            className="inline-block bg-[#f26522] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
