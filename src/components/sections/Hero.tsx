"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax on desktop */}
      <div
        className="absolute inset-0"
        style={!isMobile ? { transform: `translateY(${offsetY}px)` } : undefined}
      >
        <img
          src="/images/hero-sunset.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/60 to-background/90" />
      </div>

      {/* Organic background shapes */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-sage/10 blur-3xl"
        style={!isMobile ? { transform: `translateY(${offsetY * 0.5}px)` } : undefined}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        style={!isMobile ? { transform: `translateY(${offsetY * 0.2}px)` } : undefined}
      />

      {/* Content */}
      <div className="relative z-10 container-site text-center py-32">
        {/* Breathing circle */}
        <div className="breathing-circle mx-auto mb-10" aria-hidden="true" />

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-text mb-4">
          {HERO_CONTENT.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-text-muted font-body mb-10 max-w-2xl mx-auto">
          {HERO_CONTENT.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={SITE_CONFIG.whatsapp.link} external size="lg">
            {HERO_CONTENT.ctaPrimary.text}
          </Button>
          <Button href={HERO_CONTENT.ctaSecondary.href} variant="outline" size="lg">
            {HERO_CONTENT.ctaSecondary.text}
          </Button>
        </div>

        {/* Subtext */}
        <p className="text-text-muted text-sm mt-4">
          {HERO_CONTENT.ctaPrimary.subtext}
        </p>
      </div>
    </section>
  );
}
