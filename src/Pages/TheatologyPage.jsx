import Footer from "../Main/Footer";
import { useEffect } from "react";
import "../Style/index.css";

function TheaHero() {
  return (
    <section style={{ position: "relative", height: 560, display: "flex", alignItems: "flex-end", padding: "0 48px 96px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div className="horse-background" style={{ position: "absolute", inset: 0 }} />
      <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 40% 30%,rgba(249,94,20,0.7) 0%,transparent 55%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span className="label-xs color-primary-container" style={{ letterSpacing: ".4em", display: "block", marginBottom: 20 }}>
          Spirit of Fire · Essay
        </span>
        <h1 className="display-xl color-on-surface" style={{ lineHeight: .88, marginBottom: 28 }}>Theatology</h1>
        <p className="serif-italic color-outline" style={{ fontSize: 15, letterSpacing: ".1em" }}>
          The Theology of Theatre
        </p>
      </div>
    </section>
  );
}

function TheaLede() {
  return (
    <section className="bg-surface-lowest" style={{ borderBottom: "1px solid rgba(89,66,56,0.15)" }}>
      <div className="essay-container" style={{ padding: "80px 48px" }}>
        <h2 className="serif-italic color-on-surface" style={{ fontSize: 34, lineHeight: 1.25 }}>
          What does Theatre mean to a Christian?
        </h2>
      </div>
    </section>
  );
}

function TheaBody() {
  return (
    <section className="pat bg-surface-low">
      <div className="essay-container" style={{ padding: "80px 48px 0" }}>

        <p className="essay-prose">
          In a world of so many forms and facets of Theatre, it is easy to believe that art is bigger than one philosophy. Why constrain yourself, when so many stories and such a vast amount of art exists? Because <span className="essay-strong">there is some objectivity in theatre</span>, and without guiding principals you drown in the noise of mediocrity. We all know from experience that there are inferior forms of theatrical expression, so the contention is not whether that is the case, but how to avoid theatre that does not resonate with the world.
        </p>
        <p className="essay-prose">
          To be clear, the focus is theatre as a general artform, and not the artforms that compose it. Within the structure of theatre is acting, painting, music, poetry, and many other forms with many methods that are not the focus. Theatre itself goes deeper than its many parts, and strikes at the core of what it is to be human.
        </p>

        <div className="essay-callout">
          <p className="label-tiny color-primary-container" style={{ letterSpacing: ".3em", marginBottom: 16 }}>A Definition</p>
          <p className="serif-italic color-on-surface essay-callout__quote">
            Theatre is the expression of some truth about human nature.
          </p>
          <p className="essay-callout__note">
            Truth is the conformity of the intellect with what the thing perceived actually is — the understanding of the objective reality of some existence. Inherently, the truth of something is its existence.
          </p>
        </div>

        <p className="essay-prose">
          <span className="essay-strong">God is the "I am"</span>, revealing Himself in scripture to be existence itself — thus God is truth itself. We humans are created in the image and likeness of God, and so our nature, while not uniform with the divine, is modelled after His nature.
        </p>
        <p className="essay-prose">
          Therefore, since Theatre is the expression of some truth about human nature, the acme of both truth and human nature being God, <span className="essay-em">Theatre is also the pursuit of expressing the divine.</span>
        </p>

        <div className="essay-ornament">✦ ✦ ✦</div>

        <p className="essay-prose">
          If Theatre is the expression of some truth about human nature, then when we posit an untruth — or lie in performance — <span className="essay-strong">we damage the dignity of those we are performing for.</span> To willfully, or otherwise, pervert the truth is to disrespect any who pursue it. So we must understand how to express our human nature.
        </p>
        <p className="essay-prose">
          We know the perfection of our nature is found in God, but we also know that our nature is inherently imperfect. Thus the expression of our human nature is true <span className="essay-em">both</span> when it seeks the divine nature, and also when it falls short in some way. It is always ordered towards divine perfection, and does not glorify the inability to do so — it rebukes it by presenting it bare to our soul. But importantly, <span className="essay-strong">moral perfection is not required.</span>
        </p>

        <div className="essay-virtue-grid">
          <div className="essay-virtue-card bg-surface-container">
            <p className="label-tiny color-primary-container" style={{ letterSpacing: ".3em", marginBottom: 14 }}>Virtue</p>
            <p className="serif essay-virtue-card__title">Found in the divine nature</p>
            <p className="essay-virtue-card__body">The expression of human nature reaching toward God — its proper end and highest form.</p>
          </div>
          <div className="essay-virtue-card bg-surface-high">
            <p className="label-tiny color-outline" style={{ letterSpacing: ".3em", marginBottom: 14 }}>Vice</p>
            <p className="serif essay-virtue-card__title">Found in our dissent from the divine</p>
            <p className="essay-virtue-card__body">Not glorified, but presented honestly — a mirror held to our fallen nature so the soul may recognize and recoil from it.</p>
          </div>
        </div>

        <p className="essay-prose" style={{ marginBottom: 0 }}>
          In representing both Virtue and Vice, we represent the human condition with truth, and so the Theatre fulfills its purpose. The only thing left is the <span className="essay-em">strength</span> in which it fulfills that purpose — and that falls upon the methods of acting, designing, and performing the show.
        </p>

      </div>

      <div className="essay-container" style={{ padding: "64px 48px 96px" }}>
        <div className="essay-closing">
          <span className="color-primary-container" style={{ fontSize: 24, display: "block", marginBottom: 20 }}>✦</span>
          <blockquote className="serif-italic color-on-surface essay-closing__quote">
            Soli Deo Gloria — to the glory of God alone.
          </blockquote>
          <cite className="label-xs color-primary" style={{ letterSpacing: ".35em", fontStyle: "normal" }}>
            The Spirit of Fire
          </cite>
        </div>
      </div>
    </section>
  );
}

export default function TheatologyPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <TheaHero />
      <TheaLede />
      <TheaBody />
      <Footer />
    </main>
  );
}