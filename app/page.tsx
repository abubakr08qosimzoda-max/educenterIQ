import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import LearningJourney from "@/components/LearningJourney";
import Teachers from "@/components/Teachers";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIChatbot from "@/components/AIChatbot";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function HomePage() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <div className="min-h-screen flex flex-col bg-navy overflow-x-hidden">
          <Navbar />

          <main className="flex-1">
            <Hero />
            <About />
            <Courses />
            <LearningJourney />
            <Teachers />

            <section
              aria-label="Academy Impact and Student Testimonials"
              className="bg-navy"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <Statistics />
                </div>
                <div className="lg:col-span-6">
                  <Testimonials />
                </div>
              </div>
            </section>

            <section
              id="contact"
              className="relative py-16 sm:py-24 overflow-hidden bg-navy"
            >
              <Image
                src="/images/cta-skyline.jpg"
                alt="Student looking out over a city skyline at twilight"
                fill
                className="object-cover object-center opacity-55"
                sizes="100vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/85"
                aria-hidden="true"
              />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <CTA />
                  <Contact />
                </div>
              </div>
            </section>
          </main>

          <Footer />

          <div className="fixed right-3.5 bottom-3.5 sm:right-6 sm:bottom-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3">
            <WhatsAppButton />
            <AIChatbot />
          </div>
        </div>
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}
