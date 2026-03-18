import React from "react";
import Link from "next/link";

const DLTFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a3620] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Serviços */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-green-400">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Assinaturas", href: "/nestedShadowDom" },
                { label: "Todos os Serviços", href: "/nestedShadowDom/products" },
                { label: "Soluções", href: "/nestedShadowDom/solutions" },
                { label: "IA", href: "/nestedShadowDom/ai" },
                { label: "Digital Thread", href: "/nestedShadowDom/digital-thread" },
                { label: "Casos de Sucesso", href: "/nestedShadowDom/case-studies" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-green-200/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-green-400">
              Suporte &amp; Recursos
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Central de Suporte", href: "/nestedShadowDom/support" },
                { label: "Treinamento", href: "/nestedShadowDom/training" },
                { label: "Parceiros", href: "/nestedShadowDom/partners" },
                { label: "Fale Conosco", href: "/nestedShadowDom/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-green-200/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-green-400">
              Empresa
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Notícias", href: "/nestedShadowDom/news" },
                { label: "Eventos", href: "/nestedShadowDom/events" },
                { label: "Carreiras", href: "/nestedShadowDom/careers" },
                { label: "Sobre Nós", href: "/nestedShadowDom/about" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-green-200/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-[#1a6b3c] font-black text-sm">DLT</span>
              </div>
            </div>
            <p className="text-sm text-green-200/60 leading-relaxed mb-6">
              Dr. Lava Tudo - Limpeza profissional de estofados. Eleita a melhor
              empresa de limpeza de sofás e estofados do Brasil.
            </p>
            <p className="text-xs text-green-200/40">
              Presente em mais de 50 cidades brasileiras.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-green-200/40">
              &copy; {year} Dr. Lava Tudo. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-5">
              {["Termos de Uso", "Política de Privacidade", "Contato"].map((item) => (
                <Link
                  key={item}
                  href="/nestedShadowDom"
                  className="text-xs text-green-200/40 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DLTFooter;
