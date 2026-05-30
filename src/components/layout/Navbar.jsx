import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation(["navbar", "common"]);
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  const navLinks = [
    { path: "/", label: t("navbar:links.home") },
    { path: "/about", label: t("navbar:links.about") },
    { path: "/pooja", label: t("navbar:links.services") },
    { path: "/mandir", label: t("navbar:links.temples") },
    { path: "/vishesh-pooja", label: t("navbar:links.vishesh_pooja") },
    { path: "/contact", label: t("navbar:links.contact") },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="bg-cream sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-heading text-md sm:text-xl font-bold text-maroon group-hover:text-saffron transition-colors leading-none">
                {t("common:app_name")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  font-medium text-base transition-colors duration-200
                  ${
                    isActive(link.path)
                      ? "text-saffron"
                      : "text-maroon hover:text-saffron"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Selector - Desktop */}
          <div className="hidden lg:block relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 text-maroon hover:text-saffron transition-colors px-3 py-2 rounded-lg hover:bg-saffron/5"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-body text-base font-medium">
                {languages[currentLanguage]}
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isLangMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Language Dropdown */}
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-maroon/10 py-2 animate-fade-in z-[60]">
                {Object.entries(languages).map(([code, name]) => (
                  <button
                    key={code}
                    onClick={() => handleLanguageChange(code)}
                    className={`
                      w-full px-4 py-2 text-left font-body text-base transition-colors
                      ${
                        currentLanguage === code
                          ? "bg-saffron/10 text-saffron font-semibold"
                          : "text-maroon hover:bg-saffron/5"
                      }
                    `}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-maroon hover:text-saffron transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in border-t border-maroon/5 mt-2 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    font-body text-base font-medium py-2 px-4 rounded-lg transition-colors
                    ${
                      isActive(link.path)
                        ? "text-saffron bg-saffron/5"
                        : "text-maroon hover:text-saffron hover:bg-saffron/5"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="mt-2 pt-3 border-t border-maroon/5">
                <div className="flex items-center gap-2 text-maroon py-2 px-4 mb-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-body text-base font-semibold">
                    {t("navbar:language_selector")}
                  </span>
                </div>
                <div className="flex gap-2 px-4">
                  {Object.entries(languages).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => {
                        handleLanguageChange(code);
                        setIsMenuOpen(false);
                      }}
                      className={`
                        flex-1 px-4 py-2 rounded-lg font-body text-base font-medium transition-all
                        ${
                          currentLanguage === code
                            ? "bg-gradient-saffron text-white shadow-md"
                            : "bg-white text-maroon border border-maroon/20 hover:border-saffron hover:text-saffron"
                        }
                      `}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close language menu */}
      {isLangMenuOpen && (
        <div
          className="fixed inset-0 z-[45]"
          onClick={() => setIsLangMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
