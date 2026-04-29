import Link from "next/link";

const demoLinks = [
  { label: "React2", href: "/react2" },
  { label: "Nuxt2", href: "/nuxt2" },
  { label: "Shadow DOM 2", href: "/shadow-dom-2" },
];

export default function DLTHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/nestedShadowDom" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-400 font-black text-slate-950">
            ND
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.24em] text-indigo-200">
              Nested DOM Lab
            </span>
            <span className="block text-xs text-slate-400">
              Shadow roots and iframe nesting
            </span>
          </span>
        </Link>

        <nav className="flex flex-wrap gap-2">
          {demoLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-100 transition hover:border-indigo-300 hover:bg-indigo-300 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
