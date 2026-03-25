import useColors from "../Main/GlobalColors"
import Footer from "../Main/Footer"
import { useState, useEffect } from "react";

function StepIndicator() {
  const c = useColors();
  const steps = ["I · Production", "II · Seat Choice", "III · Review"];
  return (
    <nav style={{ display: "flex", justifyContent: "center", marginBottom: 64, padding: "0 48px" }}>
      <ol style={{ display: "flex", alignItems: "center", width: "100%", maxWidth: 600 }}>
        {steps.map((s, i) => (
          <li key={s} style={{ display: "flex", alignItems: "center", flex: i < 2 ? 1 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <div style={{ width: 28, height: 28, border: `1px solid ${i === 0 ? c.primaryContainer : c.outline}`, background: i === 0 ? "rgba(249,94,20,0.1)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: i === 0 ? c.primary : c.outline }}>{["I", "II", "III"][i]}</div>
              <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: i === 0 ? c.primary : c.outline }}>{s.split(" · ")[1]}</span>
            </div>
            {i < 2 && <div style={{ flex: 1, height: 1, background: c.outlineVariant, margin: "0 12px" }} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ShowSelector({ selected, onSelect }) {
  const c = useColors();

  const shows = [
    { title: "Mother Rabbit", sub: "Opening Cycle", desc: "An explosive, anarchic comedy inspired by the works of Abbott and Costello and the Marx Brothers." },
    { title: "Animal Crackers", sub: "Adaptation Premiere", desc: "The revival of the old American Comedy genuises: the Marx Brothers." },
    { title: "Missing the Rain", sub: "World Premiere", desc: "A dramatic exploration of forgiveness and family struggles." },
  ];
  return (
    <section>
      <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 28, marginBottom: 32, borderLeft: `2px solid ${c.primaryContainer}`, paddingLeft: 24 }}>I. Choose Your Performance</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {shows.map((show, i) => (
          <div key={i} onClick={() => onSelect(i)} style={{ background: selected === i ? c.surfaceHigh : c.surfaceLow, outline: selected === i ? `1px solid ${c.primaryContainer}` : "none", cursor: "pointer", overflow: "hidden" }}>
            <div style={{ aspectRatio: "16/10", background: `linear-gradient(160deg,${i === 0 ? "#1a0500,#0a0200" : "#1a0a00,#0d0500"})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, position: "relative" }}>
              {i === 0 ? "🕯️" : "🎭"}
              {selected === i && <div style={{ position: "absolute", inset: 0, background: "rgba(249,94,20,0.1)" }} />}
              {selected === i && <span style={{ position: "absolute", top: 8, right: 8, color: c.primaryContainer }}>✓</span>}
            </div>
            <div style={{ padding: 24 }}>
              <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".3em", color: c.primary, display: "block", marginBottom: 8 }}>{show.sub}</span>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{show.title}</h3>
              <p style={{ fontSize: 13, color: c.onSurfaceVariant, lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{show.desc}</p>
              <button style={{ width: "100%", padding: 12, fontSize: 10, letterSpacing: ".2em", textTransform: "uppercase", background: selected === i ? c.primaryContainer : "transparent", color: selected === i ? c.onPrimaryContainer : c.onSurface, border: selected === i ? "none" : `1px solid ${c.outlineVariant}`, fontWeight: selected === i ? 700 : 400 }}>
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
  const c = useColors();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <section>
      <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 28, marginBottom: 32, borderLeft: `2px solid ${c.primaryContainer}`, paddingLeft: 24 }}>II. Choose Your Date</h2>
      <div style={{ background: c.surfaceLow, padding: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8, marginBottom: 16, textAlign: "center" }}>
          {days.map(d => <span key={d} style={{ fontSize: 9, textTransform: "uppercase", color: c.outline, letterSpacing: ".1em" }}>{d}</span>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8 }}>
          {[null, null, null, null].map((_, i) => <div key={i} />)}
          {dates.map(d => {
            const disabled = d <= 2;
            const sel = d === selected;
            return (
              <button key={d} onClick={() => !disabled && onSelect(d)} style={{ aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: 13, cursor: disabled ? "not-allowed" : "pointer", color: disabled ? "rgba(229,226,225,0.25)" : sel ? c.primary : c.onSurface, background: sel ? "rgba(249,94,20,0.15)" : "transparent", border: sel ? `1px solid ${c.primaryContainer}` : `1px solid rgba(89,66,56,0.3)`, transition: "all .2s", gap: 2 }}>
                <span>{d}</span>
                {sel && <span style={{ fontSize: 7, textTransform: "uppercase", letterSpacing: ".1em" }}>Selected</span>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SeatMap({ selected, onToggle }) {
  const c = useColors();
  const rows = [[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5, 6, 7], [null, null, 0, 1, 2, 3, null, null]];
  return (
    <section>
      <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 28, marginBottom: 32, borderLeft: `2px solid ${c.primaryContainer}`, paddingLeft: 24 }}>III. Choose Your Seat</h2>
      <div style={{ background: c.surfaceContainer, padding: 48, textAlign: "center" }}>
        <div style={{ position: "relative", marginBottom: 40 }}>
          <div style={{ width: "75%", margin: "0 auto", height: 2, background: "linear-gradient(to right,transparent,rgba(255,181,154,0.4),transparent)" }} />
          <span style={{ position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", fontSize: 9, textTransform: "uppercase", letterSpacing: ".4em", color: c.primary, whiteSpace: "nowrap" }}>The Stage</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          {rows.map((row, ri) => (
            <div key={ri} style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              {row.map((seat, si) => {
                if (seat === null) return <div key={si} style={{ width: 32, height: 32 }} />;
                const key = ri * 10 + si;
                const occupied = ri === 2 && (si === 0 || si === 1 || si === 6 || si === 7);
                const sel = selected.includes(key);
                return (
                  <button key={si} onClick={() => !occupied && onToggle(key)} style={{ width: 32, height: 32, borderRadius: "6px 6px 0 0", background: occupied ? c.surfaceHighest : sel ? c.primaryContainer : c.surfaceHighest, opacity: occupied ? .3 : 1, cursor: occupied ? "not-allowed" : "pointer", boxShadow: sel ? "0 0 12px rgba(249,94,20,0.4)" : "none", transition: "all .2s", border: "none" }} />
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 40, fontSize: 9, textTransform: "uppercase", letterSpacing: ".2em", color: c.onSurfaceVariant }}>
          {[["Available", c.surfaceHighest, 1], ["Selected", c.primaryContainer, 1], ["Occupied", c.surfaceHighest, .3]].map(([l, bg, op]) => (
            <div key={l} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 12, height: 12, borderRadius: "3px 3px 0 0", background: bg, opacity: op }} />{l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceSummary({ showIndex, date, seats, offering, onOfferingChange }) {
  const c = useColors();
  const shows = ["Mother Rabbit", "Animal Crackers", "Missing the Rain"];
  const total = seats.length * 60 + (typeof offering === "number" ? offering : 0);
  return (
    <div style={{ position: "sticky", top: 120, background: c.surfaceContainer, padding: 32, borderLeft: `1px solid rgba(255,181,154,0.15)` }}>
      <h3 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 20, color: c.primary, marginBottom: 28 }}>Summary of Purchase</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 28, paddingBottom: 28, borderBottom: `1px solid ${c.outlineVariant}` }}>
        {[
          { label: "Production", value: shows[showIndex] },
          { label: "Scheduled Time", value: `June ${String(date).padStart(2, "0")}, 2026 • 7:00 p.m.` },
          { label: "Seat", value: `Row A, Seat ${seats.map(s => s + 1).join(", ") || "—"}`, price: `$${seats.length * 60}.00` },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".15em", color: c.outline, marginBottom: 4 }}>{r.label}</p>
              <p style={{ fontSize: 14, fontWeight: 500 }}>{r.value}</p>
            </div>
            {r.price && <p style={{ fontSize: 15, fontWeight: 700 }}>{r.price}</p>}
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 28 }}>
        <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: c.primary, fontWeight: 700, marginBottom: 12 }}>⛩ Goodwill Offering</p>
        <p style={{ fontSize: 11, color: c.onSurfaceVariant, lineHeight: 1.7, marginBottom: 16 }}>Support the ongoing mission through a voluntary contribution.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
          {[0, 5, 10, "Custom"].map(o => (
            <button key={o} onClick={() => typeof o === "number" && onOfferingChange(o)} style={{ padding: "8px 4px", fontSize: 12, fontWeight: offering === o ? 700 : 400, border: `1px solid ${offering === o ? c.primary : c.outline}`, color: offering === o ? c.primary : c.onSurface, background: offering === o ? "rgba(255,181,154,0.1)" : "transparent", transition: "all .2s" }}>
              {typeof o === "number" ? `$${o}` : o}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 17, fontWeight: 700 }}>
          <span>Total Cost</span>
          <span style={{ color: c.primaryContainer }}>${total}.00</span>
        </div>
        <button style={{ width: "100%", background: c.primaryContainer, color: c.onPrimaryContainer, padding: 16, fontSize: 11, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", boxShadow: "0 10px 30px rgba(249,94,20,0.3)" }}>
          Complete Purchase
        </button>
        <p style={{ fontSize: 9, textAlign: "center", color: c.outlineVariant, fontStyle: "italic" }}>All tickets are non-refundable purchases.</p>
      </div>
    </div>
  );
}

export default function TicketsPage() {
  const [selectedShow, setSelectedShow] = useState(1);
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedSeats, setSelectedSeats] = useState([2, 3]);
  const [offering, setOffering] = useState(25);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  function toggleSeat(key) {
    setSelectedSeats(prev => prev.includes(key) ? prev.filter(s => s !== key) : [...prev, key]);
  }

  return (
    <main style={{ padding: "48px 0 96px", maxWidth: 1200, margin: "0 auto" }}>
      <StepIndicator />
      <div style={{ display: "grid", gridTemplateColumns: "8fr 4fr", gap: 48, padding: "0 48px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
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