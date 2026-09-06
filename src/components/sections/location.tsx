import { Clock, Facebook, MapPin, Phone, Truck } from "lucide-react";
import { Container, Section, SectionIntro } from "@/components/layout/section";
import { SITE } from "@/lib/site-data";

const DETAILS = [
  {
    icon: Phone,
    label: "Mobile Number",
    value: "__________________",
    hint: "Send an inquiry and we will share our number.",
  },
  {
    icon: Facebook,
    label: "Facebook Page",
    value: "__________________",
    hint: "Search Acqua Fusion · Azure North",
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: "__________________",
    hint: SITE.hours,
  },
  {
    icon: Truck,
    label: "Delivery Area",
    value: "__________________",
    hint: SITE.delivery,
  },
];

export function Location() {
  return (
    <Section id="location" className="bg-foam">
      <Container>
        <SectionIntro
          eyebrow="Find the Station"
          title="Visit Us"
          text="Acqua Fusion is located at Retail A, Azure North."
        />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/images/shop-exterior.jpg"
              alt="Water refilling shop at a tropical condominium development"
              className="aspect-video w-full object-cover"
              width={1600}
              height={700}
            />
            <div className="relative bg-mist">
              <p className="sr-only">Google Map Embed Here</p>
              <iframe
                title="Acqua Fusion at Azure North"
                src={SITE.mapEmbed}
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="flex items-center gap-2 px-4 py-3 text-sm text-ink">
                <MapPin className="size-4 text-brand" />
                {SITE.location}
              </p>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {DETAILS.map(({ icon: Icon, label, value, hint }) => (
              <li
                key={label}
                className="rounded-3xl bg-mist/80 p-5 shadow-[var(--shadow-card)]"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-foam text-brand">
                  <Icon className="size-4" />
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-mark text-aqua">
                  {label}
                </p>
                <p className="mt-1 font-mono text-sm tracking-wide text-muted">
                  {value}
                </p>
                <p className="mt-1 text-sm text-ink">{hint}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
