import useColors from "../Main/GlobalColors"
import Footer from "../Main/Footer"
import { useState, useEffect } from "react";
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg"
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg"
import missingRainImage from "../Assets/Covers/MissingTheRain.webp"

function ShowCard({ title, dates, badge, badgeColor, badgeText, image }) {
  const c = useColors();
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ position: "relative", paddingTop: "150%", overflow: "hidden", background: c.surfaceHighest, marginBottom: 24 }}>
        <div style={{
          position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0800,#050200)", transform: hov ? "scale(1.05)" : "scale(1)", filter: hov ? "grayscale(0%)" : "grayscale(100%)", transition: "all .7s ease", display: "flex", alignItems: "center", justifyContent: "center",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <div style={{ height: "100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity: "30%" }}></div>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,0.7) 0%,transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: 20, left: 20 }}>
          <span style={{ background: badgeColor, color: badgeText, padding: "4px 12px", fontSize: 9, fontWeight: 700, letterSpacing: ".25em", textTransform: "uppercase" }}>{badge}</span>
        </div>
      </div>
      <h3 style={{ fontFamily: "'Noto Serif',serif", fontSize: 22, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 8 }}>{title}</h3>
      <p style={{ fontSize: 10, color: c.outline, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>{dates}</p>
    </div>
  );
}

function HeroSection({ setPage }) {
  const c = useColors();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <section style={{ position: "relative", height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,#0a0000 0%,#1a0800 40%,#0d0500 100%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .15, backgroundImage: "radial-gradient(ellipse at 30% 50%,rgba(249,94,20,0.4) 0%,transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(19,19,19,0.95) 40%,rgba(19,19,19,0.3) 100%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 88, lineHeight: .9, letterSpacing: "-.03em", color: c.onSurface }}>
            Soli <span style={{ color: c.primaryContainer }}>Deo</span><br />Gloria
          </h1>
          <p style={{ fontSize: 18, color: c.onSurfaceVariant, maxWidth: 420, lineHeight: 1.7, fontWeight: 300 }}>
            To the glory of God alone.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <button onClick={() => setPage("productions")} style={{ background: c.primaryContainer, color: c.onPrimaryContainer, padding: "16px 32px", fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>View Season</button>
            <button onClick={() => setPage("mission")} style={{ border: `1px solid ${c.outlineVariant}`, color: c.onSurface, padding: "16px 32px", fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Our Mission</button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ position: "relative", width: 280, height: 420 }}>
            <div style={{ position: "absolute", inset: 0, border: `1px solid rgba(89,66,56,0.4)` }} />
            <div style={{ position: "absolute", inset: -16, border: `1px solid rgba(249,94,20,0.15)`, zIndex: -1 }} />
            <div style={{
              height: "100%", width: "100%",
              backgroundImage: `url(${motherRabbitImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
              <div style={{ height: "100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity: "40%" }}></div>
            </div>
            <div style={{ position: "absolute", bottom: 24, left: -48, background: c.surface, padding: "20px 24px" }}>
              <span style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", color: c.primaryContainer, fontSize: 20, display: "block" }}>Returning Soon</span>
              <span style={{ textTransform: "uppercase", letterSpacing: ".15em", fontSize: 10 }}>Mother Rabbit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpiritSection() {
  const c = useColors();
  return (
    <section className="pat" style={{ padding: "96px 0", background: c.surfaceLow }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 48, lineHeight: 1.1 }}>
            Welcome to<br />the <span style={{ color: c.primaryContainer }}>Spirit of Fire</span>
          </h2>
          <div style={{ height: 3, width: 80, background: c.primaryContainer }} />
          <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontWeight: 300 }}>At Spirit of Fire, we tell stories that encourage, inspire, and challenge people to see all of life and experience–past, present, and future–by the light of Jesus Christ.</p>
          <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontWeight: 300 }}>Fire represents the ferocious dedication and passion in any project we undertake. It represents the indwelling Holy Spirit that guides and inspires, and it represents the grace of our Lord we tirelessly seek. Thus, we desire always to have the Spirit, or the essence of this Fire.</p>
          <span style={{ color: c.primary, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer" }}>Learn More →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ paddingTop: 48 }}>
            <div style={{ width: "100%", height: 360, background: "linear-gradient(180deg,#1a0a00,#0d0500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, filter: "grayscale(1)", transition: "filter .7s" }}
              onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
              onMouseLeave={e => e.currentTarget.style.filter = "grayscale(1)"}>📚</div>
          </div>
          <div>
            <div style={{ width: "100%", height: 460, background: "linear-gradient(180deg,#0d0500,#1a0a00)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>🔥</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NextOnStageSection() {
  const c = useColors();
  const shows = [
    { title: "Mother Rabbit", dates: "JUN 01 — JUL 01", badge: "Encore Performance", badgeColor: c.tertiaryContainer, badgeText: "#38017a", image: motherRabbitImage },
    { title: "Animal Crackers", dates: "TBD", badge: "Adaptation", badgeColor: c.surfaceContainer, badgeText: c.primary, image: animalCrackersImage },
    { title: "Missing the Rain", dates: "TBD", badge: "World Premiere", badgeColor: c.primaryContainer, badgeText: c.onPrimaryContainer, image: missingRainImage },
  ];
  return (
    <section style={{ padding: "96px 0", background: c.surface }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
          <div>
            <span style={{ color: c.primary, fontSize: 11, letterSpacing: ".3em", textTransform: "uppercase", fontWeight: 600 }}>Upcoming Performances</span>
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 56, marginTop: 12 }}>Next on <em>Stage</em></h2>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["←", "→"].map(a => (
              <button key={a} style={{ width: 44, height: 44, border: `1px solid ${c.outlineVariant}`, color: c.onSurface, fontSize: 16 }}>{a}</button>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32 }}>
          {shows.map(s => <ShowCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const c = useColors();
  const items = [
    { col: "1/3", row: "1/3", label: "Picture Placeholder", grad: "linear-gradient(135deg,#1a0800,#0a0300)" },
    { col: "3/4", row: "1/2", label: "Picture Placeholder", grad: "linear-gradient(135deg,#0a0800,#050200)" },
    { col: "4/5", row: "1/3", label: "Picture Placeholder", grad: "linear-gradient(135deg,#0a0d1a,#050508)" },
    { col: "3/4", row: "2/3", label: "Picture Placeholder", grad: "linear-gradient(135deg,#1a0a00,#080300)" },
  ];
  return (
    <section style={{ padding: "96px 0", background: c.surfaceLowest, overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", textAlign: "center", marginBottom: 64 }}>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 48, marginBottom: 12 }}>Uplifting the <span style={{ color: c.primary }}>Soul</span></h2>
        <p style={{ color: c.outline, textTransform: "uppercase", letterSpacing: ".4em", lineHeight: "2em", fontSize: 10 }}>Considering it an honour to employ</p>
        <p style={{ color: c.outline, textTransform: "uppercase", letterSpacing: ".4em", lineHeight: "2em", fontSize: 10 }}>and develop the gifts received from God</p>
      </div>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridTemplateRows: "repeat(2,260px)", gap: 8 }}>
        {items.map((g, i) => (
          <div key={i} style={{ gridColumn: g.col, gridRow: g.row, position: "relative", overflow: "hidden", cursor: "pointer", background: g.grad }}
            onMouseEnter={e => e.currentTarget.querySelector(".gl").style.opacity = 1}
            onMouseLeave={e => e.currentTarget.querySelector(".gl").style.opacity = 0}>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, opacity: .2 }}>⛪</div>
            <div className="gl" style={{ position: "absolute", bottom: 24, left: 24, opacity: 0, transition: "opacity .4s" }}>
              <p style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 22, color: c.onSurface }}>{g.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection({ setPage }) {
  const c = useColors();
  return (
    <section style={{ padding: "160px 24px", background: c.surface, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(249,94,20,0.07) 0%,transparent 70%)" }} />
      <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 56, maxWidth: 700, marginBottom: 48, lineHeight: 1.15, position: "relative" }}>
        Keep the <span style={{ color: c.primaryContainer }}>Flame</span> alive
      </h2>
      <div style={{ display: "flex", gap: 24, position: "relative" }}>
        <button onClick={() => setPage("support")} style={{ padding: "20px 48px", background: c.onSurface, color: c.surface, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Become a Patron</button>
        <button onClick={() => setPage("participate")} style={{ padding: "20px 48px", border: `1px solid ${c.outline}`, color: c.onSurface, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Get Involved</button>
      </div>
    </section>
  );
}

export default function HomePage({ setPage }) {
  return (
    <main>
      <HeroSection setPage={setPage} />
      <SpiritSection />
      <NextOnStageSection />
      <GallerySection />
      <CTASection setPage={setPage} />
      <Footer />
    </main>
  );
}