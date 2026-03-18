"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const articles = [
  { date: "Março 15, 2026", category: "Expansão", title: "Dr. Lava Tudo chega a 50 cidades brasileiras", excerpt: "A rede de limpeza profissional continua sua expansão nacional, agora presente em todas as capitais do país." },
  { date: "Março 1, 2026", category: "Prêmio", title: "DLT eleita melhor empresa de limpeza de estofados pelo 3º ano consecutivo", excerpt: "Reconhecimento do Melhores.com reforça o compromisso com qualidade e satisfação do cliente." },
  { date: "Fevereiro 20, 2026", category: "Produto", title: "Novo Plano Perfeito permite personalização total", excerpt: "Assinantes agora podem escolher exatamente quais serviços querem incluir no seu plano, com frequência semestral ou anual." },
  { date: "Fevereiro 10, 2026", category: "Parceria", title: "Parceria com grandes marcas amplia programa de cashback", excerpt: "Novos parceiros de vouchers oferecem ainda mais benefícios para assinantes dos planos DLT." },
  { date: "Janeiro 25, 2026", category: "Tecnologia", title: "App DLT ganha redesign completo", excerpt: "Nova versão do aplicativo traz agendamento mais rápido, acompanhamento em tempo real e chat com suporte." },
  { date: "Janeiro 15, 2026", category: "Sustentabilidade", title: "DLT adota produtos 100% biodegradáveis", excerpt: "Toda a linha de produtos de limpeza utilizada pela Dr. Lava Tudo agora é biodegradável e livre de compostos tóxicos." },
  { date: "Dezembro 20, 2025", category: "Franquia", title: "Programa de franquias DLT cresce 40% em 2025", excerpt: "Modelo de negócio acessível e suporte completo atraíram centenas de novos franqueados ao longo do ano." },
  { date: "Dezembro 5, 2025", category: "Social", title: "Projeto DLT Solidária leva limpeza gratuita a instituições", excerpt: "Iniciativa social leva serviços de limpeza profissional a creches, asilos e abrigos em todo o Brasil." },
];

export default function NewsPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Notícias" }]} />

      <InnerShadowSection>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Notícias</h1>
            <p className="text-xl text-green-200/60 max-w-2xl">
              Fique por dentro das novidades, lançamentos e conquistas da Dr. Lava Tudo.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="pb-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              {articles.map((article, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-6 hover:border-green-400/30 transition-colors group">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="bg-green-400/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">{article.category}</span>
                    <span className="text-xs text-green-200/40">{article.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-green-400 transition-colors text-white">{article.title}</h3>
                  <p className="text-sm text-green-200/60 leading-relaxed">{article.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="bg-[#0d4a2a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Fique por dentro</h2>
          <p className="text-green-200/60 mb-8 max-w-xl mx-auto">
            Receba as novidades da Dr. Lava Tudo diretamente no seu e-mail.
          </p>
          <Link href="/nestedShadowDom/contact" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Assinar Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}
