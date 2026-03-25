import GlobalStyles from "../Main/GlobalStyles"
import useColors from "../Main/GlobalColors"
import Footer from "../Main/Footer"
import { useState, useEffect } from "react";
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg"
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg"
import missingRainImage from "../Assets/Covers/MissingTheRain.webp"

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
            <span style={{ fontSize: 32, display: "block", marginBottom: 20 }}><img src="../favicon.ico" /></span>
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
    { title: "Mother Rabbit", dates: "JUN 01 — JUL 01", badge: "Encore Performance", badgeColor: c.tertiaryContainer, badgeText: "#38017a", image: motherRabbitImage },
    { title: "Animal Crackers", dates: "TBD", badge: "Adaptation", badgeColor: c.surfaceContainer, badgeText: c.primary, image: animalCrackersImage },
    { title: "Missing the Rain", dates: "TBD", badge: "World Premiere", badgeColor: c.primaryContainer, badgeText: c.onPrimaryContainer, image: missingRainImage },
  ];
  return (
    <section style={{ background: c.surfaceLow, padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24}}>
          <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
          <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 13, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary }}>Support Our Shows</h2>
        </div>
        <button onClick={() => setPage("portfolio")}
          onMouseEnter={e => { e.currentTarget.style.background = c.primaryContainer; e.currentTarget.style.color = c.onPrimaryContainer; }}
          onMouseLeave={e => { e.currentTarget.style.background = c.surfaceHighest; e.currentTarget.style.color = c.onSurface; }}
          style={{ width: "20%", padding: 16, margin: "30px 60px", fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase", background: c.surfaceHighest, border: `1px solid rgba(89,66,56,0.3)`, color: c.onSurface, transition: "all .5s" }}>
          Purchase Scripts
        </button>
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

function SupportProdCard({ title, dates, badge, badgeColor, badgeText, onBook, image }) {
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
        Reserve Ticket
      </button>
      <div style={{ position: "relative", paddingTop: "150%", overflow: "hidden", background: c.surfaceHighest, marginBottom: 24 }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0800,#050200)", transform: hov ? "scale(1.05)" : "scale(1)", filter: hov ? "grayscale(0%)" : "grayscale(100%)", transition: "all .7s ease", display: "flex", alignItems: "center", justifyContent: "center",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <div style={{ height:"100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity:"30%" }}></div>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,0.7) 0%,transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 20 }}>
          <span style={{ background: badgeColor, color: badgeText, padding: "4px 12px", fontSize: 9, fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase" }}>{badge}</span>
        </div>
      </div>
    </div>
  )
}

export default function SupportPage({ setPage }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
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