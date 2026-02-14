import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ABOUT_CONTENT } from "@/lib/constants";

export default function AboutPreview() {
  return (
    <Section id="about" background="sage">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Decorative element */}
        <ScrollReveal>
          <div className="flex items-center justify-center">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-elevated">
              <img
                src="/images/zen-stones.jpg"
                alt="Zen stones balanced on a beach at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Text content */}
        <ScrollReveal delay={150}>
          <SectionHeading
            title={ABOUT_CONTENT.headline}
            subtitle={ABOUT_CONTENT.subheadline}
            centered={false}
          />
          <p className="text-text-muted text-lg leading-relaxed mb-6">
            {ABOUT_CONTENT.previewText}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors duration-300"
          >
            Read Full Story
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </Section>
  );
}
