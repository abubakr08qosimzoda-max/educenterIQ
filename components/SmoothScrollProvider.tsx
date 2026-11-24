"use client";

import { useEffect } from "react";
import { initLenisWithScrollTrigger } from "@/lib/animations";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const cleanup = initLenisWithScrollTrigger();
    return cleanup;
  }, []);

  return <>{children}</>;
}
