import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">// Contacto</div>
          <h2 className="text-display text-3xl sm:text-4xl md:text-6xl">
            ÚNETE AL <span className="text-gradient-neon">CLUB</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Llena el formulario y un coach se contactará contigo para coordinar tu prueba.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-6">
          {/* Info */}
          <div className="min-w-0 space-y-4">
            {[
              { Icon: Phone, label: "Teléfono", value: "+57 350 4734584" },
              { Icon: Mail, label: "Email", value: "info@sevensoccerclub.com" },
              { Icon: MapPin, label: "Ubicación", value: "Cúcuta · Norte de Santander · Colombia" },
              { Icon: Clock, label: "Horarios", value: "Lun - Sáb · 15:00 - 20:00" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="glass rounded-2xl p-4 sm:p-5 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 sm:gap-4 hover:border-primary/40 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-gradient-neon flex items-center justify-center shadow-glow-soft flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="text-foreground text-sm sm:text-base leading-relaxed wrap-anywhere">{value}</div>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/573504734584"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl p-4 sm:p-5 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:gap-4 border border-primary/40 shadow-glow-soft hover:shadow-glow transition-shadow group"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-neon flex items-center justify-center animate-glow-pulse flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-primary">WhatsApp directo</div>
                <div className="text-display text-lg">Escríbenos ahora</div>
              </div>
              <Send className="h-4 w-4 shrink-0 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass-strong min-w-0 w-full rounded-3xl p-5 sm:p-7 lg:p-8 xl:p-10 shadow-card space-y-5"
          >
            <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nombre del jugador" placeholder="Ej. Mateo Pérez" />
              <Field label="Edad" placeholder="Ej. 9" type="number" />
            </div>
            <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Nombre del responsable" placeholder="Tu nombre completo" />
              <Field label="Teléfono" placeholder="+57 ..." />
            </div>
            <Field label="Email" placeholder="tu@email.com" type="email" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Mensaje
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre el jugador y qué programa te interesa..."
                className="min-w-0 max-w-full w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-base placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-glow-soft transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-neon text-primary-foreground font-bold uppercase tracking-wider text-sm shadow-glow hover:scale-[1.02] transition-transform"
            >
              Enviar inscripción
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="min-w-0">
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
        {label}
      </label>
      <input
        {...props}
        className="min-w-0 max-w-full w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-base placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-glow-soft transition-all"
      />
    </div>
  );
}
