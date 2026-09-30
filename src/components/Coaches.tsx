import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import andelNieto from "@/assets/staff/andel-nieto.jpg";
import camiloSerrano from "@/assets/staff/camilo-serrano.jpg";
import cristianTorres from "@/assets/staff/cristian-torres.jpg";
import gustavoAvila from "@/assets/staff/gustavo-avila.jpg";
import gustavoPerico from "@/assets/staff/gustavo-perico.jpg";
import harlemSilva from "@/assets/staff/harlem-silva.jpg";
import julioCaicedo from "@/assets/staff/julio-caicedo.jpg";
import maikonMartinez from "@/assets/staff/maikon-martinez.jpg";
import victorGonzalez from "@/assets/staff/victor-gonzalez.jpg";
import wilmerCardenas from "@/assets/staff/wilmer-cardenas.jpg";
import andresAcevedo from "@/assets/staff/andres-acevedo.jpg";
import danielGarcia from "@/assets/staff/daniel-garcia.jpg";
import saraRojas from "@/assets/staff/sara-rojas.jpg";
import marcelaFlorez from "@/assets/staff/marcela-florez.jpg";
import paolaLopez from "@/assets/staff/paola-lopez.jpg";
import shirlySilva from "@/assets/staff/shirly-silva.jpg";

const coaches = [
  { name: "Andel Nieto", role: "Director General", img: andelNieto },
  { name: "Camilo Serrano", role: "Entrenador", img: camiloSerrano },
  { name: "Cristian Torres", role: "Entrenador", img: cristianTorres },
  { name: "Gustavo Ávila", role: "Entrenador", img: gustavoAvila },
  { name: "Gustavo Perico", role: "Entrenador", img: gustavoPerico },
  { name: "Harlem Silva", role: "Entrenador", img: harlemSilva },
  { name: "Julio Caicedo", role: "Entrenador", img: julioCaicedo },
  { name: "Maikon Martínez", role: "Entrenador", img: maikonMartinez },
  { name: "Victor González", role: "Entrenador", img: victorGonzalez },
  { name: "Wilmer Cárdenas", role: "Entrenador", img: wilmerCardenas },
  { name: "Andrés Acevedo", role: "Área de Rendimiento Físico", img: andresAcevedo },
  { name: "Daniel García", role: "Psicología y Neuroentrenamiento", img: danielGarcia },
  { name: "Sara Rojas", role: "Rehabilitación y Salud Deportiva", img: saraRojas },
  { name: "Marcela Flórez", role: "Comunicaciones y Marketing", img: marcelaFlorez },
  { name: "Paola López", role: "Área Administrativa", img: paolaLopez },
  { name: "Shirly Silva", role: "Secretaria", img: shirlySilva },
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
              Profesionales comprometidos con la formación de futbolistas con confianza y disciplina.
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
              className="group relative rounded-3xl overflow-hidden glass border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-soft snap-start shrink-0 w-[75%] sm:w-[45%] lg:w-[calc((100%-4.5rem)/4)]"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={c.img}
                  alt={`${c.name} - ${c.role}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="relative -mt-16 p-5 z-10">
                <div className="text-xs uppercase tracking-wider text-primary mb-1">{c.role}</div>
                <div className="text-display text-xl sm:text-2xl">{c.name}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8 sm:hidden">
          {coaches.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Ir al integrante ${idx + 1}`}
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
