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
      <Clerk.Connection name="apple" asChild>
        <Button size="sm" variant="outline" type="button" disabled={isLoading}>
          <Clerk.Loading scope="provider:apple">
            {(isLoading) =>
              isLoading ? (
                <Icons.spinner className="size-4 animate-spin" />
              ) : (
                <>
                  <Icons.apple className="mr-2 size-4" />
                  Apple
                </>
              )
            }
          </Clerk.Loading>
        </Button>
      </Clerk.Connection>
    </div>
  );
}
