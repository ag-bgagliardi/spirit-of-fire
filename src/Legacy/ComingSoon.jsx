import { useNavigate, useLocation } from "react-router-dom";

const FLAMES = ["✦", "✦", "✦"];

export default function ComingSoon({ title, subtitle }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Derive a readable page name from the path if no title passed
  const pageName = title || pathname
    .replace("/", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase()) || "This Page";

  return (
    <main className="coming-soon">
      {/* Background layers */}
      <div className="coming-soon__bg-base" />
      <div className="coming-soon__bg-glow" />
      <div className="coming-soon__bg-vignette" />

      {/* Ornamental top border */}
      <div className="coming-soon__top-border" />

      <div className="coming-soon__content">

        {/* Flame ornament */}
        <div className="coming-soon__ornament">
          {FLAMES.map((f, i) => (
            <span key={i} className="coming-soon__flame" style={{ animationDelay: `${i * 0.3}s` }}>
              {f}
            </span>
          ))}
        </div>

        {/* Eyebrow */}
        <span className="label-xs color-primary-container coming-soon__eyebrow">
          Spirit of Fire Theatre
        </span>

        {/* Heading */}
        <h1 className="coming-soon__title serif-italic">
          {pageName}
        </h1>

        {/* Divider */}
        <div className="coming-soon__divider" />

        {/* Body */}
        <p className="coming-soon__body body-md color-on-surface-var">
          {subtitle || "This webpage is still being prepared. We are working with great care to bring this to life. In the meantime, explore what is already waiting for you."}
        </p>

        {/* Actions */}
        <div className="coming-soon__actions">
          <button className="btn-primary" onClick={() => navigate("/productions")}>
            Return Home
          </button>
          <button className="btn-ghost" onClick={() => navigate("/productions")}>
            View Productions
          </button>
        </div>

        {/* Bottom quote */}
        <div className="coming-soon__quote-wrap">
          <span className="coming-soon__quote-mark color-outline">❝</span>
          <blockquote className="coming-soon__quote serif-italic color-on-surface-var">
            Ad Majorem Dei Gloriam
          </blockquote>
        </div>

      </div>

      {/* Ornamental bottom border */}
      <div className="coming-soon__bottom-border" />

      <style>{`
        .coming-soon {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 120px var(--pad-x) 80px;
        }

        .coming-soon__bg-base {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, #0d0200 0%, #131313 50%, #0a0100 100%);
        }

        .coming-soon__bg-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 40%, rgba(249,94,20,0.12) 0%, transparent 65%);
          animation: glow-pulse 4s ease-in-out infinite;
        }

        .coming-soon__bg-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%);
        }

        .coming-soon__top-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--primary-container), var(--primary-lighter), transparent);
        }

        .coming-soon__bottom-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(249,94,20,0.3), transparent);
        }

        .coming-soon__content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 28px;
        }

        .coming-soon__ornament {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .coming-soon__flame {
          font-size: 14px;
          color: var(--primary-container);
          opacity: 0.6;
          animation: flame-flicker 2.5s ease-in-out infinite;
        }

        .coming-soon__eyebrow {
          letter-spacing: 0.4em;
          display: block;
        }

        .coming-soon__title {
          font-size: clamp(52px, 9vw, 96px);
          line-height: 0.9;
          letter-spacing: -0.03em;
          color: var(--on-surface);
        }

        .coming-soon__divider {
          width: 80px;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--primary-container), transparent);
        }

        .coming-soon__body {
          max-width: 480px;
          font-size: clamp(15px, 1.8vw, 17px);
        }

        .coming-soon__actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }

        .coming-soon__quote-wrap {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          border-top: 1px solid rgba(89,66,56,0.2);
          padding-top: 28px;
          width: 100%;
        }

        .coming-soon__quote-mark {
          font-size: 28px;
          line-height: 1;
          opacity: 0.4;
        }

        .coming-soon__quote {
          font-size: clamp(14px, 1.8vw, 17px);
          letter-spacing: 0.2em;
          opacity: 0.5;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }

        @keyframes flame-flicker {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          33%       { opacity: 1;   transform: scale(1.2); }
          66%       { opacity: 0.4; transform: scale(0.9); }
        }

        @media (max-width: 600px) {
          .coming-soon__actions { flex-direction: column; align-items: center; }
          .coming-soon__actions button { width: 100%; max-width: 280px; }
        }
      `}</style>
    </main>
  );
}