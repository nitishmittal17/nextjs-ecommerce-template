"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

interface ShadowDomWrapperProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const SHADOW_TEMPLATE = `
  <style>
    :host {
      display: block;
    }
    .shadow-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .shadow-header {
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .shadow-main {
      flex: 1 1 auto;
    }
    .shadow-footer {
      flex-shrink: 0;
    }
  </style>
  <div class="shadow-wrapper">
    <div class="shadow-header" id="shadow-header-container"></div>
    <div class="shadow-main" id="shadow-main-container"></div>
    <div class="shadow-footer" id="shadow-footer-container"></div>
  </div>
`;

const ShadowDomWrapper = ({
  header,
  footer,
  children,
}: ShadowDomWrapperProps) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [containers, setContainers] = useState<{
    header: HTMLElement | null;
    main: HTMLElement | null;
    footer: HTMLElement | null;
  }>({ header: null, main: null, footer: null });

  const injectStyles = useCallback((sr: ShadowRoot) => {
    document
      .querySelectorAll('style, link[rel="stylesheet"]')
      .forEach((el) => sr.appendChild(el.cloneNode(true)));

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (
            node instanceof HTMLStyleElement ||
            (node instanceof HTMLLinkElement && node.rel === "stylesheet")
          ) {
            sr.appendChild(node.cloneNode(true));
          }
        });
      }
    });

    observer.observe(document.head, { childList: true });
    return observer;
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let observer: MutationObserver | undefined;
    let sr = host.shadowRoot;

    if (!sr) {
      sr = host.attachShadow({ mode: "open" });
      sr.innerHTML = SHADOW_TEMPLATE;
      observer = injectStyles(sr);
    }

    setContainers({
      header: sr.getElementById("shadow-header-container"),
      main: sr.getElementById("shadow-main-container"),
      footer: sr.getElementById("shadow-footer-container"),
    });

    return () => observer?.disconnect();
  }, [injectStyles]);

  return (
    <>
      <div ref={hostRef} id="shadow-dom-host" style={{ display: "contents" }} />
      {containers.header && header && createPortal(header, containers.header)}
      {containers.main && createPortal(children, containers.main)}
      {containers.footer && footer && createPortal(footer, containers.footer)}
    </>
  );
};

export default ShadowDomWrapper;
