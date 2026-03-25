import Footer from "../Main/Footer";
import { useState, useEffect } from "react";
import "../Style/global.css";
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg";
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg";
import missingRainImage from "../Assets/Covers/MissingTheRain.webp";

function ShowCard({ title, dates, badge, badgeColor, badgeText, image, onBook }) {
  return (
    <div className="show-card">
      <div className="show-card_image-wrap">
        <div
          className="show-card_image"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="show-card_image-overlay" />
        </div>
        <div className="show-card_gradient" />
        <div className="show-card_badge-wrap">
          <span
            className="show-card_badge"
            style={{ background: badgeColor, color: badgeText }}
          >
            {badge}
          </span>
        </div>
      </div>
      <h3 className="show-card_title">{title}</h3>
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

function HeroSection({ setPage }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <section className="hero">
      <div className="hero_bg-base" />
      <div className="hero_bg-glow" />
      <div className="hero_bg-fade" />
      <div className="hero_content container">
        <div className="grid-2">
          <div className="flex-col" style={{ gap: 32 }}>
            <h1 className="display-xl color-on-surface">
              Soli <span className="color-primary-container">Deo</span><br />Gloria
            </h1>
            <p className="body-lg color-on-surface-var" style={{ maxWidth: 420 }}>
              To the glory of God alone.
            </p>
            <div className="flex-row" style={{ gap: 20 }}>
              <button className="btn-primary" onClick={() => setPage("productions")}>View Season</button>
              <button className="btn-ghost" onClick={() => setPage("mission")}>Our Mission</button>
            </div>
          </div>
          <div className="flex-row" style={{ justifyContent: "flex-end" }}>
            <div className="hero_card">
              <div className="hero_card-border" />
              <div className="hero_card-border-outer" />
              <div
                className="hero_card-image"
                style={{ backgroundImage: `url(${motherRabbitImage})` }}
              >
                <div className="hero_card-image-overlay" />
              </div>
              <div className="hero_card-label">
                <span className="hero_card-label-title">Returning Soon</span>
                <span className="hero_card-label-sub">Mother Rabbit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpiritSection({ setPage }) {
  return (
    <section className="pat section-pad bg-surface-low">
      <div className="container grid-5-7">
        <div className="flex-col" style={{ gap: 24 }}>
          <h2 className="display-md">
            Welcome to<br />the <span className="color-primary-container">Spirit of Fire</span>
          </h2>
          <div className="divider-flame" />
          <p className="body-md color-on-surface-var">
            At Spirit of Fire, we tell stories that encourage, inspire, and challenge people to see all of life and experience–past, present, and future–by the light of Jesus Christ.
          </p>
          <p className="body-md color-on-surface-var">
            Fire represents the ferocious dedication and passion in any project we undertake. It represents the indwelling Holy Spirit that guides and inspires, and it represents the grace of our Lord we tirelessly seek. Thus, we desire always to have the Spirit, or the essence of this Fire.
          </p>
          <button className="btn-text" onClick={() => setPage("mission")}>Learn More →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ paddingTop: 48 }}>
            <div
              style={{ width: "100%", height: 360, background: "linear-gradient(180deg,#1a0a00,#0d0500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, filter: "grayscale(1)", transition: "filter .7s" }}
              onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
              onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}
            >📚</div>
          </div>
          <div>
            <div style={{ width: "100%", height: 460, background: "linear-gradient(180deg,#0d0500,#1a0a00)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>
              <img src="../favicon.ico" alt="Spirit of Fire" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NextOnStageSection({ setPage }) {
  const shows = [
    { title: "Mother Rabbit",   dates: "JUN 01 — JUL 01", badge: "Encore Performance", badgeColor: "#a37cea", badgeText: "#38017a",  image: motherRabbitImage },
    { title: "Animal Crackers", dates: "TBD",             badge: "Adaptation",         badgeColor: "#201f1f", badgeText: "#ffb59a",  image: animalCrackersImage },
    { title: "Missing the Rain",dates: "TBD",             badge: "World Premiere",     badgeColor: "#f95e14", badgeText: "#4f1700",  image: missingRainImage },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="container">
        <div className="flex-row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <span className="label-upper color-primary">Upcoming Performances</span>
            <h2 className="display-lg" style={{ marginTop: 12 }}>Next on <em>Stage</em></h2>
          </div>
          <div className="flex-row" style={{ gap: 12 }}>
            <button className="btn-icon">←</button>
            <button className="btn-icon">→</button>
          </div>
        </div>
        <div className="grid-3">
          {shows.map(s => <ShowCard onBook={() => setPage("tickets")} key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const items = [
    { col: "1/3", row: "1/3", label: "Picture Placeholder", grad: "linear-gradient(135deg,#1a0800,#0a0300)" },
    { col: "3/4", row: "1/2", label: "Picture Placeholder", grad: "linear-gradient(135deg,#0a0800,#050200)" },
    { col: "4/5", row: "1/3", label: "Picture Placeholder", grad: "linear-gradient(135deg,#0a0d1a,#050508)" },
    { col: "3/4", row: "2/3", label: "Picture Placeholder", grad: "linear-gradient(135deg,#1a0a00,#080300)" },
  ];
  return (
    <section className="section-pad bg-surface-lowest" style={{ overflow: "hidden" }}>
      <div className="container" style={{ textAlign: "center", marginBottom: 64 }}>
        <h2 className="display-md">Uplifting the <span className="color-primary">Soul</span></h2>
        <p className="label-xs color-outline" style={{ marginTop: 12, lineHeight: "2em" }}>Considering it an honour to employ</p>
        <p className="label-xs color-outline" style={{ lineHeight: "2em" }}>and develop the gifts received from God</p>
      </div>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px" }}>
        <div className="grid-gallery">
          {items.map((g, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{ gridColumn: g.col, gridRow: g.row, background: g.grad }}
            >
              <div className="gallery-item_label">
                <p className="gallery-item_label-text">{g.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ setPage }) {
  return (
    <section className="section-pad-xl bg-surface flex-col flex-center" style={{ textAlign: "center", position: "relative" }}>
      <div className="cta-glow" />
      <h2 className="display-lg serif-italic" style={{ maxWidth: 700, marginBottom: 48, lineHeight: 1.15, position: "relative" }}>
        Keep the <span className="color-primary-container">Flame</span> alive
      </h2>
      <div className="flex-row" style={{ gap: 24, position: "relative" }}>
        <button className="btn-solid" onClick={() => setPage("support")}>Become a Patron</button>
        <button className="btn-outline" onClick={() => setPage("participate")}>Get Involved</button>
      </div>
    </section>
  );
}

export default function HomePage({ setPage }) {
  return (
    <main>
      <HeroSection setPage={setPage} />
      <SpiritSection setPage={setPage} />
      <NextOnStageSection setPage={setPage}  />
      <GallerySection />
      <CTASection setPage={setPage} />
      <Footer />
    </main>
  );
}