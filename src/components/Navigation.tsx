import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Compliance", path: "/compliance" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-brand-blue/10 shadow-sm group-hover:border-brand-orange/30 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200" 
                alt="LJC Capital Consulting Logo" 
                className="w-full h-full object-contain p-1"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-tight text-brand-blue">
                LJC CAPITAL
              </span>
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-brand-orange mt-1">
                CONSULTING
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  location.pathname === link.path ? "text-brand-orange" : "text-brand-blue/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-blue">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-brand-blue/10 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-brand-blue hover:text-brand-orange"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-blue text-brand-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200" 
                  alt="LJC Capital Consulting Logo" 
                  className="w-full h-full object-contain p-1"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                LJC CAPITAL CONSULTING
              </span>
            </div>
            <p className="text-brand-cream/70 max-w-md mb-6">
              Institutional coordination and consulting firm specializing in digital assets, precious metals, and emerging technologies.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-brand-orange" />
                <span>3291 GARMON Drive, Loganville, GA 30052, USA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-brand-orange" />
                <span>626 673-0536</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-brand-orange" />
                <span>LPoux@LJCCapitalConsulting.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-gold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-brand-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-brand-gold uppercase tracking-widest text-xs">Operations</h4>
            <ul className="space-y-4 text-sm text-brand-cream/70">
              <li>Institutional Gold</li>
              <li>BTC/USDT Coordination</li>
              <li>Clean Energy Systems</li>
              <li>Edge AI Infrastructure</li>
              <li>Water Purification</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-cream/50">
          <p>© 2026 LJC Capital Consulting, LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/compliance" className="hover:text-brand-cream">Compliance</Link>
            <Link to="/privacy" className="hover:text-brand-cream">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
