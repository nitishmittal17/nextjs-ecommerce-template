"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GROOVE_BASES = ["/react2", "/react"] as const;

const resolveGrooveBase = (pathname: string | null): string => {
  if (!pathname) return "/react";
  const match = GROOVE_BASES.find(
    (base) => pathname === base || pathname.startsWith(`${base}/`),
  );
  return match ?? "/react";
};

const GrooveFooter = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const base = resolveGrooveBase(pathname);
  const withBase = (path: string) => `${base}${path}`;

  return (
    <footer className="bg-[#2d2926] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-[#3d3936]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">
              Sleep secrets and special offers to your inbox
            </h3>
            <div className="max-w-md mx-auto flex mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-md text-[#2d2926] text-sm focus:outline-none"
              />
              <button className="bg-[#7c6f64] hover:bg-[#6b5f54] text-white px-6 py-3 rounded-r-md text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link href={base} className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tight">
                Groove<span className="text-[#a89888]">&reg;</span>
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              We&apos;ve set out on a mission to improve the physical, mental
              and emotional well-being of society through the power of sleep.
            </p>
          </div>

          {/* Groove Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Our Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href={withBase("/original-pillow")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Original Pillow
                </Link>
              </li>
              <li>
                <Link
                  href={withBase("/adjustable-pillow")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Adjustable Memory Pillow
                </Link>
              </li>
              <li>
                <Link
                  href={withBase("/all-pillows")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  All Pillows
                </Link>
              </li>
              <li>
                <Link
                  href={withBase("/pillowcases")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Pillowcases
                </Link>
              </li>
              <li>
                <Link
                  href={withBase("/accessories")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Customer Care
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href={withBase("/shipping")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  href={withBase("/returns")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Returns &amp; Warranty
                </Link>
              </li>
              <li>
                <Link
                  href={withBase("/faq")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href={withBase("/contact")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={withBase("/wholesale")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Wholesale
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href={withBase("/reviews")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href={withBase("/offers")}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  href={base}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3d3936]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {year} Groove&reg;. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={base}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href={base}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GrooveFooter;
