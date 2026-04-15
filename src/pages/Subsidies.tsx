import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import subsidiesHero from "@/assets/subsidies-hero.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const faqData = [
  {
    q: "What is the subsidy amount for a 3kW system?",
    a: "For a residential rooftop solar system of 3kW, you are eligible for a subsidy of approximately ₹78,000, significantly reducing the initial investment.",
  },
  {
    q: "How long does the installation take with Solaris?",
    a: "Once the feasibility is approved by the DISCOM, Solaris typically completes the physical installation within 3-5 working days.",
  },
  {
    q: "Who will maintain the solar panels?",
    a: "Solaris provides comprehensive maintenance support for the first 5 years as per the scheme guidelines, ensuring your system runs at peak efficiency.",
  },
];

const Subsidies = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-surface text-on-surface font-body">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={subsidiesHero} alt="Solar Panels" className="w-full h-full object-cover brightness-[0.4] grayscale-[20%]" width={1920} height={1080} />
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-container text-primary-container-foreground font-label font-medium text-xs tracking-widest uppercase">
                Government Initiative 2024
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-black text-card leading-[1.1] mb-8 tracking-tight editorial-text-shadow">
                Harness the Power of the Sun with PM Surya Ghar Yojana
              </h1>
              <p className="text-xl text-card/80 mb-10 leading-relaxed max-w-2xl">
                Empowering households with clean energy and massive savings. Experience the technical excellence of Solaris paired with the financial freedom of the national solar subsidy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-headline font-extrabold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                  Apply for Subsidy Now
                </button>
                <button className="bg-card/10 backdrop-blur-md border border-card/20 text-card px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-card/20 transition-all">
                  Check Savings
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-6 leading-tight">Empowering 1 Crore Households</h2>
                <div className="h-1.5 w-24 bg-primary mb-8 rounded-full"></div>
                <p className="text-lg text-secondary leading-relaxed mb-8">
                  The PM Surya Ghar: Muft Bijli Yojana is a landmark central scheme aimed at providing free electricity to households in India. By installing rooftop solar systems, citizens can receive up to 300 units of free electricity every month.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-tertiary-container/30 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-tertiary">energy_savings_leaf</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface">Significant Cost Savings</h4>
                      <p className="text-secondary text-sm">Save up to ₹15,000–18,000 annually on electricity bills.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/30 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-primary">account_balance</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-on-surface">Direct Bank Subsidy</h4>
                      <p className="text-secondary text-sm">Get financial assistance credited directly to your bank account.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-8 rounded-3xl mt-12">
                  <h3 className="text-5xl font-headline font-black text-primary mb-2">₹75K</h3>
                  <p className="font-label font-bold text-on-surface uppercase tracking-wider text-xs">Maximum Subsidy</p>
                  <p className="mt-4 text-sm text-secondary">Available for rooftop systems up to 3kW capacity for residential consumers.</p>
                </div>
                <div className="bg-surface-container-highest p-8 rounded-3xl">
                  <h3 className="text-5xl font-headline font-black text-tertiary mb-2">300</h3>
                  <p className="font-label font-bold text-on-surface uppercase tracking-wider text-xs">Free Units / Mo</p>
                  <p className="mt-4 text-sm text-secondary">Zero-cost energy for your home through efficient grid-connected solar.</p>
                </div>
                <div className="col-span-2 bg-inverse-surface p-12 rounded-3xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-headline font-bold text-inverse-on-surface mb-6">Are you eligible?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-inverse-on-surface/80">
                      {["Indian Citizenship", "Own a Residential Roof", "Valid Electricity Connection", "No Prior Solar Subsidy"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <span className="material-symbols-outlined text-[200px]">solar_power</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8 text-center mb-20">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">How to Apply with Solaris</h2>
            <p className="text-secondary max-w-2xl mx-auto">We handle the technical complexities and bureaucratic paperwork, so you can focus on the savings.</p>
          </div>
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: "01", icon: "app_registration", title: "Registration", desc: "Register on the National Portal with your consumer number and mobile." },
              { num: "02", icon: "engineering", title: "Solaris Install", desc: "Choose Solaris as your vendor. We handle the design and installation.", offset: true },
              { num: "03", icon: "fact_check", title: "Inspection", desc: "Post-installation inspection and net-meter installation by DISCOM." },
              { num: "04", icon: "payments", title: "Subsidy Credit", desc: "Submit details on the portal. Subsidy arrives in your bank in 30 days.", offset: true },
            ].map((step) => (
              <div key={step.num} className={`group relative p-8 bg-card rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 ${step.offset ? "md:mt-12" : ""}`}>
                <div className="text-6xl font-headline font-black text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">{step.num}</div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">{step.icon}</span>
                <h3 className="font-headline font-bold text-xl mb-4">{step.title}</h3>
                <p className="text-secondary text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 bg-surface">
          <div className="max-w-4xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-extrabold text-on-surface">Common Questions</h2>
            </div>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <div
                  key={i}
                  className="bg-surface-container-low p-8 rounded-2xl cursor-pointer hover:bg-surface-container transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-headline font-bold text-lg">{faq.q}</h3>
                    <span className={`material-symbols-outlined text-primary transition-transform ${openFaq === i ? "rotate-45" : ""}`}>add</span>
                  </div>
                  {openFaq === i && (
                    <div className="mt-4 text-secondary leading-relaxed">{faq.a}</div>
                  )}
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
                <h2 className="text-4xl md:text-5xl font-headline font-black text-primary-foreground mb-8">
                  Ready to start your journey to energy independence?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-12 max-w-2xl mx-auto">
                  Join thousands of households across the nation. Solaris is your trusted partner for engineering excellence and subsidy navigation.
                </p>
                <button className="bg-card text-primary px-12 py-6 rounded-full font-headline font-black text-xl hover:bg-primary-container hover:text-primary-container-foreground transition-all active:scale-95 shadow-2xl">
                  Apply for Subsidy Now
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

export default Subsidies;
