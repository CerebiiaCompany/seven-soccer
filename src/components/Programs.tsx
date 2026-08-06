import { Link } from "@tanstack/react-router";
import { User, Trophy, ArrowUpRight, Map } from "lucide-react";

const programs = [
  { Icon: User, title: "Entrenamiento Personalizado", age: "1-on-1", desc: "Sesiones individuales para perfeccionar habilidades específicas según el Plan Maestro de tu categoría." },
  { Icon: Trophy, title: "Competencias y Torneos", age: "Sub 3 a Sub 14", desc: "Ligas, torneos locales, nacionales e internacionales según la fase de formación de cada categoría." },
];


export function Programs() {
  return (
    <section id="programs" className="relative py-20 md:py-32 bg-surface/40">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Programas</div>
          <h2 className="text-display text-3xl sm:text-4xl md:text-6xl mb-4">
            ENTRENA COMO UN <span className="text-gradient-neon">PROFESIONAL</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Desarrollamos futbolistas con habilidad en los duelos 1 vs 1, bajo ejercicios que
            les permitan memorizar movimientos propios del juego.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {programs.map(({ Icon, title, age, desc }, i) => (
            <div
              key={title}
              className="group relative glass rounded-2xl p-5 sm:p-7 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >

              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex items-start justify-between mb-6">
                <div className="h-14 w-14 rounded-xl bg-gradient-neon flex items-center justify-center shadow-glow-soft">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="text-xs uppercase tracking-wider text-primary glass px-3 py-1 rounded-full">
                  {age}
                </span>
              </div>

              <h3 className="text-display text-2xl mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{desc}</p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-primary group-hover:gap-3 transition-all"
              >
                Más info <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="absolute bottom-3 right-4 text-display text-6xl text-primary/5">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
