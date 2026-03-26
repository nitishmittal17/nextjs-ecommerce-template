import Link from "next/link";
import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "Returns & Warranty | Groove® Pillow",
  description:
    "100-night risk-free trial. If you see no difference, simply return it for a full refund.",
};

export default function ReturnsPage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "Returns & Warranty" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#2d2926] mb-8 text-center">
            Returns &amp; Warranty
          </h1>

          {/* 100 Night Trial */}
          <div className="bg-[#2d2926] rounded-xl p-8 text-white mb-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">
                100 Night Risk-Free Trial
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-lg mx-auto">
                We are so confident that the Original Groove® Pillow will
                improve your sleeping experience that we offer a 100-night
                risk-free trial. If you see no difference during this time,
                simply return it for a full refund. No questions asked!
              </p>
            </div>
          </div>

          {/* Return Process */}
          <div className="space-y-6 mb-8">
            <h2 className="text-xl font-semibold text-[#2d2926]">
              How To Return
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description:
                    "Email us at support@groovepillows.co.uk within 100 nights of purchase.",
                },
                {
                  step: "2",
                  title: "Ship It Back",
                  description:
                    "We'll provide you with a return shipping label and instructions.",
                },
                {
                  step: "3",
                  title: "Get Refunded",
                  description:
                    "Once received, we'll process your full refund within 5-7 business days.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#f5f0eb] rounded-xl p-6 text-center">
                  <div className="w-10 h-10 mx-auto mb-3 bg-[#2d2926] text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#2d2926] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#7c6f64]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Info */}
          <div className="bg-[#f5f0eb] rounded-xl p-8">
            <h2 className="text-xl font-semibold text-[#2d2926] mb-4">
              Warranty Information
            </h2>
            <ul className="space-y-3">
              {[
                "All Groove® pillows come with a 2-year warranty against manufacturing defects.",
                "Warranty covers issues with memory foam density, stitching, and zipper mechanisms.",
                "Normal wear and tear, stains, and user-inflicted damage are not covered.",
                "To make a warranty claim, please contact us with your order number and photos.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-[#2d2926]">
                  <svg className="w-4 h-4 text-[#7c6f64] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/react/contact"
              className="inline-block bg-[#2d2926] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
