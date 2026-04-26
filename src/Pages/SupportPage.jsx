import Footer from "../Main/Footer";
import ShowModal from "../Modals/ShowModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productions from "../Data/CurrentShows";
import portfolio from "../Data/Portfolio"
import "../Style/index.css";

const TIERS = [
  { label: "Friend of the Fire", range: "$1 – $49", desc: "Recognition in our programmes." },
  { label: "Patron of the Arts", range: "$50 – $249", desc: "Programme credit and a reserved seat at opening night." },
  { label: "Founding Patron", range: "$250+", desc: "Named recognition, early ticket access, and a personal thank-you from the artistic director." },
];

// ── Hero ──────────────────────────────────────────────────────────────────────

function SupportHero() {
  return (
    <section style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 var(--pad-x) 80px", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, var(--bg-mission-a) 0%, var(--bg-mission-b) 100%)" }} />
      <div className="flames-background" style={{ opacity:"0.1", inset: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--surface-100) 0%, var(--surface-20) 70%)" }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <span className="label-xs color-primary-container" style={{ letterSpacing: ".4em", display: "block", marginBottom: 20 }}>Keep the Flame Alive</span>
        <h1 className="display-xl color-on-surface" style={{ marginBottom: 24 }}>
          Support <span className="color-primary-container">Us</span>
        </h1>
        <p className="body-md color-on-surface-var" style={{ fontSize: 17, maxWidth: 560 }}>
          Spirit of Fire runs on the generosity of patrons who believe in the power of theatre to uplift the soul. Every contribution — large or small — helps us keep telling stories that matter.
        </p>
      </div>
    </section>
  );
}

// ── Best ways to support ──────────────────────────────────────────────────────

function SupportWays() {
  const navigate = useNavigate();
  let scripts = portfolio.plays.slice(0, 3);
  if (scripts.length < 3) {
    for (let i = 0; i < 3 - scripts.length; i++) {
      scripts.push(portfolio.screenplays[i]);
    }
  }
  return (
    <section className="pat section-pad bg-surface-low">
      <div className="container">

        <div className="flex-row" style={{ alignItems: "center", gap: 24, marginBottom: 56 }}>
          <div className="divider-flame" style={{ height: 1, width: 48 }} />
          <h2 className="serif label-upper color-primary" style={{ fontSize: 13, letterSpacing: ".4em" }}>How to Support</h2>
        </div>

        <div className="grid-2" style={{ gap: "clamp(32px, 5vw, 72px)", alignItems: "start" }}>

          {/* Card 1 — Tickets */}
          <div style={{ background: "var(--surface-container)", border: "1px solid var(--outline-20)", padding: "clamp(28px, 4vw, 48px)" }}>
            <h3 className="serif-italic color-on-surface" style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.15, marginBottom: 16 }}>
              Come to a <span className="color-primary-container">Show</span>
            </h3>
            <p className="body-md color-on-surface-var" style={{ fontSize: 15, marginBottom: 32 }}>
              The single best way to support Spirit of Fire is to be in the audience. Every ticket sold directly funds our productions, our artists, and our ability to keep making theatre in Hudson, Wisconsin.
            </p>
            <div style={{ borderTop: "1px solid var(--outline-15)", paddingTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
              {productions.map(p => (
                <div>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "14px 0", borderBottom: "1px solid var(--outline-12)", gap: 16,
                  }}>
                    <div>
                      <p className="serif-italic color-on-surface" style={{ fontSize: 17, marginBottom: 3 }}>{p.title}</p>
                      <p className="label-xs color-outline" style={{ letterSpacing: ".2em" }}>{p.dates}</p>
                    </div>
                    {
                      p.link.length > 0 ?
                        <a className="btn-primary"
                          style={{ fontSize: 10, padding: "10px 20px", whiteSpace: "nowrap", textDecoration: "none" }}
                          href={p.link && p.link.length > 0 ? p.link : "https://events.ticketleap.com/events/spirit-of-fire"}
                          target="_blank"
                          rel="noreferrer"
                        > Reserve → </a>
                        :
                        <a className="btn-primary-disabled" disabled style={{ fontSize: 10, padding: "10px 20px", whiteSpace: "nowrap", textDecoration: "none" }}>
                          Coming soon →
                        </a>
                    }
                  </div>
                </div>
              ))}
            </div>
            <button
              className="btn-ghost"
              onClick={() => navigate("/productions")}
              style={{ width: "100%", marginTop: 24, textAlign: "center" }}
            >
              View All Productions
            </button>
          </div>

          {/* Card 2 — Scripts */}
          <div style={{ background: "var(--surface-container)", border: "1px solid var(--outline-20)", padding: "clamp(28px, 4vw, 48px)" }}>
            <h3 className="serif-italic color-on-surface" style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.15, marginBottom: 16 }}>
              Purchase a <span className="color-primary-container">Script</span>
            </h3>
            <p className="body-md color-on-surface-var" style={{ fontSize: 15, marginBottom: 32 }}>
              Our dramatist Benjamin Gagliardi writes original plays, screenplays, and one-acts. Purchasing a script supports both the writer and the company — and puts great storytelling in your hands.
            </p>
            <div style={{ borderTop: "1px solid var(--outline-15)", paddingTop: 24 }}>
              <p className="label-xs color-outline" style={{ letterSpacing: ".2em", marginBottom: 20 }}>
                Available Works
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 28 }}>
                {
                  scripts.map((w, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "12px 0", borderBottom: "1px solid var(--outline-12)",
                    }}>
                      <p className="serif-italic color-on-surface" style={{ fontSize: 16 }}>{w.title}</p>
                      <span className="label-xs color-outline">{w.style}</span>
                    </div>
                  ))}
              </div>
              <button
                className="btn-primary"
                onClick={() => navigate("/portfolio")}
                style={{ width: "100%", textAlign: "center" }}
              >
                Browse the Portfolio →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Direct donation coming soon ───────────────────────────────────────────────

function DonationComingSoon() {
  return (
    <section className="section-pad bg-surface">
      <div className="container">
        <div style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "clamp(40px, 6vw, 72px) clamp(28px, 4vw, 56px)",
          border: "1px solid var(--outline-20)",
          background: "var(--surface-low)",
          textAlign: "center",
          position: "relative",
        }}>
          {/* Top rule */}
          <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 2, background: "linear-gradient(to right, transparent, var(--primary-container), transparent)" }} />

          <span className="color-primary-container" style={{ fontSize: 28, display: "block", marginBottom: 24 }}>✦</span>

          <h2 className="serif-italic color-on-surface" style={{ fontSize: "clamp(26px, 3.5vw, 38px)", lineHeight: 1.2, marginBottom: 20 }}>
            Direct Donations<br />Coming Soon
          </h2>

          <p className="body-md color-on-surface-var" style={{ fontSize: 15, maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.85 }}>
            We are currently setting up a secure way to accept direct financial contributions. In the meantime, the most meaningful way to support Spirit of Fire is to purchase a ticket, bring a friend, or pick up one of our scripts.
          </p>

          <div style={{ borderTop: "1px solid var(--outline-15)", paddingTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
            <p className="label-xs color-outline" style={{ letterSpacing: ".2em", marginBottom: 8 }}>
              Want to be notified when giving opens?
            </p>
            <p className="body-md color-on-surface-var" style={{ fontSize: 14 }}>
              Reach out to us directly at{" "}
              <a
                href="mailto:spiritoffiretheatre@gmail.com"
                style={{ color: "var(--primary-container)", textDecoration: "none" }}
              >
                SpiritofFireTheatre@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Quote strip ───────────────────────────────────────────────────────────────

function QuoteStrip() {
  return (
    <section className="section-pad bg-surface-lowest" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 var(--pad-x)" }}>
        <div className="color-primary-container" style={{ fontSize: 28, marginBottom: 24 }}>✦</div>
        <blockquote className="serif-italic color-on-surface" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5, marginBottom: 28 }}>
          You have made us for yourself, O Lord, and our heart is restless until it rests in you.
        </blockquote>
        <cite className="label-xs color-primary" style={{ letterSpacing: ".4em", fontStyle: "normal" }}>
          Spirit of Fire Theatre Company
        </cite>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SupportPage() {
  const [modalShow, setModalShow] = useState(null);

  return (
    <main style={{ paddingTop: 65 }}>
      <SupportHero />
      <SupportWays />
      <DonationComingSoon />
      <QuoteStrip />
      {modalShow && (
        <ShowModal show={modalShow} onClose={() => setModalShow(null)} />
      )}
      <Footer />
    </main>
  );
}