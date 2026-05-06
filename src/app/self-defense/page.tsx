import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import {
  PAGE_SEO,
  SELFDEFENSE_CONTENT,
  SITE_CONFIG,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: PAGE_SEO.selfDefense.title,
  description: PAGE_SEO.selfDefense.description,
};

export default function SelfDefensePage() {
  return (
    <>
      {/* Hero - portrait workshop photo preserved as-is with blurred ambient side fill */}
      <section className="relative overflow-hidden bg-text flex items-center justify-center min-h-[640px] md:min-h-[760px] lg:min-h-[820px] py-16">
        {/* Layer 1: same image as a blurred, dimmed ambient backdrop covering the full hero width (sides only get this) */}
        <img
          src="/images/self-defense-hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl brightness-[0.45] saturate-150"
        />
        {/* Layer 2: the actual photo, full aspect preserved (no zoom, no crop) - shown clean, untouched */}
        <img
          src="/images/self-defense-hero.jpg"
          alt="Self-defense workshop at Casa Om"
          className="absolute inset-0 w-full h-full object-contain"
        />
        {/* Headline scrim: only behind the headline area, leaves photo bright */}
        <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-gradient-to-b from-transparent via-black/45 to-transparent pointer-events-none" />

        <div className="relative z-10 container-site">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-heading italic text-base md:text-lg text-primary mb-6 tracking-wide">
                <span className="inline-block px-4 border-t border-primary/40 pt-1 mt-2">
                  {SELFDEFENSE_CONTENT.eyebrow}
                </span>
              </p>
              <h1
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 uppercase tracking-wide leading-tight"
                style={{ color: "#FFFFFF" }}
              >
                {SELFDEFENSE_CONTENT.headline}
              </h1>
              <div className="w-32 h-px bg-primary/50 mx-auto mt-6" />
              <p className="mt-8 text-sand-light/85 font-body text-lg italic">
                {SELFDEFENSE_CONTENT.subheadline}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <Section background="default">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-6">
              {SELFDEFENSE_CONTENT.pageTitle}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              {SELFDEFENSE_CONTENT.intro}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Philosophy - three cards */}
      <Section background="surface">
        <div className="max-w-5xl mx-auto grid gap-8 md:gap-10 md:grid-cols-3">
          {SELFDEFENSE_CONTENT.philosophy.map((p, i) => (
            <ScrollReveal key={i}>
              <div className="bg-background rounded-lg p-8 h-full shadow-soft border border-sand-light">
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-text mb-4">
                  {p.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{p.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Who is it for */}
      <Section background="default">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-6">
              {SELFDEFENSE_CONTENT.forWho.heading}
            </h2>
            <p className="font-heading italic text-xl md:text-2xl text-text-muted leading-relaxed">
              {SELFDEFENSE_CONTENT.forWho.text}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section background="sage" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-6">
              {SELFDEFENSE_CONTENT.cta.heading}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              {SELFDEFENSE_CONTENT.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={SITE_CONFIG.whatsapp.link} external size="lg">
                Message on WhatsApp
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Send a Question
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
