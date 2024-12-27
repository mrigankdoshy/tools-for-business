import { CallToActionSection } from '@/features/landing/cta/cta-section';
import { FeaturedSection } from '@/features/landing/featured/featured-section';
import { HeroSection } from '@/features/landing/hero/hero-section';
import { ToolsSection } from '@/features/landing/tools/tools-section';

import { Particles } from '@/shared/ui/particles';
import { SphereMask } from '@/shared/ui/sphere-mask';

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
