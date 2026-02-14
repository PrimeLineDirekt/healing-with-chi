import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import AboutPreview from "@/components/sections/AboutPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import ContactMini from "@/components/sections/ContactMini";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <Testimonials />
      <CTASection />
      <ContactMini />
    </>
  );
}
