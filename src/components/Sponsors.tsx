const sponsors = ["COERVER", "MARALOP", "ADIDAS", "NIKE", "PUMA", "POWERADE", "GATORADE", "UMBRO"];

export function Sponsors() {
  return (
    <section className="relative py-20 border-y border-border bg-surface/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          // Sponsors & Partners Oficiales
        </div>
      </div>
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...sponsors, ...sponsors].map((s, i) => (
            <div
              key={i}
              className="text-display text-3xl md:text-4xl text-muted-foreground/40 hover:text-primary transition-colors tracking-widest flex-shrink-0"
            >
              {s}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
