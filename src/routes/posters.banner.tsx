import { createFileRoute } from "@tanstack/react-router";
import { BannerPoster, PosterChrome } from "@/components/poster-art";

export const Route = createFileRoute("/posters/banner")({
  component: BannerPosterPage,
});

function BannerPosterPage() {
  return (
    <PosterChrome title="Banner · 1920 × 1080">
      <BannerPoster />
    </PosterChrome>
  );
}
