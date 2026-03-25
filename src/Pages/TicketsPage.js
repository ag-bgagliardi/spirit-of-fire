import Footer from "../Main/Footer";
import { useState, useEffect } from "react";
import motherRabbitImage from "../Assets/Covers/MotherRabbit.jpg";
import animalCrackersImage from "../Assets/Covers/AnimalCrackers.jpg";
import missingRainImage from "../Assets/Covers/MissingTheRain.webp";
import "../Style/global.css";

const SHOWS = [
  { title: "Mother Rabbit",    dates: "JUN 01 — JUL 01", badge: "Encore Performance", badgeColor: "#a37cea", badgeText: "#38017a", image: motherRabbitImage },
  { title: "Animal Crackers",  dates: "TBD",              badge: "Adaptation",         badgeColor: "#201f1f", badgeText: "#ffb59a", image: animalCrackersImage },
  { title: "Missing the Rain", dates: "TBD",              badge: "World Premiere",     badgeColor: "#f95e14", badgeText: "#4f1700", image: missingRainImage },
];

function StepIndicator() {
  const steps = ["I · Production", "II · Seat Choice", "III · Review"];
  return (
    <nav className="step-indicator">
      <ol className="step-indicator__list">
        {steps.map((s, i) => (
          <li key={s} className="step-indicator__item" style={{ flex: i < 2 ? 1 : 0 }}>
            <div className="flex-row" style={{ alignItems: "center", gap: 8, flexShrink: 0 }}>
              <div className="step-indicator__bubble" style={{
                border: `1px solid ${i === 0 ? "var(--primary-container)" : "var(--outline)"}`,
                background: i === 0 ? "rgba(249,94,20,0.1)" : "transparent",
                color: i === 0 ? "var(--primary)" : "var(--outline)",
              }}>{["I","II","III"][i]}</div>
              <span className="label-xs" style={{ color: i === 0 ? "var(--primary)" : "var(--outline)" }}>{s.split(" · ")[1]}</span>
            </div>
            {i < 2 && <div className="step-indicator__connector" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ShowSelector({ selected, onSelect }) {
  return (
    <section>
      <h2 className="tickets-section-heading">I. Choose Your Performance</h2>
      <div className="show-selector-grid">
        {SHOWS.map((show, i) => (
          <div key={i} onClick={() => onSelect(i)} className="show-selector-card" style={{ outline: selected === i ? "1px solid var(--primary-container)" : "none" }}>
            <div className="show-selector-card__image" style={{ backgroundImage: `url(${show.image})` }}>
              <div className="show-selector-card__image-overlay" />
              {selected === i && <div className="show-selector-card__image-tint" />}
              {selected === i && <span className="show-selector-card__check">✓</span>}
            </div>
            <div className="show-selector-card__body">
              <h3 className="show-selector-card__title">{show.title}</h3>
              <p className="label-xs color-on-surface-var" style={{ marginBottom: 16 }}>{show.dates}</p>
              <button className={selected === i ? "show-selector-card__btn show-selector-card__btn--active" : "show-selector-card__btn"}>
                {selected === i ? "Performance Selected" : "Select Performance"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DatePicker({ selected, onSelect }) {
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const dates = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <section>
      <h2 className="tickets-section-heading">II. Choose Your Date</h2>
      <div className="date-picker">
        <div className="date-picker__days">
          {days.map(d => <span key={d} className="label-tiny color-outline" style={{ letterSpacing: ".1em" }}>{d}</span>)}
        </div>
        <div className="date-picker__grid">
          {[null,null,null,null].map((_,i) => <div key={i} />)}
          {dates.map(d => {
            const disabled = d <= 2;
            const sel = d === selected;
            return (
              <button key={d} onClick={() => !disabled && onSelect(d)} className="date-picker__day" style={{
                cursor: disabled ? "not-allowed" : "pointer",
                color: disabled ? "rgba(229,226,225,0.25)" : sel ? "var(--primary)" : "var(--on-surface)",
                background: sel ? "rgba(249,94,20,0.15)" : "transparent",
                border: sel ? "1px solid var(--primary-container)" : "1px solid rgba(89,66,56,0.3)",
              }}>
                <span>{d}</span>
                {sel && <span className="date-picker__selected-label">Selected</span>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SeatMap({ selected, onToggle }) {
  const rows = [[0,1,2,3,4,5],[0,1,2,3,4,5,6,7],[null,null,0,1,2,3,null,null]];
  return (
    <section>
      <h2 className="tickets-section-heading">III. Choose Your Seat</h2>
      <div className="seat-map">
        <div className="seat-map__stage-wrap">
          <div className="seat-map__stage-line" />
          <span className="seat-map__stage-label">The Stage</span>
        </div>
        <div className="seat-map__rows">
          {rows.map((row, ri) => (
            <div key={ri} className="seat-map__row">
              {row.map((seat, si) => {
                if (seat === null) return <div key={si} className="seat-map__spacer" />;
                const key = ri * 10 + si;
                const occupied = ri === 2 && (si === 0 || si === 1 || si === 6 || si === 7);
                const sel = selected.includes(key);
                return (
                  <button key={si} onClick={() => !occupied && onToggle(key)} className="seat-map__seat" style={{
                    background: sel ? "var(--primary-container)" : "var(--surface-highest)",
                    opacity: occupied ? .3 : 1,
                    cursor: occupied ? "not-allowed" : "pointer",
                    boxShadow: sel ? "0 0 12px rgba(249,94,20,0.4)" : "none",
                  }} />
                );
              })}
            </div>
          ))}
        </div>
        <div className="seat-map__legend">
          {[["Available","var(--surface-highest)",1],["Selected","var(--primary-container)",1],["Occupied","var(--surface-highest)",.3]].map(([l,bg,op]) => (
            <div key={l} className="seat-map__legend-item">
              <div className="seat-map__legend-swatch" style={{ background: bg, opacity: op }} />{l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceSummary({ showIndex, date, seats, offering, onOfferingChange }) {
  const total = seats.length * 15 + (typeof offering === "number" ? offering : 0);
  return (
    <div className="performance-summary">
      <h3 className="serif-italic color-primary" style={{ fontSize: 20, marginBottom: 28 }}>Summary of Purchase</h3>
      <div className="performance-summary__details">
        {[
          { label: "Production",      value: SHOWS[showIndex].title },
          { label: "Scheduled Time",  value: `June ${String(date).padStart(2,"0")}, 2026 • 7:00 p.m.` },
          { label: "Seat",            value: `Row A, Seat ${seats.map(s => s + 1).join(", ") || "—"}`, price: `$${seats.length * 15}.00` },
        ].map((r, i) => (
          <div key={i} className="performance-summary__row">
            <div>
              <p className="label-tiny color-outline" style={{ marginBottom: 4 }}>{r.label}</p>
              <p style={{ fontSize: 14, fontWeight: 500 }}>{r.value}</p>
            </div>
            {r.price && <p style={{ fontSize: 15, fontWeight: 700 }}>{r.price}</p>}
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 28 }}>
        <p className="label-upper color-primary" style={{ marginBottom: 12 }}>⛩ Goodwill Offering</p>
        <p className="color-on-surface-var" style={{ fontSize: 11, lineHeight: 1.7, marginBottom: 16 }}>Support the ongoing mission through a voluntary contribution.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
          {[0, 5, 10, "Custom"].map(o => (
            <button key={o} onClick={() => typeof o === "number" && onOfferingChange(o)}
              className={offering === o ? "role-chip role-chip--active" : "role-chip"}
              style={{ fontSize: 12 }}>
              {typeof o === "number" ? `$${o}` : o}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-col" style={{ gap: 16 }}>
        <div className="flex-row" style={{ justifyContent: "space-between", alignItems: "center", fontSize: 17, fontWeight: 700 }}>
          <span>Total Cost</span>
          <span className="color-primary-container">${total}.00</span>
        </div>
        <button className="submit-btn">Complete Purchase</button>
        <p className="form-note">All tickets are non-refundable purchases.</p>
      </div>
    </div>
  );
}

export default function TicketsPage() {
  const [selectedShow, setSelectedShow] = useState(1);
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedSeats, setSelectedSeats] = useState([2]);
  const [offering, setOffering] = useState(0);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  function toggleSeat(key) {
    setSelectedSeats(prev => prev.includes(key) ? prev.filter(s => s !== key) : [...prev, key]);
  }

  return (
    <main className="tickets-page">
      <StepIndicator />
      <div className="tickets-layout">
        <div className="flex-col" style={{ gap: 64 }}>
          <ShowSelector selected={selectedShow} onSelect={setSelectedShow} />
          <DatePicker selected={selectedDate} onSelect={setSelectedDate} />
          <SeatMap selected={selectedSeats} onToggle={toggleSeat} />
        </div>
        <div>
          <PerformanceSummary showIndex={selectedShow} date={selectedDate} seats={selectedSeats} offering={offering} onOfferingChange={setOffering} />
        </div>
      </div>
      <div style={{ padding: "0 48px" }}>
        <Footer />
      </div>
    </main>
  );
}