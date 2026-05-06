import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import {
  PAGE_SEO,
  CIRCLES_CONTENT,
  CIRCLES,
  SITE_CONFIG,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: PAGE_SEO.circles.title,
  description: PAGE_SEO.circles.description,
};

export default function CirclesPage() {
  return (
    <>
      {/* Hero Banner - dramatic sunset silhouette anchored bottom, scales to all viewports */}
      <section className="relative overflow-hidden bg-black flex items-center justify-center min-h-[640px] md:min-h-[720px] lg:min-h-[760px] py-20">
        <img
          src="/images/mens-circle-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-bottom ridge-drift"
        />
        {/* Sky lift: screen blend lifts the upper sky + silhouette edges without overblowing the already-bright sun (screen math saturates at 1.0). Fades to transparent above the sun region. */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/18 to-transparent mix-blend-screen pointer-events-none" />
        {/* Top-down dark gradient: masks inpaint artifacts in the upper sky, fades fully clear before the silhouette band */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/55 to-transparent" />
        {/* Subtle bottom shade just to settle the silhouettes into the page */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Ember glow centered behind the headline */}
        <div
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 ember-glow opacity-60 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 container-site">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="font-heading italic text-base md:text-lg text-primary mb-6 tracking-wide">
                <span className="inline-block px-4 border-t border-primary/40 pt-1 mt-2">
                  in today&apos;s world,
                </span>
              </p>
              <h1
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 uppercase tracking-wide leading-tight"
                style={{ color: "#FFFFFF" }}
              >
                What Does It Really Mean
                <br />
                To Be A Man?
              </h1>
              <div className="w-32 h-px bg-primary/50 mx-auto mt-6" />
              <p className="mt-8 text-sand-light/80 font-body text-lg italic">
                {CIRCLES_CONTENT.pageTitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro - what the Men's Circle is */}
      <Section background="default">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-4">
              {CIRCLES_CONTENT.subheadline}
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              {CIRCLES_CONTENT.intro}
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              {CIRCLES_CONTENT.approach}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Men's Circle narrative */}
      {CIRCLES.map((circle) => (
        <Section key={circle.id} id={circle.id} background="surface">
          <SectionHeading title={circle.title} subtitle={circle.audience} />

          {/* Italic narrative block - mirrors the poster cadence */}
          <div className="max-w-2xl mx-auto scroll-reveal-stagger">
            <ScrollReveal>
              <p className="font-heading italic text-xl md:text-2xl text-text text-center leading-relaxed mb-10">
                {circle.intro}
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="relative py-8 my-8 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-primary/40" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-primary/40" />
                <div className="space-y-3">
                  {circle.promise.map((line, i) => (
                    <p
                      key={i}
                      className="font-heading italic text-lg md:text-xl text-text-muted leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="font-heading italic text-2xl md:text-3xl text-text text-center mt-12">
                {circle.welcome}
              </p>
            </ScrollReveal>
          </div>
        </Section>
      ))}

      {/* FAQ / About - what is a Men's Circle */}
      <Section background="default">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text text-center mb-4">
              {CIRCLES_CONTENT.about.heading}
            </h2>
            <p className="font-heading italic text-xl md:text-2xl text-text-muted text-center leading-relaxed mb-12">
              {CIRCLES_CONTENT.about.lead}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto scroll-reveal-stagger">
          {CIRCLES_CONTENT.about.faq.map((item, i) => (
            <ScrollReveal key={i}>
              <details className="group border-t border-primary/20 last:border-b last:border-primary/20 transition-colors">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-5 hover:text-primary transition-colors">
                  <span className="font-heading text-lg md:text-xl text-text font-medium">
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-primary/40 flex items-center justify-center text-primary transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <line x1="7" y1="2" x2="7" y2="12" />
                      <line x1="2" y1="7" x2="12" y2="7" />
                    </svg>
                  </span>
                </summary>
                <p className="text-base md:text-lg text-text-muted leading-relaxed pb-6 pr-12">
                  {item.a}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto mt-12 pt-10 border-t border-primary/30 text-center">
            <p className="font-heading italic text-xl text-text leading-relaxed mb-6">
              {CIRCLES_CONTENT.about.feelInto}
            </p>
            <Button href={SITE_CONFIG.whatsapp.link} external variant="outline">
              DM Chi on WhatsApp
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA - get in touch since dates are not yet scheduled */}
      <Section background="sage" padding="lg">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-6">
              Want to Join the Next Circle?
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              The next date and location are still being set. Send a quick
              message and I&apos;ll let you know as soon as the next circle is
              scheduled.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={SITE_CONFIG.whatsapp.link} external size="lg">
                Get Notified
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Ask a Question
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
