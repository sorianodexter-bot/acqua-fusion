import {
  BadgeCheck,
  Building2,
  Droplets,
  MapPin,
  CircleDollarSign,
  Truck,
} from "lucide-react";
import { Container, Section, SectionIntro } from "@/components/layout/section";

const REASONS = [
  {
    icon: Droplets,
    title: "Clean and refreshing water",
    text: "Purified through a modern refill process — crisp enough for the dinner table.",
  },
  {
    icon: MapPin,
    title: "Convenient Azure North location",
    text: "Retail A puts us next to the homes and offices we serve.",
  },
  {
    icon: CircleDollarSign,
    title: "Affordable refill options",
    text: "Keep your own container. Refill pricing starts at ₱8 for 350ml.",
  },
  {
    icon: BadgeCheck,
    title: "Purified, mineral, and alkaline",
    text: "Pick the water that fits the household — not a one-size menu.",
  },
  {
    icon: Building2,
    title: "Homes, offices, tenants, businesses",
    text: "Family rounds, pantry bottles, and standing office supply.",
  },
  {
    icon: Truck,
    title: "Retail, bulk, and delivery inquiries",
    text: "Walk in, order a case, or ask us about bulk and nearby delivery.",
  },
];

export function Why() {
  return (
    <Section id="why" className="relative overflow-hidden bg-brand-deep text-foam">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/images/splash.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-brand-deep/80" />
      <Container className="relative">
        <SectionIntro
          tone="dark"
          eyebrow="The Difference"
          title="Why Choose Acqua Fusion?"
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-3xl bg-foam/8 p-5 shadow-[0_0_0_1px_rgb(244_251_254_/_0.1)]"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-aqua/20 text-aqua-bright">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-foam">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sky">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
