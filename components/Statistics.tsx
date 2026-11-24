"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GraduationCap } from "lucide-react";
import { IMPACT_STATS } from "@/lib/data";
import { prefersReducedMotion, registerGsap } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

export default function Statistics() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".stat-counter");
      counters.forEach((el) => {
        const target = Number(el.dataset.target || "0");
        const suffix = el.dataset.suffix || "";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
          onUpdate: () => {
            const formatted = Math.round(obj.val).toLocaleString();
            el.textContent = `${formatted}${suffix}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-electric text-white p-7 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between h-full"
    >
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs sm:text-sm font-medium text-white mb-7">
          <span className="w-2 h-2 rounded-full bg-orange" />
          <span>{t.stats.badge}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-5 relative z-10">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={stat.label}>
              <p
                className="stat-counter font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white"
                data-target={stat.value}
                data-suffix={stat.suffix}
              >
                {stat.value.toLocaleString()}
                {stat.suffix}
              </p>
              <p className="text-sm text-indigo-100 mt-1 font-medium">
                {t.stats.items[idx]?.label || stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-[11px] text-indigo-100/80">{t.stats.sampleNote}</p>
        <div
          className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-navy/35 text-orange rotate-12 shadow-lg"
          aria-hidden="true"
        >
          <GraduationCap className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}
