import React from "react";
import { useParams } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";

// Import pooja data
import poojaDataEN from "../data/pooja.json";
import poojaDataHI from "../data/pooja-hi.json";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import PageHero from "../components/PageHero";
import PoojaCard from "../components/PoojaCard";

const MandirDetails = () => {
  useScrollToTop();
  const { templeName } = useParams();
  const { t, i18n } = useTranslation(["pages", "home"]);

  // Get all pooja data based on current language
  const allPoojaData = useMemo(() => {
    return i18n.language === "hi" ? poojaDataHI.poojas : poojaDataEN;
  }, [i18n.language]);

  // Filter pooja list based on templeName
  const filteredPoojas = allPoojaData.filter((pooja) => {
    const slug = pooja.location?.temple?.toLowerCase().replace(/\s+/g, "-");

    return slug?.includes(templeName.toLowerCase());
  });


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={t("pages:mandirDetails.hero.title")}
        titleHighlight={t("pages:mandirDetails.hero.title_highlight")}
        description={t("pages:mandirDetails.hero.description", { templeName: templeName.replace("-", " ") })}
        textColor="text-cream"
        descColor="text-cream/90"
      />

      {/* Services Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPoojas.map((pooja, index) => (
              <PoojaCard key={index} pooja={pooja} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MandirDetails;
