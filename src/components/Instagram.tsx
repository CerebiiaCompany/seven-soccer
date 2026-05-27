import { Instagram as IG, Heart, MessageCircle } from "lucide-react";
import g1 from "@/assets/hero-soccer.jpg";
import g2 from "@/assets/player-action.jpg";
import g3 from "@/assets/team-huddle.jpg";
import g4 from "@/assets/celebration.jpg";

const posts = [
  { img: g1, likes: 542, comments: 31, label: "Entrenamiento nocturno" },
  { img: g2, likes: 731, comments: 48, label: "Técnica individual" },
  { img: g3, likes: 893, comments: 67, label: "Equipo unido" },
  { img: g4, likes: 1204, comments: 92, label: "GOOOOL!" },
];

export function InstagramFeed() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Social</div>
            <h2 className="text-display text-4xl md:text-5xl mb-6">
              SÍGUENOS Y VIVE LA <span className="text-gradient-neon">PASIÓN DEL FÚTBOL</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Lo último del club, reels de entrenamientos, jugadas destacadas y momentos detrás
              de cámara directamente en nuestro Instagram.
            </p>
            <a
              href="https://www.instagram.com/seven.soccerclub/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-neon text-primary-foreground font-bold uppercase tracking-wider text-sm shadow-glow-soft hover:shadow-glow transition-shadow"
            >
              <IG className="h-5 w-5" />
              @seven.soccerclub
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {posts.map((p, i) => (
              <a
                key={i}
                href="https://www.instagram.com/seven.soccerclub/"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden glass"
              >
                <img
                  src={p.img}
                  alt={p.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-sm gap-2">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 fill-primary text-primary" /> {p.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4 text-primary" /> {p.comments}
                  </div>
                </div>
                <IG className="absolute top-3 right-3 h-4 w-4 text-white drop-shadow-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
