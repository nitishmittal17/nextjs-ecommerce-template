"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const partnerTypes = [
  {
    title: "Franqueados",
    desc: "Seja dono de uma franquia Dr. Lava Tudo. Com baixo investimento inicial, treinamento completo e suporte contínuo, você pode ter seu próprio negócio no setor de limpeza profissional.",
    examples: ["Baixo investimento", "Treinamento completo", "Suporte operacional", "Marketing incluso"],
  },
  {
    title: "Parceiros de Vouchers",
    desc: "Ofereça seus produtos e serviços como vouchers de cashback para os assinantes da Dr. Lava Tudo. Aumente sua visibilidade e conquiste novos clientes.",
    examples: ["Restaurantes", "Academias", "Lojas", "Serviços"],
  },
  {
    title: "Afiliados",
    desc: "Ganhe comissão por cada assinante indicado. Programa de afiliados com dashboard completo, links personalizados e pagamentos mensais.",
    examples: ["Influenciadores", "Blogueiros", "Sites de cupom", "Redes sociais"],
  },
  {
    title: "Empresas",
    desc: "Planos corporativos com atendimento exclusivo para escritórios, hotéis, clínicas e restaurantes. Soluções sob medida para qualquer tamanho de empresa.",
    examples: ["Hotéis", "Escritórios", "Clínicas", "Restaurantes"],
  },
];

export default function PartnersPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Parceiros" }]} />

      <InnerShadowSection>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Rede de Parceiros</h1>
            <p className="text-xl text-green-200/60 max-w-2xl">
              Faça parte do ecossistema Dr. Lava Tudo. Diversas formas de parceria
              para crescer junto conosco.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8">
              {partnerTypes.map((pt, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-8 hover:border-green-400/30 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-white">{pt.title}</h3>
                  <p className="text-green-200/60 leading-relaxed mb-5">{pt.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {pt.examples.map((ex, exIdx) => (
                      <span key={exIdx} className="text-xs bg-green-400/10 text-green-400 px-3 py-1 rounded-full border border-green-400/20">
                        {ex}
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
          <h2 className="text-3xl font-bold mb-4 text-white">Seja um Parceiro</h2>
          <p className="text-green-200/60 mb-8 max-w-xl mx-auto">
            Junte-se à nossa rede e faça parte do crescimento da maior empresa
            de limpeza de estofados do Brasil.
          </p>
          <Link href="/nestedShadowDom/contact" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Quero ser Parceiro
          </Link>
        </div>
      </section>
    </div>
  );
}
