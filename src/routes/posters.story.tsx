import { createFileRoute } from "@tanstack/react-router";
import { PosterChrome, StoryPoster } from "@/components/poster-art";

export const Route = createFileRoute("/posters/story")({
  component: StoryPosterPage,
});

function StoryPosterPage() {
  return (
    <PosterChrome title="Story · 1080 × 1920">
      <StoryPoster />
    </PosterChrome>
  );
}
