import React from "react";

type FrameDepth = 1 | 2 | 3;

interface NestedShadowDomWrapperProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

interface NestedIframeElementProps {
  description: string;
  depth?: FrameDepth;
  title: string;
}

const destinations = [
  { label: "React2", href: "/react2" },
  { label: "Nuxt2", href: "/nuxt2" },
  { label: "Shadow DOM 2", href: "/shadow-dom-2" },
];

const iframeSourceUrl =
  "https://nextjs-ecommerce-template-five.vercel.app/nestedShadowDom";

const escapeHtmlAttribute = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const renderFrameActions = () =>
  destinations
    .map(
      (destination) => `
        <a class="demo-button" href="${destination.href}" target="_top">
          ${destination.label}
        </a>
      `,
    )
    .join("");

const renderFrameDocument = ({
  description,
  level,
  maxDepth,
  title,
}: {
  description: string;
  level: number;
  maxDepth: FrameDepth;
  title: string;
}): string => {
  const isInnermost = level === maxDepth;
  const childDocument = isInnermost
    ? ""
    : renderFrameDocument({
        description,
        level: level + 1,
        maxDepth,
        title,
      });

  const nestedFrame = isInnermost
    ? ""
    : `
      <iframe
        class="nested-frame"
        title="${escapeHtmlAttribute(`${title} nested iframe level ${level + 1}`)}"
        src="${iframeSourceUrl}"
        srcdoc="${escapeHtmlAttribute(childDocument)}"
        sandbox="allow-top-navigation-by-user-activation"
      ></iframe>
    `;

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background:
          radial-gradient(circle at top right, rgba(56, 189, 248, 0.24), transparent 32%),
          linear-gradient(135deg, #0f172a, #111827);
        color: #f8fafc;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      .frame-shell {
        min-height: 100vh;
        padding: 18px;
      }

      .frame-card {
        min-height: calc(100vh - 36px);
        border: 1px solid rgba(125, 211, 252, 0.45);
        border-radius: 22px;
        padding: 18px;
        background: rgba(15, 23, 42, 0.8);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
      }

      .frame-label {
        display: inline-flex;
        margin-bottom: 12px;
        border-radius: 999px;
        padding: 4px 10px;
        background: rgba(255, 255, 255, 0.08);
        color: #bae6fd;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      h2 {
        margin: 0 0 8px;
        font-size: clamp(22px, 4vw, 34px);
        line-height: 1.1;
      }

      p {
        margin: 0 0 18px;
        color: #cbd5e1;
        line-height: 1.6;
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: ${isInnermost ? "0" : "18px"};
      }

      .demo-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 999px;
        padding: 10px 14px;
        background: #f8fafc;
        color: #0f172a;
        font-size: 14px;
        font-weight: 800;
        text-decoration: none;
      }

      .demo-button:hover {
        background: #38bdf8;
        color: #082f49;
      }

      .nested-frame {
        width: 100%;
        min-height: 320px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 18px;
        background: #020617;
      }
    </style>
  </head>
  <body>
    <main class="frame-shell">
      <section class="frame-card">
        <span class="frame-label">Iframe level ${level} of ${maxDepth}</span>
        <h2>${title}</h2>
        <p>${description}</p>
        <div class="actions">${renderFrameActions()}</div>
        ${nestedFrame}
      </section>
    </main>
  </body>
</html>`;
};

export function NestedIframeElement({
  description,
  depth = 1,
  title,
}: NestedIframeElementProps) {
  return (
    <iframe
      className="min-h-[430px] w-full rounded-[22px] border border-sky-300/30 bg-slate-950 shadow-2xl shadow-sky-950/40"
      sandbox="allow-top-navigation-by-user-activation"
      src={iframeSourceUrl}
      srcDoc={renderFrameDocument({
        description,
        level: 1,
        maxDepth: depth,
        title,
      })}
      title={title}
    />
  );
}

export default function NestedShadowDomWrapper({
  header,
  footer,
  children,
}: NestedShadowDomWrapperProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {header}
      {children}
      {footer}
    </div>
  );
}
