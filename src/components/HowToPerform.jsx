import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const HowToPerform = () => {
  const { t } = useTranslation("home");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add your temple images here
  const images = ["/images/mataji.jpg", "/images/mataji-2.jpg"];

  const steps = t("how_to_perform.steps", { returnObjects: true });

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl xl:text-5xl text-maroon mb-4">
            {t("how_to_perform.title")}{" "}
            <span className="text-saffron">
              {t("how_to_perform.title_highlight")}
            </span>{" "}
            ?
          </h2>
          <p className="font-body text-maroon/80 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            {t("how_to_perform.description")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-2 lg:gap-4 items-stretch">
          {/* Left Side - Steps */}
          <div className="bg-pink-50 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-center min-h-[600px]">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <span className="font-heading text-2xl font-bold text-saffron flex-shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl lg:text-2xl text-maroon font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-maroon/80 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative flex flex-col min-h-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-1 border-saffron flex-1">
              {/* Images */}
              <div className="absolute inset-0 bg-cream-dark">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Temple ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors group"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-maroon group-hover:text-saffron transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors group"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-maroon group-hover:text-saffron transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-8 h-3 bg-saffron"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPerform;
