import { useState } from "react";

function useColors() {
  return {
    surface: "#131313", surfaceLow: "#1c1b1b", surfaceLowest: "#0e0e0e",
    surfaceContainer: "#201f1f", surfaceHigh: "#2a2a2a", surfaceHighest: "#353534",
    primary: "#ffb59a", primaryContainer: "#f95e14",
    onPrimary: "#5b1b00", onPrimaryContainer: "#4f1700",
    onSurface: "#e5e2e1", onSurfaceVariant: "#e0c0b2",
    outline: "#a88a7e", outlineVariant: "#594238",
    tertiary: "#d4bbff", tertiaryContainer: "#a37cea",
  };
}

const TEAM = [
  {
    name: "Rico Heisler",
    title: "Artistic Director",
    badge: "Cofounder",
    roles: ["Actor", "Director", "Choreographer"],
    emoji: "🎬",
    icon: "✦",
    col: "founder",
  },
  {
    name: "Benjamin Gagliardi",
    title: "Dramatist",
    badge: "Cofounder",
    roles: ["Actor", "Writer", "Songwriter"],
    emoji: "✍️",
    icon: "✦",
    col: "founder",
  },
  {
    name: "Madeline Gagliardi",
    title: "Administrator",
    roles: ["Actor", "Singer"],
    emoji: "🎤",
    icon: "◆",
    col: "company",
  },
  {
    name: "Kari Heisler",
    title: "Music Director",
    roles: ["Actor", "Singer", "Director"],
    emoji: "🎵",
    icon: "◆",
    col: "company",
  },
  {
    name: "Silas Heisler",
    title: "Creative",
    roles: ["Actor", "Singer"],
    emoji: "🕯️",
    icon: "◆",
    col: "company",
  },
  {
    name: "Barbara Gagliardi",
    title: "Creative",
    roles: ["Actor", "Singer", "Director", "Designer"],
    emoji: "🎨",
    icon: "◆",
    col: "company",
  },
  {
    name: "John Gagliardi",
    title: "Set Builder",
    roles: ["Designer", "Architect"],
    emoji: "🎨",
    icon: "◆",
    col: "company",
  },
  {
    name: "Stephanie Gagliardi",
    title: "Social Media Manager",
    roles: ["Designer", "Marketer"],
    emoji: "🎤",
    icon: "◆",
    col: "company",
  },
];

function MemberCard({ member, featured }) {
  const c = useColors();
  const [hov, setHov] = useState(false);

  if (featured) {
    return (
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "grid", gridTemplateColumns: "200px 1fr", gap: 40,
          background: hov ? c.surfaceHigh : c.surfaceLow,
          border: `1px solid ${hov ? "rgba(249,94,20,0.3)" : "rgba(89,66,56,0.2)"}`,
          transition: "all .4s", padding: 40, position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: hov ? "radial-gradient(ellipse at top left,rgba(249,94,20,0.06),transparent 70%)" : "none", transition: "all .5s", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "3/4", background: "linear-gradient(160deg,#1a0800,#0a0300)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64,
            filter: hov ? "grayscale(0)" : "grayscale(1)", transition: "filter .6s",
          }}>{member.emoji}</div>
          <div style={{ position: "absolute", top: -10, right: -10, background: c.primaryContainer, padding: "8px 10px", fontSize: 12, color: c.onPrimaryContainer }}>
            {member.icon}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
          <div>
            {member.badge && (
              <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, display: "block", marginBottom: 10 }}>
                ✦ {member.badge}
              </span>
            )}
            <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 34, lineHeight: 1.1, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 6 }}>{member.name}</h3>
            <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".25em", color: c.outline }}>{member.title}</span>
          </div>
          <div style={{ height: 1, width: 48, background: c.outlineVariant }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {member.roles.map(r => (
              <span key={r} style={{
                fontSize: 9, textTransform: "uppercase", letterSpacing: ".2em",
                border: `1px solid rgba(89,66,56,0.5)`, padding: "4px 12px",
                color: c.onSurfaceVariant,
              }}>{r}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? c.surfaceHigh : c.surfaceLow,
        border: `1px solid ${hov ? "rgba(249,94,20,0.25)" : "rgba(89,66,56,0.15)"}`,
        transition: "all .4s", overflow: "hidden", position: "relative",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: hov ? "radial-gradient(ellipse at top,rgba(249,94,20,0.06),transparent 70%)" : "none", transition: "all .5s", pointerEvents: "none" }} />
      <div style={{
        aspectRatio: "4/3", background: "linear-gradient(160deg,#1a0800,#0a0300)",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64,
        filter: hov ? "grayscale(0)" : "grayscale(1)", transition: "filter .6s",
        position: "relative",
      }}>
        {member.emoji}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
          background: hov ? c.primaryContainer : "transparent", transition: "background .4s",
        }} />
      </div>
      <div style={{ padding: "24px 28px 28px" }}>
        <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 4 }}>{member.name}</h3>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: c.outline, display: "block", marginBottom: 16 }}>{member.title}</span>
        <div style={{ height: 1, background: "rgba(89,66,56,0.3)", marginBottom: 16 }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {member.roles.map(r => (
            <span key={r} style={{
              fontSize: 9, textTransform: "uppercase", letterSpacing: ".15em",
              border: `1px solid rgba(89,66,56,0.4)`, padding: "3px 10px",
              color: c.onSurfaceVariant,
            }}>{r}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamHero() {
  const c = useColors();
  return (
    <section style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 48px 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 70% 40%,rgba(249,94,20,0.5) 0%,transparent 60%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer, display: "block", marginBottom: 20 }}>The Company</span>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 24 }}>
          Our <span style={{ color: c.primaryContainer }}>Team</span>
        </h1>
        <p style={{ fontSize: 17, color: c.onSurfaceVariant, maxWidth: 540, lineHeight: 1.7, fontWeight: 300 }}>
          A small company of devoted artists — actors, directors, writers, and makers — united by a shared calling to tell stories that glorify God.
        </p>
      </div>
    </section>
  );
}

function TeamSection() {
  const c = useColors();
  const founders = TEAM.filter(m => m.col === "founder");
  const company = TEAM.filter(m => m.col === "company");
  return (
    <section className="pat" style={{ padding: "96px 0", background: c.surfaceLow }}>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "0 auto", padding: "0 50px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 64 }}>
            <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 13, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary }}>Founders</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {founders.map(m => <MemberCard key={m.name} member={m} featured />)}
          </div>
        </div>
        <div style={{ margin: "0 auto", padding: "0 50px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 64 }}>
            <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 13, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary }}>The Company</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {company.map(m => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCTA() {
  const c = useColors();
  return (
    <section style={{ padding: "120px 48px", background: c.surfaceLowest, borderTop: `1px solid rgba(89,66,56,0.15)`, textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(249,94,20,0.06) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
        <span style={{ fontSize: 32, display: "block", marginBottom: 24 }}>🔥</span>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 44, marginBottom: 20, lineHeight: 1.2 }}>
          Feel the <span style={{ color: c.primaryContainer }}>calling?</span>
        </h2>
        <p style={{ color: c.onSurfaceVariant, fontSize: 16, lineHeight: 1.8, marginBottom: 48, fontWeight: 300 }}>
          Spirit of Fire is always looking for passionate artists who share our devotion to excellence, craft, and the glory of God.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <button style={{ background: c.primaryContainer, color: c.onPrimaryContainer, padding: "16px 40px", fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Get Involved</button>
          <button style={{ border: `1px solid rgba(255,181,154,0.3)`, color: c.primary, padding: "16px 40px", fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Our Mission</button>
        </div>
      </div>
    </section>
  );
}

function TeamPage() {
  return (
    <>
      <GlobalStyles />
      <main style={{ paddingTop: 80 }}>
        <TeamHero />
        <TeamSection />
        <TeamCTA />
        <Footer />
      </main>
    </>
  );
}


function SupportHero() {
  const c = useColors();
  return (
    <section style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 48px 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 30% 40%,rgba(249,94,20,0.6) 0%,transparent 60%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer, display: "block", marginBottom: 20 }}>Keep the Flame Alive</span>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 24 }}>
          Support <span style={{ color: c.primaryContainer }}>Us</span>
        </h1>
        <p style={{ fontSize: 17, color: c.onSurfaceVariant, maxWidth: 560, lineHeight: 1.7, fontWeight: 300 }}>
          Spirit of Fire runs on the generosity of patrons who believe in the power of theatre to uplift the soul. Every contribution — large or small — helps us keep telling stories that matter.
        </p>
      </div>
    </section>
  );
}

const AMOUNTS = [5, 10, 25, 50, 100];

function DonationForm() {
  const c = useColors();
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const displayAmt = isCustom ? (custom || "—") : `$${selected}`;

  const inputStyle = {
    background: "transparent", border: "none", borderBottom: `1px solid ${c.outlineVariant}`,
    outline: "none", color: c.onSurface, fontSize: 15, padding: "10px 0", width: "100%",
    transition: "border-color .2s",
  };

  return (
    <section className="pat" style={{ padding: "96px 0", background: c.surfaceLow }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "5fr 4fr", gap: 80, alignItems: "start" }}>

        {/* Left: form */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 48 }}>
            <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 13, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary }}>Make a Gift</h2>
          </div>

          {/* Amount selector */}
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".25em", color: c.outline, marginBottom: 16 }}>Select an Amount</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12, marginBottom: 12 }}>
            {AMOUNTS.map(a => {
              const sel = !isCustom && selected === a;
              return (
                <button key={a} onClick={() => { setSelected(a); setIsCustom(false); setCustom(""); }}
                  style={{
                    padding: "16px 8px", fontSize: 18, fontWeight: 700,
                    border: `1px solid ${sel ? c.primaryContainer : "rgba(89,66,56,0.4)"}`,
                    background: sel ? "rgba(249,94,20,0.12)" : "transparent",
                    color: sel ? c.primary : c.onSurface,
                    transition: "all .2s",
                  }}>${a}</button>
              );
            })}
          </div>
          <div style={{ display: "flex", borderBottom: `1px solid ${isCustom ? c.primaryContainer : c.outlineVariant}`, paddingBottom: 8, marginBottom: 40, transition: "border-color .3s" }}>
            <span style={{ color: c.outline, fontSize: 15, paddingTop: 10, marginRight: 6 }}>$</span>
            <input
              placeholder="Custom amount"
              value={custom}
              type="number"
              min="1"
              onChange={e => { setCustom(e.target.value); setIsCustom(true); }}
              onFocus={() => setIsCustom(true)}
              style={{ ...inputStyle, borderBottom: "none" }}
            />
          </div>

          {/* Personal info */}
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".25em", color: c.outline, marginBottom: 24 }}>Your Information</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 28, marginBottom: 40 }}>
            <div>
              <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderBottomColor = c.primary}
                onBlur={e => e.target.style.borderBottomColor = c.outlineVariant}
              />
            </div>
            <div>
              <input placeholder="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.borderBottomColor = c.primary}
                onBlur={e => e.target.style.borderBottomColor = c.outlineVariant}
              />
            </div>
            <div>
              <textarea placeholder="Any comments (optional)" value={note} onChange={e => setNote(e.target.value)} rows={3}
                style={{ ...inputStyle, resize: "none", borderBottom: `1px solid ${c.outlineVariant}` }}
                onFocus={e => e.target.style.borderBottomColor = c.primary}
                onBlur={e => e.target.style.borderBottomColor = c.outlineVariant}
              />
            </div>
          </div>

          <button style={{ width: "100%", background: c.primaryContainer, color: c.onPrimaryContainer, padding: "18px 0", fontSize: 11, fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase", boxShadow: "0 10px 30px rgba(249,94,20,0.25)", transition: "opacity .2s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = ".88"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Donate {displayAmt} →
          </button>
          <p style={{ fontSize: 9, textAlign: "center", color: c.outlineVariant, fontStyle: "italic", marginTop: 14 }}>Secure payment processing coming soon. Thank you for your patience.</p>
        </div>

        {/* Right: why give */}
        <div style={{ position: "sticky", top: 120 }}>
          <div style={{ background: c.surfaceContainer, border: `1px solid rgba(89,66,56,0.2)`, padding: 40, marginBottom: 24 }}>
            <span style={{ fontSize: 32, display: "block", marginBottom: 20 }}>🔥</span>
            <h3 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 26, marginBottom: 16, lineHeight: 1.2 }}>Why Your Gift Matters</h3>
            <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontSize: 14, fontWeight: 300, marginBottom: 24 }}>
              Spirit of Fire is an independent theatre company. We rely on ticket sales, goodwill offerings, and the generous patronage of those who believe in what we are doing.
            </p>
            <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontSize: 14, fontWeight: 300 }}>
              Your support directly funds set design, production costs, and the development of new original works — including world premieres like <em style={{ color: c.primary }}>Missing the Rain</em>.
            </p>
          </div>

          {/* Tiers */}
          {[
            { label: "Friend of the Fire", range: "$1 – $49", desc: "Recognition in our programmes." },
            { label: "Patron of the Arts", range: "$50 – $249", desc: "Programme credit and a reserved seat at opening night." },
            { label: "Founding Patron", range: "$250+", desc: "Named recognition, early ticket access, and a personal thank-you from the artistic director." },
          ].map((tier, i) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 0", borderBottom: i < 2 ? `1px solid rgba(89,66,56,0.15)` : "none" }}>
              <div style={{ width: 8, height: 8, background: c.primaryContainer, flexShrink: 0, marginTop: 6 }} />
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 2, color: c.onSurface }}>{tier.label} <span style={{ color: c.outline, fontWeight: 300, fontSize: 11 }}>{tier.range}</span></p>
                <p style={{ fontSize: 12, color: c.onSurfaceVariant, lineHeight: 1.6, fontWeight: 300 }}>{tier.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function QuoteStrip() {
  const c = useColors();
  return (
    <section style={{ padding: "96px 48px", background: c.surfaceLowest, textAlign: "center" }}>
      <div style={{ fontSize: 28, color: c.primaryContainer, marginBottom: 24 }}>✦</div>
      <blockquote style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 28, lineHeight: 1.5, color: c.onSurface, maxWidth: 720, margin: "0 auto 28px" }}>
        We desire always to have the Spirit — the essence of this Fire.
      </blockquote>
      <cite style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary, fontStyle: "normal" }}>Spirit of Fire Theatre Company</cite>
    </section>
  );
}

function SupportPerformances({ setPage }) {
  const c = useColors();
  const prods = [
    { title: "Mother Rabbit", dates: "JUN 01 — JUL 01", badge: "Encore Performance", badgeColor: c.tertiaryContainer, badgeText: "#38017a" },
    { title: "Animal Crackers", dates: "TBD", badge: "Adaptation", badgeColor: c.surfaceContainer, badgeText: c.primary },
    { title: "Missing the Rain", dates: "TBD", badge: "World Premiere", badgeColor: c.primaryContainer, badgeText: c.onPrimaryContainer },
  ];
  return (
    <section style={{ background: c.surfaceLow, padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 48 }}>
          <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
          <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 13, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary }}>Support Our Shows</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, borderBottom: `1px solid rgba(89,66,56,0.2)`, paddingBottom: 28 }}>
          <div>
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 36, marginBottom: 8 }}>Current Projects</h2>
            <p style={{ fontSize: 11, color: c.outline, letterSpacing: ".2em", textTransform: "uppercase" }}>Active Productions • 2026</p>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["←", "→"].map(a => <span key={a} style={{ color: c.primary, cursor: "pointer", fontSize: 20 }}>{a}</span>)}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48 }}>
          {prods.map(p => <SupportProdCard key={p.title} {...p} onBook={() => setPage("tickets")} />)}
        </div>
      </div>
    </section>
  );
}

function SupportProdCard({ title, dates, badge, badgeColor, badgeText, onBook }) {
  const c = useColors();
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 10, color: c.outline, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>{dates}</p>
      <button onClick={onBook}
        onMouseEnter={e => { e.currentTarget.style.background = c.primaryContainer; e.currentTarget.style.color = c.onPrimaryContainer; }}
        onMouseLeave={e => { e.currentTarget.style.background = c.surfaceHighest; e.currentTarget.style.color = c.onSurface; }}
        style={{ width: "100%", padding: 16, marginBottom: 10, fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase", background: c.surfaceHighest, border: `1px solid rgba(89,66,56,0.3)`, color: c.onSurface, transition: "all .5s" }}>
        Reserve Seat
      </button>
      <div style={{ position: "relative", paddingTop: "150%", overflow: "hidden", background: c.surfaceHighest, marginBottom: 24 }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0800,#050200)", transform: hov ? "scale(1.05)" : "scale(1)", filter: hov ? "grayscale(0%)" : "grayscale(100%)", transition: "all .7s ease", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 80 }}>🎭</span>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,0.7) 0%,transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 20 }}>
          <span style={{ background: badgeColor, color: badgeText, padding: "4px 12px", fontSize: 9, fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase" }}>{badge}</span>
        </div>
      </div>
    </div>
  )
}

function SupportPage({ setPage }) {
  return (
    <>
      <GlobalStyles />
      <main style={{ paddingTop: 80 }}>
        <SupportHero />
        <DonationForm />
        <SupportPerformances setPage={setPage} />
        <QuoteStrip />
        <Footer />
      </main>
    </>
  );
}

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:wght@300;400;500;600&display=swap');
      *{box-sizing:border-box;margin:0;padding:0;}
      body{background:#131313;color:#e5e2e1;font-family:'Work Sans',sans-serif;overflow-x:hidden;}
      button{cursor:pointer;border:none;background:none;font-family:'Work Sans',sans-serif;color:inherit;}
      input{font-family:'Work Sans',sans-serif;color:inherit;}
      .pat{background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.5 7.5L40 10l-7.5 2.5L30 20l-2.5-7.5L20 10l7.5-2.5z' fill='%23594238' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");}
      ::-webkit-scrollbar{width:4px;}
      ::-webkit-scrollbar-track{background:#131313;}
      ::-webkit-scrollbar-thumb{background:#594238;}
    `}</style>
  );
}

function Nav({ page, setPage }) {
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
        <button onClick={() => setPage("tickets")} style={{ background: c.primaryContainer, color: c.onPrimaryContainer, padding: "8px 24px", fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase" }}>
          Book Tickets
        </button>
      </div>
      <div style={{ height: 1, background: "linear-gradient(to right,rgba(255,181,154,.1),transparent)" }} />
    </header>
  );
}

function Footer() {
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

function ShowCard({ title, dates, badge, badgeColor, badgeText }) {
  const c = useColors();
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ position: "relative", paddingTop: "150%", overflow: "hidden", background: c.surfaceHighest, marginBottom: 24 }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0800,#050200)", transform: hov ? "scale(1.05)" : "scale(1)", filter: hov ? "grayscale(0%)" : "grayscale(100%)", transition: "all .7s ease", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 80 }}>🎭</span>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,0.7) 0%,transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 20 }}>
          <span style={{ background: badgeColor, color: badgeText, padding: "4px 12px", fontSize: 9, fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase" }}>{badge}</span>
        </div>
      </div>
      <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 10, color: c.outline, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>{dates}</p>
    </div>
  );
}

function ProdCard({ title, dates, badge, badgeColor, badgeText, onBook }) {
  const c = useColors();
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ position: "relative", paddingTop: "150%", overflow: "hidden", background: c.surfaceHighest, marginBottom: 24 }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0800,#050200)", transform: hov ? "scale(1.05)" : "scale(1)", filter: hov ? "grayscale(0%)" : "grayscale(100%)", transition: "all .7s ease", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 80 }}>🎭</span>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,0.7) 0%,transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 20 }}>
          <span style={{ background: badgeColor, color: badgeText, padding: "4px 12px", fontSize: 9, fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase" }}>{badge}</span>
        </div>
      </div>
      <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 10, color: c.outline, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>{dates}</p>
      <button onClick={onBook}
        onMouseEnter={e => { e.currentTarget.style.background = c.primaryContainer; e.currentTarget.style.color = c.onPrimaryContainer; }}
        onMouseLeave={e => { e.currentTarget.style.background = c.surfaceHighest; e.currentTarget.style.color = c.onSurface; }}
        style={{ width: "100%", padding: 16, fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase", background: c.surfaceHighest, border: `1px solid rgba(89,66,56,0.3)`, color: c.onSurface, transition: "all .5s" }}>
        Reserve Seat
      </button>
    </div>
  );
}

function HeroSection({ setPage }) {
  const c = useColors();
  return (
    <section style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0a0000 0%,#1a0800 40%,#0d0500 100%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .15, backgroundImage: "radial-gradient(ellipse at 30% 50%,rgba(249,94,20,0.4) 0%,transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(19,19,19,0.95) 40%,rgba(19,19,19,0.3) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 88, lineHeight: .9, letterSpacing: "-.03em", color: c.onSurface }}>
            Soli <span style={{ color: c.primaryContainer }}>Deo</span><br />Gloria
          </h1>
          <p style={{ fontSize: 18, color: c.onSurfaceVariant, maxWidth: 420, lineHeight: 1.7, fontWeight: 300 }}>
            To the glory of God alone.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <button onClick={() => setPage("productions")} style={{ background: c.primaryContainer, color: c.onPrimaryContainer, padding: "16px 32px", fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>View Season</button>
            <button onClick={() => setPage("mission")} style={{ border: `1px solid ${c.outlineVariant}`, color: c.onSurface, padding: "16px 32px", fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Our Mission</button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ position: "relative", width: 280, height: 420 }}>
            <div style={{ position: "absolute", inset: 0, border: `1px solid rgba(89,66,56,0.4)` }} />
            <div style={{ position: "absolute", inset: -16, border: `1px solid rgba(249,94,20,0.15)`, zIndex: -1 }} />
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg,#2a1000,#0a0300)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 72, opacity: .6 }}>🕯️</span>
            </div>
            <div style={{ position: "absolute", bottom: 24, left: -48, background: c.surface, padding: "20px 24px" }}>
              <span style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", color: c.primaryContainer, fontSize: 20, display: "block" }}>Returning Soon</span>
              <span style={{ textTransform: "uppercase", letterSpacing: ".15em", fontSize: 10 }}>Mother Rabbit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HearthSection() {
  const c = useColors();
  return (
    <section className="pat" style={{ padding: "96px 0", background: c.surfaceLow }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 48, lineHeight: 1.1 }}>
            Welcome to<br />the <span style={{ color: c.primaryContainer }}>Spirit of Fire</span>
          </h2>
          <div style={{ height: 3, width: 80, background: c.primaryContainer }} />
          <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontWeight: 300 }}>At Spirit of Fire, we tell stories that encourage, inspire, and challenge people to see all of life and experience–past, present, and future–by the light of Jesus Christ.</p>
          <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontWeight: 300 }}>Fire represents the ferocious dedication and passion in any project we undertake. It represents the indwelling Holy Spirit that guides and inspires, and it represents the grace of our Lord we tirelessly seek. Thus, we desire always to have the Spirit, or the essence of this Fire.</p>
          <span style={{ color: c.primary, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer" }}>Learn More →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ paddingTop: 48 }}>
            <div style={{ width: "100%", height: 360, background: "linear-gradient(180deg,#1a0a00,#0d0500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, filter: "grayscale(1)", transition: "filter .7s" }}
              onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
              onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}>📚</div>
          </div>
          <div>
            <div style={{ width: "100%", height: 460, background: "linear-gradient(180deg,#0d0500,#1a0a00)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>🔥</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NextOnStageSection() {
  const c = useColors();
  const shows = [
    { title: "Mother Rabbit", dates: "JUN 01 — JUL 01", badge: "Encore Performance", badgeColor: c.tertiaryContainer, badgeText: "#38017a" },
    { title: "Animal Crackers", dates: "TBD", badge: "Adaptation", badgeColor: c.surfaceContainer, badgeText: c.primary },
    { title: "Missing the Rain", dates: "TBD", badge: "World Premiere", badgeColor: c.primaryContainer, badgeText: c.onPrimaryContainer },
  ];
  return (
    <section style={{ padding: "96px 0", background: c.surface }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <span style={{ color: c.primary, fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", fontWeight: 600 }}>Curated Performances</span>
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 56, marginTop: 12 }}>Next on <em>Stage</em></h2>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["←", "→"].map(a => (
              <button key={a} style={{ width: 44, height: 44, border: `1px solid ${c.outlineVariant}`, color: c.onSurface, fontSize: 16 }}>{a}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
          {shows.map(s => <ShowCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const c = useColors();
  const items = [
    { col: "1/3", row: "1/3", label: "Picture Placeholder", grad: "linear-gradient(135deg,#1a0800,#0a0300)" },
    { col: "3/4", row: "1/2", label: "Picture Placeholder", grad: "linear-gradient(135deg,#0a0800,#050200)" },
    { col: "4/5", row: "1/3", label: "Picture Placeholder", grad: "linear-gradient(135deg,#0a0d1a,#050508)" },
    { col: "3/4", row: "2/3", label: "Picture Placeholder", grad: "linear-gradient(135deg,#1a0a00,#080300)" },
  ];
  return (
    <section style={{ padding: "96px 0", background: c.surfaceLowest, overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", textAlign: "center", marginBottom: 64 }}>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 48, marginBottom: 12 }}>Uplifting the <span style={{ color: c.primary }}>Soul</span></h2>
        <p style={{ color: c.outline, textTransform: "uppercase", letterSpacing: ".4em", lineHeight: "2em", fontSize: 10 }}>Considering it an honour to employ</p>
        <p style={{ color: c.outline, textTransform: "uppercase", letterSpacing: ".4em", lineHeight: "2em", fontSize: 10 }}>and develop the gifts received from God</p>
      </div>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridTemplateRows: "repeat(2,260px)", gap: 8 }}>
        {items.map((g, i) => (
          <div key={i} style={{ gridColumn: g.col, gridRow: g.row, position: "relative", overflow: "hidden", cursor: "pointer", background: g.grad }}
            onMouseEnter={e => e.currentTarget.querySelector(".gl").style.opacity = 1}
            onMouseLeave={e => e.currentTarget.querySelector(".gl").style.opacity = 0}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, opacity: .2 }}>⛪</div>
            <div className="gl" style={{ position: "absolute", bottom: 24, left: 24, opacity: 0, transition: "opacity .4s" }}>
              <p style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 22, color: c.onSurface }}>{g.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  const c = useColors();
  return (
    <section style={{ padding: "160px 24px", background: c.surface, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(249,94,20,0.07) 0%,transparent 70%)" }} />
      <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 56, maxWidth: 700, marginBottom: 48, lineHeight: 1.15, position: "relative" }}>
        Keep the <span style={{ color: c.primaryContainer }}>Flame</span> alive
      </h2>
      <div style={{ display: "flex", gap: 24, position: "relative" }}>
        <button style={{ padding: "20px 48px", background: c.onSurface, color: c.surface, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Become a Patron</button>
        <button style={{ padding: "20px 48px", border: `1px solid ${c.outline}`, color: c.onSurface, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Get Involved</button>
      </div>
    </section>
  );
}

function HomePage({ setPage }) {
  return (
    <main>
      <HeroSection setPage={setPage} />
      <HearthSection />
      <NextOnStageSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}

function MissionHero() {
  const c = useColors();
  return (
    <section style={{ position: "relative", height: 820, display: "flex", alignItems: "flex-end", padding: "0 48px 96px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 88, lineHeight: .92, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 24 }}>
          The Spirit of <span style={{ color: c.primaryContainer }}>Fire</span>
        </h1>
        <p style={{ fontSize: 18, color: c.onSurfaceVariant, maxWidth: 600, lineHeight: 1.7, fontWeight: 300 }}>
          Spirit of Fire began with the recognition that art speaks to truth. The stories that move us are the ones that reveal truth, and what is truth but God? As artists we seek this truth in all that we do. As a theatre we bring wonderful classics and brave original stories to life.
        </p>
      </div>
    </section>
  );
}

function MissionStatement() {
  const c = useColors();
  return (
    <section className="pat" style={{ padding: "96px 48px", position: "relative" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", display: "grid", gridTemplateColumns: "9fr 3fr", gap: 48, alignItems: "center" }}>
        <div>
          <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 44, lineHeight: 1.2, marginBottom: 32 }}>
            Our Mission:
          </h2>
          <h2 style={{ fontSize: "1.9em", lineHeight: 2, marginBottom: 32 }}>
            To tell stories that<em style={{ color: c.primaryContainer }}> encourage, inspire, and challenge</em> people to see all of life and experience: past, present, and future, by the <em style={{ color: c.primaryContainer }}>light of Jesus Christ.</em>
          </h2>
          <h2 style={{ fontFamily: "'Noto Serif',serif", textTransform: "uppercase", letterSpacing: ".2em", padding: "20px 0px" }}>Ideals:</h2>
          <ul style={{paddingLeft:40}}>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>To create and develop art that exemplify Christian virtues of Faith, Hope, Love, and Joy.</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>To tell stories that encourage, inspire, and challenge people to see all of life and experience–past, present, and future–by the light of Jesus Christ.</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>A story worth telling is one that moves us closer to God, whether that be joy in what we have seen, or recognition of our own human nature</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>That human nature is known and revealed in God.</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>That one can pursue art with their whole heart and mind without abandoning morality.</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>The crossover of art: music, theatre, film, poetry, painting, and all its forms should always be encouraged.</li>
          </ul>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ aspectRatio: "4/5", background: "#1a0800", padding: 16, transform: "rotate(2deg)" }}>
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg,#1a0800,#050201)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>🕊️</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const c = useColors();
  return (
    <section style={{ background: c.surfaceLowest, padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer }}>Our Theatre Space</span>
          <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 44, marginTop: 16 }}>Name For Our Theatre Space</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 2 }}>
          <div style={{ width: "100%", height: 320, background: "linear-gradient(120deg,#1a1a0a,#0a0a05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, filter: "grayscale(1)", transition: "filter 1s" }}
            onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
            onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}>🏭</div>
          <div style={{ background: c.surfaceHigh, padding: 48 }}>
            <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: c.primary, marginBottom: 16 }}>Hope &amp; Faith</h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: c.onSurfaceVariant }}>Founded in XXXX, Fixed stuff up.</p>
          </div>
          <div style={{ background: c.surfaceContainer, padding: 48 }}>
            <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: c.primary, marginBottom: 16 }}>Theatre for the Soul</h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: c.onSurfaceVariant }}>Our time and rehearsal process is centered on our love and devotion to Jesus Christ, through prayer and dilligent work.</p>
          </div>
          <div style={{ width: "100%", height: 320, background: "linear-gradient(120deg,#0a0a05,#151005)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, filter: "grayscale(1)", transition: "filter 1s" }}
            onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
            onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}>🎭</div>
        </div>
      </div>
    </section>
  );
}

function LeadershipProfile({ name, role, bio, cta, icon, emoji }) {
  const c = useColors();
  return (
    <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
      <div style={{ position: "relative", width: 200, flexShrink: 0 }}>
        <div style={{ aspectRatio: "3/4", background: "linear-gradient(160deg,#1a0800,#0a0300)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>{emoji}</div>
        <div style={{ position: "absolute", top: -12, right: -12, background: c.primaryContainer, padding: 10 }}>
          <span style={{ fontSize: 16 }}>{icon}</span>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 28, marginBottom: 4 }}>{name}</h3>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: c.primary, display: "block", marginBottom: 24 }}>{role}</span>
        <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>{bio}</p>
        <span style={{ color: c.primary, fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", cursor: "pointer" }}>{cta} →</span>
      </div>
    </div>
  );
}

function LeadershipSection() {
  const c = useColors();
  const profiles = [
    { name: "Rico Heisler", role: "Artistic Director", bio: "A Bachelor of Arts graduate from the University of Northwestern (Saint Paul) and the J.D. William Mitchell College of Law, he has had over 20 years of directing, choreographing and acting experience. Rico brings and intensity and deep physical breadth to every project.", cta: "Read More", icon: "📖", emoji: "👨‍🎭" },
    { name: "Benjamin Gagliardi", role: "Dramatist", bio: "A graduate of Theatre and Computer Science from the University of Wisconsin, Madison, Benjamin is an aspiring writer and actor. He finds particular joy in humor and comedy", cta: "View Portfolio", icon: "🎨", emoji: "👩‍🎨" },
  ];
  return (
    <section style={{ padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 40, marginBottom: 80 }}>Founders of <em>Spirit of Fire</em></h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96 }}>
          {profiles.map(p => <LeadershipProfile key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}

function MissionCTA() {
  const c = useColors();
  return (
    <section style={{ padding: "96px 48px", background: c.surfaceLow, borderTop: `1px solid rgba(89,66,56,0.1)`, borderBottom: `1px solid rgba(89,66,56,0.1)` }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 48, marginBottom: 24 }}>Don't miss <em style={{ color: c.primary }}> Mother Rabbit!</em></h2>
        <p style={{ color: "rgba(229,226,225,0.6)", marginBottom: 48, fontSize: 17, lineHeight: 1.7 }}>Join us for an evening of unbridled joy and laughter, as family and loved ones learn to forgive and work with each other.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
          <button style={{ background: c.primaryContainer, color: c.onPrimaryContainer, padding: "16px 40px", fontSize: 12, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>Reserve Your Ticket</button>
          <button style={{ border: `1px solid rgba(255,181,154,0.3)`, color: c.primary, padding: "16px 40px", fontSize: 12, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>Become a Patron</button>
        </div>
      </div>
    </section>
  );
}

function MissionPage() {
  return (
    <main>
      <MissionHero />
      <MissionStatement />
      <LocationSection />
      <LeadershipSection />
      <MissionCTA />
      <Footer />
    </main>
  );
}

function ProductionsHero() {
  const c = useColors();
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 48px 96px", display: "grid", gridTemplateColumns: "7fr 5fr", gap: 48, alignItems: "center" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primary }}>Current Season</span>
        </div>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", marginBottom: 32 }}>
          Mother <span style={{ color: c.primaryContainer }}>Rabbit</span>
        </h1>
        <p style={{ fontSize: 17, color: c.onSurfaceVariant, lineHeight: 1.7, maxWidth: 500, marginBottom: 40, fontWeight: 300 }}>
          Peter Kotski’s mother is sick. His father passed away years ago. His eccentric brothers are eccentric, and estranged. A family crisis brings them together--for better or worse--and their reunion begets all sorts of hijinks.
        </p>
        <button style={{ border: `1px solid ${c.outlineVariant}`, color: c.onSurface, padding: "12px 32px", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase" }}>
          Read More
        </button>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ aspectRatio: "3/4", background: c.surfaceContainer, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 96, opacity: .7 }}>🕯️</div>
        <div style={{ position: "absolute", bottom: -24, left: -24, background: c.primaryContainer, padding: 24, fontSize: 32 }}>🔥</div>
      </div>
    </section>
  );
}

function Performances({ setPage }) {
  const c = useColors();
  const prods = [
    { title: "Mother Rabbit", dates: "JUN 01 — JUL 01", badge: "Encore Performance", badgeColor: c.tertiaryContainer, badgeText: "#38017a" },
    { title: "Animal Crackers", dates: "TBD", badge: "Adaptation", badgeColor: c.surfaceContainer, badgeText: c.primary },
    { title: "Missing the Rain", dates: "TBD", badge: "World Premiere", badgeColor: c.primaryContainer, badgeText: c.onPrimaryContainer },
  ];
  return (
    <section style={{ background: c.surfaceLow, padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, borderBottom: `1px solid rgba(89,66,56,0.2)`, paddingBottom: 28 }}>
          <div>
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 36, marginBottom: 8 }}>Performances</h2>
            <p style={{ fontSize: 11, color: c.outline, letterSpacing: ".2em", textTransform: "uppercase" }}>Active Productions • 2026</p>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["←", "→"].map(a => <span key={a} style={{ color: c.primary, cursor: "pointer", fontSize: 20 }}>{a}</span>)}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48 }}>
          {prods.map(p => <ProdCard key={p.title} {...p} onBook={() => setPage("tickets")} />)}
        </div>
      </div>
    </section>
  );
}

function MainQuote() {
  const c = useColors();
  return (
    <section style={{ padding: "160px 48px", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ fontSize: 40, color: c.primaryContainer, marginBottom: 32 }}>✦</div>
      <blockquote style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 34, lineHeight: 1.4, color: c.onSurface, marginBottom: 40 }}>
        All art should have no other end and aim than the glory of God and the soul’s refreshment; where this is not remembered there is no real art but only a devilish hubbub. Soli Deo Gloria.
      </blockquote>
      <cite style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary, fontStyle: "normal" }}>Johann Sebastian Bach</cite>
    </section>
  );
}

function ProductionsPage({ setPage }) {
  return (
    <main className="pat" style={{ minHeight: "100vh" }}>
      <ProductionsHero />
      <Performances setPage={setPage} />
      <MainQuote />
      <Footer />
    </main>
  );
}

function StepIndicator() {
  const c = useColors();
  const steps = ["I · Production", "II · Seat Choice", "III · Review"];
  return (
    <nav style={{ display: "flex", justifyContent: "center", marginBottom: 64, padding: "0 48px" }}>
      <ol style={{ display: "flex", alignItems: "center", width: "100%", maxWidth: 600 }}>
        {steps.map((s, i) => (
          <li key={s} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <div style={{ width: 28, height: 28, border: `1px solid ${i === 0 ? c.primaryContainer : c.outline}`, background: i === 0 ? "rgba(249,94,20,0.1)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: i === 0 ? c.primary : c.outline }}>{["I", "II", "III"][i]}</div>
              <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: i === 0 ? c.primary : c.outline }}>{s.split(" · ")[1]}</span>
            </div>
            {i < 2 && <div style={{ flex: 1, height: 1, background: c.outlineVariant, margin: "0 12px" }} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ShowSelector({ selected, onSelect }) {
  const c = useColors();

  const shows = [
    { title: "Mother Rabbit", sub: "Opening Cycle", desc: "An explosive, anarchic comedy inspired by the works of Abbott and Costello and the Marx Brothers." },
    { title: "Animal Crackers", sub: "Adaptation Premiere", desc: "The revival of the old American Comedy genuises: the Marx Brothers." },
    { title: "Missing the Rain", sub: "World Premiere", desc: "A dramatic exploration of forgiveness and family struggles." },
  ];
  return (
    <section>
      <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 28, marginBottom: 32, borderLeft: `2px solid ${c.primaryContainer}`, paddingLeft: 24 }}>I. Choose Your Performance</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {shows.map((show, i) => (
          <div key={i} onClick={() => onSelect(i)} style={{ background: selected === i ? c.surfaceHigh : c.surfaceLow, outline: selected === i ? `1px solid ${c.primaryContainer}` : "none", cursor: "pointer", overflow: "hidden" }}>
            <div style={{ aspectRatio: "16/10", background: `linear-gradient(160deg,${i === 0 ? "#1a0500,#0a0200" : "#1a0a00,#0d0500"})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, position: "relative" }}>
              {i === 0 ? "🕯️" : "🎭"}
              {selected === i && <div style={{ position: "absolute", inset: 0, background: "rgba(249,94,20,0.1)" }} />}
              {selected === i && <span style={{ position: "absolute", top: 8, right: 8, color: c.primaryContainer }}>✓</span>}
            </div>
            <div style={{ padding: 24 }}>
              <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em", color: c.primary, display: "block", marginBottom: 8 }}>{show.sub}</span>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{show.title}</h3>
              <p style={{ fontSize: 13, color: c.onSurfaceVariant, lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{show.desc}</p>
              <button style={{ width: "100%", padding: 12, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", background: selected === i ? c.primaryContainer : "transparent", color: selected === i ? c.onPrimaryContainer : c.onSurface, border: selected === i ? "none" : `1px solid ${c.outlineVariant}`, fontWeight: selected === i ? 700 : 400 }}>
                {selected === i ? "Performance Selected" : "Select Performance"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DatePicker({ selected, onSelect }) {
  const c = useColors();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <section>
      <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 28, marginBottom: 32, borderLeft: `2px solid ${c.primaryContainer}`, paddingLeft: 24 }}>II. Choose Your Date</h2>
      <div style={{ background: c.surfaceLow, padding: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8, marginBottom: 16, textAlign: "center" }}>
          {days.map(d => <span key={d} style={{ fontSize: 9, textTransform: "uppercase", color: c.outline, letterSpacing: ".1em" }}>{d}</span>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8 }}>
          {[null, null, null, null].map((_, i) => <div key={i} />)}
          {dates.map(d => {
            const disabled = d <= 2;
            const sel = d === selected;
            return (
              <button key={d} onClick={() => !disabled && onSelect(d)} style={{ aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: 13, cursor: disabled ? "not-allowed" : "pointer", color: disabled ? "rgba(229,226,225,0.25)" : sel ? c.primary : c.onSurface, background: sel ? "rgba(249,94,20,0.15)" : "transparent", border: sel ? `1px solid ${c.primaryContainer}` : `1px solid rgba(89,66,56,0.3)`, transition: "all .2s", gap: 2 }}>
                <span>{d}</span>
                {sel && <span style={{ fontSize: 7, textTransform: "uppercase", letterSpacing: ".1em" }}>Selected</span>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SeatMap({ selected, onToggle }) {
  const c = useColors();
  const rows = [[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5, 6, 7], [null, null, 0, 1, 2, 3, null, null]];
  return (
    <section>
      <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 28, marginBottom: 32, borderLeft: `2px solid ${c.primaryContainer}`, paddingLeft: 24 }}>III. Choose Your Seat</h2>
      <div style={{ background: c.surfaceContainer, padding: 48, textAlign: "center" }}>
        <div style={{ position: "relative", marginBottom: 40 }}>
          <div style={{ width: "75%", margin: "0 auto", height: 2, background: "linear-gradient(to right,transparent,rgba(255,181,154,0.4),transparent)" }} />
          <span style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", fontSize: 9, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary, whiteSpace: "nowrap" }}>The Stage</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          {rows.map((row, ri) => (
            <div key={ri} style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              {row.map((seat, si) => {
                if (seat === null) return <div key={si} style={{ width: 32, height: 32 }} />;
                const key = ri * 10 + si;
                const occupied = ri === 2 && (si === 0 || si === 1 || si === 6 || si === 7);
                const sel = selected.includes(key);
                return (
                  <button key={si} onClick={() => !occupied && onToggle(key)} style={{ width: 32, height: 32, borderRadius: "6px 6px 0 0", background: occupied ? c.surfaceHighest : sel ? c.primaryContainer : c.surfaceHighest, opacity: occupied ? .3 : 1, cursor: occupied ? "not-allowed" : "pointer", boxShadow: sel ? "0 0 12px rgba(249,94,20,0.4)" : "none", transition: "all .2s", border: "none" }} />
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 40, fontSize: 9, textTransform: "uppercase", letterSpacing: ".2em", color: c.onSurfaceVariant }}>
          {[["Available", c.surfaceHighest, 1], ["Selected", c.primaryContainer, 1], ["Occupied", c.surfaceHighest, .3]].map(([l, bg, op]) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "3px 3px 0 0", background: bg, opacity: op }} />{l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceSummary({ showIndex, date, seats, offering, onOfferingChange }) {
  const c = useColors();
  const shows = ["Mother Rabbit", "Animal Crackers", "Missing the Rain"];
  const total = seats.length * 60 + (typeof offering === "number" ? offering : 0);
  return (
    <div style={{ position: "sticky", top: 120, background: c.surfaceContainer, padding: 32, borderLeft: `1px solid rgba(255,181,154,0.15)` }}>
      <h3 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 20, color: c.primary, marginBottom: 28 }}>Summary of Purchase</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 28, paddingBottom: 28, borderBottom: `1px solid ${c.outlineVariant}` }}>
        {[
          { label: "Production", value: shows[showIndex] },
          { label: "Scheduled Time", value: `June ${String(date).padStart(2, "0")}, 2026 • 7:00 p.m.` },
          { label: "Seat", value: `Row A, Seat ${seats.map(s => s + 1).join(", ") || "—"}`, price: `$${seats.length * 60}.00` },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".15em", color: c.outline, marginBottom: 4 }}>{r.label}</p>
              <p style={{ fontSize: 14, fontWeight: 500 }}>{r.value}</p>
            </div>
            {r.price && <p style={{ fontSize: 15, fontWeight: 700 }}>{r.price}</p>}
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: c.primary, fontWeight: 700, marginBottom: 12 }}>⛩ Goodwill Offering</p>
        <p style={{ fontSize: 11, color: c.onSurfaceVariant, lineHeight: 1.7, marginBottom: 16 }}>Support the ongoing mission through a voluntary contribution.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
          {[0, 5, 10, "Custom"].map(o => (
            <button key={o} onClick={() => typeof o === "number" && onOfferingChange(o)} style={{ padding: "8px 4px", fontSize: 12, fontWeight: offering === o ? 700 : 400, border: `1px solid ${offering === o ? c.primary : c.outline}`, color: offering === o ? c.primary : c.onSurface, background: offering === o ? "rgba(255,181,154,0.1)" : "transparent", transition: "all .2s" }}>
              {typeof o === "number" ? `$${o}` : o}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 17, fontWeight: 700 }}>
          <span>Total Cost</span>
          <span style={{ color: c.primaryContainer }}>${total}.00</span>
        </div>
        <button style={{ width: "100%", background: c.primaryContainer, color: c.onPrimaryContainer, padding: 16, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", boxShadow: "0 10px 30px rgba(249,94,20,0.3)" }}>
          Complete Purchase
        </button>
        <p style={{ fontSize: 9, textAlign: "center", color: c.outlineVariant, fontStyle: "italic" }}>All tickets are non-refundable purchases.</p>
      </div>
    </div>
  );
}

function TicketsPage() {
  const [selectedShow, setSelectedShow] = useState(1);
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedSeats, setSelectedSeats] = useState([2, 3]);
  const [offering, setOffering] = useState(25);

  function toggleSeat(key) {
    setSelectedSeats(prev => prev.includes(key) ? prev.filter(s => s !== key) : [...prev, key]);
  }

  return (
    <main style={{ padding: "48px 0 96px", maxWidth: 1200, margin: "0 auto" }}>
      <StepIndicator />
      <div style={{ display: "grid", gridTemplateColumns: "8fr 4fr", gap: 48, padding: "0 48px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          <ShowSelector selected={selectedShow} onSelect={setSelectedShow} />
          <DatePicker selected={selectedDate} onSelect={setSelectedDate} />
          <SeatMap selected={selectedSeats} onToggle={toggleSeat} />
        </div>
        <div>
          <PerformanceSummary showIndex={selectedShow} date={selectedDate} seats={selectedSeats} offering={offering} onOfferingChange={setOffering} />
        </div>
      </div>
      <div style={{ padding: "0 48px" }}>
        <Footer />
      </div>
    </main>
  );
}


function AffiliatesHero() {
  const c = useColors();
  return (
    <section style={{ position: "relative", height: 480, display: "flex", alignItems: "flex-end", padding: "0 48px 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .18, backgroundImage: "radial-gradient(ellipse at 65% 40%,rgba(249,94,20,0.6) 0%,transparent 60%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer, display: "block", marginBottom: 20 }}>Community & Collaboration</span>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 24 }}>
          Affiliates <span style={{ color: c.primaryContainer }}>&</span><br />Partners
        </h1>
        <p style={{ fontSize: 17, color: c.onSurfaceVariant, maxWidth: 520, lineHeight: 1.7, fontWeight: 300 }}>
          We are grateful to work alongside organizations that share our love of theatre and our commitment to artistic excellence.
        </p>
      </div>
    </section>
  );
}

function PartnerCard() {
  const c = useColors();
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid", gridTemplateColumns: "260px 1fr", overflow: "hidden",
        border: `1px solid ${hov ? "rgba(249,94,20,0.3)" : "rgba(89,66,56,0.2)"}`,
        background: hov ? c.surfaceHigh : c.surfaceLow,
        transition: "all .4s", position: "relative",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: hov ? "radial-gradient(ellipse at left,rgba(249,94,20,0.05),transparent 60%)" : "none", transition: "all .5s", pointerEvents: "none" }} />

      {/* Logo panel */}
      <div style={{
        background: "linear-gradient(160deg,#0d1a2a,#050a10)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: 40, gap: 16, position: "relative",
        filter: hov ? "grayscale(0)" : "grayscale(0.6)",
        transition: "filter .5s",
      }}>
        <span style={{ fontSize: 72 }}>🎭</span>
        <span style={{
          fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em",
          color: hov ? c.primaryContainer : c.outline, transition: "color .4s",
        }}>Affiliate</span>
      </div>

      {/* Info panel */}
      <div style={{ padding: "44px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
        <div>
          <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em", color: c.primary, display: "block", marginBottom: 10 }}>
            ✦ Featured Partner
          </span>
          <h2 style={{
            fontFamily: "'Noto Serif',serif", fontSize: 36, lineHeight: 1.1,
            color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 6,
          }}>Big Blue Theatre</h2>
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: c.outline }}>
            Theatre Company · Chicago, IL
          </span>
        </div>
        <div style={{ height: 1, width: 48, background: c.outlineVariant }} />
        <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontSize: 14, fontWeight: 300, maxWidth: 480 }}>
          Big Blue Theatre is a Chicago-based ensemble dedicated to bold, original theatrical work. Spirit of Fire is proud to count them among our closest collaborators and friends in the craft.
        </p>
        <div>
          <span
            style={{ color: c.primaryContainer, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.color = c.primary}
            onMouseLeave={e => e.currentTarget.style.color = c.primaryContainer}
          >
            Visit Big Blue Theatre →
          </span>
        </div>
      </div>
    </div>
  );
}

function PartnersSection() {
  const c = useColors();
  return (
    <section className="pat" style={{ padding: "96px 0", background: c.surfaceLow }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 64 }}>
          <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
          <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 13, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary }}>Our Partners</h2>
        </div>
        <PartnerCard />

        {/* Placeholder slots */}
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[0, 1].map(i => (
            <div key={i} style={{
              border: `1px dashed rgba(89,66,56,0.3)`, padding: "48px 40px",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 16, textAlign: "center", background: c.surfaceLowest,
            }}>
              <span style={{ fontSize: 32, opacity: .3 }}>✦</span>
              <p style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 18, color: c.outline }}>
                Partner Forthcoming
              </p>
              <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".2em", color: "rgba(168,138,126,0.4)" }}>
                More collaborators to come
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  const c = useColors();
  return (
    <section style={{ padding: "96px 48px", background: c.surfaceLowest, textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(249,94,20,0.05) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 580, margin: "0 auto" }}>
        <span style={{ fontSize: 28, color: c.primaryContainer, display: "block", marginBottom: 24 }}>✦</span>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 40, marginBottom: 20, lineHeight: 1.2 }}>
          Interested in <span style={{ color: c.primaryContainer }}>partnering</span> with us?
        </h2>
        <p style={{ color: c.onSurfaceVariant, fontSize: 15, lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
          We welcome relationships with organizations that share our passion for theatre and our devotion to excellence. Reach out — we'd love to talk.
        </p>
        <button
          style={{ background: c.primaryContainer, color: c.onPrimaryContainer, padding: "16px 40px", fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", transition: "opacity .2s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          Get in Touch →
        </button>
      </div>
    </section>
  );
}

function AffiliatesPage() {
  return (
    <>
      <GlobalStyles />
      <main style={{ paddingTop: 80 }}>
        <AffiliatesHero />
        <PartnersSection />
        <ContactStrip />
        <Footer />
      </main>
    </>
  );
}


// ── Shared field styles ──────────────────────────────────────────────────────
function useFieldStyle(c) {
  return {
    base: {
      background: "transparent", border: "none",
      borderBottom: `1px solid ${c.outlineVariant}`,
      outline: "none", color: c.onSurface, fontSize: 15,
      padding: "10px 0", width: "100%", transition: "border-color .2s",
    },
  };
}

function Field({ label, children }) {
  const c = useColors();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".25em", color: c.outline }}>{label}</label>
      {children}
    </div>
  );
}

function SubmitBtn({ label, disabled }) {
  const c = useColors();
  return (
    <button
      disabled={disabled}
      style={{
        width: "100%", background: disabled ? c.surfaceHighest : c.primaryContainer,
        color: disabled ? c.outline : c.onPrimaryContainer,
        padding: "18px 0", fontSize: 11, fontWeight: 700, letterSpacing: ".25em",
        textTransform: "uppercase", transition: "all .3s",
        boxShadow: disabled ? "none" : "0 10px 30px rgba(249,94,20,0.2)",
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.opacity = ".85"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
    >{label}</button>
  );
}

function SuccessBanner({ msg }) {
  const c = useColors();
  return (
    <div style={{ background: "rgba(249,94,20,0.1)", border: `1px solid rgba(249,94,20,0.3)`, padding: "16px 24px", display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ color: c.primaryContainer, fontSize: 18 }}>✦</span>
      <p style={{ fontSize: 13, color: c.primary }}>{msg}</p>
    </div>
  );
}

// ── Section wrapper ──────────────────────────────────────────────────────────
function SectionBlock({ id, eyebrow, heading, sub, accent, children }) {
  const c = useColors();
  return (
    <section id={id} style={{ padding: "96px 0", scrollMarginTop: 100 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 5fr", gap: 80, alignItems: "start" }}>
          {/* Left label */}
          <div style={{ position: "sticky", top: 120 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ height: 1, width: 36, background: c.primaryContainer }} />
              <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".35em", color: c.primary }}>{eyebrow}</span>
            </div>
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 48, lineHeight: 1.05, marginBottom: 20 }}>
              {heading}{accent && <span style={{ color: c.primaryContainer }}>{accent}</span>}
            </h2>
            <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontSize: 14, fontWeight: 300 }}>{sub}</p>
          </div>
          {/* Right form */}
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

// ── Auditions ────────────────────────────────────────────────────────────────
function AuditionsForm() {
  const c = useColors();
  const { base } = useFieldStyle(c);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", production: "", experience: "", training: "", note: "" });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const focus = e => e.target.style.borderBottomColor = c.primary;
  const blur = e => e.target.style.borderBottomColor = c.outlineVariant;

  return (
    <div style={{ background: c.surfaceLow, border: `1px solid rgba(89,66,56,0.2)`, padding: 48 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 32 }}>✦ Audition Inquiry</p>
      {sent ? <SuccessBanner msg="Your audition inquiry has been received. We'll be in touch soon." /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Full Name">
              <input value={form.name} onChange={e => up("name", e.target.value)} placeholder="Your name" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Email Address">
              <input value={form.email} onChange={e => up("email", e.target.value)} placeholder="you@email.com" type="email" style={base} onFocus={focus} onBlur={blur} />
            </Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Phone (optional)">
              <input value={form.phone} onChange={e => up("phone", e.target.value)} placeholder="(000) 000-0000" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Production of Interest">
              <select value={form.production} onChange={e => up("production", e.target.value)}
                style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, cursor: "pointer" }}
                onFocus={focus} onBlur={blur}>
                <option value="" style={{ color: "black" }} disabled selected hidden>Select a production…</option>
                <option style={{ color: "black" }}>Mother Rabbit</option>
                <option style={{ color: "black" }}>Animal Crackers</option>
                <option style={{ color: "black" }}>Missing the Rain</option>
                <option style={{ color: "black" }}>Open / Any</option>
              </select>
            </Field>
          </div>
          <Field label="Performance Experience">
            <textarea value={form.experience} onChange={e => up("experience", e.target.value)} rows={3}
              placeholder="Briefly describe your acting, singing, or dance experience…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <Field label="Training & Education (optional)">
            <input value={form.training} onChange={e => up("training", e.target.value)} placeholder="Schools, workshops, coaches…" style={base} onFocus={focus} onBlur={blur} />
          </Field>
          <Field label="Anything Else?">
            <textarea value={form.note} onChange={e => up("note", e.target.value)} rows={2}
              placeholder="Questions, scheduling notes, special skills…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <div onClick={() => form.name && form.email && setSent(true)}>
            <SubmitBtn label="Submit Audition Inquiry →" disabled={!form.name || !form.email} />
          </div>
          <p style={{ fontSize: 9, color: c.outlineVariant, fontStyle: "italic", textAlign: "center" }}>Audition dates are announced per production. Submitting this form does not guarantee a slot.</p>
        </div>
      )}
    </div>
  );
}

// ── Project Submissions ──────────────────────────────────────────────────────
function SubmissionsForm() {
  const c = useColors();
  const { base } = useFieldStyle(c);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", title: "", type: "", logline: "", draft: "", note: "" });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const focus = e => e.target.style.borderBottomColor = c.primary;
  const blur = e => e.target.style.borderBottomColor = c.outlineVariant;

  return (
    <div style={{ background: c.surfaceLow, border: `1px solid rgba(89,66,56,0.2)`, padding: 48 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 32 }}>✦ Project Submission</p>
      {sent ? <SuccessBanner msg="Your submission has been received. Our dramaturg will review it carefully." /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Your Name">
              <input value={form.name} onChange={e => up("name", e.target.value)} placeholder="Full name" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Email Address">
              <input value={form.email} onChange={e => up("email", e.target.value)} placeholder="you@email.com" type="email" style={base} onFocus={focus} onBlur={blur} />
            </Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Project Title">
              <input value={form.title} onChange={e => up("title", e.target.value)} placeholder="Working title" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Project Type">
              <select value={form.type} onChange={e => up("type", e.target.value)}
                style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, cursor: "pointer" }}
                onFocus={focus} onBlur={blur}>
                <option value="" style={{ color: "black" }} disabled selected hidden>Select a type…</option>
                <option style={{ color: "black" }}>Original Play</option>
                <option style={{ color: "black" }}>Musical</option>
                <option style={{ color: "black" }}>Adaptation</option>
                <option style={{ color: "black" }}>One-Act</option>
                <option style={{ color: "black" }}>Other</option>
              </select>
            </Field>
          </div>
          <Field label="Logline / Synopsis">
            <textarea value={form.logline} onChange={e => up("logline", e.target.value)} rows={4}
              placeholder="A brief description of your project — its story, themes, and what makes it worth telling…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <Field label="Draft Status">
            <select value={form.draft} onChange={e => up("draft", e.target.value)}
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, cursor: "pointer" }}
              onFocus={focus} onBlur={blur}>
              <option value="" style={{ color: "black" }} disabled selected hidden>Where is the project?</option>
              <option style={{ color: "black" }}>Concept / Outline</option>
              <option style={{ color: "black" }}>First Draft</option>
              <option style={{ color: "black" }}>Revised Draft</option>
              <option style={{ color: "black" }}>Production-Ready</option>
            </select>
          </Field>
          <Field label="Additional Notes (optional)">
            <textarea value={form.note} onChange={e => up("note", e.target.value)} rows={2}
              placeholder="Inspirations, collaborators, any context you'd like us to know…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <div onClick={() => form.name && form.email && form.title && setSent(true)}>
            <SubmitBtn label="Submit Project →" disabled={!form.name || !form.email || !form.title} />
          </div>
          <p style={{ fontSize: 9, color: c.outlineVariant, fontStyle: "italic", textAlign: "center" }}>We read every submission. Response times may vary depending on our current production schedule.</p>
        </div>
      )}
    </div>
  );
}

// ── Join the Crew ────────────────────────────────────────────────────────────
const CREW_ROLES = ["Stage Management", "Lighting Design", "Sound Design", "Set Design & Construction", "Costume & Wardrobe", "Props", "Front of House", "Marketing & Photography", "General Volunteer"];

function CrewForm() {
  const c = useColors();
  const { base } = useFieldStyle(c);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", roles: [], availability: "", experience: "", note: "" });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const toggleRole = r => setForm(p => ({
    ...p,
    roles: p.roles.includes(r) ? p.roles.filter(x => x !== r) : [...p.roles, r],
  }));
  const focus = e => e.target.style.borderBottomColor = c.primary;
  const blur = e => e.target.style.borderBottomColor = c.outlineVariant;

  return (
    <div style={{ background: c.surfaceLow, border: `1px solid rgba(89,66,56,0.2)`, padding: 48 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 32 }}>✦ Crew Inquiry</p>
      {sent ? <SuccessBanner msg="Welcome to the family. We'll reach out about upcoming crew opportunities." /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Full Name">
              <input value={form.name} onChange={e => up("name", e.target.value)} placeholder="Your name" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Email Address">
              <input value={form.email} onChange={e => up("email", e.target.value)} placeholder="you@email.com" type="email" style={base} onFocus={focus} onBlur={blur} />
            </Field>
          </div>
          <Field label="Areas of Interest — select all that apply">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, paddingTop: 8 }}>
              {CREW_ROLES.map(r => {
                const sel = form.roles.includes(r);
                return (
                  <button key={r} onClick={() => toggleRole(r)} style={{
                    padding: "7px 16px", fontSize: 11, letterSpacing: ".1em",
                    border: `1px solid ${sel ? c.primaryContainer : "rgba(89,66,56,0.5)"}`,
                    background: sel ? "rgba(249,94,20,0.12)" : "transparent",
                    color: sel ? c.primary : c.onSurfaceVariant,
                    transition: "all .2s",
                  }}>{r}</button>
                );
              })}
            </div>
          </Field>
          <Field label="Availability">
            <select value={form.availability} onChange={e => up("availability", e.target.value)}
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, cursor: "pointer" }}
              onFocus={focus} onBlur={blur}>
              <option value="" style={{ color: "black" }} disabled selected hidden>How available are you?</option>
              <option style={{ color: "black" }}>Evenings & Weekends</option>
              <option style={{ color: "black" }}>Weekends Only</option>
              <option style={{ color: "black" }}>Flexible</option>
              <option style={{ color: "black" }}>Production-by-Production</option>
            </select>
          </Field>
          <Field label="Relevant Experience (optional)">
            <textarea value={form.experience} onChange={e => up("experience", e.target.value)} rows={3}
              placeholder="Past productions, skills, tools you work with…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <Field label="Anything Else?">
            <textarea value={form.note} onChange={e => up("note", e.target.value)} rows={2}
              placeholder="Questions, motivations, or anything you'd like us to know…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <div onClick={() => form.name && form.email && setSent(true)}>
            <SubmitBtn label="Join the Crew →" disabled={!form.name || !form.email} />
          </div>
          <p style={{ fontSize: 9, color: c.outlineVariant, fontStyle: "italic", textAlign: "center" }}>Crew positions are filled per production. We'll contact you when a relevant opportunity arises.</p>
        </div>
      )}
    </div>
  );
}

// ── Jump Card ────────────────────────────────────────────────────────────────
function JumpCard({ card, i, onNav }) {
  const c = useColors();
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onNav(card.id)}
      style={{
        padding: "36px 40px", cursor: "pointer", display: "flex", alignItems: "center", gap: 20,
        borderRight: i < 2 ? `1px solid rgba(89,66,56,0.2)` : "none",
        background: hov ? c.surfaceContainer : "transparent",
        transition: "background .3s",
      }}
    >
      <span style={{ fontSize: 28, filter: hov ? "grayscale(0)" : "grayscale(1)", transition: "filter .4s" }}>{card.emoji}</span>
      <div>
        <p style={{ fontFamily: "'Noto Serif',serif", fontSize: 18, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 2 }}>{card.label}</p>
        <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: c.outline }}>{card.desc}</p>
      </div>
      <span style={{ marginLeft: "auto", color: hov ? c.primaryContainer : "transparent", fontSize: 18, transition: "color .3s" }}>→</span>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function ParticipateHero({ onNav }) {
  const c = useColors();
  const cards = [
    { label: "Auditions", desc: "Step onto the stage", emoji: "🎭", id: "auditions" },
    { label: "Submissions", desc: "Pitch your project", emoji: "✍️", id: "submissions" },
    { label: "Join the Crew", desc: "Work behind the scenes", emoji: "🔦", id: "crew" },
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 48px 80px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.15) 70%)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 50% 30%,rgba(249,94,20,0.7) 0%,transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer, display: "block", marginBottom: 20 }}>Be Part of the Story</span>
          <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 24 }}>
            Participate
          </h1>
          <p style={{ fontSize: 17, color: c.onSurfaceVariant, maxWidth: 540, lineHeight: 1.7, fontWeight: 300 }}>
            Spirit of Fire is built by passionate people. Whether you perform, create, or work behind the scenes — there is a place for you here.
          </p>
        </div>
      </div>

      {/* Jump cards */}
      <div style={{ background: c.surfaceLowest, borderTop: `1px solid rgba(89,66,56,0.15)` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {cards.map((card, i) => (
            <JumpCard key={card.id} card={card} i={i} onNav={onNav} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Divider ──────────────────────────────────────────────────────────────────
function Divider() {
  const c = useColors();
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
      <div style={{ height: 1, background: `linear-gradient(to right,${c.primaryContainer},rgba(89,66,56,0.2),transparent)` }} />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
function ParticipatePage() {
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />
      <main style={{ paddingTop: 80 }}>
        <ParticipateHero onNav={scrollTo} />

        <SectionBlock
          id="auditions"
          eyebrow="On Stage"
          heading="Auditions"
          sub="We hold open auditions for each production and welcome performers of all backgrounds. Fill out the form below and we'll reach out when auditions are announced for your production of interest."
        >
          <AuditionsForm />
        </SectionBlock>

        <Divider />

        <SectionBlock
          id="submissions"
          eyebrow="Original Work"
          heading="Project"
          accent=" Submissions"
          sub="Do you have a play, musical, or adaptation you believe in? Spirit of Fire is always looking for bold original stories that speak to the human experience through the lens of faith and craft. Pitch us your project."
        >
          <SubmissionsForm />
        </SectionBlock>

        <Divider />

        <SectionBlock
          id="crew"
          eyebrow="Behind the Scenes"
          heading="Join the "
          accent="Crew"
          sub="Great theatre is built by many hands. If you want to contribute your skills backstage — in design, production, stage management, or any other capacity — we want to hear from you."
        >
          <CrewForm />
        </SectionBlock>

        <Footer />
      </main>
    </>
  );
}


function TheaHero() {
  const c = useColors();
  return (
    <section style={{ position: "relative", height: 560, display: "flex", alignItems: "flex-end", padding: "0 48px 96px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.15) 65%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 40% 30%,rgba(249,94,20,0.7) 0%,transparent 55%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer, display: "block", marginBottom: 20 }}>
          Spirit of Fire · Essay
        </span>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 88, lineHeight: .88, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 28 }}>
          Theatology
        </h1>
        <p style={{ fontSize: 15, color: c.outline, letterSpacing: ".1em", fontStyle: "italic", fontFamily: "'Noto Serif',serif" }}>
          The Theology of Theatre
        </p>
      </div>
    </section>
  );
}

function TheaLede() {
  const c = useColors();
  return (
    <section style={{ background: c.surfaceLowest, borderBottom: `1px solid rgba(89,66,56,0.15)` }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 48px" }}>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 34, lineHeight: 1.25, color: c.onSurface, marginBottom: 0 }}>
          What does Theatre mean to a Christian?
        </h2>
      </div>
    </section>
  );
}

function TheaBody() {
  const c = useColors();

  const prose = { fontSize: 17, lineHeight: 1.9, color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 28 };
  const em = { color: c.primary, fontStyle: "italic" };
  const strong = { color: c.onSurface, fontWeight: 500 };

  return (
    <section className="pat" style={{ background: c.surfaceLow }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 48px 0" }}>

        {/* ¶1 */}
        <p style={prose}>
          In a world of so many forms and facets of Theatre, it is easy to believe that art is bigger than one philosophy. Why constrain yourself, when so many stories and such a vast amount of art exists? Because <span style={strong}>there is some objectivity in theatre</span>, and without guiding principals you drown in the noise of mediocrity. We all know from experience that there are inferior forms of theatrical expression, so the contention is not whether that is the case, but how to avoid theatre that does not resonate with the world.
        </p>
        <p style={prose}>
          To be clear, the focus is theatre as a general artform, and not the artforms that compose it. Within the structure of theatre is acting, painting, music, poetry, and many other forms with many methods that are not the focus. Theatre itself goes deeper than its many parts, and strikes at the core of what it is to be human.
        </p>

        {/* Definition callout */}
        <div style={{ borderLeft: `3px solid ${c.primaryContainer}`, paddingLeft: 32, margin: "52px 0" }}>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 16 }}>A Definition</p>
          <p style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.6, color: c.onSurface }}>
            Theatre is the expression of some truth about human nature.
          </p>
          <p style={{ fontSize: 13, color: c.outline, marginTop: 16, lineHeight: 1.7 }}>
            Truth is the conformity of the intellect with what the thing perceived actually is — the understanding of the objective reality of some existence. Inherently, the truth of something is its existence.
          </p>
        </div>

        {/* ¶2 */}
        <p style={prose}>
          <span style={strong}>God is the "I am"</span>, revealing Himself in scripture to be existence itself — thus God is truth itself. We humans are created in the image and likeness of God, and so our nature, while not uniform with the divine, is modelled after His nature.
        </p>
        <p style={prose}>
          Therefore, since Theatre is the expression of some truth about human nature, the acme of both truth and human nature being God, <span style={em}>Theatre is also the pursuit of expressing the divine.</span>
        </p>

        {/* Divider ornament */}
        <div style={{ textAlign: "center", margin: "56px 0", color: c.outlineVariant, fontSize: 18, letterSpacing: "1em" }}>✦ ✦ ✦</div>

        {/* ¶3 */}
        <p style={prose}>
          If Theatre is the expression of some truth about human nature, then when we posit an untruth — or lie in performance — <span style={strong}>we damage the dignity of those we are performing for.</span> To willfully, or otherwise, pervert the truth is to disrespect any who pursue it. So we must understand how to express our human nature.
        </p>
        <p style={prose}>
          We know the perfection of our nature is found in God, but we also know that our nature is inherently imperfect. Thus the expression of our human nature is true <span style={em}>both</span> when it seeks the divine nature, and also when it falls short in some way. It is always ordered towards divine perfection, and does not glorify the inability to do so — it rebukes it by presenting it bare to our soul. But importantly, <span style={strong}>moral perfection is not required.</span>
        </p>

        {/* Two-column virtue/vice */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, margin: "52px 0" }}>
          <div style={{ background: c.surfaceContainer, padding: "36px 32px" }}>
            <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 14 }}>Virtue</p>
            <p style={{ fontFamily: "'Noto Serif',serif", fontSize: 19, color: c.onSurface, marginBottom: 12 }}>Found in the divine nature</p>
            <p style={{ fontSize: 13, color: c.onSurfaceVariant, lineHeight: 1.7, fontWeight: 300 }}>The expression of human nature reaching toward God — its proper end and highest form.</p>
          </div>
          <div style={{ background: c.surfaceHigh, padding: "36px 32px" }}>
            <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em", color: c.outline, marginBottom: 14 }}>Vice</p>
            <p style={{ fontFamily: "'Noto Serif',serif", fontSize: 19, color: c.onSurface, marginBottom: 12 }}>Found in our dissent from the divine</p>
            <p style={{ fontSize: 13, color: c.onSurfaceVariant, lineHeight: 1.7, fontWeight: 300 }}>Not glorified, but presented honestly — a mirror held to our fallen nature so the soul may recognize and recoil from it.</p>
          </div>
        </div>

        {/* ¶4 closing */}
        <p style={{ ...prose, marginBottom: 0 }}>
          In representing both Virtue and Vice, we represent the human condition with truth, and so the Theatre fulfills its purpose. The only thing left is the <span style={em}>strength</span> in which it fulfills that purpose — and that falls upon the methods of acting, designing, and performing the show.
        </p>

      </div>

      {/* Closing quote */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 48px 96px" }}>
        <div style={{ borderTop: `1px solid rgba(89,66,56,0.3)`, paddingTop: 48, textAlign: "center" }}>
          <span style={{ fontSize: 24, color: c.primaryContainer, display: "block", marginBottom: 20 }}>✦</span>
          <blockquote style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.6, color: c.onSurface, marginBottom: 20 }}>
            Soli Deo Gloria — to the glory of God alone.
          </blockquote>
          <cite style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".35em", color: c.primary, fontStyle: "normal" }}>
            The Spirit of Fire
          </cite>
        </div>
      </div>
    </section>
  );
}

function TheatologyPage() {
  return (
    <>
      <GlobalStyles />
      <main style={{ paddingTop: 80 }}>
        <TheaHero />
        <TheaLede />
        <TheaBody />
        <Footer />
      </main>
    </>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <GlobalStyles />
      <Nav page={page} setPage={setPage} />
      <div style={{ paddingTop: page === "home" ? 0 : 80 }}>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "mission" && <MissionPage />}
        {page === "team" && <TeamPage />}
        {page === "productions" && <ProductionsPage setPage={setPage} />}
        {page === "tickets" && <TicketsPage />}
        {page === "participate" && <ParticipatePage />}
        {page === "affiliates" && <AffiliatesPage />}
        {page === "support" && <SupportPage setPage={setPage} />}
        {page === "theatology" && <TheatologyPage />}
      </div>
    </>
  );
}