"use client";

import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Hide on contact page to avoid redundancy
  if (pathname === "/contact") return null;

  return (
    <>
      {/* Desktop: Floating circle */}
      <a
        href={SITE_CONFIG.whatsapp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-40 w-14 h-14 bg-sage text-white rounded-full items-center justify-center shadow-elevated hover:bg-sage-dark hover:scale-105 transition-all duration-300"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Mobile: Bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-sage/95 backdrop-blur-sm safe-area-bottom">
        <a
          href={SITE_CONFIG.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 text-white font-medium text-sm"
        >
          <FaWhatsapp size={20} />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </>
  );
}
