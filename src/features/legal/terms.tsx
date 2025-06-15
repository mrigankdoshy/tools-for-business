import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function Terms() {
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
              Terms of Service
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
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Welcome to Tools for Business (&quot;we&quot;,
                  &quot;our&quot;, or &quot;us&quot;). These Terms and
                  Conditions (&quot;Terms&quot;) govern your use of the Tools
                  for Business website and its associated content and services
                  (the &quot;Service&quot;).
                </p>
                <section className="bg-muted/30 border-muted rounded-lg border p-6">
                  <h2 className="text-primary mb-3 text-xl font-semibold">
                    🚧 Beta Release Notice
                  </h2>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    Tools for Business is currently in beta and operates as a
                    passion project. We&apos;re a small team working to build
                    something useful for the community, and we&apos;re
                    constantly learning and improving.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    While we take our responsibilities seriously and aim to
                    provide accurate information, please keep in mind that this
                    is an evolving project. We appreciate your patience,
                    feedback, and understanding as we continue to develop and
                    refine the service.
                  </p>
                </section>
                <p className="text-muted-foreground leading-relaxed">
                  By using this Service, you agree to be bound by these Terms.
                  If you do not agree with them, please do not use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  1. Overview of Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tools for Business is a free online directory that lists
                  publicly available AI tools and resources. Our goal is to help
                  users discover useful tools for business use. All content is
                  curated from public websites, and we do not claim ownership
                  over the tools or information provided.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  2. No Endorsement or Affiliation
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are not affiliated with, endorsed by, or officially
                  connected to any of the tools listed on our site. References
                  to third-party products are provided for informational
                  purposes only. Users are solely responsible for verifying the
                  quality, safety, or legality of any external service.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  3. Publicly Available Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All information on this site has been sourced from publicly
                  accessible sources. We do not collect or use private,
                  proprietary, or confidential information. If you believe
                  content has been included in error, you may contact us to
                  request its removal.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  4. Accuracy of Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we aim to keep information accurate and up to date, we
                  do not guarantee the reliability, completeness, or currentness
                  of any content on the Service. Use of any tool or service
                  listed on this site is at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  5. User Accounts
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  While the Service may offer user account functionality, it is
                  currently in early stages and may not be fully operational. By
                  creating an account, you agree not to share your login
                  credentials or misuse the Service.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  6. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All original content on this site—including design, layout,
                  and structure—is owned by Tools for Business. Third-party
                  content (e.g., tool names or logos) belongs to their
                  respective owners and is used under fair use for informational
                  purposes.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  7. Changes and Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or discontinue the Service at
                  any time without notice. These Terms may be updated
                  periodically—continued use of the Service means you agree to
                  the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  8. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  As a beta service and passion project, Tools for Business is
                  provided &quot;as is&quot; without warranties of any kind.
                  Under no circumstances shall Tools for Business be liable for
                  any indirect, incidental, or consequential damages arising
                  from the use of the Service or any third-party tools listed.
                  We&apos;re doing our best to create something helpful, and we
                  appreciate your understanding of our limitations as a small,
                  independent project.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  9. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by and construed in accordance with
                  applicable laws. We do not currently restrict access by
                  geography, but reserve the right to do so in the future.
                </p>
              </section>

              <section>
                <h2 className="text-primary mb-4 text-2xl font-semibold">
                  10. Contact
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are a rights holder and believe content on this site
                  should be removed, or if you have any questions, please
                  contact us at{' '}
                  <Link
                    href="mailto:contact@toolsforbusiness.ai"
                    className="text-primary hover:underline"
                  >
                    contact@toolsforbusiness.ai
                  </Link>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
