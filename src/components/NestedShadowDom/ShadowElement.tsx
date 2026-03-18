"use client";
import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ShadowElementProps {
  as: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  shadowCSS?: string;
  shadowTemplate?: string;
  injectGlobalStyles?: boolean;
  attrs?: Record<string, string>;
}

export default function ShadowElement({
  as: tagName,
  children,
  className,
  style: inlineStyle,
  shadowCSS,
  shadowTemplate = "<slot></slot>",
  injectGlobalStyles = false,
  attrs,
}: ShadowElementProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLElement | null>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const tagNameRef = useRef(tagName);
  const classNameRef = useRef(className);
  const inlineStyleRef = useRef(inlineStyle);
  const shadowCSSRef = useRef(shadowCSS);
  const shadowTemplateRef = useRef(shadowTemplate);
  const injectGlobalStylesRef = useRef(injectGlobalStyles);
  const attrsRef = useRef(attrs);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || elRef.current) return;

    const el = document.createElement(tagNameRef.current);
    el.classList.add("hydrated");
    if (classNameRef.current)
      classNameRef.current
        .split(/\s+/)
        .forEach((c) => c && el.classList.add(c));
    if (inlineStyleRef.current) Object.assign(el.style, inlineStyleRef.current);
    if (attrsRef.current)
      Object.entries(attrsRef.current).forEach(([k, v]) => el.setAttribute(k, v));

    const sr = el.attachShadow({ mode: "open" });

    if (shadowCSSRef.current) {
      const s = document.createElement("style");
      s.textContent = shadowCSSRef.current;
      sr.appendChild(s);
    }

    let obs: MutationObserver | undefined;
    if (injectGlobalStylesRef.current) {
      document
        .querySelectorAll('style, link[rel="stylesheet"]')
        .forEach((n) => sr.appendChild(n.cloneNode(true)));
      obs = new MutationObserver((muts) => {
        for (const m of muts) {
          m.addedNodes.forEach((node) => {
            if (
              node instanceof HTMLStyleElement ||
              (node instanceof HTMLLinkElement &&
                node.rel === "stylesheet")
            )
              sr.appendChild(node.cloneNode(true));
          });
        }
      });
      obs.observe(document.head, { childList: true });
    }

    const tmpl = document.createElement("template");
    tmpl.innerHTML = shadowTemplateRef.current;
    sr.appendChild(tmpl.content.cloneNode(true));

    host.appendChild(el);
    elRef.current = el;
    setTarget(el);

    return () => {
      obs?.disconnect();
      el.remove();
      elRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={hostRef} style={{ display: "contents" }}>
      {target && createPortal(children, target)}
    </div>
  );
}
