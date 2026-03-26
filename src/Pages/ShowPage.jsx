import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Main/Footer";
import productions from "../Data/CurrentShows";

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
    const navigate = useNavigate();
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
                            <button className="btn-primary" onClick={() => navigate("/tickets", { state: show })}>Reserve Tickets</button>
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
    const [hov, setHov] = useState(false);
    return (
        <div
            className="cast-card cast-card-body"
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                border: `1px solid ${hov ? "rgba(249,94,20,0.25)" : "rgba(89,66,56,0.15)"}`,
                background: hov ? "var(--surface-high)" : "var(--surface-low)",
                cursor: hov ? "pointer" : "auto",
                transition: "background .4s, border .3s",
            }}
        >
            <div className="cast-card-name-container">
                <h5 className="serif cast-card__name" style={{ color: hov ? "var(--primary)" : "var(--on-surface)" }}>
                    {person.name}
                </h5>
                <span className="label-xs color-outline" style={{ display: "block" }}>{person.role}</span>
            </div>
            <div className="cast-card__image"
                style={{
                    backgroundImage: person.image ? `url(${person.image})` : "none",
                    filter: hov ? "grayscale(0)" : "grayscale(1)",
                }}
            >
                {!person.image && <span style={{ fontSize: 40, opacity: .3 }}>🎭</span>}
                <div className="cast-card__image-overlay" />
                <div className="cast-card__image-bar" style={{ background: hov ? "var(--primary-container)" : "transparent" }} />
            </div>
            <div className="cast-card-character-container">
                <h5 
                    className="cast-card__name" 
                    style={{  color: hov ? "var(--primary)" : "var(--on-surface)" }}
                >
                    as {person.character}
                </h5>
                <span className="label-xs color-outline" style={{ display: "block" }}>{person.role}</span>
            </div>
        </div>
    );
}

function CastSection({ cast }) {
    if (!cast || cast.length === 0) return null;
    return (
        <section id="learn-more-anchor" className="section-pad bg-surface">
            <div className="container">
                <div className="flex-row" style={{ alignItems: "center", gap: 24, marginBottom: 80 }}>
                    <div className="divider-flame" style={{ height: 1, width: 48 }} />
                    <h2 className="serif label-upper color-primary" style={{ fontSize: 13, letterSpacing: ".4em" }}>The Cast</h2>
                </div>
                <div className="cast-grid">
                    {cast.map((person, i) => <CastMember key={i} person={person} />)}
                </div>
            </div>
        </section>
    );
}

function ShowAbout({ children }) {
    return (
        <section className="pat section-pad bg-surface-low">
            <div className="container">
                <div className="show-about__grid">
                    <div>
                        <div className="flex-row" style={{ alignItems: "center", gap: 16, marginBottom: 32 }}>
                            <div className="divider-flame" style={{ height: 1, width: 48 }} />
                            <span className="label-xs color-primary" style={{ letterSpacing: ".4em" }}>About the Show</span>
                        </div>
                        <h2 className="serif" style={{ fontSize: 40, marginBottom: 32 }}>The Story</h2>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

function PhotoCarousel({ children }) {
    const [idx, setIdx] = useState(0);
    const photos = Array.isArray(children) ? children : children ? [children] : [];
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

function ShowCTA({ title }) {
    const navigate = useNavigate();
    return (
        <section className="section-cta-bordered">
            <div className="section-cta-bordered__inner">
                <h2 className="serif" style={{ fontSize: 44, marginBottom: 20 }}>
                    Don't miss <em className="color-primary">{title}!</em>
                </h2>
                <p className="body-lg" style={{ color: "rgba(229,226,225,0.6)", marginBottom: 48 }}>
                    Reserve your seat and join us for an unforgettable evening.
                </p>
                <div className="flex-row" style={{ justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
                    <button className="btn-primary" onClick={() => navigate("/tickets", { state: productions[0] })}>Reserve Your Ticket</button>
                    <button className="btn-ghost-primary" onClick={() => navigate("/support")}>Become a Patron</button>
                </div>
            </div>
        </section>
    );
}

export default function ShowPage({ show, ShowDescription: Desc = ShowDescription, children }) {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const scrollTo = () => {
        const el = document.getElementById("learn-more-anchor");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <main>
            <ShowHero show={show} scrollTo={scrollTo} />
            <CastSection cast={show.cast} />
            <ShowAbout><Desc /></ShowAbout>
            <PhotoCarousel><ProductionPhotos /></PhotoCarousel>
            <ShowCTA title={show.title} />
            <Footer />
        </main>
    );
}