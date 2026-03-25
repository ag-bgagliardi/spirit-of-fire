import GlobalStyles from "../Main/GlobalStyles"
import useColors from "../Main/GlobalColors"
import Footer from "../Main/Footer"
import { useState, useEffect } from "react";
import bigBlueLogo from "../Assets/Logos/bbt.webp"

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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
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
      <div style={{ background: c.surfaceLight }}>
        <div style={{
          backgroundImage: `url(${bigBlueLogo})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          gap: 16, position: "relative",
          filter: hov ? "grayscale(0)" : "grayscale(0.6)",
          transition: "filter .5s", height: "100%"
        }}>
          <div style={{
            fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em",
            color: hov ? c.primaryContainer : c.outline, transition: "color .4s", padding: "10px", textAlign: "center",
            height: "100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity: "30%"
          }}>Affiliate</div>
        </div>
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
          Big Blue Theatre's mission is to support the work of artists through the creation of new theatrical work. This includes plays, concerts, improv, and any other form of theatrical entertainment.
        </p>
        <div>
          <a
            style={{ color: c.primaryContainer, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.color = c.primary}
            onMouseLeave={e => e.currentTarget.style.color = c.primaryContainer}
            href="https://www.bigbluetheatre.org/"
          >
            Visit Big Blue Theatre →
          </a>
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

export default function AffiliatesPage() {
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