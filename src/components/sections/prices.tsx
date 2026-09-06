import { Droplets, FlaskConical, Mountain } from "lucide-react";
import { Container, Section, SectionIntro } from "@/components/layout/section";
import {
  ALKALINE,
  MINERAL,
  NA,
  PRICE_NOTE,
  PURIFIED,
  type PriceRow,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

function PriceCell({ value }: { value: string }) {
  const unavailable = value === NA;
  return (
    <span
      className={cn(
        "tabular-nums",
        unavailable ? "text-xs font-medium text-muted/70" : "font-semibold text-brand",
      )}
    >
      {unavailable ? "N/A" : value}
    </span>
  );
}

function PriceTable({
  rows,
  showCase,
}: {
  rows: PriceRow[];
  showCase?: boolean;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-64 text-left text-sm">
        <thead>
          <tr className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
            <th className="pb-3 pr-2 font-semibold">Size</th>
            <th className="px-2 pb-3 text-right font-semibold">Refill</th>
            {showCase ? (
              <th className="px-2 pb-3 text-right font-semibold">Per Case</th>
            ) : null}
            <th className="pb-3 pl-2 text-right font-semibold">With Bottle</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.size} className="border-t border-line">
              <td className="py-2.5 pr-2 font-medium text-ink">{row.size}</td>
              <td className="px-2 py-2.5 text-right">
                <PriceCell value={row.refill} />
              </td>
              {showCase ? (
                <td className="px-2 py-2.5 text-right">
                  <PriceCell value={row.perCase ?? NA} />
                </td>
              ) : null}
              <td className="py-2.5 pl-2 text-right">
                <PriceCell value={row.withBottle} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Prices() {
  return (
    <Section id="prices" className="bg-foam">
      <Container>
        <SectionIntro
          eyebrow="Transparent Rates"
          title="Suggested Retail Price"
          text="Clear refill pricing for purified, mineral, and alkaline water. N/A means that option is not offered for that size."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="flex flex-col overflow-hidden rounded-3xl bg-paper shadow-[var(--shadow-card)]">
            <header className="flex items-center gap-3 bg-brand px-5 py-4 text-foam">
              <Droplets className="size-5" />
              <div>
                <h3 className="text-sm font-bold tracking-wide">PURIFIED WATER</h3>
                <p className="text-xs text-sky">Everyday clean drinking water</p>
              </div>
            </header>
            <div className="flex-1 px-5 py-4">
              <PriceTable rows={PURIFIED} showCase />
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-3xl bg-paper shadow-[var(--shadow-card)]">
            <header className="flex items-center gap-3 bg-brand-soft px-5 py-4 text-foam">
              <Mountain className="size-5" />
              <div>
                <h3 className="text-sm font-bold tracking-wide">MINERAL WATER</h3>
                <p className="text-xs text-sky">Balanced, refreshing taste</p>
              </div>
            </header>
            <div className="flex-1 px-5 py-4">
              <PriceTable rows={MINERAL} />
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-3xl bg-paper shadow-[var(--shadow-card)]">
            <header className="flex items-center gap-3 bg-aqua px-5 py-4 text-brand-deep">
              <FlaskConical className="size-5" />
              <div>
                <h3 className="text-sm font-bold tracking-wide">ALKALINE WATER</h3>
                <p className="text-xs text-brand-deep/70">Higher pH, smoother sip</p>
              </div>
            </header>
            <div className="flex-1 px-5 py-4">
              <PriceTable rows={ALKALINE} />
            </div>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted">
          {PRICE_NOTE}
        </p>
        <p className="mt-4 text-center">
          <a
            href="/posters"
            className="text-sm font-semibold text-brand hover:text-brand-soft"
          >
            View promotional posters
          </a>
        </p>
      </Container>
    </Section>
  );
}
