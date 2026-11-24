"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight, MessageSquare, Smile, Trophy, Users, X } from "lucide-react";
import { COURSES } from "@/lib/data";
import { prefersReducedMotion, registerGsap } from "@/lib/animations";
import { useLanguage } from "@/components/LanguageProvider";

const ICON_MAP = {
  MessageSquare,
  Trophy,
  Users,
  Smile,
};

export default function Courses() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCourse = t.courses.items.find((c) => c.id === selectedId) || null;

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.from(".course-card", {
        y: 36,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
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
      id="courses"
      ref={sectionRef}
      className="relative bg-navy text-white pt-14 sm:pt-20 pb-28 sm:pb-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-slate-200 mb-5">
              <span className="w-2 h-2 rounded-full bg-orange" />
              <span>{t.courses.badge}</span>
            </div>

            <h2 className="font-display font-extrabold uppercase tracking-tight text-3xl sm:text-4xl leading-[1.08] mb-4">
              {t.courses.titleLine1}{" "}
              <span className="block">
                {t.courses.titleLine2Prefix}{" "}
                <span className="text-orange">{t.courses.titleAccent}</span>
              </span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed mb-7 max-w-sm">
              {t.courses.subtitle}
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-orange hover:bg-orange-dark text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg shadow-orange/25 transition-all hover:scale-[1.02]"
            >
              <span>{t.courses.viewAll}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.courses.items.map((course, idx) => {
              const meta = COURSES[idx];
              const Icon = ICON_MAP[meta.iconName];
              return (
                <article
                  key={course.id}
                  className="course-card group relative bg-white text-navy rounded-3xl overflow-hidden shadow-xl min-h-[250px] flex flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-[46%] pointer-events-none">
                    <div className="relative w-full h-full course-photo-mask overflow-hidden">
                      <Image
                        src={meta.image}
                        alt={course.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 45vw, 220px"
                      />
                    </div>
                  </div>

                  <div className="relative z-10 max-w-[58%]">
                    <div
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${meta.badgeBg} ${meta.badgeText} mb-4`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-extrabold text-xl leading-snug text-navy mb-2">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {course.description}
                    </p>
                  </div>

                  <div className="relative z-10">
                    <button
                      type="button"
                      onClick={() => setSelectedId(course.id)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:text-electric transition-colors"
                    >
                      <span>{t.courses.learnMore}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              );
            })}
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
          <path d="M0 20C360 80 1080 10 1440 55V80H0V20Z" fill="#F8F5EF" />
        </svg>
      </div>

      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCourse.title}
        >
          <div className="bg-white text-navy rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-navy"
              aria-label="Close course details"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-electric bg-electric/10 px-3 py-1 rounded-full mb-3">
              {selectedCourse.level}
            </span>
            <h3 className="font-display font-extrabold text-2xl mb-2">
              {selectedCourse.title}
            </h3>
            <p className="text-slate-600 text-sm mb-3">
              {selectedCourse.description}
            </p>
            <p className="text-xs font-semibold text-slate-500 mb-4">
              {t.courses.scheduleLabel}: {selectedCourse.schedule}
            </p>
            <ul className="space-y-2 mb-6">
              {selectedCourse.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-700"
                >
                  <span className="w-2 h-2 rounded-full bg-orange mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setSelectedId(null)}
              className="w-full inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-5 py-3 rounded-full"
            >
              <span>{t.courses.enrollIn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
