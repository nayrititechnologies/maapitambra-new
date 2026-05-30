import React from "react";

const WhyChooseUs = ({ t, whyChooseUs }) => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-saffron font-semibold text-base uppercase tracking-wider">
            {t("why_choose.badge")}
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl text-maroon mt-2 mb-4">
            {t("why_choose.title")}
          </h2>
          <p className="font-body text-maroon/70 text-lg max-w-3xl mx-auto">
            {t("why_choose.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="inline-block mb-4">
                <div className="w-20 h-20 bg-gradient-saffron rounded-2xl flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-[var(--shadow-medium)]">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-heading text-xl text-maroon mb-3 font-semibold">
                {item.title}
              </h3>
              <p className="font-body text-maroon/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
