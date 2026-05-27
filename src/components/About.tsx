import { Trophy, Users, Target, Flame } from "lucide-react";
import teamImg from "@/assets/team-huddle.jpg";

const values = [
  { Icon: Flame, title: "Disciplina", desc: "Compromiso diario con la mejora." },
  { Icon: Users, title: "Equipo", desc: "Antes que un jugador, una familia." },
  { Icon: Trophy, title: "Excelencia", desc: "Estándares de alto rendimiento." },
  { Icon: Target, title: "Liderazgo", desc: "Formar dentro y fuera de la cancha." },
];

const timeline = [
  { year: "2019", title: "Soccer Future Academy", desc: "Nace la academia enfocada en técnica individual." },
  { year: "2022", title: "Partner Coerver Academy", desc: "Respaldo internacional Coerver Coaching." },
  { year: "2023", title: "Seven Soccer Club", desc: "Creación del club competitivo. Partner Coerver Club." },
  { year: "Hoy", title: "13 categorías activas", desc: "De 3 a 13 años, en 3 sedes deportivas." },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-24">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-neon opacity-20 blur-2xl rounded-3xl" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-primary/20">
              <img
                src={teamImg}
                alt="Equipo Seven Soccer Club en huddle"
                loading="lazy"
                width={1024}
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-display text-4xl text-gradient-neon">UNIDOS</div>
                <div className="text-display text-4xl">SOMOS MÁS FUERTES</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-card hidden md:block">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Sedes</div>
              <div className="text-display text-4xl text-gradient-neon">03</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">// El Club</div>
            <h2 className="text-display text-4xl md:text-6xl mb-6 leading-tight">
              UN PROYECTO DE <span className="text-gradient-neon">FORMACIÓN INTEGRAL</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-5 leading-relaxed">
              Seven Soccer Club fue creado en 2023 con el objetivo de complementar el nivel de
              formación técnico a través de la competencia. Trabajamos bajo un plan integral con
              áreas de entrenamiento y zona de recuperación.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Contamos con áreas de <span className="text-foreground">neuroentrenamiento, gimnasio,
              fisioterapia, psicología deportiva</span> y proyección deportiva. Somos Partner Club
              de Coerver desde 2023.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {values.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass rounded-xl p-4 hover:border-primary/40 transition-colors group"
                >
                  <Icon className="h-6 w-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-display text-lg">{title}</div>
                  <div className="text-xs text-muted-foreground">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Trayectoria</div>
            <h3 className="text-display text-4xl md:text-5xl">
              NUESTRA <span className="text-gradient-neon">HISTORIA</span>
            </h3>
          </div>

          <div className="relative grid md:grid-cols-4 gap-6">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            {timeline.map((t, i) => (
              <div key={t.year} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative h-4 w-4 rounded-full bg-gradient-neon shadow-glow-soft">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                  </div>
                  <div className="text-display text-2xl text-gradient-neon">{t.year}</div>
                </div>
                <div className="glass rounded-2xl p-5 h-full hover:border-primary/40 transition-colors hover:-translate-y-1 duration-300">
                  <div className="text-display text-lg mb-2">{t.title}</div>
                  <div className="text-sm text-muted-foreground">{t.desc}</div>
                </div>
                <div className="absolute -top-2 -right-2 text-display text-6xl text-primary/10 -z-10">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
