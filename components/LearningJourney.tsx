"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { prefersReducedMotion, registerGsap } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

export default function LearningJourney() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.from(".journey-step", {
        y: 26,
        opacity: 0,
        duration: 0.65,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative bg-cream text-navy pt-12 sm:pt-16 pb-24 sm:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange" />
              <span>{t.journey.badge}</span>
            </div>

            <h2 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-4xl leading-[1.08]">
              {t.journey.titlePrefix}{" "}
              <span className="text-electric">{t.journey.titleAccent}</span>
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.journey.steps.map((step, index) => (
              <div
                key={step.number}
                className="journey-step relative flex items-start lg:flex-col gap-4 lg:gap-3 bg-white/80 lg:bg-transparent p-4 lg:p-0 rounded-2xl border border-slate-200/70 lg:border-0"
              >
                <div className="flex items-center gap-3 w-full">
                  <span
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-display font-extrabold text-sm text-white shadow-md shrink-0 ${
                      index === 0
                        ? "bg-electric shadow-electric/30"
                        : "bg-orange shadow-orange/30"
                    }`}
                  >
                    {step.number}
                  </span>

                  {index < t.journey.steps.length - 1 && (
                    <ArrowRight
                      className="hidden lg:block w-5 h-5 text-slate-400 ml-auto mr-2"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-lg text-navy">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16"
          preserveAspectRatio="none"
        >
          <path d="M0 45C420 0 1020 85 1440 25V80H0V45Z" fill="#10172A" />
        </svg>
      </div>
    </section>
  );
}
