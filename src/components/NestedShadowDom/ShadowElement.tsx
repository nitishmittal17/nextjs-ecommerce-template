"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type ShadowDepth = 1 | 2 | 3;

interface ShadowElementProps {
  as?: string;
  attrs?: Record<string, string>;
  children?: React.ReactNode;
  className?: string;
  depth?: ShadowDepth;
  injectGlobalStyles?: boolean;
  label?: string;
  shadowCSS?: string;
  shadowTemplate?: string;
  style?: React.CSSProperties;
}

const cloneDocumentStyles = (shadowRoot: ShadowRoot) => {
  document
    .querySelectorAll('style, link[rel="stylesheet"]')
    .forEach((node) => shadowRoot.appendChild(node.cloneNode(true)));

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => {
        if (
          node instanceof HTMLStyleElement ||
          (node instanceof HTMLLinkElement && node.rel === "stylesheet")
        ) {
          shadowRoot.appendChild(node.cloneNode(true));
        }
      });
    }
  });

  observer.observe(document.head, { childList: true });
  return () => observer.disconnect();
};

const nestedShadowTemplate = (
  level: number,
  isMountLevel: boolean,
  label?: string,
) => `
  <style>
    :host {
      display: block;
    }

    .shadow-shell {
      display: block;
      min-height: 100%;
      border: 1px solid rgba(129, 140, 248, 0.45);
      border-radius: 22px;
      padding: 14px;
      background:
        radial-gradient(circle at top right, rgba(59, 130, 246, 0.2), transparent 34%),
        rgba(15, 23, 42, 0.84);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }

    .shadow-shell[data-level="2"] {
      border-color: rgba(45, 212, 191, 0.45);
      background:
        radial-gradient(circle at top left, rgba(45, 212, 191, 0.18), transparent 34%),
        rgba(15, 23, 42, 0.76);
    }

    .shadow-shell[data-level="3"] {
      border-color: rgba(251, 191, 36, 0.5);
      background:
        radial-gradient(circle at bottom right, rgba(251, 191, 36, 0.16), transparent 34%),
        rgba(15, 23, 42, 0.7);
    }

    .shadow-label {
      display: inline-flex;
      margin-bottom: 12px;
      border-radius: 999px;
      padding: 4px 10px;
      background: rgba(255, 255, 255, 0.08);
      color: rgb(226, 232, 240);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .nested-host {
      display: block;
    }
  </style>
  <div class="shadow-shell" data-level="${level}">
    <span class="shadow-label">${label ?? `Shadow root level ${level}`}</span>
    <div class="${isMountLevel ? "" : "nested-host"}" id="${
      isMountLevel ? "shadow-content-mount" : "next-shadow-host"
    }"></div>
  </div>
`;

function LegacyShadowElement({
  as = "div",
  attrs,
  children,
  className,
  injectGlobalStyles = false,
  shadowCSS,
  shadowTemplate = "<slot></slot>",
  style,
}: ShadowElementProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement | null>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || elementRef.current) return;

    const element = document.createElement(as);
    element.classList.add("hydrated");

    if (className) {
      className.split(/\s+/).forEach((classToken) => {
        if (classToken) element.classList.add(classToken);
      });
    }

    if (style) Object.assign(element.style, style);

    if (attrs) {
      Object.entries(attrs).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }

    const shadowRoot = element.attachShadow({ mode: "open" });

    if (shadowCSS) {
      const styleElement = document.createElement("style");
      styleElement.textContent = shadowCSS;
      shadowRoot.appendChild(styleElement);
    }

    const cleanupStyles = injectGlobalStyles
      ? cloneDocumentStyles(shadowRoot)
      : undefined;

    const template = document.createElement("template");
    template.innerHTML = shadowTemplate;
    shadowRoot.appendChild(template.content.cloneNode(true));

    host.appendChild(element);
    elementRef.current = element;
    setTarget(element);

    return () => {
      cleanupStyles?.();
      setTarget(null);
      element.remove();
      elementRef.current = null;
    };
  }, [
    as,
    attrs,
    children,
    className,
    injectGlobalStyles,
    shadowCSS,
    shadowTemplate,
    style,
  ]);

  return (
    <div ref={hostRef} style={{ display: "contents" }}>
      {target && createPortal(children, target)}
    </div>
  );
}

function NestedShadowElement({
  children,
  className,
  depth = 1,
  label,
  style,
}: ShadowElementProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const cleanups: Array<() => void> = [];
    const outerHost = document.createElement("section");
    outerHost.setAttribute("data-shadow-host", "level-1");
    outerHost.style.display = "block";
    host.appendChild(outerHost);

    let currentShadowRoot = outerHost.attachShadow({ mode: "open" });

    for (let level = 1; level <= depth; level += 1) {
      const isMountLevel = level === depth;
      currentShadowRoot.innerHTML = nestedShadowTemplate(
        level,
        isMountLevel,
        level === depth ? label : undefined,
      );
      cleanups.push(cloneDocumentStyles(currentShadowRoot));

      if (isMountLevel) {
        setMountNode(currentShadowRoot.getElementById("shadow-content-mount"));
        break;
      }

      const nextHostContainer = currentShadowRoot.getElementById("next-shadow-host");
      const nestedHost = document.createElement("section");
      nestedHost.setAttribute("data-shadow-host", `level-${level + 1}`);
      nestedHost.style.display = "block";
      nextHostContainer?.appendChild(nestedHost);
      currentShadowRoot = nestedHost.attachShadow({ mode: "open" });
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      setMountNode(null);
      outerHost.remove();
    };
  }, [depth, label]);

  return (
    <div
      ref={hostRef}
      className={className}
      data-shadow-depth={depth}
      style={style}
    >
      {mountNode && createPortal(children, mountNode)}
    </div>
  );
}

export default function ShadowElement(props: ShadowElementProps) {
  if (props.as) {
    return <LegacyShadowElement {...props} />;
  }

  return <NestedShadowElement {...props} />;
}
