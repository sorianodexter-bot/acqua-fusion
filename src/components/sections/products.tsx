import { ProductShot } from "@/components/brand/product-shot";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionIntro } from "@/components/layout/section";
import { useInquiry } from "@/lib/inquiry-store";
import { PRODUCTS } from "@/lib/site-data";
import { scrollToId } from "@/lib/utils";

export function Products() {
  const setDraft = useInquiry((s) => s.setDraft);

  return (
    <Section id="products" className="bg-mist">
      <Container>
        <SectionIntro
          eyebrow="Sizes & Formats"
          title="Water for Every Need"
          text="From a 5-gallon round on the dispenser to a 350ml bottle in a bag — refill, new bottle, or case."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <li
              key={product.name}
              className="flex flex-col overflow-hidden rounded-3xl bg-foam shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="relative aspect-square">
                <ProductShot
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full"
                />
                <span className="absolute left-3 top-3 rounded-full bg-foam/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-brand">
                  {product.from}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-semibold text-ink">{product.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                  {product.blurb}
                </p>
                <Button
                  variant="secondary"
                  className="mt-4 w-full"
                  onClick={() => {
                    setDraft({
                      productName: product.name,
                      orderType: product.orderType,
                    });
                    scrollToId("contact");
                  }}
                >
                  Inquire Now
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
