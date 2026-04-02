import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Productions", path: "/productions" },
  { label: "About Us", path: "/about-us" },
  { label: "Participate", path: "/participate" },
  { label: "Support", path: "/support" },
  {
    label: "Archive",
    dropdown: [
      { label: "Portfolio", path: "/portfolio" },
      { label: "Theatology", path: "/theatology" },
      { label: "Affiliates & Partners", path: "/affiliates" },
      { label: "Past Productions", path: "/past-productions" },
    ],
  },
];

function DropdownMenu({ items, onNav }) {
  return (
    <div className="nav__dropdown">
      {items.map(({ label, path }) => (
        <span key={label} className="nav__dropdown-item" onClick={() => onNav(path)}>
          <span className="nav__dropdown-marker">✦</span>
          {label}
        </span>
      ))}
    </div>
  );
}

function NavLink({ link, pathname, onNav }) {
  const isActive = link.dropdown
    ? link.dropdown.some(d => d.path === pathname)
    : pathname === link.path;

  if (link.dropdown) {
    return (
      <div className="nav__link-wrap">
        <span
          className="nav__link"
          style={{
            color: isActive ? "var(--primary-container)" : "rgba(229,226,225,0.7)",
            cursor: "pointer",
          }}
        >
          {link.label}
          <span className="nav__dropdown-arrow">▼</span>
        </span>
        <DropdownMenu items={link.dropdown} onNav={onNav} />
      </div>
    );
  }

  return (
    <span
      className="nav__link"
      onClick={() => onNav(link.path)}
      style={{
        color: isActive ? "var(--primary-container)" : "rgba(229,226,225,0.7)",
        cursor: "pointer",
      }}
    >
      {link.label}
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function go(path) {
    navigate(path);
    setOpen(false);
    setMobileExpanded(null);
  }

  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__logo" onClick={() => go("/")}>Spirit of Fire</div>

        <nav className="nav__links">
          {LINKS.map(link => (
            <NavLink key={link.label} link={link} pathname={pathname} onNav={go} />
          ))}
        </nav>

        <button className="ticket-button nav__cta" onClick={() => go("/tickets")}>
          Tickets
        </button>

        <div className="nav__mobile-toggle" onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </div>
      </div>

      <div className="nav__divider" />

      {/* Mobile menu */}
      <nav className={open ? "nav__mobile-menu open" : "nav__mobile-menu"}>
        {LINKS.map(link => (
          <div key={link.label}>
            {link.dropdown ? (
              <>
                <span
                  className={`nav__mobile-link nav__mobile-link--parent${link.dropdown.some(d => d.path === pathname) ? " active" : ""}`}
                  onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                >
                  {link.label}
                  <span className="nav__dropdown-arrow">
                    {mobileExpanded === link.label ? "▲" : "▼"}
                  </span>
                </span>
                {mobileExpanded === link.label && (
                  <div className="nav__mobile-submenu">
                    {link.dropdown.map(({ label, path }) => (
                      <span
                        key={label}
                        className={`nav__mobile-sublink${pathname === path ? " active" : ""}`}
                        onClick={() => go(path)}
                      >
                        <span className="nav__dropdown-marker">✦</span>
                        {label}
                      </span>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <span
                className={`nav__mobile-link${pathname === link.path ? " active" : ""}`}
                onClick={() => go(link.path)}
              >
                {link.label}
              </span>
            )}
          </div>
        ))}
        <button className="btn-primary" style={{ marginTop: 8 }} onClick={() => go("/tickets")}>
          Tickets
        </button>
      </nav>
    </header>
  );
}