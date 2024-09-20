'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function ComponentPage() {
  return (
    <main>
      <section>
        <div>
          <Button className="m-4" variant="link" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
