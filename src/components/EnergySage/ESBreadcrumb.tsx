"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const ES_BASES = ["/nuxt2", "/nuxt"] as const;
const ALL_KNOWN_BASES = ["/nuxt2", "/nuxt", "/react2", "/react", "/vue"] as const;

const resolveEsBase = (pathname: string | null): string => {
  if (!pathname) return "/nuxt";
  const match = ES_BASES.find(
    (base) => pathname === base || pathname.startsWith(`${base}/`),
  );
  return match ?? "/nuxt";
};

const rebaseLink = (path: string, base: string): string => {
  for (const known of ALL_KNOWN_BASES) {
    if (path === known) return base;
    if (path.startsWith(`${known}/`)) return `${base}${path.slice(known.length)}`;
  }
  return path;
};

const ESBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  const pathname = usePathname();
  const base = resolveEsBase(pathname);

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href={base}
            className="text-[#f26522] hover:text-[#d4551a] transition-colors"
          >
            Home
          </Link>
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>
              {item.path ? (
                <Link
                  href={rebaseLink(item.path, base)}
                  className="text-[#f26522] hover:text-[#d4551a] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#333] font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ESBreadcrumb;
