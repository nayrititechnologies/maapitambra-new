import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import HowToPerform from "../components/HowToPerform";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import useScrollToTop from "../hooks/useScrollToTop";

// Import pooja data
import poojaDataEN from "../data/pooja.json";
import poojaDataHI from "../data/pooja-hi.json";

export default function Home() {
  useScrollToTop();
  const { t, i18n } = useTranslation("home");

  // Get all pooja data based on current language
  const allPoojaData = useMemo(() => {
    return i18n.language === "hi" ? poojaDataHI : poojaDataEN;
  }, [i18n.language]);

  const testimonials = useMemo(
    () =>
      t("testimonials.list", { returnObjects: true }).map((testimonial) => ({
        ...testimonial,
        rating: 5,
      })),
    [t, i18n.language]
  );

  const whyChooseUsIcons = ["📜", "⏱️", "🌐", "🔮"];
  const whyChooseUs = useMemo(
    () =>
      t("why_choose.items", { returnObjects: true }).map((item, index) => ({
        ...item,
        icon: whyChooseUsIcons[index],
      })),
    [t, i18n.language]
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Mandala Background - Top Right */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-10 sm:opacity-15 md:opacity-20 pointer-events-none z-0 animate-spin-slow">
        <img
          src="/images/mandala-1.webp"
          alt=""
          className="w-full h-full object-contain transform scale-150 sm:scale-180"
        />
      </div>

      {/* Decorative Mandala Background - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-10 sm:opacity-15 md:opacity-20 pointer-events-none z-0 animate-spin-reverse">
        <img
          src="/images/mandala-1.webp"
          alt=""
          className="w-full h-full object-contain transform scale-150 sm:scale-180"
        />
      </div>

      {/* Hero Section with Carousel, Booking Info, and Marquee */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Services Section */}
      <section className="section-padding bg-cream relative z-10">
        <ServicesSection poojas={allPoojaData} t={t} />
      </section>

      {/* How to Perform Puja Section */}
      <div className="relative z-10">
        <HowToPerform />
      </div>

      {/* Why Choose Us Section */}
      <section className="relative z-10">
        {/* Mandala overlay for why choose us */}
        <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 opacity-5 sm:opacity-6 pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
          <img
            src="/images/madala-2.webp"
            alt=""
            className="w-full h-full object-contain transform scale-200 sm:scale-225 md:scale-250"
          />
        </div>
        <WhyChooseUs t={t} whyChooseUs={whyChooseUs} />
      </section>

      {/* Testimonials Section */}
      <div className="relative z-10">
        <Testimonials t={t} testimonials={testimonials} />
      </div>

      {/* Contact Form Section */}
      <div className="relative z-10">
        <ContactForm />
      </div>
    </div>
  );
}
