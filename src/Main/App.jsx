import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// IMPORT PAGES //
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
      <div>
        <Routes>
          {/* NAV BARS */}
          <Route path="/" element={<HomePage />} />
          <Route path="/productions" element={<ProductionsPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/participate" element={<ParticipatePage />} />
          {/* Archive NAV BARS */}
          <Route path="/theatology" element={<TheatologyPage />} />
          <Route path="/affiliates" element={<AffiliatesPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/past-productions" element={<PastShows />} />
          {/* TESTING IN PROGRESS PAGES */}
          <Route path="/tickets" element={<ComingSoon />} />
          <Route path="/test-tickets" element={<TicketsPage />} />
          <Route path="/support" element={<ComingSoon />} />
          <Route path="/test-support" element={<SupportPage />} />
          {/* LEGACY PAGES */}
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