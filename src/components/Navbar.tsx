import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import karsaazLogo from "@/assets/karsaaz-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Solutions", path: "/solutions", hasDropdown: true },
  { label: "Subsidies", path: "/subsidies" },
  { label: "About", path: "/about" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

const solutionsItems = [
  {
    label: "Residential Solar",
    path: "/solutions#residential",
    icon: "home",
    description: "Save up to 80% on home electricity.",
    iconBg: "bg-tertiary-container/30 text-tertiary",
  },
  {
    label: "Commercial Solar",
    path: "/solutions#commercial",
    icon: "apartment",
    description: "High-ROI solar for business.",
    iconBg: "bg-primary-container/30 text-primary",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link to="/" className="flex items-center" aria-label="Karsaaz home">
          <img src={karsaazLogo} alt="Karsaaz" className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary font-bold font-headline"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span className={`material-symbols-outlined text-base transition-transform ${solutionsOpen ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                {solutionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                    <div className="bg-card rounded-3xl shadow-2xl border border-border/40 p-6 w-[480px] grid grid-cols-2 gap-4">
                      {solutionsItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="p-4 rounded-2xl hover:bg-surface-container-low transition-colors group"
                        >
                          <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-4`}>
                            <span className="material-symbols-outlined">{item.icon}</span>
                          </div>
                          <div className="font-headline font-bold text-on-surface mb-1">{item.label}</div>
                          <div className="text-sm text-muted-foreground leading-snug">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
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
            )
          )}
        </div>
        <Link
          to="/contact"
          className="hidden md:block bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-headline font-bold hover:opacity-80 transition-all duration-300 active:scale-95 text-sm"
        >
          Free Quote
        </Link>
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
                location.pathname === link.path ? "text-primary font-bold" : "text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full bg-primary text-primary-foreground py-3 rounded-full font-headline font-bold text-center"
          >
            Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
