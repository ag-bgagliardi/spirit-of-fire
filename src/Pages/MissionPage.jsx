import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Main/Footer";
import ricoImage from "../Assets/People/Rico.webp";
import benImage from "../Assets/People/Benjamin2.jpg";
import "../Style/index.css";
import "../Style/portfolio.css";
import People from "../Data/CastCrew"
import BioModal from "../Personal/BioModal"

const TEAM = People.crew;

function RolePills({ roles }) {
  return (
    <div className="role-pills">
      {roles.map(r => <span key={r} className="role-pill">{r}</span>)}
    </div>
  );
}

function MemberCard({ member, featured }) {
  const [hov, setHov] = useState(false);
  const navigate = useNavigate();

  if (featured) {
    return (
      <div
        className="member-card-featured"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? "var(--surface-high)" : "var(--surface-low)",
          border: `1px solid ${hov ? "rgba(249,94,20,0.3)" : "rgba(89,66,56,0.2)"}`,
          cursor: hov ? "pointer" : "auto"
        }}
        onClick={() => navigate(`/${member.pageID}`)}
      >
        <div className="member-card__glow" style={{ background: hov ? "radial-gradient(ellipse at top left,rgba(249,94,20,0.06),transparent 70%)" : "none" }} />
        <div style={{ position: "relative" }}>
          <div
            className="member-card__image member-card__image--portrait"
            style={{ backgroundImage: `url(${member.image})`, filter: hov ? "grayscale(0)" : "grayscale(1)", cursor: hov ? "pointer" : "auto" }}
          >
            <div className="member-card__image-overlay" />
          </div>
        </div>
        <div className="member-card-featured__body">
          <div>
            {member.badge && <span className="member-card__badge">✦ {member.badge}</span>}
            <h3 className="serif member-card__name" style={{ fontSize: 34, color: hov ? "var(--primary)" : "var(--on-surface)" }}>{member.name}</h3>
            <span className="label-xs color-outline">{member.title}</span>
          </div>
          <div style={{ height: 1, width: 48, background: "var(--outline-variant)" }} />
          <RolePills roles={member.roles} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="member-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "var(--surface-high)" : "var(--surface-low)",
        border: `1px solid ${hov ? "rgba(249,94,20,0.25)" : "rgba(89,66,56,0.15)"}`,
      }}
      onClick={() => navigate(`/${member.pageID}`)}
    >
      <div className="member-card__glow" style={{ background: hov ? "radial-gradient(ellipse at top,rgba(249,94,20,0.06),transparent 70%)" : "none" }} />
      <div
        className="member-card__image member-card__image--landscape"
        style={{ backgroundImage: `url(${member.image})`, filter: hov ? "grayscale(0)" : "grayscale(1)", cursor: hov ? "pointer" : "auto" }}
      >
        <div className="member-card__image-overlay" />
        <div className="member-card__image-bar" style={{ background: hov ? "var(--primary-container)" : "transparent" }} />
      </div>
      <div className="member-card__body">
        <h3 className="serif member-card__name" style={{ fontSize: 22, color: hov ? "var(--primary)" : "var(--on-surface)" }}>{member.name}</h3>
        <span className="label-xs color-outline" style={{ display: "block", marginBottom: 16 }}>{member.title}</span>
        <div className="member-card__divider" />
        <RolePills roles={member.roles} />
      </div>
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <div className="flex-row" style={{ alignItems: "center", gap: 24, marginBottom: 64 }}>
      <div className="divider-flame" style={{ height: 1, width: 48 }} />
      <h2 className="serif label-upper color-primary" style={{ fontSize: 13, letterSpacing: ".4em" }}>{label}</h2>
    </div>
  );
}

/* ── Combined hero + mission statement ── */
function MissionHero() {
  return (
    <section className="team-mission-hero">
      {/* Backgrounds */}
      <div className="team-mission-hero__bg image-overlay">
        <div className="horse-background" />
      </div>
      <div className="team-mission-hero__fade" />

      {/* Content */}
      <div className="team-mission-hero__inner">

        {/* Top eyebrow */}
        <p className="team-mission-hero__eyebrow">Spirit of Fire · Est. 2025</p>

        {/* Large title */}
        <h1 className="team-mission-hero__title display-xl">
          The Spirit<br />of <span className="color-primary-container">Fire</span>
        </h1>

        {/* Mission statement — centered, dominates the lower half */}
        <div className="team-mission-hero__statement">
          <div className="team-mission-hero__statement-ornament">
            <div className="team-mission-hero__ornament-line" />
            <span className="team-mission-hero__ornament-glyph">✦</span>
            <div className="team-mission-hero__ornament-line" />
          </div>

          <blockquote className="team-mission-hero__quote">
            To tell stories that{" "}
            <em className="color-primary-container">encourage, inspire, and challenge</em>{" "}
            people to see all of life and experience — past, present, and future —
            by the{" "}
            <em className="color-primary-container">light of Jesus Christ.</em>
          </blockquote>

          <div className="team-mission-hero__statement-ornament">
            <div className="team-mission-hero__ornament-line" />
            <span className="team-mission-hero__ornament-glyph">✦</span>
            <div className="team-mission-hero__ornament-line" />
          </div>
        </div>

        {/* Ideals — compact horizontal row */}
        <div className="team-mission-hero__ideals">
          {[
            "Faith",
            "Hope",
            "Love",
            "Joy",
          ].map((virtue, i) => (
            <span key={i} className="team-mission-hero__virtue">{virtue}</span>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="team-mission-hero__scroll-cue">
          <div className="team-mission-hero__scroll-line" />
          <span>Meet the Team</span>
        </div>

      </div>
    </section>
  );
}

function LeadershipProfile({ name, role, bio, cta, image, onCta }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="profile-card">
      <div className="profile-card__image-wrap">
        <div
          className="profile-card__image"
          onClick={onCta}
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            backgroundImage: `url(${image})`,
            filter: hov ? "grayscale(0)" : "grayscale(1)",
            cursor: "pointer",
          }}
        >
          <div className="profile-card__image-overlay" />
          <div
            className="mission-card__bar"
            style={{ background: hov ? "var(--primary-container)" : "transparent" }}
          />
        </div>
      </div>
      <div className="profile-card__body">
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 4 }}>{name}</h3>
        <span className="label-xs color-primary" style={{ display: "block", marginBottom: 24 }}>{role}</span>
        <p className="body-md color-on-surface-var" style={{ marginBottom: 24 }}>{bio}</p>
        {cta && <span className="btn-text" onClick={onCta}>{cta} →</span>}
      </div>
    </div>
  );
}

function LeadershipSection() {
  const navigate = useNavigate();
  const company = TEAM.filter(m => m.col === "company");
  const profiles = TEAM.filter(m => m.col === "founder");
  return (
    <section className="section-pad" style={{ padding: "96px 48px" }}>
      <div className="container" style={{ marginBottom: 80 }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 40 }}>The Founders</h2>
        <div className="grid-2" style={{ gap: 96 }}>
          {profiles.map(p => (
            <LeadershipProfile key={p.name} {...p} onCta={() => navigate(`/${p.pageID}`)} />
          ))}
        </div>
      </div>
      <div className="container">
        <SectionLabel label="The Company" />
        <div className="team-company-grid">
          {company.map(m => <MemberCard key={m.name} member={m} />)}
        </div>
      </div>
    </section>
  );
}

function TeamCTA() {
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
          <button className="btn-ghost-primary" onClick={() => navigate("/mission")}>Our Mission</button>
        </div>
      </div>
    </section>
  );
}

export default function MissionPage() {
  return (
    <main>
      <MissionHero />
      <LeadershipSection />
      <TeamCTA />
      <Footer />
    </main>
  );
}