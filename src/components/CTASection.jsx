import React from "react";
import { Link } from "react-router-dom";

const CTASection = ({ t }) => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-7xl animate-float">🕉️</div>

          <h2 className="font-heading text-4xl lg:text-5xl text-cream">
            {t("cta.title")}
          </h2>

          <p className="font-body text-cream/90 text-xl leading-relaxed">
            {t("cta.description")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link to="/contact" className="btn-primary inline-block">
              {t("cta.btn_primary")}
            </Link>
            <Link
              to="/pooja"
              className="btn-secondary bg-transparent border-cream/40 text-cream hover:bg-cream hover:text-maroon inline-block"
            >
              {t("cta.btn_secondary")}
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap justify-center gap-8 text-cream/80">
            <div className="flex items-center gap-2">
              <span className="text-gold text-xl">✓</span>
              <span className="font-body">{t("cta.features.verified")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-xl">✓</span>
              <span className="font-body">{t("cta.features.families")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-xl">✓</span>
              <span className="font-body">
                {t("cta.features.multilingual")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
