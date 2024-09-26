import Image from 'next/image';

export function FeaturedTools() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
      <li>
        <Image
          alt="Memberstack"
          src="images/memberstack.svg"
          className="h-8 w-36 px-2 dark:brightness-0 dark:invert"
          width={36}
          height={8}
        />
      </li>
      <li>
        <Image
          alt="Claude"
          src="images/claude.svg"
          className="h-8 w-36 px-2 dark:brightness-0 dark:invert"
          width={36}
          height={8}
        />
      </li>
      <li>
        <Image
          alt="Descript"
          src="images/descript.svg"
          className="h-8 w-36 px-2 dark:brightness-0 dark:invert"
          width={36}
          height={8}
        />
      </li>
      <li>
        <Image
          alt="Jasper"
          src="images/jasper.svg"
          className="h-8 w-36 px-2 dark:brightness-0 dark:invert"
          width={36}
          height={8}
        />
      </li>
      <li>
        <Image
          alt="Open AI"
          src="images/openai.svg"
          className="h-8 w-36 px-2 dark:brightness-0 dark:invert"
          width={36}
          height={8}
        />
      </li>
    </ul>
  );
}
