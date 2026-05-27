import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Stats } from "@/components/Stats";
import { Coaches } from "@/components/Coaches";
import { Gallery } from "@/components/Gallery";
import { Highlights } from "@/components/Highlights";
import { Events } from "@/components/Events";
import { Testimonials } from "@/components/Testimonials";
import { InstagramFeed } from "@/components/Instagram";
import { Sponsors } from "@/components/Sponsors";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Seven Soccer Club · Formamos Talento. Creamos Campeones." },
      {
        name: "description",
        content:
          "Club deportivo profesional Partner Coerver Coaching. Formación, competencia y alto rendimiento para jugadores de 3 a 13 años en 3 sedes deportivas.",
      },
      { property: "og:title", content: "Seven Soccer Club · Formamos Talento. Creamos Campeones." },
      {
        property: "og:description",
        content:
          "Club deportivo profesional Partner Coerver Coaching. Formación, competencia y alto rendimiento.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <Programs />
      <Stats />
      <Coaches />
      <Gallery />
      <Highlights />
      <Events />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
}
