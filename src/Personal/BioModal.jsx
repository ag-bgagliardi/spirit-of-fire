import { useEffect } from "react";
/* ── Bio Modal ── */
export default function BioModal({ person, onClose }) {
    useEffect(() => {
        function onKey(e) { if (e.key === "Escape") onClose(); }
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="bio-modal" onClick={e => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose}>✕</button>

                {/* Left: photo */}
                <div className="bio-modal__photo-wrap">
                    <div
                        className="bio-modal__photo"
                        style={{ backgroundImage: person.image ? `url(${person.image})` : "none" }}
                    >
                        {!person.image && <span style={{ fontSize: 48, opacity: .2 }}>🎭</span>}
                        <div className="bio-modal__photo-fade" />
                    </div>
                </div>

                {/* Right: content */}
                <div className="bio-modal__body">
                    <div className="bio-modal__header">
                        <p className="label-tiny color-primary-container" style={{ letterSpacing: ".3em", marginBottom: 10 }}>
                            {person.character}
                        </p>
                        <h2 className="serif bio-modal__name">{person.name}</h2>
                        {person.role && (
                            <p className="label-xs color-outline" style={{ marginTop: 8, letterSpacing: ".2em" }}>
                                {person.role}
                            </p>
                        )}
                    </div>
                    <div className="bio-modal__divider" />
                    <p className="body-md color-on-surface-var bio-modal__bio">{person.bio}</p>
                </div>
            </div>
        </div>
    );
}