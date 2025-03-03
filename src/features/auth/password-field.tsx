import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import * as Clerk from '@clerk/elements/common';

export function PasswordField() {
  return (
    <Clerk.Field name="password" className="space-y-2">
      <Clerk.Label asChild>
        <Label>Password</Label>
      </Clerk.Label>
      <Clerk.Input
        id="password"
        type="password"
        placeholder="••••••••"
        autoCapitalize="none"
        autoComplete="new-password"
        autoCorrect="off"
        required
        asChild
      >
        <Input />
      </Clerk.Input>
      <Clerk.FieldError className="text-destructive block text-sm" />
    </Clerk.Field>
  );
}
