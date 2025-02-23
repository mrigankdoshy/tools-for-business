import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'drizzle-kit';
import { cwd } from 'node:process';

loadEnvConfig(cwd());

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  verbose: true,
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
