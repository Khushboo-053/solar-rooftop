import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import philosophyImg from "@/assets/about-philosophy.jpg";
import j2012 from "@/assets/journey-2012.jpg";
import j2018 from "@/assets/journey-2018.jpg";
import j2024 from "@/assets/journey-2024.jpg";
import julian from "@/assets/team-julian.jpg";
import elena from "@/assets/team-elena.jpg";
import marcus from "@/assets/team-marcus.jpg";

const team = [
  { name: "Julian Thorne", role: "Chief Executive Officer", img: julian, bio: "A former CERN lead engineer, Julian brought the rigor of particle physics to consumer solar technology." },
  { name: "Elena Vance", role: "Head of Engineering", img: elena, bio: "The visionary behind the Nexus panel series. Elena holds 14 patents in photovoltaic materials science." },
  { name: "Marcus Aurelii", role: "Chief Design Officer", img: marcus, bio: "Marcus ensures that Solaris systems are as beautiful as they are functional, merging luxury with utility." },
];

const About = () => (
  <div className="bg-surface text-on-surface font-body">
    <Navbar />
    <main className="pt-32">
      {/* Hero */}
      <section className="px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-container/30 mb-6">
            <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">Established 2012</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-[0.95]">
            The Radiant<br />
            <span className="text-primary italic">Authority</span>.
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-xl leading-relaxed">
            We are engineering the future of energy through meticulous precision and solar mastery. Leading the global transition to absolute autonomy.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container-low">
            <img
              src={j2018}
              alt="Solaris fields"
              className="w-full h-full object-cover"
              width={800}
              height={600}
            />
          </div>
          <div className="absolute -bottom-8 -left-6 bg-card rounded-2xl shadow-xl px-6 py-4">
            <div className="text-3xl font-headline font-extrabold text-on-surface">14.2GW</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-label font-bold mt-1">Generated Annually</div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="border-l-2 border-primary pl-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tight">Our Engineering Philosophy</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't just install panels, we architect energy ecosystems. Our approach is rooted in the "Solaris Nexus" — a harmony between aesthetic integration and maximum photon conversion efficiency.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every bolt, every semiconductor, and every software line is optimized for a lifespan exceeding 40 years. We believe sustainability is only true when it is permanent.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-card rounded-2xl p-5">
                <div className="font-headline font-bold text-on-surface mb-1">Precision Design</div>
                <div className="text-sm text-muted-foreground">Site-specific laser modeling for 100% terrain optimization.</div>
              </div>
              <div className="bg-card rounded-2xl p-5">
                <div className="font-headline font-bold text-on-surface mb-1">Energy Storage</div>
                <div className="text-sm text-muted-foreground">Next-gen solid-state batteries integrated for total grid freedom.</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src={philosophyImg} alt="Engineer in lab" className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
            </div>
            <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-center text-primary-container-foreground font-label font-bold text-[10px] uppercase tracking-wider">
              Leaders<br />in Tech
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-surface">Our Journey</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="space-y-20">
          {/* 2012 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl md:text-8xl font-headline font-black text-surface-dim leading-none mb-4">2012</div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">The Spark</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Founded in Zurich with a single mission: to make solar energy as reliable as the watchmaking that surrounded us. Solaris began with a small team of three physicists.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={j2012} alt="2012 workshop" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
          {/* 2018 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] order-2 lg:order-1">
              <img src={j2018} alt="2018 expansion" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-7xl md:text-8xl font-headline font-black text-surface-dim leading-none mb-4">2018</div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">Continental Expansion</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Solaris expands across the EMEA region, pioneering the first "Smart Grid" community in Northern Spain, powering 5,000 homes autonomously.
              </p>
            </div>
          </div>
          {/* 2024 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-7xl md:text-8xl font-headline font-black text-surface-dim leading-none mb-4">2024</div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">Radiant Authority</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Leading the industry with the Nexus v4 panel, achieving a world-record 26.4% commercial efficiency. Now serving over 40 countries.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img src={j2024} alt="2024 panel" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <span className="font-label text-xs font-bold uppercase tracking-widest text-primary">The Leadership</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mt-2">Architects of Light</h2>
            </div>
            <p className="text-muted-foreground max-w-md">A diverse collective of engineers, visionaries, and environmental stewards.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-card rounded-3xl overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden grayscale">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" width={512} height={640} />
                </div>
                <div className="p-6">
                  <h3 className="font-headline font-bold text-lg text-on-surface">{m.name}</h3>
                  <div className="text-xs uppercase tracking-widest font-label font-bold text-muted-foreground mt-1 mb-4">{m.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="bg-primary-container rounded-[3rem] py-20 px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary-container-foreground tracking-tighter mb-10 leading-tight">
            Ready to join the energy<br />renaissance?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-on-surface text-surface px-8 py-4 rounded-full font-headline font-bold hover:opacity-90 transition-opacity">
              Work with Us
            </Link>
            <Link to="/services" className="bg-card/50 text-on-surface px-8 py-4 rounded-full font-headline font-bold hover:bg-card transition-colors">
              Our Installations
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
