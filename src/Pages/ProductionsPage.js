import useColors from "../Main/GlobalColors"
import Footer from "../Main/Footer"
import { useState, useEffect } from "react";
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg"
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg"
import missingRainImage from "../Assets/Covers/MissingTheRain.webp"

function ProductionsHero() {
  const c = useColors();
  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 48px 96px", display: "grid", gridTemplateColumns: "7fr 5fr", gap: 48, alignItems: "center" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ height: 1, width: 48, background: c.primaryContainer }} />
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primary }}>Current Season</span>
        </div>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", marginBottom: 32 }}>
          Mother <span style={{ color: c.primaryContainer }}>Rabbit</span>
        </h1>
        <p style={{ fontSize: 17, color: c.onSurfaceVariant, lineHeight: 1.7, maxWidth: 500, marginBottom: 40, fontWeight: 300 }}>
          Peter Kotski’s mother is sick. His father passed away years ago. His eccentric brothers are eccentric, and estranged. A family crisis brings them together--for better or worse--and their reunion begets all sorts of hijinks.
        </p>
        <button style={{ border: `1px solid ${c.outlineVariant}`, color: c.onSurface, padding: "12px 32px", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase" }}>
          Read More
        </button>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{
          aspectRatio: "3/4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${motherRabbitImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <div style={{ height: "100%", width: "100%", background: "linear-gradient(160deg,#1a0800,#0a0300)", opacity: "40%" }}></div>
        </div>
        <div style={{ position: "absolute", bottom: -24, left: -24, background: c.primaryContainer, padding: "10px 30px", fontSize: 22 }}>Original Comedy</div>
      </div>
    </section>
  );
}

function Performances({ setPage }) {
  const c = useColors();
  const prods = [
    { title: "Mother Rabbit", dates: "JUN 01 — JUL 01", badge: "Encore Performance", badgeColor: c.tertiaryContainer, badgeText: "#38017a", image: motherRabbitImage },
    { title: "Animal Crackers", dates: "TBD", badge: "Adaptation", badgeColor: c.surfaceContainer, badgeText: c.primary, image: animalCrackersImage },
    { title: "Missing the Rain", dates: "TBD", badge: "World Premiere", badgeColor: c.primaryContainer, badgeText: c.onPrimaryContainer, image: missingRainImage },
  ];
  return (
    <section style={{ background: c.surfaceLow, padding: "96px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, borderBottom: `1px solid rgba(89,66,56,0.2)`, paddingBottom: 28 }}>
          <div>
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontSize: 36, marginBottom: 8 }}>Performances</h2>
            <p style={{ fontSize: 11, color: c.outline, letterSpacing: ".2em", textTransform: "uppercase" }}>Active Productions • 2026</p>
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["←", "→"].map(a => <span key={a} style={{ color: c.primary, cursor: "pointer", fontSize: 20 }}>{a}</span>)}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 48 }}>
          {prods.map(p => <ProdCard key={p.title} {...p} onBook={() => setPage("tickets")} />)}
        </div>
      </div>
    </section>
  );
}

function ProdCard({ title, dates, badge, badgeColor, badgeText, onBook, image }) {
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
      <button onClick={onBook}
        onMouseEnter={e => { e.currentTarget.style.background = c.primaryContainer; e.currentTarget.style.color = c.onPrimaryContainer; }}
        onMouseLeave={e => { e.currentTarget.style.background = c.surfaceHighest; e.currentTarget.style.color = c.onSurface; }}
        style={{ width: "100%", padding: 16, fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase", background: c.surfaceHighest, border: `1px solid rgba(89,66,56,0.3)`, color: c.onSurface, transition: "all .5s" }}>
        Reserve Ticket
      </button>
    </div>
  );
}

function MainQuote() {
  const c = useColors();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <section style={{ padding: "160px 48px", textAlign: "center", maxWidth: 900, margin: "0 auto" }}>
      <div style={{ fontSize: 40, color: c.primaryContainer, marginBottom: 32 }}>✦</div>
      <blockquote style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 34, lineHeight: 1.4, color: c.onSurface, marginBottom: 40 }}>
        All art should have no other end and aim than the glory of God and the soul’s refreshment; where this is not remembered there is no real art but only a devilish hubbub. Soli Deo Gloria.
      </blockquote>
      <cite style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary, fontStyle: "normal" }}>Johann Sebastian Bach</cite>
    </section>
  );
}

export default function ProductionsPage({ setPage }) {
  return (
    <main className="pat" style={{ minHeight: "100vh" }}>
      <ProductionsHero />
      <Performances setPage={setPage} />
      <MainQuote />
      <Footer />
    </main>
  );
}