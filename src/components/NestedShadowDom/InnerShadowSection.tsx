"use client";

import React from "react";
import ShadowElement from "./ShadowElement";

interface InnerShadowSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function InnerShadowSection({
  children,
  className,
}: InnerShadowSectionProps) {
  return (
    <ShadowElement
      className={className}
      depth={2}
      label="Nested shadow section"
    >
      {children}
    </ShadowElement>
  );
}
