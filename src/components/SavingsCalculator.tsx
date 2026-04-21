import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  embedded?: boolean;
}

const SavingsCalculator = ({ embedded = false }: Props) => {
  const navigate = useNavigate();
  const [billAmount, setBillAmount] = useState(1500);
  const [systemSize, setSystemSize] = useState(3);
  const [userTouchedSize, setUserTouchedSize] = useState(false);
  const [connectionType, setConnectionType] = useState("Residential");
  const [loanTenure, setLoanTenure] = useState(7);

  // Auto-derive system size from bill UNLESS the user manually changed it
  useEffect(() => {
    if (!userTouchedSize) {
      const derived = Math.max(1, Math.min(10, Math.round(billAmount / 500)));
      setSystemSize(derived);
    }
  }, [billAmount, userTouchedSize]);

  const monthlySavings = systemSize * 500;
  const subsidy =
    systemSize <= 2 ? 30000 : systemSize === 3 ? 78000 : 78000 + (systemSize - 3) * 5400;
  const grossCost = systemSize * 55000;
  const netCost = Math.max(0, grossCost - subsidy);
  const downPayment = Math.round(netCost * 0.12);
  const principal = netCost - downPayment;
  const monthlyRate = 0.064 / 12;
  const months = loanTenure * 12;
  const emi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1)
  );

  return (
    <div className={`bg-card rounded-[2rem] p-6 md:p-12 ${embedded ? "" : "shadow-sm border border-outline-variant/20"}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Inputs */}
        <div className="space-y-10">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="font-headline font-bold text-on-surface">Monthly Bill Amount</label>
              <span className="text-primary font-black text-xl">₹{billAmount.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={5000}
              step={100}
              value={billAmount}
              onChange={(e) => {
                setBillAmount(Number(e.target.value));
                setUserTouchedSize(false);
              }}
              className="w-full h-1.5 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-secondary font-label">
              <span>₹1k</span>
              <span>₹5k</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="font-headline font-bold text-on-surface">Recommended System Size</label>
              <span className="text-primary font-black text-xl">{systemSize} kW</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={systemSize}
              onChange={(e) => {
                setSystemSize(Number(e.target.value));
                setUserTouchedSize(true);
              }}
              className="w-full h-1.5 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-secondary font-label">
              <span>1 kW</span>
              <span>10 kW</span>
            </div>
            {userTouchedSize && (
              <button
                onClick={() => setUserTouchedSize(false)}
                className="text-xs text-primary font-label font-bold hover:underline"
              >
                Reset to recommended
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-headline font-bold text-on-surface text-sm">Connection Type</label>
              <select
                value={connectionType}
                onChange={(e) => setConnectionType(e.target.value)}
                className="w-full bg-card border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option>Residential</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-headline font-bold text-on-surface text-sm">Loan Tenure</label>
              <select
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full bg-card border border-outline-variant/40 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value={3}>3 Years</option>
                <option value={5}>5 Years</option>
                <option value={7}>7 Years</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results panel */}
        <div className="bg-inverse-surface text-inverse-on-surface p-8 md:p-10 rounded-[1.75rem]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            <div>
              <p className="text-xs font-label font-bold uppercase tracking-widest opacity-60 mb-2">Rec. System Size</p>
              <p className="text-3xl font-headline font-black">{systemSize} kW</p>
            </div>
            <div>
              <p className="text-xs font-label font-bold uppercase tracking-widest opacity-60 mb-2">Est. Monthly Savings</p>
              <p className="text-3xl font-headline font-black text-tertiary-container">₹{monthlySavings.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs font-label font-bold uppercase tracking-widest opacity-60 mb-2">Est. Net Cost</p>
              <p className="text-3xl font-headline font-black text-primary-container">₹{netCost.toLocaleString()}</p>
              <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-tertiary/30 text-tertiary-container">
                Includes ₹{subsidy.toLocaleString()} Subsidy
              </span>
            </div>
            <div>
              <p className="text-xs font-label font-bold uppercase tracking-widest opacity-60 mb-2">Est. Monthly EMI</p>
              <p className="text-3xl font-headline font-black">₹{emi.toLocaleString()}</p>
              <p className="text-xs opacity-60 mt-1">@ 6.4% interest / {loanTenure}yrs</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs font-label font-bold uppercase tracking-widest opacity-60 mb-2">Est. Down Payment</p>
              <p className="text-3xl font-headline font-black">₹{downPayment.toLocaleString()}</p>
            </div>
          </div>
          <div className="border-t border-inverse-on-surface/10 mt-8 pt-6 text-center">
            <p className="text-xs opacity-60 italic mb-5">
              *EMI based on selected tenure & applicable interest rates. Actual terms may vary.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="w-full bg-primary text-primary-foreground py-4 rounded-full font-headline font-bold text-base hover:opacity-90 transition-all"
            >
              Get Detailed Quote Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
