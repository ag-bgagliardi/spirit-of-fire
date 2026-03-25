import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  function navigate(pg) {
    setPage(pg);
    setOpen(false);
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__logo" onClick={() => navigate("home")}>Spirit of Fire</div>
        <nav className="nav__links">
          {LINKS.map(({ label, pg }) => (
            <span key={label} onClick={() => pg && navigate(pg)} className="nav__link" style={{
              color: pg === page ? "var(--primary-container)" : "rgba(229,226,225,0.7)",
              borderBottom: pg === page ? "1px solid rgba(249,94,20,0.5)" : "none",
              cursor: pg ? "pointer" : "default",
            }}>{label}</span>
          ))}
        </nav>
        <button className="btn-primary nav__cta" onClick={() => navigate("tickets")}>Book Tickets</button>
        <div className="nav__mobile-toggle" onClick={() => setOpen(o => !o)}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="nav__divider" />
      <nav className={open ? "nav__mobile-menu open" : "nav__mobile-menu"}>
        {LINKS.map(({ label, pg }) => (
          <span key={label} onClick={() => pg && navigate(pg)}
            className={`nav__mobile-link${pg === page ? " active" : ""}`}
          >{label}</span>
        ))}
        <button className="btn-primary" style={{ marginTop: 8 }} onClick={() => navigate("tickets")}>Book Tickets</button>
      </nav>
    </header>
  );
}