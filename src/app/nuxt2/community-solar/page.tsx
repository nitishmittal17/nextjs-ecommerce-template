import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "Community Solar | EnergySage",
  description:
    "Go solar with no rooftop panels. Community solar lets you enjoy the benefits of clean energy without installing anything on your home.",
};

export default function CommunitySolarPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "Community Solar" }]} />

      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Community Solar</h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Enjoy the benefits of solar without rooftop panels. Subscribe to a
              local solar farm and save 5-15% on your electricity bill — no
              installation required.
            </p>
            <Link
              href="/nuxt/solar-calculator"
              className="inline-block bg-white text-emerald-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              Find Solar Farms Near You
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-8">
            How Community Solar Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Find a Farm", desc: "Browse available community solar projects in your area." },
              { step: "2", title: "Subscribe", desc: "Sign up for a portion of the solar farm's energy output. No upfront costs." },
              { step: "3", title: "Save Money", desc: "Receive credits on your electric bill. Typical savings of 5-15%." },
            ].map((item, idx) => (
              <div key={idx} className="bg-emerald-50 rounded-xl p-8 text-center">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[#333] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-6">
            Community Solar vs. Rooftop Solar
          </h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-[#1a2332] text-white py-3 px-5">
              <span className="text-sm font-semibold">Feature</span>
              <span className="text-sm font-semibold text-center">Community</span>
              <span className="text-sm font-semibold text-center">Rooftop</span>
            </div>
            {[
              { feature: "Upfront cost", community: "$0", rooftop: "$25K-$35K" },
              { feature: "Installation", community: "None", rooftop: "Required" },
              { feature: "Savings", community: "5-15%", rooftop: "50-100%" },
              { feature: "Own panels", community: "No", rooftop: "Yes" },
              { feature: "Renters eligible", community: "Yes", rooftop: "No" },
            ].map((row, idx) => (
              <div key={idx} className={`grid grid-cols-3 px-5 py-3 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className="text-sm text-[#333]">{row.feature}</span>
                <span className="text-sm text-center text-[#333]">{row.community}</span>
                <span className="text-sm text-center text-[#333]">{row.rooftop}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/nuxt/home-solar"
              className="text-[#f26522] hover:text-[#d4551a] text-sm font-medium"
            >
              Learn more about rooftop solar &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
