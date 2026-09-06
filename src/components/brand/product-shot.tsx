import { cn } from "@/lib/utils";

export function ProductShot({
  src,
  alt,
  className,
  imgClassName,
  contain = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  contain?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-mist", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-full w-full",
          contain ? "object-contain" : "object-cover object-center",
          imgClassName,
        )}
      />
    </div>
  );
}
