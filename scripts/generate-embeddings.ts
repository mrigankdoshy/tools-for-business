/* eslint-disable no-console */
import { db } from '@/db';
import { tools } from '@/db/schema';
import { generateEmbedding } from '@/lib/openai';
import { loadEnvConfig } from '@next/env';
import chalk from 'chalk';
import { eq, isNull } from 'drizzle-orm';
import { cwd } from 'node:process';

loadEnvConfig(cwd());

async function main() {
  console.log(chalk.blue.bold('\n🚀 Generating embeddings for tools...'));

  try {
    const toolsWithoutEmbeddings = await db
      .select()
      .from(tools)
      .where(isNull(tools.embedding));

    if (toolsWithoutEmbeddings.length === 0) {
      console.log(chalk.green('✅ All tools already have embeddings!'));
      process.exit(0);
    }

    console.log(
      chalk.yellow(
        `Found ${toolsWithoutEmbeddings.length} tools without embeddings.\n`
      )
    );

    for (const [index, tool] of toolsWithoutEmbeddings.entries()) {
      try {
        process.stdout.write(
          chalk.gray(
            `[${index + 1}/${toolsWithoutEmbeddings.length}] Processing: `
          )
        );
        process.stdout.write(chalk.white(tool.name));

        const embeddingText = [
          tool.name,
          tool.shortDescription,
          tool.longDescription,
          tool.category,
          tool.pricing,
        ].join(' ');

        const embedding = await generateEmbedding(embeddingText);

        await db.update(tools).set({ embedding }).where(eq(tools.id, tool.id));

        process.stdout.write(chalk.green(' ✓\n'));
      } catch (error) {
        process.stdout.write(chalk.red(' ✗\n'));
        console.error(chalk.red(`Error: ${error}`));
      }

      // Rate limiting
      if (index < toolsWithoutEmbeddings.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }

    console.log(chalk.green.bold('\n✅ Done!'));
    process.exit(0);
  } catch (error) {
    console.error(chalk.red.bold('❌ Failed:'), error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(chalk.red('Unhandled error:'), error);
  process.exit(1);
});
