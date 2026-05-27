import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    name: "María Fernández",
    role: "Madre · Categoría sub-10",
    quote: "Mi hijo no solo mejoró técnicamente, también ganó disciplina y amigos para toda la vida. El staff es excepcional.",
  },
  {
    name: "Mateo Ríos",
    role: "Jugador · Categoría sub-13",
    quote: "Llegué siendo tímido en el campo. Hoy compito en los duelos 1 vs 1 con confianza. Seven me dio mi mejor versión.",
  },
  {
    name: "Roberto Vargas",
    role: "Padre · Categoría sub-7",
    quote: "El plan integral con psicología y neuroentrenamiento marca la diferencia. Se nota la seriedad del proyecto.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = items[i];
  return (
    <section className="relative py-20 md:py-32 bg-surface/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Voces</div>
          <h2 className="text-display text-4xl md:text-6xl">
            LO QUE DICE LA <span className="text-gradient-neon">FAMILIA SEVEN</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative glass-strong rounded-3xl p-8 md:p-12 shadow-card">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            <div className="relative">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p key={i} className="text-xl md:text-2xl leading-relaxed mb-8 animate-[fade-up_0.5s_ease-out]">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-display text-lg">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setI((i - 1 + items.length) % items.length)}
                    className="h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setI((i + 1) % items.length)}
                    className="h-10 w-10 rounded-full bg-gradient-neon text-primary-foreground flex items-center justify-center shadow-glow-soft hover:shadow-glow transition-shadow"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-primary shadow-glow-soft" : "w-1.5 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
