import { HeroSection } from '@/features/landing/hero/hero-section';
import { ToolsSection } from '@/features/landing/tools/tools-section';
import { Particles } from '@/shared/ui/particles';
import { SphereMask } from '@/shared/ui/sphere-mask';

export async function Landing() {
  return (
    <>
      <HeroSection />
      <SphereMask />
      <ToolsSection />
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
