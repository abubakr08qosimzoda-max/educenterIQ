"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { prefersReducedMotion, registerGsap } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-cream text-navy pt-12 sm:pt-16 pb-24 sm:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="about-reveal lg:col-span-6 relative">
            <div className="relative max-w-lg mx-auto">
              <div
                className="absolute -bottom-5 -left-4 w-36 h-24 rounded-2xl bg-orange rotate-6 z-0"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/3 -right-4 w-28 h-28 rounded-full bg-electric/75 z-0"
                aria-hidden="true"
              />

              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <Image
                  src="/images/about-student.jpg"
                  alt="Smiling male student with headphones looking up"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 92vw, 520px"
                />
              </div>

              <div className="relative z-20 -mt-10 ml-6 sm:ml-10 inline-block bg-white px-5 py-3.5 rounded-2xl shadow-lg border border-slate-100 -rotate-2">
                <p className="font-display font-extrabold text-base sm:text-lg leading-tight text-navy">
                  {t.about.card1} <span className="text-electric">{t.about.card2}</span>{" "}
                  <span className="text-orange">{t.about.card3}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="about-reveal lg:col-span-6">
            <h2 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-4xl lg:text-[42px] leading-[1.08] text-navy mb-5">
              {t.about.titlePrefix}{" "}
              <span className="text-electric block sm:inline">
                {t.about.titleAccent}
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              {t.about.body}
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#courses"
                className="inline-flex items-center gap-2.5 bg-navy hover:bg-navy-light text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg transition-all hover:scale-[1.02]"
              >
                <span>{t.about.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16"
          preserveAspectRatio="none"
        >
          <path d="M0 35C420 90 1020 0 1440 50V85H0V35Z" fill="#10172A" />
        </svg>
      </div>
    </section>
  );
}
