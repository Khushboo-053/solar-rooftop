import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SavingsCalculator from "@/components/SavingsCalculator";

const Calculator = () => (
  <div className="bg-surface-container-low text-on-surface font-body min-h-screen">
    <Navbar />
    <main className="pt-32 pb-24">
      <header className="max-w-4xl mx-auto px-8 text-center mb-12">
        <span className="inline-block py-2 px-4 rounded-full bg-tertiary-container text-tertiary-container-foreground font-label text-xs font-bold uppercase tracking-widest mb-6">
          Solar Savings Calculator
        </span>
        <h1 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-5">
          Calculate Your Solar Savings in 60 Seconds
        </h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          Adjust your monthly bill — or pick the system size you want directly — and see your subsidy, EMI, and payback instantly.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-8">
        <SavingsCalculator />
      </section>
    </main>
    <Footer />
  </div>
);

export default Calculator;
