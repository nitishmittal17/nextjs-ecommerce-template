"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const mainNav = [
  {
    title: "Produtos",
    submenu: [
      { title: "Todos os Produtos", path: "/nestedShadowDom/products" },
      { title: "IA na DLT", path: "/nestedShadowDom/ai" },
      { title: "Digital Thread", path: "/nestedShadowDom/digital-thread" },
    ],
  },
  {
    title: "Soluções",
    submenu: [
      { title: "Visão Geral", path: "/nestedShadowDom/solutions" },
      { title: "Casos de Sucesso", path: "/nestedShadowDom/case-studies" },
    ],
  },
  { title: "Parceiros", path: "/nestedShadowDom/partners" },
  { title: "Notícias", path: "/nestedShadowDom/news" },
  { title: "Eventos", path: "/nestedShadowDom/events" },
];

const utilityNav = [
  { title: "Suporte", path: "/nestedShadowDom/support" },
  { title: "Treinamento", path: "/nestedShadowDom/training" },
  { title: "Sobre", path: "/nestedShadowDom/about" },
  { title: "Carreiras", path: "/nestedShadowDom/careers" },
  { title: "Contato", path: "/nestedShadowDom/contact" },
];

const DLTHeader = () => {
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
      className={`w-full z-[9999] transition-all duration-300 ${
        sticky ? "fixed top-0 left-0 shadow-lg" : "relative"
      }`}
      style={{ background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a2a 100%)" }}
    >
      {/* Top utility bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-5 h-9">
            {utilityNav.map((link, idx) => (
              <Link
                key={idx}
                href={link.path}
                className="text-xs text-green-200/70 hover:text-white transition-colors"
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
          <Link href="/nestedShadowDom" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#1a6b3c] font-black text-xs">DLT</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight hidden sm:inline">
                Dr. Lava Tudo
              </span>
            </div>
          </Link>

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
                  <button className="px-3 py-2 text-sm font-medium text-green-100/80 hover:text-white transition-colors flex items-center gap-1">
                    {item.title}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === idx && (
                    <div className="absolute top-full left-0 mt-0 bg-[#0d4a2a] shadow-xl rounded-b-lg py-2 min-w-[200px] border border-white/10 z-50">
                      {item.submenu.map((sub, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sub.path}
                          className="block px-4 py-2.5 text-sm text-green-100/80 hover:bg-white/10 hover:text-white transition-colors"
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
                  className="px-3 py-2 text-sm font-medium text-green-100/80 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/nestedShadowDom"
              className="bg-white text-[#1a6b3c] px-4 py-2 rounded-full text-sm font-bold hover:bg-green-50 transition-colors"
            >
              ASSINAR AGORA
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
        <div className="lg:hidden bg-[#0d4a2a] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="max-w-[1200px] mx-auto px-4 py-4">
            <nav className="flex flex-col gap-1">
              {mainNav.map((item, idx) =>
                item.submenu ? (
                  <div key={idx}>
                    <p className="px-3 py-2 text-xs font-semibold text-green-300 uppercase tracking-wider">
                      {item.title}
                    </p>
                    {item.submenu.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.path}
                        className="block pl-6 pr-3 py-2 text-sm text-green-100/80 hover:text-white hover:bg-white/5 rounded"
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
                    className="block px-3 py-2 text-sm text-green-100/80 hover:text-white hover:bg-white/5 rounded"
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
                  className="block px-3 py-2 text-sm text-green-200/60 hover:text-white hover:bg-white/5 rounded"
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

export default DLTHeader;
