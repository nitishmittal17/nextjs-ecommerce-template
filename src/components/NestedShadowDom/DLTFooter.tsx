import Link from "next/link";

const links = [
  { label: "React2", href: "/react2" },
  { label: "Nuxt2", href: "/nuxt2" },
  { label: "Shadow DOM 2", href: "/shadow-dom-2" },
];

export default function DLTFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-indigo-200">
            Nested DOM Lab
          </p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            A compact page for checking regular and nested shadow DOM elements
            alongside regular and nested iframe elements.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-sky-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
