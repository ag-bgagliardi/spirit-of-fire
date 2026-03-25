import useColors from "../Main/GlobalColors"

export default function Nav({ page, setPage }) {
  const c = useColors();
  const links = [
    { label: "Productions", pg: "productions" },
    { label: "Our Mission", pg: "mission" },
    { label: "Our Team", pg: "team" },
    { label: "Participate", pg: "participate" },
    { label: "Affiliates & Partners", pg: "affiliates" },
    { label: "Support", pg: "support" },
    { label: "Theatology", pg: "theatology" },
  ];
  return (
    <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 100, background: "rgba(19,19,19,0.8)", backdropFilter: "blur(20px)", boxShadow: "0 20px 50px rgba(128,42,0,0.15)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px" }}>
        <div onClick={() => setPage("home")} style={{ fontFamily: "'Noto Serif',serif", fontSize: "2ch", letterSpacing: ".2em", textTransform: "uppercase", color: c.primaryContainer, cursor: "pointer" }}>
          Spirit of Fire
        </div>
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map(({ label, pg }) => (
            <span key={label} onClick={() => pg && setPage(pg)} style={{
              fontFamily: "'Noto Serif',serif", fontSize: "0.9em", letterSpacing: "-.02em",
              cursor: pg ? "pointer" : "default",
              color: (pg && pg === page) ? c.primaryContainer : "rgba(229,226,225,0.7)",
              borderBottom: (pg && pg === page) ? `1px solid rgba(249,94,20,0.5)` : "none",
              paddingBottom: 2, transition: "color .3s"
            }}>{label}</span>
          ))}
        </nav>
        <button onClick={() => setPage("tickets")} style={{ background: c.primaryContainer, color: c.onPrimaryContainer, padding: "10px 24px", fontSize: 12, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase" }}>
          Book Tickets
        </button>
      </div>
      <div style={{ height: 1, background: "linear-gradient(to right,rgba(255,181,154,.1),transparent)" }} />
    </header>
  );
}