import useColors from "../Main/GlobalColors"
import { useState, useEffect } from "react";
import Footer from "../Main/Footer"
import ricoImage from "../Assets/People/Rico.webp"
import benImage from "../Assets/People/Benjamin.png"

function MissionHero() {
  const c = useColors();
  return (
    <section style={{ position: "relative", height: 820, display: "flex", alignItems: "flex-end", padding: "0 48px 96px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 88, lineHeight: .92, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 24 }}>
          The Spirit of <span style={{ color: c.primaryContainer }}>Fire</span>
        </h1>
        <p style={{ fontSize: 18, color: c.onSurfaceVariant, maxWidth: 600, lineHeight: 1.7, fontWeight: 300 }}>
          Spirit of Fire began with the recognition that art speaks to truth. The stories that move us are the ones that reveal truth, and what is truth but God? As artists we seek this truth in all that we do. As a theatre we bring wonderful classics and brave original stories to life.
        </p>
      </div>
    </section>
  );
}

function MissionStatement() {
  const c = useColors();
  return (
    <section className="pat" style={{ padding: "96px 48px", position: "relative" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", display: "grid", gridTemplateColumns: "9fr 3fr", gap: 48, alignItems: "center" }}>
        <div>
          <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 44, lineHeight: 1.2, marginBottom: 32 }}>
            Our Mission:
          </h2>
          <h2 style={{ fontSize: "1.9em", lineHeight: 2, marginBottom: 32 }}>
            To tell stories that<em style={{ color: c.primaryContainer }}> encourage, inspire, and challenge</em> people to see all of life and experience: past, present, and future, by the <em style={{ color: c.primaryContainer }}>light of Jesus Christ.</em>
          </h2>
          <h2 style={{ fontFamily: "'Noto Serif',serif", textTransform: "uppercase", letterSpacing: ".2em", padding: "20px 0px" }}>Ideals:</h2>
          <ul style={{ paddingLeft: 40 }}>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>To create and develop art that exemplify Christian virtues of Faith, Hope, Love, and Joy.</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>To tell stories that encourage, inspire, and challenge people to see all of life and experience–past, present, and future–by the light of Jesus Christ.</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>A story worth telling is one that moves us closer to God, whether that be joy in what we have seen, or recognition of our own human nature</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>That human nature is known and revealed in God.</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>That one can pursue art with their whole heart and mind without abandoning morality.</li>
            <li style={{ color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 24 }}>The crossover of art: music, theatre, film, poetry, painting, and all its forms should always be encouraged.</li>
          </ul>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ aspectRatio: "4/5", background: "#1a0800", padding: 16, transform: "rotate(2deg)" }}>
            <div style={{ width: "100%", height: "100%", background: "linear-gradient(160deg,#1a0800,#050201)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80 }}>🕊️</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const c = useColors();
  return (
    <section style={{ background: c.surfaceLowest, padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer }}>Our Theatre Space</span>
          <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 44, marginTop: 16 }}>Name For Our Theatre Space</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 2 }}>
          <div style={{ width: "100%", height: 320, background: "linear-gradient(120deg,#1a1a0a,#0a0a05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, filter: "grayscale(1)", transition: "filter 1s" }}
            onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
            onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}>🏭</div>
          <div style={{ background: c.surfaceHigh, padding: 48 }}>
            <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: c.primary, marginBottom: 16 }}>Hope &amp; Faith</h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: c.onSurfaceVariant }}>Founded in XXXX, Fixed stuff up.</p>
          </div>
          <div style={{ background: c.surfaceContainer, padding: 48 }}>
            <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: c.primary, marginBottom: 16 }}>Theatre for the Soul</h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: c.onSurfaceVariant }}>Our time and rehearsal process is centered on our love and devotion to Jesus Christ, through prayer and dilligent work.</p>
          </div>
          <div style={{ width: "100%", height: 320, background: "linear-gradient(120deg,#0a0a05,#151005)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, filter: "grayscale(1)", transition: "filter 1s" }}
            onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
            onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}>🎭</div>
        </div>
      </div>
    </section>
  );
}

function LeadershipProfile({ name, role, bio, cta, icon, image }) {
  const c = useColors();
  const [hov, setHov] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
      <div style={{ position: "relative", width: 200, flexShrink: 0 }}>
        <div style={{
          aspectRatio: "3/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: hov ? "grayscale(0)" : "grayscale(1)",
          transition: "filter .6s"
        }}>
          <div style={{ height: "100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity: "40%" }}></div>
        </div>
        <div style={{ position: "absolute", top: -12, right: -12, background: c.primaryContainer, padding: 10 }}>
          <span style={{ fontSize: 16 }}>{icon}</span>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 28, marginBottom: 4 }}>{name}</h3>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: c.primary, display: "block", marginBottom: 24 }}>{role}</span>
        <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>{bio}</p>
        <span style={{ color: c.primary, fontSize: 11, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", cursor: "pointer" }}>{cta} →</span>
      </div>
    </div>
  );
}

function LeadershipSection() {
  const c = useColors();
  const profiles = [
    {
      name: "Rico Heisler",
      role: "Artistic Director",
      bio: "A Bachelor of Arts graduate from the University of Northwestern (Saint Paul) and the J.D. William Mitchell College of Law, he has had over 20 years of directing, choreographing and acting experience. Rico brings and intensity and deep physical breadth to every project.",
      cta: "Read More",
      icon: "🎬",
      image: ricoImage
    },
    {
      name: "Benjamin Gagliardi",
      role: "Dramatist",
      bio: "A graduate of Theatre and Computer Science from the University of Wisconsin, Madison, Benjamin is an aspiring writer and actor. He finds particular joy in humor and comedy",
      cta: "View Portfolio",
      icon: "✍️",
      image: benImage
    },
  ];
  return (
    <section style={{ padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 40, marginBottom: 80 }}>Founders of <em>Spirit of Fire</em></h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96 }}>
          {profiles.map(p => <LeadershipProfile key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}

function MissionCTA({ setPage }) {
  const c = useColors();
  return (
    <section style={{ padding: "96px 48px", background: c.surfaceLow, borderTop: `1px solid rgba(89,66,56,0.1)`, borderBottom: `1px solid rgba(89,66,56,0.1)` }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 48, marginBottom: 24 }}>Don't miss <em style={{ color: c.primary }}> Mother Rabbit!</em></h2>
        <p style={{ color: "rgba(229,226,225,0.6)", marginBottom: 48, fontSize: 17, lineHeight: 1.7 }}>Join us for an evening of unbridled joy and laughter, as family and loved ones learn to forgive and work with each other.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
          <button onClick={() => setPage("tickets")} style={{ background: c.primaryContainer, color: c.onPrimaryContainer, padding: "16px 40px", fontSize: 12, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>Reserve Your Ticket</button>
          <button onClick={() => setPage("support")} style={{ border: `1px solid rgba(255,181,154,0.3)`, color: c.primary, padding: "16px 40px", fontSize: 12, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase" }}>Become a Patron</button>
        </div>
      </div>
    </section>
  );
}

export default function MissionPage({ setPage }) {
  return (
    <main>
      <MissionHero />
      <MissionStatement />
      <LocationSection />
      <LeadershipSection />
      <MissionCTA setPage={setPage} />
      <Footer />
    </main>
  );
}