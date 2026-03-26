import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "News | EnergySage",
  description:
    "Latest solar energy news, policy updates, and industry insights from EnergySage.",
};

const articles = [
  {
    title: "Solar still pays for itself — even without the tax credit",
    excerpt: "Even in a worst-case scenario where incentives disappear, solar remains one of the best investments for homeowners.",
    date: "Feb 10, 2026",
    category: "Policy",
  },
  {
    title: "Common solar scams and how to avoid them",
    excerpt: "As solar grows in popularity, so do scams. Here's how to protect yourself and choose a legitimate installer.",
    date: "Feb 5, 2026",
    category: "Consumer Protection",
  },
  {
    title: "Retirees are using this strategy to slash their biggest monthly bills",
    excerpt: "More and more retirees are turning to solar to lock in low energy costs during their fixed-income years.",
    date: "Jan 28, 2026",
    category: "Savings",
  },
  {
    title: "EnergySage releases 21st Solar & Storage Marketplace Report",
    excerpt: "Our latest report reveals solar prices continue to decline while battery adoption surges across all markets.",
    date: "Jan 20, 2026",
    category: "Research",
  },
  {
    title: "New solar tariff policy: what it means for homeowners",
    excerpt: "The latest trade policies could affect solar panel prices. Here's what you need to know.",
    date: "Jan 14, 2026",
    category: "Policy",
  },
  {
    title: "Battery storage adoption doubles in 2025",
    excerpt: "Home battery installations hit record numbers as homeowners seek energy independence and backup power.",
    date: "Jan 8, 2026",
    category: "Industry",
  },
];

export default function NewsPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "News" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#333] mb-3">
            Solar Energy News
          </h1>
          <p className="text-gray-500 mb-10">
            The latest updates on solar energy, policy, and clean energy
            technology.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, idx) => (
              <Link
                key={idx}
                href="/nuxt/news"
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#f26522] transition-all"
              >
                <div className="bg-gray-100 h-44 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-[#f26522] bg-orange-50 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#333] mb-2 group-hover:text-[#f26522] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
