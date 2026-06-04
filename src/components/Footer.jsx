const IG_LINK = "https://instagram.com/blanco_construcciones.77";
const FB_LINK = "https://www.facebook.com/share/1GV6jb7jMt/";
const TEL_LINK = "tel:+5491160475841";

function RoofLogo() {
  return (
    <svg width="46" height="36" viewBox="0 0 46 36" fill="none">
      <path d="M8 20 23 8l15 12" stroke="#d61f2b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="22" width="10" height="10" rx="1" fill="#d61f2b" />
    </svg>
  );
}
function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
}
function IgIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
}
function FbIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
}

export default function Footer() {
  return (
    <footer className="bg-[#08080a] pt-16 pb-7 border-t border-white/6">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3 mb-4">
              <RoofLogo />
              <span className="font-display leading-tight">
                <span className="text-rojo font-bold text-[20px] tracking-widest block">BLANCO</span>
                <span className="text-gris-cl text-[11px] tracking-[3px] font-medium block uppercase">CONSTRUCCIONES</span>
              </span>
            </a>
            <p className="text-gris text-[14px] max-w-[300px] mb-4">
              Soluciones integrales para tu hogar. Construimos tus sueños, solucionamos tus problemas. Atención en CABA y GBA.
            </p>
            <div className="flex gap-3 mt-2">
              <a href={IG_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-[42px] h-[42px] rounded-[10px] bg-carbon2 border border-white/8 grid place-items-center
                  hover:bg-rojo hover:-translate-y-0.5 transition-all duration-200">
                <IgIcon />
              </a>
              <a href={FB_LINK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-[42px] h-[42px] rounded-[10px] bg-carbon2 border border-white/8 grid place-items-center
                  hover:bg-rojo hover:-translate-y-0.5 transition-all duration-200">
                <FbIcon />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display text-[16px] uppercase tracking-[1px] mb-5 text-white">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href={TEL_LINK}
                className="flex items-center gap-2.5 text-gris-cl text-[15px] hover:text-rojo transition-colors">
                <PhoneIcon />11-6047-5841
              </a>
              <a href={IG_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gris-cl text-[15px] hover:text-rojo transition-colors">
                <IgIcon />@blanco_construcciones.77
              </a>
              <a href={FB_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gris-cl text-[15px] hover:text-rojo transition-colors">
                <FbIcon />blanco construcciones
              </a>
            </div>
          </div>

          {/* Zona */}
          <div>
            <h4 className="font-display text-[16px] uppercase tracking-[1px] mb-5 text-white">Zona de atención</h4>
            <div className="flex flex-col gap-3 text-gris-cl text-[15px]">
              <span>CABA y GBA</span>
              <span>Urgencias 24 horas</span>
              <span>Presupuesto sin cargo</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/6 text-center text-gris text-[13px] tracking-[.5px]">
          © 2026 Blanco Construcciones — Soluciones Integrales para tu Hogar.
        </div>
      </div>
    </footer>
  );
}
