import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// IMPORT PAGES //
import Nav from "./Nav";
import HomePage from "../Pages/HomePage";
import MissionPage from "../Pages/MissionPage";
import TicketsPage from "../Pages/TicketsPage";
import ProductionsPage from "../Pages/ProductionsPage";
import ParticipatePage from "../Pages/ParticipatePage";
import AffiliatesPage from "../Pages/AffiliatesPage";
import SupportPage from "../Pages/SupportPage";
import TheatologyPage from "../Pages/TheatologyPage";
import ShowPage from "../Pages/ShowPage";
import Portfolio from "../Pages/Portfolio";
// IMPORT OLD/TESTING/LEGACY
import ComingSoon from "../Legacy/ComingSoon";
import TeamPage from "../Legacy/TeamPage";
import AboutPage from "../Legacy/AboutPage";
import BenjaminResume from "../Legacy/BenjaminResume";
// IMPORT CONSTANTS
import productions from "../Data/CurrentShows";

function Layout() {
  const { pathname } = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Nav />
      <div style={{ paddingTop: 80 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<MissionPage />} />
          <Route path="/productions" element={<ProductionsPage />} />
          <Route path="/tickets" element={<ComingSoon />} />
          <Route path="/test-tickets" element={<TicketsPage />} />
          <Route path="/participate" element={<ParticipatePage />} />
          <Route path="/affiliates" element={<AffiliatesPage />} />
          <Route path="/support" element={<ComingSoon />} />
          <Route path="/test-support" element={<SupportPage />} />
          <Route path="/theatology" element={<TheatologyPage />} />
          <Route path="/tickets" element={<ComingSoon />} />
          <Route path="/past-productions" element={<ComingSoon />} />
          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/team" element={<TeamPage />} />
          <Route path="/benjamin" element={<AboutPage />} />
          <Route path="/benjamin-resume" element={<BenjaminResume />} />
          <Route path="/personal" element={<ComingSoon />} />
          {productions.map((show) => {
            return <Route path={`/${show.id}`} element={<ShowPage show={show} />} />
          })}
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}