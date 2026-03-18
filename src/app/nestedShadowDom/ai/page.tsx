"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const aiCapabilities = [
  { title: "Agendamento Inteligente", desc: "IA otimiza rotas e horários dos técnicos automaticamente, reduzindo tempo de deslocamento e aumentando a produtividade das equipes." },
  { title: "Diagnóstico por Foto", desc: "Envie uma foto do estofado e nossa IA identifica manchas, tipo de tecido e recomenda o tratamento ideal antes do técnico chegar." },
  { title: "Previsão de Demanda", desc: "Algoritmos de machine learning preveem picos de demanda por região, otimizando alocação de equipes e estoque de produtos." },
  { title: "Chatbot DLT", desc: "Assistente virtual 24/7 para agendamento, dúvidas e suporte. Resolve 80% das solicitações sem intervenção humana." },
  { title: "Controle de Qualidade", desc: "Sistema de IA analisa fotos antes e depois do serviço, garantindo padrão de qualidade em todas as unidades." },
  { title: "Personalização de Planos", desc: "IA analisa seu perfil de uso e recomenda o plano ideal, com frequência e serviços personalizados para sua necessidade." },
];

export default function AIPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "IA na DLT" }]} />

      <InnerShadowSection>
        <section className="relative py-20">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-20 w-80 h-80 bg-green-400/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-10 left-10 w-60 h-60 bg-emerald-500/5 rounded-full blur-[80px]" />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="inline-flex items-center gap-2 bg-green-400/10 text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-green-400/20">
              IA na Dr. Lava Tudo
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl text-white">
              Inteligência Artificial a serviço da limpeza profissional
            </h1>
            <p className="text-xl text-green-200/60 max-w-2xl leading-relaxed">
              Usamos IA para otimizar cada etapa do processo — do agendamento
              ao controle de qualidade — garantindo o melhor serviço com máxima
              eficiência.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="bg-[#0d4a2a] py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="border border-white/5 rounded-xl p-8 bg-[#0a3620]">
                <div className="w-14 h-14 bg-green-400/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">IA para Operações</h3>
                <p className="text-green-200/60 leading-relaxed mb-4">
                  Otimizamos rotas, previsão de demanda e alocação de equipes com
                  algoritmos de IA que aprendem com milhares de atendimentos realizados.
                </p>
                <ul className="space-y-3 text-green-200/60 text-sm">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Otimização de rotas em tempo real</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Previsão de demanda por região</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Gestão inteligente de estoque</li>
                </ul>
              </div>

              <div className="border border-white/5 rounded-xl p-8 bg-[#0a3620]">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">IA para Qualidade</h3>
                <p className="text-green-200/60 leading-relaxed mb-4">
                  Controle de qualidade automatizado com visão computacional.
                  Cada serviço é verificado por IA para garantir o padrão DLT.
                </p>
                <ul className="space-y-3 text-green-200/60 text-sm">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Análise antes e depois por visão computacional</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Diagnóstico automático de manchas</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Score de satisfação preditivo</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Capacidades de IA</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((cap, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-6 hover:border-green-400/30 transition-colors">
                  <h3 className="text-lg font-bold mb-3 text-white">{cap.title}</h3>
                  <p className="text-sm text-green-200/60 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="bg-[#0d4a2a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Experimente a IA da DLT</h2>
          <p className="text-green-200/60 mb-8 max-w-xl mx-auto">
            Assine um plano e descubra como a inteligência artificial transforma
            a experiência de limpeza profissional.
          </p>
          <Link href="/nestedShadowDom" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Ver Planos
          </Link>
        </div>
      </section>
    </div>
  );
}
