import Link from "next/link";
import { Metadata } from "next";
import ESBreadcrumb from "@/components/EnergySage/ESBreadcrumb";

export const metadata: Metadata = {
  title: "Blog | EnergySage",
  description:
    "Tips, guides, and expert insights on solar energy, home batteries, EVs, and clean energy living.",
};

const posts = [
  {
    title: "'EVs drive better,' says one of the internet's biggest car guys",
    excerpt: "Why even diehard car enthusiasts are making the switch to electric vehicles.",
    date: "Feb 8, 2026",
    category: "EV",
    readTime: "5 min read",
  },
  {
    title: "7 tips to make your home safer — and cheaper — this winter",
    excerpt: "Simple upgrades that can cut your heating bill and improve your home's comfort.",
    date: "Feb 1, 2026",
    category: "Efficiency",
    readTime: "4 min read",
  },
  {
    title: "Solar is the 'Costco of energy,' according to Bill McKibben",
    excerpt: "The renowned environmentalist explains why solar is the best deal in energy.",
    date: "Jan 25, 2026",
    category: "Solar",
    readTime: "6 min read",
  },
  {
    title: "The complete guide to net metering in 2026",
    excerpt: "How net metering works, which states offer it, and how it affects your solar savings.",
    date: "Jan 18, 2026",
    category: "Solar",
    readTime: "8 min read",
  },
  {
    title: "Should you get a heat pump water heater?",
    excerpt: "Heat pump water heaters are 3x more efficient than conventional ones. Here's what to know.",
    date: "Jan 12, 2026",
    category: "Heat Pumps",
    readTime: "5 min read",
  },
  {
    title: "How one family went fully electric and saved $3,000/year",
    excerpt: "A real-world case study of whole-home electrification: solar, batteries, heat pump, and EV.",
    date: "Jan 5, 2026",
    category: "Case Study",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <ESBreadcrumb items={[{ label: "Blog" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#333] mb-3">
            EnergySage Blog
          </h1>
          <p className="text-gray-500 mb-10">
            Expert tips, guides, and stories about clean energy living.
          </p>

          {/* Featured Post */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-10 border border-orange-100">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-[#f26522] text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                  FEATURED
                </span>
                <h2 className="text-2xl font-bold text-[#333] mb-3">
                  {posts[0].title}
                </h2>
                <p className="text-gray-500 mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{posts[0].date}</span>
                  <span>&bull;</span>
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
              <div className="bg-white/60 rounded-xl h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, idx) => (
              <Link
                key={idx}
                href="/nuxt/blog"
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#f26522] transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[#f26522] bg-orange-50 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="font-semibold text-[#333] mb-2 group-hover:text-[#f26522] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="text-xs text-gray-400">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
