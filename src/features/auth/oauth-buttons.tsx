import { Button } from '@/shared/ui/button';
import { Icons } from '@/shared/ui/icons';
import * as Clerk from '@clerk/elements/common';

type OAuthButtonsProps = Readonly<{
  isLoading: boolean;
}>;

export function OAuthButtons({ isLoading }: OAuthButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <Clerk.Connection name="google" asChild>
        <Button size="sm" variant="outline" type="button" disabled={isLoading}>
          <Clerk.Loading scope="provider:google">
            {(isLoading) =>
              isLoading ? (
                <Icons.spinner className="size-4 animate-spin" />
              ) : (
                <>
                  <Icons.google className="mr-2 size-4" />
                  Google
                </>
              )
            }
          </Clerk.Loading>
        </Button>
      </Clerk.Connection>
      <Clerk.Connection name="github" asChild>
        <Button size="sm" variant="outline" type="button" disabled={isLoading}>
          <Clerk.Loading scope="provider:github">
            {(isLoading) =>
              isLoading ? (
                <Icons.spinner className="size-4 animate-spin" />
              ) : (
                <>
                  <Icons.gitHub className="mr-2 size-4" />
                  GitHub
                </>
              )
            }
          </Clerk.Loading>
        </Button>
      </Clerk.Connection>
    </div>
  );
}
