import { useState, useEffect, useCallback } from "react";
import { useAuth } from "../Main/AuthContext";
import { useNavigate } from "react-router-dom";
import People from "../Data/CastCrew"
import "../Style/planning.css";

// ── Google Sheets config ──────────────────────────────────────────────────────
const SHEET_ID = "19pXlRO9zcZZppLdCf2rHXEXX6LbvLZtm-_ptzwKB604";

const GID_PROJECT_LIST  = 0;
const GID_NEXT_PROJECTS = 435583994; // ← REPLACE with your Next Projects tab gid

function parseSheetResponse(text) {
  const start = text.indexOf("{");
  const end   = text.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("Unexpected gviz response format");
  return JSON.parse(text.substring(start, end + 1));
}

function cellVal(cell) {
  if (!cell) return "";
  return cell.f ?? (cell.v !== null && cell.v !== undefined ? String(cell.v) : "");
}

async function fetchSheetByGid(gid) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${gid}`;
  const res  = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching gid=${gid}`);
  const text = await res.text();
  const data = parseSheetResponse(text);
  return (data.table?.rows ?? []).slice(1).filter(r => r.c && r.c[0]?.v);
}

// ── Constants ─────────────────────────────────────────────────────────────────
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const GENRES = ["Comedy","Drama","Romance","Musical","Tragedy","Mystery","One-Act","Other"];
const TYPES  = ["Original Work","Adaptation","World Premiere","Revival","Reading"];

// Team members shown in the notes sidebar — edit as needed
const TEAM_MEMBERS = People.crew;

// ── localStorage helpers ──────────────────────────────────────────────────────
function lsGet(key, fb) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fb; }
  catch { return fb; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

// ── Shared field ──────────────────────────────────────────────────────────────
function Field({ label, children }) {
  return (
    <div className="field">
      <label className="field__label">{label}</label>
      {children}
    </div>
  );
}

// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, accent, action }) {
  return (
    <div className="planning-section-header">
      <div className="planning-section-header__left">
        <div className="planning-section-header__rule-row">
          <div className="planning-section-header__rule" />
          <span className="label-tiny color-primary" style={{ letterSpacing: ".35em" }}>{eyebrow}</span>
        </div>
        <h2 className="serif-italic color-on-surface planning-section-header__title">
          {title}{accent && <span className="color-primary-container"> {accent}</span>}
        </h2>
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

// ── Sync status bar ───────────────────────────────────────────────────────────
function SyncBar({ status, lastSynced, onRefresh }) {
  const configs = {
    loading: { cls: "sync-bar__dot--loading", text: "Syncing with Google Sheets…" },
    ok:      { cls: "sync-bar__dot--ok",      text: lastSynced ? `Synced from Google Sheets · ${lastSynced}` : "Synced from Google Sheets" },
    error:   { cls: "sync-bar__dot--error",   text: "Could not reach Google Sheets — showing local data" },
    local:   { cls: "sync-bar__dot--local",   text: "Using local data — not connected to Google Sheets" },
  };
  const cfg = configs[status] || configs.local;

  return (
    <div className="sync-bar">
      <div className={`sync-bar__dot ${cfg.cls}`} />
      <span className="label-xs color-outline" style={{ letterSpacing: ".1em" }}>{cfg.text}</span>
      <button className="sync-bar__refresh" onClick={onRefresh}>↺ Refresh</button>
    </div>
  );
}

// ── Project modal ─────────────────────────────────────────────────────────────
function ProjectModal({ existing, onSave, onClose }) {
  const [form, setForm] = useState(
    existing || { name: "", genre: "", type: "", author: "", image: "" }
  );
  const up = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.name && form.genre && form.type;

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="team-modal">
        <div className="team-modal__rule" />
        <h3 className="serif-italic color-on-surface team-modal__title">
          {existing ? "Edit Project" : "Add to Project List"}
        </h3>
        <div className="form-fields">
          <Field label="Title *">
            <input className="field__input" value={form.name}
              onChange={e => up("name", e.target.value)} placeholder="Project title" />
          </Field>
          <div className="form-grid">
            <Field label="Genre *">
              <select className="field__input field__select" value={form.genre}
                onChange={e => up("genre", e.target.value)}>
                <option value="" disabled hidden>Select genre…</option>
                {GENRES.map(g => <option key={g}>{g}</option>)}
              </select>
            </Field>
            <Field label="Type *">
              <select className="field__input field__select" value={form.type}
                onChange={e => up("type", e.target.value)}>
                <option value="" disabled hidden>Select type…</option>
                {TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Author / Playwright (optional)">
            <input className="field__input" value={form.author}
              onChange={e => up("author", e.target.value)} placeholder="e.g. Benjamin Gagliardi" />
          </Field>
          <Field label="Cover Image URL (optional)">
            <input className="field__input" value={form.image}
              onChange={e => up("image", e.target.value)} placeholder="https://…" />
          </Field>
        </div>
        <div className="team-modal__actions">
          <button className="submit-btn" style={{ flex: 1, opacity: valid ? 1 : 0.45 }}
            disabled={!valid} onClick={() => valid && onSave(form)}>
            {existing ? "Save Changes" : "Add Project"} →
          </button>
          <button className="btn-ghost" onClick={onClose} style={{ padding: "14px 24px" }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

// ── Schedule modal ────────────────────────────────────────────────────────────
function ScheduleModal({ project, existing, scheduled, projects, onSave, onClose }) {
  const cur = new Date().getFullYear();
  const [month, setMonth] = useState(existing?.month ?? "");
  const [year,  setYear]  = useState(existing?.year  ?? cur);
  const years = Array.from({ length: 8 }, (_, i) => cur + i);

  const selectedMonth = month === "" ? null : Number(month);
  const conflict = selectedMonth !== null && scheduled.find(s => {
    if (s.projectId === project.id) return false;
    return s.month === selectedMonth && s.year === year;
  });
  const conflictName = conflict
    ? (projects.find(p => p.id === conflict.projectId)?.name ?? "another project")
    : null;
  const canSave = !conflict;

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="team-modal team-modal--narrow">
        <div className="team-modal__rule" />
        <p className="label-xs color-primary team-modal__eyebrow">Schedule</p>
        <h3 className="serif-italic color-on-surface team-modal__title">{project.name}</h3>
        <div className="form-fields">
          <div className="form-grid">
            <Field label="Month (optional)">
              <select className="field__input field__select" value={month}
                onChange={e => setMonth(e.target.value)}
                style={{ borderBottomColor: conflict ? "rgba(220,80,60,0.7)" : undefined }}>
                <option value="">Any month</option>
                {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
              </select>
            </Field>
            <Field label="Year *">
              <select className="field__input field__select" value={year}
                onChange={e => setYear(Number(e.target.value))}>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </Field>
          </div>
          {conflict && (
            <div className="login-error">
              <span className="login-error__text">
                {MONTHS[selectedMonth]} {year} is already assigned to <em>{conflictName}</em>. Choose a different month or year.
              </span>
            </div>
          )}
        </div>
        <div className="team-modal__actions team-modal__actions--tight">
          <button className="submit-btn" style={{ flex: 1, opacity: canSave ? 1 : 0.45 }}
            disabled={!canSave}
            onClick={() => canSave && onSave({ month: selectedMonth, year })}>
            Confirm →
          </button>
          <button className="btn-ghost" onClick={onClose} style={{ padding: "14px 24px" }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

// ── Project List section ──────────────────────────────────────────────────────
function ProjectList({ projects, onAdd, onEdit, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [editing,   setEditing]   = useState(null);

  function handleSave(form) {
    if (editing) onEdit({ ...editing, ...form });
    else         onAdd({ ...form, id: Date.now() });
    setShowModal(false);
    setEditing(null);
  }

  return (
    <section className="planning-section">
      <SectionHeader
        eyebrow="Library"
        title="Project"
        accent="List"
        action={
          <button className="btn-primary" onClick={() => { setEditing(null); setShowModal(true); }}>
            + Add Project
          </button>
        }
      />

      {projects.length === 0 ? (
        <div className="planning-empty">
          <p className="serif-italic color-outline planning-empty__text">No projects yet.</p>
        </div>
      ) : (
        <div className="project-list-grid">
          {projects.map(p => (
            <div
              key={p.id}
              className={`project-row ${p.image ? "project-row--with-image" : "project-row--no-image"}`}
            >
              {p.image && (
                <div className="project-row__thumb" style={{ backgroundImage: `url(${p.image})` }} />
              )}
              <div>
                <p className="serif-italic color-on-surface project-row__name">{p.name}</p>
                <div className="project-row__meta">
                  <span className="label-xs" style={{ color: "var(--primary-container)", letterSpacing: ".15em" }}>{p.genre}</span>
                  <span className="label-xs color-outline">·</span>
                  <span className="label-xs color-outline">{p.type}</span>
                  {p.author && <>
                    <span className="label-xs color-outline">·</span>
                    <span className="label-xs color-outline">{p.author}</span>
                  </>}
                  {p._source === "sheet" && (
                    <span className="label-xs" style={{ color: "var(--outline)", opacity: 0.6, fontSize: 8 }}>↑ sheet</span>
                  )}
                </div>
              </div>
              <button className="project-row__btn"
                onClick={() => { setEditing(p); setShowModal(true); }}>Edit</button>
              <button className="project-row__btn project-row__btn--muted"
                onClick={() => onDelete(p.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <ProjectModal
          existing={editing}
          onSave={handleSave}
          onClose={() => { setShowModal(false); setEditing(null); }}
        />
      )}
    </section>
  );
}

// ── Next Projects section ─────────────────────────────────────────────────────
function NextProjects({ projects, scheduled, onSchedule, onRemove }) {
  const [addOpen,    setAddOpen]    = useState(false);
  const [scheduling, setScheduling] = useState(null);
  const [selectedId, setSelectedId] = useState("");

  const scheduledIds = new Set(scheduled.map(s => s.projectId));
  const available    = projects.filter(p => !scheduledIds.has(p.id));

  function handleAdd() {
    if (!selectedId) return;
    const proj = projects.find(p => String(p.id) === String(selectedId));
    if (proj) setScheduling(proj);
    setAddOpen(false);
    setSelectedId("");
  }

  function handleScheduleSave(data) {
    onSchedule({ projectId: scheduling.id, ...data });
    setScheduling(null);
  }

  return (
    <section className="planning-section">
      <SectionHeader
        eyebrow="Coming Up"
        title="Next"
        accent="Projects"
        action={
          projects.length > 0 && (
            <button className="btn-primary" onClick={() => setAddOpen(true)}>
              + Add to Queue
            </button>
          )
        }
      />

      {addOpen && (
        <div className="add-from-list">
          <div className="add-from-list__field field">
            <label className="field__label">Select from Project List</label>
            <select className="field__input field__select" value={selectedId}
              onChange={e => setSelectedId(e.target.value)}>
              <option value="" disabled hidden>Choose a project…</option>
              {available.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <button className="btn-primary" onClick={handleAdd}
            style={{ padding: "12px 24px", flexShrink: 0 }}>Next →</button>
          <button className="btn-ghost" onClick={() => { setAddOpen(false); setSelectedId(""); }}
            style={{ padding: "12px 20px", flexShrink: 0 }}>✕</button>
        </div>
      )}

      {scheduled.length === 0 ? (
        <div className="planning-empty">
          <p className="serif-italic color-outline planning-empty__text">No upcoming projects queued.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {scheduled.map((s, i) => {
            const proj = projects.find(p => p.id === s.projectId);
            if (!proj) return null;
            const monthLabel = s.month !== null && s.month !== undefined ? MONTHS[s.month] : null;
            const dateLabel  = monthLabel ? `${monthLabel} ${s.year}` : `${s.year}`;

            return (
              <div key={i} className="project-row project-row--scheduled">
                <span className="serif-italic color-primary-container project-row__index">{i + 1}</span>
                <div>
                  <p className="serif-italic color-on-surface project-row__name">{proj.name}</p>
                  <div className="project-row__meta">
                    <span className="label-xs color-outline">{proj.genre}</span>
                    <span className="label-xs color-outline">·</span>
                    <span className="label-xs color-outline">{proj.type}</span>
                    {s._source === "sheet" && (
                      <span className="label-xs" style={{ color: "var(--outline)", opacity: 0.6, fontSize: 8 }}>↑ sheet</span>
                    )}
                  </div>
                </div>
                <span className="project-row__badge">{dateLabel}</span>
                <button className="project-row__btn"
                  onClick={() => setScheduling(proj)}>Reschedule</button>
                <button className="project-row__btn project-row__btn--muted"
                  onClick={() => onRemove(i)}>Remove</button>
              </div>
            );
          })}
        </div>
      )}

      {scheduling && (
        <ScheduleModal
          project={scheduling}
          existing={scheduled.find(s => s.projectId === scheduling.id)}
          scheduled={scheduled}
          projects={projects}
          onSave={handleScheduleSave}
          onClose={() => setScheduling(null)}
        />
      )}
    </section>
  );
}

// ── Calendar ──────────────────────────────────────────────────────────────────
function CalendarTimeline({ projects, scheduled }) {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  let pastShows = [];
  try { pastShows = require("../Data/PastShows").default || []; } catch {}

  const byMonth = Array.from({ length: 12 }, () => ({ past: [], tentative: null }));

  scheduled.forEach(s => {
    if (s.year === year && s.month !== null && s.month !== undefined) {
      const proj = projects.find(p => p.id === s.projectId);
      if (proj) byMonth[s.month].tentative = proj;
    }
  });

  pastShows.forEach(show => {
    const dateStr    = show.dates || "";
    const monthMatch = dateStr.match(/^([A-Z]{3})/);
    if (monthMatch) {
      const mIdx      = MONTHS.findIndex(m => m.toUpperCase() === monthMatch[1]);
      const yearMatch = dateStr.match(/(\d{4})/);
      const showYear  = yearMatch ? Number(yearMatch[1]) : currentYear;
      if (mIdx >= 0 && showYear === year) byMonth[mIdx].past.push(show);
    }
  });

  return (
    <section className="planning-section">
      <SectionHeader
        eyebrow="Timeline"
        title="Production"
        accent="Calendar"
        action={
          <div className="calendar-year-nav">
            <button className="btn-icon calendar-year-btn" onClick={() => setYear(y => y - 1)}>←</button>
            <span className="serif-italic color-primary-container calendar-year-label">{year}</span>
            <button className="btn-icon calendar-year-btn" onClick={() => setYear(y => y + 1)}>→</button>
          </div>
        }
      />

      <div className="calendar-grid">
        {MONTHS.map((month, i) => {
          const { past, tentative } = byMonth[i];
          const isCurrent = year === currentYear && i === new Date().getMonth();
          const isEmpty   = past.length === 0 && !tentative;

          return (
            <div key={month} className={`calendar-cell${isCurrent ? " calendar-cell--current" : ""}`}>
              <div className="calendar-cell__header">
                <span className="label-tiny color-outline" style={{ letterSpacing: ".3em" }}>{month}</span>
                {isCurrent && <span className="calendar-cell__now-badge">Now</span>}
              </div>

              {past.map((show, j) => (
                <div key={j} className="calendar-cell__past">
                  <p className="serif-italic color-on-surface calendar-cell__past-name">{show.title}</p>
                  <span className="label-xs color-outline calendar-cell__past-label">Past Production</span>
                </div>
              ))}

              {tentative && (
                <div className="calendar-cell__tentative" style={{ marginTop: past.length > 0 ? 8 : 0 }}>
                  <p className="serif-italic calendar-cell__tentative-name"
                    style={{ color: "var(--primary-lighter)" }}>{tentative.name}</p>
                  <span className="calendar-cell__tentative-badge">Tentative</span>
                </div>
              )}

              {isEmpty && <p className="calendar-cell__empty">—</p>}
            </div>
          );
        })}
      </div>

      <div className="calendar-legend">
        <div className="calendar-legend__item">
          <div className="calendar-legend__swatch calendar-legend__swatch--past" />
          <span className="label-xs color-outline" style={{ fontSize: 9 }}>Past Production</span>
        </div>
        <div className="calendar-legend__item">
          <div className="calendar-legend__swatch calendar-legend__swatch--tentative" />
          <span className="label-xs color-outline" style={{ fontSize: 9 }}>Tentative</span>
        </div>
        <div className="calendar-legend__item">
          <div className="calendar-legend__swatch calendar-legend__swatch--current" />
          <span className="label-xs color-outline" style={{ fontSize: 9 }}>Current Month</span>
        </div>
      </div>
    </section>
  );
}

// ── Team Notes Sidebar ────────────────────────────────────────────────────────

function MemberNotes({ member, currentUser }) {
  const key = `sof_notes_${member.id}`;
  const [notes,       setNotes]       = useState(() => lsGet(key, []));
  const [historyOpen, setHistoryOpen] = useState(false);
  const [adding,      setAdding]      = useState(false);
  const [editingId,   setEditingId]   = useState(null);
  const [draft,       setDraft]       = useState("");

  function persist(next) { setNotes(next); lsSet(key, next); }

  function addNote() {
    if (!draft.trim()) return;
    persist([{
      id:        Date.now(),
      text:      draft.trim(),
      resolved:  false,
      createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      createdBy: currentUser?.displayName ?? "Team",
    }, ...notes]);
    setDraft("");
    setAdding(false);
  }

  function saveEdit(id) {
    if (!draft.trim()) return;
    persist(notes.map(n => n.id === id ? { ...n, text: draft.trim() } : n));
    setEditingId(null);
    setDraft("");
  }

  function resolve(id) {
    persist(notes.map(n => n.id === id
      ? { ...n, resolved: true, resolvedAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }) }
      : n
    ));
  }

  function remove(id) { persist(notes.filter(n => n.id !== id)); }

  function startEdit(note) {
    setEditingId(note.id);
    setDraft(note.text);
    setAdding(false);
  }

  const open     = notes.filter(n => !n.resolved);
  const resolved = notes.filter(n =>  n.resolved);

  return (
    <div className="member-notes">
      <div className="member-notes__header">
        <div>
          <p className="member-notes__name serif-italic color-on-surface">{member.name}</p>
          <span className="label-xs color-outline" style={{ letterSpacing: ".15em" }}>{member.role}</span>
        </div>
        <button
          className="member-notes__add-btn"
          onClick={() => { setAdding(a => !a); setEditingId(null); setDraft(""); }}
          title="Add note"
        >+</button>
      </div>

      {adding && (
        <div className="member-notes__compose">
          <textarea
            className="field__input field__textarea member-notes__textarea"
            placeholder="Add a TODO note…"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            rows={3}
            autoFocus
          />
          <div className="member-notes__compose-actions">
            <button className="submit-btn member-notes__save-btn"
              onClick={addNote} disabled={!draft.trim()}>
              Add
            </button>
            <button className="btn-ghost member-notes__cancel-btn"
              style={{ padding: "8px 12px" }}
              onClick={() => { setAdding(false); setDraft(""); }}>
              ✕
            </button>
          </div>
        </div>
      )}

      {open.length === 0 && !adding ? (
        <p className="member-notes__empty">No open tasks.</p>
      ) : (
        <ul className="member-notes__list">
          {open.map(note => (
            <li key={note.id} className="member-notes__item">
              {editingId === note.id ? (
                <div className="member-notes__compose">
                  <textarea
                    className="field__input field__textarea member-notes__textarea"
                    value={draft}
                    onChange={e => setDraft(e.target.value)}
                    rows={3}
                    autoFocus
                  />
                  <div className="member-notes__compose-actions">
                    <button className="submit-btn member-notes__save-btn"
                      onClick={() => saveEdit(note.id)} disabled={!draft.trim()}>
                      Save
                    </button>
                    <button className="btn-ghost member-notes__cancel-btn"
                      style={{ padding: "8px 12px" }}
                      onClick={() => { setEditingId(null); setDraft(""); }}>
                      ✕
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="member-notes__item-header">
                    <button className="member-notes__resolve-btn"
                      onClick={() => resolve(note.id)} title="Mark resolved">✓</button>
                    <p className="member-notes__text">{note.text}</p>
                  </div>
                  <div className="member-notes__item-footer">
                    <span className="member-notes__meta">{note.createdAt} · {note.createdBy}</span>
                    <div className="member-notes__item-actions">
                      <button className="project-row__btn" style={{ fontSize: 9 }}
                        onClick={() => startEdit(note)}>Edit</button>
                      <button className="project-row__btn project-row__btn--muted" style={{ fontSize: 9 }}
                        onClick={() => remove(note.id)}>✕</button>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {resolved.length > 0 && (
        <div className="member-notes__history">
          <button className="member-notes__history-toggle"
            onClick={() => setHistoryOpen(o => !o)}>
            <span>{historyOpen ? "▲" : "▼"}</span>
            Task History ({resolved.length})
          </button>
          {historyOpen && (
            <ul className="member-notes__list member-notes__list--resolved">
              {resolved.map(note => (
                <li key={note.id} className="member-notes__item member-notes__item--resolved">
                  <p className="member-notes__text member-notes__text--resolved">{note.text}</p>
                  <div className="member-notes__item-footer">
                    <span className="member-notes__meta">
                      Resolved {note.resolvedAt} · {note.createdBy}
                    </span>
                    <button className="project-row__btn project-row__btn--muted" style={{ fontSize: 9 }}
                      onClick={() => remove(note.id)}>✕</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function TeamNotesSidebar({ currentUser }) {
  return (
    <aside className="team-notes-sidebar">
      <div className="team-notes-sidebar__header">
        <div className="planning-section-header__rule" />
        <span className="label-tiny color-primary" style={{ letterSpacing: ".35em" }}>Team</span>
      </div>
      <h2 className="serif-italic color-on-surface" style={{ fontSize: 18, marginBottom: 20 }}>
        TODO Notes
      </h2>
      <div className="team-notes-sidebar__members">
        {TEAM_MEMBERS.map(member => (
          <MemberNotes key={member.id} member={member} currentUser={currentUser} />
        ))}
      </div>
    </aside>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function PlanningPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [projects,   setProjects]   = useState(() => lsGet("sof_projects",  []));
  const [scheduled,  setScheduled]  = useState(() => lsGet("sof_scheduled", []));
  const [syncStatus, setSyncStatus] = useState("loading");
  const [lastSynced, setLastSynced] = useState(null);

  const syncFromSheet = useCallback(async () => {
    setSyncStatus("loading");
    try {
      const projRows = await fetchSheetByGid(GID_PROJECT_LIST);
      const sheetProjects = projRows.map((r, i) => ({
        id:      `sheet_${i}_${cellVal(r.c[0])}`.replace(/\s/g, "_"),
        name:    cellVal(r.c[0]),
        genre:   cellVal(r.c[1]),
        type:    cellVal(r.c[2]),
        author:  cellVal(r.c[3]),
        image:   "",
        _source: "sheet",
      }));

      const nextRows = await fetchSheetByGid(GID_NEXT_PROJECTS);
      const sheetScheduled = nextRows.map(r => {
        const title = cellVal(r.c[0]);
        const date  = cellVal(r.c[1]);
        const proj  = sheetProjects.find(p => p.name.toLowerCase() === title.toLowerCase());
        if (!proj) return null;

        let month = null;
        let year  = new Date().getFullYear();
        if (date) {
          const monthMatch = date.match(/([A-Za-z]+)/);
          const yearMatch  = date.match(/(\d{4})/);
          if (yearMatch) year = Number(yearMatch[1]);
          if (monthMatch) {
            const mIdx = MONTHS.findIndex(m => m.toLowerCase() === monthMatch[1].toLowerCase().slice(0, 3));
            if (mIdx >= 0) month = mIdx;
          }
        }
        return { projectId: proj.id, month, year, _source: "sheet" };
      }).filter(Boolean);

      const localOnlyProjects  = lsGet("sof_projects",  []).filter(p => p._source !== "sheet");
      const localOnlyScheduled = lsGet("sof_scheduled", []).filter(s => s._source !== "sheet");

      const merged         = [...sheetProjects, ...localOnlyProjects];
      const mergedScheduled = [...sheetScheduled, ...localOnlyScheduled];

      setProjects(merged);   lsSet("sof_projects",  merged);
      setScheduled(mergedScheduled); lsSet("sof_scheduled", mergedScheduled);

      setLastSynced(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setSyncStatus("ok");
    } catch (err) {
      console.error("Sheet sync failed:", err);
      setSyncStatus("error");
    }
  }, []);

  useEffect(() => { syncFromSheet(); }, [syncFromSheet]);

  function saveProjects(val)  { setProjects(val);  lsSet("sof_projects",  val); }
  function saveScheduled(val) { setScheduled(val); lsSet("sof_scheduled", val); }

  function addProject(p)     { saveProjects([...projects, p]); }
  function editProject(p)    { saveProjects(projects.map(x => x.id === p.id ? p : x)); }
  function deleteProject(id) {
    saveProjects(projects.filter(p => p.id !== id));
    saveScheduled(scheduled.filter(s => s.projectId !== id));
  }

  function scheduleProject(entry) {
    const idx = scheduled.findIndex(s => s.projectId === entry.projectId);
    if (idx >= 0) {
      const next = [...scheduled]; next[idx] = entry; saveScheduled(next);
    } else {
      saveScheduled([...scheduled, entry]);
    }
  }

  function removeScheduled(idx) {
    const next = [...scheduled]; next.splice(idx, 1); saveScheduled(next);
  }

  return (
    <main className="planning-page">

      {/* Header */}
      <section className="planning-header">
        <div className="planning-header__glow" />
        <div className="planning-header__inner">
          <div>
            <p className="label-xs color-primary planning-header__eyebrow">
              Internal · Team Only
            </p>
            <h1 className="serif-italic color-on-surface planning-header__title">
              Planning
            </h1>
            <p className="label-xs color-outline" style={{ letterSpacing: ".2em" }}>
              Signed in as {user?.displayName}
            </p>
          </div>
          <button className="btn-ghost" onClick={() => { logout(); navigate("/"); }}
            style={{ padding: "10px 24px" }}>
            Sign Out
          </button>
        </div>
      </section>

      {/* Two-column layout: main content + sticky notes sidebar */}
      <div className="planning-layout">
        <div className="planning-body">
          <SyncBar
            status={syncStatus}
            lastSynced={lastSynced}
            onRefresh={syncFromSheet}
          />

          <NextProjects
            projects={projects}
            scheduled={scheduled}
            onSchedule={scheduleProject}
            onRemove={removeScheduled}
          />

          <CalendarTimeline
            projects={projects}
            scheduled={scheduled}
          />

          <ProjectList
            projects={projects}
            onAdd={addProject}
            onEdit={editProject}
            onDelete={deleteProject}
          />
        </div>

        <TeamNotesSidebar currentUser={user} />
      </div>

    </main>
  );
}