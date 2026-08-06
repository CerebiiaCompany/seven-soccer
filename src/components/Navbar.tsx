import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "Club" },
  { href: "/estructura", label: "Estructura" },
  { href: "/programas", label: "Programas" },

  { href: "#coaches", label: "Coaches" },
  { href: "#gallery", label: "Galería" },
  { href: "#events", label: "Eventos" },
  { href: "#contact", label: "Contacto" },
];

const isHash = (href: string) => href.startsWith("#");

function NavLink({
  href,
  label,
  onClick,
  className,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const resolvedHref = isHash(href) && pathname !== "/" ? `/${href}` : href;

  const baseClasses =
    "text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full";

  if (resolvedHref.startsWith("/") && !isHash(resolvedHref)) {
    return (
      <Link
        to={resolvedHref}
        onClick={onClick}
        className={className || baseClasses}
        activeOptions={{ exact: true }}
        activeProps={{ className: (className || baseClasses) + " text-primary after:w-full" }}
      >
        {label}
      </Link>
    );
  }

  return (
    <a href={resolvedHref} onClick={onClick} className={className || baseClasses}>
      {label}
    </a>
  );
}

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
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl group-hover:bg-primary/50 transition-colors" />
            <img
              src={logo}
              alt="Seven Soccer Club"
              className="relative h-11 w-11 object-contain drop-shadow-[0_0_8px_oklch(0.82_0.24_142/0.5)]"
            />
          </div>
          <span className="text-display text-xl tracking-wider hidden sm:block">
            SEVEN <span className="text-gradient-neon">SOCCER</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>

        <a
          href="https://wa.me/573504734584"
          target="_blank"
          rel="noreferrer"
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
            <span
              className={`block h-0.5 w-6 bg-primary transition-transform ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-primary transition-transform ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong mt-3 mx-6 rounded-xl p-6 space-y-4">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} onClick={() => setOpen(false)} />
          ))}
          <a
            href="https://wa.me/573504734584"
            target="_blank"
            rel="noreferrer"
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
