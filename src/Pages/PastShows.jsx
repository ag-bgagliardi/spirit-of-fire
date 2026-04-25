import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Main/Footer";
import pastProductions from "../Data/PastShows";

// ── Past show modal ───────────────────────────────────────────────────────────

function PastShowModal({ show, onClose }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const photos = Array.isArray(show.images) ? show.images.filter(Boolean) : [];

  // Close on backdrop click
  function handleBackdrop(e) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdrop}>
      <div
        className="modal"
        style={{
          gridTemplateColumns: "300px 1fr",
          maxWidth: 960,
          maxHeight: "88vh",
        }}
      >
        {/* Close */}
        <button className="modal__close" onClick={onClose}>✕</button>

        {/* Left — cover image */}
        <div className="modal__left">
          <div
            className="modal__cover"
            style={{ backgroundImage: `url(${show.image})`, minHeight: 360 }}
          >
            <div className="modal__cover-fade" />
          </div>

          {/* Badges */}
          <div className="modal__badges">
            {show.badges.map((b, i) => (
              <span
                key={i}
                className="show-card_badge"
                style={{
                  background: b.color,
                  color: b.textcolor,
                  display: "inline-block",
                  width: "fit-content",
                }}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right — details */}
        <div className="modal__right">
          <div className="modal__header">
            <p className="label-xs color-primary" style={{ letterSpacing: ".35em", marginBottom: 10 }}>
              Past Production
            </p>
            <h2 className="modal__title serif-italic color-on-surface">{show.title}</h2>
            <p className="label-xs color-outline" style={{ letterSpacing: ".25em", marginTop: 8 }}>
              {show.dates}
            </p>
          </div>

          {/* Description */}
          <div className="modal__description">
            <p className="body-md color-on-surface-var" style={{ lineHeight: 1.9, whiteSpace: "pre-line" }}>
              {show.description}
            </p>
          </div>

          {/* Cast */}
          {show.cast && show.cast.length > 0 && (
            <div>
              <p className="label-tiny color-primary-container" style={{ letterSpacing: ".3em", marginBottom: 16 }}>
                The Cast
              </p>
              <div className="modal-cast-grid">
                {show.cast.map((person, i) => (
                  <div key={i} className="modal-cast-card">
                    <div
                      className="modal-cast-card__image"
                      style={{
                        backgroundImage: person.image ? `url(${person.image})` : "none",
                        filter: "grayscale(20%)",
                      }}
                    >
                      {!person.image && (
                        <span style={{ fontSize: 24, opacity: 0.3 }}>🎭</span>
                      )}
                      <div className="modal-cast-card__overlay" />
                    </div>
                    <div className="modal-cast-card__body">
                      <span className="modal-cast-card__name color-on-surface" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                        {person.name}
                      </span>
                      {person.character && (
                        <span className="label-xs color-outline">{person.character}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Production photos */}
          {photos.length > 0 && (
            <div>
              <p className="label-tiny color-primary-container" style={{ letterSpacing: ".3em", marginBottom: 16 }}>
                Production Photos
              </p>
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    backgroundImage: `url(${photos[photoIdx]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {photos.length > 1 && (
                  <>
                    <button
                      className="carousel__btn carousel__btn--prev"
                      onClick={() => setPhotoIdx(i => (i - 1 + photos.length) % photos.length)}
                      style={{ top: "50%", transform: "translateY(-50%)" }}
                    >←</button>
                    <button
                      className="carousel__btn carousel__btn--next"
                      onClick={() => setPhotoIdx(i => (i + 1) % photos.length)}
                      style={{ top: "50%", transform: "translateY(-50%)" }}
                    >→</button>
                    <div className="carousel__dots" style={{ padding: "12px 0 0" }}>
                      {photos.map((_, i) => (
                        <button
                          key={i}
                          className="carousel__dot"
                          onClick={() => setPhotoIdx(i)}
                          style={{ background: i === photoIdx ? "var(--primary-container)" : "var(--outline-variant)" }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="modal__actions" style={{ marginTop: "auto" }}>
            <p className="label-xs color-outline" style={{ letterSpacing: ".2em", textAlign: "center" }}>
              Soli Deo Gloria · Spirit of Fire Theatre
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Show card ─────────────────────────────────────────────────────────────────

function PastShowCard({ show, onClick }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="show-card"
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: "pointer" }}
    >
      <div className="show-card_image-wrap" style={{ marginBottom: 0 }}>
        <div
          className="show-card_image"
          style={{
            backgroundImage: `url(${show.image})`,
            filter: hov ? "grayscale(0%)" : "grayscale(60%)",
            transform: hov ? "scale(1.04)" : "scale(1)",
          }}
        >
          <div className="show-card_image-overlay" />
        </div>
        <div className="show-card_gradient" />

        {/* Overlay text — always visible */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          padding: "24px 20px 20px",
          background: "linear-gradient(to top, var(--surface-100) 0%, transparent 100%)",
          zIndex: 4,
        }}>
          <h3
            className="serif-italic color-on-surface"
            style={{
              fontSize: "clamp(18px, 2.4vw, 24px)",
              lineHeight: 1.1,
              marginBottom: 6,
              color: hov ? "var(--primary-lighter)" : "var(--on-surface)",
              transition: "color .3s",
            }}
          >
            {show.title}
          </h3>
          <p className="label-xs color-outline" style={{ letterSpacing: ".25em" }}>
            {show.dates}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function ArchiveHero({ onNav }) {
  const cards = [
    { label: "Auditions", desc: "Step onto the stage", emoji: "🎭", id: "auditions" },
    { label: "Submissions", desc: "Pitch your project", emoji: "✍️", id: "submissions" },
    { label: "Join the Crew", desc: "Work behind the scenes", emoji: "🔧", id: "crew" },
  ];

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 48px 80px" }}>
        <div className="participate-hero__bg-base" />
        <div className="participate-hero__bg-fade" />
        <div className="participate-hero__bg-glow" />
        <div className="hero__bg-image" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
          <div className="flex-row" style={{ alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div style={{ height: 1, width: 36, background: "var(--primary-container)" }} />
            <span className="label-xs color-primary-container" style={{ letterSpacing: ".4em" }}>Spirit of Fire · Archive</span>
          </div>
          <h1 className="display-xl color-on-surface" style={{ lineHeight: .88, marginBottom: 20 }}>
            Past Productions
          </h1>
        </div>
      </div>
    </section>
  );
}
// function ArchiveHero() {
//   return (
//     <section style={{ position: "relative", height: 480, display: "flex", alignItems: "flex-end", padding: "0 var(--pad-x) 80px", overflow: "hidden" }}>
//       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, var(--bg-mission-a) 0%, var(--bg-mission-b) 100%)" }} />
//       <div className="flames-background" />
//       <div style={{ position: "absolute", inset: 0, opacity: 0.18, backgroundImage: "radial-gradient(ellipse at 35% 40%, var(--primary-70) 0%, transparent 55%)" }} />
//       <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--surface-100) 0%, transparent 60%)" }} />

// <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
//   <div className="flex-row" style={{ alignItems: "center", gap: 16, marginBottom: 20 }}>
//     <div style={{ height: 1, width: 36, background: "var(--primary-container)" }} />
//     <span className="label-xs color-primary-container" style={{ letterSpacing: ".4em" }}>Spirit of Fire · Archive</span>
//   </div>
//   <h1 className="display-xl color-on-surface" style={{ lineHeight: .88, marginBottom: 20 }}>
//     Past Productions
//   </h1>
// </div>
//     </section>
//   );
// }

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PastShows() {
  const [activeShow, setActiveShow] = useState(null);

  return (
    <main>
      <ArchiveHero />

      <section className="section-pad bg-surface">
        <div className="container">

          {/* Section header */}
          <div className="flex-row" style={{ alignItems: "center", gap: 24, marginBottom: 64 }}>
            <div className="divider-flame" style={{ height: 1, width: 48 }} />
            <h2 className="serif label-upper color-primary" style={{ fontSize: 13, letterSpacing: ".4em" }}>
              Productions · 2025–Present
            </h2>
          </div>

          {/* Grid */}
          {pastProductions.length > 0 ? (
            <div className="grid-3" style={{ rowGap: 48 }}>
              {pastProductions.map((show) => (
                <PastShowCard
                  key={show.id}
                  show={show}
                  onClick={() => setActiveShow(show)}
                />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <span style={{ fontSize: 40, opacity: 0.2, display: "block", marginBottom: 24 }}>🎭</span>
              <p className="serif-italic color-outline" style={{ fontSize: 22 }}>No past productions yet.</p>
              <p className="body-md color-on-surface-var" style={{ marginTop: 12, fontSize: 14 }}>
                Check back after our first season wraps.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Closing quote */}
      <section className="section-pad bg-surface-lowest" style={{ borderTop: "1px solid var(--outline-15)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", padding: "0 var(--pad-x)" }}>
          <span className="color-primary-container" style={{ fontSize: 24, display: "block", marginBottom: 24 }}>✦</span>
          <blockquote className="serif-italic color-on-surface" style={{ fontSize: "clamp(18px, 2.5vw, 26px)", lineHeight: 1.5, marginBottom: 20 }}>
            Soli Deo Gloria — to the glory of God alone.
          </blockquote>
          <cite className="label-xs color-primary" style={{ letterSpacing: ".35em", fontStyle: "normal" }}>
            The Spirit of Fire
          </cite>
        </div>
      </section>

      {/* Modal */}
      {activeShow && (
        <PastShowModal show={activeShow} onClose={() => setActiveShow(null)} />
      )}

      <Footer />
    </main>
  );
}