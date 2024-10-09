import {
  ContactSection,
  GallerySection,
  FaqSection,
  HeroSection,
  HowItWorksSection,
  MapSection,
  PartnersSection,
  VideoSection,
  EasterEgg,
} from "@/components";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <GallerySection />
      <FaqSection />
      <VideoSection />
      <ContactSection />
      <MapSection />
      <PartnersSection />

      <EasterEgg />
    </>
  );
}
