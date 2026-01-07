"use client";

import { useLayoutEffect } from "react";
import { VWOScript } from "vwo-smartcode-nextjs";

interface VWOScriptLoaderProps {
  accountId: string;
}

export default function VWOScriptLoader({ accountId }: VWOScriptLoaderProps) {
  useLayoutEffect(() => {
    // VWOScript component should handle injection, but we ensure it's mounted
    // This is a client component wrapper to ensure proper loading
  }, []);

  return <VWOScript accountId={accountId} />;
}

