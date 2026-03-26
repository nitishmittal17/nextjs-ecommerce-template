import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "About Us | EnergySage",
  description:
    "EnergySage is the leading online marketplace for solar energy. Learn about our mission, values, and how we help homeowners go solar.",
};

export default function AboutPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "About Us" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2a3a52] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Make an impact. It&apos;s never been easier.
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We developed our one-of-a-kind marketplace with funding from the
            U.S. Department of Energy to make clean home energy solutions
            affordable and accessible to all.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10M+", label: "Homeowners helped" },
              { value: "$2B+", label: "Solar installed via marketplace" },
              { value: "500+", label: "Pre-vetted installers" },
              { value: "25%+", label: "Lower prices vs. national avg" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-[#f26522] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-10 text-center">
            How EnergySage Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Request Quotes",
                desc: "Sign up on our marketplace and receive competitive quotes from pre-vetted local installers.",
              },
              {
                step: "2",
                title: "Compare Options",
                desc: "Review and compare system designs, equipment, pricing, and financing options side by side.",
              },
              {
                step: "3",
                title: "Go Solar",
                desc: "Choose your installer and start saving. Our Energy Advisors are available every step of the way.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 text-center border border-gray-200">
                <div className="w-14 h-14 bg-[#f26522] text-white rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#333] mb-3 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-6">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            EnergySage is on a mission to make clean energy accessible and
            affordable for everyone. We believe that informed consumers make
            better decisions, which is why we provide transparent, unbiased
            information and tools to help homeowners navigate the transition to
            clean energy.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Since our founding, we&apos;ve helped millions of homeowners
            understand their energy options, compare quotes from vetted
            installers, and save thousands on their solar installations. Our
            marketplace drives competition, which results in lower prices for
            consumers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/nuxt/solar-calculator"
              className="bg-[#f26522] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d4551a] transition-colors text-sm"
            >
              Get Solar Quotes
            </Link>
            <Link
              href="/nuxt/contact"
              className="border-2 border-[#f26522] text-[#f26522] px-6 py-3 rounded-md font-medium hover:bg-[#f26522] hover:text-white transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
