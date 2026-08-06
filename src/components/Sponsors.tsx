import maraldo from "@/assets/sponsors/maraldo.png";
import soccerFuture from "@/assets/sponsors/soccer-future.png";
import galeoSport from "@/assets/sponsors/galeo-sport.png";
import cerebiia from "@/assets/sponsors/cerebiia.png";
import elPalacio from "@/assets/sponsors/el-palacio.png";
import globalSport from "@/assets/sponsors/global-sport.png";
import opticalia from "@/assets/sponsors/opticalia.png";
import llantasCucuta from "@/assets/sponsors/llantas-cucuta.png";

const sponsors = [
  { src: maraldo, name: "Maraldo" },
  { src: soccerFuture, name: "Soccer Future · Academia de Formación Deportiva" },
  { src: galeoSport, name: "Galeo Sport" },
  { src: cerebiia, name: "Cerebiia" },
  { src: elPalacio, name: "Industrias Alimenticias El Palacio SAS" },
  { src: globalSport, name: "Global Sport Grama Sintética" },
  { src: opticalia, name: "Opticalia · Dr. Ballesteros" },
  { src: llantasCucuta, name: "Distribuidora M Llantas Cúcuta SAS" },
];

export function Sponsors() {
  return (
    <section className="relative py-20 border-y border-border bg-surface/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          // Sponsors &amp; Partners Oficiales
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center gap-14 sm:gap-20 animate-marquee whitespace-nowrap">
          {[...sponsors, ...sponsors].map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-16 sm:h-20 w-32 sm:w-44 flex items-center justify-center"
            >
              <img
                src={s.src}
                alt={`Logo ${s.name}`}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_14px_oklch(0.82_0.24_142/0.25)]"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
