import React from "react";

const Testimonials = ({ t, testimonials }) => {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-maroon to-maroon-dark relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <span className="text-saffron font-semibold text-base uppercase tracking-wider">
            {t("testimonials.badge")}
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl text-maroon mt-2 mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="font-body text-cream/70 text-lg max-w-3xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-cream/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gold/20 overflow-hidden"
            >
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full"></div>

              {/* Quote icon */}
              <div className="text-gold/30 text-5xl font-serif leading-none mb-2">"</div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-saffron font-semibold bg-gradient-to-r from-saffron/20 to-gold/20 px-3 py-1.5 rounded-full border border-saffron/30">
                  {testimonial.service}
                </span>
              </div>

              <blockquote className="font-body text-maroon/90 italic mb-6 leading-relaxed text-base relative z-10">
                {testimonial.text}
              </blockquote>

              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-4"></div>

              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center text-maroon font-heading text-xl shadow-md mr-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading text-maroon font-bold text-lg">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-maroon/60 text-base flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
