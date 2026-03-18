"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const solutions = [
  {
    title: "Para sua Casa",
    desc: "Mantenha sofás, colchões, tapetes e estofados sempre limpos com nossos planos de assinatura. Agende em minutos, receba em casa.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Para seu Veículo",
    desc: "Higienização profissional do interior do seu carro. Bancos, teto, carpete e tudo mais. Ideal para quem tem crianças e pets.",
    icon: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10",
  },
  {
    title: "Para Empresas",
    desc: "Soluções corporativas para escritórios, hotéis, clínicas e restaurantes. Planos sob medida com atendimento prioritário.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Para Alérgicos",
    desc: "Tratamento especializado para eliminar ácaros, fungos e bactérias. Recomendado por médicos para quem sofre com alergias respiratórias.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const segments = [
  "Residencial",
  "Automotivo",
  "Corporativo",
  "Hotelaria",
  "Saúde & Clínicas",
  "Restaurantes",
  "Educação",
  "Coworking",
];

export default function SolutionsPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Soluções" }]} />

      <InnerShadowSection>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Soluções</h1>
            <p className="text-xl text-green-200/60 max-w-2xl">
              Encontre a solução ideal para sua necessidade. Atendemos residências,
              veículos e empresas com planos personalizados.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="pb-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-white">Soluções por Segmento</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((sol, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-8 hover:border-green-400/30 transition-colors">
                  <div className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={sol.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{sol.title}</h3>
                  <p className="text-green-200/60 leading-relaxed">{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="bg-[#0d4a2a] py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-white">Setores Atendidos</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {segments.map((seg, idx) => (
                <div key={idx} className="bg-[#0a3620] border border-white/5 rounded-xl p-6 text-center hover:border-green-400/30 transition-colors">
                  <h3 className="font-semibold text-sm text-white">{seg}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Comprometidos com seu sucesso</h2>
          <p className="text-green-200/60 mb-8 max-w-xl mx-auto">
            Nossos clientes confiam na qualidade dos nossos serviços e na rede
            de parceiros que oferecemos.
          </p>
          <Link href="/nestedShadowDom/case-studies" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Ver Casos de Sucesso
          </Link>
        </div>
      </section>
    </div>
  );
}
