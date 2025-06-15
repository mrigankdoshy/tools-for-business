import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function Privacy() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm transition-colors duration-200"
          >
            <ArrowLeftIcon className="size-4" />
            Back to Home
          </Link>
        </div>

        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="from-primary via-primary/80 to-primary/40 bg-linear-to-br bg-clip-text text-4xl font-medium tracking-tighter text-transparent md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <p className="text-muted-foreground leading-relaxed">
                  At Tools for Business (&quot;we&quot;, &quot;our&quot;, or
                  &quot;us&quot;), your privacy is important to us. This Privacy
                  Policy explains how we collect, use, and safeguard your
                  information when you visit our website or use our services.
                </p>
              </section>

              <section className="bg-muted/30 border-muted rounded-lg border p-6">
                <h2 className="text-primary mb-3 text-xl font-semibold">
                  🚧 Beta Release Notice
                </h2>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  Tools for Business is currently in beta and operates as a
                  passion project. We&apos;re committed to protecting your
                  privacy, but as a small, evolving project, our practices may
                  change as we grow and learn.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We&apos;re transparent about our current capabilities and
                  limitations. If you have any concerns about how we handle your
                  data, please don&apos;t hesitate to reach out—we&apos;re
                  always happy to discuss and improve our practices.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  1. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Personal Information
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We may collect personally identifiable information, such
                      as your email address, when you sign up or create an
                      account.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground mb-2 text-lg font-medium">
                      Usage Data
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We automatically collect certain data through third-party
                      analytics tools, such as Google Analytics and Supabase
                      logs. This may include your IP address, browser type,
                      pages visited, and timestamps.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  2. Use of Third-Party Services
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We rely on third-party services to host, manage, and analyze
                  usage of our platform. These services may have access to your
                  data only as necessary to perform their functions and are
                  obligated not to disclose or use it for other purposes.
                  Third-party services we use include (but are not limited to):
                </p>
                <ul className="text-muted-foreground ml-4 list-inside list-disc space-y-2">
                  <li>Supabase (database and authentication)</li>
                  <li>Google Analytics (usage tracking)</li>
                  <li>Vercel (hosting)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  3. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We currently do not use cookies or tracking technologies. If
                  this changes in the future, we will update this policy
                  accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  4. Children&apos;s Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our service is not directed to children under 13, and we do
                  not knowingly collect personal information from anyone under
                  the age of 13. If you are a parent or guardian and believe
                  your child has provided us with personal information, please
                  contact us and we will delete it.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  5. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable steps to protect the information you
                  provide from loss, misuse, or unauthorized access. However, as
                  a beta project with limited resources, we cannot guarantee
                  perfect security. No method of transmission over the Internet
                  or electronic storage is 100% secure, and we&apos;re
                  continuously working to improve our security practices as we
                  grow.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you would like to access, update, or delete your personal
                  information, or have any concerns about how we handle your
                  data, please contact us at{' '}
                  <Link
                    href="mailto:contact@toolsforbusiness.ai"
                    className="text-primary hover:underline"
                  >
                    contact@toolsforbusiness.ai
                  </Link>
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  7. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. When we
                  do, we will revise the &quot;Last Updated&quot; date above.
                  Your continued use of the Service constitutes your acceptance
                  of the updated policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
