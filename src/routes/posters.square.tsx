import { createFileRoute } from "@tanstack/react-router";
import { PosterChrome, SquarePoster } from "@/components/poster-art";

export const Route = createFileRoute("/posters/square")({
  component: SquarePosterPage,
});

function SquarePosterPage() {
  return (
    <PosterChrome title="Square · 1080 × 1080">
      <SquarePoster />
    </PosterChrome>
  );
}
