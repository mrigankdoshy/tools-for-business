import { CallToActionSection } from '@/components/cta/cta-section';
import { FeaturedSection } from '@/components/featured/featured-section';
import { HeroSection } from '@/components/hero/hero-section';
import { ToolsSection } from '@/components/tools/tools-section';
import { Particles } from '@/components/ui/particles';
import { SphereMask } from '@/components/ui/sphere-mask';

export default async function Page() {
  return (
    <>
      <HeroSection />
      <SphereMask />
      <FeaturedSection />
      <ToolsSection />
      <CallToActionSection />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color="#ffffff"
      />
    </>
  );
}
