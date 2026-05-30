import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PoojaCard = ({ pooja }) => {
  const { t } = useTranslation("common");
  // Format location string
  const getLocation = () => {
    if (typeof pooja.location === "string") {
      return pooja.location;
    }
    if (pooja.location?.temple) {
      return `${pooja.location.temple}, ${pooja.location.city}`;
    }
    return "";
  };

  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden h-full flex flex-col relative transition-all duration-300 hover:shadow-2xl"
      style={{
        border: "3px solid #D4A574",
        boxShadow: "0 10px 30px rgba(193, 70, 0, 0.15)",
      }}
    >
      {/* Header with Image or Gradient Background and Om Symbol */}
      {pooja.image ? (
        /* Image Header */
        <div className="relative h-60 overflow-hidden">
          <img
            src={pooja.image}
            alt={pooja.pooja_name}
            className="w-full h-full object-cover transform scale-105"
          />
        </div>
      ) : (
        /* Gradient Header (Current Version) */
        <div
          className="relative p-6 pb-8"
          style={{
            background:
              "linear-gradient(135deg, #FF9933 0%, #FF7722 50%, #8B3A00 100%)",
          }}
        >
          {/* Om Symbol and Title */}
          <div className="flex items-center gap-3 mb-2">
            <svg
              className="w-10 h-10 text-yellow-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.836 4.467c-.395 0-.716.32-.716.716 0 .395.32.716.716.716.395 0 .716-.32.716-.716 0-.395-.32-.716-.716-.716zm-1.432 0c-.395 0-.716.32-.716.716 0 .395.32.716.716.716.395 0 .716-.32.716-.716 0-.395-.32-.716-.716-.716zm3.58 2.865c-1.58 0-2.865 1.285-2.865 2.865 0 1.58 1.285 2.865 2.865 2.865 1.58 0 2.865-1.285 2.865-2.865 0-1.58-1.285-2.865-2.865-2.865zm-5.73 0c-1.58 0-2.865 1.285-2.865 2.865 0 1.58 1.285 2.865 2.865 2.865 1.58 0 2.865-1.285 2.865-2.865 0-1.58-1.285-2.865-2.865-2.865zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
            </svg>
            <h3 className="font-heading text-2xl font-bold text-white">
              {pooja.pooja_name}
            </h3>
          </div>
        </div>
      )}

      {/* Location Bar with Light Background */}
      <div className="px-6 py-3" style={{ backgroundColor: "#FEF3E0" }}>
        {getLocation() && (
          <p
            className="flex items-center gap-2 text-lg"
            style={{ color: "#8B3A00" }}
          >
            <svg
              className="w-5 h-5"
              style={{ color: "#FF9933" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">{getLocation()}</span>
          </p>
        )}
      </div>

      {/* Divider Line */}
      <div
        className="mx-6 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D4A574, transparent)",
          opacity: 0.5,
        }}
      />

      {/* Card Content */}
      <div className="p-6 flex-grow flex flex-col bg-white">
        {/* Description */}
        <p
          className="text-base mb-5 leading-relaxed"
          style={{ color: "#8B3A00" }}
        >
          {pooja.description}
        </p>

        {/* Benefits Section */}
        {pooja.benefits && pooja.benefits.length > 0 && (
          <div className="mb-5">
            <h4
              className="font-heading text-lg font-semibold mb-3 flex items-center gap-2"
              style={{ color: "#8B3A00" }}
            >
              <span style={{ color: "#FF9933" }}>✨</span>
              Benefits
            </h4>
            <div className="space-y-2">
              {pooja.benefits.slice(0, 2).map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start text-base"
                  style={{ color: "#8B3A00" }}
                >
                  <svg
                    className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                    style={{ color: "#FF9933" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Procedure Section */}
        {pooja.procedure && pooja.procedure.length > 0 && (
          <div className="mb-5">
            <h4
              className="font-heading text-lg font-semibold mb-3 flex items-center gap-2"
              style={{ color: "#8B3A00" }}
            >
              <span style={{ color: "#FF9933" }}>🔱</span>
              Procedure
            </h4>
            <div className="space-y-2">
              {pooja.procedure.slice(0, 2).map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start text-base"
                  style={{ color: "#8B3A00" }}
                >
                  <span
                    className="mr-2 font-bold flex-shrink-0"
                    style={{ color: "#FF9933" }}
                  >
                    •
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Participate Now Button */}
        <div className="mt-auto pt-4">
          <a
            href="https://chat.whatsapp.com/D27201B7QbFHFLyAYyMhKK"
            target="_blank"
            className="w-full text-center font-heading text-lg font-semibold py-4 px-6 rounded-2xl block transition-all duration-300 hover:shadow-lg hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #FFB84D 0%, #FF9933 100%)",
              color: "#8B3A00",
            }}
          >
            {t("buttons.participate_now")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PoojaCard;
