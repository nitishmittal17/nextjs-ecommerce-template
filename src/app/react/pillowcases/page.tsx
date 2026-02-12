import Link from "next/link";
import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "Pillowcases | Groove® Pillow Accessories",
  description:
    "The perfect partners for your Groove® Pillow. Browse our range of premium pillowcases.",
};

const pillowcases = [
  {
    name: "Groove® Cooling Tencel Pillowcase",
    price: "£15.00",
    reviews: "143",
    description:
      "Temperature-regulating Tencel fabric for cool, comfortable sleep.",
  },
  {
    name: "Groove® 100% Cotton Pillowcase 2-Pack",
    price: "£21.50",
    reviews: "207",
    description:
      "Soft, breathable 100% cotton pillowcases. Pack of 2.",
  },
];

export default function PillowcasesPage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "Pillowcases" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
              Groove® Pillowcases
            </h1>
            <p className="text-[#7c6f64] max-w-2xl mx-auto">
              The perfect partners for your Groove® Pillow. Our premium
              pillowcases are designed to complement the ergonomic shape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {pillowcases.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#f5f0eb] aspect-[4/3] flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#e8e0d8] rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#7c6f64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-[#7c6f64]">
                      {item.reviews} Reviews
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#2d2926] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#7c6f64] mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[#2d2926] text-lg">
                      {item.price}
                    </p>
                    <button className="bg-[#2d2926] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#1a1714] transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/react/all-pillows"
              className="text-[#7c6f64] hover:text-[#2d2926] text-sm font-medium transition-colors"
            >
              &larr; Back to All Pillows
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
