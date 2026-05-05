"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const GROOVE_BASES = ["/react2", "/react"] as const;
const ALL_KNOWN_BASES = ["/nuxt2", "/nuxt", "/react2", "/react", "/vue"] as const;

const resolveGrooveBase = (pathname: string | null): string => {
  if (!pathname) return "/react";
  const match = GROOVE_BASES.find(
    (base) => pathname === base || pathname.startsWith(`${base}/`),
  );
  return match ?? "/react";
};

const rebaseLink = (path: string, base: string): string => {
  for (const known of ALL_KNOWN_BASES) {
    if (path === known) return base;
    if (path.startsWith(`${known}/`)) return `${base}${path.slice(known.length)}`;
  }
  return path;
};

const GrooveBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  const pathname = usePathname();
  const base = resolveGrooveBase(pathname);

  return (
    <div className="bg-[#f5f0eb] py-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href={base}
            className="text-[#7c6f64] hover:text-[#2d2926] transition-colors"
          >
            Home
          </Link>
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="text-[#7c6f64]">/</span>
              {item.path ? (
                <Link
                  href={rebaseLink(item.path, base)}
                  className="text-[#7c6f64] hover:text-[#2d2926] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#2d2926] font-medium">
                  {item.label}
                </span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default GrooveBreadcrumb;
