import { useState, useEffect } from "react";
import GlobalStyles from "../Main/GlobalStyles"
import useColors from "../Main/GlobalColors"
import Footer from "../Main/Footer"
// ── Shared field styles ──────────────────────────────────────────────────────
function useFieldStyle(c) {
  return {
    base: {
      background: "transparent", border: "none",
      borderBottom: `1px solid ${c.outlineVariant}`,
      outline: "none", color: c.onSurface, fontSize: 15,
      padding: "10px 0", width: "100%", transition: "border-color .2s",
    },
  };
}

function Field({ label, children }) {
  const c = useColors();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".25em", color: c.outline }}>{label}</label>
      {children}
    </div>
  );
}

function SubmitBtn({ label, disabled }) {
  const c = useColors();
  return (
    <button
      disabled={disabled}
      style={{
        width: "100%", background: disabled ? c.surfaceHighest : c.primaryContainer,
        color: disabled ? c.outline : c.onPrimaryContainer,
        padding: "18px 0", fontSize: 11, fontWeight: 700, letterSpacing: ".25em",
        textTransform: "uppercase", transition: "all .3s",
        boxShadow: disabled ? "none" : "0 10px 30px rgba(249,94,20,0.2)",
      }}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.opacity = ".85"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
    >{label}</button>
  );
}

function SuccessBanner({ msg }) {
  const c = useColors();
  return (
    <div style={{ background: "rgba(249,94,20,0.1)", border: `1px solid rgba(249,94,20,0.3)`, padding: "16px 24px", display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ color: c.primaryContainer, fontSize: 18 }}>✦</span>
      <p style={{ fontSize: 13, color: c.primary }}>{msg}</p>
    </div>
  );
}

// ── Section wrapper ──────────────────────────────────────────────────────────
function SectionBlock({ id, eyebrow, heading, sub, accent, children }) {
  const c = useColors();
  return (
    <section id={id} style={{ padding: "96px 0", scrollMarginTop: 100 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 5fr", gap: 80, alignItems: "start" }}>
          {/* Left label */}
          <div style={{ position: "sticky", top: 120 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ height: 1, width: 36, background: c.primaryContainer }} />
              <span style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".35em", color: c.primary }}>{eyebrow}</span>
            </div>
            <h2 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 48, lineHeight: 1.05, marginBottom: 20 }}>
              {heading}{accent && <span style={{ color: c.primaryContainer }}>{accent}</span>}
            </h2>
            <p style={{ color: c.onSurfaceVariant, lineHeight: 1.8, fontSize: 14, fontWeight: 300 }}>{sub}</p>
          </div>
          {/* Right form */}
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

// ── Auditions ────────────────────────────────────────────────────────────────
function AuditionsForm() {
  const c = useColors();
  const { base } = useFieldStyle(c);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", production: "", experience: "", training: "", note: "" });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const focus = e => e.target.style.borderBottomColor = c.primary;
  const blur = e => e.target.style.borderBottomColor = c.outlineVariant;

  return (
    <div style={{ background: c.surfaceLow, border: `1px solid rgba(89,66,56,0.2)`, padding: 48 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 32 }}>✦ Audition Inquiry</p>
      {sent ? <SuccessBanner msg="Your audition inquiry has been received. We'll be in touch soon." /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Full Name">
              <input value={form.name} onChange={e => up("name", e.target.value)} placeholder="Your name" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Email Address">
              <input value={form.email} onChange={e => up("email", e.target.value)} placeholder="you@email.com" type="email" style={base} onFocus={focus} onBlur={blur} />
            </Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Phone (optional)">
              <input value={form.phone} onChange={e => up("phone", e.target.value)} placeholder="(000) 000-0000" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Production of Interest">
              <select value={form.production} onChange={e => up("production", e.target.value)}
                style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, cursor: "pointer" }}
                onFocus={focus} onBlur={blur}>
                <option value="" style={{ color: "black" }} disabled selected hidden>Select a production…</option>
                <option style={{ color: "black" }}>Mother Rabbit</option>
                <option style={{ color: "black" }}>Animal Crackers</option>
                <option style={{ color: "black" }}>Missing the Rain</option>
                <option style={{ color: "black" }}>Open / Any</option>
              </select>
            </Field>
          </div>
          <Field label="Performance Experience">
            <textarea value={form.experience} onChange={e => up("experience", e.target.value)} rows={3}
              placeholder="Briefly describe your acting, singing, or dance experience…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <Field label="Training & Education (optional)">
            <input value={form.training} onChange={e => up("training", e.target.value)} placeholder="Schools, workshops, coaches…" style={base} onFocus={focus} onBlur={blur} />
          </Field>
          <Field label="Anything Else?">
            <textarea value={form.note} onChange={e => up("note", e.target.value)} rows={2}
              placeholder="Questions, scheduling notes, special skills…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <div onClick={() => form.name && form.email && setSent(true)}>
            <SubmitBtn label="Submit Audition Inquiry →" disabled={!form.name || !form.email} />
          </div>
          <p style={{ fontSize: 9, color: c.outlineVariant, fontStyle: "italic", textAlign: "center" }}>Audition dates are announced per production. Submitting this form does not guarantee a slot.</p>
        </div>
      )}
    </div>
  );
}

// ── Project Submissions ──────────────────────────────────────────────────────
function SubmissionsForm() {
  const c = useColors();
  const { base } = useFieldStyle(c);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", title: "", type: "", logline: "", draft: "", note: "" });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const focus = e => e.target.style.borderBottomColor = c.primary;
  const blur = e => e.target.style.borderBottomColor = c.outlineVariant;

  return (
    <div style={{ background: c.surfaceLow, border: `1px solid rgba(89,66,56,0.2)`, padding: 48 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 32 }}>✦ Project Submission</p>
      {sent ? <SuccessBanner msg="Your submission has been received. Our dramaturg will review it carefully." /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Your Name">
              <input value={form.name} onChange={e => up("name", e.target.value)} placeholder="Full name" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Email Address">
              <input value={form.email} onChange={e => up("email", e.target.value)} placeholder="you@email.com" type="email" style={base} onFocus={focus} onBlur={blur} />
            </Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Project Title">
              <input value={form.title} onChange={e => up("title", e.target.value)} placeholder="Working title" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Project Type">
              <select value={form.type} onChange={e => up("type", e.target.value)}
                style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, cursor: "pointer" }}
                onFocus={focus} onBlur={blur}>
                <option value="" style={{ color: "black" }} disabled selected hidden>Select a type…</option>
                <option style={{ color: "black" }}>Original Play</option>
                <option style={{ color: "black" }}>Musical</option>
                <option style={{ color: "black" }}>Adaptation</option>
                <option style={{ color: "black" }}>One-Act</option>
                <option style={{ color: "black" }}>Other</option>
              </select>
            </Field>
          </div>
          <Field label="Logline / Synopsis">
            <textarea value={form.logline} onChange={e => up("logline", e.target.value)} rows={4}
              placeholder="A brief description of your project — its story, themes, and what makes it worth telling…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <Field label="Draft Status">
            <select value={form.draft} onChange={e => up("draft", e.target.value)}
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, cursor: "pointer" }}
              onFocus={focus} onBlur={blur}>
              <option value="" style={{ color: "black" }} disabled selected hidden>Where is the project?</option>
              <option style={{ color: "black" }}>Concept / Outline</option>
              <option style={{ color: "black" }}>First Draft</option>
              <option style={{ color: "black" }}>Revised Draft</option>
              <option style={{ color: "black" }}>Production-Ready</option>
            </select>
          </Field>
          <Field label="Additional Notes (optional)">
            <textarea value={form.note} onChange={e => up("note", e.target.value)} rows={2}
              placeholder="Inspirations, collaborators, any context you'd like us to know…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <div onClick={() => form.name && form.email && form.title && setSent(true)}>
            <SubmitBtn label="Submit Project →" disabled={!form.name || !form.email || !form.title} />
          </div>
          <p style={{ fontSize: 9, color: c.outlineVariant, fontStyle: "italic", textAlign: "center" }}>We read every submission. Response times may vary depending on our current production schedule.</p>
        </div>
      )}
    </div>
  );
}

// ── Join the Crew ────────────────────────────────────────────────────────────
const CREW_ROLES = ["Stage Management", "Lighting Design", "Sound Design", "Set Design & Construction", "Costume & Wardrobe", "Props", "Front of House", "Marketing & Photography", "General Volunteer"];

function CrewForm() {
  const c = useColors();
  const { base } = useFieldStyle(c);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", roles: [], availability: "", experience: "", note: "" });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const toggleRole = r => setForm(p => ({
    ...p,
    roles: p.roles.includes(r) ? p.roles.filter(x => x !== r) : [...p.roles, r],
  }));
  const focus = e => e.target.style.borderBottomColor = c.primary;
  const blur = e => e.target.style.borderBottomColor = c.outlineVariant;

  return (
    <div style={{ background: c.surfaceLow, border: `1px solid rgba(89,66,56,0.2)`, padding: 48 }}>
      <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".3em", color: c.primaryContainer, marginBottom: 32 }}>✦ Crew Inquiry</p>
      {sent ? <SuccessBanner msg="Welcome to the family. We'll reach out about upcoming crew opportunities." /> : (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Field label="Full Name">
              <input value={form.name} onChange={e => up("name", e.target.value)} placeholder="Your name" style={base} onFocus={focus} onBlur={blur} />
            </Field>
            <Field label="Email Address">
              <input value={form.email} onChange={e => up("email", e.target.value)} placeholder="you@email.com" type="email" style={base} onFocus={focus} onBlur={blur} />
            </Field>
          </div>
          <Field label="Areas of Interest — select all that apply">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, paddingTop: 8 }}>
              {CREW_ROLES.map(r => {
                const sel = form.roles.includes(r);
                return (
                  <button key={r} onClick={() => toggleRole(r)} style={{
                    padding: "7px 16px", fontSize: 11, letterSpacing: ".1em",
                    border: `1px solid ${sel ? c.primaryContainer : "rgba(89,66,56,0.5)"}`,
                    background: sel ? "rgba(249,94,20,0.12)" : "transparent",
                    color: sel ? c.primary : c.onSurfaceVariant,
                    transition: "all .2s",
                  }}>{r}</button>
                );
              })}
            </div>
          </Field>
          <Field label="Availability">
            <select value={form.availability} onChange={e => up("availability", e.target.value)}
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, cursor: "pointer" }}
              onFocus={focus} onBlur={blur}>
              <option value="" style={{ color: "black" }} disabled selected hidden>How available are you?</option>
              <option style={{ color: "black" }}>Evenings & Weekends</option>
              <option style={{ color: "black" }}>Weekends Only</option>
              <option style={{ color: "black" }}>Flexible</option>
              <option style={{ color: "black" }}>Production-by-Production</option>
            </select>
          </Field>
          <Field label="Relevant Experience (optional)">
            <textarea value={form.experience} onChange={e => up("experience", e.target.value)} rows={3}
              placeholder="Past productions, skills, tools you work with…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <Field label="Anything Else?">
            <textarea value={form.note} onChange={e => up("note", e.target.value)} rows={2}
              placeholder="Questions, motivations, or anything you'd like us to know…"
              style={{ ...base, borderBottom: `1px solid ${c.outlineVariant}`, resize: "none" }}
              onFocus={focus} onBlur={blur} />
          </Field>
          <div onClick={() => form.name && form.email && setSent(true)}>
            <SubmitBtn label="Join the Crew →" disabled={!form.name || !form.email} />
          </div>
          <p style={{ fontSize: 9, color: c.outlineVariant, fontStyle: "italic", textAlign: "center" }}>Crew positions are filled per production. We'll contact you when a relevant opportunity arises.</p>
        </div>
      )}
    </div>
  );
}

// ── Jump Card ────────────────────────────────────────────────────────────────
function JumpCard({ card, i, onNav }) {
  const c = useColors();
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onNav(card.id)}
      style={{
        padding: "36px 40px", cursor: "pointer", display: "flex", alignItems: "center", gap: 20,
        borderRight: i < 2 ? `1px solid rgba(89,66,56,0.2)` : "none",
        background: hov ? c.surfaceContainer : "transparent",
        transition: "background .3s",
      }}
    >
      <span style={{ fontSize: 28, filter: hov ? "grayscale(0)" : "grayscale(1)", transition: "filter .4s" }}>{card.emoji}</span>
      <div>
        <p style={{ fontFamily: "'Noto Serif',serif", fontSize: 18, color: hov ? c.primary : c.onSurface, transition: "color .3s", marginBottom: 2 }}>{card.label}</p>
        <p style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".2em", color: c.outline }}>{card.desc}</p>
      </div>
      <span style={{ marginLeft: "auto", color: hov ? c.primaryContainer : "transparent", fontSize: 18, transition: "color .3s" }}>→</span>
    </div>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function ParticipateHero({ onNav }) {
  const c = useColors();
  const cards = [
    { label: "Auditions", desc: "Step onto the stage", emoji: "🎭", id: "auditions" },
    { label: "Submissions", desc: "Pitch your project", emoji: "✍️", id: "submissions" },
    { label: "Join the Crew", desc: "Work behind the scenes", emoji: "🔥", id: "crew" },
  ];
  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 48px 80px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.15) 70%)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: .2, backgroundImage: "radial-gradient(ellipse at 50% 30%,rgba(249,94,20,0.7) 0%,transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: ".4em", color: c.primaryContainer, display: "block", marginBottom: 20 }}>Be Part of the Story</span>
          <h1 style={{ fontFamily: "'Noto Serif',serif", fontStyle: "italic", fontSize: 80, lineHeight: .92, letterSpacing: "-.03em", color: c.onSurface, marginBottom: 24 }}>
            Participate
          </h1>
          <p style={{ fontSize: 17, color: c.onSurfaceVariant, maxWidth: 540, lineHeight: 1.7, fontWeight: 300 }}>
            Spirit of Fire is built by passionate people. Whether you perform, create, or work behind the scenes — there is a place for you here.
          </p>
        </div>
      </div>

      {/* Jump cards */}
      <div style={{ background: c.surfaceLowest, borderTop: `1px solid rgba(89,66,56,0.15)` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          {cards.map((card, i) => (
            <JumpCard key={card.id} card={card} i={i} onNav={onNav} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Divider ──────────────────────────────────────────────────────────────────
function Divider() {
  const c = useColors();
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
      <div style={{ height: 1, background: `linear-gradient(to right,${c.primaryContainer},rgba(89,66,56,0.2),transparent)` }} />
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ParticipatePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />
      <main style={{ paddingTop: 80 }}>
        <ParticipateHero onNav={scrollTo} />

        <SectionBlock
          id="auditions"
          eyebrow="On Stage"
          heading="Auditions"
          sub="We hold open auditions for each production and welcome performers of all backgrounds. Fill out the form below and we'll reach out when auditions are announced for your production of interest."
        >
          <AuditionsForm />
        </SectionBlock>

        <Divider />

        <SectionBlock
          id="submissions"
          eyebrow="Original Work"
          heading="Project"
          accent=" Submissions"
          sub="Do you have a play, musical, or adaptation you believe in? Spirit of Fire is always looking for bold original stories that speak to the human experience through the lens of faith and craft. Pitch us your project."
        >
          <SubmissionsForm />
        </SectionBlock>

        <Divider />

        <SectionBlock
          id="crew"
          eyebrow="Behind the Scenes"
          heading="Join the "
          accent="Crew"
          sub="Great theatre is built by many hands. If you want to contribute your skills backstage — in design, production, stage management, or any other capacity — we want to hear from you."
        >
          <CrewForm />
        </SectionBlock>

        <Footer />
      </main>
    </>
  );
}