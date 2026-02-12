import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const ESBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link
            href="/nuxt"
            className="text-[#f26522] hover:text-[#d4551a] transition-colors"
          >
            Home
          </Link>
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>
              {item.path ? (
                <Link
                  href={item.path}
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
