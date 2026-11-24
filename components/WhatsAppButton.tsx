"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SITE_CONFIG } from "@/lib/config";
import { prefersReducedMotion } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !btnRef.current) return;
    gsap.fromTo(
      btnRef.current,
      { scale: 0.5, opacity: 0, y: 16 },
      { scale: 1, opacity: 1, y: 0, duration: 0.6, delay: 0.7, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <div className="group relative flex items-center justify-end">
      <span
        role="tooltip"
        className="pointer-events-none hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg bg-navy text-white text-xs font-semibold shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all whitespace-nowrap border border-white/10"
      >
        {t.floating.whatsappTooltip}
      </span>

      <a
        ref={btnRef}
        href={SITE_CONFIG.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.whatsappTooltip}
        title={t.floating.whatsappTooltip}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1FB858] text-white shadow-lg shadow-[#25D366]/35 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.031 2C6.506 2 2.025 6.481 2.025 12.006C2.025 13.769 2.486 15.489 3.362 17.001L2 22L7.115 20.658C8.573 21.454 10.22 21.873 11.902 21.874H12.031C17.555 21.874 22.036 17.393 22.036 11.868C22.036 9.199 20.996 6.69 19.109 4.803C17.222 2.916 14.702 2 12.031 2ZM17.856 16.223C17.611 16.912 16.43 17.542 15.869 17.624C15.362 17.699 14.72 17.731 14.016 17.507C13.588 17.371 13.038 17.189 12.337 16.886C9.383 15.61 7.454 12.633 7.306 12.437C7.159 12.24 6.106 10.84 6.106 9.392C6.106 7.944 6.866 7.232 7.136 6.937C7.406 6.642 7.725 6.568 7.921 6.568C8.118 6.568 8.314 6.57 8.486 6.578C8.667 6.587 8.91 6.509 9.149 7.084C9.395 7.674 9.984 9.124 10.058 9.272C10.131 9.419 10.18 9.591 10.082 9.787C9.984 9.984 9.935 10.107 9.787 10.279C9.64 10.451 9.478 10.663 9.345 10.794C9.198 10.941 9.044 11.101 9.216 11.396C9.388 11.691 9.98 12.656 10.858 13.439C11.986 14.445 12.938 14.757 13.233 14.904C13.527 15.052 13.699 15.027 13.871 14.831C14.043 14.634 14.608 13.97 14.804 13.675C15.001 13.38 15.197 13.429 15.467 13.528C15.737 13.626 17.186 14.339 17.48 14.486C17.775 14.634 17.971 14.707 18.045 14.83C18.118 14.953 18.118 15.543 17.856 16.223Z" />
        </svg>
      </a>
    </div>
  );
}
