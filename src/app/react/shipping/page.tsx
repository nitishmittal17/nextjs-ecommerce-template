import Link from "next/link";
import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "Shipping Information | Groove® Pillow",
  description:
    "Free delivery on all orders over £45. Find out about our shipping options and delivery times.",
};

export default function ShippingPage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "Shipping" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#2d2926] mb-8 text-center">
            Shipping Information
          </h1>

          <div className="space-y-8">
            {/* UK Shipping */}
            <div className="bg-[#f5f0eb] rounded-xl p-8">
              <h2 className="text-xl font-semibold text-[#2d2926] mb-4">
                UK Delivery
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#e8e0d8]">
                  <div>
                    <p className="font-medium text-[#2d2926]">
                      Standard Delivery
                    </p>
                    <p className="text-sm text-[#7c6f64]">3-5 business days</p>
                  </div>
                  <p className="font-semibold text-[#2d2926]">£3.99</p>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#e8e0d8]">
                  <div>
                    <p className="font-medium text-[#2d2926]">
                      Express Delivery
                    </p>
                    <p className="text-sm text-[#7c6f64]">1-2 business days</p>
                  </div>
                  <p className="font-semibold text-[#2d2926]">£5.99</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium text-[#2d2926]">
                      Free Delivery
                    </p>
                    <p className="text-sm text-[#7c6f64]">
                      On all orders over £45
                    </p>
                  </div>
                  <p className="font-semibold text-green-600">FREE</p>
                </div>
              </div>
            </div>

            {/* International Shipping */}
            <div className="bg-[#f5f0eb] rounded-xl p-8">
              <h2 className="text-xl font-semibold text-[#2d2926] mb-4">
                International Delivery
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[#e8e0d8]">
                  <div>
                    <p className="font-medium text-[#2d2926]">Europe</p>
                    <p className="text-sm text-[#7c6f64]">
                      5-10 business days
                    </p>
                  </div>
                  <p className="font-semibold text-[#2d2926]">£7.99</p>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#e8e0d8]">
                  <div>
                    <p className="font-medium text-[#2d2926]">USA / Canada</p>
                    <p className="text-sm text-[#7c6f64]">
                      7-14 business days
                    </p>
                  </div>
                  <p className="font-semibold text-[#2d2926]">£9.99</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-medium text-[#2d2926]">
                      Rest of World
                    </p>
                    <p className="text-sm text-[#7c6f64]">
                      10-21 business days
                    </p>
                  </div>
                  <p className="font-semibold text-[#2d2926]">£12.99</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#7c6f64] mb-6">
                Have questions about shipping? Get in touch with our team.
              </p>
              <Link
                href="/react/contact"
                className="inline-block bg-[#2d2926] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
