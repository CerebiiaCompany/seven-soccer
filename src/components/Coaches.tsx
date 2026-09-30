import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import coachImg from "@/assets/coach-training.jpg";
import playerImg from "@/assets/player-action.jpg";
import celebImg from "@/assets/celebration.jpg";

const coaches = [
  { name: "Carlos Mendoza", role: "Director Técnico", years: "15+ años", specialty: "Alto Rendimiento", img: coachImg },
  { name: "Andrés Rivera", role: "Coach Formación", years: "8 años", specialty: "Metodología Coerver", img: playerImg },
  { name: "Diego Salazar", role: "Preparador Físico", years: "10 años", specialty: "Neuroentrenamiento", img: celebImg },
];

export function Coaches() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToCard = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(i, coaches.length - 1));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - track.offsetLeft - track.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  return (
    <section id="coaches" className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Staff</div>
            <h2 className="text-display text-3xl sm:text-4xl md:text-6xl">
              CUERPO <span className="text-gradient-neon">TÉCNICO</span>
            </h2>
          </div>
          <div className="flex items-end justify-between gap-6 w-full lg:w-auto">
            <p className="text-muted-foreground max-w-md">
              Profesionales certificados bajo metodología Coerver Coaching, comprometidos con el
              desarrollo integral de cada jugador.
            </p>
            <div className="hidden sm:flex gap-2 shrink-0">
              <button
                aria-label="Anterior"
                onClick={() => scrollToCard(active - 1)}
                disabled={active === 0}
                className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Siguiente"
                onClick={() => scrollToCard(active + 1)}
                disabled={active === coaches.length - 1}
                className="h-11 w-11 rounded-full bg-gradient-neon text-primary-foreground flex items-center justify-center shadow-glow-soft hover:shadow-glow transition-shadow disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-2"
        >
          {coaches.map((c) => (
            <article
              key={c.name}
              className="group relative rounded-3xl overflow-hidden glass border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-soft snap-start shrink-0 w-[85%] sm:w-[55%] lg:w-[calc((100%-3rem)/3)]"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.name} - ${c.role}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs uppercase tracking-wider text-primary">
                  {c.years}
                </div>
              </div>
              <div className="relative -mt-20 p-6 z-10">
                <div className="text-xs uppercase tracking-wider text-primary mb-1">{c.role}</div>
                <div className="text-display text-2xl mb-2">{c.name}</div>
                <div className="text-sm text-muted-foreground border-t border-border/50 pt-3 mt-3">
                  Especialidad: <span className="text-foreground">{c.specialty}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8 sm:hidden">
          {coaches.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Ir al coach ${idx + 1}`}
              onClick={() => scrollToCard(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === active ? "w-8 bg-primary shadow-glow-soft" : "w-1.5 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
