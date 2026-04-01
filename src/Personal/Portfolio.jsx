import { useState, useEffect } from "react";
import Footer from "../Main/Footer";
import "./benjamin.css";
import "../Style/portfolio.css";

/* ════════════════════════════════════════════
   DATA
   ════════════════════════════════════════════ */

const plays = [
  {
    title: "Mother Rabbit",
    style: "Comedy",
    length: "2 acts",
    year: 2025,
    status: "available",
    synopsis: `Peter Kotski's mother is sick. His father passed away years ago. 
        His eccentric brothers are eccentric, and estranged. His mother's illness 
        brings them all together again, where they must reconcile with each other, 
        and her infamous personal Doctor, Reverend Byrd. Filled with boystrous energy
        shenanigans, and all sorts of tomfoolery, Mother Rabbit has a laugh for anyone
        who comes. The show is Family-friendly and has strong themes of forgiveness and 
        family values.`,
    sample: `PETER "What church do you belong to?\nKEIRA "First Presbyterian Church."\nRICHARD "You’re the first?"\nKEIRA "Of its kind, yes."\nBOBBY "You’re fish people?"\nPETER "Excuse him, he hasn’t eaten."\nBOBBY "You stay out of this."\nRICHARD "What did you say you were?"\nKEIRA "Presbyterian."\nRICHARD "I don’t know what that is."\nBOBBY "It means they eat fish."\nKEIRA "No, that's Pescatirian."\nBOBBY "What did you just call me?"\nBYRD "No, Pescatarian."\nBOBBY "So you’re an exterminator."`,
    purchaseUrl: "#",
  },
  {
    title: "Missing the Rain",
    style: "Drama",
    length: "2 acts",
    year: 2024,
    status: "available",
    synopsis: "",
    sample: ``,
    purchaseUrl: "#",
  },
];

const skits = [
  {
    title: "The Eulogy",
    style: "Comedy",
    year: 2023,
    synopsis: "A neurotic and strange man performs a ridiculous Eulogy. Short-form comedy, approximately 4 minutes.",
    sample: ``,
    purchaseUrl: "#",
    status: "available",
  },
  {
    title: "Breakfast Conversations",
    style: "Comedy",
    year: 2021,
    synopsis: "Two people at a morning breakfast table. They begin to argue over what to do when a deer gets in front of your car. Heavily inspired by Abbott and Costello, approximately 6 minutes.",
    sample: ``,
    purchaseUrl: "#",
    status: "available",
  },
];

const screenplays = [
  {
    title: "The Apartment",
    style: "Comedy",
    year: 2022,
    synopsis: "Bobby Ryan makes a breakthrough with bomb proofing furniture, much to the chagrin of his roommate. Short-form screenplay, approximately 24 pages.",
    sample: `BOBBY 'Well then I said “that fruit salad reminds me of your daughter, because she’s the worst thing here”'\nDOUG 'And what did the dad say to that?'\nBOBBY 'Oh he goes, “I don’t care if you’re the best man, you’re outta here!”'`,
  },
  {
    title: "The Pitch",
    style: "Comedy",
    year: 2021,
    synopsis: "Bobby Ryan is struggling to succeed as an entrepaneur, when he bumps into an old friend. Short-form, approximately 17 pages.",
    sample: `BOBBY "Well they loved me Richard, but it just didn’t work out."\nRICHARD "Why?"\nBOBBY "They didn’t like me so much"\nRICHARD "Did you pitch the wrist brace?"\nBOBBY "No, I pitched Edible cell phones…"\nRICHARD "Oh, yeah...? [confused, disappointed]"\nBOBBY "Yeah... some guy accidentally ate his actual phone"`,
  },
  {
    title: "The Interview",
    style: "Comedy",
    year: 2020,
    synopsis: "Bobby Ryan is interviewed by the local news about his travelling hot tub business. Short-form, approximately 3 pages.",
    sample: `BOBBY	"So, Pastor Ellers, when we last saw you, you were the Pastor of the Pescetarian Church of Zioooon"\nPASTOR ELLERS "Presbyterian"\nBOBBY "What?"\nPASTOR ELLERS "Presbyterian, it's the Presbyterian Church of Zion"\nBOBBY "Right, right, and so… where are you now?"\nPASTOR ELLERS "Still a Pastor..."`,
  },
];

const poems = [
  { title: "Wasn't It Nice?",        style: "Drama",    year: 2026, lines: ""},
  { title: "Desolation Day",         style: "Drama",    year: 2026, lines: ""},
  { title: "Grocery Store",          style: "Romantic", year: 2026, lines: ""},
  { title: "Abroad",                 style: "Drama",    year: 2026, lines: ""},
  { title: "Alunalei",               style: "Romantic", year: 2025, lines: ""},
  { title: "Crosby Drive",           style: "Drama",    year: 2025, lines: ""},
  { title: "Love for You",           style: "Drama",    year: 2025, lines: ""},
  { title: "Stormclouds",            style: "Drama",    year: 2024, lines: ""},
  { title: "Empty Sea",              style: "Drama",    year: 2023, lines: ""},
  { title: "Sitting at My Desk Today", style: "Drama",  year: 2022, lines: ""},
  { title: "Hollowpoints",           style: "Drama",    year: 2022, lines: ""},
  { title: "Open Eyes",              style: "Drama",    year: 2021, lines: ""},
  { title: "Bittertime",             style: "Drama",    year: 2020, lines: ""},
  { title: "Addicts Creed",          style: "Drama",    year: 2020, lines: ""},
];

const music = [
  { title: "Seluna",        style: "Choral",          year: 2025, description: ""},
  { title: "Sefrinuum",     style: "Piano / Strings", year: 2025, description: ""},
  { title: "Steeple Waltz", style: "Piano",           year: 2024, description: ""},
  { title: "Go With You",   style: "Piano / Strings", year: 2024, description: ""},
  { title: "Iodorae",       style: "Piano",           year: 2023, description: ""},
];

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
            <span className="ben-writing-item__year" style={{ fontSize: 11 }}>{item.year}</span>
          </div>
          <h2 className="port-modal__title serif">{item.title}</h2>
          <span className="ben-pill port-modal__pill" style={{ borderColor: styleColor[item.style] || "var(--outline)", color: styleColor[item.style] || "var(--outline)" }}>
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
              {type === "poem" ? "Excerpt" : type === "music" ? "Notes" : "Sample"}
            </p>
            <pre className="port-modal__sample-text serif">{sampleText}</pre>
          </div>
        )}

        {/* Music link */}
        {type === "music" && item.link && (
          <div className="port-modal__actions">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-ghost port-modal__action-btn">
              View on Musescore →
            </a>
          </div>
        )}

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
    <div className="ben-section-label">
      <div className="ben-section-label__line" />
      <span>{children}</span>
    </div>
  );
}

function StylePill({ style }) {
  return (
    <span className="ben-pill" style={{ borderColor: styleColor[style] || "var(--outline)", color: styleColor[style] || "var(--outline)" }}>
      {style}
    </span>
  );
}

/* Shared table row for plays, screenplays, skits */
function ScriptTable({ items, type, onOpen }) {
  const [hov, setHov] = useState(null);
  return (
    <div className="ben-theatre-table">
      <div className="port-script-header">
        <span>Title</span>
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
          <span className="ben-theatre-row__title">{item.title}</span>
          <span><StylePill style={item.style} /></span>
          <span className="ben-theatre-row__year">{item.year}</span>
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
    <section className="ben-section">
      <SectionLabel>Plays</SectionLabel>
      <ScriptTable items={plays} type="play" onOpen={onOpen} />

      <div style={{ marginTop: 48 }}>
        <SectionLabel>Screenplays</SectionLabel>
        <ScriptTable items={screenplays} type="screenplay" onOpen={onOpen} />
      </div>

      <div style={{ marginTop: 48 }}>
        <SectionLabel>Skits</SectionLabel>
        <ScriptTable items={skits} type="skit" onOpen={onOpen} />
      </div>
    </section>
  );
}

function PoemSection({ onOpen }) {
  const [hov, setHov] = useState(null);
  return (
    <section className="ben-section">
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
              <span className="ben-writing-item__year">{p.year}</span>
            </div>
            <div className="port-poem-card__bottom">
              <StylePill style={p.style} />
              <span className="port-poem-card__arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MusicSection({ onOpen }) {
  const [hov, setHov] = useState(null);
  return (
    <section className="ben-section">
      <SectionLabel>Music</SectionLabel>
      <div className="ben-music-grid">
        {music.map((m, i) => (
          <div
            key={i}
            className={`ben-music-card${hov === i ? " hov" : ""}`}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
            onClick={() => onOpen(m, "music")}
            style={{ cursor: "pointer" }}
          >
            <div className="ben-music-card__note">♩</div>
            <span className="ben-music-card__title">{m.title}</span>
            <span className="ben-music-card__style">{m.style}</span>
            <span className="ben-music-card__year">{m.year}</span>
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
    <main className="ben-page">
      {activeItem && <WorkModal item={activeItem} type={activeType} onClose={closeModal} />}

      {/* Hero */}
      <section className="port-hero">
        <div className="port-hero__bg" />
        <div className="port-hero__fade" />
        <div className="port-hero__inner container">
          <p className="port-hero__eyebrow">Benjamin Gagliardi</p>
          <h1 className="port-hero__title display-xl">
            The<br />
            <em className="color-primary-container">Works</em>
          </h1>
          <p className="port-hero__sub body-lg color-on-surface-var">
            Plays, screenplays, poetry, and music — a living record of
            everything written, composed, and staged.
          </p>
          <div className="port-hero__stats">
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
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="ben-body container">
        <TheatreSection onOpen={openModal} />
        <div className="ben-divider" />
        <PoemSection onOpen={openModal} />
        <div className="ben-divider" />
        <MusicSection onOpen={openModal} />
      </div>

      <Footer />
    </main>
  );
}