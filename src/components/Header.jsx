import { useState } from "react";
import { Menu, X } from "lucide-react";

const WA_LINK = "https://wa.me/5491160475841";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

function RoofLogo() {
  return (
    <svg width="46" height="36" viewBox="0 0 46 36" fill="none">
      <path d="M3 22 23 4l20 18" stroke="#8a8a92" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 20 23 8l15 12" stroke="#d61f2b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="22" width="10" height="10" rx="1" fill="#d61f2b" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-negro/82 backdrop-blur-md border-b border-white/6">
      <div className="max-w-[1240px] mx-auto px-6">
        <nav className="flex items-center justify-between h-[78px]">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 no-underline">
            <RoofLogo />
            <span className="font-display leading-tight">
              <span className="text-rojo font-bold text-[22px] tracking-widest block">BLANCO</span>
              <span className="text-gris-cl text-[11px] tracking-[3px] font-medium block uppercase">CONSTRUCCIONES</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-[15px] uppercase tracking-[1px] text-gris-cl hover:text-white relative
                  after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:bg-rojo after:w-0 hover:after:w-full after:transition-all after:duration-300 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex font-display font-semibold text-[14px] uppercase tracking-[1px] text-white
              bg-rojo hover:bg-rojo-osc px-[22px] py-[11px] rounded-[6px] transition-all duration-200 hover:-translate-y-0.5
              shadow-[0_6px_18px_rgba(214,31,43,0.32)]"
          >
            Presupuesto
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gris-cl hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-carbon border-t border-white/6 px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-[15px] uppercase tracking-[1px] text-gris-cl hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-semibold text-[14px] uppercase tracking-[1px] text-white
              bg-rojo hover:bg-rojo-osc px-5 py-3 rounded-[6px] text-center transition-colors"
          >
            Presupuesto
          </a>
        </div>
      )}
    </header>
  );
}
