"use client";
import Link from "next/link";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

const products = [
  {
    name: "Creo",
    category: "CAD",
    desc: "3D CAD software that helps you innovate faster by creating, analyzing, and viewing product designs. Deliver better products with model-based definition.",
    features: ["3D Modeling", "Simulation", "Generative Design", "Additive Manufacturing"],
  },
  {
    name: "Windchill",
    category: "PLM",
    desc: "Product lifecycle management software that helps teams manage product data, optimize processes, and collaborate across the enterprise.",
    features: ["BOM Management", "Change Management", "Quality Management", "Supplier Collaboration"],
  },
  {
    name: "Codebeamer",
    category: "ALM",
    desc: "Application lifecycle management platform designed to manage product complexity in the era of Industry 4.0 with full traceability.",
    features: ["Requirements Management", "Test Management", "Risk Management", "Regulatory Compliance"],
  },
  {
    name: "ThingWorx",
    category: "IoT",
    desc: "Industrial IoT platform that enables rapid development and deployment of smart connected operations and products.",
    features: ["Remote Monitoring", "Predictive Analytics", "Device Management", "Edge Computing"],
  },
  {
    name: "Vuforia",
    category: "AR",
    desc: "Augmented reality enterprise solutions that deliver expert knowledge to workers and students wherever they need it most.",
    features: ["AR Instructions", "3D Visualization", "Remote Assistance", "Training"],
  },
  {
    name: "ServiceMax",
    category: "Field Service",
    desc: "Cloud-based field service management software that helps you optimize service execution, manage assets, and drive revenue.",
    features: ["Work Order Management", "Asset Management", "Scheduling", "AI-Powered Insights"],
  },
  {
    name: "Arena",
    category: "Cloud PLM",
    desc: "Cloud-based product lifecycle management to unite product and quality processes across the enterprise supply chain.",
    features: ["Cloud BOM", "Quality Management", "Supplier Collaboration", "Compliance"],
  },
  {
    name: "Onshape",
    category: "Cloud CAD",
    desc: "Cloud-native product development platform combining CAD, data management, and collaboration tools in a single system.",
    features: ["Cloud CAD", "Real-time Collaboration", "Version Control", "Release Management"],
  },
];

export default function ProductsPage() {
  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "Products" }]} />

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Comprehensive software solutions for product design, lifecycle
            management, IoT, augmented reality, and field service.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-[#12122a] border border-white/5 rounded-xl p-8 hover:border-[#00a651]/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#00a651]/10 text-[#00a651] text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#00a651] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-5 leading-relaxed">{product.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feat, featIdx) => (
                    <span
                      key={featIdx}
                      className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/5"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#12122a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Solution?</h2>
          <p className="text-gray-400 mb-8">Our experts can guide you to the product that best fits your needs.</p>
          <Link
            href="/shadow-dom/contact"
            className="inline-flex items-center gap-2 bg-[#00a651] text-white px-6 py-3 rounded font-semibold hover:bg-[#008c44] transition-colors"
          >
            Contact an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
