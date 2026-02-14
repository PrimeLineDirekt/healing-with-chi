import type { Metadata } from "next";
import { FaBrain, FaLeaf, FaRunning, FaMoon } from "react-icons/fa";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import {
  PAGE_SEO,
  COACHING_CONTENT,
  COACHING_PILLARS,
  SITE_CONFIG,
} from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: PAGE_SEO.coaching.title,
  description: PAGE_SEO.coaching.description,
};

const pillarIcons: Record<string, React.ReactNode> = {
  brain: <FaBrain className="w-7 h-7 text-primary" />,
  leaf: <FaLeaf className="w-7 h-7 text-primary" />,
  movement: <FaRunning className="w-7 h-7 text-primary" />,
  moon: <FaMoon className="w-7 h-7 text-primary" />,
};

export default function CoachingPage() {
  const serviceSchema = generateServiceSchema(
    "Holistic Life Coaching",
    PAGE_SEO.coaching.description,
    `${SITE_CONFIG.url}/coaching`
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
          src="/images/calm-lake.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sage-light/80" />
        <div className="relative z-10 container-site">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-text mb-4">
                {COACHING_CONTENT.headline}
              </h1>
              <p className="text-xl md:text-2xl font-heading text-text-muted italic">
                {COACHING_CONTENT.subheadline}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <Section background="default">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              {COACHING_CONTENT.intro}
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              {COACHING_CONTENT.approach}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* 4 Pillars */}
      <Section background="surface">
        <SectionHeading title="The Four Pillars" subtitle="A whole-person approach to lasting change" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal-stagger">
          {COACHING_PILLARS.map((pillar) => (
            <ScrollReveal key={pillar.title}>
              <div className="bg-background rounded-xl p-8 shadow-soft h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  {pillarIcons[pillar.icon]}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-text mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-muted font-body leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Quote */}
      <Section background="sand">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center py-4">
            <blockquote className="font-heading text-2xl md:text-3xl italic text-text leading-relaxed mb-4">
              &ldquo;{COACHING_CONTENT.quote.text}&rdquo;
            </blockquote>
            <cite className="text-text-muted font-body text-base not-italic">
              - {COACHING_CONTENT.quote.author}
            </cite>
          </div>
        </ScrollReveal>
      </Section>

      {/* Focus Areas */}
      <Section background="default">
        <SectionHeading title="Focus Areas" subtitle="What I can help you work through" />
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COACHING_CONTENT.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 text-text-muted font-body text-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {area}
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
              {COACHING_CONTENT.cta.headline}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              {COACHING_CONTENT.cta.text}
            </p>
            <Button href={SITE_CONFIG.whatsapp.link} external size="lg">
              Book Your Free Session
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
