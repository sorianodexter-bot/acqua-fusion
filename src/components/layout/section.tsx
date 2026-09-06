import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { WaveRule } from "@/components/brand/logo";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 md:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto mb-12 text-center md:mb-16" : "mb-10",
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-mark",
          dark ? "text-aqua-bright" : "text-aqua",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-semibold tracking-display md:text-4xl",
          dark ? "text-foam" : "text-ink",
        )}
      >
        {title}
      </h2>
      <WaveRule
        className={cn(
          "mt-4",
          align === "center" ? "mx-auto" : "",
          dark ? "text-aqua-bright" : "text-aqua",
        )}
      />
      {text ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            dark ? "text-sky" : "text-muted",
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

export function WaveBand({
  className,
  fillClassName = "text-foam",
}: {
  className?: string;
  fillClassName?: string;
}) {
  return (
    <div className={cn("relative -mb-px overflow-hidden leading-none", className)}>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className={cn("block h-12 w-full md:h-16", fillClassName)}
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0 28C180 64 360 4 540 28C720 52 900 8 1080 32C1260 56 1380 24 1440 36V72H0V28Z"
        />
      </svg>
    </div>
  );
}
