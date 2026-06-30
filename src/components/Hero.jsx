const WA_LINK = "https://wa.me/5491160475841";

// Carga automática: si existe src/assets/hero.jpg aparece, si no muestra el placeholder
const heroModules = import.meta.glob(
  "../assets/hero.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);
const heroImg = Object.values(heroModules)[0]?.default ?? null;
const TEL_LINK = "tel:+5491160475841";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function WaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zM6.597 20.13c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.148-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
function ImageIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.5-3.5L9 20" />
    </svg>
  );
}

const features = [
  { icon: <CheckIcon />, label: "Personal matriculado y capacitado" },
  { icon: <BoltIcon />, label: "Respuesta inmediata" },
  { icon: <ShieldIcon />, label: "Trabajos 100% garantizados" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center overflow-hidden min-h-[calc(100vh-72px)] mt-18"
      style={{
        background:
          "radial-gradient(900px 500px at 78% 20%, rgba(214,31,43,.18), transparent 60%), linear-gradient(135deg, #0c0c0e 0%, #161619 55%, #0c0c0e 100%)",
      }}
    >
    
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(circle at 70% 40%, #000, transparent 75%)",
        }}
      />

      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-rojo/12 border border-rojo/40 text-[#ff8f96]
              px-4 py-2 rounded-full font-display text-[13px] tracking-[2px] uppercase mb-7">
              <span className="w-2 h-2 rounded-full bg-rojo shadow-[0_0_10px_#d61f2b] animate-pulse" />
              Urgencias 24 HS · CABA y GBA
            </span>

            <h1 className="font-display font-bold text-[clamp(36px,6vw,68px)] leading-[1.05] uppercase tracking-tight">
              Soluciones{" "}
              <em className="not-italic text-rojo block">integrales</em>{" "}
              para tu hogar
            </h1>

            <p className="text-gris-cl text-[18px] max-w-[480px] mt-5 mb-7">
              Construimos tus sueños y solucionamos tus problemas. Trabajos
              garantizados con personal capacitado.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 font-display text-[17px] uppercase tracking-[.5px]">
                  <span className="flex-shrink-0 w-9 h-9 grid place-items-center bg-carbon2 border border-rojo/35 rounded-[8px] text-rojo">
                    {f.icon}
                  </span>
                  {f.label}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-wa text-[#062b14] font-display font-bold text-[17px]
                  tracking-[.5px] px-7 py-4 rounded-[10px] transition-all duration-200 hover:-translate-y-0.5
                  shadow-[0_10px_28px_rgba(37,211,102,.3)] hover:shadow-[0_14px_34px_rgba(37,211,102,.42)]"
              >
                <WaIcon />
                Pedí tu presupuesto
              </a>
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-rojo
                  hover:bg-rojo/8 px-7 py-4 rounded-[10px] font-display font-semibold tracking-[1px]
                  transition-all duration-200 text-[16px]"
              >
                📞 11-6047-5841
              </a>
            </div>
          </div>

          {/* Right — card */}
          <div className="relative mx-auto w-full max-w-[420px] md:max-w-none">
            <div
              className="relative rounded-[20px] overflow-hidden border border-white/8
                shadow-[0_40px_80px_rgba(0,0,0,.6)]"
              style={{ background: "linear-gradient(160deg,#1d1d22,#0c0c0e)", aspectRatio: "4/4.4" }}
            >
              {/* Ribbon */}
              <div className="absolute top-[22px] left-[-44px] -rotate-45 bg-rojo text-white font-display font-bold
                tracking-[2px] text-[13px] px-[60px] py-[8px] shadow-[0_6px_14px_rgba(0,0,0,.4)] z-10">
                PROFESIONAL
              </div>

              {/* Foto hero o placeholder */}
              {heroImg ? (
                <img
                  src={heroImg}
                  alt="Blanco Construcciones - equipo de trabajo"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 grid place-items-center text-center"
                  style={{
                    background: "repeating-linear-gradient(45deg,#17171b 0 14px,#1b1b20 14px 28px)",
                  }}
                >
                  <div>
                    <div className="w-20 h-20 rounded-2xl bg-rojo/14 border border-rojo/35 grid place-items-center text-rojo mx-auto mb-4">
                      <ImageIcon />
                    </div>
                    <p className="font-display uppercase tracking-[2px] text-[13px] text-gris">
                      Foto de tu equipo<br />o trabajo destacado
                    </p>
                  </div>
                </div>
              )}

              {/* Float stat */}
              <div className="absolute bottom-5 right-5 bg-negro/90 border border-white/10 rounded-[14px]
                px-5 py-4 backdrop-blur-sm">
                <strong className="font-display text-[30px] text-rojo block leading-none">+10</strong>
                <span className="text-[12px] tracking-[1px] uppercase text-gris-cl">Años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
