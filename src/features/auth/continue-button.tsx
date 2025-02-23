import { Button } from '@/shared/ui/button';
import { Icons } from '@/shared/ui/icons';
import * as Clerk from '@clerk/elements/common';

type ContinueButtonProps = Readonly<{
  disabled?: boolean;
}>;

export function ContinueButton({ disabled }: ContinueButtonProps) {
  return (
    <Button disabled={disabled}>
      <Clerk.Loading>
        {(isLoading) => {
          return isLoading ? (
            <Icons.spinner className="size-4 animate-spin" />
          ) : (
            'Continue'
          );
        }}
      </Clerk.Loading>
    </Button>
  );
}
