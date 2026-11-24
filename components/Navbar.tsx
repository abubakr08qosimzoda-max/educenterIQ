"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { LOCALES } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.courses, href: "#courses" },
    { label: t.nav.teachers, href: "#teachers" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHash(href);
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20 py-2.5 sm:py-3"
          : "bg-navy/85 backdrop-blur-sm py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 focus:outline-none shrink-0"
          aria-label="LINGORA Home"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-orange/15">
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M15.5 3L5 21.5H12.2L17.5 11.8L22.5 21.5H26L15.5 3Z" fill="#FF7547" />
              <path d="M5 24.5H19.5L17 20.5H7.5L5 24.5Z" fill="#FF9770" />
            </svg>
          </span>
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-wide text-white">
            LINGORA
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {navItems.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-sm font-semibold transition-colors py-1 whitespace-nowrap ${
                  isActive ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-white" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Language Switcher (always visible on mobile & desktop) + Apply CTA + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="inline-flex items-center bg-white/10 border border-white/15 rounded-full p-0.5"
            role="group"
            aria-label="Language switcher"
          >
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                type="button"
                onClick={() => setLocale(loc.code)}
                className={`px-2 sm:px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold transition-all min-h-[28px] ${
                  locale === loc.code
                    ? "bg-orange text-white shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden sm:inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-orange/25 transition-all hover:scale-[1.02] whitespace-nowrap"
          >
            <span>{t.nav.applyNow}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="px-4 pt-3 pb-5 bg-navy-light border-t border-white/10 flex flex-col gap-1.5"
          aria-label="Mobile Navigation"
        >
          {navItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                activeHash === link.href
                  ? "bg-electric/20 text-white"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-base px-5 py-3 rounded-full shadow-md"
          >
            <span>{t.nav.applyNow}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
