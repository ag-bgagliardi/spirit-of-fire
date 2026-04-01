import { useState, useEffect } from "react";
import Footer from "../Main/Footer";
import "../Style/portfolio.css";
import portfolio from "../Data/Portfolio"
/* ════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════ */
const plays = portfolio.plays;
const skits = portfolio.skits;
const screenplays = portfolio.screenplays;
const poems = portfolio.poems;
const music = portfolio.music;

const styleColor = {
  Comedy:          "var(--primary-container)",
  Drama:           "var(--outline)",
  Romantic:        "var(--tertiary-container)",
  Choral:          "var(--secondary-container)",
  "Piano / Strings": "var(--outline)",
  Piano:           "var(--outline)",
};

/* ════════════════════════════════════════════
   MODAL
   ════════════════════════════════════════════ */

function WorkModal({ item, type, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isPurchasable = (type === "play" || type === "skit") && item.purchaseUrl;
  const hasSample = Boolean(item.sample || item.lines);
  const sampleText = item.sample || item.lines || "";

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="port-modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="port-modal__header">
          <div className="port-modal__meta">
            <span className="port-modal__type label-tiny color-primary-container" style={{ letterSpacing: ".3em" }}>
              {type === "play" ? "Play" : type === "screenplay" ? "Screenplay" : type === "skit" ? "Skit" : type === "poem" ? "Poem" : "Music"}
              {item.length && ` · ${item.length}`}
            </span>
            <span className="port-writing-item__year" style={{ fontSize: 11 }}>{item.year}</span>
          </div>
          <h2 className="port-modal__title serif">{item.title}</h2>
          <span className="port-pill port-modal__pill" style={{ borderColor: styleColor[item.style] || "var(--outline)", color: styleColor[item.style] || "var(--outline)" }}>
            {item.style}
          </span>
        </div>

        <div className="port-modal__divider" />

        {/* Synopsis / Description */}
        {(item.synopsis || item.description) && (
          <div className="port-modal__synopsis">
            <p className="label-tiny color-primary-container" style={{ letterSpacing: ".3em", marginBottom: 10 }}>
              {type === "music" ? "About" : "Synopsis"}
            </p>
            <p className="body-md color-on-surface-var">{item.synopsis || item.description}</p>
          </div>
        )}

        {/* Sample */}
        {hasSample && (
          <div className="port-modal__sample">
            <p className="label-tiny color-primary-container" style={{ letterSpacing: ".3em", marginBottom: 12 }}>
              {type === "poem" ? "Text" : type === "music" ? "Notes" : "Sample"}
            </p>
            <pre className="port-modal__sample-text serif">{sampleText}</pre>
          </div>
        )}

        {/* Music link */}
        {type === "music" && (item.link ? 
          (<div className="port-modal__actions">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-ghost port-modal__action-btn">
              View on Musescore →
            </a>
          </div>):
          (<p style={{padding:20, marginLeft:20}}>
            Link Currently Unavailable
          </p>
          )
        ) }

        {/* Purchase */}
        {isPurchasable && (
          <div className="port-modal__purchase">
            <div className="port-modal__purchase-inner">
              <div>
                <p className="label-tiny color-primary-container" style={{ letterSpacing: ".25em", marginBottom: 4 }}>Available for Purchase</p>
                <p className="port-modal__purchase-note color-on-surface-var">
                  Full script available as a PDF download. Contact for performance rights and licensing.
                </p>
              </div>
              <a href={item.purchaseUrl} className="btn-primary port-modal__action-btn">
                Purchase Script →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════
   SECTION COMPONENTS
   ════════════════════════════════════════════ */

function SectionLabel({ children }) {
  return (
    <div className="port-section-label">
      <div className="port-section-label__line" />
      <span>{children}</span>
    </div>
  );
}

function StylePill({ style }) {
  return (
    <span className="port-pill" style={{ borderColor: styleColor[style] || "var(--outline)", color: styleColor[style] || "var(--outline)" }}>
      {style}
    </span>
  );
}

/* Shared table row for plays, screenplays, skits */
function ScriptTable({ items, type, onOpen }) {
  const [hov, setHov] = useState(null);
  return (
    <div className="port-theatre-table">
      <div className="port-script-header">
        <span></span>
        <span>Title</span>
        <span>Author</span>
        <span>Style</span>
        <span>Year</span>
        <span></span>
      </div>
      {items.map((item, i) => (
        <div
          key={i}
          className={`port-script-row${hov === i ? " hov" : ""}`}
          onMouseEnter={() => setHov(i)}
          onMouseLeave={() => setHov(null)}
          onClick={() => onOpen(item, type)}
        >
          {console.log(item.icon)}
          <div className="port-theatre-row__icon" style={{backgroundImage: `url(${item.icon})`}} />
          <span className="port-theatre-row__title">{item.title}</span>
          <span className="port-music-card__style">{item.author}</span>
          <span><StylePill style={item.style} /></span>
          <span className="port-theatre-row__year">{item.year}</span>
          <span className="port-script-row__cta">
            {item.status === "available"
              ? <span className="port-script-row__badge port-script-row__badge--buy">Buy</span>
              : <span className="port-script-row__badge port-script-row__badge--read">Read</span>
            }
          </span>
        </div>
      ))}
    </div>
  );
}

function TheatreSection({ onOpen }) {
  return (
    <section className="port-section">
      <SectionLabel>Plays</SectionLabel>
      <ScriptTable items={plays} type="play" onOpen={onOpen} />

      <div style={{ marginTop: 48 }}>
        <SectionLabel>Skits</SectionLabel>
        <ScriptTable items={skits} type="skit" onOpen={onOpen} />
      </div>

      <div style={{ marginTop: 48 }}>
        <SectionLabel>Screenplays</SectionLabel>
        <ScriptTable items={screenplays} type="screenplay" onOpen={onOpen} />
      </div>
    </section>
  );
}

function PoemSection({ onOpen }) {
  const [hov, setHov] = useState(null);
  return (
    <section className="port-section">
      <SectionLabel>Poetry</SectionLabel>
      <div className="port-poem-grid">
        {poems.map((p, i) => (
          <div
            key={i}
            className={`port-poem-card${hov === i ? " hov" : ""}`}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
            onClick={() => onOpen(p, "poem")}
          >
            <div className="port-poem-card__top">
              <span className="port-poem-card__title serif">{p.title}</span>
              <span className="port-writing-item__year">{p.year}</span>
            </div>
            <div className="port-poem-card__bottom">
              <span className="port-music-card__style">{p.author}</span>
              <div className="port-poem-card__arrow"></div>
            </div>
          </div>
        ))}
      </div>
    </section>)
}

function MusicSection({ onOpen }) {
  const [hov, setHov] = useState(null);
  return (
    <section className="port-section">
      <SectionLabel>Music</SectionLabel>
      <div className="port-music-grid">
        {music.map((m, i) => (
          <div
            key={i}
            className={`port-music-card${hov === i ? " hov" : ""}`}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
            onClick={() => onOpen(m, "music")}
            style={{ cursor: "pointer" }}
          >
            <div className="port-music-card__note">♩</div>
            <span className="port-music-card__title">{m.title}</span>
            <span className="port-music-card__style">{m.style}</span>
            {/* <span className="port-music-card__style">{m.author}</span> */}
            <span className="port-music-card__year">{m.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════ */

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeType, setActiveType] = useState(null);

  function openModal(item, type) {
    setActiveItem(item);
    setActiveType(type);
  }

  function closeModal() {
    setActiveItem(null);
    setActiveType(null);
  }

  return (
    <main className="port-page">
      {activeItem && <WorkModal item={activeItem} type={activeType} onClose={closeModal} />}

      {/* Hero */}
      <section className="port-hero">
        <div className="port-hero__bg" />
        <div className="port-hero__fade" />
        <div className="port-hero__inner container">
          <p className="port-hero__eyebrow">Spirit of Fire</p>
          <h1 className="port-hero__title display-xl">
            Original 
            <em className="color-primary-container"> Works</em>
          </h1>
          <p className="port-hero__sub body-lg color-on-surface-var">
            At Spirit of Fire we support all art made to uplift the soul and bring others to the light of Chirst. Whether you have a play, song, poem, or painting, you can have your art featured or performed in our Theatre Company.
          </p>
          {/* <div className="port-hero__stats">
            <div className="port-hero__stat">
              <span className="port-hero__stat-num">{plays.length + screenplays.length + skits.length}</span>
              <span className="port-hero__stat-label">Scripts</span>
            </div>
            <div className="port-hero__stat-divider" />
            <div className="port-hero__stat">
              <span className="port-hero__stat-num">{poems.length}</span>
              <span className="port-hero__stat-label">Poems</span>
            </div>
            <div className="port-hero__stat-divider" />
            <div className="port-hero__stat">
              <span className="port-hero__stat-num">{music.length}</span>
              <span className="port-hero__stat-label">Compositions</span>
            </div>
          </div> */}
        </div>
      </section>

      {/* Content */}
      <div className="port-body container">
        <TheatreSection onOpen={openModal} />
        {
          poems.length > 0 ? 
          <>
            <div className="port-divider" />
            <PoemSection onOpen={openModal} />
          </> : <></>
        }
        {
          music.length > 0 ? 
          <>
            <div className="port-divider" />
            <MusicSection onOpen={openModal} />
          </> : <></>
        }
      </div>

      <Footer />
    </main>
  );
}