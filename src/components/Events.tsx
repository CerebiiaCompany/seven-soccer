import { Calendar, MapPin, ArrowRight } from "lucide-react";

const events = [
  { type: "Tryouts", title: "Pruebas de Captación", date: "15 JUN", location: "Sede Central", tag: "Abierto" },
  { type: "Torneo", title: "Copa Seven 2026", date: "22 JUL", location: "Estadio Municipal", tag: "Inscripciones" },
  { type: "Camp", title: "Training Camp de Invierno", date: "10 AGO", location: "Sede Norte", tag: "Cupos limitados" },
  { type: "Partido", title: "Final Liga Formativa", date: "28 AGO", location: "Estadio Municipal", tag: "Destacado" },
];

export function Events() {
  return (
    <section id="events" className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Calendario</div>
            <h2 className="text-display text-4xl md:text-6xl">
              PRÓXIMOS <span className="text-gradient-neon">EVENTOS</span>
            </h2>
          </div>
          <a href="#contact" className="text-sm uppercase tracking-wider text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
            Ver todos <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {events.map((e) => {
            const [d, m] = e.date.split(" ");
            return (
              <div
                key={e.title}
                className="group glass rounded-2xl p-6 flex items-center gap-6 hover:border-primary/50 transition-all hover:-translate-x-1"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-neon flex flex-col items-center justify-center shadow-glow-soft">
                  <div className="text-display text-3xl text-primary-foreground leading-none">{d}</div>
                  <div className="text-xs uppercase text-primary-foreground/80 tracking-wider mt-1">{m}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs uppercase tracking-wider text-primary">{e.type}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">{e.tag}</span>
                  </div>
                  <div className="text-display text-xl mb-1 truncate">{e.title}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {e.location}
                  </div>
                </div>
                <Calendar className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
