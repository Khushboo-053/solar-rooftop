import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroSolar from "@/assets/hero-solar.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const Index = () => {
  const [billAmount, setBillAmount] = useState(250);
  const [systemSize, setSystemSize] = useState(8.5);
  const annualSavings = Math.round(billAmount * 12 * 0.8 * (systemSize / 10));

  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-block py-2 px-4 rounded-full bg-tertiary-container text-tertiary-container-foreground font-label font-medium text-sm mb-6">
                Renewable Engineering Excellence
              </span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
                Cut Your Electricity Bills by <span className="text-primary italic">Up to 80%</span> with Solar
              </h1>
              <p className="text-xl text-secondary max-w-xl mb-10 leading-relaxed">
                Transition to high-efficiency solar energy with Solaris. Our expert installation team ensures your home reaches its peak radiant potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-headline font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                  Check My Subsidy Eligibility
                </button>
                <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-headline font-bold text-lg hover:bg-surface-container-high transition-all">
                  Calculate Savings
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src={heroSolar}
                  alt="Solar Installation"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  width={1280}
                  height={800}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-panel p-6 rounded-2xl shadow-xl max-w-[240px] border border-outline-variant/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  <span className="font-label text-sm font-bold text-tertiary uppercase tracking-widest">Live Performance</span>
                </div>
                <div className="text-3xl font-headline font-black text-on-surface">9.8 kW</div>
                <p className="text-xs text-secondary mt-1">Generating clean energy for your sustainable home.</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-container/20 to-transparent pointer-events-none"></div>
        </section>

        {/* Why Choose */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-20 max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Why Choose Solaris?</h2>
              <div className="h-2 w-24 bg-primary rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "bolt", title: "Maximized Efficiency", desc: "Our monocrystalline panels capture up to 23% more sunlight than industry standard alternatives.", color: "bg-primary-container", iconColor: "text-primary" },
                { icon: "verified", title: "Tier 1 Certification", desc: "Every component in our system meets the rigorous Tier 1 engineering standards for long-term durability.", color: "bg-tertiary-container", iconColor: "text-tertiary", offset: true },
                { icon: "engineering", title: "Expert Installation", desc: "In-house certified technicians handle every bolt and wire, ensuring a seamless, worry-free deployment.", color: "bg-surface-container", iconColor: "text-secondary", offset2: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`bg-card p-10 rounded-[2rem] hover:translate-y-[-8px] transition-transform duration-500 ${
                    item.offset ? "md:mt-12" : item.offset2 ? "md:mt-24" : ""
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8`}>
                    <span className={`material-symbols-outlined ${item.iconColor} text-3xl`}>{item.icon}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Savings Calculator */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-8">The Savings Architecture</h2>
                <p className="text-xl text-secondary mb-12 leading-relaxed">
                  Configure your solar ecosystem. Adjust the parameters below to see how the radiant authority can transform your monthly overhead into long-term equity.
                </p>
                <div className="space-y-10 bg-surface-container-low p-8 rounded-3xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="font-headline font-bold text-on-surface">Monthly Bill Amount</label>
                      <span className="text-primary font-black text-xl">${billAmount}</span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={1000}
                      value={billAmount}
                      onChange={(e) => setBillAmount(Number(e.target.value))}
                      className="w-full h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-secondary font-label">
                      <span>$50</span>
                      <span>$1000</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="font-headline font-bold text-on-surface">System Size (kW)</label>
                      <span className="text-primary font-black text-xl">{systemSize} kW</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={20}
                      step={0.5}
                      value={systemSize}
                      onChange={(e) => setSystemSize(Number(e.target.value))}
                      className="w-full h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-secondary font-label">
                      <span>2 kW</span>
                      <span>20 kW</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-inverse-surface text-inverse-on-surface p-12 rounded-[2.5rem] shadow-2xl">
                  <h4 className="font-headline text-lg font-bold mb-2 opacity-70">Estimated Annual Savings</h4>
                  <div className="text-7xl font-headline font-black text-primary-container mb-8">${annualSavings.toLocaleString()}</div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                        <span className="material-symbols-outlined text-tertiary-foreground">eco</span>
                      </div>
                      <div>
                        <div className="font-bold">Carbon Offset</div>
                        <div className="text-sm opacity-70">12.4 Metric Tons/Year</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary-foreground">schedule</span>
                      </div>
                      <div>
                        <div className="font-bold">Payback Period</div>
                        <div className="text-sm opacity-70">Estimated 4.2 Years</div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-12 bg-primary-container text-primary-container-foreground py-5 rounded-full font-headline font-bold text-lg hover:opacity-90 transition-all">
                    Get Detailed Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-20">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Marcus Thorne", role: "Homeowner in Austin, TX", quote: "The transition was seamless. Solaris handled the subsidy paperwork and the installation was finished in two days. Our bill has dropped by nearly 75%." },
                { name: "Elena Rodriguez", role: "Architectural Designer", quote: "Expert installation is an understatement. The crew was professional, clean, and the technology they installed is top-tier. Highly recommend Solaris for any high-end residential project." },
                { name: "Samuel Chen", role: "Tech Executive", quote: "What impressed me most was the transparent communication. They didn't just sell me panels; they engineered a custom solution for my family's energy needs." },
              ].map((t, i) => (
                <div key={i} className="bg-card p-8 rounded-3xl shadow-sm">
                  <div className="flex gap-1 mb-6 text-primary">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-lg italic leading-relaxed text-muted-foreground mb-8">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-headline font-bold text-primary">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-secondary">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-primary rounded-[3rem] p-16 relative overflow-hidden flex flex-col items-center text-center">
              <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" loading="lazy" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-headline font-black text-primary-foreground mb-8">Ready to harness the sun?</h2>
                <p className="text-primary-foreground/80 text-lg mb-12 max-w-2xl mx-auto">
                  Join over 12,000 households engineering a cleaner, cheaper future with Solaris Radiant Authority.
                </p>
                <button className="bg-card text-primary px-12 py-6 rounded-full font-headline font-black text-xl hover:bg-primary-container hover:text-primary-container-foreground transition-all active:scale-95 shadow-2xl">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
