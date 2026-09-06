import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";
import { Prices } from "@/components/sections/prices";
import { Products } from "@/components/sections/products";
import { Services } from "@/components/sections/services";
import { Why } from "@/components/sections/why";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-foam"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Prices />
        <Products />
        <Why />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
