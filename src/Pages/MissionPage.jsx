import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Main/Footer";
import "../Style/index.css";
import "../Style/portfolio.css";
import People from "../Data/CastCrew";
import BioModal from "../Modals/BioModal";

const TEAM = People.crew;

function RolePills({ roles }) {
  return (
    <div className="role-pills">
      {roles.map(r => <span key={r} className="role-pill">{r}</span>)}
    </div>
  );
}

function MemberCard({ member, featured, onBioOpen }) {
  const [hov, setHov] = useState(false);
  const navigate = useNavigate();
  const hasBio = Boolean(member.bio);

  function handleClick() {
    if (hasBio) {
      onBioOpen(member);
    } else if (member.pageID) {
      navigate(`/${member.pageID}`);
    }
  }

  if (featured) {
    return (
      <div className="profile-card">
        <div className="profile-card__image-wrap">
          <div
            className="profile-card__image"
            style={{
              backgroundImage: `url(${member.image})`,
              filter: "grayscale(1)",
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
          <h3 className="serif" style={{ fontSize: 28, marginBottom: 4 }}>{member.name}</h3>
          <span className="label-xs color-primary" style={{ display: "block", marginBottom: 24 }}>{member.role}</span>
          <p className="body-md color-on-surface-var" style={{ marginBottom: 24 }}>{member.bio}</p>
          {member.cta && <span className="btn-text" onClick={() => navigate(member.cta.link)}>{member.cta.label} →</span>}
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
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div className="member-card__glow" style={{ background: hov ? "radial-gradient(ellipse at top,rgba(249,94,20,0.06),transparent 70%)" : "none" }} />
      <div
        className="member-card__image member-card__image--landscape"
        style={{ backgroundImage: `url(${member.image})`, filter: hov ? "grayscale(0)" : "grayscale(1)" }}
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

function MissionHero() {
  return (
    <section className="team-mission-hero">
      <div className="team-mission-hero__bg image-overlay">
        <div className="dove-background" />
      </div>
      <div className="team-mission-hero__fade" />
      <div className="team-mission-hero__inner">
        <p className="team-mission-hero__eyebrow">Spirit of Fire · Est. 2025</p>
        <h1 className="team-mission-hero__title display-xl">
          The Spirit<br />of <span className="color-primary-container">Fire</span>
        </h1>
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
        <div className="team-mission-hero__ideals">
          {["Faith", "Hope", "Love", "Joy"].map((virtue, i) => (
            <span key={i} className="team-mission-hero__virtue">{virtue}</span>
          ))}
        </div>
        <div className="team-mission-hero__scroll-cue">
          <div className="team-mission-hero__scroll-line" />
          <span>Meet the Team</span>
        </div>
      </div>
    </section>
  );
}

function LeadershipSection({ onBioOpen }) {
  const company = TEAM.filter(m => m.col === "company");
  const founders = TEAM.filter(m => m.col === "founder");

  return (
    <>
      <section className="section-pad" style={{ padding: "48px 0px" }}>
        <div style={{ background: 'var(--surface-low)', width: "100%" }}>
          <div className="container" style={{ marginBottom: 60, paddingTop: 40, paddingBottom: 40 }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 40 }}>The Founders</h2>
            <div className="grid-2" style={{ gap: 96, alignItems: "start" }}>
              {founders.map(m => (
                <MemberCard key={m.name} member={m} featured onBioOpen={onBioOpen} />
              ))}
            </div>
          </div>
        </div>
        <div className="container" style={{ marginBottom: 60 }}>
          <SectionLabel label="The Company" />
          <div className="team-company-grid">
            {company.map(m => (
              <MemberCard key={m.name} member={m} onBioOpen={onBioOpen} />
            ))}
          </div>
        </div>
      </section>
      <section className="pat section-pad bg-surface-low">
      </section>
    </>
  );
}

function MissionCTA() {
  const navigate = useNavigate();
  return (
    <section className="section-pad bg-surface-lowest">
      <div className="section-cta-bordered__inner">
        <h2 className="serif" style={{ fontSize: 48, marginBottom: 24 }}>
          Don't miss <em className="color-primary"> Mother Rabbit!</em>
        </h2>
        <p className="body-lg" style={{ color: "rgba(229,226,225,0.6)", marginBottom: 48 }}>
          Join us for an evening of unbridled joy and laughter, as family and loved ones learn to forgive and work with each other.
        </p>
        <div className="flex-row" style={{ justifyContent: "center", gap: 24 }}>
          <a
            href={"https://events.ticketleap.com/events/spirit-of-fire"}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}
          >Reserve Your Ticket</a>
          {/* <button className="btn-primary" onClick={() => navigate("/tickets")}>Reserve Your Ticket</button> */}
          <button className="btn-ghost-primary" onClick={() => navigate("/participate")}>Get Involved</button>
        </div>
      </div>
    </section>
  );
}

export default function MissionPage() {
  const [activePerson, setActivePerson] = useState(null);

  return (
    <main>
      {activePerson && (
        <BioModal person={activePerson} onClose={() => setActivePerson(null)} />
      )}
      <MissionHero />
      <LeadershipSection onBioOpen={setActivePerson} />
      <MissionCTA />
      <Footer />
    </main>
  );
}