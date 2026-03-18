"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";

interface InnerShadowSectionProps {
  children: React.ReactNode;
  className?: string;
}

const INNER_TEMPLATE = `
  <style>
    :host {
      display: block;
    }
    .inner-shadow-content {
      display: contents;
    }
  </style>
  <div class="inner-shadow-content" id="inner-content"></div>
`;

const InnerShadowSection = ({ children, className }: InnerShadowSectionProps) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement | null>(null);

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
      sr.innerHTML = INNER_TEMPLATE;
      observer = injectStyles(sr);
    }

    setContainer(sr.getElementById("inner-content"));

    return () => observer?.disconnect();
  }, [injectStyles]);

  return (
    <>
      <div ref={hostRef} className={className} style={{ display: "contents" }} />
      {container && createPortal(children, container)}
    </>
  );
};

export default InnerShadowSection;
