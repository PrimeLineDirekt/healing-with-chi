"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-10 h-10 text-primary/20", className)}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function TestimonialCard({
  text,
  name,
  context,
}: {
  text: string;
  name: string;
  context: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center px-4">
      <QuoteIcon className="mx-auto mb-6" />
      <blockquote className="font-heading italic text-xl md:text-2xl text-text leading-relaxed mb-6">
        &ldquo;{text}&rdquo;
      </blockquote>
      <div>
        <p className="font-body font-semibold text-text">{name}</p>
        <p className="text-sm text-text-muted">{context}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <Section id="testimonials" background="default">
      <ScrollReveal>
        <SectionHeading
          title="What People Say"
          subtitle="Real experiences from real people"
        />

        {/* Desktop: single testimonial with dot navigation */}
        <div className="hidden md:block">
          <TestimonialCard
            text={TESTIMONIALS[active].text}
            name={TESTIMONIALS[active].name}
            context={TESTIMONIALS[active].context}
          />

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  i === active
                    ? "bg-primary scale-125"
                    : "bg-sand hover:bg-primary/50"
                )}
              />
            ))}
          </div>
        </div>

        {/* Mobile: all testimonials stacked */}
        <div className="md:hidden space-y-10">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.id}
              text={t.text}
              name={t.name}
              context={t.context}
            />
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
