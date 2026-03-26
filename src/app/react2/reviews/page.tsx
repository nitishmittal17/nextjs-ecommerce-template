import Link from "next/link";
import { Metadata } from "next";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

export const metadata: Metadata = {
  title: "Reviews | Groove® Customer Reviews",
  description:
    "Read what our 12,609+ happy customers say about the Groove® Pillow. Rated 4.8 out of 5.",
};

const reviews = [
  {
    name: "Sarah T.",
    rating: 5,
    title: "Life changing pillow!",
    text: "I've suffered from neck pain for years and tried countless pillows. The Groove® pillow has been a game changer. From the very first night, I noticed a difference. I wake up without that stiffness I used to dread.",
    date: "2 weeks ago",
    verified: true,
  },
  {
    name: "James M.",
    rating: 5,
    title: "Best pillow I've ever owned",
    text: "As someone who works at a desk all day, neck pain was becoming a real issue. This pillow has significantly reduced my morning stiffness. The ergonomic design really works.",
    date: "1 month ago",
    verified: true,
  },
  {
    name: "Emily R.",
    rating: 4,
    title: "Great support, took a few nights to adjust",
    text: "It took me about 3 nights to get used to the shape, but once I did, the difference was remarkable. My headaches have reduced significantly and I'm sleeping much better.",
    date: "1 month ago",
    verified: true,
  },
  {
    name: "David K.",
    rating: 5,
    title: "Recommended by my physiotherapist",
    text: "My physiotherapist recommended this pillow and I'm so glad they did. The neck support is excellent and I've noticed a massive improvement in my sleep quality.",
    date: "2 months ago",
    verified: true,
  },
  {
    name: "Lisa W.",
    rating: 5,
    title: "No more neck pain!",
    text: "I was skeptical at first, but the 100-night trial convinced me to try it. Best decision ever! My neck pain is gone and I'm sleeping through the night for the first time in months.",
    date: "2 months ago",
    verified: true,
  },
  {
    name: "Michael B.",
    rating: 5,
    title: "Bought one for the whole family",
    text: "After experiencing the benefits myself, I've bought one for my wife and parents too. Everyone loves it. The quality of the memory foam is excellent.",
    date: "3 months ago",
    verified: true,
  },
];

export default function ReviewsPage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "Reviews" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Review Summary */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
              Customer Reviews
            </h1>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-[#2d2926]">
                4.8 out of 5
              </span>
            </div>
            <p className="text-[#7c6f64]">Based on 12,609 reviews</p>
          </div>

          {/* Rating Breakdown */}
          <div className="max-w-md mx-auto mb-12">
            {[
              { stars: 5, percentage: 82 },
              { stars: 4, percentage: 12 },
              { stars: 3, percentage: 4 },
              { stars: 2, percentage: 1 },
              { stars: 1, percentage: 1 },
            ].map((rating) => (
              <div
                key={rating.stars}
                className="flex items-center gap-3 mb-2"
              >
                <span className="text-sm text-[#7c6f64] w-16">
                  {rating.stars} star
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-400 h-2.5 rounded-full"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-[#7c6f64] w-10 text-right">
                  {rating.percentage}%
                </span>
              </div>
            ))}
          </div>

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-[#7c6f64]">{review.date}</span>
                </div>
                <h3 className="font-semibold text-[#2d2926] mb-2">
                  {review.title}
                </h3>
                <p className="text-sm text-[#7c6f64] leading-relaxed mb-3">
                  {review.text}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#2d2926]">
                    {review.name}
                  </span>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs text-green-600">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Verified Purchase
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/react/original-pillow"
              className="inline-block bg-[#2d2926] text-white px-8 py-3.5 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm uppercase tracking-wider"
            >
              Shop The Original Groove® Pillow
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
