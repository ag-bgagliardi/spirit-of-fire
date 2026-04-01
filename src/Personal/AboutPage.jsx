import { useState } from "react";
import { useNavigate } from "react-router-dom";
import benImage from "../Assets/People/Benjamin2.jpg";
import ricoImage from "../Assets/People/Rico.webp";
import silasImage from "../Assets/People/Silas.jpg";
import Footer from "../Main/Footer";
import "./about.css";
import "../Style/typography.css";
// TODO make this a page of Everyone's bio that clicking links to

/* ── Page ── */
export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <main className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="about-hero__fade" />

        <div className="about-hero__inner container">
          {/* Photo */}
          <div className="about-hero__photo-wrap">
            <div className="about-hero__photo-border-outer" />
            <div className="about-hero__photo-border" />
            <div className="about-hero__photo" style={{ backgroundImage: `url(${ricoImage})` }} />
            <div className="about-hero__photo-overlay" />
          </div>

          {/* Identity */}
          <div className="about-hero__identity">
            <p className="about-hero__eyebrow">Spirit of Fire</p>
            <h1 className="about-hero__name display-xl">Rico<br />Heisler</h1>
            <div className="about-hero__roles">
              {["Actor", "Director", "Choreographer"].map(r => (
                <span key={r} className="about-hero__role-chip">{r}</span>
              ))}
            </div>
            <div style={{
              width: "75%",
              padding: "20px 0px"
            }}>
              <span class="color-on-surface-var"></span>
            </div>
            <a href="mailto:rico.muscles@gmail.com" className="about-hero__contact">
              rico.muscles@gmail.com
            </a>
            {/* <button className="btn-primary" onClick={() => navigate("/benjamin-resume")} style={{marginLeft: 40, padding: "10px 20px"}}>View Resume</button> */}
          </div>

          {/* Photo */}
          <div className="about-hero__photo-wrap">
            <div className="about-hero__photo-border-outer" />
            <div className="about-hero__photo-border" />
            <div className="about-hero__photo" style={{ backgroundImage: `url(${benImage})` }} />
            <div className="about-hero__photo-overlay" />
          </div>

          {/* Identity */}
          <div className="about-hero__identity">
            <p className="about-hero__eyebrow">Spirit of Fire</p>
            <h1 className="about-hero__name display-xl">Benjamin<br />Gagliardi</h1>
            <div className="about-hero__roles">
              {["Actor", "Playwright", "Director", "Singer", "Songwriter"].map(r => (
                <span key={r} className="about-hero__role-chip">{r}</span>
              ))}
            </div>
            <div style={{
              width: "75%",
              padding: "20px 0px"
            }}>
              <span class="color-on-surface-var">Benjamin Gagliardi is a Theatre Graduate from UW Madison and cofounder of Spirit of Fire Theatre. He met his friend and cofounder Rico Heisler in highschool while Rico was his director. Over the years they connected over a deep desire to perform great theatre, with moral messages, without necessarily performing "Morality Plays". In his free time, Benjamin began to write and perform skit comedy, as well as poetry, translating into the dramatist for Spirit of Fire. </span>
            </div>
            <a href="mailto:ben.j.gagliardi@gmail.com" className="about-hero__contact">
              ben.j.gagliardi@gmail.com
            </a>
            {/* <button className="btn-primary" onClick={() => navigate("/benjamin-resume")} style={{marginLeft: 40, padding: "10px 20px"}}>View Resume</button> */}
          </div>

          {/* Photo */}
          <div className="about-hero__photo-wrap">
            <div className="about-hero__photo-border-outer" />
            <div className="about-hero__photo-border" />
            <div className="about-hero__photo" style={{ backgroundImage: `url(${silasImage})` }} />
            <div className="about-hero__photo-overlay" />
          </div>

          {/* Identity */}
          <div className="about-hero__identity">
            <p className="about-hero__eyebrow">Spirit of Fire</p>
            <h1 className="about-hero__name display-xl">Silas<br />Heisler</h1>
            <div className="about-hero__roles">
              {["Actor", "Playwright", "Director", "Singer", "Songwriter"].map(r => (
                <span key={r} className="about-hero__role-chip">{r}</span>
              ))}
            </div>
            <div style={{
              width: "75%",
              padding: "20px 0px"
            }}>
              <span class="color-on-surface-var">Silas Heisler is a student at the University of Northwestern St Paul studying theology and vocal performance. He grew up immersed in the world of theater as he watched his Father, Rico Heisler, perform in several production at Chanhassen Dinner Theater and direct shows at Hudson Highschool alongside his mother. He quickly fell in love with all areas of performance and maintains a deep desire to tell good, true, and beautiful stories for the Glory of God. </span>
            </div>
            <a href="mailto:heisler.silas@gmail.com" className="about-hero__contact">
              heisler.silas@gmail.com
            </a>
            {/* <button className="btn-primary" onClick={() => navigate("/benjamin-resume")} style={{marginLeft: 40, padding: "10px 20px"}}>View Resume</button> */}
          </div>


        </div>
      </section> 
      <Footer />
    </main>
  );
}
