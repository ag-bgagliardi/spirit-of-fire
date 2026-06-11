import { HashRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { AuthProvider, useAuth } from "./AuthContext";
import Nav from "./Nav";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/MissionPage";
import ProductionsPage from "../Pages/ProductionsPage";
import ShowPage from "../Pages/ShowPage";
import ParticipatePage from "../Pages/ParticipatePage";
import SupportPage from "../Pages/SupportPage";
import TheatologyPage from "../Pages/TheatologyPage";
import Portfolio from "../Pages/Portfolio";
import AffiliatesPage from "../Pages/AffiliatesPage";
import TicketsPage from "../Pages/TicketsPage";
import PastShows from "../Pages/PastShows";
import LoginPage from "../Pages/LoginPage";
import PlanningPage from "../Pages/PlanningPage";
import ComingSoon from "../Legacy/ComingSoon";
import TeamPage from "../Legacy/TeamPage";
import AboutPage from "../Legacy/AboutPage";
import BenjaminResume from "../Legacy/BenjaminResume";
import productions from "../Data/CurrentShows";

// ── Floating Action Button ────────────────────────────────────────────────────
function TeamFAB() {
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (!isLoggedIn || pathname === "/planning" || pathname === "/login") return null;

  return (
    <button
      onClick={() => navigate("/planning")}
      title="Go to Planning"
      style={{
        position: "fixed",
        bottom: 28,
        left: 28,
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "var(--surface-high)",
        border: "2px solid var(--outline-30)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 150,
        transition: "border-color .2s, box-shadow .2s, transform .2s",
        padding: 0,
        overflow: "hidden",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "var(--primary-container)";
        e.currentTarget.style.boxShadow = "0 4px 24px var(--primary-30)";
        e.currentTarget.style.transform = "scale(1.08)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--outline-30)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <img src="/favicon.ico" alt="Planning" style={{ width: 28, height: 28, objectFit: "contain" }} />
    </button>
  );
}

// ── Protected route ───────────────────────────────────────────────────────────
function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => { if (!isLoggedIn) navigate("/login"); }, [isLoggedIn, navigate]);
  return isLoggedIn ? children : null;
}

// ── Layout ────────────────────────────────────────────────────────────────────
function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      {pathname !== "/login" && <Nav />}
      <div>
        <Routes>
          <Route path="/"                  element={<HomePage />} />
          <Route path="/productions"       element={<ProductionsPage />} />
          <Route path="/about-us"          element={<AboutUs />} />
          <Route path="/participate"       element={<ParticipatePage />} />
          <Route path="/support"           element={<SupportPage />} />
          <Route path="/theatology"        element={<TheatologyPage />} />
          <Route path="/affiliates"        element={<AffiliatesPage />} />
          <Route path="/portfolio"         element={<Portfolio />} />
          <Route path="/past-productions"  element={<PastShows />} />
          <Route path="/login"             element={<LoginPage />} />
          <Route path="/planning"          element={<ProtectedRoute><PlanningPage /></ProtectedRoute>} />
          <Route path="/team"              element={<TeamPage />} />
          <Route path="/benjamin"          element={<AboutPage />} />
          <Route path="/benjamin-resume"   element={<BenjaminResume />} />
          <Route path="/personal"          element={<ComingSoon />} />
          {productions.map(show => (
            <Route key={show.id} path={`/${show.id}`} element={<ShowPage show={show} />} />
          ))}
        </Routes>
      </div>
      <TeamFAB />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Layout />
      </HashRouter>
    </AuthProvider>
  );
}