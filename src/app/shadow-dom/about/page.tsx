"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const stats = [
  { label: "Founded", value: "1985" },
  { label: "Employees", value: "7,000+" },
  { label: "Countries", value: "30+" },
  { label: "Fortune 500 Customers", value: "95%" },
];

const leaders = [
  { name: "Neil Barua", title: "Chief Executive Officer" },
  { name: "Kristian Talvitie", title: "Chief Financial Officer" },
  { name: "Mike DiTullio", title: "Chief Operating Officer" },
  { name: "Catherine Kniker", title: "Chief Strategy & Sustainability Officer" },
  { name: "Kevin Wrenn", title: "EVP, Product Management" },
  { name: "Aaron von Staats", title: "General Counsel & Corporate Secretary" },
];

export default function AboutPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "About PTC" }]} />

      {/* Hero */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About PTC</h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            PTC enables global manufacturers to achieve double-digit impact with
            software solutions that enable them to accelerate product and service
            innovation, improve operational efficiency, and increase workforce
            productivity. In combination with an extensive partner network, PTC
            provides customers flexibility in how its technology can be deployed.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#12122a] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f23] border border-white/5 rounded-xl p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#00a651] mb-2">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                At PTC, we believe in the power of digital transformation to
                fundamentally change the way companies create, operate, and
                service products. Our mission is to help the world&apos;s leading
                manufacturers drive enterprise-wide digital transformation.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We do this by providing an industry-leading portfolio of
                software solutions and services — from CAD design and PLM to
                IoT and augmented reality — that enable our customers to
                innovate faster, operate more efficiently, and empower their
                workforce.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#12122a] to-[#1a1a3e] border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-[#00a651]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-[#00a651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Global Impact</h3>
              <p className="text-gray-400 text-sm">
                PTC serves thousands of businesses worldwide across 30+
                countries, helping manufacture many of the products you use
                every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-[#12122a] py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f23] border border-white/5 rounded-xl p-6 text-center hover:border-[#00a651]/30 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00a651]/20 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-[#00a651]">
                    {leader.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-bold mb-1">{leader.name}</h3>
                <p className="text-sm text-gray-400">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Be part of a team that is changing the way the world designs,
            manufactures, and services products.
          </p>
          <Link
            href="/shadow-dom/careers"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
          >
            View Careers
          </Link>
        </div>
      </section>
    </div>
  );
}
