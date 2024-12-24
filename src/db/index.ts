import { cwd } from 'node:process';

import { loadEnvConfig } from '@next/env';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

loadEnvConfig(cwd());

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const client = postgres(process.env.POSTGRES_URL!);
export const db = drizzle({ client });
