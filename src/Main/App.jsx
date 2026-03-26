import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import Nav from "./Nav";
import HomePage from "../Pages/HomePage";
import MissionPage from "../Pages/MissionPage";
import TeamPage from "../Pages/TeamPage";
import TicketsPage from "../Pages/TicketsPage";
import ProductionsPage from "../Pages/ProductionsPage";
import ParticipatePage from "../Pages/ParticipatePage";
import AffiliatesPage from "../Pages/AffiliatesPage";
import SupportPage from "../Pages/SupportPage";
import TheatologyPage from "../Pages/TheatologyPage";
import PerformancePage from "../Pages/PerformancePage";
import productions from "../Data/CurrentShows";

function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <Nav />
      <div style={{ paddingTop: pathname === "/" ? 0 : 80 }}>
        <Routes>
          <Route path="/"            element={<HomePage />} />
          <Route path="/mission"     element={<MissionPage />} />
          <Route path="/team"        element={<TeamPage />} />
          <Route path="/productions" element={<ProductionsPage />} />
          <Route path="/tickets"     element={<TicketsPage />} />
          <Route path="/participate" element={<ParticipatePage />} />
          <Route path="/affiliates"  element={<AffiliatesPage />} />
          <Route path="/support"     element={<SupportPage />} />
          <Route path="/theatology"  element={<TheatologyPage />} />
          {productions.map((show) => {
            return <Route path={`/${show.id}`}  element={<PerformancePage show={show} />} />
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