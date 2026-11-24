export const SITE_CONFIG = {
  name: "LINGORA",
  tagline: "Learn English. Open Your World.",
  description:
    "LINGORA English Academy — Discover a better way to learn English. General English, IELTS Preparation, Speaking Club, and English for Kids.",
  location: "Dushanbe, Tajikistan",
  // Replace with your verified academy WhatsApp number (country code + number, digits only)
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "992885541616",
  whatsappDefaultMessage: "Hello LINGORA",
  // Replace with your verified academy contact details before production launch
  displayPhone: "+992 88 554 1616",
  displayEmail: "hello@lingora.example",
  getWhatsAppUrl(customMessage?: string): string {
    const encoded = encodeURIComponent(customMessage || this.whatsappDefaultMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encoded}`;
  },
} as const;
