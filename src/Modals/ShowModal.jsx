import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CastThumb({ person, onClose, goToShow }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className="modal-cast-card"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        className="modal-cast-card__image"
        style={{
          backgroundImage: person.image ? `url(${person.image})` : "none",
        }}
      >
        {!person.image && <span style={{ fontSize: 28, opacity: .3 }}>🎭</span>}
        <div className="modal-cast-card__overlay" />
        <div
          className="modal-cast-card__bar"
          style={{ background: hov ? "var(--primary-container)" : "transparent" }}
        />
      </div>

      <div className="modal-cast-card__body">
        <p className="modal-cast-card__name serif" style={{ color: hov ? "var(--primary)" : "var(--on-surface)" }}>
          {person.name}
        </p>
        {person.character && (
          <p className="label-tiny color-primary-container" style={{ letterSpacing: ".15em" }}>
            {person.character}
          </p>
        )}
        {person.role && (
          <p className="label-tiny color-outline">{person.role}</p>
        )}
      </div>
    </div>
  );
}

export default function ShowModal({ show, onClose, ShowDescription }) {
  const navigate = useNavigate();

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!show) return null;

  function goToShow() {
    onClose();
    navigate(`/${show.id}`);
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className="modal__close" onClick={onClose}>✕</button>

        {/* Left: cover + badges */}
        <div className="modal__left">
          <div
            className="modal__cover"
            style={{ backgroundImage: `url(${show.image})` }}
          >
            <div className="modal__cover-fade" />
          </div>
          <div className="modal__badges">
            {show.badges?.map((badge, i) => (
              <span
                key={i}
                className="show-card_badge"
                style={{ background: badge.color, color: badge.textcolor }}
              >{badge.label}</span>
            ))}
          </div>
        </div>

        {/* Right: content */}
        <div className="modal__right">
          <div className="modal__header">
            <h2 className="serif-italic modal__title">{show.title}</h2>
            <p className="label-xs color-outline" style={{ letterSpacing: ".3em", marginTop: 8 }}>{show.dates}</p>
          </div>

          {/* Cast */}
          {show.cast && show.cast.length > 0 && (
            <div className="modal__cast">
              <div className="flex-row" style={{ alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div className="divider-flame" style={{ height: 1, width: 32 }} />
                <span className="label-tiny color-primary" style={{ letterSpacing: ".35em" }}>The Cast</span>
              </div>
              <div className="modal-cast-grid">
                {show.cast.map((person, i) => (
                  <CastThumb key={i} person={person} onClose={onClose} goToShow={goToShow} />
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="modal__description">
            <p className="body-md color-on-surface-var">{show.description || "Description coming soon."}</p>
          </div>

          {/* Actions */}
          <div className="modal__actions flex-row" style={{ gap: 12, flexWrap: "wrap" }}>
            {
              show.link.length > 0 ?
              <a 
                href={show.link}
                target="_blank"
                id="btn-constructor"
                rel="noreferrer"
                className="btn-primary"
                style={{textDecoration:"none"}}
              >Reserve Tickets</a>
              : <button className="btn-primary-disabled" disabled="true">Tickets Coming Soon</button>

            }
            <button className="btn-ghost" onClick={goToShow}>
              Full Details →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}