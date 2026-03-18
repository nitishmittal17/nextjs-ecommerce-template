"use client";
import { useState } from "react";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo contato! Nossa equipe entrará em contato em breve.");
  };

  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Contato" }]} />

      <InnerShadowSection>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Fale Conosco</h1>
            <p className="text-xl text-green-200/60 max-w-2xl">
              Tire suas dúvidas, solicite um orçamento ou fale com nosso time de especialistas.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-8">
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-white">Nome *</label>
                      <input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full bg-[#0a3620] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-green-200/30 focus:outline-none focus:border-green-400/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-white">Sobrenome *</label>
                      <input type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full bg-[#0a3620] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-green-200/30 focus:outline-none focus:border-green-400/50" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-medium mb-1.5 text-white">E-mail *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-[#0a3620] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-green-200/30 focus:outline-none focus:border-green-400/50" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-white">Telefone / WhatsApp</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-[#0a3620] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-green-200/30 focus:outline-none focus:border-green-400/50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-white">Cidade</label>
                      <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full bg-[#0a3620] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-green-200/30 focus:outline-none focus:border-green-400/50" />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-medium mb-1.5 text-white">Assunto *</label>
                    <select required value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full bg-[#0a3620] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-green-400/50">
                      <option value="">Selecione...</option>
                      <option value="assinatura">Assinatura / Planos</option>
                      <option value="agendamento">Agendamento de Serviço</option>
                      <option value="parceria">Seja um Parceiro</option>
                      <option value="empresas">Para Empresas</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1.5 text-white">Mensagem</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-[#0a3620] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-green-200/30 focus:outline-none focus:border-green-400/50 resize-none" placeholder="Como podemos ajudar?" />
                  </div>
                  <button type="submit" className="w-full sm:w-auto bg-white text-[#1a6b3c] px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-[#0d4a2a] border border-white/5 rounded-xl p-6">
                  <h3 className="font-bold mb-3 text-white">Sede</h3>
                  <p className="text-sm text-green-200/60 leading-relaxed">
                    Dr. Lava Tudo<br />São Paulo, SP<br />Brasil
                  </p>
                </div>
                <div className="bg-[#0d4a2a] border border-white/5 rounded-xl p-6">
                  <h3 className="font-bold mb-3 text-white">WhatsApp</h3>
                  <p className="text-sm text-green-200/60">(11) 99999-0000</p>
                </div>
                <div className="bg-[#0d4a2a] border border-white/5 rounded-xl p-6">
                  <h3 className="font-bold mb-3 text-white">Atendimento</h3>
                  <p className="text-sm text-green-200/60 leading-relaxed">
                    Segunda a Sábado<br />08:00 às 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </InnerShadowSection>
    </div>
  );
}
