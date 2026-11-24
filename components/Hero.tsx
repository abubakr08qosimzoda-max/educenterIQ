"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, Play, X } from "lucide-react";
import { prefersReducedMotion, registerGsap } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.from(".hero-stagger", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.from(".hero-visual", {
        scale: 0.94,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative bg-navy text-white pt-24 sm:pt-28 pb-24 sm:pb-32 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-electric/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-16 right-0 w-96 h-96 rounded-full bg-electric/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-6 text-left">
            <div className="hero-stagger inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200 mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-orange" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="hero-stagger font-display font-extrabold uppercase tracking-tight leading-[1.04] text-[34px] sm:text-5xl lg:text-6xl xl:text-[62px] mb-5">
              <span className="block text-white">{t.hero.titleLine1}</span>
              <span className="block text-white">{t.hero.titleLine2}</span>
              <span className="relative inline-block text-orange mt-1">
                {t.hero.titleAccent}
                <svg
                  className="w-full h-3 sm:h-4 -mt-1 text-orange"
                  viewBox="0 0 300 18"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 13C75 4 210 3 296 11"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="hero-stagger text-slate-300 text-base sm:text-lg max-w-lg leading-relaxed mb-7 sm:mb-8">
              {t.hero.subtitle}
            </p>

            <div className="hero-stagger flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2.5 bg-orange hover:bg-orange-dark text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg shadow-orange/30 transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>{t.hero.exploreCourses}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center gap-3 text-white hover:text-orange font-semibold text-sm sm:text-base px-5 py-3 rounded-full border border-white/20 hover:border-orange/50 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/40 bg-white/10">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>{t.hero.watchVideo}</span>
              </button>
            </div>
          </div>

          <div className="hero-visual lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[460px] aspect-[4/4.3]">
              <div
                className="absolute inset-x-4 top-8 bottom-4 rounded-[44%_56%_52%_48%/48%_44%_56%_52%] bg-electric"
                aria-hidden="true"
              />

              <div className="hidden sm:block absolute right-0 bottom-8 w-36 h-56 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl rotate-3 z-10">
                <Image
                  src="/images/london-bigben.jpg"
                  alt="London Big Ben landmark"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>

              <div className="relative z-20 mx-auto w-[80%] sm:w-[76%] h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-navy-light">
                <Image
                  src="/images/hero-student.jpg"
                  alt="Smiling Lingora student in orange hoodie holding a notebook"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 380px"
                />
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-navy/85 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/15 text-center shadow-lg">
                  <p className="text-[11px] uppercase tracking-widest text-orange font-bold">
                    {t.hero.notebookTop}
                  </p>
                  <p className="text-xs font-semibold text-white whitespace-nowrap">
                    {t.hero.notebookBottom}
                  </p>
                </div>
              </div>

              <div className="animate-float-slow absolute top-3 right-0 sm:-right-2 z-30 bg-white text-navy px-3.5 py-2 rounded-2xl rounded-bl-sm shadow-xl border border-slate-100 max-w-[155px]">
                <p className="font-display font-extrabold text-xs sm:text-sm leading-tight text-navy">
                  {t.hero.speechBubble}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center mt-8">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-300 hover:text-white transition-colors"
            aria-label={t.hero.scrollDown}
          >
            <span className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-1.5">
              <span className="w-1.5 h-2 rounded-full bg-orange animate-bounce" />
            </span>
            <span className="text-xs font-medium tracking-wide">
              {t.hero.scrollDown}
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 md:h-20"
          preserveAspectRatio="none"
        >
          <path d="M0 60C360 0 1080 100 1440 20V90H0V60Z" fill="#F8F5EF" />
        </svg>
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.hero.videoModalTitle}
        >
          <div className="bg-navy-light border border-white/15 rounded-3xl max-w-lg w-full p-6 text-white shadow-2xl relative">
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              aria-label="Close video preview"
            >
              <X className="w-5 h-5" />
            </button>
            <p className="text-xs uppercase tracking-widest text-orange font-bold mb-2">
              {t.hero.videoModalTag}
            </p>
            <h3 className="font-display font-bold text-2xl mb-3">
              {t.hero.videoModalTitle}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              {t.hero.videoModalDesc}
            </p>
            <div className="rounded-2xl bg-navy p-5 border border-white/10 text-center">
              <p className="text-sm text-slate-300 mb-4">
                {t.hero.videoModalNote}
              </p>
              <a
                href="#contact"
                onClick={() => setVideoOpen(false)}
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full"
              >
                <span>{t.hero.videoModalCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
