import ShadowElement from "@/components/NestedShadowDom/ShadowElement";
import { NestedIframeElement } from "@/components/NestedShadowDom/NestedShadowDomWrapper";

const destinations = [
  { label: "React2", href: "/react2" },
  { label: "Nuxt2", href: "/nuxt2" },
  { label: "Shadow DOM 2", href: "/shadow-dom-2" },
];

const shadowSections = [
  {
    accent: "from-indigo-400 to-sky-300",
    description:
      "This card is portalled into one open shadow root attached to a regular host element.",
    depth: 1,
    eyebrow: "Regular shadow DOM",
    metric: "1 shadow root",
    title: "Regular Shadow DOM Element",
  },
  {
    accent: "from-teal-300 to-emerald-300",
    description:
      "The visible card lives inside a shadow root nested inside another shadow root.",
    depth: 2,
    eyebrow: "Nested shadow DOM",
    metric: "2 shadow roots",
    title: "One-Level Nested Shadow DOM Element",
  },
  {
    accent: "from-amber-300 to-orange-300",
    description:
      "The content is mounted in the innermost root after two nested shadow-host levels.",
    depth: 3,
    eyebrow: "Two levels nested",
    metric: "3 shadow roots",
    title: "Two-Level Nested Shadow Element",
  },
] as const;

const iframeSections = [
  {
    description:
      "A regular iframe renders a complete standalone document with the navigation buttons inside it.",
    depth: 1,
    eyebrow: "Regular iframe",
    title: "Regular Iframe Element",
  },
  {
    description:
      "The outer iframe renders a document that contains one child iframe with the same destination buttons.",
    depth: 2,
    eyebrow: "Nested iframe",
    title: "One-Level Nested Iframe Element",
  },
  {
    description:
      "This section creates an iframe inside an iframe inside another iframe for two nested levels.",
    depth: 3,
    eyebrow: "Two levels nested",
    title: "Two-Level Nested Iframe Element",
  },
] as const;

function DestinationButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {destinations.map((destination) => (
        <a
          key={destination.href}
          href={destination.href}
          className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-sky-300"
        >
          {destination.label}
        </a>
      ))}
    </div>
  );
}

function ShadowDemoCard({
  accent,
  description,
  eyebrow,
  metric,
  title,
}: {
  accent: string;
  description: string;
  eyebrow: string;
  metric: string;
  title: string;
}) {
  return (
    <article className="rounded-[18px] border border-white/10 bg-slate-950/80 p-6 text-white shadow-xl shadow-slate-950/30">
      <div
        className={`mb-5 h-2 w-28 rounded-full bg-gradient-to-r ${accent}`}
      />
      <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
      <p className="my-5 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-slate-200">
        {metric}
      </p>
      <DestinationButtons />
    </article>
  );
}

export default function NestedShadowDomPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.24),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex rounded-full border border-indigo-300/30 bg-indigo-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-indigo-200">
            Shadow DOM and iframe test website
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            One page with regular and nested DOM isolation examples.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            The page includes one regular shadow DOM element, one one-level
            nested shadow DOM element, one two-level nested shadow element, and
            matching iframe examples. Every section includes buttons to React2,
            Nuxt2, and Shadow DOM 2.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-indigo-200">
                Shadow DOM elements
              </p>
              <h2 className="mt-2 text-3xl font-black">Three shadow sections</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400">
              These cards are React content mounted into actual open shadow
              roots, with deeper examples nesting shadow hosts before rendering
              the final content.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {shadowSections.map((section) => (
              <ShadowElement
                key={section.title}
                depth={section.depth}
                label={section.metric}
              >
                <ShadowDemoCard {...section} />
              </ShadowElement>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-200">
                Iframe elements
              </p>
              <h2 className="mt-2 text-3xl font-black">Three iframe sections</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400">
              Each iframe uses a generated document. The nested examples place
              a child iframe inside the previous iframe document.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {iframeSections.map((section) => (
              <section key={section.title} className="rounded-[26px] bg-slate-900/70 p-3">
                <div className="mb-3 px-2">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-200">
                    {section.eyebrow}
                  </p>
                  <h3 className="mt-1 text-xl font-black">{section.title}</h3>
                </div>
                <NestedIframeElement
                  description={section.description}
                  depth={section.depth}
                  title={section.title}
                />
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
