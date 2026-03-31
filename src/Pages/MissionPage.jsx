import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Main/Footer";
import ricoImage from "../Assets/People/Rico.webp";
import benImage from "../Assets/People/Benjamin.png";
import "../Style/index.css";
import productions from "../Data/CurrentShows"; 

function MissionHero() {
  return (
    <section className="mission-hero">
      <div className="mission-hero__bg-base" />
      <div className="mission-hero__bg-fade" />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <h1 className="display-xl color-on-surface" style={{ marginBottom: 24 }}>
          The Spirit of <span className="color-primary-container">Fire</span>
        </h1>
        <p className="body-lg color-on-surface-var" style={{ maxWidth: 600 }}>
          Spirit of Fire began with the recognition that art speaks to truth. The stories that move us are the ones that reveal truth, and what is truth but God? As artists we seek this truth in all that we do. As a theatre we bring wonderful classics and brave original stories to life.
        </p>
      </div>
    </section>
  );
}

function MissionStatement() {
  return (
    <section className="pat section-pad" style={{ padding: "96px 48px", position: "relative" }}>
      <div className="mission-statement__grid">
        <div>
          <h2 className="serif" style={{ fontSize: 44, lineHeight: 1.2, marginBottom: 32 }}>Our Mission:</h2>
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
            <div className="mission-statement__image-inner">🕊️</div>
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

function LeadershipProfile({ name, role, bio, cta, icon, image }) {
  const [hov, setHov] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div
      className="profile-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="profile-card__image-wrap">
        <div
          className="profile-card__image"
          style={{
            backgroundImage: `url(${image})`,
            filter: hov ? "grayscale(0)" : "grayscale(1)",
            cursor: hov ? "pointer": "auto"
          }}
        >
          <div className="profile-card__image-overlay" />
        </div>
        <div className="profile-card__icon-badge">
          <span style={{ fontSize: 16 }}>{icon}</span>
        </div>
      </div>
      <div className="profile-card__body">
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 4 }}>{name}</h3>
        <span className="label-xs color-primary" style={{ display: "block", marginBottom: 24 }}>{role}</span>
        <p className="body-md color-on-surface-var" style={{ marginBottom: 24 }}>{bio}</p>
        <span className="btn-text">{cta} →</span>
      </div>
    </div>
  );
}

function LeadershipSection() {
  const profiles = [
    {
      name: "Rico Heisler", role: "Artistic Director",
      bio: "A Bachelor of Arts graduate from the University of Northwestern (Saint Paul) and the J.D. William Mitchell College of Law, he has had over 20 years of directing, choreographing and acting experience. Rico brings an intensity and deep physical breadth to every project.",
      cta: "Read More", icon: "🎬", image: ricoImage,
    },
    {
      name: "Benjamin Gagliardi", role: "Dramatist",
      bio: "A graduate of Theatre and Computer Science from the University of Wisconsin, Madison, Benjamin is an aspiring writer and actor. He finds particular joy in humor and comedy.",
      cta: "View Portfolio", icon: "✍️", image: benImage,
    },
  ];
  return (
    <section className="section-pad" style={{ padding: "96px 48px" }}>
      <div className="container">
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 80 }}>Founders of <em>Spirit of Fire</em></h2>
        <div className="grid-2" style={{ gap: 96 }}>
          {profiles.map(p => <LeadershipProfile key={p.name} {...p} />)}
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
          <button className="btn-primary" onClick={() => navigate("/tickets", {show: productions[0]} )}>Reserve Your Ticket</button>
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
      <LocationSection />
      <LeadershipSection />
      <MissionCTA />
      <Footer />
    </main>
  );
}