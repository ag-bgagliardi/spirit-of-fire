import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PUBLIC_LINKS = [
  { label: "Productions", path: "/productions" },
  { label: "About Us",    path: "/about-us" },
  { label: "Participate", path: "/participate" },
  { label: "Support",     path: "/support" },
  {
    label: "More Information",
    dropdown: [
      { label: "Portfolio",             path: "/portfolio" },
      { label: "Theatology",            path: "/theatology" },
      { label: "Affiliates & Partners", path: "/affiliates" },
      { label: "Past Productions",      path: "/past-productions" },
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
        <span className="nav__link" style={{ color: isActive ? "var(--primary-container)" : "var(--nav-text-color)", cursor: "pointer" }}>
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
      style={{ color: isActive ? "var(--primary-container)" : "var(--nav-text-color)", cursor: "pointer" }}
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
  const { isLoggedIn, user, logout } = useAuth();

  // Insert Planning link before Productions when logged in
  const LINKS = isLoggedIn
    ? [{ label: "Planning", path: "/planning" }, ...PUBLIC_LINKS]
    : PUBLIC_LINKS;

  function go(path) {
    navigate(path);
    setOpen(false);
    setMobileExpanded(null);
  }

  function handleAuthClick() {
    if (isLoggedIn) { logout(); navigate("/"); }
    else go("/login");
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

        {/* Team Log In / signed-in indicator */}
        <button
          onClick={handleAuthClick}
          style={{
            background: "transparent",
            border: "1px solid var(--outline-30)",
            color: isLoggedIn ? "var(--primary)" : "var(--nav-text-color)",
            padding: "8px 16px",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: ".18em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: "var(--font-sans)",
            transition: "border-color .2s, color .2s",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "var(--primary-container)";
            e.currentTarget.style.color = "var(--primary-container)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "var(--outline-30)";
            e.currentTarget.style.color = isLoggedIn ? "var(--primary)" : "var(--nav-text-color)";
          }}
        >
          {isLoggedIn ? `↩ ${user.displayName}` : "Team Log In"}
        </button>

        {/* Tickets */}
        <a
          href="https://events.ticketleap.com/events/spirit-of-fire"
          target="_blank"
          rel="noreferrer"
          className="ticket-button nav__cta"
          style={{ textDecoration: "none", padding: "10px 40px", borderRadius: 20 }}
        >
          Tickets
        </a>

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
                  <span className="nav__dropdown-arrow">{mobileExpanded === link.label ? "▲" : "▼"}</span>
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
        <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
          <button
            onClick={handleAuthClick}
            style={{ padding: "10px 20px", fontSize: 10, fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", background: "transparent", border: "1px solid var(--outline-30)", color: "var(--nav-text-color)", cursor: "pointer", fontFamily: "var(--font-sans)" }}
          >
            {isLoggedIn ? "Sign Out" : "Team Log In"}
          </button>
          <a
            href="https://events.ticketleap.com/events/spirit-of-fire"
            target="_blank"
            rel="noreferrer"
            className="ticket-button"
            style={{ textDecoration: "none", display: "flex", width: "fit-content", padding: "10px 20px" }}
          >
            Tickets
          </a>
        </div>
      </nav>
    </header>
  );
}