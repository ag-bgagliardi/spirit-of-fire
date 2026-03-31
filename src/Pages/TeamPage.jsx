import Footer from "../Main/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ricoImage from "../Assets/People/Rico.webp";
import benImage from "../Assets/People/Benjamin.jpeg";
import silasImage from "../Assets/People/SilasWide.jpeg";
import madelineImage from "../Assets/People/MadelineWide.jpeg";
import barbaraImage from "../Assets/People/Barbara.jpg";
import stephanieImage from "../Assets/People/Stephanie.jpg";
import "../Style/index.css";

const TEAM = [
  { name: "Rico Heisler",       title: "Artistic Director",      badge: "Cofounder", roles: ["Actor", "Director", "Choreographer"],          image: ricoImage,      icon: "🎬", col: "founder", pageID: "personal"  },
  { name: "Benjamin Gagliardi", title: "Dramatist",              badge: "Cofounder", roles: ["Actor", "Writer", "Songwriter"],               image: benImage,       icon: "✍️", col: "founder", pageID: "benjamin" },
  { name: "Madeline Gagliardi", title: "Administrator",                              roles: ["Manager", "Actor", "Singer"],                   image: madelineImage,  icon: "◆",  col: "company", pageID: "personal"  },
  { name: "Silas Heisler",      title: "Creative Consultant",                        roles: ["Actor", "Singer"],                              image: silasImage,     icon: "◆",  col: "company", pageID: "personal"  },
  { name: "Barbara Gagliardi",  title: "Creative Designer",                          roles: ["Actor", "Singer", "Director", "Designer"],      image: barbaraImage,   icon: "◆",  col: "company", pageID: "personal"  },
  { name: "Stephanie Wilson",   title: "Director of Marketing",                      roles: ["Designer", "Marketer"],                         image: stephanieImage, icon: "◆",  col: "company", pageID: "personal"  },
];

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
          cursor: hov ? "pointer": "auto"
        }}
        onClick={() => navigate(`/${member.pageID}`)}
      >
        <div className="member-card__glow" style={{ background: hov ? "radial-gradient(ellipse at top left,rgba(249,94,20,0.06),transparent 70%)" : "none" }} />
        <div style={{ position: "relative" }}>
          <div
            className="member-card__image member-card__image--portrait"
            style={{ backgroundImage: `url(${member.image})`, filter: hov ? "grayscale(0)" : "grayscale(1)", cursor: hov ? "pointer": "auto" }}
          >
            <div className="member-card__image-overlay" />
          </div>
          <div className="member-card__icon-badge">{member.icon}</div>
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
        style={{ backgroundImage: `url(${member.image})`, filter: hov ? "grayscale(0)" : "grayscale(1)", cursor: hov ? "pointer": "auto" }}
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

function TeamHero() {
  return (
    <section style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 48px 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 70% 40%,rgba(249,94,20,0.5) 0%,transparent 60%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span className="label-xs color-primary-container" style={{ letterSpacing: ".4em", display: "block", marginBottom: 20 }}>The Company</span>
        <h1 className="display-xl color-on-surface" style={{ marginBottom: 24 }}>
          Our <span className="color-primary-container">Team</span>
        </h1>
        <p className="body-md color-on-surface-var" style={{ fontSize: 17, maxWidth: 540 }}>
          A small company of devoted artists — actors, directors, writers, and makers — united by a shared calling to tell stories that glorify God.
        </p>
      </div>
    </section>
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

function TeamSection() {
  const founders = TEAM.filter(m => m.col === "founder");
  const company  = TEAM.filter(m => m.col === "company");
  return (
    <section className="pat section-pad bg-surface-low">
      <div className="team-grid">
        <div className="team-grid__col">
          <SectionLabel label="Founders" />
          <div className="flex-col" style={{ gap: 32 }}>
            {founders.map(m => <MemberCard key={m.name} member={m} featured />)}
          </div>
        </div>
        <div className="team-grid__col">
          <SectionLabel label="The Company" />
          <div className="team-company-grid">
            {company.map(m => <MemberCard key={m.name} member={m} />)}
          </div>
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
        <span style={{ fontSize: 32, display: "block", marginBottom: 24 }}><img src="/favicon.ico" alt="" /></span>
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

export default function TeamPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main style={{ paddingTop: 80 }}>
      <TeamHero />
      <TeamSection />
      <TeamCTA />
      <Footer />
    </main>
  );
}