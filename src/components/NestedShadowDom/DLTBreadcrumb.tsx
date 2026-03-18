import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

const DLTBreadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <div className="bg-[#0d4a2a] border-b border-white/5 py-3">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/nestedShadowDom" className="text-green-400 hover:text-green-300 transition-colors">
            Home
          </Link>
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="text-green-800">/</span>
              {item.path ? (
                <Link href={item.path} className="text-green-400 hover:text-green-300 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-green-100 font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DLTBreadcrumb;
