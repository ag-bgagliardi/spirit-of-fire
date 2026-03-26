import Footer from "../Main/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productions from "../Data/CurrentShows"
import "../Style/global.css";

const AMOUNTS = [5, 10, 25, 50, 100];

const TIERS = [
  { label: "Friend of the Fire",  range: "$1 – $49",   desc: "Recognition in our programmes." },
  { label: "Patron of the Arts",  range: "$50 – $249",  desc: "Programme credit and a reserved seat at opening night." },
  { label: "Founding Patron",     range: "$250+",       desc: "Named recognition, early ticket access, and a personal thank-you from the artistic director." },
];

function SupportHero() {
  return (
    <section style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 48px 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 30% 40%,rgba(249,94,20,0.6) 0%,transparent 60%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span className="label-xs color-primary-container" style={{ letterSpacing: ".4em", display: "block", marginBottom: 20 }}>Keep the Flame Alive</span>
        <h1 className="display-xl color-on-surface" style={{ marginBottom: 24 }}>
          Support <span className="color-primary-container">Us</span>
        </h1>
        <p className="body-md color-on-surface-var" style={{ fontSize: 17, maxWidth: 560 }}>
          Spirit of Fire runs on the generosity of patrons who believe in the power of theatre to uplift the soul. Every contribution — large or small — helps us keep telling stories that matter.
        </p>
      </div>
    </section>
  );
}

function DonationForm() {
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const displayAmt = isCustom ? (custom || "—") : `$${selected}`;

  return (
    <section className="pat section-pad bg-surface-low">
      <div className="container">
        <div className="donation-grid">

          {/* Left: form */}
          <div>
            <div className="flex-row section-label-row">
              <div className="divider-flame" style={{ height: 1, width: 48 }} />
              <h2 className="serif label-upper color-primary" style={{ fontSize: 13, letterSpacing: ".4em" }}>Make a Gift</h2>
            </div>

            <p className="label-xs color-outline" style={{ marginBottom: 16 }}>Select an Amount</p>
            <div className="amount-grid">
              {AMOUNTS.map(a => {
                const sel = !isCustom && selected === a;
                return (
                  <button key={a} onClick={() => { setSelected(a); setIsCustom(false); setCustom(""); }}
                    className={sel ? "amount-btn amount-btn--active" : "amount-btn"}
                  >${a}</button>
                );
              })}
            </div>
            <div className={isCustom ? "custom-amount custom-amount--active" : "custom-amount"}>
              <span className="custom-amount__symbol">$</span>
              <input
                className="field__input"
                style={{ borderBottom: "none" }}
                placeholder="Custom amount"
                value={custom}
                type="number"
                min="1"
                onChange={e => { setCustom(e.target.value); setIsCustom(true); }}
                onFocus={() => setIsCustom(true)}
              />
            </div>

            <p className="label-xs color-outline" style={{ marginBottom: 24 }}>Your Information</p>
            <div className="form-fields" style={{ marginBottom: 40 }}>
              <input className="field__input" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
              <input className="field__input" placeholder="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <textarea className="field__input field__textarea" placeholder="Any comments (optional)" value={note} onChange={e => setNote(e.target.value)} rows={3} />
            </div>

            <button
              className="submit-btn"
              onMouseEnter={e => e.currentTarget.style.opacity = ".88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              Donate {displayAmt} →
            </button>
            <p className="form-note" style={{ marginTop: 14 }}>Secure payment processing coming soon. Thank you for your patience.</p>
          </div>

          {/* Right: why give */}
          <div style={{ position: "sticky", top: 120 }}>
            <div className="why-give-card">
              <span style={{ fontSize: 32, display: "block", marginBottom: 20 }}><img src="/favicon.ico" alt="" /></span>
              <h3 className="serif-italic" style={{ fontSize: 26, marginBottom: 16, lineHeight: 1.2 }}>Why Your Gift Matters</h3>
              <p className="body-md color-on-surface-var" style={{ fontSize: 14, marginBottom: 24 }}>
                Spirit of Fire is an independent theatre company. We rely on ticket sales, goodwill offerings, and the generous patronage of those who believe in what we are doing.
              </p>
              <p className="body-md color-on-surface-var" style={{ fontSize: 14 }}>
                Your support directly funds set design, production costs, and the development of new original works — including world premieres like <em className="color-primary">Missing the Rain</em>.
              </p>
            </div>

            {TIERS.map((tier, i) => (
              <div key={i} className="tier-row" style={{ borderBottom: i < 2 ? "1px solid rgba(89,66,56,0.15)" : "none" }}>
                <div className="tier-row__dot" />
                <div>
                  <p className="tier-row__label">
                    {tier.label} <span className="tier-row__range">{tier.range}</span>
                  </p>
                  <p className="tier-row__desc">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function QuoteStrip() {
  return (
    <section className="section-pad bg-surface-lowest" style={{ padding: "96px 48px", textAlign: "center" }}>
      <div className="color-primary-container" style={{ fontSize: 28, marginBottom: 24 }}>✦</div>
      <blockquote className="serif-italic color-on-surface" style={{ fontSize: 28, lineHeight: 1.5, maxWidth: 720, margin: "0 auto 28px" }}>
        You have made us for yourself, O Lord, and our heart is restless until it rests in you.
      </blockquote>
      <cite className="label-xs color-primary" style={{ letterSpacing: ".4em", fontStyle: "normal" }}>Spirit of Fire Theatre Company</cite>
    </section>
  );
}

function SupportProdCard({ title, dates, badges, onBook, image }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <h3 className="display-sm" style={{ color: hov ? "var(--primary)" : "var(--on-surface)", transition: "color .3s", marginBottom: 8 }}>{title}</h3>
      <p className="label-xs color-outline" style={{ marginBottom: 16 }}>{dates}</p>
      <button
        onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-container)"; e.currentTarget.style.color = "var(--on-primary-container)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--surface-highest)"; e.currentTarget.style.color = "var(--on-surface)"; }}
        onClick={onBook}
        style={{ width: "100%", padding: 16, marginBottom: 10, fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase", background: "var(--surface-highest)", border: "1px solid rgba(89,66,56,0.3)", color: "var(--on-surface)", transition: "all .5s", cursor: "pointer", fontFamily: "var(--font-sans)" }}
      >Reserve Ticket</button>
      <div className="show-card_image-wrap">
        <div
          className="show-card_image"
          style={{
            backgroundImage: `url(${image})`,
            transform: hov ? "scale(1.05)" : "scale(1)",
            filter: hov ? "grayscale(0%)" : "grayscale(100%)",
            cursor: hov ? "pointer": "auto"
          }}
        >
          <div className="show-card_image-overlay" />
        </div>
        <div className="show-card_gradient" />
        <div className="show-card_badge-wrap">
          <span
            className="show-card_badge"
            style={{ background: badges[0].color, color: badges[0].textcolor, display: "inline-block", width: "fit-content" }}
          >{badges[0].label}</span>        </div>
      </div>
    </div>
  );
}

function SupportPerformances() {
  const navigate = useNavigate();
  const prods = productions;
  return (
    <section className="section-pad bg-surface-low" style={{ padding: "96px 48px" }}>
      <div className="container" style={{ padding: 0 }}>
        <div className="flex-row" style={{ alignItems: "center", gap: 24 }}>
          <div className="divider-flame" style={{ height: 1, width: 48 }} />
          <h2 className="serif label-upper color-primary" style={{ fontSize: 13, letterSpacing: ".4em" }}>Support Our Shows</h2>
        </div>
        <button
          onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-container)"; e.currentTarget.style.color = "var(--on-primary-container)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--surface-highest)"; e.currentTarget.style.color = "var(--on-surface)"; }}
          onClick={() => navigate("/portfolio")}
          style={{ width: "20%", padding: 16, margin: "30px 60px", fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase", background: "var(--surface-highest)", border: "1px solid rgba(89,66,56,0.3)", color: "var(--on-surface)", transition: "all .5s", cursor: "pointer", fontFamily: "var(--font-sans)" }}
        >Purchase Scripts</button>
        <div className="flex-row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, borderBottom: "1px solid rgba(89,66,56,0.2)", paddingBottom: 28 }}>
          <div>
            <h2 className="serif" style={{ fontSize: 36, marginBottom: 8 }}>Current Projects</h2>
            <p className="label-xs color-outline">Active Productions • 2026</p>
          </div>
          <div className="flex-row" style={{ gap: 16 }}>
            <button className="btn-icon">←</button>
            <button className="btn-icon">→</button>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 48 }}>
          {prods.map(p => <SupportProdCard key={p.title} {...p} onBook={() => navigate("/tickets")} />)}
        </div>
      </div>
    </section>
  );
}

export default function SupportPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main style={{ paddingTop: 80 }}>
      <SupportHero />
      <DonationForm />
      <SupportPerformances />
      <QuoteStrip />
      <Footer />
    </main>
  );
}