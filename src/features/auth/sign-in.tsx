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
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import Link from 'next/link';

export function SignInPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <BackButton />
      <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
        <div className="grid w-full grow items-center px-4 sm:justify-center">
          <SignIn.Root>
            <Clerk.Loading>
              {(isGlobalLoading) => (
                <>
                  <SignIn.Step name="start">
                    <Card className="w-full sm:w-96">
                      <CardHeader>
                        <CardTitle>Sign in to Tools for Business</CardTitle>
                        <CardDescription>
                          Welcome back! Please sign in to continue
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <OAuthButtons isLoading={isGlobalLoading} />
                        <p className="text-muted-foreground before:bg-border after:bg-border flex items-center gap-x-3 text-sm before:h-px before:flex-1 after:h-px after:flex-1">
                          or
                        </p>
                        <EmailField type="sign-in" />
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignIn.Action submit asChild>
                            <ContinueButton disabled={isGlobalLoading} />
                          </SignIn.Action>
                          <Button
                            variant="link"
                            size="sm"
                            className="cursor-pointer"
                            asChild
                          >
                            <Link href="/sign-up">
                              Don&apos;t have an account? Sign up
                            </Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignIn.Step>

                  <SignIn.Step name="verifications">
                    <SignIn.Strategy name="password">
                      <Card className="w-full sm:w-96">
                        <CardHeader>
                          <CardTitle>Enter your password</CardTitle>
                          <CardDescription>
                            Welcome back <SignIn.SafeIdentifier />
                          </CardDescription>
                          <p className="text-muted-foreground text-sm">
                            Enter the password to your account
                          </p>
                        </CardHeader>
                        <CardContent className="grid gap-y-4">
                          <PasswordField />
                        </CardContent>
                        <CardFooter>
                          <div className="grid w-full gap-y-4">
                            <SignIn.Action submit asChild>
                              <ContinueButton disabled={isGlobalLoading} />
                            </SignIn.Action>
                            <SignIn.Action navigate="choose-strategy" asChild>
                              <Button type="button" size="sm" variant="link">
                                Use another method
                              </Button>
                            </SignIn.Action>
                          </div>
                        </CardFooter>
                      </Card>
                    </SignIn.Strategy>

                    <SignIn.Strategy name="email_code">
                      <Card className="w-full sm:w-96">
                        <CardHeader>
                          <CardTitle>Check your email</CardTitle>
                          <CardDescription>
                            Welcome back <SignIn.SafeIdentifier />
                          </CardDescription>
                          <p className="text-muted-foreground text-sm">
                            Enter the verification code sent to your email
                          </p>
                        </CardHeader>
                        <CardContent className="grid gap-y-4">
                          <Clerk.Field name="code">
                            <Clerk.Label className="sr-only">
                              Email verification code
                            </Clerk.Label>
                            <div className="grid items-center justify-center gap-y-2">
                              <div className="flex justify-center text-center">
                                <Clerk.Input
                                  type="otp"
                                  autoSubmit
                                  className="flex justify-center has-disabled:opacity-50"
                                  render={({ value, status }) => {
                                    return (
                                      <div
                                        data-status={status}
                                        className="border-input data-[status=cursor]:ring-ring data-[status=selected]:ring-ring relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=cursor]:ring-1 data-[status=selected]:ring-1"
                                      >
                                        {value}
                                      </div>
                                    );
                                  }}
                                />
                              </div>
                              <Clerk.FieldError className="text-destructive block text-center text-sm" />
                              <SignIn.Action
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
                                <Button variant="link" size="sm">
                                  Didn&apos;t receive a code? Resend
                                </Button>
                              </SignIn.Action>
                            </div>
                          </Clerk.Field>
                        </CardContent>
                        <CardFooter>
                          <div className="grid w-full gap-y-4">
                            <SignIn.Action submit asChild>
                              <ContinueButton disabled={isGlobalLoading} />
                            </SignIn.Action>
                            <SignIn.Action navigate="choose-strategy" asChild>
                              <Button size="sm" variant="link">
                                Use another method
                              </Button>
                            </SignIn.Action>
                          </div>
                        </CardFooter>
                      </Card>
                    </SignIn.Strategy>
                  </SignIn.Step>

                  <SignIn.Step name="choose-strategy">
                    <Card className="w-full sm:w-96">
                      <CardHeader>
                        <CardTitle>Use another method</CardTitle>
                        <CardDescription>
                          Facing issues? You can use any of these methods to
                          sign in.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-y-4">
                        <SignIn.SupportedStrategy name="email_code" asChild>
                          <Button
                            type="button"
                            variant="link"
                            disabled={isGlobalLoading}
                          >
                            Email code
                          </Button>
                        </SignIn.SupportedStrategy>
                        <SignIn.SupportedStrategy name="password" asChild>
                          <Button
                            type="button"
                            variant="link"
                            disabled={isGlobalLoading}
                          >
                            Password
                          </Button>
                        </SignIn.SupportedStrategy>
                      </CardContent>
                      <CardFooter>
                        <div className="grid w-full gap-y-4">
                          <SignIn.Action navigate="previous" asChild>
                            <ContinueButton disabled={isGlobalLoading} />
                          </SignIn.Action>
                        </div>
                      </CardFooter>
                    </Card>
                  </SignIn.Step>
                </>
              )}
            </Clerk.Loading>
          </SignIn.Root>
        </div>
      </div>
    </div>
  );
}
