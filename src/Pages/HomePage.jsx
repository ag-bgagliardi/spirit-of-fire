import Footer from "../Main/Footer";
import ShowModal from "../Modals/ShowModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/index.css";
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg";
import productions from "../Data/CurrentShows"

function HomeHero() {
  const navigate = useNavigate();
  return (
    <section className="team-mission-hero">
      <div className="team-mission-hero__bg image-overlay">
        <div className="dove-background" />
      </div>
      <div className="team-mission-hero__fade" />
      <div className="team-mission-hero__inner">
        <p className="team-mission-hero__eyebrow">Spirit of Fire · Est. 2025</p>
        <h1 className="team-mission-hero__title display-xl">
          Spirit of <span className="color-primary-container">Fire</span> Theatre
        </h1>
        <div className="team-mission-hero__statement">
          <div className="team-mission-hero__statement-ornament">
            <div className="team-mission-hero__ornament-line" />
            <span className="team-mission-hero__ornament-glyph">✦</span>
            <div className="team-mission-hero__ornament-line" />
          </div>
          <button className="btn-primary" onClick={() => navigate("/productions", { state: productions[0] })}>Productions</button>
          <div className="team-mission-hero__statement-ornament">
            <div className="team-mission-hero__ornament-line" />
            <span className="team-mission-hero__ornament-glyph">✦</span>
            <div className="team-mission-hero__ornament-line" />
          </div>
        </div>
        <div className="team-mission-hero__scroll-cue">
          <div className="team-mission-hero__scroll-line" />
          <span>Soli Deo Gloria</span>
        </div>
      </div>
    </section>
  );
}

function ShowCard({ title, dates, badges, image, onBook, setModalShow, production }) {
  const navigate = useNavigate();
  return (
    <div className="show-card">
      <div
        className="show-card_image-wrap"
        style={{ cursor: "pointer" }}
        onClick={() => setModalShow(production)}
      >
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
            style={{ background: badges[0].color, color: badges[0].textcolor, display: "inline-block", width: "fit-content" }}
          >{badges[0].label}</span>
        </div>

        {/* Mobile overlay — only visible ≤700px via CSS */}
        <div className="show-card_mobile-overlay">
          <span className="show-card_mobile-overlay__title">{title}</span>
          <span className="show-card_mobile-overlay__dates">{dates}</span>
          {
            production.link.length > 0 ?
              <a
                href={production.link}
                target="_blank"
                id="btn-constructor"
                rel="noreferrer"
                className="show-card_mobile-overlay__btn"
                style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}
              >Reserve Tickets</a>
              : <button className="btn-primary-disabled" disabled="true">Tickets Coming Soon</button>
          }
        </div>
      </div>

      {/* Desktop-only text below image */}
      <h3 className="show-card_title">{title}</h3>
      <p className="label-xs color-outline" style={{ marginBottom: 16 }}>{dates}</p>
      {
        production.link.length > 0 ?
          <a
            href={production.link}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-container)"; e.currentTarget.style.color = "var(--on-primary-container)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--surface-highest)"; e.currentTarget.style.color = "var(--on-surface)"; }}
            target="_blank"
            id="btn-constructor"
            rel="noreferrer"
            className="reserve-ticket-button"
            style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}
          >Reserve Tickets</a>
          : <button className="home-ticket-button btn-primary-disabled" style={{width:"100%"}} disabled="true">Tickets Coming Soon</button>
      }
    </div>
  );
}

function HeroSection() {
  const navigate = useNavigate();
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
              <button className="btn-primary" onClick={() => navigate("/productions")}>View Season</button>
              <button className="btn-ghost" onClick={() => navigate("/mission")}>Our Mission</button>
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

function SpiritSection() {
  const navigate = useNavigate();
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
          <button className="btn-text" onClick={() => navigate("/about-us")}>Learn More →</button>
        </div>
        <div>
          <div className="home-image-icon-container">
            <img
              style={{ width: "100%", background: "linear-gradient(180deg,#1a0a00,#0d0500)", padding: 40, fontSize: 64 }}
              src="../logo256.png" alt="Spirit of Fire"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function NextOnStageSection({ setModalShow }) {
  const navigate = useNavigate();
  const shows = productions;
  return (
    <section className="section-pad bg-surface">
      <div className="container">
        <div className="flex-row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <span className="label-upper color-primary">Upcoming Performances</span>
            <h2 className="display-lg" style={{ marginTop: 12 }}>Next on <em>Stage</em></h2>
          </div>
          {productions.length > 3 && (
            <div className="flex-row" style={{ gap: 16 }}>
              <button className="btn-icon">←</button>
              <button className="btn-icon">→</button>
            </div>
          )}
        </div>
        <div className="grid-3">
          {shows.map(s => (
            <ShowCard
              key={s.title}
              {...s}
              onBook={() => navigate("/tickets", { state: s })}
              setModalShow={setModalShow}
              production={s}
            />
          ))}
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

function HomeCTA() {
  const navigate = useNavigate();
  return (
    <section className="section-pad bg-surface-lowest" style={{ padding: "120px 48px", borderTop: "1px solid rgba(89,66,56,0.15)", textAlign: "center", position: "relative" }}>
      <div className="cta-glow" style={{ pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
        <h2 className="serif-italic" style={{ fontSize: 44, marginBottom: 20, lineHeight: 1.2 }}>
          Feel the <span className="color-primary-container">calling?</span>
        </h2>
        <p className="body-md color-on-surface-var" style={{ marginBottom: 48 }}>
          Spirit of Fire is always looking for passionate artists who share our devotion to excellence, craft, and the glory of God.
        </p>
        <div className="flex-row" style={{ justifyContent: "center", gap: 20 }}>
          <button className="btn-primary" onClick={() => navigate("/participate")}>Get Involved</button>
          <a
            href={"https://events.ticketleap.com/events/spirit-of-fire"}
            target="_blank"
            id="btn-constructor"
            rel="noreferrer"
            className="btn-ghost-primary"
            style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}
          >Tickets</a>
          <button className="btn-ghost" onClick={() => navigate("/about-us")}>Our Mission</button>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const [modalShow, setModalShow] = useState(null);
  const galleryImages = [];
  return (
    <main>
      <HomeHero />
      <SpiritSection />
      <NextOnStageSection setModalShow={setModalShow} />
      {modalShow && (
        <ShowModal show={modalShow} onClose={() => setModalShow(null)} />
      )}
      {galleryImages.length > 0 && <GallerySection />}
      <HomeCTA />
      <Footer />
    </main>
  );
}