'use client';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import '@/lib/env';

import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <main>
      <section className="bg-white">
        <div className="layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center">
          <h1 className="mt-4">Build your next MVP or side project</h1>
          <p className="mt-2 text-sm text-gray-800">
            Launch your startup in a day without code—start with free no-code
            tool recommendations. Stop waiting, create your idea now!
          </p>
          <Button variant="link" asChild>
            <Link href="/">
              Get your tool stack recommendation
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild>
            <Link href="/resources">Explore Resources</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
