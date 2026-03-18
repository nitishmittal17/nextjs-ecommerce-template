"use client";
import Link from "next/link";
import DLTBreadcrumb from "@/components/NestedShadowDom/DLTBreadcrumb";
import InnerShadowSection from "@/components/NestedShadowDom/InnerShadowSection";

const courses = [
  { product: "Estofados", title: "Limpeza de Sofás - Técnicas Avançadas", duration: "2 dias", level: "Iniciante", desc: "Aprenda as técnicas profissionais de limpeza de sofás de todos os tipos de tecido e couro." },
  { product: "Estofados", title: "Impermeabilização Profissional", duration: "1 dia", level: "Avançado", desc: "Domine as técnicas de impermeabilização para proteção duradoura de estofados." },
  { product: "Colchões", title: "Higienização de Colchões", duration: "1 dia", level: "Iniciante", desc: "Aprenda a higienizar colchões de todos os tamanhos, eliminando ácaros e bactérias." },
  { product: "Automotivo", title: "Limpeza Interior Automotiva", duration: "2 dias", level: "Intermediário", desc: "Técnicas de limpeza profissional para interiores de veículos, incluindo couro e tecido." },
  { product: "Ar-Condicionado", title: "Manutenção de Ar-Condicionado", duration: "3 dias", level: "Intermediário", desc: "Curso completo de manutenção preventiva e corretiva de aparelhos de ar-condicionado." },
  { product: "Especial", title: "Tratamento PET", duration: "1 dia", level: "Iniciante", desc: "Aprenda técnicas especializadas para limpeza em lares com animais de estimação." },
  { product: "Tapetes", title: "Restauração de Tapetes", duration: "2 dias", level: "Avançado", desc: "Técnicas avançadas de restauração de cor e textura para tapetes de todos os materiais." },
  { product: "Gestão", title: "Gestão de Franquias DLT", duration: "5 dias", level: "Intermediário", desc: "Treinamento completo para gestão operacional e comercial de uma franquia Dr. Lava Tudo." },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Iniciante": return "bg-green-500/10 text-green-400 border-green-500/20";
    case "Intermediário": return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    case "Avançado": return "bg-red-500/10 text-red-400 border-red-500/20";
    default: return "bg-gray-500/10 text-gray-400 border-gray-500/20";
  }
};

export default function TrainingPage() {
  return (
    <div className="text-white">
      <DLTBreadcrumb items={[{ label: "Treinamento" }]} />

      <InnerShadowSection>
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Academia DLT</h1>
            <p className="text-xl text-green-200/60 max-w-2xl">
              Desenvolva suas habilidades com treinamentos especializados em
              limpeza profissional. Do iniciante ao avançado.
            </p>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="bg-[#0d4a2a] py-12">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Presencial", desc: "Treinamento prático com instrutores certificados nas unidades DLT." },
                { title: "Online", desc: "Cursos à distância com exercícios práticos no seu ritmo." },
                { title: "Certificação", desc: "Certificação oficial DLT para técnicos e franqueados." },
              ].map((opt, idx) => (
                <div key={idx} className="bg-[#0a3620] border border-white/5 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-bold mb-2 text-white">{opt.title}</h3>
                  <p className="text-sm text-green-200/60">{opt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <InnerShadowSection>
        <section className="py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-white">Catálogo de Cursos</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, idx) => (
                <div key={idx} className="bg-[#0d4a2a] border border-white/5 rounded-xl p-6 hover:border-green-400/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-green-400/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">{course.product}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getLevelColor(course.level)}`}>{course.level}</span>
                    <span className="text-xs text-green-200/40">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{course.title}</h3>
                  <p className="text-sm text-green-200/60 leading-relaxed">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </InnerShadowSection>

      <section className="bg-[#0d4a2a] py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Quer se qualificar?</h2>
          <p className="text-green-200/60 mb-8 max-w-xl mx-auto">
            Entre em contato para saber mais sobre treinamentos e certificações.
          </p>
          <Link href="/nestedShadowDom/contact" className="inline-flex items-center gap-2 bg-white text-[#1a6b3c] px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors">
            Falar com a Academia
          </Link>
        </div>
      </section>
    </div>
  );
}
