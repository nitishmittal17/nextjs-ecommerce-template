"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const supportOptions = [
  {
    title: "Base de Conhecimento",
    desc: "Encontre respostas para as dúvidas mais comuns sobre nossos serviços, planos e agendamentos.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Abrir Chamado",
    desc: "Abra um chamado de suporte para problemas técnicos ou reclamações. Nossa equipe responde em até 24 horas.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    title: "Reagendar Serviço",
    desc: "Precisa reagendar? Acesse sua conta e altere a data e horário do seu próximo atendimento.",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "WhatsApp",
    desc: "Fale diretamente com nosso time pelo WhatsApp. Atendimento rápido e personalizado.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Política de Garantia",
    desc: "Conheça nossa política de satisfação garantida. Se não ficou satisfeito, devolvemos seu dinheiro.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Cancelamento",
    desc: "Precisa cancelar seu plano? Sem multas, sem complicações. O cancelamento pode ser feito a qualquer momento.",
    icon: "M6 18L18 6M6 6l12 12",
  },
];

export default function SupportPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Suporte" }]} />

      <InnerShadowSection>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Central de Suporte</h1>
            <p className="text-xl text-green-200/60 max-w-2xl">
              Precisa de ajuda? Encontre respostas, abra chamados e fale com nosso time.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="pb-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0d4a2a] border border-white/5 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold mb-4 text-white">Como podemos ajudar?</h2>
              <div className="flex max-w-lg mx-auto">
                <input type="text" placeholder="Buscar no suporte..." className="flex-1 bg-[#0a3620] border border-white/10 rounded-l-lg px-4 py-3 text-sm text-white placeholder:text-green-200/30 focus:outline-none focus:border-green-400/50" />
                <button className="bg-white text-[#1a6b3c] px-6 py-3 rounded-r-lg text-sm font-bold hover:bg-green-50 transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportOptions.map((opt, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-6 hover:border-green-400/30 transition-colors group">
                  <div className="w-10 h-10 bg-green-400/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={opt.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors text-white">{opt.title}</h3>
                  <p className="text-sm text-green-200/60 leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="bg-[#0d4a2a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Não encontrou o que precisa?</h2>
          <p className="text-green-200/60 mb-8 max-w-xl mx-auto">
            Nossa equipe está pronta para te atender.
          </p>
          <Link href="/nestedShadowDom/contact" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Falar com Suporte
          </Link>
        </div>
      </section>
    </div>
  );
}
