import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/sections/ContactForm";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Button from "@/components/ui/Button";
import { PAGE_SEO, CONTACT_CONTENT, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
};

export default function ContactPage() {
  const { address } = SITE_CONFIG;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="/images/buddha-zen.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sage-light/80" />
        <div className="relative z-10 container-site">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-4">
                {CONTACT_CONTENT.headline}
              </h1>
              <p className="text-xl md:text-2xl font-heading text-text-muted italic">
                {CONTACT_CONTENT.subheadline}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <Section background="default">
        <ScrollReveal>
          <p className="text-lg text-text-muted leading-relaxed text-center max-w-3xl mx-auto">
            {CONTACT_CONTENT.intro}
          </p>
        </ScrollReveal>
      </Section>

      {/* Contact Form + Info */}
      <Section background="surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={150}>
            <div className="space-y-8">
              {/* WhatsApp */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-text mb-3">
                  Fastest Way to Reach Me
                </h3>
                <p className="text-text-muted font-body mb-4">
                  WhatsApp is the quickest way to get a response. I typically reply within a few hours.
                </p>
                <Button
                  href={SITE_CONFIG.whatsapp.link}
                  external
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <p className="text-sm text-text-muted mt-2">
                  {SITE_CONFIG.whatsapp.displayNumber}
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaEnvelope className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-text mb-1">
                    Email
                  </h4>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-text-muted hover:text-primary transition-colors duration-300 font-body"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-semibold text-text mb-1">
                    Location
                  </h4>
                  <p className="text-text-muted font-body">
                    {address.street}
                    <br />
                    {address.postalCode} {address.city}, {address.state}
                    <br />
                    {address.country}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
