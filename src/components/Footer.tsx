import { Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
                <img src={logo} alt="Seven Soccer Club" className="relative h-12 w-12 object-contain drop-shadow-[0_0_10px_oklch(0.82_0.24_142/0.5)]" />
              </div>
              <span className="text-display text-xl tracking-wider">
                SEVEN <span className="text-gradient-neon">SOCCER CLUB</span>
              </span>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed mb-6">
              Club deportivo profesional Partner Coerver Coaching. Formamos jugadores con
              habilidad en los duelos 1 vs 1 desde los 3 años.
            </p>
            <div className="flex gap-3">
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
                  className="glass h-10 w-10 rounded-full flex items-center justify-center hover:text-primary hover:shadow-glow-soft transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-display text-lg mb-4">Navegación</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                ["Club", "#about"],
                ["Programas", "/programas"],
                ["Coaches", "#coaches"],
                ["Galería", "#gallery"],
                ["Eventos", "#events"],
                ["Contacto", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-display text-lg mb-4">Contacto</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@sevensoccerclub.com</li>
              <li>+57 350 4734584</li>
              <li>Cúcuta, Norte de Santander · Colombia</li>
              <li>Lun - Sáb · 15:00 - 20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground uppercase tracking-wider">
          <div>© {new Date().getFullYear()} Seven Soccer Club · Todos los derechos reservados</div>
          <div>Partner Coerver Coaching · Desde 2023</div>
        </div>
      </div>
    </footer>
  );
}
