"use client";
import SE from "@/components/NestedShadowDom/ShadowElement";

const SY_TEXT_H2 = '<h2 class="sy-text"><slot></slot></h2>';
const SY_TEXT_H5 = '<h5 class="sy-text"><slot></slot></h5>';
const SY_TEXT_BODY = '<span class="sy-text"><slot></slot></span>';
const SY_TEXT_LEAD = '<p class="sy-text"><slot></slot></p>';
const SY_TEXT_SMALL = '<small class="sy-text"><slot></slot></small>';
const SY_CARD = '<div class="sy-card"><slot></slot></div>';
const SY_BTN = '<button class="sy-btn sy-btn-text-only"><div class="sy-btn-inner-content"><div class="sy-btn-inner-content-left"></div><p class="sy-btn-inner-content-text"><slot></slot></p></div></button>';
const SY_BTN_ICON = '<button class="sy-btn sy-btn-icon-only"><div class="sy-btn-inner-content"><div class="sy-btn-inner-content-left"><slot></slot></div></div></button>';
const SY_CAROUSEL_T = '<div class="flex-column"><div id="controls"><div id="previous-slot"><slot name="prev"></slot></div><div id="next-slot"><slot name="next"></slot></div><div id="indicators-slot"><slot name="indicators"></slot></div></div><div id="main"><div class="carousel" id="carousel"><div class="carousel-container" role="group" aria-roledescription="carousel" id="carousel-container"><slot></slot></div></div></div></div>';
const SY_DIALOG_HEADER_T = '<div class="sy-dialog-header-content"><div id="title-for-aria" class="sy-dialog-title"><slot></slot></div></div>';
const SY_BACKDROP_T = '<slot></slot>';
const SY_FOCUS_TRAP_T = '<div id="start" tabindex="-1"></div><div id="backup"></div><slot></slot><div id="end" tabindex="-1"></div>';
const SY_DIALOG_T = '<slot></slot>';
const SLOT = "<slot></slot>";

const PLAN_CARD_VANTAGEM_CSS = `.plan-card{--dlt-plan-card-button-background-color:#34C87E;--dlt-plan-card-background-color:#FFFFFF;--dlt-plan-card-divider-border-color:#A9A9AA59;--dlt-plan-card-border-color:#0000000F;--dlt-plan-card-text-color:#494E4B}`;
const PLAN_CARD_SOFA_CSS = `.plan-card{--dlt-plan-card-button-background-color:#34C87E;--dlt-plan-card-background-color:#FFFFFF;--dlt-plan-card-bullet-text-color:#FFFFFF;--dlt-plan-card-divider-border-color:#A9A9AA;--dlt-plan-card-bullet-background-color:#34C87E;--dlt-plan-card-border-color:#34C87E;--dlt-plan-card-text-color:#494E4B}.header-content-top-tag{--dlt-plan-card-resume-top-tag-background-color:#FFFFFF;--dlt-plan-card-resume-top-tag-text-color:#34C87E}`;
const PLAN_CARD_PERFEITO_CSS = `.plan-card{--dlt-plan-card-button-background-color:#F4822C;--dlt-plan-card-background-color:#34C87E;--dlt-plan-card-bullet-text-color:#34C87E;--dlt-plan-card-divider-border-color:#FFFFFF;--dlt-plan-card-bullet-background-color:#FFFFFF;--dlt-plan-card-border-color:transparent;--dlt-plan-card-text-color:#FFFFFF}`;
const SIGNATURE_PLAN_CSS = `:host{--dlt-signature-plan-carousel-max-width:100%;--dlt-custom-text-lead-font-size:16px}`;
const TEXT_SESSION_CSS = `.text-container{--dlt-text-session-background-color:#fff}`;
const MEDIA_TEXT_CSS = `.media-text-container{--dlt-media-text-background-color:#F3FFF9;--dlt-media-text-button-background-color:#34C87E}`;
const TOOLTIP_CSS = `.tooltip-icon{--dlt-plan-card-tooltip-color:#34C87E}`;
const TOOLTIP_WHITE_CSS = `.tooltip-icon{--dlt-plan-card-tooltip-color:#FFFFFF}`;

function SYText({ type, className, children }: { type: string; className?: string; children: React.ReactNode }) {
  const templates: Record<string, string> = { h2: SY_TEXT_H2, h5: SY_TEXT_H5, body: SY_TEXT_BODY, lead: SY_TEXT_LEAD, small: SY_TEXT_SMALL };
  return (
    <SE as="sy-text" className={className} shadowTemplate={templates[type] || SLOT} attrs={{ type }}>
      {children}
    </SE>
  );
}

function SYIcon({ name, className }: { name: string; className?: string }) {
  return <SE as="sy-icon" className={className} shadowTemplate="" attrs={{ name, role: "img", "aria-hidden": "true" }} />;
}

function SYButton({ children, className, variant, content, ariaLabel, disabled }: { children?: React.ReactNode; className?: string; variant?: string; content?: string; ariaLabel?: string; disabled?: boolean }) {
  const tmpl = content === "icon-only" ? SY_BTN_ICON : SY_BTN;
  const a: Record<string, string> = {};
  if (variant) a.variant = variant;
  if (content) a.content = content;
  if (ariaLabel) a["accessible-label"] = ariaLabel;
  if (disabled) a.disabled = "";
  return <SE as="sy-button" className={className} shadowTemplate={tmpl} attrs={a}>{children}</SE>;
}

function DLTButton({ children, className }: { children: React.ReactNode; className?: string }) {
  return <SE as="dlt-button" className={className} shadowTemplate={SLOT}>{children}</SE>;
}

function SignatureListItem({ children, isLast, benefits, tooltipText }: { children: React.ReactNode; isLast?: boolean; benefits?: string[]; tooltipText?: string }) {
  return (
    <div className={`plan-detail${isLast ? " last" : ""}`}>
      <div className="check">
        <SYIcon name="check" />
      </div>
      <div>
        <div className="detail">
          <SYText type="lead">{children}</SYText>
        </div>
        {benefits && (
          <section className="benefits">
            {benefits.map((src, i) => (
              <img key={i} src={src} alt="Ícone de beneficios" />
            ))}
            {tooltipText && (
              <span className="tooltip-icon-container">
                <SYIcon name="information-circle" className="tooltip-icon" />
                <SE as="sy-tooltip" className="tooltip" shadowTemplate={SLOT} attrs={{ "hide-handlers": "mouseleave", "show-handlers": "mouseenter", "tooltip-style": "default", role: "tooltip", "disable-animations": "true", placement: "auto", delay: "100", for: "#info-icon" }}>
                  <SYText type="lead">{tooltipText}</SYText>
                </SE>
              </span>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

const VOUCHER_TOOLTIP = "Oferecemos aos clientes da Dr. Lava Tudo um benefício exclusivo: todo mês, o valor investido em nossos planos é automaticamente convertido em vouchers de parceiros. Fale com o nosso suporte para saber mais.";

function PlanCardVantagem() {
  return (
    <SE as="dlt-plan-card" className="cards">
      <SE as="dlt-card" className="advantagePlan plan-card" shadowCSS={PLAN_CARD_VANTAGEM_CSS}>
        <SE as="sy-card" className="container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "all" }}>
          <SE as="sy-card-content" className="content" shadowTemplate={SLOT}>
            <SE as="sy-card" className="card-container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "none" }}>
              <div className="card">
                {/* Header */}
                <SE as="dlt-card-header" attrs={{ slot: "header" }}>
                  <SE as="sy-card-header" shadowTemplate={SLOT}>
                    <SYText type="body" className="title">Plano Vantagem</SYText>
                  </SE>
                </SE>
                {/* Content */}
                <SE as="dlt-card-content" className="list-details" attrs={{ slot: "content" }}>
                  <SE as="sy-card-content" shadowTemplate={SLOT}>
                    <SE as="dlt-signature-list" shadowCSS={TOOLTIP_CSS}>
                      <div className="signature-list__component">
                        <SignatureListItem
                          benefits={[
                            "https://drlavatudo.com/assets/benefit/674866b0f5402e5735d34591/68d6c2edd5f22d5370d5cfe4",
                            "https://drlavatudo.com/assets/benefit/673f37727fe1007d3e4a0209/673f37703ba9ce751bf9461f",
                            "https://drlavatudo.com/assets/benefit/67b381e070798b019d9deefc/68cd606c9435ad05102c587b",
                          ]}
                          tooltipText={VOUCHER_TOOLTIP}
                        >
                          Ganhe até <strong>R$50</strong> de cashback em <strong>VOUCHERS</strong> de parceiros da Dr. Lava Tudo
                        </SignatureListItem>
                        <SignatureListItem>
                          <strong>20%</strong> de <strong>DESCONTO fixo</strong> no agendamento de qualquer outro serviço fora dos limites de cobertura do plano
                        </SignatureListItem>
                        <SignatureListItem isLast>
                          <strong>Atendimento express</strong><br />(Prioridade de atendimento no mesmo dia, mediante disponibilidade).
                        </SignatureListItem>
                      </div>
                    </SE>
                  </SE>
                </SE>
                {/* Footer */}
                <SE as="dlt-card-footer" attrs={{ slot: "footer" }}>
                  <SE as="sy-card-footer" shadowTemplate={SLOT} attrs={{ role: "contentinfo" }}>
                    <div className="border"> Plano ANUAL</div>
                    <section className="price">
                      <SYText type="body" className="price--title">Apenas 12x</SYText>
                      <SYText type="body" className="h3">R$9,90</SYText>
                      <SYText type="body" className="small">ou R$118,80 á vista no Cartão de Crédito.</SYText>
                    </section>
                    <div className="button">
                      <DLTButton>
                        <SYButton variant="clear" content="text-only" ariaLabel="CONTRATAR">CONTRATAR</SYButton>
                      </DLTButton>
                    </div>
                  </SE>
                </SE>
              </div>
            </SE>
          </SE>
        </SE>
      </SE>
    </SE>
  );
}

function PlanCardSofa() {
  return (
    <SE as="dlt-plan-card" className="cards">
      <SE as="dlt-card" className="couchPlan plan-card" shadowCSS={PLAN_CARD_SOFA_CSS}>
        <SE as="sy-card" className="container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "all" }}>
          <SE as="sy-card-content" className="content" shadowTemplate={SLOT}>
            <SE as="sy-card" className="card-container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "none" }}>
              <div className="card">
                {/* Header */}
                <SE as="dlt-card-header" attrs={{ slot: "header" }}>
                  <SE as="sy-card-header" shadowTemplate={SLOT}>
                    <section className="highlight-plan header-content-top-tag">
                      <img src="https://drlavatudo.com/assets/images/66a13052cb59f65b2492b9a4/66d8c71a0cf1280923c09a6b/?w=32" alt="Ícone de destaque do plano" />
                      <SYText type="body" className="highlight">O MAIS VENDIDO</SYText>
                    </section>
                    <SYText type="body" className="title">Plano Sofá</SYText>
                    <div className="description">
                      <SYText type="lead">Seu sofá limpo o ano todo.</SYText>
                    </div>
                  </SE>
                </SE>
                {/* Content */}
                <SE as="dlt-card-content" className="list-details" attrs={{ slot: "content" }}>
                  <SE as="sy-card-content" shadowTemplate={SLOT}>
                    <SE as="dlt-signature-list" shadowCSS={TOOLTIP_CSS}>
                      <div className="signature-list__component">
                        <SignatureListItem>
                          Neste plano você tem direito a <strong>1 LIMPEZA POR ANO</strong> de <strong>QUALQUER SOFÁ até 4 lugares.</strong>
                        </SignatureListItem>
                        <SignatureListItem
                          benefits={[
                            "https://drlavatudo.com/assets/benefit/673f37727fe1007d3e4a0209/673f37703ba9ce751bf9461f",
                            "https://drlavatudo.com/assets/benefit/67b388890d10196d97d2bedf/67b3888370798b019d39897d",
                            "https://drlavatudo.com/assets/benefit/67b381e070798b019d9deefc/68cd606c9435ad05102c587b",
                            "https://drlavatudo.com/assets/benefit/68d44d5dc088dc4f163f0b54/68d44cf64171222c5e8f0796",
                            "https://drlavatudo.com/assets/benefit/67b3868e70798b019d1fe16b/67b386500d10196d97b37878",
                          ]}
                          tooltipText={VOUCHER_TOOLTIP}
                        >
                          Até <strong>R$100 de cashback</strong> em <strong>VOUCHERS</strong> de parceiros da Dr. Lava Tudo.
                        </SignatureListItem>
                        <SignatureListItem>
                          <strong>20%</strong> de <strong>DESCONTO fixo</strong> no agendamento de qualquer outro serviço fora dos limites de cobertura do plano.
                        </SignatureListItem>
                        <SignatureListItem isLast>
                          <strong>Atendimento express</strong> (Prioridade de atendimento no mesmo dia, mediante disponibilidade).
                        </SignatureListItem>
                      </div>
                    </SE>
                  </SE>
                </SE>
                {/* Footer */}
                <SE as="dlt-card-footer" attrs={{ slot: "footer" }}>
                  <SE as="sy-card-footer" shadowTemplate={SLOT} attrs={{ role: "contentinfo" }}>
                    <div className="border"> Plano ANUAL</div>
                    <section className="price">
                      <SYText type="body" className="price--title">Apenas 12x</SYText>
                      <SYText type="body" className="h3">R$19,90</SYText>
                      <SYText type="body" className="small">ou R$238,80 á vista no Cartão de Crédito.</SYText>
                    </section>
                    <div className="button">
                      <DLTButton>
                        <SYButton variant="clear" content="text-only" ariaLabel="CONTRATAR">CONTRATAR</SYButton>
                      </DLTButton>
                    </div>
                  </SE>
                </SE>
              </div>
            </SE>
          </SE>
        </SE>
      </SE>
    </SE>
  );
}

function PlanCardPerfeito() {
  return (
    <SE as="dlt-plan-card" className="cards">
      <SE as="dlt-card" className="perfectPlan plan-card" shadowCSS={PLAN_CARD_PERFEITO_CSS}>
        <SE as="sy-card" className="container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "all" }}>
          <SE as="sy-card-content" className="content" shadowTemplate={SLOT}>
            <SE as="sy-card" className="card-container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "none" }}>
              <div className="card">
                <img slot="image" className="background-image" src="https://drlavatudo.com/assets/images/66a13052cb59f65b2492b9a4/66e89e029afca57db812b9f6?w=384" alt="Imagem de fundo" />
                {/* Header */}
                <SE as="dlt-card-header" attrs={{ slot: "header" }}>
                  <SE as="sy-card-header" shadowTemplate={SLOT}>
                    <SYText type="body" className="title">Plano Perfeito</SYText>
                    <div className="description">
                      <SYText type="lead">Personalize o seu plano da maneira que você achar melhor. 👌🏽</SYText>
                    </div>
                  </SE>
                </SE>
                {/* Content */}
                <SE as="dlt-card-content" className="list-details" attrs={{ slot: "content" }}>
                  <SE as="sy-card-content" shadowTemplate={SLOT}>
                    <SE as="dlt-signature-list" shadowCSS={TOOLTIP_WHITE_CSS}>
                      <div className="signature-list__component">
                        <SignatureListItem>
                          <strong>Neste plano você pode escolher QUANTAS LIMPEZAS QUISER de QUALQUER ITEM</strong> dentro do limite de cobertura do plano.
                        </SignatureListItem>
                        <SignatureListItem>
                          Escolha se quer realizar as limpezas <strong>a cada 6 meses ou 1 ano.</strong>
                        </SignatureListItem>
                        <SignatureListItem
                          benefits={[
                            "https://drlavatudo.com/assets/benefit/673f37727fe1007d3e4a0209/673f37703ba9ce751bf9461f",
                            "https://drlavatudo.com/assets/benefit/67b3a03670798b019d17819d/67b3888370798b019d39897d",
                            "https://drlavatudo.com/assets/benefit/67b381e070798b019d9deefc/68cd606c9435ad05102c587b",
                            "https://drlavatudo.com/assets/benefit/67b3868e70798b019d1fe16b/67b386500d10196d97b37878",
                            "https://drlavatudo.com/assets/benefit/67b385ad0d10196d979922e4/67b385a670798b019dfcc537",
                          ]}
                          tooltipText={VOUCHER_TOOLTIP}
                        >
                          <strong>Até R$234,00 de cashback</strong> em <strong>VOUCHERS</strong> de parceiros da Dr. Lava Tudo.
                        </SignatureListItem>
                        <SignatureListItem>
                          <strong>25%</strong> de <strong>DESCONTO fixo</strong> em qualquer outro serviço fora dos limites de cobertura do plano.
                        </SignatureListItem>
                        <SignatureListItem>
                          <strong>Atendimento express</strong> (Prioridade de atendimento no mesmo dia, mediante disponibilidade).
                        </SignatureListItem>
                        <SignatureListItem isLast>
                          Maior tempo de garantia estendida <strong>(15 ou 30 dias).</strong>
                        </SignatureListItem>
                      </div>
                    </SE>
                  </SE>
                </SE>
                {/* Footer */}
                <SE as="dlt-card-footer" attrs={{ slot: "footer" }}>
                  <SE as="sy-card-footer" shadowTemplate={SLOT} attrs={{ role: "contentinfo" }}>
                    <div className="border"> Plano ANUAL</div>
                    <section className="footer">
                      <SYText type="lead">Faça uma simulação e personalize o seu plano perfeito agora mesmo!</SYText>
                    </section>
                    <div className="button">
                      <DLTButton>
                        <SYButton variant="clear" content="text-only" ariaLabel="SIMULAR">SIMULAR</SYButton>
                      </DLTButton>
                    </div>
                  </SE>
                </SE>
              </div>
            </SE>
          </SE>
        </SE>
      </SE>
    </SE>
  );
}

function ZipcodeDialog() {
  return (
    <SE as="sy-dialog" className="dialog-container" shadowTemplate={SY_DIALOG_T} attrs={{ "dialog-size": "medium", position: "fixed" }}>
      <SE as="sy-backdrop" shadowTemplate={SY_BACKDROP_T} attrs={{ role: "presentation" }}>
        <SE as="sy-focus-trap" shadowTemplate={SY_FOCUS_TRAP_T} attrs={{ disabled: "" }}>
          <div className="sy-dialog" role="dialog" aria-labelledby="title-for-aria">
            <SE as="sy-dialog-content" className="dialog" shadowTemplate={SLOT}>
              <SE as="dlt-zipcode-modal" shadowTemplate={SLOT}>
                <SYIcon name="close" className="dialog-close-icon" />
                <div className="dialog-text">
                  <SYText type="body" className="dialog-title">Estamos quase lá!</SYText>
                </div>
                <div className="dialog-zipcode-container">
                  <SE as="dlt-city-service-card" className="dialog-zipcode" shadowTemplate={SLOT}>
                    <div className="city-service">
                      <div className="container">
                        <SYText type="small" className="zipcode-title">
                          Para finalizar a assinatura e descobrir se nossos doutores estão disponíveis em sua região, insira seu CEP
                        </SYText>
                        <div className="card">
                          <SE as="dlt-input" className="zipcode-input" shadowTemplate={SLOT} attrs={{ name: "zipcode" }}>
                            <div className="dlt-input">
                              <div className="input-container">
                                <div className="input-wrapper">
                                  <input id="zipcode" name="zipcode" type="text" placeholder="00000-000" />
                                  <label htmlFor="zipcode" className="floating-label">Informe seu CEP*</label>
                                </div>
                              </div>
                            </div>
                          </SE>
                        </div>
                      </div>
                    </div>
                  </SE>
                  <SE as="dlt-zipcode-result" shadowTemplate="" />
                </div>
              </SE>
            </SE>
          </div>
        </SE>
      </SE>
    </SE>
  );
}

const comparisonRows = [
  { label: "Limpezas semestrais", v: false, s: false, p: true },
  { label: "Limpezas anuais", v: false, s: true, p: true },
  { label: "Garantia estendida", v: false, s: false, p: true },
  { label: "Adicional de Limpeza PET", v: false, s: false, p: true },
  { label: "Cashback em vouchers", v: true, s: true, p: true },
  { label: "Desconto fixo (para serviços extras)", v: true, s: true, p: true },
  { label: "Atendimento express", v: true, s: true, p: true },
];

function ComparePlansDialog() {
  return (
    <SE as="sy-dialog" className="dialog-container" shadowTemplate={SY_DIALOG_T} attrs={{ dialogtitle: "Compare os planos", "dialog-size": "medium", position: "fixed" }}>
      <SE as="sy-backdrop" shadowTemplate={SY_BACKDROP_T} attrs={{ role: "presentation" }}>
        <SE as="sy-focus-trap" shadowTemplate={SY_FOCUS_TRAP_T} attrs={{ disabled: "" }}>
          <div className="sy-dialog" role="dialog" aria-labelledby="title-for-aria">
            <SE as="sy-dialog-header" shadowTemplate={SY_DIALOG_HEADER_T} attrs={{ buttonsposition: "start", dialogsize: "medium", position: "fixed" }}>
              Compare os planos
            </SE>
            <SE as="sy-dialog-content" className="dialog-content" shadowTemplate={SLOT}>
              <SE as="dlt-comparator" shadowTemplate={SLOT}>
                <div className="comparator-infos__titles">
                  {[
                    { name: "Vantagem", price: "12x de R$9,90" },
                    { name: "Sofá", price: "12x de R$19,90" },
                    { name: "Perfeito", price: "A partir de 12x de R$19,90" },
                  ].map((p) => (
                    <div className="comparator-infos__titles-infos" key={p.name}>
                      <SYText type="body" className="title"> {p.name}</SYText>
                      <SYText type="small" className="price">{p.price}</SYText>
                    </div>
                  ))}
                </div>
                <div className="comparator-infos__descriptions">
                  {comparisonRows.map((row) => (
                    <div className="comparator-infos__descriptions-container" key={row.label}>
                      <div className="comparator-infos__descriptions-info">
                        <SYText type="body">{row.label}</SYText>
                      </div>
                      <div className="comparator-infos__descriptions-check">
                        <div className="comparator-infos__check-img"><img src={`https://drlavatudo.com/public_files/${row.v ? "done" : "cancel"}.svg`} /></div>
                        <div className="comparator-infos__check-img"><img src={`https://drlavatudo.com/public_files/${row.s ? "done" : "cancel"}.svg`} /></div>
                        <div className="comparator-infos__check-img"><img src={`https://drlavatudo.com/public_files/${row.p ? "done" : "cancel"}.svg`} /></div>
                      </div>
                    </div>
                  ))}
                </div>
              </SE>
            </SE>
          </div>
        </SE>
      </SE>
    </SE>
  );
}

const priceRows = [
  { item: "1x SOFÁ (4 lugares, Retrátil, Tecido)", avulso: "R$499,00", plano: "12X R$19,90" },
  { item: "1x COLCHÃO (Super King, Box/Baú + Cabeceira)", avulso: "R$345,00", plano: "12X R$19,90" },
  { item: "1x TAPETE (Até 12m²)", avulso: "R$515,00", plano: "12X R$19,90" },
  { item: "1x AR-CONDICIONADO (Split, 30.000 BTU's)", avulso: "R$302,00", plano: "12X R$19,90" },
  { item: "1x ASSENTO AUTOMOTIVO (Grande, Interior completo, Assentos de Couro)", avulso: "R$437,00", plano: "12X R$19,90" },
  { item: "2x CARRINHOS DE BEBÊ (Quíntuplo)", avulso: "R$550,00", plano: "12X R$19,90" },
];

const subscribeBenefits = [
  "https://drlavatudo.com/assets/benefit/674866b0f5402e5735d34591/68d6c2edd5f22d5370d5cfe4",
  "https://drlavatudo.com/assets/benefit/673f37727fe1007d3e4a0209/673f37703ba9ce751bf9461f",
  "https://drlavatudo.com/assets/benefit/67b381e070798b019d9deefc/68cd606c9435ad05102c587b",
  "https://drlavatudo.com/assets/benefit/67b3868e70798b019d1fe16b/67b386500d10196d97b37878",
  "https://drlavatudo.com/assets/benefit/66a3f1683507b36aee63ec54/67b6302125757e48c3675fe3",
  "https://drlavatudo.com/assets/benefit/67b3852e70798b019df9120c/687fd6467ac92c6b9a1c6a3f",
  "https://drlavatudo.com/assets/benefit/67b385ad0d10196d979922e4/67b385a670798b019dfcc537",
  "https://drlavatudo.com/assets/benefit/67b382b770798b019da46f3a/67b382880d10196d976fff24",
  "https://drlavatudo.com/assets/benefit/6748669f09e7e07da521b357/6748669cf5402e5735d278a0",
  "https://drlavatudo.com/assets/benefit/66a3f1793507b36aee646d28/66a3f1773507b36aee646568",
  "https://drlavatudo.com/assets/benefit/67b388890d10196d97d2bedf/67b3888370798b019d39897d",
];

const benefitCards = [
  { title: "Segurança primeiro!", desc: "Técnicos <strong>qualificados, treinados</strong> e <strong>checados através de verificação de antecedentes</strong>, para oferecer sempre o melhor atendimento e segurança.", bg: "https://drlavatudo.com/assets/images/67042f99a70b5d1ca7f6f919/68224f836dcd6b7f9ab4f644" },
  { title: "Benefícios exclusivos", desc: "Aproveite <strong>até 42% do valor do plano em cashback em vouchers</strong> de lojas parceiras, além de descontos exclusivos em serviços extras na Dr. Lava Tudo.", bg: "https://drlavatudo.com/assets/images/67042f99a70b5d1ca7f6f919/68225e667eb715249191a90b" },
  { title: "Praticidade", desc: "Técnicos <strong>qualificados, treinados</strong> e <strong>checados através de verificação de antecedentes</strong>, para oferecer sempre o melhor atendimento e segurança.", bg: "https://drlavatudo.com/assets/images/67042f99a70b5d1ca7f6f919/6830c3721c445840197db724" },
  { title: "Economia inteligente", desc: "Economize <strong>até R$300 por ano</strong> com uma assinatura acessível e sem surpresas no orçamento.", bg: "https://drlavatudo.com/assets/images/67042f99a70b5d1ca7f6f919/6830c375091fc52ba535d7e9" },
  { title: "Satisfação garantida", desc: "Se não ficar satisfeito, <strong>você recebe seu dinheiro de volta.</strong> 100% de garantia em todos os serviços!", bg: "https://drlavatudo.com/assets/images/67042f99a70b5d1ca7f6f919/6830c3771c445840197dc58f" },
];

export default function AssinaturaPage() {
  return (
    <SE as="dlt-dinamic-signature-content" injectGlobalStyles attrs={{ componentid: "67f80fb9df8a732d300c5a4e" }}>

      {/* ===== Section 1: Plans ===== */}
      <div>
        <SE as="dlt-signature-plan" shadowCSS={SIGNATURE_PLAN_CSS}>
          <div id="plans" className="first-section signature-plan">
            <div className="container">
              <section className="text-header">
                <SYText type="h2">Escolha o melhor plano para sua casa</SYText>
                <SYText type="body"><b><a>Clique aqui</a></b> para comparar os planos.</SYText>
              </section>
              <div className="cards-list">
                <SE as="dlt-carousel" className="carousel">
                  <SE as="sy-carousel" className="carousel" shadowTemplate={SY_CAROUSEL_T} attrs={{ "items-visible": "3", "min-size": "350", "slide-by": "1", "transition-duration": "20", "transition-animation": "slide", "auto-play-speed": "5000", "controls-disposition": "outside", "controls-position": "around", "nav-direction": "horizontal" }}>
                    <SE as="sy-carousel-item" className="carousel-item" style={{ flex: "0 0 33.3333%" }} attrs={{ role: "group", "aria-roledescription": "slide", tabindex: "-1" }}>
                      <PlanCardVantagem />
                    </SE>
                    <SE as="sy-carousel-item" className="carousel-item" style={{ flex: "0 0 33.3333%" }} attrs={{ role: "group", "aria-roledescription": "slide", tabindex: "-1" }}>
                      <PlanCardSofa />
                    </SE>
                    <SE as="sy-carousel-item" className="carousel-item" style={{ flex: "0 0 33.3333%" }} attrs={{ role: "group", "aria-roledescription": "slide", tabindex: "-1" }}>
                      <PlanCardPerfeito />
                    </SE>
                    <SYButton className="nav-button left" content="icon-only" variant="clear" ariaLabel="Botão de slide anterior" disabled>
                      <SYIcon name="chevron_left" />
                    </SYButton>
                    <SYButton className="nav-button right" content="icon-only" variant="clear" ariaLabel="Botão de slide próximo" disabled>
                      <SYIcon name="chevron_right" />
                    </SYButton>
                  </SE>
                </SE>
              </div>
            </div>
            <ZipcodeDialog />
            <ComparePlansDialog />
          </div>
        </SE>
      </div>

      {/* ===== Section 2: Price Comparison + Subscribe CTA ===== */}
      <div>
        <SE as="dlt-text-session" shadowCSS={TEXT_SESSION_CSS}>
          <section className="text-container">
            <div className="text">
              {/* Title */}
              <SE as="dlt-text-content" shadowTemplate={SLOT}>
                <div className="text-style">
                  <SYText type="h2">Contratar um plano é melhor que contratar serviços avulsos!</SYText>
                </div>
                <div></div>
              </SE>

              {/* Price Table */}
              <SE as="dlt-text-content" shadowTemplate={SLOT}>
                <div>
                  <SE as="dlt-table" shadowTemplate={SLOT}>
                    <div className="table__content">
                      <SYText type="body">Compare os valores:</SYText>
                      <table cellPadding={1} cellSpacing={1}>
                        <thead>
                          <tr>
                            <th>LIMPEZA DE</th>
                            <th>AVULSO NA LOJA</th>
                            <th>COM PLANO </th>
                          </tr>
                        </thead>
                        <tbody>
                          {priceRows.map((row) => (
                            <tr key={row.item}>
                              <td className="table__item-data" style={{ color: "rgb(39, 44, 41)" }}>
                                <SYText type="lead">{row.item}</SYText>
                              </td>
                              <td className="table__item-data" style={{ color: "rgb(39, 44, 41)" }}>
                                <SYText type="lead"><strong>{row.avulso}</strong></SYText>
                              </td>
                              <td className="table__item-data" style={{ color: "rgb(52, 200, 126)" }}>
                                <SYText type="lead"><strong>{row.plano}</strong></SYText>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <SYText type="small" className="table__subtitle">* Média de valores somando todos os estados.</SYText>
                    </div>
                  </SE>
                </div>
              </SE>

              {/* Subscribe Card with Image */}
              <SE as="dlt-text-content" shadowTemplate={SLOT}>
                <div>
                  <SE as="dlt-card-with-image" shadowTemplate={SLOT}>
                    <img src="https://drlavatudo.com/assets/64afc333b8fbe30101ac66f1/67f3e4a2a79a0e5af8509bea/68b05fe85f6ae74e336ab157" alt="mulher segurando celular com presentes em volta" />
                    <SE as="dlt-card" className="card">
                      <SE as="sy-card" className="container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "all" }}>
                        <SE as="sy-card-content" className="content" shadowTemplate={SLOT}>
                          <SE as="sy-card" className="card-container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "none" }}>
                            <div className="card">
                              <SE as="dlt-card-header" attrs={{ slot: "header" }}>
                                <SE as="sy-card-header" shadowTemplate={SLOT}>
                                  <SYText type="body" className="card__title">Assine hoje e receba automaticamente:</SYText>
                                </SE>
                              </SE>
                              <SE as="dlt-card-content" className="card__content" attrs={{ slot: "content" }}>
                                <SE as="sy-card-content" shadowTemplate={SLOT}>
                                  <SE as="dlt-signature-list" shadowCSS={TOOLTIP_CSS}>
                                    <div className="signature-list__component">
                                      <SignatureListItem>
                                        <strong>Limpezas gratuitas</strong> mensais, ou a cada 6 meses/1 ano.
                                      </SignatureListItem>
                                      <SignatureListItem
                                        benefits={subscribeBenefits}
                                        tooltipText={VOUCHER_TOOLTIP}
                                      >
                                        <strong>Até R$234,00 de cashback</strong> em <strong>VOUCHERS</strong> de nossos parceiros
                                      </SignatureListItem>
                                      <SignatureListItem>
                                        <strong>Até 25%</strong> de <strong>DESCONTO fixo</strong> em qualquer outro serviço.
                                      </SignatureListItem>
                                      <SignatureListItem>
                                        <strong>Atendimento express</strong><br />(Atendimento no mesmo dia).
                                      </SignatureListItem>
                                      <SignatureListItem isLast>
                                        Garantia estendida de até&nbsp;<strong>30 dias.</strong>
                                      </SignatureListItem>
                                    </div>
                                  </SE>
                                </SE>
                              </SE>
                            </div>
                          </SE>
                        </SE>
                      </SE>
                    </SE>
                  </SE>
                </div>
              </SE>
            </div>
            <div className="buttons">
              <DLTButton className="button">
                <SYButton variant="clear" content="text-only" ariaLabel="QUERO ASSINAR UM PLANO AGORA">QUERO ASSINAR UM PLANO AGORA</SYButton>
              </DLTButton>
            </div>
          </section>
        </SE>
      </div>

      {/* ===== Section 3: Benefits ("Por que ter um Plano") ===== */}
      <div>
        <SE as="dlt-text-session" shadowCSS={TEXT_SESSION_CSS}>
          <section className="text-container">
            <div className="text">
              {/* Title */}
              <SE as="dlt-text-content" shadowTemplate={SLOT}>
                <div className="text-style">
                  <SYText type="h2" className="different-title">Por que ter um</SYText>
                  <SYText type="h2" className="different-title">Plano da Dr. Lava Tudo?</SYText>
                </div>
                <div></div>
              </SE>

              {/* Benefits Carousel */}
              <SE as="dlt-text-content" shadowTemplate={SLOT}>
                <div>
                  <SE as="dlt-image-carousel" attrs={{ hidedots: "" }}>
                    <div className="image_carousel">
                      <div className="container">
                        <SE as="sy-carousel" className="carousel" shadowTemplate={SY_CAROUSEL_T} attrs={{ "items-visible": "3", "auto-play-speed": "5000", "controls-disposition": "outside", "controls-position": "around", "min-size": "280", "nav-direction": "horizontal", "transition-animation": "slide", "adaptive-height": "" }}>
                          {benefitCards.map((card) => (
                            <SE key={card.title} as="sy-carousel-item" style={{ flex: "0 0 33.3333%" }} attrs={{ role: "group", "aria-roledescription": "slide", tabindex: "-1" }}>
                              <SE as="dlt-card" className="card">
                                <SE as="sy-card" className="container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "all" }}>
                                  <SE as="sy-card-content" className="content" shadowTemplate={SLOT}>
                                    <SE as="sy-card" className="card-container" shadowTemplate={SY_CARD} attrs={{ "hide-shadow": "", border: "none" }}>
                                      <SE as="dlt-card-content" className="card__content" attrs={{ slot: "content" }} style={{ background: `url("${card.bg}") center top / 326px no-repeat` }}>
                                        <SE as="sy-card-content" shadowTemplate={SLOT}>
                                          <div className="card__content--description">
                                            <img className="card__content--check" src="https://drlavatudo.com/ui-package/v:eb383d01b304539290726a6d95a1ffd4/dlt-marketing-componentes/assets/check-card.svg" alt="check" />
                                            <div className="card__content--texts">
                                              <SYText type="h5">{card.title}</SYText>
                                              <div>
                                                <SYText type="lead"><span dangerouslySetInnerHTML={{ __html: card.desc }} /></SYText>
                                              </div>
                                            </div>
                                          </div>
                                        </SE>
                                      </SE>
                                    </SE>
                                  </SE>
                                </SE>
                              </SE>
                            </SE>
                          ))}
                          <SYButton className="nav-button" content="icon-only" variant="clear" ariaLabel="Botão de slide anterior" disabled>
                            <SYIcon name="chevron_left" />
                          </SYButton>
                          <SYButton className="nav-button" content="icon-only" variant="clear" ariaLabel="Botão de slide próximo">
                            <SYIcon name="chevron_right" />
                          </SYButton>
                        </SE>
                      </div>
                    </div>
                  </SE>
                </div>
              </SE>
            </div>
            <div className="buttons">
              <DLTButton className="button">
                <SYButton variant="clear" content="text-only" ariaLabel="QUERO ASSINAR UM PLANO AGORA">QUERO ASSINAR UM PLANO AGORA</SYButton>
              </DLTButton>
            </div>
          </section>
        </SE>
      </div>

      {/* ===== Section 4: Award ===== */}
      <div>
        <SE as="dlt-media-text" className="" shadowCSS={MEDIA_TEXT_CSS} attrs={{ "align-center": "", "component-id": "6703d995da04e20af31842e6", "is-signature-page": "", "is-mobile-bottom-button": "" }}>
          <section className="media-text-container">
            <div className="media-text media-text-right">
              <div className="text align-center">
                <SE as="dlt-text-content" shadowTemplate={SLOT}>
                  <div className="text-style">
                    <SYText type="h2">🏆 A Escolha Nº1 dos Brasileiros para Limpeza de Estofados</SYText>
                    <SYText type="lead">
                      Qualidade reconhecida e aprovada! A Dr. Lava Tudo foi eleita a Melhor Empresa de Limpeza de Sofás e Estofados em 2024 pelo Melhores.com! Esse reconhecimento reforça nosso compromisso com um serviço impecável, atendimento de excelência e resultados que fazem a diferença na vida dos nossos clientes
                    </SYText>
                  </div>
                  <div></div>
                </SE>
                <DLTButton className="media-text-button">
                  <SYButton variant="clear" content="text-only" ariaLabel="QUERO ASSINAR UM PLANO AGORA">QUERO ASSINAR UM PLANO AGORA</SYButton>
                </DLTButton>
              </div>
              <div className="media-text-button mobile">
                <DLTButton className="media-text-button mobile">
                  <SYButton variant="clear" content="text-only" ariaLabel="QUERO ASSINAR UM PLANO AGORA">QUERO ASSINAR UM PLANO AGORA</SYButton>
                </DLTButton>
              </div>
              <div className="media media-space">
                <div className="image-container image-container-right">
                  <picture>
                    <source srcSet="https://drlavatudo.com/assets/images/6703d995da04e20af31842e6/67f3e34994776121e59efefd?w=264" media="(max-width: 360px)" />
                    <source srcSet="https://drlavatudo.com/assets/images/6703d995da04e20af31842e6/67f3e34994776121e59efefd?w=348" media="(max-width: 480px)" />
                    <img srcSet="https://drlavatudo.com/assets/images/6703d995da04e20af31842e6/67f3e34994776121e59efefd?w=456" loading="lazy" alt="🏆 A Escolha Nº1 dos Brasileiros para Limpeza de Estofados" />
                  </picture>
                </div>
              </div>
            </div>
          </section>
        </SE>
      </div>

    </SE>
  );
}
