import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import PoojaCard from "./PoojaCard";

// ServicesSection Component
const ServicesSection = ({ poojas, t }) => {
  const { i18n } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Location filters - bilingual
  const locations = useMemo(() => {
    const isHindi = i18n.language === "hi";
    return [
      { id: "all", label: isHindi ? "सभी स्थान" : "All Locations" },
      { id: "ujjain", label: isHindi ? "उज्जैन" : "Ujjain" },
      { id: "nalkheda", label: isHindi ? "नलखेड़ा" : "Nalkheda" },
      { id: "omkareshwar", label: isHindi ? "ओंकारेश्वर" : "Omkareshwar" },
      { id: "datia", label: isHindi ? "दतिया पीताम्बरा" : "Datia Pitambara" },
      { id: "kashi", label: isHindi ? "काशी विश्वनाथ" : "Kashi Vishwanath" },
      { id: "vrindavan", label: isHindi ? "वृंदावन" : "Vrindavan" },
    ];
  }, [i18n.language]);

  // Filter poojas by location
  const filteredPoojas = useMemo(() => {
    // Ensure poojas is always an array
    const poojasArray = poojas || [];

    if (selectedLocation === "all") {
      return poojasArray;
    }

    return poojasArray.filter((pooja) => {
      const locationStr =
        typeof pooja.location === "string"
          ? pooja.location.toLowerCase()
          : `${pooja.location?.temple || ""} ${pooja.location?.city || ""} ${
              pooja.location?.state || ""
            }`.toLowerCase();

      // Map filter IDs to location keywords
      const locationMap = {
        ujjain: [
          "ujjain",
          "उज्जैन",
          "mahakaleshwar",
          "महाकालेश्वर",
          "mangalnath",
          "मंगलनाथ",
        ],
        nalkheda: ["nalkheda", "नलखेड़ा", "baglamukhi", "बगलामुखी"],
        omkareshwar: ["omkareshwar", "ओम्कारेश्वर ज्योतिर्लिंग"],
        datia: [
          "datia",
          "दतिया",
          "pitambara",
          "पीताम्बरा",
          "pitamber",
          "पीतांबर",
        ],
        kashi: [
          "kashi",
          "काशी",
          "varanasi",
          "वाराणसी",
          "vishwanath",
          "विश्वनाथ",
        ],
        vrindavan: ["vrindavan", "वृंदावन"],
      };

      const keywords = locationMap[selectedLocation] || [];
      return keywords.some((keyword) => locationStr.includes(keyword));
    });
  }, [poojas, selectedLocation]);

  // Show only first 4 poojas initially
  const displayedPoojas = showAll ? filteredPoojas : filteredPoojas.slice(0, 3);

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Section Header */}
      <div className="text-center mb-12 animate-fade-in">
        <span className="inline-block bg-saffron/10 text-saffron font-semibold text-base uppercase tracking-wider">
          {t("services.badge")}
        </span>
        <h2 className="font-heading text-4xl lg:text-5xl text-maroon font-bold mt-2 mb-4">
          {t("services.title")}
        </h2>
        <p className="text-maroon/70 text-lg max-w-3xl mx-auto leading-relaxed">
          {t("services.description")}
        </p>
      </div>

      {/* Location Filters */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => {
                setSelectedLocation(location.id);
                setShowAll(false); // Reset to show first 4 when changing filter
              }}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-base transition-all duration-300
                ${
                  selectedLocation === location.id
                    ? "bg-saffron text-white border border-saffron"
                    : "bg-white text-maroon border border-maroon/20 hover:border-saffron hover:shadow-md hover:bg-saffron/5"
                }
              `}
            >
              <span>{location.label}</span>
              {selectedLocation === location.id && (
                <span className="bg-white/20 text-sm px-2 py-0.5 rounded-full">
                  {filteredPoojas.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      {selectedLocation !== "all" && (
        <div className="text-center mb-8">
          <p className="text-maroon/60 text-base">
            {filteredPoojas.length}{" "}
            {i18n.language === "hi" ? "पूजाएं मिलीं" : "poojas found"}
          </p>
        </div>
      )}

      {/* Poojas Grid */}
      {displayedPoojas.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedPoojas.map((pooja, index) => (
            <PoojaCard key={index} pooja={pooja} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🙏</div>
          <p className="text-maroon/60 text-lg">
            {i18n.language === "hi"
              ? "इस स्थान के लिए कोई पूजा उपलब्ध नहीं है"
              : "No poojas available for this location"}
          </p>
        </div>
      )}

      {/* View All / View Less Button */}
      {filteredPoojas.length > 3 && (
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-saffron text-white font-semibold px-8 py-3 rounded-full hover:bg-saffron/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {showAll
              ? i18n.language === "hi"
                ? "कम देखें"
                : "View Less"
              : `${t("services.view_all")} (${filteredPoojas.length - 3} ${
                  i18n.language === "hi" ? "और" : "more"
                })`}
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
