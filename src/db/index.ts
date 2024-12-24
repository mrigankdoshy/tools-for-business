import { loadEnvConfig } from '@next/env';
import { drizzle } from 'drizzle-orm/postgres-js';
import { cwd } from 'node:process';
import postgres from 'postgres';

loadEnvConfig(cwd());

const client = postgres(process.env.POSTGRES_URL!);
export const db = drizzle({ client });
