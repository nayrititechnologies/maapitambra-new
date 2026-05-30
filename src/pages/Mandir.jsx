import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageHero from "../components/PageHero";
import { MapPin } from "lucide-react";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Mandir() {
  useScrollToTop();
  const { t } = useTranslation("pages");

  // Get temples from translations
  const temples = t("mandir.temples", { returnObjects: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={t("mandir.hero.title")}
        titleHighlight={t("mandir.hero.title_highlight")}
        description={t("mandir.hero.description")}
        textColor="text-cream"
        descColor="text-cream/90"
      />

      {/* Featured Temples */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {temples.map((temple, index) => (
              <Link
                to={`/mandir/${temple.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                className="spiritual-card-bordered bg-white group hover:shadow-[var(--shadow-large)] transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">🛕</div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl text-maroon font-semibold mb-1">
                      {temple.name}
                    </h3>
                    <p className="font-body text-saffron text-sm font-semibold flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-saffron" />
                      {temple.location}
                    </p>
                  </div>
                </div>

                <div className="spiritual-divider my-4"></div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <div>
                      <p className="font-body text-maroon font-semibold">
                        {temple.deity}
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-maroon/70 leading-relaxed">
                    {temple.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
