import Image from 'next/image';

type ToolImageProps = Readonly<{
  url: string;
  toolName: string;
  isActive: boolean;
}>;

export function ToolImage({ isActive, toolName, url }: ToolImageProps) {
  return (
    <div
      className={`bg-secondary/30 relative flex items-center justify-center ${
        isActive ? 'h-80 sm:rounded-tl-lg sm:rounded-tr-lg' : 'h-48 rounded-lg'
      }`}
    >
      <Image
        src={url}
        alt={toolName}
        width={50}
        height={50}
        quality={100}
        unoptimized
      />
    </div>
  );
}
