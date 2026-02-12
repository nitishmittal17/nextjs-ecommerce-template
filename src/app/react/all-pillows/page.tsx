import Link from "next/link";
import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "All Pillows | Groove® Pillow Collection",
  description:
    "Browse all Groove® memory foam pillows. Find relief and comfort for your neck, back and shoulders.",
};

const allProducts = [
  {
    name: "The Original Groove® Pillow",
    price: "£33.00",
    reviews: "12,609",
    description: "Designed to relieve neck pain",
    href: "/react/original-pillow",
    badge: "BESTSELLER",
  },
  {
    name: "Groove® Adjustable Pillow 2.0",
    price: "£45.00",
    reviews: "291",
    description: "Adjust the height with four panels",
    href: "/react/adjustable-pillow",
    badge: "NEW",
  },
  {
    name: "Groove® Adjustable 3-in-1 Knee Pillow",
    price: "£28.00",
    reviews: null,
    description: "For knee & hip pain relief",
    href: "/react/all-pillows",
    badge: "NEW",
  },
  {
    name: "Groove® Body Pillow",
    price: "£45.00",
    reviews: "21",
    description: "Full body pain relief pillow",
    href: "/react/all-pillows",
    badge: null,
  },
  {
    name: "Groove® X Lower Back Pillow",
    price: "£16.50",
    reviews: "161",
    description: "For lower back pain relief",
    href: "/react/all-pillows",
    badge: null,
  },
];

export default function AllPillowsPage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "All Pillows" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
              All Groove® Pillows
            </h1>
            <p className="text-[#7c6f64] max-w-2xl mx-auto">
              Browse all memory foam pillows. Find relief and comfort for your
              neck, back and shoulders with Groove® ergonomic pillows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, idx) => (
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
                  {product.reviews && (
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-[#7c6f64]">
                        {product.reviews} Reviews
                      </span>
                    </div>
                  )}
                  <h3 className="font-semibold text-[#2d2926] mb-1 group-hover:text-[#7c6f64] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#7c6f64] mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[#2d2926]">{product.price}</p>
                    <span className="text-xs text-[#7c6f64] bg-[#f5f0eb] px-3 py-1.5 rounded-full font-medium group-hover:bg-[#2d2926] group-hover:text-white transition-colors">
                      Add to Cart
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
