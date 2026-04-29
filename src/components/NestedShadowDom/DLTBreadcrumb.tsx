import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export default function DLTBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="border-b border-white/10 bg-slate-900 px-4 py-3 text-sm text-white sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-2">
        <Link href="/nestedShadowDom" className="font-bold text-sky-300 hover:text-sky-200">
          Nested DOM Lab
        </Link>
        {items.map((item) => (
          <span key={item.label} className="flex items-center gap-2 text-slate-400">
            <span>/</span>
            {item.path ? (
              <Link href={item.path} className="text-sky-300 hover:text-sky-200">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-100">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
