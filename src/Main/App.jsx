import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import Nav from "./Nav";
import HomePage from "../Pages/HomePage";
import TempHome from "../Pages/TempHome";
import MissionPage from "../Pages/MissionPage";
import TeamPage from "../Pages/TeamPage";
import TicketsPage from "../Pages/TicketsPage";
import ProductionsPage from "../Pages/ProductionsPage";
import ParticipatePage from "../Pages/ParticipatePage";
import AffiliatesPage from "../Pages/AffiliatesPage";
import SupportPage from "../Pages/SupportPage";
import TheatologyPage from "../Pages/TheatologyPage";
import ComingSoon from "../Pages/ComingSoon";
import ShowPage from "../Pages/ShowPage";
import productions from "../Data/CurrentShows";
import BenjaminPage from "../Personal/BenjaminPage";
import BenjaminResume from "../Personal/BenjaminResume";

function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Nav />
      <div style={{ paddingTop: 80 }}>
        <Routes>
          <Route path="/"            element={<TempHome />} />
          <Route path="/test"            element={<HomePage />} />
          <Route path="/mission"     element={<MissionPage />} />
          <Route path="/team"        element={<TeamPage />} />
          <Route path="/productions" element={<ProductionsPage />} />
          <Route path="/tickets"     element={<ComingSoon />} />
          <Route path="/test-tickets"     element={<TicketsPage />} />
          <Route path="/participate" element={<ParticipatePage />} />
          <Route path="/affiliates"  element={<AffiliatesPage />} />
          <Route path="/support"     element={<ComingSoon />} />
          <Route path="/test-support"     element={<SupportPage />} />
          <Route path="/theatology"  element={<TheatologyPage />} />
          <Route path="/tickets"     element={<ComingSoon />} />
          <Route path="/past-productions"     element={<ComingSoon />} />
          <Route path="/portfolio"     element={<ComingSoon />} />
          <Route path="/benjamin"     element={<BenjaminPage />} />
          <Route path="/benjamin-resume"     element={<BenjaminResume />} />
          <Route path="/personal"     element={<ComingSoon />} />
          {productions.map((show) => {
            return <Route path={`/${show.id}`}  element={<ShowPage show={show} />} />
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