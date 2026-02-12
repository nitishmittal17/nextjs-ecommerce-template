"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  {
    title: "Pillows",
    submenu: [
      { title: "Original Pillow", path: "/react/original-pillow" },
      { title: "Adjustable Pillow", path: "/react/adjustable-pillow" },
      { title: "All Pillows", path: "/react/all-pillows" },
    ],
  },
  { title: "Pillowcases", path: "/react/pillowcases" },
  { title: "Accessories", path: "/react/accessories" },
  { title: "Reviews", path: "/react/reviews" },
  { title: "Offers", path: "/react/offers" },
];

const secondaryLinks = [
  { title: "Shipping", path: "/react/shipping" },
  { title: "Returns", path: "/react/returns" },
  { title: "Contact Us", path: "/react/contact" },
  { title: "Wholesale", path: "/react/wholesale" },
  { title: "FAQ", path: "/react/faq" },
];

const GrooveHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillowDropdownOpen, setPillowDropdownOpen] = useState(false);
  const [stickyHeader, setStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStickyHeader(window.scrollY >= 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#2d2926] text-white text-center py-2 text-sm font-medium">
        <p>
          Best Pillow for Neck Pain 2025 &bull; Pain Relief Or Your Money Back
        </p>
      </div>

      {/* Main header */}
      <header
        className={`bg-white w-full z-[9999] transition-all duration-300 ${
          stickyHeader ? "fixed top-0 left-0 shadow-md" : "relative"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/react" className="flex-shrink-0">
              <span className="text-2xl font-bold text-[#2d2926] tracking-tight">
                Groove<span className="text-[#7c6f64]">&reg;</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, idx) =>
                link.submenu ? (
                  <div
                    key={idx}
                    className="relative group"
                    onMouseEnter={() => setPillowDropdownOpen(true)}
                    onMouseLeave={() => setPillowDropdownOpen(false)}
                  >
                    <button className="text-sm font-medium text-[#2d2926] hover:text-[#7c6f64] transition-colors flex items-center gap-1">
                      {link.title}
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {pillowDropdownOpen && (
                      <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] border border-gray-100 z-50">
                        {link.submenu.map((sub, subIdx) => (
                          <Link
                            key={subIdx}
                            href={sub.path}
                            className="block px-4 py-2.5 text-sm text-[#2d2926] hover:bg-[#f5f0eb] hover:text-[#7c6f64] transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={link.path!}
                    className="text-sm font-medium text-[#2d2926] hover:text-[#7c6f64] transition-colors"
                  >
                    {link.title}
                  </Link>
                )
              )}
            </nav>

            {/* Secondary Links (desktop) */}
            <div className="hidden lg:flex items-center gap-6">
              {secondaryLinks.slice(0, 3).map((link, idx) => (
                <Link
                  key={idx}
                  href={link.path}
                  className="text-xs font-medium text-[#7c6f64] hover:text-[#2d2926] transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-[#2d2926]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-[1200px] mx-auto px-4 py-4">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, idx) =>
                  link.submenu ? (
                    <div key={idx}>
                      <p className="px-3 py-2 text-sm font-semibold text-[#7c6f64] uppercase tracking-wider">
                        {link.title}
                      </p>
                      {link.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.path}
                          className="block pl-6 pr-3 py-2 text-sm text-[#2d2926] hover:bg-[#f5f0eb] rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={idx}
                      href={link.path!}
                      className="block px-3 py-2 text-sm text-[#2d2926] hover:bg-[#f5f0eb] rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  )
                )}
                <hr className="my-2 border-gray-200" />
                {secondaryLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.path}
                    className="block px-3 py-2 text-sm text-[#7c6f64] hover:bg-[#f5f0eb] rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default GrooveHeader;
