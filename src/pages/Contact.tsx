import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mapLocation from "@/assets/map-location.jpg";

const Contact = () => (
  <div className="bg-surface text-on-surface font-body">
    <Navbar />
    <main className="pt-32">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div className="space-y-6">
            <span className="text-primary font-label font-medium tracking-[0.2em] uppercase text-xs">Reach the Authority</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter">
              Get in Touch with Our <span className="text-primary-container">Solar Experts</span>
            </h1>
            <p className="text-secondary max-w-lg text-lg leading-relaxed">
              Transitioning to radiant energy requires precision. Connect with our engineering team to design your high-performance solar infrastructure.
            </p>
          </div>
          <div className="hidden lg:block pb-4">
            <div className="flex items-center gap-4 text-muted-foreground font-label font-medium">
              <span className="h-[1px] w-12 bg-outline-variant"></span>
              <span>SOLARIS RADIANT AUTHORITY HQ — EST. 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Form */}
          <div className="md:col-span-7 lg:col-span-8 bg-card rounded-[2rem] p-10 shadow-sm">
            <h2 className="text-3xl font-headline font-bold mb-10 text-on-surface">Consultation Request</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wider ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Johnathan Sterling"
                    className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-card transition-all placeholder:text-outline-variant outline-none text-on-surface"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wider ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="j.sterling@engineering.com"
                    className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-card transition-all placeholder:text-outline-variant outline-none text-on-surface"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wider ml-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-card transition-all placeholder:text-outline-variant outline-none text-on-surface"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label font-bold text-muted-foreground uppercase tracking-wider ml-1">Project Details</label>
                <textarea
                  placeholder="Briefly describe your installation requirements..."
                  rows={4}
                  className="w-full bg-surface-container-low border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:bg-card transition-all placeholder:text-outline-variant outline-none text-on-surface resize-y"
                />
              </div>
              <button className="w-full md:w-auto bg-primary text-primary-foreground px-12 py-5 rounded-full font-headline font-extrabold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Send Transmission
              </button>
            </form>
          </div>

          {/* Info Stack */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            {/* Hours */}
            <div className="bg-surface-container-low rounded-[2rem] p-8 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <h3 className="font-headline font-bold text-xl">Working Hours</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: "Mon — Fri", time: "08:00 — 19:00" },
                  { day: "Saturday", time: "10:00 — 16:00" },
                  { day: "Sunday", time: "By Appointment", highlight: true },
                ].map((row, i) => (
                  <div key={i} className={`flex justify-between items-center ${i < 2 ? "pb-2 border-b border-outline-variant/10" : ""}`}>
                    <span className="text-muted-foreground">{row.day}</span>
                    <span className={`font-bold ${row.highlight ? "text-primary" : ""}`}>{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Channels */}
            <div className="bg-primary text-primary-foreground rounded-[2rem] p-8">
              <h3 className="font-headline font-bold text-xl mb-6">Direct Channels</h3>
              <div className="space-y-6">
                <a href="tel:+1800SOLARIS" className="flex items-center gap-4 group">
                  <div className="bg-primary-foreground/10 p-3 rounded-full group-hover:bg-primary-foreground/20 transition-colors">
                    <span className="material-symbols-outlined text-primary-container">phone</span>
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-xs font-label font-bold uppercase tracking-widest">Voice</p>
                    <p className="font-bold text-lg">+1 (800) SOLARIS</p>
                  </div>
                </a>
                <a href="mailto:expert@solaris.io" className="flex items-center gap-4 group">
                  <div className="bg-primary-foreground/10 p-3 rounded-full group-hover:bg-primary-foreground/20 transition-colors">
                    <span className="material-symbols-outlined text-primary-container">mail</span>
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-xs font-label font-bold uppercase tracking-widest">Email</p>
                    <p className="font-bold text-lg">expert@solaris.io</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-12 lg:col-span-8 bg-surface-container-low rounded-[2rem] overflow-hidden min-h-[400px] relative">
            <img src={mapLocation} alt="Office Location Map" className="w-full h-full object-cover" loading="lazy" width={1280} height={800} />
            <div className="absolute bottom-8 left-8 right-8 lg:right-auto lg:w-96 glass-panel p-6 rounded-2xl border border-outline-variant/20">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <div>
                  <h4 className="font-headline font-bold text-lg mb-1">San Francisco Hub</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    422 Radiant Way, Suite 800<br />
                    Palo Alto, CA 94301, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-12 lg:col-span-4 bg-tertiary-container text-tertiary-container-foreground rounded-[2rem] p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-headline font-black text-2xl mb-4">Join the Network</h3>
              <p className="mb-8 opacity-90 leading-relaxed">Follow our latest engineering breakthroughs and solar implementation case studies across the globe.</p>
              <div className="flex flex-wrap gap-4">
                {["share_reviews", "public", "video_library"].map((icon) => (
                  <a key={icon} href="#" className="bg-tertiary text-tertiary-foreground p-4 rounded-2xl hover:scale-110 transition-transform flex items-center justify-center">
                    <span className="material-symbols-outlined">{icon}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-tertiary/20">
              <p className="text-xs font-label font-bold uppercase tracking-widest opacity-60 mb-2">Sustainable Engineering</p>
              <p className="font-headline font-extrabold text-xl">100% Clean Energy Guaranteed.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;
