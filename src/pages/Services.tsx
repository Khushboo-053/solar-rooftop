import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import rooftopSolar from "@/assets/rooftop-solar.jpg";
import groundMountSolar from "@/assets/ground-mount-solar.jpg";
import maintenanceSolar from "@/assets/maintenance-solar.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const Services = () => (
  <div className="bg-surface text-on-surface font-body">
    <Navbar />
    <main className="pt-32">
      {/* Hero Header */}
      <header className="px-8 max-w-7xl mx-auto mb-24">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-container-low mb-6">
          <span className="text-primary font-label text-xs font-bold uppercase tracking-widest">Engineering Excellence</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-[0.9] max-w-4xl">
          Our Solar Solutions
        </h1>
        <p className="mt-8 text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Precision-engineered solar infrastructure designed for durability, maximum energy yields, and seamless architectural integration.
        </p>
      </header>

      <section className="px-8 max-w-7xl mx-auto space-y-12">
        {/* Rooftop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 rounded-3xl overflow-hidden aspect-[16/10] bg-surface-container-low group">
            <img src={rooftopSolar} alt="Rooftop Solar Installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={800} />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="w-16 h-16 rounded-2xl bg-primary-container flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-primary-container-foreground text-3xl">solar_power</span>
            </div>
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tight">Rooftop Solar Installation</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Tailored for both residential dwellings and commercial complexes. Our rooftop systems leverage ultra-efficient photovoltaic technology to transform your underutilized surface area into a high-performance power plant.
            </p>
            <Link to="/contact" className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all">
              Learn More <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Ground-Mount */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-24">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <div className="w-16 h-16 rounded-2xl bg-tertiary-container flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-tertiary-container-foreground text-3xl">landscape</span>
            </div>
            <h2 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tight">Ground-Mount Solar Systems</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For expansive properties and utility-scale needs, our ground-mount solutions provide optimal tilt and tracking capabilities. Engineered with structural precision to withstand extreme weather while maximizing kilowatt output per acre.
            </p>
            <Link to="/contact" className="inline-flex items-center text-primary font-bold hover:gap-3 transition-all">
              Learn More <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 rounded-3xl overflow-hidden aspect-[16/10] bg-surface-container-low group">
            <img src={groundMountSolar} alt="Ground-Mount Solar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={800} />
          </div>
        </div>

        {/* Maintenance */}
        <div className="pt-24">
          <div className="bg-surface-container-low rounded-[2rem] p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center mb-8 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl">insights</span>
              </div>
              <h2 className="text-4xl font-headline font-bold text-on-surface mb-6 tracking-tight">Maintenance & Monitoring</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                System performance is non-negotiable. We offer real-time AI-driven monitoring that detects anomalies before they impact your yield. Our proactive maintenance teams ensure your investment remains at peak efficiency for decades.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                  <span className="font-medium text-on-surface">24/7 Remote Diagnostics</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="material-symbols-outlined text-tertiary">check_circle</span>
                  <span className="font-medium text-on-surface">Annual Efficiency Audits</span>
                </div>
              </div>
              <Link to="/contact" className="bg-on-surface text-surface py-4 px-8 rounded-full font-headline font-bold inline-block hover:opacity-90 transition-opacity">
                Learn More
              </Link>
            </div>
            <div className="relative lg:absolute lg:-right-20 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-1/2 h-[400px] lg:h-[80%] rounded-3xl overflow-hidden shadow-2xl">
              <img src={maintenanceSolar} alt="Maintenance" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-48 px-8 max-w-7xl mx-auto">
        <div className="gradient-glow rounded-[3rem] py-24 px-12 text-center relative overflow-hidden">
          <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" loading="lazy" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-headline font-black text-primary-foreground tracking-tighter mb-8 leading-tight">
              Ready to Engineer<br />Your Energy Future?
            </h2>
            <p className="text-primary-foreground/80 text-xl max-w-2xl mx-auto mb-12">
              Join hundreds of homeowners and businesses across J&K making the transition with Karsaaz.
            </p>
            <Link to="/contact" className="bg-card text-primary px-12 py-5 rounded-full font-headline font-extrabold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl inline-block">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Services;
