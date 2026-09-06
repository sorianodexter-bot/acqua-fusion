import { MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { NAV, SITE } from "@/lib/site-data";
import { scrollToId } from "@/lib/utils";

const FOOTER_NAV = NAV.filter((item) => item.id !== "products");

export function Footer() {
  return (
    <footer className="bg-brand-deep text-foam">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] md:px-8 md:py-16">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs font-display text-xl italic text-foam/90">
            {SITE.tagline}
          </p>
          <p className="mt-3 flex items-start gap-2 text-sm text-sky">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            {SITE.location}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-mark text-aqua-bright">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {FOOTER_NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId(item.id);
                  }}
                  className="text-sm text-sky transition-colors hover:text-foam"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-mark text-aqua-bright">
            Visit
          </p>
          <p className="mt-4 text-sm leading-relaxed text-sky">
            Water refilling for homes, offices, tenants, and nearby businesses.
            Purified, mineral, and alkaline — refill or bottle.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("contact");
            }}
            className="mt-4 inline-flex text-sm font-semibold text-aqua-bright hover:text-foam"
          >
            Order or inquire today
          </a>
        </div>
      </div>
      <div className="border-t border-foam/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-sky/80 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            {SITE.name} · {SITE.type}
          </p>
          <p>Good Water. Brighter Days.</p>
        </div>
      </div>
    </footer>
  );
}
