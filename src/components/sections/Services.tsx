import Link from "next/link";
import { FaCompass, FaHandsHelping, FaBolt } from "react-icons/fa";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";
import type { Service } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  compass: <FaCompass className="w-8 h-8 text-primary" />,
  hands: <FaHandsHelping className="w-8 h-8 text-primary" />,
  energy: <FaBolt className="w-8 h-8 text-primary" />,
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <ScrollReveal>
      <Link
        href={service.href}
        className="block bg-surface rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 h-full group"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
          {iconMap[service.icon]}
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl font-semibold text-text mb-1">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm font-medium text-primary mb-3">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-text-muted font-body leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Learn more */}
        <span className="inline-flex items-center text-sm font-medium text-sage group-hover:text-sage-dark transition-colors duration-300">
          Learn More
          <svg
            className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <Section id="services" background="default">
      <SectionHeading
        title="How I Can Help"
        subtitle="Two paths to healing - choose what resonates with you"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-reveal-stagger">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
