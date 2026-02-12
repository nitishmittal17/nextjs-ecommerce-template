import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const PTCBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <div className="bg-[#12122a] border-b border-white/5 py-3">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/shadow-dom" className="text-[#00a651] hover:text-[#00c45e] transition-colors">
            Home
          </Link>
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="text-gray-600">/</span>
              {item.path ? (
                <Link href={item.path} className="text-[#00a651] hover:text-[#00c45e] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-300 font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default PTCBreadcrumb;
