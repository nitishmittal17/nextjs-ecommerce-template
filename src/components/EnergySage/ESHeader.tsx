"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const mainNav = [
  {
    title: "Home Solar",
    submenu: [
      { title: "Home Solar Guide", path: "/nuxt/home-solar" },
      { title: "Solar Calculator", path: "/nuxt/solar-calculator" },
      { title: "Solar Incentives", path: "/nuxt/solar-incentives" },
      { title: "Financing", path: "/nuxt/financing" },
      { title: "Best Solar Panels", path: "/nuxt/home-solar" },
    ],
  },
  {
    title: "Home Batteries",
    path: "/nuxt/home-batteries",
  },
  {
    title: "EV Charging",
    path: "/nuxt/ev-charging",
  },
  {
    title: "Heat Pumps",
    path: "/nuxt/heat-pumps",
  },
  {
    title: "Electricity Plans",
    path: "/nuxt/electricity-plans",
  },
];

const secondaryNav = [
  { title: "Community Solar", path: "/nuxt/community-solar" },
  { title: "News", path: "/nuxt/news" },
  { title: "Blog", path: "/nuxt/blog" },
  { title: "About Us", path: "/nuxt/about" },
  { title: "Contact", path: "/nuxt/contact" },
];

const ESHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full z-[9999] transition-all duration-300 bg-cover bg-center bg-no-repeat ${
        sticky ? "fixed top-0 left-0 shadow-md" : "relative"
      }`}
      style={{ backgroundImage: "url('/images/bg-landscape.png')" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/nuxt" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/parrot-nav.png"
              alt="Parrot"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <img
              src="/images/autumn-leaves.png"
              alt="Autumn leaves"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-bold text-[#333]">
              Energy<span className="text-[#f26522]">Sage</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item, idx) =>
              item.submenu ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-3 py-2 text-sm font-medium text-[#333] hover:text-[#f26522] transition-colors flex items-center gap-1 rounded-md hover:bg-orange-50">
                    {item.title}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === idx && (
                    <div className="absolute top-full left-0 mt-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] border border-gray-100 z-50">
                      {item.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.path}
                          className="block px-4 py-2.5 text-sm text-[#333] hover:bg-orange-50 hover:text-[#f26522] transition-colors"
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
                  href={item.path!}
                  className="px-3 py-2 text-sm font-medium text-[#333] hover:text-[#f26522] transition-colors rounded-md hover:bg-orange-50"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/nuxt/solar-calculator"
              className="text-sm font-medium text-[#f26522] hover:text-[#d4551a] transition-colors"
            >
              Solar Calculator
            </Link>
            <Link
              href="/nuxt/about"
              className="bg-[#f26522] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#d4551a] transition-colors"
            >
              Get Quotes
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="max-w-[1200px] mx-auto px-4 py-4">
            <nav className="flex flex-col gap-1">
              {mainNav.map((item, idx) =>
                item.submenu ? (
                  <div key={idx}>
                    <p className="px-3 py-2 text-xs font-semibold text-[#f26522] uppercase tracking-wider">
                      {item.title}
                    </p>
                    {item.submenu.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.path}
                        className="block pl-6 pr-3 py-2 text-sm text-[#333] hover:bg-orange-50 rounded-md"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={item.path!}
                    className="block px-3 py-2 text-sm text-[#333] hover:bg-orange-50 rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
              <hr className="my-2 border-gray-200" />
              {secondaryNav.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.path}
                  className="block px-3 py-2 text-sm text-gray-500 hover:bg-orange-50 rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default ESHeader;
