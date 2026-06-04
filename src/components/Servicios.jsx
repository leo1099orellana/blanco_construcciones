import { useEffect, useRef } from "react";

const WA_LINK = "https://wa.me/5491160475841";

function FlameIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2c-1 4-4 5-4 9a4 4 0 0 0 8 0c0-4-3-5-4-9z" /></svg>;
}
function PlumbingIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v6h6" /><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /></svg>;
}
function BoltIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></svg>;
}
function SnowIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 2v6M15 2v6M5 8h14v3a7 7 0 0 1-14 0z" /><path d="M12 18v4" /></svg>;
}
function HeaterIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="6" y="3" width="12" height="14" rx="2" /><path d="M9 21h6M12 17v4" /></svg>;
}
function PaintIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 3 6 15l-2 6 6-2L22 7z" /><path d="m14 5 4 4" /></svg>;
}
function FireExtIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2c-1 4-4 5-4 9a4 4 0 0 0 8 0c0-4-3-5-4-9z" /><circle cx="12" cy="14" r="2" /></svg>;
}
function ArrowIcon() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

const services = [
  { icon: <FlameIcon />, title: "Gas", desc: "Instalación, reparación y mantenimiento. Matriculados." },
  { icon: <PlumbingIcon />, title: "Plomería", desc: "Destapaciones, cañerías, filtraciones y más." },
  { icon: <BoltIcon />, title: "Electricidad", desc: "Instalaciones, tableros y reparaciones seguras." },
  { icon: <SnowIcon />, title: "Refrigeración", desc: "Aires acondicionados: instalación y service." },
  { icon: <HeaterIcon />, title: "Calefacción", desc: "Calderas, radiadores y calefones." },
  { icon: <PaintIcon />, title: "Pintura", desc: "Interior y exterior con terminaciones prolijas." },
  { icon: <FireExtIcon />, title: "Redes de incendio", desc: "Instalación y mantenimiento de redes." },
];

function ServiceCard({ icon, title, desc, highlight }) {
  if (highlight) {
    return (
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-[16px] p-7 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer block"
        style={{ background: "linear-gradient(160deg,#d61f2b,#a3141d)" }}
      >
        <div className="w-[52px] h-[52px] rounded-[12px] grid place-items-center border text-white mb-5
          bg-white/15 border-white/30">
          {icon}
        </div>
        <h4 className="font-display text-[18px] uppercase tracking-[.5px] text-white mb-2">{title}</h4>
        <p className="text-white/85 text-[14px]">{desc}</p>
      </a>
    );
  }
  return (
    <div className="bg-carbon border border-white/6 rounded-[16px] p-7 transition-all duration-300
      hover:-translate-y-1.5 hover:border-rojo/40 hover:bg-carbon2 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-rojo scale-x-0 group-hover:scale-x-100
        origin-left transition-transform duration-350" />
      <div className="w-[52px] h-[52px] rounded-[12px] bg-rojo/12 border border-rojo/30 grid place-items-center
        text-rojo mb-5">
        {icon}
      </div>
      <h4 className="font-display text-[18px] uppercase tracking-[.5px] mb-2">{title}</h4>
      <p className="text-gris text-[14px]">{desc}</p>
    </div>
  );
}

export default function Servicios() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("opacity-100", "translate-y-0"); e.target.classList.remove("opacity-0", "translate-y-6"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    if (ref.current) {
      ref.current.querySelectorAll(".reveal").forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 60}ms`;
        obs.observe(el);
      });
    }
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="servicios"
      className="py-20"
      style={{ background: "linear-gradient(180deg,#0c0c0e,#161619)" }}
      ref={ref}
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-12">
          <p className="font-display text-rojo tracking-[4px] uppercase text-[14px] font-semibold mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-display font-bold text-[clamp(28px,4.5vw,44px)] uppercase leading-[1.05] mb-4">
            Nuestros <em className="not-italic text-rojo">servicios</em>
          </h2>
          <p className="text-gris-cl">
            Cubrimos todas las necesidades de tu hogar con un solo equipo de confianza.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div key={i} className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <ServiceCard {...s} />
            </div>
          ))}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <ServiceCard
              icon={<ArrowIcon />}
              title="¿Otro trabajo?"
              desc="Consultanos, hacemos soluciones integrales."
              highlight
            />
          </div>
        </div>
      </div>
    </section>
  );
}
