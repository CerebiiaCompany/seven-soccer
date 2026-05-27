import { Play } from "lucide-react";
import bgImg from "@/assets/celebration.jpg";

export function Highlights() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-primary/20 group">
          <img
            src={bgImg}
            alt="Highlights del club"
            loading="lazy"
            width={1080}
            height={1920}
            className="w-full h-[60vh] md:h-[75vh] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <button className="relative mb-8 group/play">
              <div className="absolute inset-0 rounded-full bg-primary/40 blur-2xl group-hover/play:bg-primary/60 transition-colors" />
              <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-neon flex items-center justify-center shadow-glow animate-glow-pulse">
                <Play className="h-8 w-8 md:h-10 md:w-10 text-primary-foreground ml-1.5" fill="currentColor" />
              </div>
            </button>

            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Highlights</div>
            <h2 className="text-display text-3xl sm:text-4xl md:text-7xl max-w-3xl leading-tight px-2">
              VIVE LA PASIÓN DEL <span className="text-gradient-neon">SEVEN</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mt-4">
              Mira los mejores momentos de nuestros entrenamientos, partidos y celebraciones.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-neon text-primary-foreground font-bold uppercase tracking-wider text-sm shadow-glow hover:scale-105 transition-transform"
            >
              Sé parte del club
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
