import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const GrooveBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <div className="bg-[#f5f0eb] py-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/react"
            className="text-[#7c6f64] hover:text-[#2d2926] transition-colors"
          >
            Home
          </Link>
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="text-[#7c6f64]">/</span>
              {item.path ? (
                <Link
                  href={item.path}
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
