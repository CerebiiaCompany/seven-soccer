import { Instagram as IG } from "lucide-react";
import { useEffect, useRef } from "react";

const POSTS = [
  "https://www.instagram.com/p/Daf22qPx0J8/",
  "https://www.instagram.com/p/Daf22qPx0J8/",
  "https://www.instagram.com/p/Daf22qPx0J8/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SCRIPT_ID = "instagram-embed-script";
    const process = () => window.instgrm?.Embeds.process();

    if (window.instgrm) {
      process();
      return;
    }
    if (!document.getElementById(SCRIPT_ID)) {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.async = true;
      s.src = "https://www.instagram.com/embed.js";
      s.onload = process;
      document.body.appendChild(s);
    } else {
      process();
    }
  }, []);

  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Social</div>
            <h2 className="text-display text-3xl sm:text-4xl md:text-5xl mb-6">
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

          <div ref={containerRef} className="grid sm:grid-cols-2 gap-6">
            {POSTS.map((url) => (
              <blockquote
                key={url}
                className="instagram-media"
                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: 12,
                  boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: 0,
                  maxWidth: 540,
                  minWidth: 280,
                  padding: 0,
                  width: "100%",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
