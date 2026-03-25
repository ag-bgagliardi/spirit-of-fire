import "../Style/global.css";
const LINKS = [
  { label: "Productions",        pg: "productions" },
  { label: "Our Mission",        pg: "mission" },
  { label: "Our Team",           pg: "team" },
  { label: "Participate",        pg: "participate" },
  { label: "Affiliates & Partners", pg: "affiliates" },
  { label: "Support",            pg: "support" },
  { label: "Theatology",         pg: "theatology" },
];

export default function Nav({ page, setPage }) {
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__logo" onClick={() => setPage("home")}>Spirit of Fire</div>
        <nav className="nav__links">
          {LINKS.map(({ label, pg }) => (
            <span
              key={label}
              onClick={() => pg && setPage(pg)}
              className="nav__link"
              style={{
                color: pg === page ? "var(--primary-container)" : "rgba(229,226,225,0.7)",
                borderBottom: pg === page ? "1px solid rgba(249,94,20,0.5)" : "none",
                cursor: pg ? "pointer" : "default",
              }}
            >{label}</span>
          ))}
        </nav>
        <button className="btn-primary nav__cta" onClick={() => setPage("tickets")}>
          Book Tickets
        </button>
      </div>
      <div className="nav__divider" />
    </header>
  );
}