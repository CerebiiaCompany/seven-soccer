import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-soccer.jpg";
import logo from "@/assets/logo.png";
import { Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";

function Counter({ end, suffix = "+", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(p * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return (
    <span className="text-display text-3xl md:text-5xl text-gradient-neon">
      {suffix}
      {n}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Jugadores de Seven Soccer Club entrenando bajo las luces del estadio"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-[fade-up_0.6s_ease-out]">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Partner Club · Coerver Coaching
            </span>
          </div>

          <h1 className="text-display text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-[fade-up_0.8s_ease-out]">
            FORMAMOS <span className="text-gradient-neon">TALENTO.</span>
            <br />
            CREAMOS <span className="text-gradient-neon">CAMPEONES.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-[fade-up_1s_ease-out]">
            Club deportivo profesional enfocado en formación, competencia y alto rendimiento.
            Tres sedes. Trece categorías. Una pasión.
          </p>

          <div className="flex flex-wrap gap-4 mb-14 animate-[fade-up_1.2s_ease-out]">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-neon text-primary-foreground font-bold uppercase tracking-wider text-sm shadow-glow hover:scale-105 transition-transform animate-glow-pulse"
            >
              Únete al Club
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass border border-primary/30 text-foreground font-bold uppercase tracking-wider text-sm hover:bg-primary/10 transition-colors"
            >
              Conoce Más
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg">
            {[
              { n: 250, label: "Jugadores" },
              { n: 15, label: "Entrenadores" },
              { n: 40, label: "Torneos" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 md:p-5">
                <Counter end={s.n} />
                <div className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: floating card */}
        <div className="hidden lg:block relative">
          <div className="absolute -inset-4 bg-gradient-neon opacity-20 blur-3xl rounded-3xl" />
          <div className="relative glass-strong rounded-3xl p-8 shadow-card">
            <div className="text-display text-7xl text-gradient-neon leading-none">7</div>
            <div className="mt-2 text-display text-2xl">SEVEN SOCCER CLUB</div>
            <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">
              Desde 2023 · Bolivia
            </div>
            <div className="mt-6 border-t border-border/50 pt-6 space-y-3">
              {[
                "13 categorías · 3 a 13 años",
                "Plan integral de formación",
                "Neuroentrenamiento + Psicología",
                "Partner Coerver Coaching",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-soft" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating social icons */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-20">
        {[
          { Icon: Instagram, href: "https://www.instagram.com/seven.soccerclub/" },
          { Icon: Facebook, href: "#" },
          { Icon: Youtube, href: "#" },
        ].map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="glass h-11 w-11 rounded-full flex items-center justify-center text-foreground hover:text-primary hover:shadow-glow-soft transition-all hover:-translate-y-1"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </section>
  );
}
