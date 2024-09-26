import { FeaturedTools } from '@/components/featured/featured-tools';

export default function FeaturedSection() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 text-center md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            FEATURED AI TOOLS
          </h2>
          <div className="mt-6">
            <FeaturedTools />
          </div>
        </div>
      </div>
    </section>
  );
}
