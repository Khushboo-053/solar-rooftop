import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const projects = [
  { src: g1, title: "Residential Rooftop, Anantnag", tag: "Residential", kw: "5 kW" },
  { src: g2, title: "Village Home Install, Pulwama", tag: "Residential", kw: "3 kW" },
  { src: g3, title: "Hotel Rooftop, Srinagar", tag: "Commercial", kw: "50 kW" },
  { src: g4, title: "Inverter & Battery Setup", tag: "Components", kw: "—" },
  { src: g5, title: "Snow-Resilient Array, Gulmarg", tag: "Residential", kw: "8 kW" },
  { src: g6, title: "Commercial Rooftop, Jammu", tag: "Commercial", kw: "25 kW" },
];

const filters = ["All", "Residential", "Commercial", "Components"];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <div className="bg-surface-container-low text-on-surface font-body min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <header className="max-w-5xl mx-auto px-8 text-center mb-14">
          <span className="inline-block py-2 px-4 rounded-full bg-tertiary-container text-tertiary-container-foreground font-label text-xs font-bold uppercase tracking-widest mb-6">
            Project Gallery
          </span>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-5">
            Innovation in Solar & Electric Mobility.
          </h1>
          <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse at recent installations across Jammu & Kashmir — engineered for snow, sun, and serious savings.
          </p>
        </header>

        <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-full font-label font-bold text-sm transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-on-surface hover:bg-surface-container"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <article
                key={p.title}
                className="group relative bg-card rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-label font-bold uppercase tracking-widest text-primary">
                      {p.tag}
                    </span>
                    <span className="text-xs font-label font-bold text-secondary">{p.kw}</span>
                  </div>
                  <h3 className="font-headline font-bold text-lg text-on-surface">{p.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-8 mt-24 text-center">
          <div className="bg-card rounded-[2rem] p-12 shadow-sm">
            <h2 className="font-headline font-extrabold text-3xl md:text-4xl mb-4">
              Want your project featured next?
            </h2>
            <p className="text-secondary mb-8 max-w-xl mx-auto">
              Book a free consultation and join 100+ Kashmiri families and businesses powered by Solaris.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-headline font-bold hover:opacity-90 transition-all"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
