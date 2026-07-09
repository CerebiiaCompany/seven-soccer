import { useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/photos/night-training.jpg";
import g2 from "@/assets/photos/dribble-kid.jpg";
import g3 from "@/assets/photos/huddle-1.jpg";
import g4 from "@/assets/photos/little-player.jpg";
import g5 from "@/assets/photos/group-training.jpg";
import g6 from "@/assets/photos/gym-duo.jpg";
import g7 from "@/assets/photos/gym-training.jpg";
import g8 from "@/assets/photos/kick-action.jpg";

const items = [
  { src: g1, alt: "Entrenamiento nocturno", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Jugador dominando el balón", span: "md:row-span-2" },
  { src: g3, alt: "Huddle de equipo" },
  { src: g4, alt: "Formación desde pequeños" },
  { src: g5, alt: "Entrenamiento colectivo", span: "md:col-span-2" },
  { src: g6, alt: "Preparación física" },
  { src: g7, alt: "Alto rendimiento" },
  { src: g8, alt: "Acción de partido" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-surface/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Galería</div>
          <h2 className="text-display text-3xl sm:text-4xl md:text-6xl">
            MOMENTOS DEL <span className="text-gradient-neon">CLUB</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setOpen(it.src)}
              className={`group relative overflow-hidden rounded-2xl ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-xs uppercase tracking-wider text-primary">{it.alt}</span>
              </div>
              <div className="absolute top-3 left-3 glass px-2 py-1 rounded text-[10px] uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Ver
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 animate-[fade-up_0.3s_ease-out]"
          onClick={() => setOpen(null)}
        >
          <button className="absolute top-6 right-6 glass h-11 w-11 rounded-full flex items-center justify-center">
            <X className="h-5 w-5" />
          </button>
          <img src={open} alt="" className="max-h-[90vh] max-w-full rounded-2xl shadow-glow" />
        </div>
      )}
    </section>
  );
}
