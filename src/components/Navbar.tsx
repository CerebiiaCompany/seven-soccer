import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "Club" },
  { href: "#programs", label: "Programas" },
  { href: "#coaches", label: "Coaches" },
  { href: "#gallery", label: "Galería" },
  { href: "#events", label: "Eventos" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative h-9 w-9 rounded-lg bg-gradient-neon shadow-glow-soft flex items-center justify-center text-primary-foreground font-display text-xl">
            7
          </div>
          <span className="text-display text-xl tracking-wider">
            SEVEN <span className="text-gradient-neon">SOCCER</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-neon text-primary-foreground font-semibold text-sm uppercase tracking-wider shadow-glow-soft hover:shadow-glow transition-shadow"
        >
          Únete
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-primary transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong mt-3 mx-6 rounded-xl p-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-wider text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-3 rounded-full bg-gradient-neon text-primary-foreground font-semibold text-sm uppercase tracking-wider"
          >
            Únete al Club
          </a>
        </div>
      )}
    </header>
  );
}
