import { useState } from "react";
import Nav from "./Nav"

import HomePage from "../Pages/HomePage";
import MissionPage from "../Pages/MissionPage";
import TeamPage from "../Pages/TeamPage";
import TicketsPage from "../Pages/TicketsPage";
import ProductionsPage from "../Pages/ProductionsPage";
import ParticipatePage from "../Pages/ParticipatePage";
import AffiliatesPage from "../Pages/AffiliatesPage";
import SupportPage from "../Pages/SupportPage";
import TheatologyPage from "../Pages/TheatologyPage";

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <Nav page={page} setPage={setPage} />
      <div style={{ paddingTop: page === "home" ? 0 : 80 }}>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "mission" && <MissionPage setPage={setPage} />}
        {page === "team" && <TeamPage />}
        {page === "productions" && <ProductionsPage setPage={setPage} />}
        {page === "tickets" && <TicketsPage />}
        {page === "participate" && <ParticipatePage />}
        {page === "affiliates" && <AffiliatesPage />}
        {page === "support" && <SupportPage setPage={setPage} />}
        {page === "theatology" && <TheatologyPage />}
      </div>
    </>
  );
}