import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import subsidiesHero from "@/assets/subsidies-hero.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const faqData = [
  {
    q: "What is the subsidy amount for a 3kW system?",
    a: "For a residential rooftop solar system of 3kW in J&K, you are eligible for ₹85,800 central + ₹9,000 UT subsidy = ₹94,800 total, significantly reducing the initial investment.",
  },
  {
    q: "How long does the installation take?",
    a: "Once feasibility is approved by the DISCOM, our certified team typically completes the physical installation within 3-5 working days.",
  },
  {
    q: "How long until the subsidy is credited to my account?",
    a: "After commissioning and net-meter installation by KPDCL/JPDCL, the subsidy is credited directly to your bank account within 30-45 days.",
  },
  {
    q: "Who handles the paperwork?",
    a: "We do — start to finish. Our team handles application on the National Portal, DISCOM coordination, and the commissioning report submission.",
  },
];

const pricingTable = [
  { kw: "1 kW", price: "55,000", central: "33,000", ut: "3,000", total: "36,000", net: "19,000", popular: false },
  { kw: "2 kW", price: "1,10,000", central: "66,000", ut: "6,000", total: "72,000", net: "38,000", popular: false },
  { kw: "3 kW", price: "1,59,500", central: "85,800", ut: "9,000", total: "94,800", net: "64,700", popular: false },
  { kw: "4 kW", price: "2,09,000", central: "85,800", ut: "9,000", total: "94,800", net: "1,14,200", popular: false },
  { kw: "5 kW", price: "2,58,500", central: "85,800", ut: "9,000", total: "94,800", net: "1,63,700", popular: true },
  { kw: "6 kW", price: "3,08,000", central: "85,800", ut: "9,000", total: "94,800", net: "2,13,200", popular: false },
  { kw: "7 kW", price: "3,57,500", central: "85,800", ut: "9,000", total: "94,800", net: "2,62,700", popular: false },
  { kw: "8 kW", price: "4,07,000", central: "85,800", ut: "9,000", total: "94,800", net: "3,12,200", popular: false },
  { kw: "9 kW", price: "4,56,500", central: "85,800", ut: "9,000", total: "94,800", net: "3,61,700", popular: false },
  { kw: "10 kW", price: "5,06,000", central: "85,800", ut: "9,000", total: "94,800", net: "4,11,200", popular: false },
];

const documents = [
  "Latest Electricity Bill (Consumer Number)",
  "Aadhar Card (Linked with Mobile)",
  "Bank Passbook / Cancelled Cheque",
  "Pan Card (Optional)",
  "Passport Size Photograph",
  "Roof Photograph (We handle this)",
];

const Subsidies = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const navigate = useNavigate();

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
                Government Initiative for J&amp;K
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-black text-card leading-[1.1] mb-8 tracking-tight editorial-text-shadow">
                PM Surya Ghar:<br />Muft Bijli Yojana
              </h1>
              <p className="text-xl text-card/80 mb-10 leading-relaxed max-w-2xl">
                Complete pricing &amp; subsidy breakdown for the J&amp;K region. Receive up to 300 units of free electricity per month with rooftop solar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-headline font-extrabold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                >
                  Apply for Subsidy Now
                </button>
                <button
                  onClick={() => navigate("/calculator")}
                  className="bg-card/10 backdrop-blur-md border border-card/20 text-card px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-card/20 transition-all"
                >
                  Check Savings
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-headline font-extrabold mb-6">Program Overview</h2>
              <p className="text-secondary text-lg leading-relaxed">
                The PM Surya Ghar: Muft Bijli Yojana is a central government scheme tailored to promote solar adoption in residential households. For residents of Jammu &amp; Kashmir, this scheme is particularly beneficial due to the additional Union Territory (UT) subsidy component.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "savings", title: "Reduced Bills", desc: "Save up to 80-100% on your monthly electricity bills." },
                { icon: "account_balance", title: "Direct Subsidy", desc: "Subsidy amount credited directly to your bank account." },
                { icon: "eco", title: "Eco-Friendly", desc: "Contribute to a greener planet by reducing carbon footprint." },
              ].map((c) => (
                <div key={c.title} className="bg-surface-container-low rounded-3xl p-8">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{c.icon}</span>
                  <h3 className="font-headline font-bold text-xl mb-3">{c.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Handle Subsidy */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-extrabold mb-4">How We Handle Your Subsidy</h2>
              <p className="text-secondary max-w-2xl mx-auto">End-to-end support — you focus on the savings.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "Application & Feasibility", desc: "We collect your documents and apply on the National Portal. After technical feasibility approval from DISCOM, we proceed with installation." },
                { num: "2", title: "Installation & Net Metering", desc: "Our certified team installs the system. We then coordinate with KPDCL/JPDCL for inspection and net-meter installation." },
                { num: "3", title: "Subsidy Release", desc: "We upload commissioning reports. You receive the subsidy directly in your bank account within 30-45 days." },
              ].map((s) => (
                <div key={s.num} className="bg-card rounded-3xl p-8 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-headline font-black text-xl shadow-lg">
                    {s.num}
                  </div>
                  <h3 className="font-headline font-bold text-xl mb-3 mt-4">{s.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-headline font-extrabold mb-4">Pricing &amp; Subsidy Breakdown</h2>
              <p className="text-secondary max-w-2xl mx-auto">Indicative pricing for J&amp;K residential systems including structure &amp; installation.</p>
            </div>
            <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-outline-variant/20">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-surface-container-low">
                    <tr>
                      <th className="px-6 py-4 text-left font-label font-bold uppercase tracking-widest text-xs">Capacity</th>
                      <th className="px-6 py-4 text-right font-label font-bold uppercase tracking-widest text-xs">Approx Price (₹)</th>
                      <th className="px-6 py-4 text-right font-label font-bold uppercase tracking-widest text-xs">Central Subsidy (₹)</th>
                      <th className="px-6 py-4 text-right font-label font-bold uppercase tracking-widest text-xs">UT Subsidy (₹)</th>
                      <th className="px-6 py-4 text-right font-label font-bold uppercase tracking-widest text-xs">Total Subsidy (₹)</th>
                      <th className="px-6 py-4 text-right font-label font-bold uppercase tracking-widest text-xs">Net Cost (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTable.map((row) => (
                      <tr key={row.kw} className={`border-t border-outline-variant/20 ${row.popular ? "bg-primary-container/20" : "hover:bg-surface-container-low/50"}`}>
                        <td className="px-6 py-4 font-headline font-bold">
                          {row.kw}
                          {row.popular && (
                            <span className="ml-2 text-[10px] font-label font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                              Most Popular
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-right">{row.price}</td>
                        <td className="px-6 py-4 text-right">{row.central}</td>
                        <td className="px-6 py-4 text-right">{row.ut}</td>
                        <td className="px-6 py-4 text-right font-bold text-tertiary">{row.total}</td>
                        <td className="px-6 py-4 text-right font-bold text-primary">{row.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 text-xs text-secondary italic border-t border-outline-variant/20">
                *Prices are indicative and subject to change. Net Cost includes structure and installation.
              </div>
            </div>
            <div className="text-center mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-headline font-bold hover:opacity-90 transition-all"
              >
                Check My Eligibility &amp; Apply <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-5xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-headline font-extrabold mb-4">Required Documents</h2>
              <p className="text-secondary">Keep these handy when you book your consultation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((d) => (
                <div key={d} className="bg-card rounded-2xl p-5 flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-xl mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="text-on-surface text-sm">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-surface">
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
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-primary rounded-[3rem] p-16 relative overflow-hidden flex flex-col items-center text-center">
              <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay" loading="lazy" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-headline font-black text-primary-foreground mb-8">
                  Ready to start your journey to energy independence?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-12 max-w-2xl mx-auto">
                  Join 50+ households across J&amp;K. We're your trusted partner for engineering excellence and subsidy navigation.
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-card text-primary px-12 py-6 rounded-full font-headline font-black text-xl hover:bg-primary-container hover:text-primary-container-foreground transition-all active:scale-95 shadow-2xl"
                >
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
