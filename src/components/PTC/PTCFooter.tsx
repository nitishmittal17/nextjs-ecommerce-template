import React from "react";
import Link from "next/link";

const PTCFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d1a] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Explore PTC */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[#00a651]">
              Explore PTC
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "About PTC", href: "/shadow-dom/about" },
                { label: "Products", href: "/shadow-dom/products" },
                { label: "Solutions", href: "/shadow-dom/solutions" },
                { label: "AI at PTC", href: "/shadow-dom/ai" },
                { label: "Digital Thread", href: "/shadow-dom/digital-thread" },
                { label: "Case Studies", href: "/shadow-dom/case-studies" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[#00a651]">
              Support &amp; Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Support Portal", href: "/shadow-dom/support" },
                { label: "PTC University", href: "/shadow-dom/training" },
                { label: "Partners", href: "/shadow-dom/partners" },
                { label: "Contact an Expert", href: "/shadow-dom/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[#00a651]">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "News", href: "/shadow-dom/news" },
                { label: "Events", href: "/shadow-dom/events" },
                { label: "Careers", href: "/shadow-dom/careers" },
                { label: "Leadership", href: "/shadow-dom/about" },
                { label: "Investor Relations", href: "/shadow-dom/about" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#00a651] rounded flex items-center justify-center">
                <span className="text-white font-black text-sm">PTC</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              PTC is a global leader in product lifecycle management, CAD, PLM,
              ALM, IoT, and AR software, helping manufacturers drive digital
              transformation.
            </p>
            <p className="text-xs text-gray-500">
              95% of Fortune 500 discrete manufacturing companies are PTC
              customers.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500">
              &copy; Copyright {year} PTC
            </p>
            <div className="flex items-center gap-5">
              {["Legal", "Trust Center", "Privacy Policy"].map((item) => (
                <Link
                  key={item}
                  href="/shadow-dom"
                  className="text-xs text-gray-500 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PTCFooter;
