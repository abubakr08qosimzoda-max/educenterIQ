"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { TEACHERS } from "@/lib/data";
import { prefersReducedMotion, registerGsap } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

export default function Teachers() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.from(".teacher-card", {
        y: 32,
        opacity: 0,
        duration: 0.75,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="teachers"
      ref={sectionRef}
      className="relative bg-navy text-white pt-14 sm:pt-20 pb-24 sm:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200 mb-5">
              <span className="w-2 h-2 rounded-full bg-orange" />
              <span>{t.teachers.badge}</span>
            </div>

            <h2 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-4xl leading-[1.08] mb-4">
              {t.teachers.titlePrefix}{" "}
              <span className="text-orange">{t.teachers.titleAccent}</span>
            </h2>

            <p className="text-xs text-slate-400 mt-3">{t.teachers.demoNote}</p>
          </div>

          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {t.teachers.items.map((teacher, idx) => {
                const photo = TEACHERS[idx]?.image || "/images/teacher-sarah.jpg";
                return (
                  <article
                    key={teacher.id}
                    className="teacher-card group bg-cream text-navy rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="relative aspect-[4/3.6] bg-slate-200 overflow-hidden">
                      <Image
                        src={photo}
                        alt={`${teacher.name} — ${teacher.role}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 90vw, 240px"
                      />
                    </div>
                    <div className="p-5 text-center bg-cream-dark/50">
                      <h3 className="font-display font-extrabold text-lg text-navy">
                        {teacher.name}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 mb-3">
                        {teacher.role}
                      </p>
                      <div className="flex items-center justify-center gap-3 text-navy/70">
                        <a
                          href="#contact"
                          aria-label={`${teacher.name} LinkedIn`}
                          className="hover:text-electric transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href="#contact"
                          aria-label={`${teacher.name} Instagram`}
                          className="hover:text-orange transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                        <a
                          href="#contact"
                          aria-label={`${teacher.name} YouTube`}
                          className="hover:text-orange transition-colors"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
