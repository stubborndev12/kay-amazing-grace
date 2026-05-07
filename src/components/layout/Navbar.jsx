import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const EAGLE_LOGO = "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/6b304a301_ChatGPTImageMay7202604_17_01PM.png";
const WA_URL = "https://wa.me/2348035239489?text=Hello%20Kay%20Amazing%20Grace%20Global%2C%20I%27m%20interested%20in%20your%20bale%20products.%20Please%20send%20availability%20and%20current%20wholesale%20pricing.";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Bale Categories" },
  { path: "/about", label: "About Us" },
  { path: "/#why-choose-us", label: "Why Choose Us" },
  { path: "/contact", label: "Contact" },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#B8860B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[70px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img
                src={EAGLE_LOGO}
                alt="Kay Amazing Grace Global"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11.5px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 relative group ${
                    isActive(link.path)
                      ? "text-[#B8860B]"
                      : "text-white/70 hover:text-[#B8860B]"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-0.5 left-0 h-px bg-[#B8860B] transition-all duration-300 ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B8860B] text-black text-[11px] font-bold uppercase tracking-widest hover:bg-[#D4A017] transition-colors duration-200"
              >
                <WhatsAppIcon />
                Order via WhatsApp
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center w-9 h-9 text-white hover:text-[#B8860B] transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Gold accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B8860B]/60 to-transparent" />
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[300px] bg-[#0d0d0d] border-r border-[#B8860B]/20 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 h-[70px] border-b border-[#B8860B]/20">
                <img src={EAGLE_LOGO} alt="Kay Amazing Grace Global" className="h-10 w-auto object-contain" />
                <button onClick={() => setIsOpen(false)} className="p-2 text-white/60 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block px-4 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors border-b border-white/5 ${
                        isActive(link.path)
                          ? "text-[#B8860B]"
                          : "text-white/70 hover:text-[#B8860B]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="px-5 pb-8">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#B8860B] text-black text-sm font-bold uppercase tracking-widest hover:bg-[#D4A017] transition-colors"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
                <p className="text-center text-[10px] text-white/30 mt-3 uppercase tracking-widest">
                  Quality · Trust · Style
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}