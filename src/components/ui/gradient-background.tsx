/**
 * The warm, calm backdrop for the whole app: a cream canvas with a few soft,
 * out-of-focus colour blobs drifting behind the content. Fixed + non-interactive.
 * Colourful sections sit on top of it; transparent ones let the warmth show through.
 */
export function GradientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas"
      aria-hidden
    >
      <div className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-secondary/45 blur-[70px]" />
      <div className="absolute -right-14 top-1/3 h-64 w-64 rounded-full bg-primary/25 blur-[80px]" />
      <div className="absolute bottom-28 left-1/4 h-56 w-56 rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-secondary/30 blur-[70px]" />
    </div>
  );
}
