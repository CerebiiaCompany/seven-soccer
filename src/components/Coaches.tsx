import coachImg from "@/assets/coach-training.jpg";
import playerImg from "@/assets/player-action.jpg";
import celebImg from "@/assets/celebration.jpg";

const coaches = [
  { name: "Carlos Mendoza", role: "Director Técnico", years: "15+ años", specialty: "Alto Rendimiento", img: coachImg },
  { name: "Andrés Rivera", role: "Coach Formación", years: "8 años", specialty: "Metodología Coerver", img: playerImg },
  { name: "Diego Salazar", role: "Preparador Físico", years: "10 años", specialty: "Neuroentrenamiento", img: celebImg },
];

export function Coaches() {
  return (
    <section id="coaches" className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Staff</div>
            <h2 className="text-display text-4xl md:text-6xl">
              CUERPO <span className="text-gradient-neon">TÉCNICO</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Profesionales certificados bajo metodología Coerver Coaching, comprometidos con el
            desarrollo integral de cada jugador.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coaches.map((c) => (
            <article
              key={c.name}
              className="group relative rounded-3xl overflow-hidden glass border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-soft"
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
      </div>
    </section>
  );
}
