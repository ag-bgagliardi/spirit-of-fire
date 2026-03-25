import Footer from "../Main/Footer";
import { useState, useEffect } from "react";
import bigBlueLogo from "../Assets/Logos/bbt.webp";
function AffiliatesHero() {
  return (
    <section className="affiliates-hero" style={{ position: "relative", height: 480, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .18, backgroundImage: "radial-gradient(ellipse at 65% 40%,rgba(249,94,20,0.6) 0%,transparent 60%)" }} />
      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 860 }}>
        <span className="label-xs color-primary-container" style={{ letterSpacing: ".4em", display: "block", marginBottom: 20 }}>
          Community &amp; Collaboration
        </span>
        <h1 className="serif-italic color-on-surface" style={{ fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", marginBottom: 24 }}>
          Affiliates <span className="color-primary-container">&amp;</span><br />Partners
        </h1>
        <p className="body-md color-on-surface-var" style={{ fontSize: 17, maxWidth: 520 }}>
          We are grateful to work alongside organizations that share our love of theatre and our commitment to artistic excellence.
        </p>
      </div>
    </section>
  );
}

function PartnerCard() {
  const [hov, setHov] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div
      className="partner-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? "rgba(249,94,20,0.3)" : "rgba(89,66,56,0.2)"}`,
        background: hov ? "var(--surface-high)" : "var(--surface-low)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: hov ? "radial-gradient(ellipse at left,rgba(249,94,20,0.05),transparent 60%)" : "none", transition: "all .5s", pointerEvents: "none" }} />

      {/* Logo panel */}
      <div className="partner-card__logo" style={{ background: "var(--surface-light)" }}>
        <div style={{
          backgroundImage: `url(${bigBlueLogo})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 16, position: "relative",
          filter: hov ? "grayscale(0)" : "grayscale(0.6)",
          transition: "filter .5s", height: "100%",
        }}>
          <div style={{
            fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em",
            color: hov ? "var(--primary-container)" : "var(--outline)", transition: "color .4s", padding: "10px", textAlign: "center",
            height: "100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity: "30%",
          }}>Affiliate</div>
        </div>
      </div>

      {/* Info panel */}
      <div className="partner-card__info flex-col" style={{ padding: "44px 48px", justifyContent: "center", gap: 20 }}>
        <div>
          <span className="label-tiny color-primary" style={{ letterSpacing: ".3em", display: "block", marginBottom: 10 }}>✦ Featured Partner</span>
          <h2 className="serif" style={{ fontSize: 36, lineHeight: 1.1, color: hov ? "var(--primary)" : "var(--on-surface)", transition: "color .3s", marginBottom: 6 }}>
            Big Blue Theatre
          </h2>
          <span className="label-xs color-outline">Theatre Company · Chicago, IL</span>
        </div>
        <div style={{ height: 1, width: 48, background: "var(--outline-variant)" }} />
        <p className="color-on-surface-var" style={{ lineHeight: 1.8, fontSize: 14, fontWeight: 300, maxWidth: 480 }}>
          Big Blue Theatre's mission is to support the work of artists through the creation of new theatrical work. This includes plays, concerts, improv, and any other form of theatrical entertainment.
        </p>
        <a
          className="label-upper"
          style={{ color: "var(--primary-container)", cursor: "pointer" }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--primary-container)"}
          href="https://www.bigbluetheatre.org/"
        >
          Visit Big Blue Theatre →
        </a>
      </div>
    </div>
  );
}

function PartnersSection() {
  return (
    <section className="pat section-pad bg-surface-low">
      <div className="container">
        <div className="flex-row" style={{ alignItems: "center", gap: 24, marginBottom: 64 }}>
          <div style={{ height: 1, width: 48, background: "var(--primary-container)" }} />
          <h2 className="serif label-upper color-primary" style={{ fontSize: 13, letterSpacing: ".4em" }}>Our Partners</h2>
        </div>
        <PartnerCard />
        <div className="partner-placeholders" style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[0, 1].map(i => (
            <div key={i} className="flex-col bg-surface-lowest partner-placeholder" style={{
              border: "1px dashed rgba(89,66,56,0.3)",
              alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center", padding:"30px 0px"
            }}>
              <span style={{ fontSize: 32, opacity: .3 }}>✦</span>
              <p className="serif-italic color-outline" style={{ fontSize: 18 }}>Partner Forthcoming</p>
              <p className="label-upper" style={{ color: "rgba(168,138,126,0.4)", padding:10 }}>More collaborators to come</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  return (
    <section className="section-pad bg-surface-lowest" style={{ padding: "96px 48px", textAlign: "center", position: "relative" }}>
      <div className="cta-glow" style={{ pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 580, margin: "0 auto" }}>
        <span className="color-primary-container" style={{ fontSize: 28, display: "block", marginBottom: 24 }}>✦</span>
        <h2 className="serif-italic" style={{ fontSize: 40, marginBottom: 20, lineHeight: 1.2 }}>
          Interested in <span className="color-primary-container">partnering</span> with us?
        </h2>
        <p className="body-md color-on-surface-var" style={{ fontSize: 15, marginBottom: 40 }}>
          Theatre dedicated to greatness. A place where passion and hardwork are the tools to uplift the soul.
        </p>
        <button
          className="btn-primary"
          onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          Get in Touch →
        </button>
      </div>
    </section>
  );
}

export default function AffiliatesPage() {
  return (
    <main style={{ paddingTop: 80 }}>
      <AffiliatesHero />
      <PartnersSection />
      <ContactStrip />
      <Footer />
    </main>
  );
}