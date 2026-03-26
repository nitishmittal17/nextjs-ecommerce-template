import Link from "next/link";
import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "The Original Groove® Pillow | Neck Pain Relief",
  description:
    "The Groove® memory foam pillow eliminates neck and upper back pain and stiffness by correcting your posture while you sleep.",
};

export default function OriginalPillowPage() {
  return (
    <>
      <GrooveBreadcrumb
        items={[
          { label: "All Pillows", path: "/react/all-pillows" },
          { label: "Original Pillow" },
        ]}
      />

      {/* Product Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-[#f5f0eb] rounded-2xl aspect-square flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-40 h-40 mx-auto bg-[#e8e0d8] rounded-full flex items-center justify-center">
                    <svg className="w-20 h-20 text-[#7c6f64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-[#7c6f64]">Product Image</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-[#f5f0eb] rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#7c6f64] transition-all"
                  >
                    <span className="text-xs text-[#7c6f64]">View {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#7c6f64]">12,609 Reviews</span>
              </div>

              <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
                The Original Groove® Pain Relief Pillow - Sleep Better, Wake Up
                Pain-Free
              </h1>

              <p className="text-2xl font-bold text-[#2d2926] mb-2">£33.00</p>
              <p className="text-sm text-green-600 font-medium mb-6">
                2 for £50 - save 24%
              </p>

              <p className="text-[#7c6f64] mb-6 leading-relaxed">
                The Groove® memory foam pillow eliminates neck and upper back
                pain and stiffness by correcting your posture while you sleep.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2d2926]">
                    <strong>Effective neck pain relief</strong> with results
                    from night one.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2d2926]">
                    <strong>Reduces headaches and shoulder pain</strong> by
                    properly supporting your spine.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[#2d2926]">
                    <strong>Get a better night&apos;s sleep</strong> – and wake
                    up refreshed.
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button className="flex-1 bg-[#2d2926] text-white py-4 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm uppercase tracking-wider">
                  Buy for £33.00
                </button>
                <button className="flex-1 border-2 border-[#2d2926] text-[#2d2926] py-4 rounded-md font-medium hover:bg-[#2d2926] hover:text-white transition-colors text-sm uppercase tracking-wider">
                  Bundle &amp; Save
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-[#7c6f64]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  100 Night Sleep Trial
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Free Delivery Over £45
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="bg-[#f5f0eb] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2d2926] mb-8 text-center">
            Equally Effective For Back And Side Sleepers
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#e8e0d8] rounded-full flex items-center justify-center">
                <span className="text-[#7c6f64] font-bold">Back</span>
              </div>
              <h3 className="font-semibold text-[#2d2926] mb-2">Back Sleepers</h3>
              <p className="text-sm text-[#7c6f64]">
                Place your head in the ergonomic dip for optimal neck support
                and spinal alignment.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#e8e0d8] rounded-full flex items-center justify-center">
                <span className="text-[#7c6f64] font-bold">Side</span>
              </div>
              <h3 className="font-semibold text-[#2d2926] mb-2">Side Sleepers</h3>
              <p className="text-sm text-[#7c6f64]">
                Rest your head on either of the raised lateral sides for
                comfortable shoulder support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#2d2926] mb-4">
            Looking for an adjustable option?
          </h2>
          <p className="text-[#7c6f64] mb-6">
            Try the Groove® Adjustable Pillow 2.0 with the same high-quality
            materials.
          </p>
          <Link
            href="/react/adjustable-pillow"
            className="inline-block bg-[#2d2926] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm uppercase tracking-wider"
          >
            Shop Adjustable
          </Link>
        </div>
      </section>
    </>
  );
}
