"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const articles = [
  {
    date: "February 10, 2026",
    category: "Product Launch",
    title: "PTC Launches ServiceMax AI — Transforming Field Service Operations",
    excerpt: "AI-powered field service management to optimize and predict maintenance operations, helping organizations reduce downtime and improve customer satisfaction.",
  },
  {
    date: "February 5, 2026",
    category: "Report",
    title: "PTC Named Outright Leader for Enterprise PLM",
    excerpt: "Independent analysis from a leading research firm recognizes PTC as the outright leader in product lifecycle management, citing comprehensive capabilities and innovation.",
  },
  {
    date: "January 28, 2026",
    category: "Innovation",
    title: "Enterprise ALM Accelerates the Pace of Innovation",
    excerpt: "See how application lifecycle management is driving faster product delivery, better collaboration, and complete traceability for complex products.",
  },
  {
    date: "January 20, 2026",
    category: "Partnership",
    title: "PTC Expands Strategic Alliance with Microsoft Azure",
    excerpt: "Extended partnership brings cloud-native CAD and PLM capabilities to a broader range of manufacturers leveraging Microsoft's global cloud infrastructure.",
  },
  {
    date: "January 15, 2026",
    category: "Awards",
    title: "PTC Named a Leader in IDC MarketScape for Service Lifecycle Management",
    excerpt: "Recognized for ServiceMax's comprehensive capabilities and vision for AI-powered service operations management platforms.",
  },
  {
    date: "January 8, 2026",
    category: "Startup Program",
    title: "PTC's Aerospace & Defense Startup Program Launches",
    excerpt: "Offering CAD, ALM, and PLM tools to emerging aerospace and defense companies to help them innovate faster and comply with stringent industry regulations.",
  },
  {
    date: "December 18, 2025",
    category: "Product Update",
    title: "Creo 11 Introduces Next-Generation Generative Design",
    excerpt: "The latest version of PTC's flagship CAD software features enhanced AI-driven generative design, simulation-driven design, and additive manufacturing capabilities.",
  },
  {
    date: "December 10, 2025",
    category: "Sustainability",
    title: "Product Sustainability for Dummies — PTC Special Edition",
    excerpt: "New guide helps manufacturers understand how to embed sustainability into their product development processes using digital tools and data-driven insights.",
  },
];

export default function NewsPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "News" }]} />

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Press</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Stay updated on the latest PTC news, product launches, partnerships,
            and industry recognition.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-6 hover:border-[#00a651]/30 transition-colors group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="bg-[#00a651]/10 text-[#00a651] text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#00a651] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Sign up for the PTC newsletter to receive the latest news and
            insights directly in your inbox.
          </p>
          <Link
            href="/shadow-dom/contact"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}
