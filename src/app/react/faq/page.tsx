"use client";
import { useState } from "react";
import Link from "next/link";
import GrooveBreadcrumb from "@/components/Groove/GrooveBreadcrumb";

const faqs = [
  {
    question: "Does it work for back and side sleepers?",
    answer:
      "Yes. With its innovative ergonomic design, the Original Groove® Pillow conforms to your neck and head without forcing you to change your sleeping position. It's designed to be supportive and comfortable no matter which way you sleep. Therefore, it is ideal for everyone, including side-sleepers, back-sleepers, and stomach sleepers.",
  },
  {
    question:
      "I've tried a lot of other pillows, and I'm skeptical. How do I know this one will work for me?",
    answer:
      "We are so confident that the Original Groove® Pillow will improve your sleeping experience that we offer a 100-night risk-free trial. If you see no difference during this time, simply return it for a full refund. No questions asked!",
  },
  {
    question: "Does it work for chronic neck pain?",
    answer:
      "Yes. The Groove® pillow is unique in its shape and design, which makes it an ideal solution for those who suffer from chronic neck pain. It supports the natural curve of your neck and spine, keeping your head in alignment with your back. This helps to relieve pressure on the nerves in your spine, which can cause chronic pain.",
  },
  {
    question:
      "How should I use this pillow to achieve the best results?",
    answer:
      "It's best to use the Original Groove® Pillow on its own. No other pillow should be placed underneath it or above it. For those who sleep on their backs, place your head in the ergonomic dip; for those who sleep on their sides, rest your head on either of the raised lateral sides.",
  },
  {
    question:
      "Can this pillow relieve my arm numbness or tingling?",
    answer:
      "The unique shape of the Groove pillow supports your body weight and allows space for your shoulder under the pillow, so the pressure is not placed on your arm, therefore preventing arm numbness or tingling.",
  },
  {
    question: "What is the pillow made of?",
    answer:
      "The Groove® pillow is made from premium memory foam that conforms to the shape of your head and neck. It comes with a soft scuba pillow protector that is both elegant and protective.",
  },
  {
    question: "How do I clean the pillow?",
    answer:
      "The outer scuba pillow protector can be removed and machine washed at 30°C. The memory foam core should be spot cleaned only. We recommend using one of our Groove® pillowcases for easier maintenance.",
  },
  {
    question: "What is the 100-night trial?",
    answer:
      "We offer a 100-night risk-free trial on all Groove® pillows. If you're not completely satisfied within 100 nights of purchase, contact us and we'll arrange a full refund. No questions asked.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#f5f0eb] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-[#2d2926] text-sm">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-[#7c6f64] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-sm text-[#7c6f64] leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <GrooveBreadcrumb items={[{ label: "FAQ" }]} />

      <section className="py-12 lg:py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-[#2d2926] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-[#7c6f64]">
              If you have any further questions, please don&apos;t hesitate to
              contact us at{" "}
              <a
                href="mailto:support@groovepillows.co.uk"
                className="text-[#2d2926] underline"
              >
                support@groovepillows.co.uk
              </a>
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#7c6f64] mb-4">
              Still have questions?
            </p>
            <Link
              href="/react/contact"
              className="inline-block bg-[#2d2926] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1a1714] transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
