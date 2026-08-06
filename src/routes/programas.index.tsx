import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  User,
  Trophy,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Calendar,
  ChevronRight,
  Shield,
  Map,

} from "lucide-react";

const programs = [
  {
    Icon: User,
    title: "Entrenamiento Personalizado",
    age: "1-on-1",
    schedule: "A convenir",
    desc: "Sesiones individuales para perfeccionar habilidades específicas, alineadas con la fase de formación del Plan Maestro que corresponde a tu categoría.",
    features: [
      "Diagnóstico técnico inicial",
      "Plan semanal a medida",
      "Retroalimentación inmediata",
      "Flexibilidad de horarios",
    ],
    color: "from-neon/15 to-primary/5",
  },
  {
    Icon: Trophy,
    title: "Competencias y Torneos",
    age: "Sub 3 a Sub 14",
    schedule: "Temporada completa",
    desc: "Competencia constante según el Plan Maestro: desde festivales de iniciación en Pre-Babys hasta ligas, torneos nacionales y giras internacionales en las categorías mayores.",
    features: [
      "Torneos locales privados y de iniciación",
      "Liga Norte y Torneo Nacional Difútbol",
      "Torneos nacionales con viaje",
      "Euro Soccer Tour Madrid / Pro Tour Brasil",
    ],
    color: "from-primary/20 to-neon/5",
  },
];


const methodology = [
  {
    title: "Técnica individual",
    desc: "Cada jugador domina el balón antes de pensar en el sistema.",
  },
  {
    title: "Duelos 1 vs 1",
    desc: "Entrenamos la creatividad y el coraje para ganar situaciones reales.",
  },
  {
    title: "Juego consciente",
    desc: "Decisiones rápidas, inteligentes y con propósito en cada posesión.",
  },
  {
    title: "Competencia sana",
    desc: "La competencia interna acelera el crecimiento sin perder la diversión.",
  },
];

export const Route = createFileRoute("/programas/")({
  head: () => ({
    meta: [
      { title: "Programas · Seven Soccer Club · Formamos Talento" },
      {
        name: "description",
        content:
          "Descubre los programas de Seven Soccer Club en Cúcuta: formación infantil, juvenil, alto rendimiento, entrenamiento personalizado y competencias. Partner Coerver Coaching.",
      },
      { property: "og:title", content: "Programas · Seven Soccer Club" },
      {
        property: "og:description",
        content:
          "Formación infantil, juvenil, alto rendimiento y competencias para futbolistas en Cúcuta, Colombia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero interno */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-neon/10 blur-[100px]" />

        <div className="container mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary glass px-4 py-2 rounded-full mb-6">
            <Shield className="h-3.5 w-3.5" />
            // Nuestros Programas
          </div>
          <h1 className="text-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6">
            ENTRENA COMO UN{" "}
            <span className="text-gradient-neon">PROFESIONAL</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Programas diseñados para cada etapa del desarrollo futbolístico, desde los primeros
            pasos hasta la élite competitiva.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Programas</span>
          </div>
        </div>
      </section>

      {/* Programas detallados */}
      <section className="relative py-20 md:py-32 bg-surface/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-6 relative">
          <Link
            to="/programas/plan-maestro"
            className="group glass-strong rounded-3xl p-6 sm:p-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className="h-14 w-14 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-glow-soft flex-shrink-0">
                <Map className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-1">
                  // Plan Maestro
                </div>
                <div className="text-display text-xl sm:text-2xl">
                  Ver plan maestro completo por categoría
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  Fase de formación, programas Coerver y competencias de cada categoría.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-neon text-primary-foreground font-bold uppercase tracking-wider text-xs sm:text-sm shadow-glow group-hover:scale-[1.02] transition-transform whitespace-nowrap">
              Ver plan maestro
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-6">
            {programs.map(({ Icon, title, age, schedule, desc, features, color }, i) => (
              <article
                key={title}
                className="group relative glass rounded-3xl p-6 sm:p-8 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >

                <div
                  className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-glow-soft flex-shrink-0">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-display text-2xl sm:text-3xl">{title}</h2>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-xs uppercase tracking-wider text-primary glass px-3 py-1 rounded-full">
                          {age}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {schedule}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-display text-5xl sm:text-6xl text-primary/5 hidden sm:block">
                    0{i + 1}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{desc}</p>

                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/573504734584"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-primary group-hover:gap-3 transition-all"
                >
                  Más info por WhatsApp <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Metodología</div>
            <h2 className="text-display text-3xl sm:text-4xl md:text-6xl mb-4">
              NUESTRO SISTEMA DE <span className="text-gradient-neon">ENTRENAMIENTO</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Combinamos la metodología Coerver Coaching con el análisis moderno del rendimiento para
              formar jugadores completos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {methodology.map(({ title, desc }, i) => (
              <div
                key={title}
                className="glass rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-display text-4xl text-primary/20 mb-4">0{i + 1}</div>
                <h3 className="text-display text-xl mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 glass-strong rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="h-16 w-16 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-glow-soft flex-shrink-0">
                <Clock className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-display text-2xl">Horarios flexibles</div>
                <p className="text-muted-foreground text-sm">
                  Entrenamientos de lunes a sábado según categoría y sede.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/573504734584"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-neon text-primary-foreground font-bold uppercase tracking-wider text-sm shadow-glow hover:scale-[1.02] transition-transform whitespace-nowrap"
            >
              Agendar una prueba
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-surface/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-6 relative text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display text-3xl sm:text-4xl md:text-6xl mb-6">
              ¿LISTO PARA EMPEZAR TU <span className="text-gradient-neon">CAMINO</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Escríbenos por WhatsApp y agenda una clase de prueba gratuita. Evaluamos al jugador y
              recomendamos el programa ideal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573504734584"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-neon text-primary-foreground font-bold uppercase tracking-wider text-sm shadow-glow hover:scale-[1.02] transition-transform"
              >
                Escribir por WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/40 hover:bg-surface/50 text-foreground font-semibold uppercase tracking-wider text-sm transition-all"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
