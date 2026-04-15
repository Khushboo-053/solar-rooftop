import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Subsidies", path: "/subsidies" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link to="/" className="text-2xl font-black text-primary tracking-tighter font-headline">
          SOLARIS
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary border-b-2 border-primary pb-1 font-bold font-headline"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="hidden md:block bg-primary text-primary-foreground px-8 py-3 rounded-full font-headline font-bold hover:opacity-80 transition-all duration-300 active:scale-95">
          Free Quote
        </button>
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl px-8 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 font-medium ${
                location.pathname === link.path
                  ? "text-primary font-bold"
                  : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-full font-headline font-bold">
            Free Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
