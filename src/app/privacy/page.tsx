import type { Metadata } from "next";
import { PAGE_SEO, SITE_CONFIG } from "@/lib/constants";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: PAGE_SEO.privacy.title,
  description: PAGE_SEO.privacy.description,
};

export default function PrivacyPage() {
  return (
    <Section padding="lg" className="pt-32">
      <SectionHeading title="Privacy Policy" centered={false} as="h1" />
      <div className="prose prose-lg max-w-3xl text-text-muted space-y-6">
        <p className="text-sm text-text-muted">
          Last updated: February 2026
        </p>

        <h2 className="font-heading text-2xl font-semibold text-text mt-8">
          Overview
        </h2>
        <p>
          Healing With Chi (&quot;I&quot;, &quot;me&quot;) respects your privacy.
          This policy explains what information is collected when you visit this
          website and how it is used.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-text mt-8">
          Information Collected
        </h2>
        <p>
          <strong>Contact Form:</strong> When you submit the contact form, I
          collect your name, email address, and message. This information is
          used solely to respond to your inquiry.
        </p>
        <p>
          <strong>Analytics:</strong> This website uses Vercel Analytics, which
          collects anonymous, cookieless usage data (page views, performance
          metrics). No personal information is tracked, and no cookies are
          placed on your device.
        </p>

        <h2 className="font-heading text-2xl font-semibold text-text mt-8">
          How Information Is Used
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your contact form submissions</li>
          <li>To understand website performance and improve the experience</li>
          <li>I do not sell, rent, or share your personal information with third parties</li>
        </ul>

        <h2 className="font-heading text-2xl font-semibold text-text mt-8">
          Your Rights
        </h2>
        <p>
          Under GDPR and applicable privacy laws, you have the right to access,
          correct, or delete any personal data I hold about you. To exercise
          these rights, contact me at{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-primary-dark hover:underline"
          >
            {SITE_CONFIG.email}
          </a>
          .
        </p>

        <h2 className="font-heading text-2xl font-semibold text-text mt-8">
          Contact
        </h2>
        <p>
          For privacy-related questions, reach me at{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-primary-dark hover:underline"
          >
            {SITE_CONFIG.email}
          </a>{" "}
          or via WhatsApp at {SITE_CONFIG.whatsapp.displayNumber}.
        </p>
      </div>
    </Section>
  );
}
