import GlobalStyles from "../Main/GlobalStyles"
import useColors from "../Main/GlobalColors"
import Footer from "../Main/Footer"
import { useEffect } from "react";

function TheaHero() {
  const c = useColors();
  return (
    <section style={{ position: "relative", height: 560, display: "flex", alignItems: "flex-end", padding: "0 48px 96px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.15) 65%)" }} />
      <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 40% 30%,rgba(249,94,20,0.7) 0%,transparent 55%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer, display: "block", marginBottom: 20 }}>
          Spirit of Fire · Essay
        </span>
        <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 88, lineHeight: .88, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 28 }}>
          Theatology
        </h1>
        <p style={{ fontSize: 15, color: c.outline, letterSpacing: ".1em", fontStyle: "italic", fontFamily: "'Noto Serif',serif" }}>
          The Theology of Theatre
        </p>
      </div>
    </section>
  );
}

function TheaLede() {
  const c = useColors();
  return (
    <section style={{ background: c.surfaceLowest, borderBottom: `1px solid rgba(89,66,56,0.15)` }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 48px" }}>
        <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 34, lineHeight: 1.25, color: c.onSurface, marginBottom: 0 }}>
          What does Theatre mean to a Christian?
        </h2>
      </div>
    </section>
  );
}

function TheaBody() {
  const c = useColors();

  const prose = { fontSize: 17, lineHeight: 1.9, color: c.onSurfaceVariant, fontWeight: 300, marginBottom: 28 };
  const em = { color: c.primary, fontStyle: "italic" };
  const strong = { color: c.onSurface, fontWeight: 500 };

  return (
    <section className="pat" style={{ background: c.surfaceLow }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 48px 0" }}>

        {/* ¶1 */}
        <p style={prose}>
          In a world of so many forms and facets of Theatre, it is easy to believe that art is bigger than one philosophy. Why constrain yourself, when so many stories and such a vast amount of art exists? Because <span style={strong}>there is some objectivity in theatre</span>, and without guiding principals you drown in the noise of mediocrity. We all know from experience that there are inferior forms of theatrical expression, so the contention is not whether that is the case, but how to avoid theatre that does not resonate with the world.
        </p>
        <p style={prose}>
          To be clear, the focus is theatre as a general artform, and not the artforms that compose it. Within the structure of theatre is acting, painting, music, poetry, and many other forms with many methods that are not the focus. Theatre itself goes deeper than its many parts, and strikes at the core of what it is to be human.
        </p>

        {/* Definition callout */}
        <div style={{ borderLeft: `3px solid ${c.primaryContainer}`, paddingLeft: 32, margin: "52px 0" }}>
          <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 16 }}>A Definition</p>
          <p style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.6, color: c.onSurface }}>
            Theatre is the expression of some truth about human nature.
          </p>
          <p style={{ fontSize: 13, color: c.outline, marginTop: 16, lineHeight: 1.7 }}>
            Truth is the conformity of the intellect with what the thing perceived actually is — the understanding of the objective reality of some existence. Inherently, the truth of something is its existence.
          </p>
        </div>

        {/* ¶2 */}
        <p style={prose}>
          <span style={strong}>God is the "I am"</span>, revealing Himself in scripture to be existence itself — thus God is truth itself. We humans are created in the image and likeness of God, and so our nature, while not uniform with the divine, is modelled after His nature.
        </p>
        <p style={prose}>
          Therefore, since Theatre is the expression of some truth about human nature, the acme of both truth and human nature being God, <span style={em}>Theatre is also the pursuit of expressing the divine.</span>
        </p>

        {/* Divider ornament */}
        <div style={{ textAlign: "center", margin: "56px 0", color: c.outlineVariant, fontSize: 18, letterSpacing: "1em" }}>✦ ✦ ✦</div>

        {/* ¶3 */}
        <p style={prose}>
          If Theatre is the expression of some truth about human nature, then when we posit an untruth — or lie in performance — <span style={strong}>we damage the dignity of those we are performing for.</span> To willfully, or otherwise, pervert the truth is to disrespect any who pursue it. So we must understand how to express our human nature.
        </p>
        <p style={prose}>
          We know the perfection of our nature is found in God, but we also know that our nature is inherently imperfect. Thus the expression of our human nature is true <span style={em}>both</span> when it seeks the divine nature, and also when it falls short in some way. It is always ordered towards divine perfection, and does not glorify the inability to do so — it rebukes it by presenting it bare to our soul. But importantly, <span style={strong}>moral perfection is not required.</span>
        </p>

        {/* Two-column virtue/vice */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, margin: "52px 0" }}>
          <div style={{ background: c.surfaceContainer, padding: "36px 32px" }}>
            <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 14 }}>Virtue</p>
            <p style={{ fontFamily: "'Noto Serif',serif", fontSize: 19, color: c.onSurface, marginBottom: 12 }}>Found in the divine nature</p>
            <p style={{ fontSize: 13, color: c.onSurfaceVariant, lineHeight: 1.7, fontWeight: 300 }}>The expression of human nature reaching toward God — its proper end and highest form.</p>
          </div>
          <div style={{ background: c.surfaceHigh, padding: "36px 32px" }}>
            <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em", color: c.outline, marginBottom: 14 }}>Vice</p>
            <p style={{ fontFamily: "'Noto Serif',serif", fontSize: 19, color: c.onSurface, marginBottom: 12 }}>Found in our dissent from the divine</p>
            <p style={{ fontSize: 13, color: c.onSurfaceVariant, lineHeight: 1.7, fontWeight: 300 }}>Not glorified, but presented honestly — a mirror held to our fallen nature so the soul may recognize and recoil from it.</p>
          </div>
        </div>

        {/* ¶4 closing */}
        <p style={{ ...prose, marginBottom: 0 }}>
          In representing both Virtue and Vice, we represent the human condition with truth, and so the Theatre fulfills its purpose. The only thing left is the <span style={em}>strength</span> in which it fulfills that purpose — and that falls upon the methods of acting, designing, and performing the show.
        </p>

      </div>

      {/* Closing quote */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "64px 48px 96px" }}>
        <div style={{ borderTop: `1px solid rgba(89,66,56,0.3)`, paddingTop: 48, textAlign: "center" }}>
          <span style={{ fontSize: 24, color: c.primaryContainer, display: "block", marginBottom: 20 }}>✦</span>
          <blockquote style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 22, lineHeight: 1.6, color: c.onSurface, marginBottom: 20 }}>
            Soli Deo Gloria — to the glory of God alone.
          </blockquote>
          <cite style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".35em", color: c.primary, fontStyle: "normal" }}>
            The Spirit of Fire
          </cite>
        </div>
      </div>
    </section>
  );
}

export default function TheatologyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <GlobalStyles />
      <main style={{ paddingTop: 80 }}>
        <TheaHero />
        <TheaLede />
        <TheaBody />
        <Footer />
      </main>
    </>
  );
}