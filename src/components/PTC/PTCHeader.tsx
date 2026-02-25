"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const mainNav = [
  {
    title: "Products",
    submenu: [
      { title: "All Products", path: "/shadow-dom/products" },
      { title: "AI at PTC", path: "/shadow-dom/ai" },
      { title: "Digital Thread", path: "/shadow-dom/digital-thread" },
    ],
  },
  {
    title: "Solutions",
    submenu: [
      { title: "Solutions Overview", path: "/shadow-dom/solutions" },
      { title: "Case Studies", path: "/shadow-dom/case-studies" },
    ],
  },
  { title: "Partners", path: "/shadow-dom/partners" },
  { title: "News", path: "/shadow-dom/news" },
  { title: "Events", path: "/shadow-dom/events" },
];

const utilityNav = [
  { title: "Support", path: "/shadow-dom/support" },
  { title: "Training", path: "/shadow-dom/training" },
  { title: "About", path: "/shadow-dom/about" },
  { title: "Careers", path: "/shadow-dom/careers" },
  { title: "Contact", path: "/shadow-dom/contact" },
];

const PTCHeader = () => {
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
        sticky ? "fixed top-0 left-0 shadow-lg" : "relative"
      }`}
      style={{ backgroundImage: "url('/images/navbar-bg.png')" }}
    >
      {/* Top utility bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-5 h-9">
            {utilityNav.map((link, idx) => (
              <Link
                key={idx}
                href={link.path}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/shadow-dom" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 bg-[#00a651] rounded flex items-center justify-center">
                <span className="text-white font-black text-xs">PTC</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight hidden sm:inline">
                PTC
              </span>
            </div>
          </Link>

          {/* Nav images */}
          <div className="hidden lg:flex items-center gap-2">
            <Image
              src="/images/parrot.png"
              alt="Parrot"
              width={36}
              height={36}
              className="rounded-full object-cover w-9 h-9"
            />
            <img
              src="/images/autumn.png"
              alt="Autumn"
              width={36}
              height={36}
              className="rounded-full object-cover w-9 h-9"
            />
          </div>

          {/* Navbar iframe */}
          <iframe
            src="https://www.wikipedia.org"
            title="Navbar Embed"
            className="hidden lg:block rounded"
            style={{
              width: 200,
              height: 36,
              border: "3px solid #001f5b",
            }}
          />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item, idx) =>
              item.submenu ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                    {item.title}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === idx && (
                    <div className="absolute top-full left-0 mt-0 bg-[#1a1a2e] shadow-xl rounded-b-lg py-2 min-w-[200px] border border-white/10 z-50">
                      {item.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.path}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-[#00a651] transition-colors"
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
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/shadow-dom/contact"
              className="bg-[#00a651] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#008c44] transition-colors"
            >
              Contact Expert
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="lg:hidden bg-[#1a1a2e] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="max-w-[1200px] mx-auto px-4 py-4">
            <nav className="flex flex-col gap-1">
              {mainNav.map((item, idx) =>
                item.submenu ? (
                  <div key={idx}>
                    <p className="px-3 py-2 text-xs font-semibold text-[#00a651] uppercase tracking-wider">
                      {item.title}
                    </p>
                    {item.submenu.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.path}
                        className="block pl-6 pr-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded"
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
                    className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                )
              )}
              <hr className="my-2 border-white/10" />
              {utilityNav.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.path}
                  className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded"
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

export default PTCHeader;
