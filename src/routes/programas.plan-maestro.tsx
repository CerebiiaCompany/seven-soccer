import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Baby,
  Sparkles,
  Zap,
  Crown,
  Rocket,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Map,
  MapPin,
  Flag,
  Globe,
  Target,
  Trophy,
  Dumbbell,
} from "lucide-react";

const categories = [
  {
    id: "pre-babys",
    Icon: Baby,
    name: "PRE-BABYS",
    age: "Sub 3 a Sub 5",
    years: "2021 - 2023",
    phase: "FIRST SKILLS",
    coerver: ["Coerver Academy", "1 vs 1", "3 vs 3", "Festivales"],
    competitions: ["Torneos locales de iniciación"],
  },
  {
    id: "babys",
    Icon: Sparkles,
    name: "BABYS",
    age: "Sub 6 a Sub 8",
    years: "2018 - 2020",
    phase: "CHAMPIONS ACADEMY",
    coerver: ["Coerver Academy", "3 vs 3", "Elite Soccer Camp"],
    competitions: ["Torneo Local Privado", "Liga", "Torneo Nacional de Viaje"],
  },
  {
    id: "pre-infantil",
    Icon: Zap,
    name: "PRE-INFANTIL",
    age: "Sub 9 a Sub 11",
    years: "2015 - 2017",
    phase: "PERFORMANCE ACADEMY FASE 1",
    coerver: [
      "Coerver Academy",
      "Coerver Cup",
      "International ProCamp",
      "Elite Soccer Camp",
    ],
    competitions: [
      "Torneo Local Privado",
      "Liga Norte",
      "Torneo Nacional (local y con viaje)",
      "3 vs 3",
    ],
  },
  {
    id: "infantil",
    Icon: Crown,
    name: "INFANTIL A y B",
    age: "Sub 12 a Sub 13",
    years: "2013 - 2014",
    phase: "PERFORMANCE ACADEMY FASE 2",
    coerver: [
      "Coerver Academy",
      "Pro Tour Brasil / Europa",
      "International ProCamp / National Squad",
      "High Performance Camp",
      "Elite Soccer Camp",
    ],
    competitions: [
      "Torneo Local Privado",
      "Liga Norte",
      "Torneo Nacional Difútbol",
      "Torneo Nacional con viaje",
      "Torneo Internacional con viaje (Madrid)",
    ],
  },
  {
    id: "sub-14",
    Icon: Rocket,
    name: "SUB 14",
    age: "Sub 14",
    years: "2012",
    phase: "PERFORMANCE ACADEMY FASE 3",
    coerver: ["High Performance (Coerver Coaching)", "Coerver Stage"],
    competitions: [
      "Liga Norte",
      "Torneo Local con viaje",
      "Torneo Nacional con viaje",
      "Euro Soccer Tour Madrid (septiembre)",
    ],
  },
];

const levels = [
  {
    Icon: MapPin,
    title: "REGIONAL",
    items: [
      "Plan Maestro por categoría",
      "Entrenamiento semanal",
      "Torneos locales",
    ],
  },
  {
    Icon: Flag,
    title: "NACIONAL",
    items: [
      "Coerver Stage (campamentos de técnica)",
      "Torneos Nacionales con viaje",
    ],
  },
  {
    Icon: Globe,
    title: "INTERNACIONAL",
    items: [
      "Pro Tour (torneos internacionales con viaje)",
      "Campamentos internacionales",
    ],
  },
];

const waLink = (category: string) =>
  `https://wa.me/573504734584?text=${encodeURIComponent(
    `Hola, quiero información sobre el plan para ${category}`,
  )}`;

export const Route = createFileRoute("/programas/plan-maestro")({
  head: () => ({
    meta: [
      { title: "Plan Maestro por Categoría · Seven Soccer Club" },
      {
        name: "description",
        content:
          "Plan Maestro de Seven Soccer Club: fase de formación, programas Coerver y competencias para cada categoría, desde Pre-Babys hasta Sub 14 en Cúcuta, Colombia.",
      },
      {
        property: "og:title",
        content: "Plan Maestro por Categoría · Seven Soccer Club",
      },
      {
        property: "og:description",
        content:
          "Técnica, competencia y proyección: conoce la ruta completa de formación por categoría en Seven Soccer Club.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlanMaestroPage,
});

function PlanMaestroPage() {
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
            <Map className="h-3.5 w-3.5" />
            // Ruta de formación
          </div>
          <h1 className="text-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-7xl mb-6">
            PLAN MAESTRO POR{" "}
            <span className="text-gradient-neon">CATEGORÍA</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Cada etapa de formación tiene una ruta clara: técnica, competencia y
            proyección. Conoce el plan completo de tu categoría.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              to="/programas"
              className="hover:text-primary transition-colors"
            >
              Programas
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Plan Maestro</span>
          </div>
        </div>
      </section>

      {/* Acordeón de categorías */}
      <section className="relative py-16 md:py-28 bg-surface/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              // Categorías
            </div>
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl">
              ELIGE TU <span className="text-gradient-neon">CATEGORÍA</span>
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue="pre-babys"
            className="max-w-4xl mx-auto space-y-5"
          >
            {categories.map(
              ({ id, Icon, name, age, years, phase, coerver, competitions }, i) => (
                <AccordionItem
                  key={id}
                  value={id}
                  className="group glass rounded-3xl border border-border/60 overflow-hidden data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="px-5 sm:px-8 py-6 hover:no-underline">
                    <div className="flex w-full items-start gap-4 text-left">
                      <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-glow-soft flex-shrink-0">
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-display text-xl sm:text-2xl md:text-3xl">
                          {name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className="text-[0.7rem] sm:text-xs uppercase tracking-wider text-primary glass px-3 py-1 rounded-full">
                            {age}
                          </span>
                          <span className="text-[0.7rem] sm:text-xs uppercase tracking-wider text-muted-foreground border border-border rounded-full px-3 py-1">
                            {years}
                          </span>
                        </div>
                      </div>
                      <div className="text-display text-4xl sm:text-5xl text-primary/10 hidden sm:block leading-none">
                        0{i + 1}
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-5 sm:px-8 pb-8">
                    <div className="grid gap-5 md:grid-cols-3">
                      {/* Fase */}
                      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-3">
                          <Target className="h-3.5 w-3.5" />
                          Fase de formación
                        </div>
                        <div className="text-display text-lg sm:text-xl leading-snug">
                          {phase}
                        </div>
                      </div>

                      {/* Coerver */}
                      <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-3">
                          <Dumbbell className="h-3.5 w-3.5" />
                          Programas Coerver
                        </div>
                        <ul className="space-y-2.5">
                          {coerver.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Competencias */}
                      <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-3">
                          <Trophy className="h-3.5 w-3.5" />
                          Competencias
                        </div>
                        <ul className="space-y-2.5">
                          {competitions.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href={waLink(name)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-neon text-primary-foreground font-bold uppercase tracking-wider text-xs sm:text-sm shadow-glow hover:scale-[1.02] transition-transform w-full sm:w-auto"
                    >
                      Más info por WhatsApp
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </AccordionContent>
                </AccordionItem>
              ),
            )}
          </Accordion>
        </div>
      </section>

      {/* Niveles de programa */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              // Proyección
            </div>
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl">
              NIVELES DE <span className="text-gradient-neon">PROGRAMA</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
            {levels.map(({ Icon, title, items }, i) => (
              <div
                key={title}
                className="group glass rounded-3xl p-6 sm:p-8 relative overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-4 right-5 text-display text-4xl text-primary/10 leading-none">
                  0{i + 1}
                </div>
                <div className="relative h-14 w-14 rounded-2xl bg-gradient-neon flex items-center justify-center shadow-glow-soft mb-5">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-display text-xl sm:text-2xl mb-4 relative">
                  {title}
                </h3>
                <ul className="space-y-3 relative">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 bg-surface/40">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container mx-auto px-6 relative text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display text-3xl sm:text-4xl md:text-6xl mb-6">
              ¿LISTO PARA EMPEZAR TU{" "}
              <span className="text-gradient-neon">CAMINO</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Escríbenos por WhatsApp y agenda una clase de prueba gratuita.
              Evaluamos al jugador y recomendamos la categoría ideal.
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
