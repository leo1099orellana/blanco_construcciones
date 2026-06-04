const WA_LINK = "https://wa.me/5491160475841";
const IG_LINK = "https://instagram.com/blanco_construcciones.77";

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

const items = [
  { icon: <PhoneIcon />, label: "11-6047-5841", href: "tel:+5491160475841" },
  { icon: <IgIcon />, label: "@blanco_construcciones.77", href: IG_LINK },
  { icon: <StarIcon />, label: "+10 Años de experiencia", href: null },
];

export default function InfoBar() {
  return (
    <div className="bg-rojo text-white">
      <div className="max-w-[1240px] mx-auto px-6 py-4 flex flex-wrap gap-4 justify-center md:justify-between items-center">
        {items.map((item, i) =>
          item.href ? (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2.5 font-display tracking-[1px] uppercase text-[15px] hover:opacity-80 transition-opacity"
            >
              {item.icon}
              {item.label}
            </a>
          ) : (
            <span key={i} className="flex items-center gap-2.5 font-display tracking-[1px] uppercase text-[15px]">
              {item.icon}
              {item.label}
            </span>
          )
        )}
      </div>
    </div>
  );
}
