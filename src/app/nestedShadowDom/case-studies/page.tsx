"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const caseStudies = [
  {
    company: "Rede de Hotéis Premium",
    industry: "Hotelaria",
    challenge: "Manter a higienização de centenas de colchões e estofados em 15 unidades, com padrão internacional de limpeza.",
    solution: "Implementação do Plano Perfeito corporativo com agendamento automatizado e atendimento prioritário para todas as unidades.",
    results: ["40% de redução nos custos de higienização", "100% de conformidade com padrões sanitários", "Avaliação 5 estrelas em limpeza"],
  },
  {
    company: "Concessionária Automotiva",
    industry: "Automotivo",
    challenge: "Higienizar interiores de veículos usados para revenda com rapidez e qualidade profissional.",
    solution: "Parceria com DLT para limpeza automotiva completa de todo o estoque de seminovos, com atendimento express.",
    results: ["25% mais rápido que fornecedor anterior", "Aumento de 15% no valor de revenda", "Satisfação dos compradores em 98%"],
  },
  {
    company: "Clínica de Alergia",
    industry: "Saúde",
    challenge: "Garantir ambiente livre de ácaros e alérgenos para pacientes com asma e rinite alérgica.",
    solution: "Plano de higienização mensal com tratamento anti-ácaro e certificação de qualidade do ar para todas as salas de atendimento.",
    results: ["Redução de 60% em reclamações de pacientes", "Certificação ambiental aprovada", "Recomendação médica inclusa"],
  },
  {
    company: "Coworking SP",
    industry: "Escritórios",
    challenge: "Manter sofás, cadeiras e carpetes limpos em espaço com alto fluxo de pessoas e uso intensivo.",
    solution: "Plano semanal de manutenção com limpeza rotativa de todos os estofados e impermeabilização trimestral.",
    results: ["Estofados sempre como novos", "35% menos reclamações de membros", "ROI em 3 meses"],
  },
  {
    company: "Família com Pets",
    industry: "Residencial",
    challenge: "3 cães e 2 gatos em apartamento. Pelos, odores e manchas constantes em sofás e tapetes.",
    solution: "Plano Perfeito com limpeza PET semestral incluindo tratamento anti-pulgas e eliminação de odores.",
    results: ["Casa sempre limpa e sem odores", "Economia de R$800/ano vs. avulso", "Pets e família saudáveis"],
  },
  {
    company: "Restaurante Gourmet",
    industry: "Alimentação",
    challenge: "Manter estofamento dos assentos impecável com alta rotatividade de clientes e risco de manchas.",
    solution: "Plano mensal com impermeabilização e limpeza profunda de todos os estofados do salão.",
    results: ["Zero reclamações sobre limpeza", "Economia de 40% vs. troca de estofamento", "Avaliação 5 estrelas no Google"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Casos de Sucesso" }]} />

      <InnerShadowSection>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Casos de Sucesso</h1>
            <p className="text-xl text-green-200/60 max-w-2xl">
              Veja como nossos clientes transformaram a higienização dos seus
              espaços com os planos Dr. Lava Tudo.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8">
              {caseStudies.map((cs, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-8 hover:border-green-400/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-green-400/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">{cs.industry}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{cs.company}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wider">Desafio</h4>
                      <p className="text-sm text-green-200/60 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wider">Solução</h4>
                      <p className="text-sm text-green-200/60 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2 uppercase tracking-wider">Resultados</h4>
                      <ul className="space-y-2">
                        {cs.results.map((r, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-sm text-green-200/60">
                            <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="bg-[#0d4a2a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Quer ser o próximo caso de sucesso?</h2>
          <p className="text-green-200/60 mb-8">Fale com nossos especialistas e encontre a solução ideal.</p>
          <Link href="/nestedShadowDom/contact" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
