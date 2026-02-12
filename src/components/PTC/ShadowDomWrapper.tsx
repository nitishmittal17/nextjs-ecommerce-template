"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

/**
 * ShadowDomWrapper
 *
 * Wraps its children inside an actual Shadow DOM boundary.
 * - Attaches a shadow root (mode: "open") to a host <div>
 * - Clones all stylesheets from the document <head> into the shadow root
 *   so that Tailwind CSS and other global styles still apply
 * - Uses React createPortal to render children into the shadow root
 */
const ShadowDomWrapper = ({ children }: { children: React.ReactNode }) => {
  const hostRef = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);

  const injectStyles = useCallback((sr: ShadowRoot) => {
    // Clone all <style> and <link rel="stylesheet"> from document head
    const headElements = document.querySelectorAll(
      'style, link[rel="stylesheet"]'
    );

    headElements.forEach((el) => {
      const clone = el.cloneNode(true) as HTMLElement;
      sr.appendChild(clone);
    });

    // Also observe for new stylesheets added later (e.g., by Next.js HMR)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLStyleElement) {
            sr.appendChild(node.cloneNode(true));
          }
          if (
            node instanceof HTMLLinkElement &&
            node.rel === "stylesheet"
          ) {
            sr.appendChild(node.cloneNode(true));
          }
        });
      });
    });

    observer.observe(document.head, { childList: true });
    return observer;
  }, []);

  useEffect(() => {
    if (!hostRef.current) return;

    // Only attach once
    if (hostRef.current.shadowRoot) {
      setShadowRoot(hostRef.current.shadowRoot);
      return;
    }

    const sr = hostRef.current.attachShadow({ mode: "open" });

    // Create a container div inside shadow root for React to render into
    const container = document.createElement("div");
    container.id = "shadow-root-container";
    sr.appendChild(container);

    // Inject styles
    const observer = injectStyles(sr);

    setShadowRoot(sr);

    return () => {
      observer.disconnect();
    };
  }, [injectStyles]);

  // Get the container element inside the shadow root
  const portalTarget = shadowRoot?.getElementById("shadow-root-container");

  return (
    <>
      <div ref={hostRef} id="shadow-dom-host" style={{ display: "contents" }} />
      {portalTarget && createPortal(children, portalTarget)}
    </>
  );
};

export default ShadowDomWrapper;
