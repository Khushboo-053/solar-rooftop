import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import residentialImg from "@/assets/sol-residential.jpg";
import commercialImg from "@/assets/sol-commercial.jpg";

const sysCards = [
  { size: "3 kW System", subtitle: "Perfect for Small Families", points: ["Runs Lights, Fans, TV, Fridge", "Subsidy: ₹94,800", "~360 Units/Month"], popular: false },
  { size: "5 kW System", subtitle: "For Medium Homes", points: ["Runs 1 AC + Home Load", "Max Subsidy Benefit", "~600 Units/Month"], popular: true },
  { size: "8 kW+ System", subtitle: "Large Villas / Joint Families", points: ["Multiple ACs + Heaters", "Complete Energy Independence", "~960+ Units/Month"], popular: false },
];

const verticals = ["Hotels & Resorts", "Cold Storage", "Schools/Colleges", "Factories"];

const Solutions = () => (
  <div className="bg-surface-container-low text-on-surface font-body">
    <Navbar />
    <main className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter text-on-surface">
            One Sun. Infinite Solutions.
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">From cozy homes to sprawling industries.</p>
        </header>

        {/* Residential */}
        <section id="residential" className="bg-card rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-8 shadow-sm scroll-mt-32">
          <div className="aspect-[4/3] lg:aspect-auto">
            <img src={residentialImg} alt="Residential solar" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
          </div>
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <span className="text-primary font-label text-xs font-bold uppercase tracking-widest mb-3">Residential</span>
            <h2 className="text-4xl font-headline font-extrabold tracking-tight mb-5">For Your Home</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Transform your roof into a power plant. Our residential systems (1–10kW) are designed to integrate seamlessly with Kashmiri architecture, featuring snow-shedding mounting structures.
            </p>
            <ul className="space-y-3 mb-8">
              {["Save ₹3,000 - ₹15,000 per month on bills", "25-Year Manufacturer Performance Warranty", "PM Surya Ghar Subsidy Support"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-xl">check</span>
                  <span className="text-on-surface">{p}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link to="/" className="bg-primary-container text-primary-container-foreground px-6 py-3 rounded-full font-headline font-bold hover:opacity-90 transition">
                Calculate Savings
              </Link>
              <Link to="/subsidies" className="bg-card border border-border text-on-surface px-6 py-3 rounded-full font-headline font-bold hover:bg-surface-container transition">
                Check Eligibility
              </Link>
            </div>
          </div>
        </section>

        {/* System tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {sysCards.map((s) => (
            <div key={s.size} className={`relative rounded-2xl p-7 ${s.popular ? "bg-primary-container/20 ring-1 ring-primary-container" : "bg-card"}`}>
              {s.popular && (
                <span className="absolute top-4 right-4 bg-primary-container text-primary-container-foreground text-[10px] font-label font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-headline font-bold mb-1">{s.size}</h3>
              <p className="text-sm text-muted-foreground mb-5">{s.subtitle}</p>
              <ul className="space-y-2 text-sm text-on-surface">
                {s.points.map((p) => <li key={p}>• {p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Commercial */}
        <section id="commercial" className="bg-card rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-8 shadow-sm scroll-mt-32">
          <div className="p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
            <span className="text-primary font-label text-xs font-bold uppercase tracking-widest mb-3">Commercial</span>
            <h2 className="text-4xl font-headline font-extrabold tracking-tight mb-5">For Your Business</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Reduce overheads for your hotel, cold storage, or factory. We provide high-capacity grid-tied systems with net metering support to maximize ROI.
            </p>
            <ul className="space-y-3 mb-8">
              {["Slash Diesel Costs during cuts", "Accelerated Depreciation Benefits (40%)", "ROI in just 3-4 Years"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary text-xl">check</span>
                  <span className="text-on-surface">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
              Get a Commercial Quote <span>→</span>
            </Link>
          </div>
          <div className="aspect-[4/3] lg:aspect-auto order-1 lg:order-2">
            <img src={commercialImg} alt="Commercial solar" className="w-full h-full object-cover" loading="lazy" width={1024} height={768} />
          </div>
        </section>

        {/* Verticals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {verticals.map((v) => (
            <div key={v} className="bg-card rounded-full py-4 px-6 text-center font-headline font-bold text-on-surface shadow-sm hover:shadow-md transition cursor-pointer">
              {v}
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Solutions;
