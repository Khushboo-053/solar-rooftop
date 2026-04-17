import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import insightsHero from "@/assets/insights-hero.jpg";
import award from "@/assets/insight-award.jpg";
import efficiency from "@/assets/insight-efficiency.jpg";
import maintenance from "@/assets/insight-maintenance.jpg";
import sunset from "@/assets/insight-sunset.jpg";

const Insights = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [email, setEmail] = useState("");

  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured */}
          <section className="relative rounded-[2rem] overflow-hidden mb-20 min-h-[420px] flex items-end">
            <img src={insightsHero} alt="Future of solar storage" className="absolute inset-0 w-full h-full object-cover" width={1280} height={640} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 p-8 lg:p-14 max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-primary-container text-primary-container-foreground text-xs font-label font-bold uppercase tracking-widest px-3 py-1 rounded-full">Special Report</span>
                <span className="text-white/80 text-sm">8 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-white tracking-tight leading-tight mb-4">
                The Future of Solar Storage: Beyond the Grid
              </h1>
              <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Discover how the next generation of solid-state batteries and kinetic energy storage are revolutionizing domestic solar efficiency.
              </p>
              <div className="flex gap-3">
                <button className="bg-primary-container text-primary-container-foreground px-6 py-3 rounded-full font-headline font-bold flex items-center gap-2 hover:opacity-90 transition">
                  Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
                <button className="bg-white/10 backdrop-blur text-white px-6 py-3 rounded-full font-headline font-bold flex items-center gap-2 hover:bg-white/20 transition">
                  <span className="material-symbols-outlined text-base">bookmark</span> Save for later
                </button>
              </div>
            </div>
          </section>

          {/* Section header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter">Latest Insights</h2>
              <p className="text-muted-foreground mt-2">Pioneering thought leadership in renewable engineering.</p>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low rounded-full p-1">
              <button onClick={() => setView("grid")} className={`p-2 rounded-full transition ${view === "grid" ? "bg-card shadow" : "text-muted-foreground"}`}>
                <span className="material-symbols-outlined text-base">grid_view</span>
              </button>
              <button onClick={() => setView("list")} className={`p-2 rounded-full transition ${view === "list" ? "bg-card shadow" : "text-muted-foreground"}`}>
                <span className="material-symbols-outlined text-base">view_list</span>
              </button>
            </div>
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <article className="lg:col-span-2 lg:row-span-2 group cursor-pointer">
              <div className="rounded-3xl overflow-hidden aspect-[16/10] mb-6">
                <img src={award} alt="Award" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={500} />
              </div>
              <div className="text-xs uppercase tracking-widest font-label font-bold text-primary mb-2">Awards · March 14, 2024</div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold tracking-tight mb-3 group-hover:text-primary transition">
                Solaris Wins Engineering Award for Photovoltaic Innovation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                The International Renewable Council has recognized Solaris for our breakthrough in multi-junction cell layering, setting a new standard for panel durability.
              </p>
              <a href="#" className="inline-flex items-center text-primary font-bold gap-2 hover:gap-3 transition-all">
                View Full Story <span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </article>

            <article className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4 bg-surface-container">
                <img src={efficiency} alt="Efficiency" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={640} height={480} />
              </div>
              <div className="text-xs uppercase tracking-widest font-label font-bold text-primary mb-2">Efficiency</div>
              <h3 className="text-lg font-headline font-bold tracking-tight mb-2 group-hover:text-primary transition">
                5 Tips for Efficient Energy Use in Summer Months
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Practical steps to optimize your HVAC and solar panel interplay during peak thermal cycles.
              </p>
            </article>

            <article className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                <img src={maintenance} alt="Maintenance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={640} height={480} />
              </div>
              <div className="text-xs uppercase tracking-widest font-label font-bold text-primary mb-2">Maintenance</div>
              <h3 className="text-lg font-headline font-bold tracking-tight mb-2 group-hover:text-primary transition">
                Maximizing ROI: The Importance of Bi-Annual Cleaning
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Data shows a 15% increase in efficiency for systems maintained with our precision waterless method.
              </p>
            </article>
          </div>

          {/* Secondary cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            <div className="bg-surface-container-low rounded-3xl p-10 flex flex-col justify-between min-h-[280px]">
              <div>
                <span className="material-symbols-outlined text-primary text-3xl mb-6 block">bolt</span>
                <h3 className="text-2xl font-headline font-bold tracking-tight mb-3">Energy Market Analysis 2024</h3>
                <p className="text-muted-foreground leading-relaxed">A deep dive into global subsidy trends and the declining cost of silicon wafers.</p>
              </div>
              <button className="self-start mt-8 bg-card text-on-surface px-6 py-3 rounded-full font-headline font-bold text-sm hover:bg-card/80 transition border border-border">
                Download PDF Report
              </button>
            </div>
            <div className="relative rounded-3xl overflow-hidden min-h-[280px] flex items-end">
              <img src={sunset} alt="Sunset" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={800} height={500} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-headline font-bold text-white mb-2">Sustainable Living Series</h3>
                <p className="text-white/85">Monthly narratives from the front lines of the energy transition.</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <section className="bg-on-surface rounded-[2rem] py-16 px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-surface tracking-tight mb-4">
              Subscribe to The Radiant Authority
            </h2>
            <p className="text-surface/70 max-w-xl mx-auto mb-8">
              Weekly engineering insights, market updates, and exclusive solar efficiency guides delivered to your inbox.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="max-w-xl mx-auto flex bg-surface/10 rounded-full p-2 backdrop-blur"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent text-surface placeholder:text-surface/50 px-5 py-2 outline-none"
                required
              />
              <button type="submit" className="bg-primary-container text-primary-container-foreground px-6 py-3 rounded-full font-headline font-bold uppercase text-sm tracking-wider hover:opacity-90 transition">
                Join Now
              </button>
            </form>
            <p className="text-surface/50 text-xs mt-4">By subscribing, you agree to our Privacy Policy and receive weekly marketing emails.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;
