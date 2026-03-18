"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const stats = [
  { label: "Fundada em", value: "2018" },
  { label: "Colaboradores", value: "2,000+" },
  { label: "Cidades", value: "50+" },
  { label: "Clientes Satisfeitos", value: "98%" },
];

const leaders = [
  { name: "Carlos Silva", title: "CEO & Fundador" },
  { name: "Ana Costa", title: "Diretora de Operações" },
  { name: "Pedro Santos", title: "Diretor Financeiro" },
  { name: "Mariana Lima", title: "Diretora de Marketing" },
  { name: "Rafael Oliveira", title: "VP de Tecnologia" },
  { name: "Julia Ferreira", title: "Diretora de Expansão" },
];

export default function AboutPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Sobre Nós" }]} />

      <InnerShadowSection>
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Sobre a Dr. Lava Tudo</h1>
            <p className="text-xl text-green-200/60 max-w-3xl leading-relaxed">
              A Dr. Lava Tudo é a maior rede de limpeza profissional de estofados
              do Brasil. Com tecnologia de ponta e profissionais certificados,
              transformamos a experiência de cuidar da sua casa.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="bg-[#0d4a2a] py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-[#0a3620] border border-white/5 rounded-xl p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.value}</p>
                  <p className="text-sm text-green-200/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Nossa Missão</h2>
                <p className="text-green-200/60 leading-relaxed mb-4">
                  Democratizar o acesso à limpeza profissional de estofados,
                  oferecendo serviços de alta qualidade com praticidade e preço justo
                  para todos os brasileiros.
                </p>
                <p className="text-green-200/60 leading-relaxed">
                  Acreditamos que todos merecem viver em um ambiente limpo e
                  saudável. Por isso, criamos planos de assinatura acessíveis
                  que tornam a limpeza profissional parte da rotina do lar.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#0d4a2a] to-[#1a6b3c] border border-white/5 rounded-xl p-8 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-400/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Presença Nacional</h3>
                <p className="text-green-200/60 text-sm">
                  Presente em mais de 50 cidades, atendendo milhares de famílias
                  em todo o Brasil.
                </p>
              </div>
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="bg-[#0d4a2a] py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Equipe de Liderança</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leaders.map((leader, idx) => (
                <div key={idx} className="bg-[#0a3620] border border-white/5 rounded-xl p-6 text-center hover:border-green-400/30 transition-colors">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-green-400">
                      {leader.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-bold mb-1 text-white">{leader.name}</h3>
                  <p className="text-sm text-green-200/60">{leader.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Trabalhe Conosco</h2>
          <p className="text-green-200/60 mb-8 max-w-xl mx-auto">
            Faça parte do time que está revolucionando a limpeza profissional no Brasil.
          </p>
          <Link href="/nestedShadowDom/careers" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Ver Vagas
          </Link>
        </div>
      </section>
    </div>
  );
}
