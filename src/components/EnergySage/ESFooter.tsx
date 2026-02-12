import React from "react";
import Link from "next/link";

const ESFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2332] text-white">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Offerings */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[#f26522]">
              Our Offerings
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home Solar", href: "/nuxt/home-solar" },
                { label: "Home Batteries", href: "/nuxt/home-batteries" },
                { label: "EV Charging", href: "/nuxt/ev-charging" },
                { label: "Heat Pumps", href: "/nuxt/heat-pumps" },
                { label: "Community Solar", href: "/nuxt/community-solar" },
                { label: "Electricity Plans", href: "/nuxt/electricity-plans" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[#f26522]">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Solar Calculator", href: "/nuxt/solar-calculator" },
                { label: "Solar Incentives", href: "/nuxt/solar-incentives" },
                { label: "Financing", href: "/nuxt/financing" },
                { label: "News", href: "/nuxt/news" },
                { label: "Blog", href: "/nuxt/blog" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[#f26522]">
              About Us
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About EnergySage", href: "/nuxt/about" },
                { label: "Contact Us", href: "/nuxt/contact" },
                { label: "How It Works", href: "/nuxt/about" },
                { label: "Editorial Guidelines", href: "/nuxt/about" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[#f26522]">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest solar news, tips, and exclusive offers delivered to
              your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2.5 rounded-l-md text-[#333] text-sm focus:outline-none"
              />
              <button className="bg-[#f26522] hover:bg-[#d4551a] text-white px-4 py-2.5 rounded-r-md text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {["Facebook", "LinkedIn", "Instagram", "YouTube"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-xs"
                    aria-label={platform}
                  >
                    {platform}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#f26522] rounded-full flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L10 6.073 6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-400">
                &copy; {year} EnergySage, Inc. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-5">
              <Link href="/nuxt" className="text-xs text-gray-400 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/nuxt" className="text-xs text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ESFooter;
