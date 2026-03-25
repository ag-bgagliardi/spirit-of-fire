import GlobalStyles from "../Main/GlobalStyles"
import useColors from "../Main/GlobalColors"
import Footer from "../Main/Footer"
import { useState, useEffect } from "react";
import ricoImage from "../Assets/People/Rico.webp"
import benImage from "../Assets/People/Benjamin.jpeg"
// import kariImage from "../Assets/People/Kari.jpg"
import silasImage from "../Assets/People/SilasWide.jpeg"
import madelineImage from "../Assets/People/MadelineWide.jpeg"
import barbaraImage from "../Assets/People/Barbara.jpg"
import stephanieImage from "../Assets/People/Stephanie.jpg"

const TEAM = [
  {
    name: "Rico Heisler",
    title: "Artistic Director",
    badge: "Cofounder",
    roles: ["Actor", "Director", "Choreographer"],
    image: ricoImage,
    icon: "🎬",
    col: "founder",
  },
  {
    name: "Benjamin Gagliardi",
    title: "Dramatist",
    badge: "Cofounder",
    roles: ["Actor", "Writer", "Songwriter"],
    image: benImage,
    icon: "✍️",
    col: "founder",
  },
  {
    name: "Madeline Gagliardi",
    title: "Administrator",
    roles: ["Manager", "Actor", "Singer"],
    image: madelineImage,
    icon: "◆",
    col: "company",
  },
  // {
  //   name: "Kari Heisler",
  //   title: "Music Director",
  //   roles: ["Actor", "Singer", "Director"],
  //   image: "🎵",
  //   icon: "◆",
  //   col: "company",
  // },
  {
    name: "Silas Heisler",
    title: "Creative Consultant",
    roles: ["Actor", "Singer"],
    image: silasImage,
    icon: "◆",
    col: "company",
  },
  {
    name: "Barbara Gagliardi",
    title: "Creative Designer",
    roles: ["Actor", "Singer", "Director", "Designer"],
    image: barbaraImage,
    icon: "◆",
    col: "company",
  },
  // {
  //   name: "John Gagliardi",
  //   title: "Set Builder",
  //   roles: ["Designer", "Architect"],
  //   image: "🎨",
  //   icon: "◆",
  //   col: "company",
  // },
  {
    name: "Stephanie Wilson",
    title: "Director of Marketing",
    roles: ["Designer", "Marketer"],
    image: stephanieImage,
    icon: "◆",
    col: "company",
  },
];

function MemberCard({ member, featured }) {
  const c = useColors();
  const [hov, setHov] = useState(false);

  if (featured) {
    return (
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "grid", gridTemplateColumns: "200px 1fr", gap: 40,
          background: hov ? c.surfaceHigh : c.surfaceLow,
          border: `1px solid ${hov ? "rgba(249,94,20,0.3)" : "rgba(89,66,56,0.2)"}`,
          transition: "all .4s", padding: 40, position: "relative", overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: hov ? "radial-gradient(ellipse at top left,rgba(249,94,20,0.06),transparent 70%)" : "none", transition: "all .5s", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "3/4", backgroundImage: `url(${member.image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64,
            filter: hov ? "grayscale(0)" : "grayscale(1)", transition: "filter .6s",
          }}>
            <div style={{ height:"100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity:"30%" }}></div>
          </div>
          <div style={{ position: "absolute", top: -10, right: -10, background: c.primaryContainer, padding: "8px 10px", fontSize: 12, color: c.onPrimaryContainer }}>
            {member.icon}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
          <div>
            {member.badge && (
              <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, display: "block", marginBottom: 10 }}>
                ✦ {member.badge}
              </span>
            )}
            <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 34, lineHeight: 1.1, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 6 }}>{member.name}</h3>
            <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".25em", color: c.outline }}>{member.title}</span>
          </div>
          <div style={{ height: 1, width: 48, background: c.outlineVariant }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {member.roles.map(r => (
              <span key={r} style={{
                fontSize: 9, textTransform: "uppercase", letterSpacing: ".2em",
                border: `1px solid rgba(89,66,56,0.5)`, padding: "4px 12px",
                color: c.onSurfaceVariant,
              }}>{r}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? c.surfaceHigh : c.surfaceLow,
        border: `1px solid ${hov ? "rgba(249,94,20,0.25)" : "rgba(89,66,56,0.15)"}`,
        transition: "all .4s", overflow: "hidden", position: "relative",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: hov ? "radial-gradient(ellipse at top,rgba(249,94,20,0.06),transparent 70%)" : "none", transition: "all .5s", pointerEvents: "none" }} />
      <div style={{
        aspectRatio: "4/3", backgroundImage: `url(${member.image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64,
        filter: hov ? "grayscale(0)" : "grayscale(1)", transition: "filter .6s",
        position: "relative",
      }}>
        <div style={{ height:"100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity:"30%" }}></div>
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
          background: hov ? c.primaryContainer : "transparent", transition: "background .4s",
        }} />
      </div>
      <div style={{ padding: "24px 28px 28px" }}>
        <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 4 }}>{member.name}</h3>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: c.outline, display: "block", marginBottom: 16 }}>{member.title}</span>
        <div style={{ height: 1, background: "rgba(89,66,56,0.3)", marginBottom: 16 }} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {member.roles.map(r => (
            <span key={r} style={{
              fontSize: 9, textTransform: "uppercase", letterSpacing: ".15em",
              border: `1px solid rgba(89,66,56,0.4)`, padding: "3px 10px",
              color: c.onSurfaceVariant,
            }}>{r}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamHero() {
  const c = useColors();
  return (
    <section style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 48px 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 70% 40%,rgba(249,94,20,0.5) 0%,transparent 60%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer, display: "block", marginBottom: 20 }}>The Company</span>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 24 }}>
          Our <span style={{ color: c.primaryContainer }}>Team</span>
        </h1>
        <p style={{ fontSize: 17, color: c.onSurfaceVariant, maxWidth: 540, lineHeight: 1.7, fontWeight: 300 }}>
          A small company of devoted artists — actors, directors, writers, and makers — united by a shared calling to tell stories that glorify God.
        </p>
      </div>
    </section>
  );
}

function TeamSection() {
  const c = useColors();
  const founders = TEAM.filter(m => m.col === "founder");
  const company = TEAM.filter(m => m.col === "company");
  return (
    <section className="pat" style={{ padding: "96px 0", background: c.surfaceLow }}>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "0 auto", padding: "0 50px", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 64 }}>
            <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 13, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary }}>Founders</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {founders.map(m => <MemberCard key={m.name} member={m} featured />)}
          </div>
        </div>
        <div style={{ margin: "0 auto", padding: "0 50px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 64 }}>
            <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 13, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary }}>The Company</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
            {company.map(m => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCTA() {
  const c = useColors();
  return (
    <section style={{ padding: "120px 48px", background: c.surfaceLowest, borderTop: `1px solid rgba(89,66,56,0.15)`, textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(249,94,20,0.06) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
        <span style={{ fontSize: 32, display: "block", marginBottom: 24 }}><img src="../favicon.ico" /></span>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 44, marginBottom: 20, lineHeight: 1.2 }}>
          Feel the <span style={{ color: c.primaryContainer }}>calling?</span>
        </h2>
        <p style={{ color: c.onSurfaceVariant, fontSize: 16, lineHeight: 1.8, marginBottom: 48, fontWeight: 300 }}>
          Spirit of Fire is always looking for passionate artists who share our devotion to excellence, craft, and the glory of God.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          <button style={{ background: c.primaryContainer, color: c.onPrimaryContainer, padding: "16px 40px", fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Get Involved</button>
          <button style={{ border: `1px solid rgba(255,181,154,0.3)`, color: c.primary, padding: "16px 40px", fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Our Mission</button>
        </div>
      </div>
    </section>
  );
}

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <GlobalStyles />
      <main style={{ paddingTop: 80 }}>
        <TeamHero />
        <TeamSection />
        <TeamCTA />
        <Footer />
      </main>
    </>
  );
}