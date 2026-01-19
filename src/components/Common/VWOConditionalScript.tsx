"use client";

import { useSearchParams, usePathname } from 'next/navigation';
import { VWOScript } from 'vwo-smartcode-nextjs';
import { Suspense } from 'react';

function VWOScriptContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const vwoAccountId = searchParams.get('id');
  const isHomePage = pathname === '/';

  if (isHomePage && vwoAccountId) {
    return <VWOScript accountId={vwoAccountId} />;
  }
  
  return null;
}

export default function VWOConditionalScript() {
  return (
    <Suspense fallback={null}>
      <VWOScriptContent />
    </Suspense>
  );
}
