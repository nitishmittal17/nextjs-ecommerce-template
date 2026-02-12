import Link from "next/link";
import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "Accessories | Groove® Pillow Accessories",
  description:
    "Browse Groove® accessories including pillowcases, bundles, and sleep essentials.",
};

const accessories = [
  {
    name: "Groove® Cooling Tencel Pillowcase",
    price: "£15.00",
    description: "Temperature-regulating Tencel fabric",
    href: "/react/pillowcases",
  },
  {
    name: "Groove® 100% Cotton Pillowcase 2-Pack",
    price: "£21.50",
    description: "Soft, breathable 100% cotton. Pack of 2.",
    href: "/react/pillowcases",
  },
  {
    name: "Groove® Original Sleep Essentials Bundle",
    price: "£49.00",
    description: "The Groove Original Pillow, Pillowcase and Mask Bundle",
    href: "/react/original-pillow",
  },
];

export default function AccessoriesPage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "Accessories" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
              Groove® Accessories
            </h1>
            <p className="text-[#7c6f64] max-w-2xl mx-auto">
              Complete your sleep setup with our range of accessories, bundles,
              and sleep essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessories.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#f5f0eb] aspect-square flex items-center justify-center">
                  <div className="w-24 h-24 bg-[#e8e0d8] rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#7c6f64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#2d2926] mb-1 group-hover:text-[#7c6f64] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#7c6f64] mb-3">
                    {item.description}
                  </p>
                  <p className="font-bold text-[#2d2926]">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
