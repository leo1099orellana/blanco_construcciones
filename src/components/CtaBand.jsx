const WA_LINK = "https://wa.me/5491160475841";
const TEL_LINK = "tel:+5491160475841";

function WaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zM6.597 20.13c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function CtaBand() {
  return (
    <section
      id="contacto"
      className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#d61f2b 0%,#a3141d 100%)" }}
    >
      {/* Textura de fondo sutil */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Círculo decorativo izquierda */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #fff, transparent 70%)" }} />

      {/* Círculo decorativo derecha */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #fff, transparent 70%)" }} />

      <div className="relative max-w-310 mx-auto px-6 text-center">

        {/* Eyebrow */}
        <span className="inline-block font-display text-[13px] tracking-[4px] uppercase text-white/70 mb-4">
          Contacto
        </span>

        <h2 className="font-display text-[clamp(32px,5vw,58px)] uppercase leading-none text-white mb-4">
          ¿Tenés un problema<br className="hidden sm:block" /> en tu hogar?
        </h2>

        <p className="text-white/80 text-[17px] mb-10 max-w-120 mx-auto">
          Escribinos y te respondemos al instante.<br />Presupuesto sin cargo.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wa hover:bg-[#1ebe5d] text-white
              font-display text-[18px] tracking-[1px] uppercase
              px-8 py-4 rounded-full
              transition-all duration-200 hover:-translate-y-0.5
              shadow-[0_8px_30px_rgba(0,0,0,.25)] hover:shadow-[0_12px_36px_rgba(0,0,0,.35)]"
          >
            <WaIcon />
            Escribinos por WhatsApp
          </a>

          <a
            href={TEL_LINK}
            className="inline-flex items-center gap-2.5 text-white/90 hover:text-white
              font-display text-[17px] tracking-[1px] uppercase
              border border-white/30 hover:border-white/70
              px-7 py-4 rounded-full
              transition-all duration-200"
          >
            <PhoneIcon />
            11-6047-5841
          </a>
        </div>
      </div>
    </section>
  );
}
