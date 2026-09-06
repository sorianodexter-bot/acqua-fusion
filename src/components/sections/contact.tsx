import { InquiryForm } from "@/components/inquiry-form";
import { Container, Section, SectionIntro } from "@/components/layout/section";

export function Contact() {
  return (
    <Section id="contact" className="bg-mist">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionIntro
              align="left"
              eyebrow="Let’s Hydrate"
              title="Order or Inquire Today"
              text="Tell us what you need — refill, new bottle, case, or bulk. We’ll confirm availability from Retail A, Azure North."
            />
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img
                src="/images/pour.jpg"
                alt="Crystal-clear water pouring into a glass"
                className="aspect-video w-full object-cover"
                width={1600}
                height={1200}
              />
            </div>
          </div>
          <div className="rounded-3xl bg-foam p-5 shadow-[var(--shadow-card)] md:p-8">
            <InquiryForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
