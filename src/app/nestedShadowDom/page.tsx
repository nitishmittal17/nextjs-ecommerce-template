"use client";
import Link from "next/link";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const plans = [
  {
    name: "Plano Vantagem",
    price: "9,90",
    period: "12x",
    fullPrice: "R$118,80",
    highlight: false,
    features: [
      "Até R$50 de cashback em VOUCHERS de parceiros",
      "20% de DESCONTO fixo em serviços extras",
      "Atendimento express",
    ],
  },
  {
    name: "Plano Sofá",
    price: "19,90",
    period: "12x",
    fullPrice: "R$238,80",
    highlight: true,
    badge: "O MAIS VENDIDO",
    features: [
      "1 LIMPEZA POR ANO de QUALQUER SOFÁ até 4 lugares",
      "Até R$100 de cashback em VOUCHERS",
      "20% de DESCONTO fixo em serviços extras",
      "Atendimento express",
    ],
  },
  {
    name: "Plano Perfeito",
    price: "19,90",
    period: "A partir de 12x",
    fullPrice: "Personalizável",
    highlight: false,
    features: [
      "Escolha QUANTAS LIMPEZAS QUISER de QUALQUER ITEM",
      "Até R$234,00 de cashback em VOUCHERS",
      "25% de DESCONTO fixo em serviços extras",
      "Atendimento express",
      "Garantia estendida (15 ou 30 dias)",
    ],
  },
];

const comparison = [
  { feature: "Limpezas semestrais", vantagem: false, sofa: false, perfeito: true },
  { feature: "Limpezas anuais", vantagem: false, sofa: true, perfeito: true },
  { feature: "Garantia estendida", vantagem: false, sofa: false, perfeito: true },
  { feature: "Adicional de Limpeza PET", vantagem: false, sofa: false, perfeito: true },
  { feature: "Cashback em vouchers", vantagem: true, sofa: true, perfeito: true },
  { feature: "Desconto fixo (serviços extras)", vantagem: true, sofa: true, perfeito: true },
  { feature: "Atendimento express", vantagem: true, sofa: true, perfeito: true },
];

const priceComparison = [
  { item: "1x SOFÁ (4 lugares, Retrátil, Tecido)", avulso: "R$499,00", plano: "12X R$19,90" },
  { item: "1x COLCHÃO (Super King, Box/Baú + Cabeceira)", avulso: "R$345,00", plano: "12X R$19,90" },
  { item: "1x TAPETE (Até 12m²)", avulso: "R$515,00", plano: "12X R$19,90" },
  { item: "1x AR-CONDICIONADO (Split, 30.000 BTU's)", avulso: "R$302,00", plano: "12X R$19,90" },
  { item: "1x ASSENTO AUTOMOTIVO (Grande, Interior completo)", avulso: "R$437,00", plano: "12X R$19,90" },
  { item: "2x CARRINHOS DE BEBÊ (Quíntuplo)", avulso: "R$550,00", plano: "12X R$19,90" },
];

const benefits = [
  {
    title: "Segurança primeiro!",
    desc: "Técnicos qualificados, treinados e checados através de verificação de antecedentes, para oferecer sempre o melhor atendimento e segurança.",
  },
  {
    title: "Benefícios exclusivos",
    desc: "Aproveite até 42% do valor do plano em cashback em vouchers de lojas parceiras, além de descontos exclusivos em serviços extras.",
  },
  {
    title: "Praticidade",
    desc: "Agende a limpeza dos seus estofados em menos de 2 minutos pelo app ou site, com total comodidade.",
  },
  {
    title: "Economia inteligente",
    desc: "Economize até R$300 por ano com uma assinatura acessível e sem surpresas no orçamento.",
  },
  {
    title: "Satisfação garantida",
    desc: "Se não ficar satisfeito, você recebe seu dinheiro de volta. 100% de garantia em todos os serviços!",
  },
];

export default function NestedShadowDomPage() {
  return (
    <div className="text-white">
      {/* Hero - inside inner shadow DOM */}
      <InnerShadowSection>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a3620] via-[#1a6b3c] to-[#0a3620]" />
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[96px]" />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <p className="inline-flex items-center gap-2 bg-white/10 text-green-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-green-400/20">
              Assinatura Dr. Lava Tudo
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl text-white">
              Limpeza profissional o ano todo,{" "}
              <span className="text-green-400">mais barato que streaming!</span>
            </h1>
            <p className="text-lg md:text-xl text-green-100/70 max-w-2xl mb-10 leading-relaxed">
              Assine e agende a limpeza dos seus estofados em menos de 2 minutos.
              Planos a partir de R$9,90/mês com cashback em vouchers de parceiros.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#planos"
                className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors"
              >
                CONHEÇA OS PLANOS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/nestedShadowDom/products"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/5 transition-colors"
              >
                Explorar Serviços
              </Link>
            </div>
          </div>
        </section>
      </InnerShadowSection>

      {/* Plans - inside inner shadow DOM */}
      <InnerShadowSection>
        <section id="planos" className="bg-[#0d4a2a] py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Escolha o melhor plano para sua casa
              </h2>
              <p className="text-green-200/60 max-w-2xl mx-auto">
                Planos anuais com pagamento mensal. Sem fidelidade, cancele quando quiser.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-2xl p-8 transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-br from-[#1a6b3c] to-[#0d4a2a] border-2 border-green-400/50 shadow-lg shadow-green-900/20"
                      : "bg-[#0a3620] border border-white/10"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-400 text-[#0a3620] text-xs font-black px-4 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-4 text-white">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-sm text-green-200/60">{plan.period}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-green-400">R${plan.price}</span>
                    </div>
                    <p className="text-xs text-green-200/40 mt-1">ou {plan.fullPrice} à vista</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-green-100/70">
                        <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full font-bold text-sm transition-colors ${
                      plan.highlight
                        ? "bg-white text-[#1a6b3c] hover:bg-green-50"
                        : "bg-green-400/10 text-green-400 border border-green-400/30 hover:bg-green-400/20"
                    }`}
                  >
                    CONTRATAR
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      {/* Plan Comparison Table - inside inner shadow DOM */}
      <InnerShadowSection>
        <section className="py-20 bg-[#0a3620]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Compare os planos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-green-200/60 font-medium"></th>
                    <th className="text-center py-4 px-4 text-green-400 font-bold">Vantagem<br /><span className="text-xs font-normal text-green-200/40">12x de R$9,90</span></th>
                    <th className="text-center py-4 px-4 text-green-400 font-bold">Sofá<br /><span className="text-xs font-normal text-green-200/40">12x de R$19,90</span></th>
                    <th className="text-center py-4 px-4 text-green-400 font-bold">Perfeito<br /><span className="text-xs font-normal text-green-200/40">A partir de 12x de R$19,90</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5">
                      <td className="py-3 px-4 text-green-100/70">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {row.vantagem ? (
                          <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-400/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.sofa ? (
                          <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-400/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.perfeito ? (
                          <svg className="w-5 h-5 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-400/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </InnerShadowSection>

      {/* Price Comparison - inside inner shadow DOM */}
      <InnerShadowSection>
        <section className="bg-[#0d4a2a] py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Contratar um plano é melhor que serviços avulsos!
              </h2>
              <p className="text-green-200/60">Compare os valores:</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-green-200/60 font-medium">LIMPEZA DE</th>
                    <th className="text-center py-4 px-4 text-red-400 font-bold">AVULSO NA LOJA</th>
                    <th className="text-center py-4 px-4 text-green-400 font-bold">COM PLANO</th>
                  </tr>
                </thead>
                <tbody>
                  {priceComparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5">
                      <td className="py-3 px-4 text-green-100/70">{row.item}</td>
                      <td className="py-3 px-4 text-center text-red-400/80 line-through">{row.avulso}</td>
                      <td className="py-3 px-4 text-center text-green-400 font-bold">{row.plano}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-green-200/30 mt-4 text-center">* Média de valores somando todos os estados.</p>
          </div>
        </section>
      </InnerShadowSection>

      {/* Subscribe CTA - inside inner shadow DOM */}
      <InnerShadowSection>
        <section className="py-20 bg-[#0a3620]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#1a6b3c] to-[#0d4a2a] border border-white/10 rounded-2xl p-8 md:p-14">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Assine hoje e receba automaticamente:
                </h2>
                <div className="grid sm:grid-cols-3 gap-6 mt-10 mb-10">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <p className="text-sm text-green-100/70">
                      <strong className="text-white">Limpezas gratuitas</strong> mensais, ou a cada 6 meses/1 ano
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-green-100/70">
                      <strong className="text-white">Até R$234,00 de cashback</strong> em VOUCHERS de parceiros
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-green-400/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-sm text-green-100/70">
                      Garantia estendida de até <strong className="text-white">30 dias</strong>
                    </p>
                  </div>
                </div>
                <a
                  href="#planos"
                  className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors"
                >
                  QUERO ASSINAR UM PLANO AGORA
                </a>
              </div>
            </div>
          </div>
        </section>
      </InnerShadowSection>

      {/* Why DLT - inside inner shadow DOM */}
      <InnerShadowSection>
        <section className="bg-[#0d4a2a] py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Por que ter um Plano da Dr. Lava Tudo?
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-[#0a3620] border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all"
                >
                  <div className="w-10 h-10 bg-green-400/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-sm text-green-200/60 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      {/* Award section - inside inner shadow DOM */}
      <InnerShadowSection>
        <section className="py-20 bg-[#0a3620]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-[#1a6b3c] to-[#0d4a2a] border border-green-400/20 rounded-2xl p-8 md:p-14">
              <p className="text-5xl mb-6">🏆</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                A Escolha Nº1 dos Brasileiros para Limpeza de Estofados
              </h2>
              <p className="text-green-100/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                Qualidade reconhecida e aprovada! A Dr. Lava Tudo foi eleita a
                Melhor Empresa de Limpeza de Sofás e Estofados em 2024 pelo
                Melhores.com! Esse reconhecimento reforça nosso compromisso com
                um serviço impecável e atendimento de excelência.
              </p>
              <a
                href="#planos"
                className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors"
              >
                QUERO ASSINAR UM PLANO AGORA
              </a>
            </div>
          </div>
        </section>
      </InnerShadowSection>

      {/* Quick Links */}
      <section className="bg-[#0d4a2a] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8 text-white">Explore mais</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "Central de Suporte", href: "/nestedShadowDom/support", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
              { label: "Fale Conosco", href: "/nestedShadowDom/contact", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
              { label: "Treinamento", href: "/nestedShadowDom/training", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { label: "Parceiros", href: "/nestedShadowDom/partners", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-[#0a3620] border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all text-center group"
              >
                <div className="w-10 h-10 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
