import { Droplets, Leaf, MapPin, ShieldCheck, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveBand } from "@/components/layout/section";
import { scrollToId } from "@/lib/utils";

const BADGES = [
  { icon: ShieldCheck, label: "Clean & Safe" },
  { icon: Droplets, label: "Refreshing Taste" },
  { icon: Leaf, label: "For Homes & Offices" },
  { icon: MapPin, label: "Convenient Location" },
];

const LINEUP = [
  { src: "/images/gallon-5.jpg?v=10", label: "5 gal", scale: 1 },
  { src: "/images/gallon-10.jpg?v=10", label: "10 L", scale: 0.9 },
  { src: "/images/bottle-4l.jpg?v=10", label: "4 L", scale: 0.78 },
  { src: "/images/gallon-small.jpg?v=10", label: "3 L", scale: 0.7 },
  { src: "/images/bottle-1l.jpg?v=10", label: "1 L", scale: 0.62 },
  { src: "/images/bottle-500.jpg?v=10", label: "500 ml", scale: 0.5 },
  { src: "/images/bottle-350.jpg?v=10", label: "350 ml", scale: 0.42 },
] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-mist pt-20 md:pt-24"
    >
      <img
        src="/images/splash.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 80% 20%, color-mix(in oklab, var(--color-aqua) 18%, transparent), transparent 70%), linear-gradient(180deg, color-mix(in oklab, var(--color-foam) 40%, transparent), var(--color-mist))",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-8 md:grid-cols-[0.92fr_1.08fr] md:gap-8 md:px-8 md:pb-6 md:pt-10">
        <div>
          <p className="rise text-xs font-semibold uppercase tracking-mark text-brand">
            Water Refilling Station · Retail A, Azure North
          </p>
          <h1 className="rise rise-2 mt-4 font-display text-5xl font-semibold leading-[1.04] tracking-display text-ink sm:text-6xl lg:text-[4.4rem]">
            <span className="italic text-brand">Pure Water.</span>
            <br />
            Fresh Living.
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Acqua Fusion is your clean and reliable water refilling station at
            Retail A, Azure North, serving homes, offices, tenants, and nearby
            businesses with refreshing drinking water every day.
          </p>
          <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => scrollToId("contact")}>
              Order Water
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToId("prices")}
            >
              View Price List
            </Button>
          </div>
          <ul className="rise rise-5 mt-10 grid grid-cols-2 gap-3">
            {BADGES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-xl bg-foam/85 px-3 py-2.5 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-mist text-brand">
                  <Icon className="size-4" />
                </span>
                <span className="text-xs font-semibold leading-tight text-ink">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rise rise-3 relative">
          <div className="absolute -left-2 -top-3 z-10 hidden rounded-full bg-foam px-4 py-2 text-xs font-semibold italic text-brand shadow-[var(--shadow-card)] md:block">
            Stay Hydrated. Live Better.
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-foam shadow-[var(--shadow-card)]">
            <img
              src="/images/hero-cluster.jpg?v=10"
              alt="Acqua Fusion 5-gallon jug and bottled water with a fresh splash"
              className="aspect-[4/3] w-full object-cover object-center md:aspect-square"
              width={1600}
              height={1200}
            />
          </div>
          <div className="absolute -bottom-4 right-3 z-10 hidden max-w-52 rounded-2xl bg-brand-deep px-4 py-3 text-foam shadow-[var(--shadow-lift)] md:block">
            <p className="flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-mark text-aqua-bright">
              <Waves className="size-3" />
              Good Water
            </p>
            <p className="mt-1 font-display text-lg italic">Brighter Days.</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-4 md:px-8">
        <div className="rounded-3xl bg-foam px-2 pb-3 pt-5 shadow-[var(--shadow-card)] sm:px-4 md:px-6 md:pb-4 md:pt-6">
          <ul className="flex items-end justify-between gap-1 [--base:5.75rem] sm:gap-2 sm:[--base:7.75rem] md:[--base:10.5rem]">
            {LINEUP.map((item) => (
              <li
                key={item.label}
                className="flex min-w-0 flex-1 flex-col items-center"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full object-contain object-bottom"
                  style={{ height: `calc(var(--base) * ${item.scale})` }}
                />
                <span className="mt-2 whitespace-nowrap text-center text-[0.55rem] font-semibold uppercase tracking-mark text-muted sm:text-[0.65rem] md:text-xs">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <WaveBand fillClassName="text-foam" />
    </section>
  );
}
