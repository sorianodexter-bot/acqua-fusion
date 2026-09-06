import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-md bg-paper px-3.5 text-sm text-ink shadow-[0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] placeholder:text-muted/80 focus-visible:shadow-[0_0_0_2px_var(--color-aqua)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full resize-y rounded-lg bg-paper px-3.5 py-3 text-sm text-ink shadow-[0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] placeholder:text-muted/80 focus-visible:shadow-[0_0_0_2px_var(--color-aqua)] disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export function SelectNative({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "flex h-11 w-full appearance-none rounded-md bg-paper bg-[length:12px] bg-[right_12px_center] bg-no-repeat px-3.5 pr-10 text-sm text-ink shadow-[0_0_0_1px_var(--color-line)] outline-none transition-[box-shadow] focus-visible:shadow-[0_0_0_2px_var(--color-aqua)] disabled:opacity-50",
        className,
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%230B5A9A' stroke-width='1.6' stroke-linecap='round'/></svg>")`,
      }}
      {...props}
    >
      {children}
    </select>
  );
}
