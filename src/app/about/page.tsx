import type { Metadata } from "next";
import { FaCheck } from "react-icons/fa";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import {
  PAGE_SEO,
  ABOUT_CONTENT,
  SITE_CONFIG,
  CTA_CONTENT,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
};

const storyBackgrounds: Array<"default" | "surface" | "sand" | "sage"> = [
  "default",
  "surface",
  "sand",
  "surface",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src="/images/golden-grass.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sage-light/80" />
        <div className="relative z-10 container-site">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-4">
                {ABOUT_CONTENT.headline}
              </h1>
              <p className="text-xl md:text-2xl font-heading text-text-muted italic">
                {ABOUT_CONTENT.subheadline}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Sections */}
      {ABOUT_CONTENT.story.map((chapter, index) => (
        <Section
          key={chapter.title}
          background={storyBackgrounds[index]}
        >
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-6">
                {chapter.title}
              </h2>
              <p className="text-lg text-text-muted font-body leading-relaxed">
                {chapter.text}
              </p>
            </div>
          </ScrollReveal>
        </Section>
      ))}

      {/* Methodology */}
      <Section background="sage">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-6">
              {ABOUT_CONTENT.methodology.title}
            </h2>
            <p className="text-lg text-text-muted font-body leading-relaxed">
              {ABOUT_CONTENT.methodology.text}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Credentials */}
      <Section background="surface">
        <SectionHeading title="Credentials & Training" />
        <ScrollReveal>
          <div className="max-w-xl mx-auto">
            <ul className="space-y-4">
              {ABOUT_CONTENT.credentials.map((credential) => (
                <li
                  key={credential}
                  className="flex items-center gap-3 text-lg font-body text-text-muted"
                >
                  <FaCheck className="w-4 h-4 text-sage flex-shrink-0" />
                  {credential}
                </li>
              ))}
            </ul>
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
