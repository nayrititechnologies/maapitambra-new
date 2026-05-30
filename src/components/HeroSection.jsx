import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  const { t } = useTranslation("home");

  return (
    <div className="w-full container mx-auto px-4 max-w-7xl">
      {/* Sanskrit Heading with Premium Styling */}
      <div className="text-center mt-6 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-10">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon font-bold tracking-wide inline-block">
          <span className="relative z-10">॥ श्री गणेशाय नमः ॥</span>
          <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-gold/10 to-transparent blur-xl"></div>
        </h1>
      </div>
      {/* Hero Carousel - Premium Layout */}
      <section className="relative flex items-center">
        {/* Carousel Container with Premium Frame */}
        <HeroCarousel />
      </section>

      {/* Book Pooja Services Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <p className="text-saffron font-bold text-lg md:text-xl tracking-wide">
                {t("book_pandit.title")}
              </p>

              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t("book_pandit.subtitle")}
              </h2>

              <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                {t("book_pandit.description")}
              </p>

              <div className="pt-4">
                <Link to="/contact" className="btn-primary inline-block">
                  {t("book_pandit.cta")}
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-large)]">
                <img
                  src="/hero-section.webp"
                  alt="Pooja and Ritual Services"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
