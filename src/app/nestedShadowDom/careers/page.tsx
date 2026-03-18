"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const departments = [
  { name: "Operações", openings: 35, desc: "Técnicos de limpeza, supervisores e coordenadores regionais para nossas unidades." },
  { name: "Tecnologia", openings: 12, desc: "Desenvolvedores, designers e analistas para nossa plataforma digital e app." },
  { name: "Comercial", openings: 20, desc: "Consultores de vendas, atendimento ao cliente e gestores de contas corporativas." },
  { name: "Marketing", openings: 8, desc: "Criação de conteúdo, performance, branding e gestão de redes sociais." },
  { name: "Franquias", openings: 6, desc: "Suporte aos franqueados, treinamento e expansão da rede." },
  { name: "Administrativo", openings: 10, desc: "Finanças, RH, jurídico e demais funções de suporte corporativo." },
];

const benefits = [
  "Remuneração competitiva",
  "Vale-refeição e transporte",
  "Plano de saúde e odontológico",
  "Treinamento contínuo",
  "Horário flexível",
  "Day off no aniversário",
  "Desconto em serviços DLT",
  "Programa de indicação",
];

export default function CareersPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Carreiras" }]} />

      <InnerShadowSection>
        <section className="relative py-20">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-20 w-72 h-72 bg-green-400/5 rounded-full blur-[100px]" />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Carreiras na Dr. Lava Tudo</h1>
            <p className="text-xl text-green-200/60 max-w-2xl leading-relaxed">
              Faça parte do time que está revolucionando a limpeza profissional
              no Brasil. Buscamos pessoas apaixonadas por excelência e inovação.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="bg-[#0d4a2a] py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-white">Áreas de Atuação</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, idx) => (
                <div key={idx} className="bg-[#0a3620] border border-white/5 rounded-xl p-6 hover:border-green-400/30 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{dept.name}</h3>
                    <span className="text-xs bg-green-400/10 text-green-400 px-2.5 py-1 rounded-full font-semibold">{dept.openings} vagas</span>
                  </div>
                  <p className="text-sm text-green-200/60 leading-relaxed">{dept.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Benefícios</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-5 flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-sm text-green-100/70">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="bg-[#0d4a2a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Quer fazer a diferença?</h2>
          <p className="text-green-200/60 mb-8">Explore as vagas abertas e venha fazer parte do nosso time.</p>
          <Link href="/nestedShadowDom/contact" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Ver Todas as Vagas
          </Link>
        </div>
      </section>
    </div>
  );
}
