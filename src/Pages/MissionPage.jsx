import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Main/Footer";
import ricoImage from "../Assets/People/Rico.webp";
import benImage from "../Assets/People/Benjamin2.jpg";
import "../Style/index.css";
import "../Style/portfolio.css";
import People from "../Data/CastCrew"
import productions from "../Data/CurrentShows";

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

function TeamSection() {
  const founders = TEAM.filter(m => m.col === "founder");
  const company = TEAM.filter(m => m.col === "company");
  return (
    <section className="pat section-pad bg-surface-low">
      <h2 className="serif leadership-title" style={{ fontSize: 40, marginBottom: 80 }}>Team of <em>Spirit of Fire</em></h2>
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

function MissionHero() {
  return (
    <section className="mission-hero">
      <div className="mission-hero__bg-base image-overlay">
        <div className="horse-background"></div>
      </div>
      <div className="mission-hero__bg-fade" />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <h1 className="display-xl color-on-surface" style={{ marginBottom: 24 }}>
          The Spirit of <span className="color-primary-container">Fire</span>
        </h1>
        {/* <p className="body-lg color-on-surface-var" style={{ maxWidth: 600 }}>
          Spirit of Fire began with the recognition that art speaks to truth. The stories that move us are the ones that reveal truth, and what is truth but God? As artists we seek this truth in all that we do. As a theatre we bring wonderful classics and brave original stories to life.
        </p> */}
      </div>
    </section>
  );
}

function MissionStatement() {
  return (
    <section className="pat section-pad" style={{ padding: "96px 48px", position: "relative" }}>
      <div className="mission-statement__grid">
        <div>
          <h2 className="body-lg color-on-surface-var serif" style={{ fontSize: 44, lineHeight: 1.2, marginBottom: 32 }}>Our Mission:</h2>
          <h2 className="mission-statement__tagline">
            To tell stories that
            <em className="color-primary-container"> encourage, inspire, and challenge </em>
            people to see all of life and experience: past, present, and future, by the
            <em className="color-primary-container"> light of Jesus Christ.</em>
          </h2>
          <h3 className="serif label-upper mission-statement__ideals-heading">Ideals</h3>
          <ul className="ideals-list">
            {[
              "To create and develop art that exemplify Christian virtues of Faith, Hope, Love, and Joy.",
              "To tell stories that encourage, inspire, and challenge people to see all of life and experience–past, present, and future–by the light of Jesus Christ.",
              "A story worth telling is one that moves us closer to God, whether that be joy in what we have seen, or recognition of our own human nature.",
              "That human nature is known and revealed in God.",
              "That one can pursue art with their whole heart and mind without abandoning morality.",
              "The crossover of art: music, theatre, film, poetry, painting, and all its forms should always be encouraged.",
            ].map((item, i) => (
              <li key={i} className="ideals-list__item">
                <span className="ideals-list__marker">✦</span>
                <span className="color-on-surface-var">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ position: "relative" }}>
          <div className="mission-statement__image-frame">
            <div className="mission-statement__image-inner" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="section-pad bg-surface-lowest" style={{ padding: "96px 48px" }}>
      <div className="container">
        <div className="section-header">
          <span className="label-xs color-primary-container" style={{ letterSpacing: ".4em" }}>Our Theatre Space</span>
          <h2 className="serif-italic" style={{ fontSize: 44, marginTop: 16 }}>Name For Our Theatre Space</h2>
        </div>
        <div className="warehouse-grid">
          <div
            className="warehouse-grid__image"
            style={{ background: "linear-gradient(120deg,#1a1a0a,#0a0a05)" }}
            onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
            onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}
          >🏭</div>
          <div className="warehouse-grid__card bg-surface-high">
            <h3 className="display-sm color-primary" style={{ marginBottom: 16 }}>Hope &amp; Faith</h3>
            <p className="color-on-surface-var" style={{ fontSize: 13, lineHeight: 1.8 }}>Founded in XXXX, Fixed stuff up.</p>
          </div>
          <div className="warehouse-grid__card bg-surface-container">
            <h3 className="display-sm color-primary" style={{ marginBottom: 16 }}>Theatre for the Soul</h3>
            <p className="color-on-surface-var" style={{ fontSize: 13, lineHeight: 1.8 }}>Our time and rehearsal process is centered on our love and devotion to Jesus Christ, through prayer and diligent work.</p>
          </div>
          <div
            className="warehouse-grid__image"
            style={{ background: "linear-gradient(120deg,#0a0a05,#151005)" }}
            onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
            onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}
          >🎭</div>
        </div>
      </div>
    </section>
  );
}

function LeadershipProfile({ name, role, bio, cta, image, onCta }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="profile-card"
    >
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
        {
          cta ? <span className="btn-text" onClick={onCta}>{cta} →</span> : <></>
        }
      </div>
    </div>
  );
}

function LeadershipSection() {
  const navigate = useNavigate();
  const founders = TEAM.filter(m => m.col === "founder");
  const company = TEAM.filter(m => m.col === "company");
  const profiles = [
    {
      name: "Rico Heisler",
      role: "Artistic Director",
      bio: "A Bachelor of Arts graduate from the University of Northwestern (Saint Paul) and the J.D. William Mitchell College of Law, he has had over 20 years of directing, choreographing and acting experience. Rico brings an intensity and deep physical breadth to every project.",
      image: ricoImage,
      pageID: "personal"
    },
    {
      name: "Benjamin Gagliardi",
      role: "Dramatist",
      bio: "A graduate of Theatre and Computer Science from the University of Wisconsin, Madison, Benjamin is an aspiring writer and actor. He finds particular joy in humor and comedy.",
      cta: "View Portfolio",
      image: benImage,
      pageID: "portfolio"
    },
  ];
  return (
    <section className="section-pad" style={{ padding: "96px 48px" }}>
      <div className="container" style={{marginBottom:80}}>
        <h2 className="serif leadership-title" style={{ fontSize: 40, marginBottom: 80 }}>Meet the <em>Founders</em></h2>
        <div className="grid-2" style={{ gap: 96 }}>
          {profiles.map(p => (
            <LeadershipProfile key={p.name} {...p} onCta={() => navigate(`/${p.pageID}`)} />
          ))}
        </div>
      </div>
      <div className="container">
        <SectionLabel label="The Company" />
        <div className="team-grid">
            <div className="team-company-grid">
              {company.map(m => <MemberCard key={m.name} member={m} />)}
            </div>
        </div>
      </div>
    </section>
  );
}

function MissionCTA() {
  const navigate = useNavigate();
  return (
    <section className="section-cta-bordered">
      <div className="section-cta-bordered__inner">
        <h2 className="serif" style={{ fontSize: 48, marginBottom: 24 }}>
          Don't miss <em className="color-primary"> Mother Rabbit!</em>
        </h2>
        <p className="body-lg" style={{ color: "rgba(229,226,225,0.6)", marginBottom: 48 }}>
          Join us for an evening of unbridled joy and laughter, as family and loved ones learn to forgive and work with each other.
        </p>
        <div className="flex-row" style={{ justifyContent: "center", gap: 24 }}>
          <button className="btn-primary" onClick={() => navigate("/tickets", { show: productions[0] })}>Reserve Your Ticket</button>
          <button className="btn-ghost-primary" onClick={() => navigate("/support")}>Become a Patron</button>
        </div>
      </div>
    </section>
  );
}

export default function MissionPage() {
  return (
    <main>
      <MissionHero />
      <MissionStatement />
      {/* TODO: Add this! <LocationSection /> */}
      <LeadershipSection />
      <TeamCTA />
      {/* <MissionCTA /> */}
      <Footer />
    </main>
  );
}