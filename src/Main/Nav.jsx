import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Productions",           path: "/productions" },
  { label: "Our Mission",           path: "/mission" },
  { label: "Our Team",              path: "/team" },
  { label: "Participate",           path: "/participate" },
  { label: "Affiliates & Partners", path: "/affiliates" },
  { label: "Support",               path: "/support" },
  { label: "Theatology",            path: "/theatology" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function go(path) {
    navigate(path);
    setOpen(false);
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__logo" onClick={() => go("/")}>Spirit of Fire</div>
        <nav className="nav__links">
          {LINKS.map(({ label, path }) => (
            <span
              key={label}
              onClick={() => go(path)}
              className="nav__link"
              style={{
                color: pathname === path ? "var(--primary-container)" : "rgba(229,226,225,0.7)",
                borderBottom: pathname === path ? "1px solid rgba(249,94,20,0.5)" : "none",
                cursor: "pointer",
              }}
            >{label}</span>
          ))}
        </nav>
        <button className="btn-primary nav__cta" onClick={() => go("/tickets")}>Book Tickets</button>
        <div className="nav__mobile-toggle" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </div>
      </div>
      <div className="nav__divider" />
      <nav className={open ? "nav__mobile-menu open" : "nav__mobile-menu"}>
        {LINKS.map(({ label, path }) => (
          <span
            key={label}
            onClick={() => go(path)}
            className={`nav__mobile-link${pathname === path ? " active" : ""}`}
          >{label}</span>
        ))}
        <button className="btn-primary" style={{ marginTop: 8 }} onClick={() => go("/tickets")}>
          Book Tickets
        </button>
      </nav>
    </header>
  );
}