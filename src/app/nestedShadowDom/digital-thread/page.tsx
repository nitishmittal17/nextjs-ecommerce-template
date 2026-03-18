"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const threadStages = [
  { title: "Assinatura", desc: "O cliente escolhe seu plano ideal e assina em menos de 2 minutos pelo app ou site." },
  { title: "Agendamento", desc: "IA otimiza horários e rotas, oferecendo as melhores opções para o cliente e o técnico." },
  { title: "Preparação", desc: "Equipe recebe detalhes do serviço, produtos necessários e histórico do cliente automaticamente." },
  { title: "Execução", desc: "Técnico realiza a limpeza seguindo protocolos padronizados com check-in/checkout digital." },
  { title: "Controle de Qualidade", desc: "IA analisa fotos antes e depois, garantindo o padrão de qualidade DLT em cada atendimento." },
  { title: "Feedback & Melhoria", desc: "Cliente avalia o serviço e dados alimentam melhorias contínuas em processos e treinamentos." },
];

export default function DigitalThreadPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Digital Thread" }]} />

      <InnerShadowSection>
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl text-white">
              Digital Thread: Conectando toda a experiência DLT
            </h1>
            <p className="text-xl text-green-200/60 max-w-2xl leading-relaxed">
              Da assinatura ao feedback, cada etapa é conectada digitalmente
              para garantir a melhor experiência possível. Dados fluem em tempo
              real entre cliente, técnico e gestão.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="bg-[#0d4a2a] py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col gap-0">
              {threadStages.map((stage, idx) => (
                <div key={idx} className="flex items-start gap-6 relative group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center text-sm font-bold z-10 text-[#0a3620]">
                      {idx + 1}
                    </div>
                    {idx < threadStages.length - 1 && (
                      <div className="w-0.5 h-full bg-green-400/20 min-h-[60px]" />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors text-white">{stage.title}</h3>
                    <p className="text-green-200/60 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Por que o Digital Thread importa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Fonte Única de Verdade", desc: "Todos os dados do cliente, serviço e técnico conectados em uma única plataforma, sem perda de informação." },
                { title: "Atendimento mais Rápido", desc: "Processos automatizados reduzem tempo de agendamento e preparação, acelerando o atendimento." },
                { title: "Melhoria Contínua", desc: "Feedbacks e dados de qualidade alimentam melhorias em treinamento, produtos e processos operacionais." },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-8 hover:border-green-400/30 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-green-200/60 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="bg-[#0d4a2a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Comece sua jornada digital</h2>
          <p className="text-green-200/60 mb-8 max-w-xl mx-auto">
            Assine um plano e experimente toda a praticidade de um serviço
            conectado de ponta a ponta.
          </p>
          <Link href="/nestedShadowDom" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Ver Planos
          </Link>
        </div>
      </section>
    </div>
  );
}
