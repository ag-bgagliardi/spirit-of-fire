import useColors from "../Main/GlobalColors"

export default function Footer() {
  const c = useColors();
  const socials = ["Facebook", "Instagram"];
  const links = ["Privacy Policy", "Terms of Service", "Archive"];
  return (
    <footer style={{ background: c.surface, padding: "80px 0 32px", borderTop: `1px solid rgba(89,66,56,0.1)` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ fontFamily: "'Noto Serif',serif", fontSize: 19, color: c.primaryContainer, marginBottom: 24 }}>Spirit of Fire</div>
          <p style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", color: c.outlineVariant, lineHeight: 1.8, fontSize: 13 }}>
            Theatre dedicated to greatness. A place where passion and hardwork are the tools to uplift the soul.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h4 style={{ color: c.primary, fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", marginBottom: 8 }}>More Information</h4>
          {links.map(l => (
            <span key={l} style={{ color: c.outlineVariant, fontSize: 14, cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.color = c.onSurface}
              onMouseLeave={e => e.currentTarget.style.color = c.outlineVariant}>{l}</span>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h4 style={{ color: c.primary, fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", marginBottom: 8 }}>Social Media Links</h4>
          {socials.map(l => (
            <span key={l} style={{ color: c.outlineVariant, fontSize: 14, cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.color = c.onSurface}
              onMouseLeave={e => e.currentTarget.style.color = c.outlineVariant}>{l}</span>
          ))}
        </div>
        <div>
          <h4 style={{ color: c.primary, fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", marginBottom: 24 }}>Spirit of Fire Newsletter</h4>
          <div style={{ display: "flex", borderBottom: `1px solid ${c.outlineVariant}`, paddingBottom: 8, marginBottom: 16 }}>
            <input placeholder="Email Address" type="email" style={{ background: "transparent", border: "none", outline: "none", color: c.onSurface, flex: 1, fontSize: 14 }} />
            <span style={{ color: c.primaryContainer, cursor: "pointer", fontSize: 18 }}>→</span>
          </div>
          <p style={{ fontSize: 9, color: c.outlineVariant }}>© 2026 Spirit of Fire Theatre Company. Soli Deo Gloria.</p>
        </div>
      </div>
    </footer>
  );
}