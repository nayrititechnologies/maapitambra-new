import { useTranslation } from "react-i18next";
import PageHero from "../components/PageHero";
import useScrollToTop from "../hooks/useScrollToTop";

export default function AboutUs() {
  useScrollToTop();
  const { t } = useTranslation("pages");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={t("aboutUs.hero.title")}
        titleHighlight={t("aboutUs.hero.title_highlight")}
        description={t("aboutUs.hero.description")}
        textColor="text-cream"
        descColor="text-cream/90"
      />

      {/* Main About Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-6 sm:px-4 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="w-full rounded-md lg:rounded-xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-cream/20 text-9xl">
                  <img
                    src="/images/panditji.jpg"
                    alt="About Section"
                    className="w-full h-full object-contain sm:object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-3xl -z-10 blur-2xl"></div>
            </div>

            {/* Content */}
            <div className="space-y-2 px-2 sm:px-0">
              <div className="space-y-4 font-body text-maroon/80 text-base sm:text-lg leading-relaxed">
                <p>{t("aboutUs.content.intro")}</p>

                <p>
                  <strong className="text-maroon">
                    {t("aboutUs.content.vision_label")}
                  </strong>{" "}
                  {t("aboutUs.content.vision")}
                </p>

                <p>
                  <strong className="text-maroon">
                    {t("aboutUs.content.mission_label")}
                  </strong>{" "}
                  {t("aboutUs.content.mission")}
                </p>

                <p>
                  <strong className="text-maroon">
                    {t("aboutUs.content.values_label")}
                  </strong>{" "}
                  {t("aboutUs.content.values")}
                </p>

                <p>{t("aboutUs.content.closing")}</p>
              </div>
              <div className="spiritual-divider"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
