import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable Page Hero Component
 *
 * @param {string} badge - Small badge text at the top
 * @param {string} title - Main heading (can include React elements for styling)
 * @param {string} titleHighlight - Optional highlighted part of title
 * @param {string} description - Subtitle/description text
 * @param {string} bgGradient - Background gradient class (default: gradient-hero)
 * @param {array} buttons - Optional array of button objects {text, link, variant}
 * @param {string} textColor - Text color for title (default: cream)
 * @param {string} descColor - Text color for description (default: maroon)
 */
const PageHero = ({
  badge = "",
  title = "",
  titleHighlight = "",
  description = "",
  bgGradient = "bg-gradient-saffron",
  buttons = [],
  textColor = "text-cream",
  descColor = "text-maroon",
  minHeight = "min-h-[280px]",
}) => {
  return (
    <section
      className={`relative ${bgGradient} ${minHeight} flex items-center justify-center overflow-hidden`}
    >
      {/* Content */}
      <div className="container mx-auto px-4 max-w-7xl relative z-10 py-10 lg:py-14">
        <div className="max-w-5xl mx-auto text-center space-y-4 animate-fade-in">
          {/* Title */}
          <h1
            className={`font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${textColor}`}
          >
            {title}
            {titleHighlight && (
              <>
                {" "}
                <span className="text-maroon text-glow">{titleHighlight}</span>
              </>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p
              className={`font-body text-base lg:text-lg max-w-3xl mx-auto leading-relaxed ${descColor} drop-shadow-sm`}
            >
              {description}
            </p>
          )}

          {/* Optional Buttons */}
          {buttons.length > 0 && (
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  to={button.link}
                  className={
                    button.variant === "secondary"
                      ? "btn-secondary"
                      : "btn-primary"
                  }
                >
                  {button.text}
                  {button.icon && <span className="ml-2">{button.icon}</span>}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
};

export default PageHero;
