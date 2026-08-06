import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Network,
  ClipboardList,
  Dumbbell,
  HeartPulse,
  Brain,
  Apple,
  Landmark,
  Search,
  Video,
  Megaphone,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Quote,
} from "lucide-react";

const areas = [
  {
    Icon: ClipboardList,
    title: "ÁREA DE COMPETENCIA Y METODOLOGÍA",
    lead: "Brayan Osorio — Coordinador de Metodología",
    goal: "Diseñar y supervisar el modelo metodológico y la identidad de juego del club.",
    functions: [
      "Planificación de entrenamientos",
      "Diseño del modelo de juego",
      "Calendario deportivo",
    ],
  },
  {
    Icon: Dumbbell,
    title: "ÁREA DE RENDIMIENTO FÍSICO",
    lead: "Andrés Acevedo — Preparador Físico / Coordinador Deportivo",
    goal: "Optimizar el desarrollo físico según cada etapa de formación.",
    functions: [
      "Valoraciones físicas periódicas",
      "Prevención de lesiones",
      "Control de cargas",
    ],
  },
  {
    Icon: HeartPulse,
    title: "ÁREA DE REHABILITACIÓN Y SALUD DEPORTIVA",
    lead: "Sara Rojas — Fisioterapia",
    goal: "Garantizar una recuperación segura e integral del deportista.",
    functions: [
      "Atención de lesiones",
      "Procesos de rehabilitación",
      "Reintegro deportivo",
    ],
  },
  {
    Icon: Brain,
    title: "ÁREA DE PSICOLOGÍA Y NEUROENTRENAMIENTO",
    lead: "Daniel García — Psicólogo Deportivo",
    goal: "Fortalecer las habilidades mentales y emocionales del jugador.",
    functions: [
      "Entrenamiento mental",
      "Concentración y toma de decisiones",
      "Acompañamiento a familias",
    ],
  },
  {
    Icon: Apple,
    title: "ÁREA DE NUTRICIÓN DEPORTIVA",
    lead: "Alianza con Caleb Sport",
    goal: "Promover hábitos alimenticios que favorezcan crecimiento y rendimiento.",
    functions: [
      "Valoraciones nutricionales",
      "Planes de alimentación",
      "Educación a familias",
    ],
  },
  {
    Icon: Landmark,
    title: "ÁREA FINANCIERA E INSTITUCIONAL",
    goal: "Garantizar la sostenibilidad económica y el crecimiento institucional del club.",
    functions: [
      "Convenios y alianzas",
      "Patrocinios",
      "Innovación y proyección institucional",
    ],
  },
  {
    Icon: Search,
    title: "ÁREA DE CAPTACIÓN Y PROYECCIÓN DEPORTIVA",
    goal: "Identificar y proyectar jugadores con alto potencial.",
    functions: [
      "Scouting interno y externo",
      "Evaluación de talento",
      "Relación con clubes profesionales",
    ],
  },
  {
    Icon: Video,
    title: "ÁREA DE VIDEOANÁLISIS Y TECNOLOGÍA",
    goal: "Usar tecnología para analizar el rendimiento individual y colectivo.",
    functions: [
      "Análisis de partidos y entrenamientos",
      "Informes técnicos",
      "Contenido audiovisual",
    ],
  },
  {
    Icon: Megaphone,
    title: "ÁREA DE COMUNICACIONES Y MARKETING",
    lead: "Marcela Flórez — Comunicadora Social",
    goal: "Fortalecer la imagen institucional y la comunicación con las familias.",
    functions: ["Redes sociales", "Cobertura de eventos", "Fortalecimiento de marca"],
  },
  {
    Icon: ShieldCheck,
    title: "ÁREA DE ÉTICA, CONVIVENCIA Y PROTECCIÓN DEL JUGADOR",
    goal: "Garantizar un entorno seguro y respetuoso, protegiendo integralmente a los jugadores.",
    functions: [
      "Código de ética",
      "Protección de niños, niñas y adolescentes",
      "Prevención de acoso y violencia",
    ],
  },
];

export const Route = createFileRoute("/estructura")({
  head: () => ({
    meta: [
      { title: "Estructura del Club · Seven Soccer Club" },
      {
        name: "description",
        content:
          "Conoce la estructura organizacional de Seven Soccer Club en Cúcuta: dirección deportiva y diez áreas de trabajo interdisciplinario al servicio del jugador.",
      },
      { property: "og:title", content: "Estructura del Club · Seven Soccer Club" },
      {
        property: "og:description",
        content:
          "Un club, diez áreas, un solo objetivo: formar mejores futbolistas y mejores personas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EstructuraPage,
});

function EstructuraPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-neon/10 blur-[100px]" />

        <div className="container mx-auto px-6 relative text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary glass px-4 py-2 rounded-full mb-6">
            <Network className="h-3.5 w-3.5" />
            // Organización
          </div>
          <h1 className="text-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-7xl mb-6">
            UN CLUB, DIEZ ÁREAS,{" "}
            <span className="text-gradient-neon">UN SOLO OBJETIVO</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Detrás de cada jugador hay un equipo interdisciplinario trabajando de forma
            articulada. Así está organizado Seven Soccer Club.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Estructura</span>
          </div>
        </div>
      </section>

      {/* Dirección + grilla de áreas */}
      <section className="relative py-16 md:py-28 bg-surface/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-6 relative">
          {/* Dirección deportiva */}
          <div className="relative glass-strong rounded-3xl p-7 sm:p-10 mb-8 overflow-hidden border border-primary/30 shadow-glow-soft">
            <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="h-16 w-16 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-glow flex-shrink-0">
                <Network className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-2">
                  // Liderazgo
                </div>
                <h2 className="text-display text-2xl sm:text-3xl md:text-4xl mb-2">
                  DIRECCIÓN <span className="text-gradient-neon">DEPORTIVA</span>
                </h2>
                <div className="text-display text-lg sm:text-xl mb-2">Andel Nieto</div>
                <p className="text-muted-foreground">
                  Lidera la articulación de todas las áreas estratégicas del club.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ Icon, title, lead, goal, functions }, i) => (
              <article
                key={title}
                className="group glass rounded-3xl p-6 sm:p-7 relative overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 right-5 text-display text-4xl text-primary/10 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative h-14 w-14 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-glow-soft mb-5">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>

                <h3 className="text-display text-lg sm:text-xl leading-snug mb-3 relative pr-10">
                  {title}
                </h3>

                {lead && (
                  <div className="relative text-xs uppercase tracking-wider text-primary glass px-3 py-1.5 rounded-full inline-block mb-4">
                    {lead}
                  </div>
                )}

                <p className="relative text-sm text-muted-foreground mb-5 leading-relaxed">
                  {goal}
                </p>

                <ul className="space-y-2.5 relative">
                  {functions.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cita destacada */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[130px]" />
        <div className="container mx-auto px-6 relative text-center max-w-4xl">
          <Quote className="h-10 w-10 text-primary mx-auto mb-6 opacity-70" />
          <p className="text-display text-2xl sm:text-3xl md:text-4xl leading-tight">
            “Formar mejores futbolistas y, sobre todo,{" "}
            <span className="text-gradient-neon">mejores personas</span> — combinando
            excelencia deportiva, desarrollo humano, innovación y protección.”
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-surface/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-6 relative text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display text-3xl sm:text-4xl md:text-6xl mb-6">
              ¿QUIERES CONOCER MÁS DEL{" "}
              <span className="text-gradient-neon">CLUB</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Escríbenos por WhatsApp y te contamos cómo trabaja cada área con nuestros
              jugadores.
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
                to="/programas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border hover:border-primary/40 hover:bg-surface/50 text-foreground font-semibold uppercase tracking-wider text-sm transition-all"
              >
                Ver programas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
