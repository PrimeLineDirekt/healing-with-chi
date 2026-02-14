import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactMini() {
  const { address } = SITE_CONFIG;

  return (
    <Section id="contact" background="surface">
      <ScrollReveal>
        <SectionHeading
          title="Get In Touch"
          subtitle="Ready to begin your journey?"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          {/* WhatsApp */}
          <div>
            <div className="text-2xl mb-2" aria-hidden="true">
              💬
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-text-muted text-sm mb-3">Fastest response</p>
            <Button
              href={SITE_CONFIG.whatsapp.link}
              external
              size="sm"
            >
              Message on WhatsApp
            </Button>
          </div>

          {/* Email */}
          <div>
            <div className="text-2xl mb-2" aria-hidden="true">
              ✉️
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Email</h3>
            <p className="text-text-muted text-sm mb-3">
              {SITE_CONFIG.email}
            </p>
            <Button
              href={`mailto:${SITE_CONFIG.email}`}
              external
              variant="outline"
              size="sm"
            >
              Send Email
            </Button>
          </div>

          {/* Location */}
          <div>
            <div className="text-2xl mb-2" aria-hidden="true">
              📍
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">Location</h3>
            <p className="text-text-muted text-sm">
              {address.city}, {address.state}
              <br />
              {address.country}
            </p>
          </div>
        </div>

        {/* Link to full contact page */}
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors duration-300"
          >
            Visit Full Contact Page
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </ScrollReveal>
    </Section>
  );
}
