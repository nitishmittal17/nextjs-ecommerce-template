import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groove® | Home Of The Groove® Pillow",
  description:
    "Get relief from neck pain with The Original Groove® Pillow. Engineered to provide unmatched comfort and support during sleep.",
};

const products = [
  {
    name: "The Original Groove® Pillow",
    price: "£33.00",
    reviews: "12,609 Reviews",
    description: "Designed to relieve neck pain",
    href: "/react/original-pillow",
    badge: "BESTSELLER",
  },
  {
    name: "Groove® Adjustable Pillow 2.0",
    price: "£45.00",
    reviews: "291 Reviews",
    description: "Adjust the height with four panels",
    href: "/react/adjustable-pillow",
    badge: "NEW",
  },
  {
    name: "Groove® Cooling Tencel Pillowcase",
    price: "£15.00",
    reviews: "143 Reviews",
    description: "The perfect partner for your Groove® Pillow",
    href: "/react/pillowcases",
    badge: null,
  },
  {
    name: "Groove® 3-in-1 Knee Pillow",
    price: "£28.00",
    reviews: "New Product",
    description: "Adjustable pillow for knee & hip pain",
    href: "/react/all-pillows",
    badge: "NEW",
  },
  {
    name: "Groove® Body Pillow",
    price: "£45.00",
    reviews: "21 Reviews",
    description: "Full body pain relief pillow",
    href: "/react/all-pillows",
    badge: null,
  },
  {
    name: "Groove® X Lower Back Pillow",
    price: "£16.50",
    reviews: "161 Reviews",
    description: "For lower back pain relief",
    href: "/react/all-pillows",
    badge: null,
  },
];

const trustBadges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "FREE Delivery",
    description: "on all orders over £45",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "850+ Medical Practitioners",
    description: "Recommended for Neck Pain Relief",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: "100 Night Free Trial",
    description: "Satisfaction Guaranteed",
  },
];

export default function GrooveHomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f5f0eb] to-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#7c6f64]">
                  Rated 4.8 out of 5 by 12,609 happy customers
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-[#2d2926] leading-tight mb-6">
                Get Relief From Neck Pain with The Original Groove® Pillow
              </h1>

              <p className="text-lg text-[#7c6f64] mb-8 leading-relaxed">
                Engineered to provide unmatched comfort and support during
                sleep, so you can wake up pain-free and rejuvenated every
                morning.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {["Relieves Neck Pain", "Improves Sleep Quality", "Reduces Headaches"].map(
                  (benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#2d2926] font-medium">{benefit}</span>
                    </li>
                  )
                )}
              </ul>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#2d2926]">£33.00</span>
                <Link
                  href="/react/original-pillow"
                  className="inline-block bg-[#2d2926] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm uppercase tracking-wider"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Hero Image Placeholder */}
            <div className="bg-[#e8e0d8] rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 bg-[#d4c9bd] rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-[#7c6f64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>
                <p className="text-[#7c6f64] font-medium">The Original Groove® Pillow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-4 justify-center text-center sm:text-left">
                <div className="text-[#7c6f64] flex-shrink-0">{badge.icon}</div>
                <div>
                  <p className="font-semibold text-[#2d2926] text-sm">{badge.title}</p>
                  <p className="text-xs text-[#7c6f64]">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2d2926] mb-4">
              The Groove® Pillows Bestsellers
            </h2>
            <p className="text-[#7c6f64] max-w-2xl mx-auto">
              Find relief and comfort for your neck, back and shoulders with
              Groove® ergonomic pillows
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Link
                key={idx}
                href={product.href}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#f5f0eb] aspect-square flex items-center justify-center relative">
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-[#2d2926] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="w-24 h-24 bg-[#e8e0d8] rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#7c6f64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#7c6f64] mb-1">{product.reviews}</p>
                  <h3 className="font-semibold text-[#2d2926] mb-1 group-hover:text-[#7c6f64] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#7c6f64] mb-3">{product.description}</p>
                  <p className="font-bold text-[#2d2926]">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/react/all-pillows"
              className="inline-block border-2 border-[#2d2926] text-[#2d2926] px-8 py-3 rounded-md font-medium hover:bg-[#2d2926] hover:text-white transition-colors text-sm uppercase tracking-wider"
            >
              View All Pillows
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f5f0eb] py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2d2926] mb-8">
                Experience The Unique Benefits Of The Original Groove® Pillow
              </h2>
              <ul className="flex flex-col gap-5">
                {[
                  "Eliminates neck and upper back pain by gently correcting your posture while you sleep.",
                  "Prevents your spine from curling into an unhealthy position and keeps blood flow in check.",
                  "Relaxes muscles and opens your breathing airways, reducing snoring.",
                  "Promotes neutral spine alignment and counteracts the effects of slouching.",
                  "Its unique dip cradles your neck, applying gentle pressure to aches and stiff spots.",
                  "Most effective when used by people who sleep on their back or side.",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2d2926] text-sm leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image placeholder */}
            <div className="bg-[#e8e0d8] rounded-2xl aspect-[4/3] flex items-center justify-center">
              <p className="text-[#7c6f64] font-medium">Benefits Diagram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2d2926] mb-4">
              The Science Behind The Groove® Pillow&apos;s Supportive Design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Ergonomic Dip",
                description:
                  "Enables neutral spinal alignment while back sleeping and provides comfortable support for your neck, reducing stiffness, shoulder pain, and tension headaches.",
              },
              {
                number: "2",
                title: "Lateral Edge Support",
                description:
                  "The increased height and firmness of the raised lateral edges provide better support for side sleepers by creating a comfortable space for the shoulders.",
              },
              {
                number: "3",
                title: "Scuba Pillow Protector",
                description:
                  "Soft and elegant. The outer-layer scuba pillow protector protects your pillow from stains while retaining minimalist contemporary design.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#f5f0eb] rounded-xl p-8 text-center"
              >
                <div className="w-12 h-12 bg-[#2d2926] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {feature.number}
                </div>
                <h3 className="font-semibold text-[#2d2926] mb-3 text-lg">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#7c6f64] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2d2926] py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-300">
              Rated 4.8 out of 5 by 12,609 happy customers
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Over 200K people have found relief from neck pain
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Sleep pain-free with the Original Groove® Pillow or get a full
            refund within 100 nights.
          </p>
          <Link
            href="/react/original-pillow"
            className="inline-block bg-white text-[#2d2926] px-10 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
}
