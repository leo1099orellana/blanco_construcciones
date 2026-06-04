import { useState } from "react";

const imageModules = import.meta.glob(
  "../assets/trabajos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

function sortOrder(path) {
  const name = path.split("/").pop().toLowerCase();
  if (name.startsWith("incendio"))   return 0; // rojo
  if (name.startsWith("gas"))        return 1; // amarillo
  if (/^plomeria-0[12]/.test(name))  return 2; // naranja/marrón (plomeria-01 y 02)
  return 3;                                     // verde (plomeria-03 al 08)
}

const images = Object.entries(imageModules)
  .sort(([a], [b]) => sortOrder(a) - sortOrder(b) || a.localeCompare(b))
  .map(([, mod]) => mod.default ?? mod);

const placeholders = [
  { bg: "#0f1f33", accent: "#3b82f6", icon: "M3 3v6h6M21 12a9 9 0 1 1-3-6.7L21 8" },
  { bg: "#2a1f00", accent: "#eab308", icon: "M12 2c-1 4-4 5-4 9a4 4 0 0 0 8 0c0-4-3-5-4-9z" },
  { bg: "#2a0808", accent: "#ef4444", icon: "M12 2c-1 4-4 5-4 9a4 4 0 0 0 8 0c0-4-3-5-4-9z" },
  { bg: "#241a00", accent: "#f59e0b", icon: "M13 2 3 14h7l-1 8 10-12h-7z" },
  { bg: "#002233", accent: "#06b6d4", icon: "M9 2v6M15 2v6M5 8h14v3a7 7 0 0 1-14 0zM12 18v4" },
  { bg: "#2a1200", accent: "#f97316", icon: "M12 2c-1 4-4 5-4 9a4 4 0 0 0 8 0c0-4-3-5-4-9z" },
  { bg: "#002210", accent: "#22c55e", icon: "M18 3 6 15l-2 6 6-2L22 7zm-4-2 4 4" },
];

const slides = images.length > 0
  ? images.map((src) => ({ src }))
  : placeholders.map((p) => ({ src: null, ...p }));

export default function Galeria() {
  const [active, setActive] = useState(0);

  const goToPrev = () => setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  const goToNext = () => setActive((i) => (i === slides.length - 1 ? 0 : i + 1));

  const current = slides[active];

  return (
    <section className="py-20" style={{ background: "#0c0c0e" }}>
      <div className="max-w-310 mx-auto px-6">
        <p className="font-display text-rojo tracking-[4px] uppercase text-[14px] mb-3">
          Nuestro trabajo
        </p>
        <h2 className="font-display text-[clamp(28px,4.5vw,44px)] uppercase leading-[1.05] mb-10">
          Trabajos <em className="not-italic text-rojo">realizados</em>
        </h2>

        <div className="relative">
          {/* Imagen / placeholder principal */}
          <div
            className="relative rounded-2xl overflow-hidden bg-carbon2 shadow-[0_30px_80px_rgba(0,0,0,.7)]"
            style={{ aspectRatio: "16/9" }}
          >
            {current.src ? (
              <img
                key={active}
                src={current.src}
                alt={`Trabajo realizado ${active + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{ background: current.bg }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `${current.accent}20`,
                    border: `1.5px solid ${current.accent}55`,
                    boxShadow: `0 0 32px ${current.accent}25`,
                  }}
                >
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={current.accent} strokeWidth="1.6">
                    <path d={current.icon} />
                  </svg>
                </div>
                <p className="text-gris text-[13px] tracking-[1px]">Foto próximamente</p>
              </div>
            )}

            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

            {/* Contador */}
            <span className="absolute top-4 right-4 bg-black/55 px-3 py-1.5
              rounded-full text-white font-display text-[13px] tracking-[1px]">
              {active + 1} / {slides.length}
            </span>

            {/* Flecha izquierda */}
            <button
              onClick={goToPrev}
              aria-label="Anterior"
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2
                w-10 h-10 md:w-12 md:h-12 rounded-full
                bg-[rgba(12,12,14,0.82)] border border-white/20
                flex items-center justify-center text-white
                hover:bg-rojo hover:border-rojo hover:scale-105
                transition-all duration-200 cursor-pointer z-10
                shadow-[0_4px_20px_rgba(0,0,0,.6)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Flecha derecha */}
            <button
              onClick={goToNext}
              aria-label="Siguiente"
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2
                w-10 h-10 md:w-12 md:h-12 rounded-full
                bg-[rgba(12,12,14,0.82)] border border-white/20
                flex items-center justify-center text-white
                hover:bg-rojo hover:border-rojo hover:scale-105
                transition-all duration-200 cursor-pointer z-10
                shadow-[0_4px_20px_rgba(0,0,0,.6)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Thumbnails */}
          <div
            className="grid gap-2 mt-3"
            style={{ gridTemplateColumns: `repeat(${Math.min(slides.length, 8)}, 1fr)` }}
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Ver imagen ${i + 1}`}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-200
                  ${active === i
                    ? "ring-2 ring-rojo shadow-[0_0_12px_rgba(214,31,43,.4)]"
                    : "opacity-40 hover:opacity-80 ring-1 ring-white/10"}`}
                style={{ aspectRatio: "4/3" }}
              >
                {slide.src ? (
                  <img
                    src={slide.src}
                    alt={`Miniatura ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0" style={{ background: slide.bg }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={slide.accent} strokeWidth="1.8">
                        <path d={slide.icon} />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
