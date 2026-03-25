import Footer from "../Main/Footer";
import { useState, useEffect } from "react";
import "../Style/global.css";
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg";
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg";
import missingRainImage from "../Assets/Covers/MissingTheRain.webp";

function ProductionsHero() {
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 48px 96px" }}>
      <div className="grid-2">
        <div>
          <div className="flex-row" style={{ alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ height: 1, width: 48, background: "var(--primary-container)" }} />
            <span className="label-xs color-primary" style={{ letterSpacing: ".3em" }}>Current Season</span>
          </div>
          <h1 className="serif-italic" style={{ fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", marginBottom: 32 }}>
            Mother <span className="color-primary-container">Rabbit</span>
          </h1>
          <p className="body-md color-on-surface-var" style={{ maxWidth: 500, fontSize: 17, marginBottom: 40 }}>
            Peter Kotski's mother is sick. His father passed away years ago. His eccentric brothers are eccentric, and estranged. A family crisis brings them together--for better or worse--and their reunion begets all sorts of hijinks.
          </p>
          <button className="btn-ghost">Read More</button>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "3/4",
            backgroundImage: `url(${motherRabbitImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
            <div style={{ height: "100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity: "40%" }} />
          </div>
          <div className="btn-primary" style={{ position: "absolute", bottom: -24, left: -24, padding: "10px 30px", fontSize: 22 }}>
            Original Comedy
          </div>
        </div>
      </div>
    </section>
  );
}

function ProdCard({ title, dates, badge, badgeColor, badgeText, onBook, image }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div className="show-card_image-wrap">
        <div
          className="show-card_image"
          style={{
            backgroundImage: `url(${image})`,
            transform: hov ? "scale(1.05)" : "scale(1)",
            filter: hov ? "grayscale(0%)" : "grayscale(100%)",
          }}
        >
          <div className="show-card_image-overlay" />
        </div>
        <div className="show-card_gradient" />
        <div className="show-card_badge-wrap">
          <span className="show-card_badge" style={{ background: badgeColor, color: badgeText }}>{badge}</span>
        </div>
      </div>
      <h3 className="show-card_title" style={{ color: hov ? "var(--primary)" : "var(--on-surface)" }}>{title}</h3>
      <p className="label-xs color-outline" style={{ marginBottom: 16 }}>{dates}</p>
      <button
        onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-container)"; e.currentTarget.style.color = "var(--on-primary-container)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--surface-highest)"; e.currentTarget.style.color = "var(--on-surface)"; }}
        onClick={onBook}
        style={{ width: "100%", padding: 16, fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase", background: "var(--surface-highest)", border: "1px solid rgba(89,66,56,0.3)", color: "var(--on-surface)", transition: "all .5s", cursor: "pointer" }}
      >
        Reserve Ticket
      </button>
    </div>
  );
}

function Performances({ setPage }) {
  const prods = [
    { title: "Mother Rabbit",    dates: "JUN 01 — JUL 01", badge: "Encore Performance", badgeColor: "#a37cea", badgeText: "#38017a",  image: motherRabbitImage },
    { title: "Animal Crackers",  dates: "TBD",              badge: "Adaptation",         badgeColor: "#201f1f", badgeText: "#ffb59a",  image: animalCrackersImage },
    { title: "Missing the Rain", dates: "TBD",              badge: "World Premiere",     badgeColor: "#f95e14", badgeText: "#4f1700",  image: missingRainImage },
  ];
  return (
    <section className="section-pad bg-surface-low" style={{ padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="flex-row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, borderBottom: "1px solid rgba(89,66,56,0.2)", paddingBottom: 28 }}>
          <div>
            <h2 className="serif" style={{ fontSize: 36, marginBottom: 8 }}>Performances</h2>
            <p className="label-xs color-outline">Active Productions • 2026</p>
          </div>
          <div className="flex-row" style={{ gap: 16 }}>
            <button className="btn-icon">←</button>
            <button className="btn-icon">→</button>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 48 }}>
          {prods.map(p => <ProdCard key={p.title} {...p} onBook={() => setPage("tickets")} />)}
        </div>
      </div>
    </section>
  );
}

function MainQuote() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <section className="section-pad-xl" style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
      <div className="color-primary-container" style={{ fontSize: 40, marginBottom: 32 }}>✦</div>
      <blockquote className="serif-italic color-on-surface" style={{ fontSize: 34, lineHeight: 1.4, marginBottom: 40 }}>
        All art should have no other end and aim than the glory of God and the soul's refreshment; where this is not remembered there is no real art but only a devilish hubbub. Soli Deo Gloria.
      </blockquote>
      <cite className="label-xs color-primary" style={{ letterSpacing: ".4em", fontStyle: "normal" }}>Johann Sebastian Bach</cite>
    </section>
  );
}

export default function ProductionsPage({ setPage }) {
  return (
    <main className="pat" style={{ minHeight: "100vh" }}>
      <ProductionsHero />
      <Performances setPage={setPage} />
      <MainQuote />
      <Footer />
    </main>
  );
}