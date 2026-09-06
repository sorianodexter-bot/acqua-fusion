import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Droplets,
  FlaskConical,
  Mountain,
  Package,
  Store,
  Truck,
  GlassWater,
} from "lucide-react";
import { Container, Section, SectionIntro } from "@/components/layout/section";
import { SERVICES } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  droplets: Droplets,
  mountain: Mountain,
  flask: FlaskConical,
  container: Package,
  bottle: GlassWater,
  building: Building2,
  truck: Truck,
  store: Store,
};

export function Services() {
  return (
    <Section id="services" className="bg-mist">
      <Container>
        <SectionIntro
          eyebrow="What We Do"
          title="Our Services"
          text="Refills, bottles, cases, and supply for the people who live and work around Azure North."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Droplets;
            return (
              <li
                key={service.title}
                className="rounded-3xl bg-foam p-5 shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-mist text-brand">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
