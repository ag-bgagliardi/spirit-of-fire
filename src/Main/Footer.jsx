import facebookLogo from "../Assets/Logos/facebook.png";
import instagramLogo from "../Assets/Logos/instagram.png";

const LINKS = ["Privacy Policy", "Terms of Service", "Archive"];

const SOCIALS = [
  { title: "Facebook", logo: facebookLogo, link: "https://www.facebook.com/profile.php/?id=61583353555340" },
  { title: "Instagram", logo: instagramLogo, link: "https://www.instagram.com/spiritoffiretheatre/" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__logo">Spirit of Fire</div>
          <p className="serif-italic footer__tagline">
            Artwork is courtesy of <a href="https://www.fullofeyes.com/" target="_blank" style={{ color: "#ffb59a" }}>Fullofeyes</a>, a beautiful library of exegetical art and animation, completely free for the Global Church.
          </p>
        </div>
        <div className="flex-col" style={{ gap: 16 }}>
          <h4 className="footer__heading">More Information</h4>
          {LINKS.map(l => (
            <span key={l} className="footer__link">{l}</span>
          ))}
        </div>
        <div className="flex-col" style={{ gap: 16 }}>
          <h4 className="footer__heading">Contact Us</h4>
          <a key="spiritoffire-link" className="footer__social" href="mailto:spiritoffiretheatre@gmail.com" target="_blank" rel="noreferrer">
            <img src={"favicon.ico"} alt="spiritoffire email link" className="footer__social-icon" />
            SpiritofFireTheatre@gmail.com
          </a>
          {SOCIALS.map(s => (
            <a key={s.title} className="footer__social" href={s.link} target="_blank" rel="noreferrer">
              <img src={s.logo} alt={s.title} className="footer__social-icon" />
              {s.title}
            </a>
          ))}
        </div>
        <div>
          <h4 className="footer__heading" style={{ marginBottom: 24 }}>Sign up for Spirit of Fire Updates</h4>
          <div className="footer__newsletter">
            <input className="footer__newsletter-input" placeholder="Email Address" type="email" />
            <span className="footer__newsletter-btn">→</span>
          </div>
          <p className="footer__copyright">© 2026 Spirit of Fire Theatre Company. Soli Deo Gloria.</p>
        </div>
      </div>
    </footer>
  );
}