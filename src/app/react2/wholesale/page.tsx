import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "Wholesale | Groove® Pillow",
  description:
    "Interested in selling Groove® pillows? Learn about our wholesale program and become a retail partner.",
};

export default function WholesalePage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "Wholesale" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
              Wholesale &amp; Partnerships
            </h1>
            <p className="text-[#7c6f64] max-w-2xl mx-auto">
              Interested in stocking Groove® pillows in your store or practice?
              We&apos;d love to hear from you.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Retail Partners",
                description:
                  "Stock our award-winning pillows in your retail location with competitive wholesale pricing.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                title: "Medical Professionals",
                description:
                  "Recommend Groove® to your patients with our practitioner partnership program.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
              {
                title: "Hotels & Hospitality",
                description:
                  "Enhance your guests' experience with premium sleep products at bulk rates.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "Corporate Gifting",
                description:
                  "Give the gift of better sleep to your employees or clients with custom bulk orders.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f5f0eb] rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-[#2d2926] text-white rounded-full flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#2d2926] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#7c6f64] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Wholesale Form */}
          <div className="bg-white border border-gray-100 rounded-xl p-8">
            <h2 className="text-xl font-semibold text-[#2d2926] mb-6">
              Wholesale Enquiry
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#2d2926] mb-1.5">
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7c6f64] focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d2926] mb-1.5">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7c6f64] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2d2926] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7c6f64] focus:border-transparent"
                  placeholder="business@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2d2926] mb-1.5">
                  Type of Business
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7c6f64] focus:border-transparent bg-white">
                  <option>Select type</option>
                  <option>Retail Store</option>
                  <option>Medical Practice</option>
                  <option>Hotel / Hospitality</option>
                  <option>Corporate</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2d2926] mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7c6f64] focus:border-transparent resize-vertical"
                  placeholder="Tell us about your wholesale needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#2d2926] text-white py-3.5 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm uppercase tracking-wider"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
