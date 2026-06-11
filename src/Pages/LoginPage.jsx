import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Main/AuthContext";
import "../Style/planning.css";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState(false);
  const [loading, setLoading]   = useState(false);

  async function handleSubmit() {
    if (!username || !password) return;
    setLoading(true);
    setError(false);
    await new Promise(r => setTimeout(r, 380));
    const ok = login(username, password);
    setLoading(false);
    if (ok) navigate("/planning");
    else setError(true);
  }

  function handleKey(e) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <main className="login-page">
      <div className="login-page__bg" />
      <div className="flames-background" />
      <div className="login-page__glow" />

      <div className="login-card">
        <div className="login-card__top-rule" />

        <div className="login-card__header">
          <img src="/favicon.ico" alt="Spirit of Fire" className="login-card__logo" />
          <h1 className="serif-italic color-on-surface login-card__title">Team Portal</h1>
          <p className="label-xs color-outline" style={{ letterSpacing: ".3em" }}>
            Spirit of Fire · Members Only
          </p>
        </div>

        <div className="login-card__fields">
          <div className="field">
            <label className="field__label">Username</label>
            <input
              className="field__input"
              placeholder="Enter your username"
              value={username}
              onChange={e => { setUsername(e.target.value); setError(false); }}
              onKeyDown={handleKey}
              autoComplete="username"
              autoFocus
            />
          </div>
          <div className="field">
            <label className="field__label">Password</label>
            <input
              className="field__input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(false); }}
              onKeyDown={handleKey}
              autoComplete="current-password"
            />
          </div>
        </div>

        {error && (
          <div className="login-error">
            <span className="login-error__text">
              Invalid username or password. Please try again.
            </span>
          </div>
        )}

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!username || !password || loading}
          style={{ opacity: !username || !password ? 0.5 : 1 }}
        >
          {loading ? "Signing in…" : "Sign In →"}
        </button>

        <p className="form-note" style={{ marginTop: 20 }}>
          Access restricted to Spirit of Fire team members.
        </p>
      </div>
    </main>
  );
}