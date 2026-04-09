import Footer from "../Main/Footer";
import ShowModal from "../Modals/ShowModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/index.css";
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg";
import productions from "../Data/CurrentShows"

function ProductionsHero() {
  const navigate = useNavigate();
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 48px 96px" }}>
      <div className="grid-2">
        <div>
          <div className="flex-row" style={{ alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ height: 1, width: 48, background: "var(--primary-container)" }} />
            <span className="label-xs color-primary" style={{ letterSpacing: ".3em" }}>Thursday June 11th - Sunday June 14th</span>
          </div>
          <h1 className="serif-italic" style={{ fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", marginBottom: 32 }}>
            Mother <span className="color-primary-container">Rabbit</span>
          </h1>
          <p className="body-md color-on-surface-var" style={{ maxWidth: 500, fontSize: 17, marginBottom: 40 }}>
            Peter Kotski's mother is sick. His father passed away years ago. His eccentric brothers are eccentric, and estranged. A family crisis brings them together--for better or worse--and their reunion begets all sorts of hijinks.
          </p>
          <button className="btn-ghost" onClick={() => navigate("/motherrabbit")} style={{ marginRight: 20 }}>Read More</button>
          <a
            href={"https://events.ticketleap.com/tickets/spirit-of-fire/mother-rabbit"}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ textDecoration: "none", display: "inline-flex", justifyContent: "center" }}
          >Get Tickets</a>
          {/* <button className="btn-primary" onClick={() => navigate("/tickets", { state: productions[0] })}>Tickets</button> */}
        </div>
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "3/4",
            backgroundImage: `url(${motherRabbitImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            maxHeight: "70vh"
          }}>
            <div className="hero_top_tag serif">
              Running only 6/11-6/14 in Hudson!
            </div>
            <div style={{ height: "100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity: "40%" }} />
          </div>
          <div className="hero_tag serif">
            Original Comedy
          </div>
        </div>
      </div>
    </section>
  );
}

function ProdCard({ title, dates, badges, onBook, image, setModalShow, production }) {
  const [hov, setHov] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Image wrap */}
      <div
        className="show-card_image-wrap"
        style={{ cursor: "pointer", marginBottom: 0 }}
        onClick={() => setModalShow(production)}
      >
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
          <span
            className="show-card_badge"
            style={{ background: badges[0].color, color: badges[0].textcolor, display: "inline-block", width: "fit-content" }}
          >{badges[0].label}</span>
        </div>

        {/* Mobile overlay — only visible ≤700px via CSS */}
        <div className="show-card_mobile-overlay" onClick={e => e.stopPropagation()}>
          <span className="show-card_mobile-overlay__title">{title}</span>
          <span className="show-card_mobile-overlay__dates">{dates}</span>
          <a
            href={production.link.length > 0 ? production.link : "https://events.ticketleap.com/events/spirit-of-fire"}
            target="_blank"
            id="btn-constructor"
            rel="noreferrer"
            className="show-card_mobile-overlay__btn"
            style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}
          >Reserve Tickets</a>
          {/* <button
            className="show-card_mobile-overlay__btn"
            onClick={e => { e.stopPropagation(); onBook(production); }}
          >
            Reserve Tickets
          </button> */}
        </div>
      </div>

      {/* Desktop text below image */}
      <div className="prod-card-desktop-meta" style={{ marginTop: 24 }}>
        <h3 className="show-card_title" style={{ color: hov ? "var(--primary)" : "var(--on-surface)" }}>{title}</h3>
        <p className="label-xs color-outline" style={{ marginBottom: 16 }}>{dates}</p>
        <a
          href={production.link.length > 0 ? production.link : "https://events.ticketleap.com/events/spirit-of-fire"}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-container)"; e.currentTarget.style.color = "var(--on-primary-container)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--surface-highest)"; e.currentTarget.style.color = "var(--on-surface)"; }}
          target="_blank"
          id="btn-constructor"
          rel="noreferrer"
          className="reserve-ticket-button"
          style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}
        >Reserve Tickets</a>
        {/* <button
          onMouseEnter={e => { e.currentTarget.style.background = "var(--primary-container)"; e.currentTarget.style.color = "var(--on-primary-container)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--surface-highest)"; e.currentTarget.style.color = "var(--on-surface)"; }}
          onClick={() => onBook(production)}
          className="reserve-ticket-button"
        >
          Reserve Tickets
        </button> */}
      </div>
    </div>
  );
}

function Performances({ setModalShow }) {
  const navigate = useNavigate();
  const prods = productions;

  return (
    <section className="section-pad bg-surface-low" style={{ padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="flex-row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, borderBottom: "1px solid rgba(89,66,56,0.2)", paddingBottom: 28 }}>
          <div>
            <h2 className="serif" style={{ fontSize: 36, marginBottom: 8 }}>Performances</h2>
            <p className="label-xs color-outline">Active Productions • 2026</p>
          </div>
          {productions.length > 3 && (
            <div className="flex-row" style={{ gap: 16 }}>
              <button className="btn-icon">←</button>
              <button className="btn-icon">→</button>
            </div>
          )}
        </div>
        <div className="grid-3" style={{ gap: 48 }}>
          {prods.map(p => (
            <ProdCard
              key={p.title}
              {...p}
              onBook={() => navigate("/tickets", { state: p })}
              setModalShow={setModalShow}
              production={p}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MainQuote() {
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

function MainCTA() {
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
          <button className="btn-ghost-primary" onClick={() => navigate("/about-us")}>Our Mission</button>
        </div>
      </div>
    </section>
  );
}

export default function ProductionsPage() {
  const [modalShow, setModalShow] = useState(null);

  return (
    <main className="pat" style={{ minHeight: "100vh" }}>
      <ProductionsHero />
      <Performances setModalShow={setModalShow} />
      <MainQuote />
      {modalShow && (
        <ShowModal show={modalShow} onClose={() => setModalShow(null)} />
      )}
      <MainCTA />
      <Footer />
    </main>
  );
}