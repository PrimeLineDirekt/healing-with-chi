import type { Metadata } from "next";
import { FaCheckCircle } from "react-icons/fa";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import {
  PAGE_SEO,
  BODYWORK_CONTENT,
  BODYWORK_MODALITIES,
  SITE_CONFIG,
  CTA_CONTENT,
} from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: PAGE_SEO.bodywork.title,
  description: PAGE_SEO.bodywork.description,
};

const modalityImages: Record<string, string> = {
  shiatsu: "/images/bodywork-massage.jpg",
  reiki: "/images/energy-healing.jpg",
  "sports-massage": "/images/deep-tissue.jpg",
  "thai-massage": "/images/spa-atmosphere.jpg",
};

export default function BodyworkPage() {
  const serviceSchema = generateServiceSchema(
    "Bodywork & Healing Massage",
    PAGE_SEO.bodywork.description,
    `${SITE_CONFIG.url}/bodywork`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="/images/massage-healing.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sage-light/80" />
        <div className="relative z-10 container-site">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-4">
                {BODYWORK_CONTENT.headline}
              </h1>
              <p className="text-xl md:text-2xl font-heading text-text-muted italic">
                {BODYWORK_CONTENT.subheadline}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <Section background="default">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-muted leading-relaxed">
              {BODYWORK_CONTENT.intro}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Modalities */}
      <Section background="surface">
        <SectionHeading title="Modalities" subtitle="Techniques I integrate into every session" />
        <div className="space-y-12">
          {BODYWORK_MODALITIES.map((modality, index) => (
            <ScrollReveal key={modality.id}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* Text side */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-text">
                      {modality.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {modality.origin}
                    </span>
                  </div>
                  <p className="text-text-muted font-body leading-relaxed mb-5">
                    {modality.description}
                  </p>
                  <ul className="space-y-2">
                    {modality.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-text-muted font-body"
                      >
                        <FaCheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Modality image */}
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-soft">
                    <img
                      src={modalityImages[modality.id] || "/images/massage-healing.jpg"}
                      alt={modality.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Energy Healing */}
      <Section id="energy-healing" background="sand">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-6">
              {BODYWORK_CONTENT.energyHealing.title}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              {BODYWORK_CONTENT.energyHealing.description}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section background="sage" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-6">
              {CTA_CONTENT.headline}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              {CTA_CONTENT.text}
            </p>
            <Button href={SITE_CONFIG.whatsapp.link} external size="lg">
              {CTA_CONTENT.button}
            </Button>
            <p className="text-text-muted text-sm mt-4">
              {CTA_CONTENT.subtext}
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
