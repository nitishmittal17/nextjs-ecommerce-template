"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const events = [
  {
    name: "LiveWorx 2026",
    date: "June 15-18, 2026",
    location: "Boston, MA",
    type: "Conference",
    desc: "PTC's premier annual technology conference bringing together thousands of customers, partners, and industry leaders to explore the future of product development and digital transformation.",
  },
  {
    name: "Creo Innovation Summit",
    date: "March 20, 2026",
    location: "Virtual",
    type: "Virtual Event",
    desc: "Deep-dive into the latest Creo capabilities, generative design advancements, and real-world CAD best practices from PTC experts and customers.",
  },
  {
    name: "PLM World Forum",
    date: "April 8-9, 2026",
    location: "Munich, Germany",
    type: "Conference",
    desc: "European conference dedicated to PLM innovation, featuring Windchill deep-dives, digital thread strategies, and enterprise transformation case studies.",
  },
  {
    name: "ServiceMax Maximize",
    date: "May 12-14, 2026",
    location: "Las Vegas, NV",
    type: "Conference",
    desc: "The premier field service management event, showcasing ServiceMax innovations, AI-powered operations, and connected asset strategies.",
  },
  {
    name: "IoT in Manufacturing Webinar",
    date: "February 25, 2026",
    location: "Virtual",
    type: "Webinar",
    desc: "Learn how manufacturers are leveraging ThingWorx IoT to connect products, optimize operations, and create new service business models.",
  },
  {
    name: "Onshape Design Meetup",
    date: "March 5, 2026",
    location: "San Francisco, CA",
    type: "Meetup",
    desc: "Community meetup for Onshape users to share tips, showcase projects, and network with fellow cloud-native CAD enthusiasts.",
  },
];

export default function EventsPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "Events" }]} />

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Join PTC at conferences, webinars, and community events around the
            world. Connect with experts, learn best practices, and explore the
            latest innovations.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-6 hover:border-[#00a651]/30 transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-[#00a651]/10 text-[#00a651] text-xs font-semibold px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{event.name}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Speaking of Service Podcast</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Tune in to learn from field service leaders and PTC experts about
            the future of service operations and digital transformation.
          </p>
          <Link
            href="/shadow-dom/news"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded font-semibold hover:bg-white/5 transition-colors"
          >
            Listen Now
          </Link>
        </div>
      </section>
    </div>
  );
}
