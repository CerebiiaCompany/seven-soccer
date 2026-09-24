export function Highlights() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-primary/20 group">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

          {/* Header */}
          <div className="relative flex flex-col items-center justify-center text-center px-6 pt-10 md:pt-14">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Highlights</div>
            <h2 className="text-display text-3xl sm:text-4xl md:text-7xl max-w-3xl leading-tight px-2">
              VIVE LA PASIÓN DEL <span className="text-gradient-neon">SEVEN</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mt-4">
              Mira los mejores momentos de nuestros entrenamientos, partidos y celebraciones.
            </p>
          </div>

          {/* Embedded YouTube video */}
          <div className="relative px-4 md:px-8 pb-10 md:pb-14 pt-8 md:pt-10">
            <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden border border-primary/30 shadow-glow">
              <div className="absolute -inset-1 bg-gradient-neon opacity-20 blur-2xl rounded-2xl pointer-events-none" />
              <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/Lzr4v8oxMbA?start=1&rel=0"
                  title="Highlights Seven Soccer Club"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative flex justify-center pb-10 md:pb-14">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-neon text-primary-foreground font-bold uppercase tracking-wider text-sm shadow-glow hover:scale-105 transition-transform"
            >
              Sé parte del club
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
