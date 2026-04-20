import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCardFlip from "react-card-flip";
import Footer from "../Main/Footer";

export function ShowDescription() {
    return (
        <div className="show-description__placeholder">
            <p className="body-md color-on-surface-var">Show description coming soon.</p>
        </div>
    );
}

export function ProductionPhotos() {
    return null;
}

function ShowHero({ show, scrollTo }) {
    return (
        <section className="show-hero">
            <div className="show-hero__bg" style={{ backgroundImage: `url(${show.image})` }} />
            <div className="show-hero__bg-fade" />
            <div className="show-hero__bg-vignette" />
            <div className="show-hero__content container">
                <div className="show-hero__meta">
                    <h1 className="display-xl color-on-surface" style={{ marginBottom: 16 }}>{show.title}</h1>
                    <p className="label-xs color-outline" style={{ letterSpacing: ".3em", marginBottom: 20, fontSize: 20 }}>{show.dates}</p>
                    <div className="show-hero__actions">
                        <div className="flex-col" style={{ gap: 12 }}>
                            <button onClick={scrollTo} className="btn-ghost">Cast & Crew ↓</button>
                            <a
                                href={show.link.length > 0 ? show.link : "https://events.ticketleap.com/events/spirit-of-fire"}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary"
                                style={{ textDecoration: "none", display: "inline-flex", justifyContent: "center" }}
                            >Reserve Tickets</a>
                        </div>
                        <div className="show-card-badges">
                            {show.badges.map((badge, i) => (
                                <span key={i} className="show-card_badge"
                                    style={{ background: badge.color, color: badge.textcolor, display: "inline-block", width: "fit-content" }}>
                                    {badge.label}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="body-md color-on-surface-var show-hero__description">{show.description}</p>
                </div>
                <div className="show-hero__cover">
                    <div className="show-hero__cover-border" />
                    <div className="show-hero__cover-border-outer" />
                    <img src={show.image} alt={show.title} className="show-hero__cover-img" />
                </div>
            </div>
        </section>
    );
}

function CastMember({ person }) {
    const [flipped, setFlipped] = useState(false);
    const [hov, setHov] = useState(false);
    const hasBio = Boolean(person.bio);

    // Shared border/bg that responds to hover — applied to both faces
    const faceStyle = {
        border: `2px solid ${hov ? "var(--primary-25)" : "var(--outline-15)"}`,
        background: hov ? "var(--surface-high)" : "var(--surface-low)",
        transition: "background .4s, border .3s",
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
    };

    return (
        <div
            className="cast-card"
            style={{ cursor: hasBio ? "pointer" : "auto" }}
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
        >
            <div className="cast-card-character-container">
                <h4 className="serif cast-card__name"
                    style={{ color: hov ? "var(--primary)" : "var(--primary-lighter)" }}>
                    {person.character}
                </h4>
            </div>
            <div style={{ position: "relative", width: "100%", paddingBottom: "calc(133.33% + 72px)" }}>
                <ReactCardFlip
                    isFlipped={flipped}
                    flipDirection="horizontal"
                    flipSpeedBackToFront={0.45}
                    flipSpeedFrontToBack={0.45}
                    containerStyle={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                >

                    {/* ══ FRONT — photo card ══ */}
                    <div
                        className="cast-card-body"
                        style={{ ...faceStyle, display: "flex", flexDirection: "column", cursor: hasBio ? "pointer" : "default" }}
                        onClick={() => hasBio && setFlipped(true)}
                    >
                        {/* Image stretches to fill all space above the name strip */}
                        <div
                            className="cast-card__image"
                            style={{
                                backgroundImage: person.image ? `url(${person.image})` : "none",
                                filter: hov ? "grayscale(0)" : "grayscale(0.2)",
                            }}
                        >
                            {!person.image && <span style={{ fontSize: 40, opacity: .3 }}>🎭</span>}
                            <div className="cast-card__image-overlay" />
                            <div className="cast-card__image-bar"
                                style={{ background: hov ? "var(--primary-container)" : "transparent" }} />
                            {hasBio && (
                                <div className="cast-card__bio-hint"><span>i</span></div>
                            )}
                        </div>

                        {/* Name strip — fixed-height footer of the front face */}
                        <div className="cast-card-name-container" style={{ flexShrink: 0, height: 72 }}>
                            <h5 className="cast-card__name color-on-surface">{person.name}</h5>
                            {person.role && (
                                <span className="label-xs color-outline" style={{ display: "block" }}>{person.role}</span>
                            )}
                        </div>
                    </div>

                    {/* ══ BACK — bio card ══ */}
                    <div
                        className="cast-card-body-bio"
                        style={{
                            ...faceStyle
                        }}
                        onClick={() => setFlipped(false)}
                    >
                        {/* Header: name + close hint */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, flexShrink: 0 }}>
                            <div style={{ minWidth: 0 }}>
                                <h5 className="serif-italic"
                                    style={{ color: "var(--primary-lighter)", fontSize: 15, marginBottom: 3, lineHeight: 1.2 }}>
                                    {person.name}
                                </h5>
                                <span className="label-xs color-outline">{person.character}</span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: 1, background: "var(--primary-20)", flexShrink: 0 }} />

                        {/* Bio fills all remaining vertical space and scrolls if needed */}
                        <p style={{
                            fontSize: "clamp(11px, 1.3vw, 13px)",
                            lineHeight: 1.8,
                            color: "var(--on-surface-variant)",
                            fontWeight: 300,
                            flex: 1,
                            minHeight: 0,
                            overflowY: "auto",
                            scrollbarWidth: "thin",
                            scrollbarColor: "var(--outline-variant) transparent",
                        }}>
                            {person.bio}
                        </p>
                    </div>

                </ReactCardFlip>
            </div>
        </div>
    );
}

function CastSection({ cast }) {
    if (!cast || cast.length === 0) return null;
    return (
        <section id="learn-more-anchor" className="section-pad bg-surface image-overlay">
            <div className="flames-background" />
            <div className="container">
                <div className="flex-row" style={{ alignItems: "center", gap: 24, marginBottom: 80 }}>
                    <div className="divider-flame" style={{ height: 1, width: 48 }} />
                    <h2 className="serif label-upper color-primary" style={{ fontSize: 13, letterSpacing: ".4em" }}>The Cast</h2>
                </div>
                <div className="cast-grid">
                    {cast.map((person, i) => (
                        <CastMember key={i} person={person} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ShowAbout({ show }) {
    return (
        show.about ?
            <section className="pat section-pad bg-surface-low">
                <div className="container">
                    <div className="show-about__grid">
                        <div>
                            <div className="flex-row" style={{ alignItems: "center", gap: 16, marginBottom: 32 }}>
                                <div className="divider-flame" style={{ height: 1, width: 48 }} />
                                <span className="label-xs color-primary" style={{ letterSpacing: ".4em" }}>About the Show</span>
                            </div>
                            <h2 className="serif" style={{ fontSize: 40, marginBottom: 32 }}>The Story</h2>
                            {show.about}
                        </div>
                    </div>
                </div>
            </section> : <></>
    );
}

function PhotoCarousel({ show }) {
    const [idx, setIdx] = useState(0);
    const photos = Array.isArray(show.photos) ? show.photos : [];
    if (photos.length === 0) return null;
    const prev = () => setIdx(i => (i - 1 + photos.length) % photos.length);
    const next = () => setIdx(i => (i + 1) % photos.length);
    return (
        <section className="section-pad bg-surface-lowest">
            <div className="container" style={{ marginBottom: 48 }}>
                <div className="flex-row" style={{ alignItems: "center", gap: 24 }}>
                    <div className="divider-flame" style={{ height: 1, width: 48 }} />
                    <h2 className="serif label-upper color-primary" style={{ fontSize: 13, letterSpacing: ".4em" }}>Production Photos</h2>
                </div>
            </div>
            <div className="carousel">
                <div className="carousel__track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                    {photos.map((photo, i) => <div key={i} className="carousel__slide">{photo}</div>)}
                </div>
                <button className="carousel__btn carousel__btn--prev" onClick={prev}>←</button>
                <button className="carousel__btn carousel__btn--next" onClick={next}>→</button>
                <div className="carousel__dots">
                    {photos.map((_, i) => (
                        <button key={i} onClick={() => setIdx(i)} className="carousel__dot"
                            style={{ background: i === idx ? "var(--primary-container)" : "var(--outline-variant)" }} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ShowCTA({ show }) {
    const navigate = useNavigate();
    return (
        <section className="section-cta-bordered">
            <div className="section-cta-bordered__inner">
                <h2 className="serif" style={{ fontSize: 44, marginBottom: 20 }}>
                    Don't miss <em className="color-primary">{show.title}!</em>
                </h2>
                <p className="body-lg" style={{ color: "var(--on-surface-60)", marginBottom: 48 }}>
                    Reserve your seat and join us for an unforgettable evening.
                </p>
                <div className="flex-row" style={{ justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
                    <a
                        href={"https://events.ticketleap.com/events/spirit-of-fire"}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ textDecoration: "none", display: "flex", justifyContent: "center" }}
                    >Reserve Your Ticket</a>
                    <button className="btn-ghost-primary" onClick={() => navigate("/support", { state: show })}>Become a Patron</button>
                </div>
            </div>
        </section>
    );
}

export default function ShowPage({ show, ShowDescription: Desc = ShowDescription }) {
    const scrollTo = () => {
        const el = document.getElementById("learn-more-anchor");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <main>
            <ShowHero show={show} scrollTo={scrollTo} />
            <CastSection cast={show.cast} />
            <ShowAbout show={show}><Desc /></ShowAbout>
            <PhotoCarousel show={show}><ProductionPhotos /></PhotoCarousel>
            <ShowCTA show={show} />
            <Footer />
        </main>
    );
}