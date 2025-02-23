import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import * as Clerk from '@clerk/elements/common';

type EmailFieldProps = Readonly<{
  type: 'sign-in' | 'sign-up';
}>;

export function EmailField({ type }: EmailFieldProps) {
  return (
    <Clerk.Field
      name={type === 'sign-in' ? 'identifier' : 'emailAddress'}
      className="space-y-2"
    >
      <Clerk.Label asChild>
        <Label>Email address</Label>
      </Clerk.Label>
      <Clerk.Input
        id="email"
        type="email"
        placeholder="name@example.com"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect="off"
        required
        asChild
      >
        <Input />
      </Clerk.Input>
      <Clerk.FieldError className="block text-sm text-destructive" />
    </Clerk.Field>
  );
}
