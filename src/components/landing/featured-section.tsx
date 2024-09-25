import Image from 'next/image';

export default function FeaturedSection() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 text-center md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            FEATURED AI TOOLS
          </h2>
          <div className="mt-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
