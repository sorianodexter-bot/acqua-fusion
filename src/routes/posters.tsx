import { createFileRoute, Link } from "@tanstack/react-router";
import { DropMark } from "@/components/brand/logo";

export const Route = createFileRoute("/posters")({ component: PostersIndex });

function PostersIndex() {
  return (
    <main className="min-h-svh bg-brand-deep px-5 py-12 text-foam">
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm font-semibold text-aqua-bright hover:text-foam">
          ← Back to Acqua Fusion
        </Link>
        <div className="mt-8 flex items-center gap-3">
          <DropMark variant="light" className="h-10 w-8" />
          <h1 className="font-display text-4xl font-semibold">Promotional posters</h1>
        </div>
        <p className="mt-3 max-w-lg text-sky">
          Ready for Facebook, stories, tarpaulin, and the website banner. Each
          poster uses the live price list.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { to: "/posters/square" as const, label: "Square Facebook Post", size: "1080 × 1080" },
            { to: "/posters/story" as const, label: "Vertical Story / Reel", size: "1080 × 1920" },
            { to: "/posters/banner" as const, label: "Landscape Website Banner", size: "1920 × 1080" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block rounded-2xl bg-foam/10 p-5 shadow-[0_0_0_1px_rgb(244_251_254_/_0.12)] transition-colors hover:bg-foam/15"
              >
                <p className="font-semibold text-foam">{item.label}</p>
                <p className="mt-1 text-sm text-sky">{item.size}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
