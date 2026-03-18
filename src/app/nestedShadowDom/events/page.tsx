"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const events = [
  { name: "DLT Summit 2026", date: "Junho 10-12, 2026", location: "São Paulo, SP", type: "Conferência", desc: "O principal evento anual da Dr. Lava Tudo, reunindo franqueados, parceiros e líderes do setor para discutir o futuro da limpeza profissional." },
  { name: "Workshop de Técnicas Avançadas", date: "Abril 5, 2026", location: "Rio de Janeiro, RJ", type: "Workshop", desc: "Workshop prático com as últimas técnicas de limpeza profissional de estofados e impermeabilização." },
  { name: "Feira do Empreendedor", date: "Maio 15-17, 2026", location: "Belo Horizonte, MG", type: "Feira", desc: "Participe do nosso estande e conheça as oportunidades de franquia e parceria com a Dr. Lava Tudo." },
  { name: "Webinar: Assinatura Inteligente", date: "Março 25, 2026", location: "Online", type: "Webinar", desc: "Saiba como funciona o modelo de assinatura DLT e os benefícios para sua casa e bolso." },
  { name: "Encontro de Franqueados", date: "Abril 20, 2026", location: "Curitiba, PR", type: "Networking", desc: "Evento exclusivo para franqueados compartilharem experiências e melhores práticas." },
  { name: "DLT Open Day", date: "Março 30, 2026", location: "Diversas cidades", type: "Evento", desc: "Portas abertas nas unidades DLT. Venha conhecer nosso trabalho e ganhe descontos especiais." },
];

export default function EventsPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Eventos" }]} />

      <InnerShadowSection>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Eventos</h1>
            <p className="text-xl text-green-200/60 max-w-2xl">
              Participe de conferências, workshops e eventos da Dr. Lava Tudo.
              Conecte-se com especialistas e a comunidade.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-6 hover:border-green-400/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-green-400/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">{event.type}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{event.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-green-200/40 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {event.location}
                    </span>
                  </div>
                  <p className="text-sm text-green-200/60 leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="bg-[#0d4a2a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Podcast DLT</h2>
          <p className="text-green-200/60 mb-8 max-w-xl mx-auto">
            Ouça nosso podcast sobre limpeza profissional, empreendedorismo e cuidados com o lar.
          </p>
          <Link href="/nestedShadowDom/news" className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/5 transition-colors">
            Ouvir Agora
          </Link>
        </div>
      </section>
    </div>
  );
}
