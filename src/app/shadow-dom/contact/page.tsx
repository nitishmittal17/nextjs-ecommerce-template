"use client";
import { useState } from "react";
import PTCBreadcrumb from "@/components/PTC/PTCBreadcrumb";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! A PTC representative will be in touch shortly.");
  };

  return (
    <div className="text-white">
      <PTCBreadcrumb items={[{ label: "Contact" }]} />

      {/* Hero */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact an Expert</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Speak with a PTC expert to learn how our solutions can help your
            organization drive digital transformation.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-[#12122a] border border-white/5 rounded-xl p-8"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-[#0f0f23] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00a651]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-[#0f0f23] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00a651]/50"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-sm font-medium mb-1.5">Business Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0f0f23] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00a651]/50"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0f0f23] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00a651]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Job Title</label>
                    <input
                      type="text"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="w-full bg-[#0f0f23] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00a651]/50"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0f0f23] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00a651]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Area of Interest *</label>
                    <select
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-[#0f0f23] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00a651]/50"
                    >
                      <option value="">Select...</option>
                      <option value="cad">CAD (Creo / Onshape)</option>
                      <option value="plm">PLM (Windchill / Arena)</option>
                      <option value="alm">ALM (Codebeamer)</option>
                      <option value="iot">IoT (ThingWorx)</option>
                      <option value="ar">AR (Vuforia)</option>
                      <option value="service">Field Service (ServiceMax)</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0f0f23] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00a651]/50 resize-none"
                    placeholder="Tell us about your project or challenge..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#00a651] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008c44] transition-colors"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#12122a] border border-white/5 rounded-xl p-6">
                <h3 className="font-bold mb-3">Global Headquarters</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  PTC Inc.<br />
                  121 Seaport Boulevard<br />
                  Boston, MA 02210<br />
                  United States
                </p>
              </div>
              <div className="bg-[#12122a] border border-white/5 rounded-xl p-6">
                <h3 className="font-bold mb-3">Phone</h3>
                <p className="text-sm text-gray-400">+1 (781) 370-5000</p>
              </div>
              <div className="bg-[#12122a] border border-white/5 rounded-xl p-6">
                <h3 className="font-bold mb-3">Global Locations</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  PTC has offices in more than 30 countries worldwide, including
                  the Americas, Europe, and Asia Pacific.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
