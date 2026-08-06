import { useEffect, useRef, useState } from "react";
import pitchImg from "@/assets/pitch-aerial.jpg";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, seen };
}

function Stat({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1800, 1);
      setN(Math.floor(p * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, end]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-neon leading-none">
        {n}
        {suffix}
      </div>
      <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={pitchImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Logros</div>
          <h2 className="text-display text-3xl sm:text-4xl md:text-6xl">
            NÚMEROS QUE <span className="text-gradient-neon">HABLAN</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          <Stat end={6} label="Años de experiencia" />
          <Stat end={13} label="Categorías activas" />
          <Stat end={250} label="Jugadores activos" />
          <Stat end={40} label="Torneos nacionales" />
        </div>

        {/* Sedes */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Sedes</div>
            <h3 className="text-display text-2xl sm:text-3xl md:text-4xl">
              3 SEDES EN <span className="text-gradient-neon">CÚCUTA</span>
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {sedes.map((s, i) => (
              <div
                key={s.name}
                className="group relative glass rounded-2xl p-5 sm:p-6 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-4 text-display text-5xl text-primary/5 leading-none">
                  0{i + 1}
                </div>
                <div className="relative flex items-start gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-neon flex items-center justify-center shadow-glow-soft">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-display text-lg sm:text-xl leading-snug">{s.name}</div>
                    <p className="text-sm text-muted-foreground mt-1">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
    </section>
  );
}
