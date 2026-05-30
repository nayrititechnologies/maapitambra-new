import React from "react";
import { Link } from "react-router-dom";

const AboutSection = ({ t }) => {
  return (
    <section className="section-padding bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center lg:justify-start animate-fade-in">
            <div className="relative">
              <div className="w-full max-w-md h-96 bg-gradient-to-b from-saffron/30 to-maroon/50 rounded-3xl overflow-hidden border-4 border-gold/30 shadow-[var(--shadow-large)]">
                <div className="w-full h-full flex items-center justify-center text-cream/20 text-8xl">
                  🕉️
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-3xl -z-10 blur-2xl"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-fade-in">
            <span className="text-saffron font-semibold text-base uppercase tracking-wider">
              {t("about_section.badge")}
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl text-maroon">
              {t("about_section.title")}{" "}
              <span className="text-saffron">{t("about_section.name")}</span>
            </h2>

            <div className="spiritual-divider"></div>

            <p className="font-body text-maroon/80 text-lg leading-relaxed">
              {t("about_section.description_p1")}
            </p>

            <p className="font-body text-maroon/80 text-lg leading-relaxed">
              {t("about_section.description_p2")}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="spiritual-card-bordered bg-white text-center">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-heading text-lg text-maroon font-semibold">
                  {t("about_section.cards.scholar")}
                </div>
                <div className="font-body text-base text-maroon/60">
                  {t("about_section.cards.scholar_subtitle")}
                </div>
              </div>
              <div className="spiritual-card-bordered bg-white text-center">
                <div className="text-3xl mb-2">🔮</div>
                <div className="font-heading text-lg text-maroon font-semibold">
                  {t("about_section.cards.astrologer")}
                </div>
                <div className="font-body text-base text-maroon/60">
                  {t("about_section.cards.astrologer_subtitle")}
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-primary inline-block">
              {t("about_section.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
