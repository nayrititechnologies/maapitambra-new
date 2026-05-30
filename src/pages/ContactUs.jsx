import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Mail,
  User,
  MessageSquare,
  Home,
  Send,
} from "lucide-react";
import PageHero from "../components/PageHero";
import useScrollToTop from "../hooks/useScrollToTop";

export default function ContactUs() {
  useScrollToTop();
  const { t } = useTranslation("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can add API call here)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("info.location.title"),
      details: [t("info.location.line1"), t("info.location.line2")],
      link: null,
    },
    {
      icon: Phone,
      title: t("info.phone.title"),
      details: [t("info.phone.line1"), t("info.phone.line2")],
      link: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: t("info.email.title"),
      details: [t("info.email.line1")],
      link: "mailto:sssmpjasdatia@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title={t("hero.title")}
        titleHighlight={t("hero.title_highlight")}
        description={t("hero.description")}
        textColor="text-cream"
        descColor="text-cream/90"
      />

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="font-heading text-3xl text-maroon mb-2">
                  {t("info.title")}
                </h2>
                <div className="spiritual-divider"></div>
                <p className="font-body text-maroon/70 leading-relaxed">
                  {t("info.description")}
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="spiritual-card bg-white">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-saffron" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-lg text-maroon font-semibold mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="font-body text-maroon/70 text-sm"
                            >
                              {info.link ? (
                                <a
                                  href={info.link}
                                  className="hover:text-saffron transition-colors"
                                >
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="spiritual-card-bordered bg-white">
                <h2 className="font-heading text-3xl text-maroon mb-2">
                  {t("form.title")}
                </h2>
                <div className="spiritual-divider mb-6"></div>

                {submitted && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg mb-6">
                    <p className="font-semibold">{t("form.success_title")}</p>
                    <p className="text-sm">{t("form.success_message")}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="flex items-center gap-2 font-body text-maroon font-semibold mb-2">
                        <User className="w-4 h-4 text-saffron" />
                        {t("form.name")} <span className="text-saffron">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gold/30 rounded-xl focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all font-body"
                        placeholder={t("form.name")}
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="flex items-center gap-2 font-body text-maroon font-semibold mb-2">
                        <Mail className="w-4 h-4 text-saffron" />
                        {t("form.email")}{" "}
                        <span className="text-saffron">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gold/30 rounded-xl focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all font-body"
                        placeholder={t("form.email")}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <div>
                      <label className="flex items-center gap-2 font-body text-maroon font-semibold mb-2">
                        <Phone className="w-4 h-4 text-saffron" />
                        {t("form.phone")}{" "}
                        <span className="text-saffron">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gold/30 rounded-xl focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all font-body"
                        placeholder={t("form.phone")}
                      />
                    </div>

                    {/* Address Field */}
                    <div>
                      <label className="flex items-center gap-2 font-body text-maroon font-semibold mb-2">
                        <Home className="w-4 h-4 text-saffron" />
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gold/30 rounded-xl focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all font-body"
                        placeholder="Your address"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="flex items-center gap-2 font-body text-maroon font-semibold mb-2">
                      <MessageSquare className="w-4 h-4 text-saffron" />
                      {t("form.message")}{" "}
                      <span className="text-saffron">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border-2 border-gold/30 rounded-xl focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all font-body resize-none"
                      placeholder={t("form.message_placeholder")}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-saffron-dark text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    {t("form.submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="spiritual-card-bordered bg-cream">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 bg-saffron/20 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-saffron" />
              </div>
              <h2 className="font-heading text-3xl text-maroon">
                {t("map.title")}
              </h2>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Hanuman+Garhi&ll=25.6602599,78.4554789&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Location Details Below Map */}
            <div className="mt-4 rounded-xl p-4 ">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center">
                  <a
                    href="https://www.google.com/maps/dir//Mahakaleshwar+Jyotirlinga,+Ujjain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-saffron hover:text-saffron-dark font-semibold transition-colors"
                  >
                    <MapPin className="w-6 h-6 text-saffron" />
                  </a>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-maroon font-semibold mb-2">
                    Our Location
                  </h3>
                  <p className="font-body text-maroon/70 leading-relaxed">
                    {t("info.location.line1")}, {t("info.location.line2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
