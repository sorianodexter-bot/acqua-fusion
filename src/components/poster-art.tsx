import type { ReactNode } from "react";
import {
  Building2,
  Droplets,
  FlaskConical,
  Heart,
  Home,
  MapPin,
  Mountain,
  ShieldCheck,
  Store,
  Truck,
  Users,
  Leaf,
} from "lucide-react";
import { DropMark, LeafAccent, WaveRule } from "@/components/brand/logo";
import {
  ALKALINE,
  MINERAL,
  NA,
  PRICE_NOTE,
  PURIFIED,
  SITE,
  type PriceRow,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

function MiniTable({
  title,
  icon,
  rows,
  showCase,
  accent,
}: {
  title: string;
  icon: ReactNode;
  rows: PriceRow[];
  showCase?: boolean;
  accent: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-foam shadow-[0_0_0_1px_rgb(14_44_64_/_0.08)]">
      <div
        className={cn(
          "flex items-center justify-center gap-2 px-3 py-2.5 text-center text-[12px] font-extrabold tracking-wide",
          accent,
        )}
      >
        {icon}
        {title}
      </div>
      <table className="w-full text-[11px]">
        <thead>
          <tr className="text-[9px] uppercase tracking-wide text-muted">
            <th className="px-2.5 py-2 text-left font-semibold">Size</th>
            <th className="px-1 py-2 text-right font-semibold">Refill</th>
            {showCase ? (
              <th className="px-1 py-2 text-right font-semibold">Case</th>
            ) : null}
            <th className="px-2.5 py-2 text-right font-semibold">+ Bottle</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.size} className="border-t border-line/80">
              <td className="px-2.5 py-1.5 font-medium text-ink">{row.size}</td>
              <td className="px-1 py-1.5 text-right font-semibold tabular-nums text-brand">
                {row.refill}
              </td>
              {showCase ? (
                <td className="px-1 py-1.5 text-right tabular-nums text-muted">
                  {row.perCase === NA ? "—" : row.perCase}
                </td>
              ) : null}
              <td className="px-2.5 py-1.5 text-right tabular-nums text-muted">
                {row.withBottle === NA ? "—" : row.withBottle}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PosterLogo() {
  return (
    <div className="flex items-center gap-3">
      <DropMark className="h-14 w-11" />
      <div className="leading-none">
        <p className="text-[2rem] font-extrabold tracking-tight text-brand">ACQUA</p>
        <p className="mt-1 text-[11px] font-bold tracking-fusion text-aqua">FUSION</p>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-mark text-muted">
          Water Refilling Station
        </p>
      </div>
    </div>
  );
}

const FEATURES = [
  { icon: Droplets, label: "High Quality Filtration" },
  { icon: ShieldCheck, label: "Safe & Reliable" },
  { icon: Leaf, label: "Refreshing Taste" },
  { icon: Users, label: "Homes, Offices & Businesses" },
];

const FOOTER_POINTS = [
  { icon: Home, label: "Household Refills" },
  { icon: Building2, label: "Office Supply" },
  { icon: Truck, label: "Bulk Orders & Delivery" },
  { icon: MapPin, label: "Convenient Location" },
];

export function SquarePoster() {
  return (
    <article className="relative flex h-[1080px] w-[1080px] flex-col overflow-hidden bg-mist text-ink">
      <img
        src="/images/splash.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <LeafAccent className="absolute -left-6 top-16 h-28 w-24 rotate-[-20deg] text-brand-soft opacity-40" />
      <LeafAccent className="absolute -right-4 top-8 h-24 w-20 rotate-[25deg] text-aqua opacity-50" />
      <LeafAccent className="absolute bottom-24 left-4 h-20 w-16 rotate-[12deg] text-brand opacity-30" />

      <div className="relative flex h-full flex-col px-10 py-8">
        <header className="flex items-start justify-between">
          <PosterLogo />
          <div className="flex size-28 flex-col items-center justify-center rounded-full bg-foam text-center shadow-[var(--shadow-card)]">
            <p className="font-display text-[15px] italic leading-tight text-brand">
              Stay Hydrated
            </p>
            <WaveRule className="my-1 w-12" />
            <p className="font-display text-[15px] italic leading-tight text-brand">
              Live Better
            </p>
          </div>
        </header>

        <div className="mt-5 grid grid-cols-[1.05fr_0.95fr] items-end gap-5">
          <div>
            <h1 className="font-display text-[3.4rem] font-semibold leading-[0.95] tracking-display text-ink">
              <span className="italic text-brand">Pure Water.</span>
              <br />
              Fresh Living.
            </h1>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-mark text-muted">
              Clean · Safe · Refreshing · Everyday
            </p>
            <ul className="mt-5 grid grid-cols-4 gap-2">
              {FEATURES.map(({ icon: Icon, label }) => (
                <li key={label} className="flex flex-col items-center text-center">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand text-foam">
                    <Icon className="size-4" />
                  </span>
                  <span className="mt-1.5 text-[9px] font-semibold leading-tight text-ink">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/images/hero-cluster.jpg?v=10"
              alt=""
              className="h-56 w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center gap-4 rounded-full bg-brand px-10 py-2.5 text-foam shadow-[var(--shadow-lift)]">
            <span className="h-px w-10 bg-foam/40" />
            <p className="text-[13px] font-bold tracking-[0.35em]">PRICE LIST</p>
            <span className="h-px w-10 bg-foam/40" />
          </div>
        </div>

        <div className="mt-4 grid flex-1 grid-cols-3 gap-3">
          <MiniTable
            title="PURIFIED WATER"
            icon={<Droplets className="size-3.5" />}
            rows={PURIFIED}
            showCase
            accent="bg-brand text-foam"
          />
          <MiniTable
            title="MINERAL WATER"
            icon={<Mountain className="size-3.5" />}
            rows={MINERAL}
            accent="bg-brand-soft text-foam"
          />
          <MiniTable
            title="ALKALINE WATER"
            icon={<FlaskConical className="size-3.5" />}
            rows={ALKALINE}
            accent="bg-aqua text-brand-deep"
          />
        </div>

        <div className="mt-4 flex items-end justify-between gap-4">
          <p className="font-display text-2xl italic leading-none text-brand">
            Water for a<br />
            Healthier Tomorrow
          </p>
          <ul className="flex gap-3">
            {FOOTER_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex w-20 flex-col items-center text-center">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-foam text-brand shadow-[var(--shadow-card)]">
                  <Icon className="size-4" />
                </span>
                <span className="mt-1 text-[9px] font-semibold leading-tight text-ink">
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex size-20 flex-col items-center justify-center rounded-full bg-brand text-center text-foam">
            <Heart className="size-4 fill-foam text-foam" />
            <p className="mt-1 text-[8px] font-bold leading-tight tracking-wide">
              GOOD WATER
              <br />
              BRIGHTER DAYS
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between bg-brand-deep px-10 py-3 text-foam">
        <p className="flex items-center gap-2 text-sm font-semibold">
          <MapPin className="size-4 text-aqua-bright" />
          {SITE.location}
        </p>
        <p className="text-xs font-bold tracking-[0.28em] text-aqua-bright">
          ACQUA FUSION
        </p>
        <p className="text-sm italic text-sky">{SITE.tagline}</p>
      </div>
    </article>
  );
}

export function StoryPoster() {
  return (
    <article className="relative flex h-[1920px] w-[1080px] flex-col overflow-hidden bg-mist text-ink">
      <img
        src="/images/splash.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-28"
      />
      <LeafAccent className="absolute right-4 top-24 h-24 w-20 rotate-[18deg] text-aqua opacity-50" />
      <div className="relative flex h-full flex-col px-12 py-14">
        <div className="flex items-start justify-between">
          <PosterLogo />
          <div className="flex size-28 flex-col items-center justify-center rounded-full bg-foam text-center shadow-[var(--shadow-card)]">
            <p className="font-display text-[15px] italic leading-tight text-brand">
              Stay Hydrated
              <br />
              Live Better
            </p>
          </div>
        </div>
        <h1 className="mt-10 font-display text-7xl font-semibold leading-[0.95] tracking-display">
          <span className="italic text-brand">Pure Water.</span>
          <br />
          Fresh Living.
        </h1>
        <p className="mt-4 text-lg text-muted">
          Water Refilling Station · {SITE.location}
        </p>
        <ul className="mt-6 grid grid-cols-4 gap-3">
          {FEATURES.map(({ icon: Icon, label }) => (
            <li key={label} className="flex flex-col items-center text-center">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand text-foam">
                <Icon className="size-5" />
              </span>
              <span className="mt-2 text-[11px] font-semibold leading-tight text-ink">
                {label}
              </span>
            </li>
          ))}
        </ul>
        <div className="relative mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
          <img
            src="/images/hero-cluster.jpg?v=10"
            alt=""
            className="h-[420px] w-full object-cover"
          />
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center gap-4 rounded-full bg-brand px-10 py-2.5 text-foam">
            <span className="h-px w-10 bg-foam/40" />
            <p className="text-sm font-bold tracking-[0.35em]">PRICE LIST</p>
            <span className="h-px w-10 bg-foam/40" />
          </div>
        </div>
        <div className="mt-5 grid flex-1 grid-cols-1 gap-4">
          <MiniTable
            title="PURIFIED WATER"
            icon={<Droplets className="size-3.5" />}
            rows={PURIFIED}
            showCase
            accent="bg-brand text-foam"
          />
          <MiniTable
            title="MINERAL WATER"
            icon={<Mountain className="size-3.5" />}
            rows={MINERAL}
            accent="bg-brand-soft text-foam"
          />
          <MiniTable
            title="ALKALINE WATER"
            icon={<FlaskConical className="size-3.5" />}
            rows={ALKALINE}
            accent="bg-aqua text-brand-deep"
          />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">{PRICE_NOTE}</p>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-base font-semibold text-brand">
            {SITE.location} · {SITE.city}
          </p>
          <p className="font-display text-xl italic text-brand">
            Good Water. Brighter Days.
          </p>
        </div>
      </div>
    </article>
  );
}

export function BannerPoster() {
  return (
    <article className="relative flex h-[1080px] w-[1920px] overflow-hidden bg-mist text-ink">
      <img
        src="/images/splash.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <LeafAccent className="absolute left-8 top-8 h-24 w-20 -rotate-12 text-brand-soft opacity-40" />
      <div className="relative grid h-full grid-cols-[0.9fr_1.1fr] gap-10 px-14 py-12">
        <div className="flex flex-col">
          <PosterLogo />
          <h1 className="mt-8 font-display text-7xl font-semibold leading-[0.95] tracking-display">
            <span className="italic text-brand">Pure Water.</span>
            <br />
            Fresh Living.
          </h1>
          <WaveRule className="mt-4 w-32" />
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Clean, safe, refreshing drinking water for homes, offices, and nearby
            businesses at {SITE.location}.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {FEATURES.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand text-foam">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm font-semibold text-ink">{label}</span>
              </li>
            ))}
          </ul>
          <div className="relative mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/images/hero-cluster.jpg?v=10"
              alt=""
              className="h-[300px] w-full object-cover"
            />
          </div>
          <p className="mt-auto pt-6 text-base font-semibold text-brand">
            {SITE.location} · {SITE.city}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 rounded-full bg-brand px-8 py-2 text-foam">
              <p className="text-sm font-bold tracking-[0.35em]">PRICE LIST</p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-mark text-aqua">
              Suggested Retail Price
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <MiniTable
              title="PURIFIED"
              icon={<Droplets className="size-3.5" />}
              rows={PURIFIED}
              showCase
              accent="bg-brand text-foam"
            />
            <MiniTable
              title="MINERAL"
              icon={<Mountain className="size-3.5" />}
              rows={MINERAL}
              accent="bg-brand-soft text-foam"
            />
            <MiniTable
              title="ALKALINE"
              icon={<FlaskConical className="size-3.5" />}
              rows={ALKALINE}
              accent="bg-aqua text-brand-deep"
            />
          </div>
          <p className="text-sm leading-relaxed text-muted">{PRICE_NOTE}</p>
          <div className="mt-auto flex items-center justify-between rounded-2xl bg-brand-deep px-6 py-4 text-foam">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <Store className="size-4 text-aqua-bright" />
              Walk in · Retail pick-up · Bulk inquiries
            </p>
            <p className="font-display text-xl italic">Good Water. Brighter Days.</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function PosterChrome({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-svh bg-brand-deep text-foam">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm">
        <a href="/" className="font-semibold text-aqua-bright hover:text-foam">
          ← Back to Acqua Fusion
        </a>
        <span className="text-sky">{title}</span>
      </div>
      <div className="flex justify-center overflow-auto px-4 pb-10">
        <div
          id="poster-root"
          className="origin-top scale-[0.42] sm:scale-50 md:scale-[0.62] lg:scale-75 xl:scale-90"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
