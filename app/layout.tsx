import type { Metadata, Viewport } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10172A",
};

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} English Academy — ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  openGraph: {
    title: `${SITE_CONFIG.name} English Academy — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    type: "website",
    locale: "en_US",
    siteName: `${SITE_CONFIG.name} English Academy`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${manrope.variable}`}>
      <body className="font-sans bg-navy text-navy antialiased selection:bg-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
