import {
  Building2,
  Droplets,
  MapPin,
  Package,
  ShieldCheck,
} from "lucide-react";
import {
  LogoBadgeLockup,
  LogoDropLockup,
  LogoWaveLockup,
} from "@/components/brand/logo";
import { ProductShot } from "@/components/brand/product-shot";
import { Container, Section, SectionIntro } from "@/components/layout/section";

const HIGHLIGHTS = [
  {
    icon: MapPin,
    title: "Located at Retail A, Azure North",
    text: "Walk-in refills for residents, tenants, and neighbors of the development.",
  },
  {
    icon: Droplets,
    title: "Purified, Mineral, and Alkaline",
    text: "Three drinking-water choices, from 5-gallon rounds to 350ml bottles.",
  },
  {
    icon: Package,
    title: "Refill and bottle options",
    text: "Bring your container, or get a new bottle when you need one.",
  },
  {
    icon: Building2,
    title: "Household, office, and bulk",
    text: "Everyday family refills, pantry supply, and larger order inquiries.",
  },
  {
    icon: ShieldCheck,
    title: "Clean and reliable service",
    text: "Fresh water you can serve at the table, the office, and the shop.",
  },
];

const WATERS = [
  {
    name: "Purified Water",
    text: "Crisp, everyday drinking water through multi-stage filtration.",
    image: "/images/gallon-5.jpg?v=10",
  },
  {
    name: "Mineral Water",
    text: "A balanced, refreshing taste for the table and the office.",
    image: "/images/bottle-1l.jpg?v=10",
  },
  {
    name: "Alkaline Water",
    text: "Higher pH water for a smoother sip, from gallons to 350ml.",
    image: "/images/bottle-500.jpg?v=10",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-foam">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionIntro
              align="left"
              eyebrow="Our Station"
              title="About Acqua Fusion"
              text="Acqua Fusion is a modern water refilling station located at Retail A, Azure North. We provide clean, refreshing, and affordable drinking water for everyday household, office, and business needs."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="rounded-3xl bg-mist/70 p-4 shadow-[var(--shadow-card)]"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-foam text-brand">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative grid gap-4">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img
                src="/images/station.jpg"
                alt="Clean water refilling station with filtration machines and stacked gallons"
                className="aspect-video w-full object-cover"
                width={1600}
                height={900}
              />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img
                src="/images/kitchen.jpg"
                alt="5-gallon dispenser in a bright home kitchen"
                className="aspect-video w-full object-cover object-center"
                width={1792}
                height={1008}
              />
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-3">
          {WATERS.map((water) => (
            <li
              key={water.name}
              className="overflow-hidden rounded-3xl bg-mist/50 shadow-[var(--shadow-card)]"
            >
              <ProductShot
                src={water.image}
                alt={water.name}
                className="aspect-[4/5] bg-mist"
              />
              <div className="p-5">
                <h3 className="text-base font-semibold text-ink">{water.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {water.text}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-3xl bg-mist px-5 py-10 md:px-10">
          <p className="text-center text-xs font-semibold uppercase tracking-mark text-aqua">
            Brand Marks
          </p>
          <h3 className="mt-2 text-center font-display text-2xl font-semibold text-ink">
            Three lockups, one station
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-muted">
            Built for bottles, gallons, signage, stickers, delivery rounds, and
            calling cards — readable at a glance, even at small sizes.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <figure className="rounded-3xl bg-foam px-4 py-8 shadow-[var(--shadow-card)]">
              <LogoDropLockup />
              <figcaption className="mt-6 text-center text-xs font-medium text-muted">
                1 · Minimal water-drop
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center rounded-3xl bg-foam px-4 py-8 shadow-[var(--shadow-card)]">
              <LogoWaveLockup />
              <figcaption className="mt-6 text-center text-xs font-medium text-muted">
                2 · Modern wave + text
              </figcaption>
            </figure>
            <figure className="rounded-3xl bg-foam px-4 py-8 shadow-[var(--shadow-card)]">
              <LogoBadgeLockup />
              <figcaption className="mt-6 text-center text-xs font-medium text-muted">
                3 · Premium station badge
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </Section>
  );
}
