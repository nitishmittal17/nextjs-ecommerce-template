"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const courses = [
  {
    product: "Creo",
    title: "Creo Parametric Essentials",
    duration: "5 days",
    level: "Beginner",
    desc: "Learn the fundamentals of 3D parametric modeling, assemblies, and engineering drawings using Creo Parametric.",
  },
  {
    product: "Creo",
    title: "Advanced Creo Surfacing",
    duration: "3 days",
    level: "Advanced",
    desc: "Master complex surface creation techniques for industrial design and advanced product modeling.",
  },
  {
    product: "Windchill",
    title: "Windchill PDMLink Administration",
    duration: "4 days",
    level: "Intermediate",
    desc: "Configure and administer Windchill for product data management, including user management, workflows, and lifecycle states.",
  },
  {
    product: "Codebeamer",
    title: "Codebeamer for Requirements Engineering",
    duration: "2 days",
    level: "Beginner",
    desc: "Learn to manage requirements, create traceability matrices, and ensure compliance using Codebeamer ALM.",
  },
  {
    product: "ThingWorx",
    title: "ThingWorx IoT Developer Bootcamp",
    duration: "5 days",
    level: "Intermediate",
    desc: "Build connected applications and dashboards using ThingWorx platform, including device connectivity and analytics.",
  },
  {
    product: "Vuforia",
    title: "Vuforia Expert Capture",
    duration: "2 days",
    level: "Beginner",
    desc: "Create step-by-step AR work instructions that improve productivity and quality in manufacturing and service operations.",
  },
  {
    product: "Onshape",
    title: "Onshape Fundamentals",
    duration: "3 days",
    level: "Beginner",
    desc: "Get started with cloud-native CAD, including part modeling, assemblies, and real-time collaboration features.",
  },
  {
    product: "ServiceMax",
    title: "ServiceMax Administration",
    duration: "4 days",
    level: "Intermediate",
    desc: "Configure ServiceMax for field service management, including work orders, scheduling, asset management, and reporting.",
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    case "Advanced":
      return "bg-red-500/10 text-red-400 border-red-500/20";
    default:
      return "bg-gray-500/10 text-gray-400 border-gray-500/20";
  }
};

export default function TrainingPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "PTC University" }]} />

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PTC University</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Build your skills with expert-led training courses, certifications,
            and learning paths for all PTC products. From beginner to advanced,
            we have training to match your needs.
          </p>
        </div>
      </section>

      {/* Training Options */}
      <section className="bg-[#12122a] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Instructor-Led", desc: "Live training with PTC-certified instructors, available in-person or virtual." },
              { title: "Self-Paced", desc: "On-demand courses with hands-on exercises you can complete at your own pace." },
              { title: "Certification", desc: "Validate your expertise with industry-recognized PTC product certifications." },
            ].map((opt, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f23] border border-white/5 rounded-xl p-6 text-center"
              >
                <h3 className="text-lg font-bold mb-2">{opt.title}</h3>
                <p className="text-sm text-gray-400">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">Course Catalog</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-6 hover:border-[#00a651]/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-[#00a651]/10 text-[#00a651] text-xs font-semibold px-3 py-1 rounded-full">
                    {course.product}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <span className="text-xs text-gray-500">{course.duration}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Skills?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contact us to learn about training packages, group discounts, and
            custom learning paths for your organization.
          </p>
          <Link
            href="/shadow-dom/contact"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
          >
            Contact PTC University
          </Link>
        </div>
      </section>
    </div>
  );
}
