import Link from "next/link";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-sand-light">
      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-white mb-3">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sand/80 text-sm leading-relaxed max-w-xs">
              {SITE_CONFIG.tagline}. Holistic coaching and bodywork
              in Da Nang, Vietnam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sand/80 text-sm hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-sand/80">
              <a
                href={SITE_CONFIG.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors w-fit"
              >
                WhatsApp: {SITE_CONFIG.whatsapp.displayNumber}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="hover:text-white transition-colors w-fit"
              >
                {SITE_CONFIG.email}
              </a>
              <address className="not-italic leading-relaxed mt-1">
                {SITE_CONFIG.address.street}
                <br />
                {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city},{" "}
                {SITE_CONFIG.address.state}
                <br />
                {SITE_CONFIG.address.country}
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sand/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sand/60 text-xs">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-sand/60 text-xs hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
