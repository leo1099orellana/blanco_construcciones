import { useEffect, useRef } from "react";

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <span
        className="flex-shrink-0 w-[54px] h-[54px] rounded-[12px] grid place-items-center shadow-[0_8px_20px_rgba(214,31,43,.3)]"
        style={{ background: "linear-gradient(160deg,#d61f2b,#a3141d)" }}
      >
        {icon}
      </span>
      <div>
        <h4 className="font-display text-[19px] uppercase tracking-[.5px] mb-1">{title}</h4>
        <p className="text-gris-cl text-[15px]">{desc}</p>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
      <circle cx="12" cy="8" r="6" />
      <path d="m8.5 14-1 7 4.5-3 4.5 3-1-7" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

const stats = [
  { value: "+10", label: "Años de experiencia" },
  { value: "+500", label: "Trabajos realizados" },
  { value: "24hs", label: "Atención urgencias" },
  { value: "100%", label: "Trabajos garantizados" },
];

export default function Nosotros() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-6");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    if (ref.current)
      ref.current.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="nosotros" className="py-20" ref={ref}>
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Stats grid */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-carbon border border-white/6 rounded-[16px] p-7 hover:border-rojo/30
                  hover:bg-carbon2 transition-all duration-300"
              >
                <strong className="font-display text-[44px] text-rojo block leading-none mb-1">
                  {s.value}
                </strong>
                <span className="text-gris-cl text-[14px] uppercase tracking-[1px] font-display">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Text */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100">
            <p className="font-display text-rojo tracking-[4px] uppercase text-[14px] font-semibold mb-3">
              Nosotros
            </p>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] uppercase leading-[1.05] mb-4">
              Garantía y <em className="not-italic text-rojo">confianza</em>
            </h2>
            <div className="h-[3px] w-16 bg-rojo rounded-full mb-5" />
            <p className="text-gris-cl text-[17px] mb-8">
              Con más de 10 años de experiencia en el rubro, garantizamos un
              servicio profesional y de calidad en cada trabajo que realizamos.
              Atendemos en CABA y GBA con respuesta inmediata.
            </p>
            <div className="flex flex-col gap-6">
              <Feature
                icon={<ShieldIcon />}
                title="Técnicos profesionales y especializados"
                desc="Personal capacitado con amplia experiencia para realizar el mejor trabajo posible."
              />
              <Feature
                icon={<BadgeIcon />}
                title="Servicios de calidad"
                desc="Cada servicio es realizado con los cuidados y precauciones correspondientes para tu tranquilidad."
              />
              <Feature
                icon={<ClockIcon />}
                title="Urgencias 24 horas"
                desc="Disponibles en todo momento para solucionar tu problema sin demoras."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
