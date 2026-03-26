import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "Contact Us | Groove® Pillow",
  description:
    "Get in touch with the Groove® team. We're here to help with any questions about our products.",
};

export default function ContactPage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "Contact Us" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
              Contact Us
            </h1>
            <p className="text-[#7c6f64] max-w-2xl mx-auto">
              If you have any questions, please don&apos;t hesitate to contact
              us. We&apos;re here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-semibold text-[#2d2926] mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#2d2926] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7c6f64] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d2926] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7c6f64] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d2926] mb-1.5">
                    Order Number (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7c6f64] focus:border-transparent"
                    placeholder="#12345"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2d2926] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#7c6f64] focus:border-transparent resize-vertical"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2d2926] text-white py-3.5 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm uppercase tracking-wider"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <div className="bg-[#f5f0eb] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2d2926] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2d2926] mb-1">
                        Email
                      </h3>
                      <p className="text-sm text-[#7c6f64]">
                        support@groovepillows.co.uk
                      </p>
                      <p className="text-xs text-[#7c6f64] mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f5f0eb] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2d2926] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2d2926] mb-1">
                        Address
                      </h3>
                      <p className="text-sm text-[#7c6f64]">
                        Forward LLC
                        <br />
                        32 N Gould Street
                        <br />
                        Sheridan WY 82801
                        <br />
                        United States of America
                      </p>
                      <p className="text-xs text-[#7c6f64] mt-1">
                        Commercial address only. For returns, see our{" "}
                        <a
                          href="/react/returns"
                          className="underline hover:text-[#2d2926]"
                        >
                          returns page
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#f5f0eb] rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2d2926] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#2d2926] mb-1">
                        Business Hours
                      </h3>
                      <p className="text-sm text-[#7c6f64]">
                        Monday - Friday: 9:00 AM - 5:00 PM (GMT)
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
