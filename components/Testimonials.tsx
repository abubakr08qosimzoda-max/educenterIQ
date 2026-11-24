"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const current = t.testimonials.items[activeIndex] || t.testimonials.items[0];
  const avatar = TESTIMONIALS[activeIndex]?.avatar || "/images/testimonial-maria.jpg";

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? t.testimonials.items.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === t.testimonials.items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-cream text-navy p-7 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2 className="font-display font-extrabold uppercase tracking-tight text-2xl sm:text-3xl leading-tight mb-3">
            {t.testimonials.titlePrefix}{" "}
            <span className="text-electric block sm:inline">
              {t.testimonials.titleAccent}
            </span>
          </h2>

          <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-2">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <p className="text-xs sm:text-sm font-bold text-navy">
            — {current.author}{" "}
            <span className="font-normal text-slate-500">
              ({current.course})
            </span>
          </p>
        </div>

        <div className="flex sm:flex-col items-center gap-4 sm:gap-3 shrink-0">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={avatar}
              alt={current.author}
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>

          <div className="flex items-center gap-1 text-orange" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4">
        <p className="text-[11px] text-slate-500">{t.testimonials.sampleNote}</p>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {t.testimonials.items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === activeIndex
                    ? "w-5 bg-electric"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-electric text-navy flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:border-electric text-navy flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
