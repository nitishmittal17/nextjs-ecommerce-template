import Link from "next/link";
import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "Offers & Deals | Groove® Pillow",
  description:
    "Save on Groove® pillows with our latest offers, bundles, and deals.",
};

const offers = [
  {
    title: "2 for £50",
    subtitle: "Save 24%",
    description:
      "Buy two Original Groove® Pillows and save 24%. Perfect for couples or to have a spare.",
    cta: "Shop Now",
    href: "/react/original-pillow",
  },
  {
    title: "Sleep Essentials Bundle",
    subtitle: "£49.00",
    description:
      "Get the Groove® Original Pillow, a Pillowcase, and a Sleep Mask all in one bundle.",
    cta: "View Bundle",
    href: "/react/accessories",
  },
  {
    title: "Free Delivery",
    subtitle: "On orders over £45",
    description:
      "Spend £45 or more and get free delivery across the UK. No code needed.",
    cta: "Start Shopping",
    href: "/react/all-pillows",
  },
];

export default function OffersPage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "Offers" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
              Current Offers
            </h1>
            <p className="text-[#7c6f64] max-w-2xl mx-auto">
              Take advantage of our latest deals and save on your favourite
              Groove® products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="bg-[#f5f0eb] rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#2d2926] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[#2d2926] mb-1">
                  {offer.title}
                </h2>
                <p className="text-[#7c6f64] font-medium mb-4">
                  {offer.subtitle}
                </p>
                <p className="text-sm text-[#7c6f64] mb-6 leading-relaxed">
                  {offer.description}
                </p>
                <Link
                  href={offer.href}
                  className="inline-block bg-[#2d2926] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm"
                >
                  {offer.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* 100 Night Trial CTA */}
          <div className="mt-16 bg-[#2d2926] rounded-2xl p-10 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              100 Night Risk-Free Trial
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              We&apos;re so confident that the Groove® Pillow will improve your
              sleeping experience that we offer a 100-night risk-free trial. If
              you see no difference, simply return it for a full refund.
            </p>
            <Link
              href="/react/original-pillow"
              className="inline-block bg-white text-[#2d2926] px-8 py-3.5 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              Try Risk-Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
