"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { prefersReducedMotion, registerGsap } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

export default function CTA() {
  const { t } = useLanguage();
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ctaRef.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.from(".cta-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ctaRef} className="lg:col-span-6 text-white">
      <h2 className="cta-reveal font-display font-extrabold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.05] mb-4">
        {t.cta.titleLine1}{" "}
        <span className="block">
          {t.cta.titleLine2Prefix}{" "}
          <span className="text-electric">{t.cta.titleAccent}</span>
        </span>
      </h2>

      <p className="cta-reveal text-slate-200 text-base sm:text-lg max-w-md leading-relaxed mb-7">
        {t.cta.subtitle}
      </p>

      <div className="cta-reveal">
        <a
          href="#enrollment-form"
          className="inline-flex items-center gap-2.5 bg-orange hover:bg-orange-dark text-white font-semibold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-orange/30 transition-all hover:scale-[1.02]"
        >
          <span>{t.cta.button}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
