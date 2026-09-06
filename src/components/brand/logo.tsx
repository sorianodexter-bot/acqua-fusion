import { useId } from "react";
import { cn } from "@/lib/utils";

export function DropMark({
  className,
  variant = "brand",
}: {
  className?: string;
  variant?: "brand" | "light";
}) {
  const id = useId();
  const light = variant === "light";
  return (
    <svg
      viewBox="0 0 72 90"
      className={cn("overflow-visible", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-fill`} x1="22%" y1="0%" x2="78%" y2="100%">
          <stop
            offset="0%"
            stopColor={light ? "var(--color-aqua-bright)" : "var(--color-aqua)"}
          />
          <stop offset="48%" stopColor="var(--color-brand)" />
          <stop offset="100%" stopColor="var(--color-brand-deep)" />
        </linearGradient>
        <clipPath id={`${id}-clip`}>
          <path d="M36 4.5C36 4.5 8 39.5 8 58.2c0 15.6 12.4 28.3 28 28.3s28-12.7 28-28.3C64 39.5 36 4.5 36 4.5Z" />
        </clipPath>
      </defs>
      <path
        fill={`url(#${id}-fill)`}
        d="M36 4.5C36 4.5 8 39.5 8 58.2c0 15.6 12.4 28.3 28 28.3s28-12.7 28-28.3C64 39.5 36 4.5 36 4.5Z"
      />
      <g clipPath={`url(#${id}-clip)`}>
        <path
          fill={light ? "var(--color-foam)" : "var(--color-aqua-bright)"}
          fillOpacity={light ? 0.22 : 0.55}
          d="M4 58c10-11 18-11 32 0s22 11 36 0v14c-14 11-22 11-36 0s-22-11-32 0V58Z"
        />
      </g>
      <path
        fill={light ? "var(--color-brand-deep)" : "var(--color-foam)"}
        fillOpacity={light ? 0.2 : 0.88}
        d="M26 30c7.2-11 14.2-11.4 20.2-1.2-6 4.2-13 4.8-20.2 1.2Z"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  variant = "brand",
}: {
  className?: string;
  markClassName?: string;
  variant?: "brand" | "light";
}) {
  const light = variant === "light";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <DropMark variant={variant} className={cn("h-9 w-[1.8rem]", markClassName)} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-extrabold tracking-tight",
            light ? "text-foam" : "text-brand",
          )}
        >
          ACQUA
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.62rem] font-bold tracking-fusion",
            light ? "text-aqua-bright" : "text-aqua",
          )}
        >
          FUSION
        </span>
      </span>
    </span>
  );
}

export function AcquaWordmark({
  className,
  variant = "brand",
  subtitle = "Water Refilling Station",
}: {
  className?: string;
  variant?: "brand" | "light";
  subtitle?: string | null;
}) {
  const light = variant === "light";
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "flex items-end font-extrabold leading-none tracking-tight",
          light ? "text-foam" : "text-brand",
        )}
        style={{ fontSize: "1em" }}
      >
        <span>AC</span>
        <DropMark
          variant={variant}
          className="mx-[0.02em] mb-[0.04em] h-[0.92em] w-[0.74em]"
        />
        <span>UA</span>
      </div>
      <p
        className={cn(
          "mt-[0.18em] text-[0.22em] font-bold tracking-[0.42em]",
          light ? "text-aqua-bright" : "text-aqua",
        )}
      >
        FUSION
      </p>
      {subtitle ? (
        <p
          className={cn(
            "mt-[0.28em] text-[0.145em] font-semibold uppercase tracking-mark",
            light ? "text-sky" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function LogoDropLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <AcquaWordmark className="text-[3.4rem]" />
    </div>
  );
}

export function LogoWaveLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <p className="text-[1.65rem] font-extrabold tracking-tight text-brand">
        ACQUA FUSION
      </p>
      <svg
        viewBox="0 0 260 28"
        className="mt-2 w-60"
        aria-hidden="true"
      >
        <path
          d="M6 12 C34 2, 56 22, 84 12 C112 2, 134 22, 162 12 C190 2, 212 22, 240 12 C248 8, 254 14, 254 12"
          fill="none"
          className="stroke-brand"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M6 20 C34 10, 56 30, 84 20 C112 10, 134 30, 162 20 C190 10, 212 30, 240 20 C248 16, 254 22, 254 20"
          fill="none"
          className="stroke-aqua"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-mark text-muted">
        Pure Water. Fresh Living.
      </p>
    </div>
  );
}

export function LogoBadgeLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg viewBox="0 0 200 200" className="h-40 w-40" aria-hidden="true">
        <circle cx="100" cy="100" r="98" className="fill-brand" />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          className="stroke-aqua"
          strokeWidth="4"
        />
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          className="stroke-foam"
          strokeWidth="1.2"
          strokeDasharray="2 3.5"
          opacity="0.4"
        />
        <circle cx="100" cy="100" r="62" className="fill-foam" />
        <path
          className="fill-brand"
          d="M100 54c0 0-22 28-22 43.5C78 111.2 88 122 100 122s22-10.8 22-24.5C122 82 100 54 100 54z"
        />
        <path
          className="fill-aqua"
          fillOpacity="0.75"
          d="M83 100c6.5-8.5 11.5-8.5 17 0s11.5 8.5 17 0v6.5c-5.5 8.5-11.5 8.5-17 0s-10.5-8.5-17 0z"
        />
        <path
          className="fill-aqua-bright"
          d="M90 76c6-9 11.5-9.2 16.8-1-4.8 3.4-10.4 3.8-16.8 1z"
        />
      </svg>
      <p className="mt-3 text-lg font-extrabold tracking-tight text-brand">
        ACQUA FUSION
      </p>
      <p className="text-[0.65rem] font-semibold uppercase tracking-mark text-muted">
        Water Refilling Station
      </p>
    </div>
  );
}

export function WaveRule({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 10"
      className={cn("h-2.5 w-24 text-aqua", className)}
      aria-hidden="true"
    >
      <path
        d="M1 6 C20 1, 40 9, 60 5 C80 1, 100 9, 119 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeafAccent({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M74 8C38 14 10 46 8 82c28-8 58-36 66-74Z"
        opacity="0.55"
      />
      <path
        d="M74 8C50 34 28 56 8 82"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.8"
      />
    </svg>
  );
}
