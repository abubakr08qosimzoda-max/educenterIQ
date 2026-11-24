"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.courses, href: "#courses" },
    { label: t.nav.teachers, href: "#teachers" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="relative bg-navy text-slate-300 pt-14 pb-24 sm:pb-8 border-t border-white/10 overflow-hidden">
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-orange/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-orange/30"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2.5 mb-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-orange/15">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M15.5 3L5 21.5H12.2L17.5 11.8L22.5 21.5H26L15.5 3Z" fill="#FF7547" />
                  <path d="M5 24.5H19.5L17 20.5H7.5L5 24.5Z" fill="#FF9770" />
                </svg>
              </span>
              <span className="font-display font-extrabold text-lg text-white tracking-wide">
                {SITE_CONFIG.name}
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              {t.footer.coursesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {t.courses.items.map((course) => (
                <li key={course.id}>
                  <a href="#courses" className="hover:text-white transition-colors">
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange shrink-0" />
                <span>{SITE_CONFIG.displayPhone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange shrink-0" />
                <span>{SITE_CONFIG.displayEmail}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-orange shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              {t.footer.followUs}
            </h4>
            <div className="flex items-center gap-3">
              <a href="#contact" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange text-white flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#contact" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange text-white flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#contact" aria-label="Telegram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-electric text-white flex items-center justify-center transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="#contact" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-electric text-white flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
            <span>|</span>
            <a href="#contact" className="hover:text-white transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
