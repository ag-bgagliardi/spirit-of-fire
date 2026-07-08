import { useNavigate } from "react-router-dom";
import "../Style/index.css";

/**
 * Alternate hero for the Productions page.
 * Use this in place of <ProductionsHero /> when there's no announced
 */
function ProductionsComingSoon({ photos = [], statusLabel = "In development • Announcing soon" }) {
  const navigate = useNavigate();
  const displayPhotos = photos.slice(0, 3);

  return (
    <section className="coming-soon" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 48px 96px" }}>
      <div style={{ paddingTop: 80 }} className="grid-2">
        <div className="coming-soon__text">
          <div className="flex-row" style={{ alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ height: 1, width: 48, background: "var(--primary-container)" }} />
            <span className="label-xs color-primary" style={{ letterSpacing: ".3em" }}>The Callboard</span>
          </div>

          <h1 className="serif-italic coming-soon__title">
            Something new is <span className="color-primary-container">taking shape.</span>
          </h1>

          <p className="body-md color-on-surface-var" style={{ maxWidth: 480, fontSize: 17, marginBottom: 32 }}>
            Spirit of Fire is currently searching for venues and perfmanent locations to build our mission in our performance interrim. If you would like to support this mission please reach out.
          </p>

          <div className="coming-soon__status">
            <span className="coming-soon__status-dot" />
            <span className="label-xs color-outline">{statusLabel}</span>
          </div>

          <button className="btn-primary" onClick={() => navigate("/participate")} style={{ marginTop: 32 }}>
            Get Involved
          </button>
        </div>

        <div className="coming-soon__board">
          <div className="coming-soon__note">
            <span className="coming-soon__note-glyph">✦</span>
            <p className="serif-italic coming-soon__note-text">
                Our next project is still in development,
                <br />
                thank you for your ongoing support.
            </p>
          </div>

          {displayPhotos.map((photo, i) => (
            <div className={`coming-soon__photo coming-soon__photo--${i}`} key={photo.caption ?? i}>
              <span className="coming-soon__pin" />
              <div
                className="coming-soon__photo-image"
                style={{ backgroundImage: `url(${photo.src})` }}
              />
              {photo.caption && (
                <span className="coming-soon__photo-caption label-xs">{photo.caption}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductionsComingSoon;