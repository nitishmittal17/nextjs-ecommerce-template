import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "Contact Us | EnergySage",
  description:
    "Get in touch with EnergySage. Our Energy Advisors are here to help you with your solar journey.",
};

export default function ContactPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "Contact Us" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#333] mb-4">
              Contact Us
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our Energy Advisors are here to help you navigate your clean
              energy journey. Reach out with any questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-xl font-semibold text-[#333] mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">
                    Topic
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent bg-white">
                    <option>Select a topic</option>
                    <option>Getting solar quotes</option>
                    <option>Existing solar installation</option>
                    <option>Home batteries</option>
                    <option>Community solar</option>
                    <option>Technical question</option>
                    <option>Press inquiry</option>
                    <option>Partnership opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent resize-vertical"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f26522] text-white py-3.5 rounded-md font-semibold hover:bg-[#d4551a] transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f26522] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333] mb-1">
                      Energy Advisors
                    </h3>
                    <p className="text-sm text-gray-500">
                      Our team of unbiased Energy Advisors is available to help
                      you understand your options and make the best decision for
                      your home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333] mb-1">Email</h3>
                    <p className="text-sm text-gray-500">
                      support@energysage.com
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      We typically respond within 1 business day
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333] mb-1">Hours</h3>
                    <p className="text-sm text-gray-500">
                      Monday - Friday: 9:00 AM - 6:00 PM (ET)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-[#333] mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Solar Calculator", href: "/nuxt/solar-calculator" },
                    { label: "Solar Incentives", href: "/nuxt/solar-incentives" },
                    { label: "Home Solar Guide", href: "/nuxt/home-solar" },
                    { label: "How to Pay for Solar", href: "/nuxt/financing" },
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#f26522] hover:text-[#d4551a] transition-colors"
                      >
                        {link.label} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
