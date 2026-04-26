import facebookLogo from "../Assets/Logos/facebook.png";
import instagramLogo from "../Assets/Logos/instagram.png";
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailTemplates from "../Data/EmailTemplates";

const LINKS = [
  { title: "Theatology", link: "/theatology" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Archive", link: "/past-productions" },
];

const SOCIALS = [
  { title: "Facebook",  logo: facebookLogo,  link: "https://www.facebook.com/profile.php/?id=61583353555340" },
  { title: "Instagram", logo: instagramLogo, link: "https://www.instagram.com/spiritoffiretheatre/" },
];

export default function Footer() {
  const [userEmail, setUserEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const navigate = useNavigate();

  async function sendEmail() {
    if (!userEmail || status !== "idle") return;
    setStatus("sending");
    try {
      await emailjs.send(
        'service_vgqmgoo',
        emailTemplates["updates"],
        { email: userEmail },
        '0_BUIZUi6PwsND1oX'
      );
      setStatus("sent");
      setUserEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  function handleKey(e) {
    if (e.key === "Enter") sendEmail();
  }

  return (
    <footer className="footer">
      <div className="footer__grid">

        <div>
          <div className="footer__logo">Spirit of Fire</div>
          <p className="serif-italic footer__tagline" />
        </div>

        <div className="flex-col" style={{ gap: 16 }}>
          <h4 className="footer__heading">Contact Us</h4>
          <a className="footer__social" href="mailto:spiritoffiretheatre@gmail.com" target="_blank" rel="noreferrer">
            <img src={"favicon.ico"} alt="email" className="footer__social-icon" />
            SpiritofFireTheatre@gmail.com
          </a>
          {SOCIALS.map(s => (
            <a key={s.title} className="footer__social" href={s.link} target="_blank" rel="noreferrer">
              <img src={s.logo} alt={s.title} className="footer__social-icon" />
              {s.title}
            </a>
          ))}
        </div>

        <div className="flex-col" style={{ gap: 16 }}>
          <h4 className="footer__heading">More Information</h4>
          {LINKS.map(l => <button key={l.title + '-footer'} className="footer__social" onClick={() => navigate(l.link)}>{l.title}</button>)}
        </div>

        <div>
          <h4 className="footer__heading" style={{ marginBottom: 24 }}>
            Sign up for Spirit of Fire Updates
          </h4>

          {/* ── Newsletter input ── */}
          {status === "sent" ? (
            <div className="footer__newsletter-success">
              <span className="footer__newsletter-success__glyph">✦</span>
              <span className="footer__newsletter-success__msg">You're on the list.</span>
            </div>
          ) : (
            <>
              <div
                className="footer__newsletter"
                style={{
                  borderBottomColor: status === "error"
                    ? "rgba(220,80,60,0.6)"
                    : status === "sending"
                    ? "var(--primary-container)"
                    : undefined,
                }}
              >
                <input
                  className="footer__newsletter-input"
                  placeholder={status === "error" ? "Try again…" : "Email Address"}
                  type="email"
                  value={userEmail}
                  onChange={e => { setUserEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                  onKeyDown={handleKey}
                  disabled={status === "sending"}
                />
                <button
                  className="footer__newsletter-btn"
                  onClick={sendEmail}
                  disabled={!userEmail || status === "sending"}
                  style={{ opacity: !userEmail || status === "sending" ? 0.4 : 1, cursor: !userEmail ? "default" : "pointer" }}
                  aria-label="Subscribe"
                >
                  {status === "sending" ? "…" : "→"}
                </button>
              </div>
              {status === "error" && (
                <p style={{ fontSize: 10, color: "rgba(220,80,60,0.8)", marginTop: 6, letterSpacing: ".05em" }}>
                  Something went wrong — please try again.
                </p>
              )}
            </>
          )}

          <p className="footer__copyright" style={{ marginTop: 20 }}>
            © 2026 Spirit of Fire Theatre Company. Soli Deo Gloria.
          </p>
        </div>

      </div>
    </footer>
  );
}