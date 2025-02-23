'use client';

import { ContinueButton } from '@/features/auth/continue-button';
import { EmailField } from '@/features/auth/email-field';
import { OAuthButtons } from '@/features/auth/oauth-buttons';
import { PasswordField } from '@/features/auth/password-field';
import { BackButton } from '@/shared/ui/back-button';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { cn } from '@/shared/utils/cn';
import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';

export function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <BackButton />
      <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
        <div className="grid w-full grow items-center px-4 sm:justify-center">
          <SignUp.Root>
            <Clerk.Loading>
              {(isGlobalLoading) => (
                <>
                  <SignUp.Step name="start">
                    <Card className="w-full sm:w-96">
                      <CardHeader>
                        <CardTitle>Create your account</CardTitle>
                        <CardDescription>
                          Welcome! Please fill in the details to get started.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <OAuthButtons isLoading={isGlobalLoading} />
                        <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                          or
                        </p>
                        <EmailField type="sign-up" />
                        <PasswordField />
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignUp.Captcha className="empty:hidden" />
                          <SignUp.Action submit asChild>
                            <ContinueButton disabled={isGlobalLoading} />
                          </SignUp.Action>
                          <Button
                            variant="link"
                            size="sm"
                            className="cursor-pointer"
                            asChild
                          >
                            <Clerk.Link navigate="sign-in">
                              Already have an account? Sign in
                            </Clerk.Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignUp.Step>

                  <SignUp.Step name="continue">
                    <Card className="w-full sm:w-96">
                      <CardHeader>
                        <CardTitle>Continue registration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Clerk.Field name="firstName" className="space-y-2">
                          <Clerk.Label>
                            <Label>First Name</Label>
                          </Clerk.Label>
                          <Clerk.Input
                            id="first-name"
                            type="text"
                            placeholder="Jane"
                            autoCapitalize="on"
                            autoComplete="given-name"
                            autoCorrect="off"
                            required
                            asChild
                          >
                            <Input />
                          </Clerk.Input>
                          <Clerk.FieldError className="block text-sm text-destructive" />
                        </Clerk.Field>
                        <Clerk.Field name="lastName" className="space-y-2">
                          <Clerk.Label>
                            <Label>Last Name</Label>
                          </Clerk.Label>
                          <Clerk.Input
                            id="last-name"
                            type="text"
                            placeholder="Doe"
                            autoCapitalize="on"
                            autoComplete="family-name"
                            autoCorrect="off"
                            required
                            asChild
                          >
                            <Input />
                          </Clerk.Input>
                          <Clerk.FieldError className="block text-sm text-destructive" />
                        </Clerk.Field>
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignUp.Action submit asChild>
                            <ContinueButton disabled={isGlobalLoading} />
                          </SignUp.Action>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignUp.Step>

                  <SignUp.Step name="verifications">
                    <SignUp.Strategy name="email_code">
                      <Card className="w-full sm:w-96">
                        <CardHeader>
                          <CardTitle>Verify your email</CardTitle>
                          <CardDescription>
                            Use the verification link sent to your email address
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-y-4">
                          <div className="grid items-center justify-center gap-y-2">
                            <Clerk.Field name="code" className="space-y-2">
                              <Clerk.Label className="sr-only">
                                Email address
                              </Clerk.Label>
                              <div className="flex justify-center text-center">
                                <Clerk.Input
                                  type="otp"
                                  className="flex justify-center has-[:disabled]:opacity-50"
                                  autoSubmit
                                  render={({ value, status }) => {
                                    return (
                                      <div
                                        data-status={status}
                                        className={cn(
                                          'relative flex size-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
                                          {
                                            'z-10 ring-2 ring-ring ring-offset-background':
                                              status === 'cursor' ||
                                              status === 'selected',
                                          }
                                        )}
                                      >
                                        {value}
                                        {status === 'cursor' && (
                                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                                            <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
                                          </div>
                                        )}
                                      </div>
                                    );
                                  }}
                                />
                              </div>
                              <Clerk.FieldError className="block text-center text-sm text-destructive" />
                            </Clerk.Field>
                            <SignUp.Action
                              asChild
                              resend
                              className="text-muted-foreground"
                              fallback={({ resendableAfter }) => (
                                <Button variant="link" size="sm" disabled>
                                  Didn&apos;t receive a code? Resend (
                                  <span className="tabular-nums">
                                    {resendableAfter}
                                  </span>
                                  )
                                </Button>
                              )}
                            >
                              <Button type="button" variant="link" size="sm">
                                Didn&apos;t receive a code? Resend
                              </Button>
                            </SignUp.Action>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="grid w-full gap-y-4">
                            <SignUp.Action submit asChild>
                              <ContinueButton disabled={isGlobalLoading} />
                            </SignUp.Action>
                          </div>
                        </CardFooter>
                      </Card>
                    </SignUp.Strategy>
                  </SignUp.Step>
                </>
              )}
            </Clerk.Loading>
          </SignUp.Root>
        </div>
      </div>
    </div>
  );
}
