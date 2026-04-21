import { Link } from "react-router-dom";
import karsaazLogo from "@/assets/karsaaz-logo.png";

const Footer = () => (
  <footer className="w-full py-16 px-8 mt-24 bg-surface-dim">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
      <div>
        <img src={karsaazLogo} alt="Karsaaz" className="h-10 w-auto mb-6" />
        <p className="text-secondary text-sm leading-relaxed font-body">
          Leading the transition to high-efficiency solar infrastructure across Jammu &amp; Kashmir.
        </p>
      </div>
      <div>
        <h4 className="font-headline font-bold text-on-surface mb-6">Navigation</h4>
        <ul className="space-y-4 font-label text-sm">
          <li><Link to="/solutions" className="text-secondary hover:text-primary transition-colors">Solutions</Link></li>
          <li><Link to="/services" className="text-secondary hover:text-primary transition-colors">Services</Link></li>
          <li><Link to="/subsidies" className="text-secondary hover:text-primary transition-colors">Subsidies</Link></li>
          <li><Link to="/contact" className="text-secondary hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-headline font-bold text-on-surface mb-6">Resources</h4>
        <ul className="space-y-4 font-label text-sm">
          <li><Link to="/calculator" className="text-secondary hover:text-primary transition-colors">Savings Calculator</Link></li>
          <li><Link to="/about" className="text-secondary hover:text-primary transition-colors">About Us</Link></li>
          <li><Link to="/blogs" className="text-secondary hover:text-primary transition-colors">Blogs</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-headline font-bold text-on-surface mb-6">Contact</h4>
        <ul className="space-y-4 font-label text-sm">
          <li className="flex items-center gap-2 text-secondary">
            <span className="material-symbols-outlined text-base">mail</span>
            karsaazsolar@gmail.com
          </li>
          <li className="flex items-center gap-2 text-secondary">
            <span className="material-symbols-outlined text-base">phone</span>
            +91 6005280698 / +91 7006737200
          </li>
          <li className="flex items-start gap-2 text-secondary">
            <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
            <span>Branches: Pulwama | Sangrama | Sopore</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-outline-variant/20 text-center text-xs text-secondary font-label">
      © 2024 Karsaaz. Engineering the future of energy in J&amp;K.
    </div>
  </footer>
);

export default Footer;
