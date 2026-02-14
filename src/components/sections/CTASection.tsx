import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CTA_CONTENT, SITE_CONFIG } from "@/lib/constants";

export default function CTASection() {
  return (
    <Section background="sage" padding="lg">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-text mb-6">
            {CTA_CONTENT.headline}
          </h2>
          <p className="text-lg text-text-muted leading-relaxed mb-8">
            {CTA_CONTENT.text}
          </p>
          <Button
            href={SITE_CONFIG.whatsapp.link}
            external
            size="lg"
          >
            {CTA_CONTENT.button}
          </Button>
          <p className="text-text-muted text-sm mt-4">
            {CTA_CONTENT.subtext}
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
