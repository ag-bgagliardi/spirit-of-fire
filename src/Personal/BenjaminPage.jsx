import { useState } from "react";
import { useNavigate } from "react-router-dom";
import benImage from "../Assets/People/Benjamin2.jpg";
import Footer from "../Main/Footer";
import "./benjamin.css";
import "../Style/typography.css";

/* ── Data ── */
const theatre = [
  { title: "Mother Rabbit", role: "Bobby", org: "Spirit of Fire Theatre", director: "Rico Heisler", year: 2026 },
  { title: "Walter is Bankrupt", role: "Walter", org: "Big Blue Theatre", director: "Luke Hiland", year: 2025 },
  { title: "Little Huxley and the Devil", role: "Ronald", org: "Big Blue Theatre", director: "Thomas Nelson", year: 2025 },
  { title: "Richly Poisoned (Table Read)", role: "Lewin", org: "Big Blue Theatre", director: "Ray Huntley", year: 2025 },
  { title: "Holiday Lockdown", role: "Mr Roberts", org: "Big Blue Theatre", director: "Ellie Fraser", year: 2025 },
  { title: "The Complete Works of William Shakespeare (Abr.)", role: "Daniel", org: "UW Madison", director: "Bridget Anderson", year: 2024 },
  { title: "Shakespeare's (Not) in Love", role: "Benedict", org: "UW Madison", director: "Bridget Anderson", year: 2023 },
  { title: "Macbeth", role: "Ross", org: "UW Madison", director: "Julien White", year: 2023 },
  { title: "Easiest Thing I've Ever Done", role: "Andrew", org: "UW Madison", director: "Mak Strohmeyer", year: 2022 },
  { title: "Sweeney Todd", role: "Ensemble", org: "UW Madison", director: "David Ronis", year: 2022 },
  { title: "Play On!", role: "Gerry Dunbar", org: "Hudson Arts", director: "Rico Heisler", year: 2020 },
  { title: "The Little Mermaid", role: "Scuttle", org: "Hudson Arts", director: "John Potter", year: 2020 },
  { title: "How To Succeed in Business...", role: "J. Pierrepont Finch", org: "Hudson Arts", director: "Rico Heisler", year: 2019 },
  { title: "The Nerd", role: "The Nerd", org: "Hudson Arts", director: "Rico Heisler", year: 2019 },
];

const writing = {
  plays: [
    { title: "Mother Rabbit", style: "Comedy", length: "2 acts", year: 2025 },
    { title: "Missing the Rain", style: "Drama", length: "2 acts", year: 2024 },
  ],
  skits: [
    { title: "The Eulogy", style: "Comedy", year: 2023 },
    { title: "Breakfast Conversations", style: "Comedy", year: 2021 },
  ],
  screenplays: [
    { title: "The Apartment", style: "Comedy", year: 2022 },
    { title: "The Pitch", style: "Comedy", year: 2021 },
    { title: "The Interview", style: "Comedy", year: 2020 },
  ],
  poems: [
    { title: "Wasn't It Nice?", style: "Drama", year: 2026 },
    { title: "Desolation Day", style: "Drama", year: 2026 },
    { title: "Grocery Store", style: "Romantic", year: 2026 },
    { title: "Abroad", style: "Drama", year: 2026 },
    { title: "Alunalei", style: "Romantic", year: 2025 },
    { title: "Crosby Drive", style: "Drama", year: 2025 },
    { title: "Love for You", style: "Drama", year: 2025 },
    { title: "Stormclouds", style: "Drama", year: 2024 },
    { title: "Empty Sea", style: "Drama", year: 2023 },
    { title: "Sitting at My Desk Today", style: "Drama", year: 2022 },
    { title: "Hollowpoints", style: "Drama", year: 2022 },
    { title: "Open Eyes", style: "Drama", year: 2021 },
    { title: "Bittertime", style: "Drama", year: 2020 },
    { title: "Addicts Creed", style: "Drama", year: 2020 },
  ],
};

const music = [
  { title: "Seluna", platform: "Musescore", style: "Choral", year: 2025 },
  { title: "Sefrinuum", platform: "Musescore", style: "Piano / Strings", year: 2025 },
  { title: "Steeple Waltz", platform: "Musescore", style: "Piano", year: 2024 },
  { title: "Go With You", platform: "Musescore", style: "Piano / Strings", year: 2024 },
  { title: "Iodorae", platform: "Musescore", style: "Piano", year: 2023 },
];

const styleTag = { Comedy: "var(--primary-container)", Drama: "var(--outline)", Romantic: "var(--tertiary-container)", Choral: "var(--secondary-container)", "Piano / Strings": "var(--outline)", Piano: "var(--outline)" };

/* ── Sub-components ── */

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
    <span className="ben-pill" style={{ borderColor: styleTag[style] || "var(--outline)", color: styleTag[style] || "var(--outline)" }}>
      {style}
    </span>
  );
}

function WritingSection() {
  return (
    <section className="ben-section">
      <SectionLabel>Writing</SectionLabel>
      <div className="ben-writing-grid">

        {/* Plays */}
        <div className="ben-writing-col">
          <p className="ben-writing-col__heading">Plays</p>
          {writing.plays.map((p, i) => (
            <div key={i} className="ben-writing-item">
              <div className="ben-writing-item__top">
                <span className="ben-writing-item__title">{p.title}</span>
                <span className="ben-writing-item__year">{p.year}</span>
              </div>
              <div className="ben-writing-item__meta">
                <StylePill style={p.style} />
                {p.length && <span className="ben-writing-item__length">{p.length}</span>}
              </div>
            </div>
          ))}

          <p className="ben-writing-col__heading" style={{ marginTop: 32 }}>Skits</p>
          {writing.skits.map((p, i) => (
            <div key={i} className="ben-writing-item">
              <div className="ben-writing-item__top">
                <span className="ben-writing-item__title">{p.title}</span>
                <span className="ben-writing-item__year">{p.year}</span>
              </div>
              <StylePill style={p.style} />
            </div>
          ))}

          <p className="ben-writing-col__heading" style={{ marginTop: 32 }}>Screenplays</p>
          {writing.screenplays.map((p, i) => (
            <div key={i} className="ben-writing-item">
              <div className="ben-writing-item__top">
                <span className="ben-writing-item__title">{p.title}</span>
                <span className="ben-writing-item__year">{p.year}</span>
              </div>
              <StylePill style={p.style} />
            </div>
          ))}
        </div>

        {/* Poems */}
        <div className="ben-writing-col">
          <p className="ben-writing-col__heading">Poetry</p>
          <div className="ben-poem-grid">
            {writing.poems.map((p, i) => (
              <div key={i} className="ben-poem-item">
                <span className="ben-poem-item__title">{p.title}</span>
                <div className="ben-poem-item__bottom">
                  <StylePill style={p.style} />
                  <span className="ben-writing-item__year">{p.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function MusicSection() {
  return (
    <section className="ben-section">
      <SectionLabel>Music</SectionLabel>
      <div className="ben-music-grid">
        {music.map((m, i) => (
          <div key={i} className="ben-music-card">
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

/* ── Page ── */
export default function BenjaminPage() {
  const navigate = useNavigate();

  return (
    <main className="ben-page">

      {/* Hero */}
      <section className="ben-hero">
        <div className="ben-hero__bg" />
        <div className="ben-hero__fade" />

        <div className="ben-hero__inner container">

          {/* Photo */}
          <div className="ben-hero__photo-wrap">
            <div className="ben-hero__photo-border-outer" />
            <div className="ben-hero__photo-border" />
            <div className="ben-hero__photo" style={{ backgroundImage: `url(${benImage})` }} />
            <div className="ben-hero__photo-overlay" />
          </div>

          {/* Identity */}
          <div className="ben-hero__identity">
            <p className="ben-hero__eyebrow">Spirit of Fire</p>
            <h1 className="ben-hero__name display-xl">Benjamin<br />Gagliardi</h1>
            <div className="ben-hero__roles">
              {["Actor", "Playwright", "Director", "Singer", "Songwriter"].map(r => (
                <span key={r} className="ben-hero__role-chip">{r}</span>
              ))}
            </div>
            <div style={{
              width: "75%",
              padding: "20px 0px"
            }}>
              <span class="color-on-surface-var">Benjamin Gagliardi is a Theatre Graduate from UW Madison. He now spends his free time as an actor and writer in Hudson, Wisconsin. He is the cofounder of the Theatre company Spirit of Fire, and is excited to present his first comedy, Mother Rabbit. He wants to extend special thanks to his family, the Heislers, and the Wilson family for their inspiration and help through the show.</span>
            </div>
            <a href="mailto:ben.j.gagliardi@gmail.com" className="ben-hero__contact">
              ben.j.gagliardi@gmail.com
            </a>
          </div>

        </div>
      </section>

      {/* Resume sections */}
      <div className="ben-body container">
        <WritingSection />
        <div className="ben-divider" />
        <MusicSection />
      </div>

      <Footer />
    </main>
  );
}
