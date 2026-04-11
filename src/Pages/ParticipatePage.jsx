import { useState, useEffect } from "react";
import Footer from "../Main/Footer";
import axios from "axios";
import "../Style/index.css";
import emailjs from '@emailjs/browser';
import emailTemplates from "../Data/EmailTemplates";

async function sendEmail(form, types) {
  for (const type of types) {
    let currTemplate = {...emailTemplates[type]};
    let currBody = currTemplate.body;
    let currSubject = currTemplate.subject;
    for (let key in form) {
      if (Array.isArray(form[key])) {
        let listedValues = form[key].join(', ')
        currBody = currBody.replaceAll(`{{${key}}}`, listedValues)
        currSubject = currSubject.replaceAll(`{{${key}}}`, listedValues)
      } else {
        currBody = currBody.replaceAll(`{{${key}}}`, form[key])
        currSubject = currSubject.replaceAll(`{{${key}}}`, form[key])
      }
    }
    currTemplate.subject = currSubject;
    currTemplate.body = currBody;
    currTemplate.email = form.email;
    await emailjs.send(
      'service_vgqmgoo',
      currTemplate.id,
      currTemplate,
      '0_BUIZUi6PwsND1oX'
    );
  }
  return;
}

// ── Shared field ─────────────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div className="field">
      <label className="field__label">{label}</label>
      {children}
    </div>
  );
}

function SubmitBtn({ label, disabled }) {
  return (
    <button
      disabled={disabled}
      className={disabled ? "submit-btn submit-btn--disabled" : "submit-btn"}
      onMouseEnter={e => { if (!disabled) e.currentTarget.style.opacity = ".85"; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
    >{label}</button>
  );
}

function SuccessBanner({ msg }) {
  return (
    <div className="success-banner">
      <span className="color-primary-container" style={{ fontSize: 18 }}>✦</span>
      <p className="success-banner__msg">{msg}</p>
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function SectionBlock({ id, eyebrow, heading, sub, accent, children }) {
  return (
    <section id={id} className="section-block">
      <div className="container">
        <div className="section-block__grid">
          <div className="section-block__label">
            <div className="flex-row" style={{ alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div className="divider-flame" style={{ height: 1, width: 36 }} />
              <span className="label-tiny color-primary" style={{ letterSpacing: ".35em" }}>{eyebrow}</span>
            </div>
            <h2 className="serif-italic section-block__heading">
              {heading}{accent && <span className="color-primary-container">{accent}</span>}
            </h2>
            <p className="body-md color-on-surface-var" style={{ fontSize: 14 }}>{sub}</p>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

// ── Form card wrapper ─────────────────────────────────────────────────────────
function FormCard({ eyebrow, children }) {
  return (
    <div className="form-card">
      <p className="form-card__eyebrow">✦ {eyebrow}</p>
      {children}
    </div>
  );
}

function FormGrid({ children }) {
  return <div className="form-grid">{children}</div>;
}

function FormNote({ children }) {
  return <p className="form-note">{children}</p>;
}

// ── Auditions ─────────────────────────────────────────────────────────────────
function AuditionsForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", production: "", experience: "", training: "", note: "" });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const submitForm = (form, type) => {
    sendEmail(form, type).then(() => {
      setSent(true);
    })
  }
  return (
    <FormCard eyebrow="Audition Inquiry">
      {sent ? <SuccessBanner msg="Your audition inquiry has been received. We'll be in touch soon." /> : (
        <div className="form-fields">
          <FormGrid>
            <Field label="Full Name">
              <input className="field__input" value={form.name} onChange={e => up("name", e.target.value)} placeholder="Your name" />
            </Field>
            <Field label="Email Address">
              <input className="field__input" value={form.email} onChange={e => up("email", e.target.value)} placeholder="you@email.com" type="email" />
            </Field>
          </FormGrid>
          <FormGrid>
            <Field label="Phone (optional)">
              <input className="field__input" value={form.phone} onChange={e => up("phone", e.target.value)} placeholder="(000) 000-0000" />
            </Field>
            <Field label="Production of Interest">
              <select className="field__input field__select" value={form.production} onChange={e => up("production", e.target.value)}>
                <option value="" disabled hidden>Select a production…</option>
                <option>Mother Rabbit</option>
                <option>Animal Crackers</option>
                <option>Missing the Rain</option>
                <option>Any Show</option>
              </select>
            </Field>
          </FormGrid>
          <Field label="Performance Experience">
            <textarea className="field__input field__textarea" value={form.experience} onChange={e => up("experience", e.target.value)} rows={3} placeholder="Briefly describe your acting, singing, or dance experience…" />
          </Field>
          <Field label="Training & Education (optional)">
            <input className="field__input" value={form.training} onChange={e => up("training", e.target.value)} placeholder="Schools, workshops, coaches…" />
          </Field>
          <Field label="Anything Else?">
            <textarea className="field__input field__textarea" value={form.note} onChange={e => up("note", e.target.value)} rows={2} placeholder="Questions, scheduling notes, special skills…" />
          </Field>
          <div onClick={() => form.name && form.email && form.production && submitForm(form, ["auditionUser", "auditionSOF"])}>
            <SubmitBtn label="Submit Audition Inquiry →" disabled={!form.name || !form.email || !form.production} />
          </div>
          <FormNote>Audition dates are announced per production. Submitting this form does not guarantee a slot.</FormNote>
        </div>
      )}
    </FormCard>
  );
}

// ── Submissions ───────────────────────────────────────────────────────────────
function SubmissionsForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", title: "", type: "", logline: "", draft: "", note: "" });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const submitForm = (form, type) => {
    sendEmail(form, type).then(() => {
      setSent(true);
    })
  }

  const [selectedFile, setSelectedFile] = useState(null);
  const onFileChange = (event) => {
    console.log("🚀 ~ onFileChange ~ event:", event)
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      selectedFile,
      selectedFile.name
    );
    console.log(selectedFile);
    axios.post("api/uploadfile", formData);
  };
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          <p>
            Last Modified: {selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <FormCard eyebrow="Project Submission">
      {sent ? <SuccessBanner msg="Your submission has been received. Our dramaturg will review it carefully." /> : (
        <div className="form-fields">
          <FormGrid>
            <Field label="Your Name">
              <input className="field__input" value={form.name} onChange={e => up("name", e.target.value)} placeholder="Full name" />
            </Field>
            <Field label="Email Address">
              <input className="field__input" value={form.email} onChange={e => up("email", e.target.value)} placeholder="you@email.com" type="email" />
            </Field>
          </FormGrid>
          <FormGrid>
            <Field label="Project Title">
              <input className="field__input" value={form.title} onChange={e => up("title", e.target.value)} placeholder="Working title" />
            </Field>
            <Field label="Project Type">
              <select className="field__input field__select" value={form.type} onChange={e => up("type", e.target.value)}>
                <option value="" disabled hidden>Select a type…</option>
                <option>Original Play</option>
                <option>Original Musical</option>
                <option>Adaptation</option>
                <option>One-Act</option>
                <option>Other</option>
              </select>
            </Field>
          </FormGrid>
          <Field label="Project Summary">
            <textarea className="field__input field__textarea" value={form.logline} onChange={e => up("logline", e.target.value)} rows={4} placeholder="A brief description of your project — and why you want to tell this story - This should be no more than 4-5 sentences" />
          </Field>
          {/* <FormGrid> */}
          {/* <Field label="Upload Project">
              <input type="file" className="field__input" value={selectedFile?.name} onChange={onFileChange} placeholder="Upload your project" />
          </Field> */}
          <Field label="Draft Status">
            <select className="field__input field__select" value={form.draft} onChange={e => up("draft", e.target.value)}>
              <option value="" disabled hidden>Where is the project?</option>
              <option>Concept / Outline</option>
              <option>First Draft</option>
              <option>Revised Draft</option>
              <option>Production-Ready</option>
            </select>
          </Field>
          {/* </FormGrid> */}
          <Field label="Additional Notes (optional)">
            <textarea className="field__input field__textarea" value={form.note} onChange={e => up("note", e.target.value)} rows={2} placeholder="Inspirations, collaborators, any context you'd like us to know…" />
          </Field>
          <div onClick={() => form.name && form.email && form.title && form.type && submitForm(form, ["projectUser", "projectSOF"])}>
            <SubmitBtn label="Submit Project →" disabled={!form.name || !form.email || !form.title || !form.type} />
          </div>
          <FormNote>We will followup to read submissions. Response times may vary depending on our current production schedule.</FormNote>
        </div>
      )}
    </FormCard>
  );
}

// ── Crew ──────────────────────────────────────────────────────────────────────
const CREW_ROLES = ["Stage Management", "Lighting Design", "Sound Design", "Set Design & Construction", "Costume & Wardrobe", "Props", "Front of House", "Marketing & Photography", "General Volunteer"];

function CrewForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", roles: [], availability: "", experience: "", note: "" });
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const toggleRole = r => setForm(p => ({
    ...p, roles: p.roles.includes(r) ? p.roles.filter(x => x !== r) : [...p.roles, r],
  }));
  const submitForm = (form, type) => {
    sendEmail(form, type).then(() => {
      setSent(true);
    })
  }

  return (
    <FormCard eyebrow="Crew Inquiry">
      {sent ? <SuccessBanner msg="Welcome to the family. We'll reach out about upcoming crew opportunities." /> : (
        <div className="form-fields">
          <FormGrid>
            <Field label="Full Name">
              <input className="field__input" value={form.name} onChange={e => up("name", e.target.value)} placeholder="Your name" />
            </Field>
            <Field label="Email Address">
              <input className="field__input" value={form.email} onChange={e => up("email", e.target.value)} placeholder="you@email.com" type="email" />
            </Field>
          </FormGrid>
          <Field label="Areas of Interest — select all that apply">
            <div className="role-chips">
              {CREW_ROLES.map(r => {
                const sel = form.roles.includes(r);
                return (
                  <button key={r} onClick={() => toggleRole(r)}
                    className={sel ? "role-chip role-chip--active" : "role-chip"}
                  >{r}</button>
                );
              })}
            </div>
          </Field>
          <Field label="Availability">
            <select className="field__input field__select" value={form.availability} onChange={e => up("availability", e.target.value)}>
              <option value="" disabled hidden>How available are you?</option>
              <option>Evenings & Weekends</option>
              <option>Weekends Only</option>
              <option>Flexible</option>
              <option>Production-by-Production</option>
            </select>
          </Field>
          <Field label="Relevant Experience (optional)">
            <textarea className="field__input field__textarea" value={form.experience} onChange={e => up("experience", e.target.value)} rows={3} placeholder="Past productions, skills, tools you work with…" />
          </Field>
          <Field label="Anything Else?">
            <textarea className="field__input field__textarea" value={form.note} onChange={e => up("note", e.target.value)} rows={2} placeholder="Questions, motivations, or anything you'd like us to know…" />
          </Field>
          <div onClick={() => form.name && form.email && form.roles.length && submitForm(form, ["crewUser", "crewSOF"])}>
            <SubmitBtn label="Join the Crew →" disabled={!form.name || !form.email || !form.roles.length} />
          </div>
          <FormNote>Crew positions are filled per production. We'll contact you when a relevant opportunity arises.</FormNote>
        </div>
      )}
    </FormCard>
  );
}

// ── Jump card ─────────────────────────────────────────────────────────────────
function JumpCard({ card, i, onNav }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="jump-card"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onNav(card.id)}
      style={{
        borderRight: i < 2 ? "1px solid rgba(89,66,56,0.2)" : "none",
        background: hov ? "var(--surface-container)" : "transparent",
        cursor: hov ? "pointer" : "auto"
      }}
    >
      <span className="jump-card__emoji" style={{ filter: hov ? "grayscale(0)" : "grayscale(1)", cursor: hov ? "pointer" : "auto" }}>{card.emoji}</span>
      <div>
        <p className="jump-card__label serif" style={{ color: hov ? "var(--primary)" : "var(--on-surface)", cursor: hov ? "pointer" : "auto" }}>{card.label}</p>
        <p className="label-xs color-outline">{card.desc}</p>
      </div>
      <span className="jump-card__arrow" style={{ color: "var(--primary-container)" }}>↓</span>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function ParticipateHero({ onNav }) {
  const cards = [
    { label: "Auditions", desc: "Step onto the stage", emoji: "🎭", id: "auditions" },
    { label: "Submissions", desc: "Pitch your project", emoji: "✍️", id: "submissions" },
    { label: "Join the Crew", desc: "Work behind the scenes", emoji: "🔧", id: "crew" },
  ];

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", height: 520, display: "flex", alignItems: "flex-end", padding: "0 48px 80px" }}>
        <div className="participate-hero__bg-base" />
        <div className="participate-hero__bg-fade" />
        <div className="participate-hero__bg-glow" />
        <div className="hero__bg-image" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
          <span className="label-xs color-primary-container" style={{ letterSpacing: ".4em", display: "block", marginBottom: 20 }}>Be Part of the Story</span>
          <h1 className="display-xl color-on-surface" style={{ marginBottom: 24 }}>Participate</h1>
          <p className="body-md color-on-surface-var" style={{ fontSize: 17, maxWidth: 540 }}>
            Spirit of Fire is built by passionate people. Whether you perform, create, or work behind the scenes — there is a place for you here.
          </p>
        </div>
      </div>
      <div className="participate-hero__jump-bar">
        <div className="participate-hero__jump-grid">
          {cards.map((card, i) => <JumpCard key={card.id} card={card} i={i} onNav={onNav} />)}
        </div>
      </div>
    </section>
  );
}

// ── Section divider ───────────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="container">
      <div className="section-divider" />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ParticipatePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{ paddingTop: 80 }}>
      <ParticipateHero onNav={scrollTo} />
      <SectionBlock id="auditions" eyebrow="On Stage" heading="Auditions"
        sub="We hold open auditions for each production and welcome performers of all backgrounds. Fill out the form below and we'll reach out when auditions are announced for your production of interest.">
        <AuditionsForm />
      </SectionBlock>
      <Divider />
      <SectionBlock id="submissions" eyebrow="Original Work" heading="Project" accent=" Submissions"
        sub="Do you have a play, musical, or adaptation you believe in? Spirit of Fire is always looking for bold, character driven stories that speak to the human experience.">
        <SubmissionsForm />
      </SectionBlock>
      <Divider />
      <SectionBlock id="crew" eyebrow="Behind the Scenes" heading="Join the " accent="Crew"
        sub="Great theatre is built by many hands. If you want to contribute your skills backstage — in design, production, stage management, or any other capacity — we want to hear from you.">
        <CrewForm />
      </SectionBlock>
      <Footer />
    </main>
  );
}