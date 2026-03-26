import Link from "next/link";
import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "Groove® Adjustable Memory Foam Pillow 2.0",
  description:
    "Adjust the height with four panels. The same high-quality materials as the award-winning Groove® Original.",
};

export default function AdjustablePillowPage() {
  return (
    <>
      <GrooveBreadcrumb
        items={[
          { label: "All Pillows", path: "/react/all-pillows" },
          { label: "Adjustable Pillow" },
        ]}
      />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-[#f5f0eb] rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto bg-[#e8e0d8] rounded-full flex items-center justify-center">
                  <svg className="w-20 h-20 text-[#7c6f64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <p className="mt-4 text-[#7c6f64]">Adjustable Pillow 2.0</p>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                NEW
              </span>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#7c6f64]">291 Reviews</span>
              </div>

              <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
                The Groove® Adjustable Memory Foam Pillow 2.0
              </h1>

              <p className="text-2xl font-bold text-[#2d2926] mb-6">£45.00</p>

              <p className="text-[#7c6f64] mb-6 leading-relaxed">
                With the same, high-quality materials as our award-winning
                Groove® Original, upgrade your sleep experience with the new
                Groove® Adjustable 2.0. Adjust the height with four removable
                panels to find your perfect fit.
              </p>

              <div className="bg-[#f5f0eb] rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-[#2d2926] mb-3">
                  Key Features:
                </h3>
                <ul className="flex flex-col gap-2">
                  {[
                    "Four removable panels for custom height",
                    "Premium memory foam construction",
                    "Same ergonomic dip design as the Original",
                    "Removable & washable cover",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#2d2926]">
                      <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#2d2926] text-white py-4 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm uppercase tracking-wider mb-4">
                Add to Cart - £45.00
              </button>

              <p className="text-center text-sm text-[#7c6f64]">
                100 Night Sleep Trial &bull; Free Delivery Over £45
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-[#f5f0eb] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2d2926] mb-8 text-center">
            Groove® Adjustable vs Groove® Original
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-semibold text-[#2d2926] mb-4 text-lg">
                Groove® Original
              </h3>
              <ul className="flex flex-col gap-3 mb-6">
                {["Fixed height", "Ergonomic dip design", "Memory foam", "£33.00"].map(
                  (item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#7c6f64]">
                      <span className="w-1.5 h-1.5 bg-[#7c6f64] rounded-full" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link
                href="/react/original-pillow"
                className="inline-block border border-[#2d2926] text-[#2d2926] px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#2d2926] hover:text-white transition-colors"
              >
                Shop Original
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 ring-2 ring-[#2d2926]">
              <span className="inline-block bg-[#2d2926] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                RECOMMENDED
              </span>
              <h3 className="font-semibold text-[#2d2926] mb-4 text-lg">
                Groove® Adjustable 2.0
              </h3>
              <ul className="flex flex-col gap-3 mb-6">
                {[
                  "Adjustable height (4 panels)",
                  "Ergonomic dip design",
                  "Premium memory foam",
                  "£45.00",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[#7c6f64]">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-[#2d2926] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#1a1714] transition-colors">
                Shop Adjustable
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
