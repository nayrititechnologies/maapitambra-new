import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import PageHero from "../components/PageHero";
import useScrollToTop from "../hooks/useScrollToTop";

// Import pooja data
import poojaDataEN from "../data/pooja.json";
import poojaDataHI from "../data/pooja-hi.json";
import PoojaCard from "../components/PoojaCard";

export default function Pooja() {
  useScrollToTop();
  const { t, i18n } = useTranslation(["pages", "home"]);

  // Get all pooja data based on current language
  const allPoojaData = useMemo(() => {
    return i18n.language === "hi" ? poojaDataHI : poojaDataEN;
  }, [i18n.language]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={t("pages:pooja.hero.title")}
        titleHighlight={t("pages:pooja.hero.title_highlight")}
        description={t("pages:pooja.hero.description")}
        textColor="text-cream"
        descColor="text-cream/90"
      />

      {/* Services Section - All Poojas */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Poojas Grid - All Items */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allPoojaData.map((pooja, index) => (
              <PoojaCard key={index} pooja={pooja} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
