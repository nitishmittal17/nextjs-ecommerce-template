"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

interface NestedShadowDomWrapperProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const OUTER_SHADOW_TEMPLATE = `
  <style>
    :host {
      display: block;
    }
    .nested-shadow-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    .nested-shadow-header {
      flex-shrink: 0;
      position: sticky;
      top: 0;
      z-index: 50;
    }
    .nested-shadow-main {
      flex: 1 1 auto;
    }
    .nested-shadow-footer {
      flex-shrink: 0;
    }
  </style>
  <div class="nested-shadow-wrapper">
    <div class="nested-shadow-header" id="nested-header-container"></div>
    <div class="nested-shadow-main" id="nested-main-container"></div>
    <div class="nested-shadow-footer" id="nested-footer-container"></div>
  </div>
`;

const NestedShadowDomWrapper = ({
  header,
  footer,
  children,
}: NestedShadowDomWrapperProps) => {
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
      sr.innerHTML = OUTER_SHADOW_TEMPLATE;
      observer = injectStyles(sr);
    }

    setContainers({
      header: sr.getElementById("nested-header-container"),
      main: sr.getElementById("nested-main-container"),
      footer: sr.getElementById("nested-footer-container"),
    });

    return () => observer?.disconnect();
  }, [injectStyles]);

  return (
    <>
      <div ref={hostRef} id="nested-shadow-dom-host" style={{ display: "contents" }} />
      {containers.header && header && createPortal(header, containers.header)}
      {containers.main && createPortal(children, containers.main)}
      {containers.footer && footer && createPortal(footer, containers.footer)}
    </>
  );
};

export default NestedShadowDomWrapper;
