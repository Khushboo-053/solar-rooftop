import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import philosophyImg from "@/assets/about-philosophy.jpg";
import j2018 from "@/assets/journey-2018.jpg";

const credentials = [
  { num: "100+", label: "Installations Completed" },
  { num: "20", label: "Districts Served Across J&K" },
  { num: "400 kW+", label: "Total Capacity Installed" },
  { num: "25 Year", label: "Performance Warranty" },
];

const About = () => (
  <div className="bg-surface text-on-surface font-body">
    <Navbar />
    <main className="pt-32">
      {/* Hero */}
      <section className="px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-container/30 mb-6">
            <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">About Solaris</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-[0.95]">
            Designed for Kashmir.<br />
            <span className="text-primary italic">Engineered for Trust.</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-xl leading-relaxed">
            We are a premier solar EPC company based in the heart of the valley. We believe in sustainable energy that can withstand the toughest winters.
          </p>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container-low">
            <img
              src={j2018}
              alt="Solar installations in Kashmir"
              className="w-full h-full object-cover"
              width={800}
              height={600}
            />
          </div>
          <div className="absolute -bottom-8 -left-6 bg-card rounded-2xl shadow-xl px-6 py-4">
            <div className="text-3xl font-headline font-extrabold text-on-surface">400 kW+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-label font-bold mt-1">Installed in J&K</div>
          </div>
        </div>
      </section>

      {/* Empanelled / Local Expertise */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl p-10">
            <div className="w-14 h-14 rounded-2xl bg-primary-container/40 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">verified</span>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Empanelled Excellence</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are officially empanelled vendors for the PM Surya Ghar: Muft Bijli Yojana. Your installation meets the highest government standards for safety and efficiency.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full bg-tertiary-container/40 text-tertiary text-xs font-label font-bold uppercase tracking-widest">MNRE Certified</span>
              <span className="px-4 py-2 rounded-full bg-tertiary-container/40 text-tertiary text-xs font-label font-bold uppercase tracking-widest">KPDCL Vendor</span>
            </div>
          </div>
          <div className="bg-card rounded-3xl p-10">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-container/40 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary text-3xl">ac_unit</span>
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Local Expertise</h3>
            <p className="text-muted-foreground leading-relaxed">
              Jammu &amp; Kashmir presents unique challenges — snow load, low temperatures, and grid fluctuations. Our engineers design systems specifically for these conditions, ensuring you get power when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-primary">Our Credentials</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mt-2">By the Numbers</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((c) => (
            <div key={c.label} className="bg-surface-container-low rounded-3xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-headline font-black text-primary mb-3">{c.num}</div>
              <div className="text-xs font-label font-bold uppercase tracking-widest text-secondary">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="border-l-2 border-primary pl-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tight">
                Committed to J&amp;K's Clean Energy Future
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Established with a vision to make sustainable energy accessible to every household in Jammu &amp; Kashmir, we have grown to become a name synonymous with trust and quality. We understand that our region faces unique energy challenges, from harsh winters to irregular power supply, and our mission is to provide robust solutions that perform year-round.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of certified engineers and local experts brings decades of combined experience in solar technology and electrical engineering. Whether it's a small home in Srinagar or a large industrial unit in Jammu, we treat every project with the same dedication to excellence.
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src={philosophyImg} alt="Engineer at work" className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
            </div>
            <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-primary-container flex items-center justify-center text-center text-primary-container-foreground font-label font-bold text-[10px] uppercase tracking-wider">
              Built<br />for Snow
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="bg-primary-container rounded-[3rem] py-20 px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary-container-foreground tracking-tighter mb-10 leading-tight">
            Ready to power your home<br />with the Kashmir sun?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-on-surface text-surface px-8 py-4 rounded-full font-headline font-bold hover:opacity-90 transition-opacity">
              Book a Free Consultation
            </Link>
            <Link to="/gallery" className="bg-card/50 text-on-surface px-8 py-4 rounded-full font-headline font-bold hover:bg-card transition-colors">
              See Our Installations
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
