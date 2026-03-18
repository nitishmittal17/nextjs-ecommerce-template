"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const services = [
  {
    name: "Limpeza de Sofá",
    category: "Estofados",
    desc: "Limpeza profunda de sofás de todos os tipos e tamanhos. Remoção de manchas, ácaros e bactérias com tecnologia de extração a quente.",
    features: ["Até 7 lugares", "Tecido & Couro", "Retrátil & Fixo", "Impermeabilização"],
  },
  {
    name: "Limpeza de Colchão",
    category: "Cama",
    desc: "Higienização completa de colchões, eliminando ácaros, fungos e bactérias que se acumulam com o tempo. Ideal para alérgicos.",
    features: ["Todos os tamanhos", "Box & Baú", "Cabeceira", "Anti-ácaro"],
  },
  {
    name: "Limpeza de Tapete",
    category: "Pisos",
    desc: "Limpeza especializada para tapetes de todos os materiais e tamanhos, restaurando cores e removendo sujeira profunda.",
    features: ["Até 12m²", "Todos os materiais", "Restauração de cor", "Remoção de odores"],
  },
  {
    name: "Limpeza de Ar-Condicionado",
    category: "Climatização",
    desc: "Manutenção e higienização de aparelhos de ar-condicionado. Melhore a qualidade do ar e a eficiência do equipamento.",
    features: ["Split & Janela", "Até 30.000 BTU", "Filtro incluso", "Melhora eficiência"],
  },
  {
    name: "Limpeza Automotiva",
    category: "Veículos",
    desc: "Higienização profissional do interior do veículo. Bancos, teto, portas e carpete com tratamento completo.",
    features: ["Interior completo", "Bancos de couro", "Teto & Portas", "Carpete"],
  },
  {
    name: "Limpeza de Carrinho de Bebê",
    category: "Baby",
    desc: "Higienização completa de carrinhos de bebê, garantindo um ambiente seguro e limpo para seu filho.",
    features: ["Todos os modelos", "Anti-bacteriano", "Seguro para bebês", "Tecido & Estrutura"],
  },
  {
    name: "Impermeabilização",
    category: "Proteção",
    desc: "Proteção extra para seus estofados contra manchas e líquidos. Prolonga a vida útil e facilita a limpeza no dia a dia.",
    features: ["Sofás", "Colchões", "Tapetes", "Cadeiras"],
  },
  {
    name: "Limpeza PET",
    category: "Especial",
    desc: "Tratamento especial para lares com pets. Remoção de pelos, odores e manchas específicas de animais de estimação.",
    features: ["Remoção de pelos", "Eliminação de odores", "Anti-pulgas", "Desinfecção"],
  },
];

export default function ProductsPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Serviços" }]} />

      <InnerShadowSection>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nossos Serviços</h1>
            <p className="text-xl text-green-200/60 max-w-2xl">
              Soluções completas de limpeza profissional para sua casa, veículo e muito mais.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-8 hover:border-green-400/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-400/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors text-white">
                    {service.name}
                  </h3>
                  <p className="text-green-200/60 mb-5 leading-relaxed">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feat, fIdx) => (
                      <span key={fIdx} className="text-xs bg-white/5 text-green-200/60 px-3 py-1 rounded-full border border-white/5">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="bg-[#0d4a2a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Precisa de ajuda para escolher?</h2>
          <p className="text-green-200/60 mb-8">Nossos especialistas podem te ajudar a encontrar o serviço ideal.</p>
          <Link href="/nestedShadowDom/contact" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
