import { useState } from "react";

function useColors() {
  return {
    surface: "#131313", surfaceLow: "#1c1b1b", surfaceLowest: "#0e0e0e",
    surfaceContainer: "#201f1f", surfaceHigh: "#2a2a2a", surfaceHighest: "#353534",
    primary: "#ffb59a", primaryContainer: "#f95e14",
    onPrimary: "#5b1b00", onPrimaryContainer: "#4f1700",
    onSurface: "#e5e2e1", onSurfaceVariant: "#e0c0b2",
    outline: "#a88a7e", outlineVariant: "#594238",
    tertiary: "#d4bbff", tertiaryContainer: "#a37cea",
  };
}

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:wght@300;400;500;600&display=swap');
      *{box-sizing:border-box;margin:0;padding:0;}
      body{background:#131313;color:#e5e2e1;font-family:'Work Sans',sans-serif;overflow-x:hidden;}
      button{cursor:pointer;border:none;background:none;font-family:'Work Sans',sans-serif;color:inherit;}
      input{font-family:'Work Sans',sans-serif;color:inherit;}
      .pat{background-image:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l2.5 7.5L40 10l-7.5 2.5L30 20l-2.5-7.5L20 10l7.5-2.5z' fill='%23594238' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");}
      ::-webkit-scrollbar{width:4px;}
      ::-webkit-scrollbar-track{background:#131313;}
      ::-webkit-scrollbar-thumb{background:#594238;}
    `}</style>
  );
}

function Nav({ page, setPage }) {
  const c = useColors();
  const links = [
    { label: "Productions", pg: "productions" },
    { label: "Our Mission", pg: "mission" },
    { label: "Our Team", pg: "team" },
    { label: "Participate", pg: "participate" },
    { label: "Affiliates & Partners", pg: "affiliates" },
    { label: "Support", pg: "support" },
  ];
  return (
    <header style={{ position:"fixed", top:0, width:"100%", zIndex:100, background:"rgba(19,19,19,0.8)", backdropFilter:"blur(20px)", boxShadow:"0 20px 50px rgba(128,42,0,0.15)" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 48px" }}>
        <div onClick={() => setPage("home")} style={{ fontFamily:"'Noto Serif',serif", fontSize:"2ch", letterSpacing:".2em", textTransform:"uppercase", color:c.primaryContainer, cursor:"pointer" }}>
          Spirit of Fire
        </div>
        <nav style={{ display:"flex", gap:32, alignItems:"center" }}>
          {links.map(({ label, pg }) => (
            <span key={label} onClick={() => pg && setPage(pg)} style={{
              fontFamily:"'Noto Serif',serif", fontSize:"0.9em", letterSpacing:"-.02em",
              cursor: pg ? "pointer" : "default",
              color: (pg && pg === page) ? c.primaryContainer : "rgba(229,226,225,0.7)",
              borderBottom: (pg && pg === page) ? `1px solid rgba(249,94,20,0.5)` : "none",
              paddingBottom: 2, transition:"color .3s"
            }}>{label}</span>
          ))}
        </nav>
        <button onClick={() => setPage("tickets")} style={{ background:c.primaryContainer, color:c.onPrimaryContainer, padding:"8px 24px", fontSize:11, fontWeight:600, letterSpacing:".1em", textTransform:"uppercase" }}>
          Book Tickets
        </button>
      </div>
      <div style={{ height:1, background:"linear-gradient(to right,rgba(255,181,154,.1),transparent)" }} />
    </header>
  );
}

function Footer() {
  const c = useColors();
  const socials = ["Facebook","Instagram"];
  const links = ["Privacy Policy","Terms of Service","Archive"];
  return (
    <footer style={{ background:c.surface, padding:"80px 0 32px", borderTop:`1px solid rgba(89,66,56,0.1)` }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 48px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:48 }}>
        <div>
          <div style={{ fontFamily:"'Noto Serif',serif", fontSize:19, color:c.primaryContainer, marginBottom:24 }}>Spirit of Fire</div>
          <p style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", color:c.outlineVariant, lineHeight:1.8, fontSize:13 }}>
            Theatre dedicated to greatness. A place where passion and hardwork are the tools to uplift the soul.
          </p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          <h4 style={{ color:c.primary, fontSize:10, textTransform:"uppercase", letterSpacing:".2em", marginBottom:8 }}>More Information</h4>
          {links.map(l => (
            <span key={l} style={{ color:c.outlineVariant, fontSize:14, cursor:"pointer" }}
              onMouseEnter={e => e.currentTarget.style.color=c.onSurface}
              onMouseLeave={e => e.currentTarget.style.color=c.outlineVariant}>{l}</span>
          ))}
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          <h4 style={{ color:c.primary, fontSize:10, textTransform:"uppercase", letterSpacing:".2em", marginBottom:8 }}>Social Media Links</h4>
          {socials.map(l => (
            <span key={l} style={{ color:c.outlineVariant, fontSize:14, cursor:"pointer" }}
              onMouseEnter={e => e.currentTarget.style.color=c.onSurface}
              onMouseLeave={e => e.currentTarget.style.color=c.outlineVariant}>{l}</span>
          ))}
        </div>
        <div>
          <h4 style={{ color:c.primary, fontSize:10, textTransform:"uppercase", letterSpacing:".2em", marginBottom:24 }}>Spirit of Fire Newsletter</h4>
          <div style={{ display:"flex", borderBottom:`1px solid ${c.outlineVariant}`, paddingBottom:8, marginBottom:16 }}>
            <input placeholder="Email Address" type="email" style={{ background:"transparent", border:"none", outline:"none", color:c.onSurface, flex:1, fontSize:14 }} />
            <span style={{ color:c.primaryContainer, cursor:"pointer", fontSize:18 }}>→</span>
          </div>
          <p style={{ fontSize:9, color:c.outlineVariant }}>© 2026 Spirit of Fire Theatre Company. Soli Deo Gloria.</p>
        </div>
      </div>
    </footer>
  );
}

function ShowCard({ title, dates, badge, badgeColor, badgeText }) {
  const c = useColors();
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ position:"relative", paddingTop:"150%", overflow:"hidden", background:c.surfaceHighest, marginBottom:24 }}>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#1a0800,#050200)", transform:hov?"scale(1.05)":"scale(1)", filter:hov?"grayscale(0%)":"grayscale(100%)", transition:"all .7s ease", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:80 }}>🎭</span>
        </div>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(19,19,19,0.7) 0%,transparent 60%)" }} />
        <div style={{ position:"absolute", bottom:20, left:20 }}>
          <span style={{ background:badgeColor, color:badgeText, padding:"4px 12px", fontSize:9, fontWeight:700, letterSpacing:".25em", textTransform:"uppercase" }}>{badge}</span>
        </div>
      </div>
      <h3 style={{ fontFamily:"'Noto Serif',serif", fontSize:22, color:hov?c.primary:c.onSurface, transition:"color .3s", marginBottom:8 }}>{title}</h3>
      <p style={{ fontSize:10, color:c.outline, letterSpacing:".2em", textTransform:"uppercase", marginBottom:16 }}>{dates}</p>
    </div>
  );
}

function ProdCard({ title, dates, badge, badgeColor, badgeText, onBook }) {
  const c = useColors();
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div style={{ position:"relative", paddingTop:"150%", overflow:"hidden", background:c.surfaceHighest, marginBottom:24 }}>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#1a0800,#050200)", transform:hov?"scale(1.05)":"scale(1)", filter:hov?"grayscale(0%)":"grayscale(100%)", transition:"all .7s ease", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontSize:80 }}>🎭</span>
        </div>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(19,19,19,0.7) 0%,transparent 60%)" }} />
        <div style={{ position:"absolute", bottom:20, left:20 }}>
          <span style={{ background:badgeColor, color:badgeText, padding:"4px 12px", fontSize:9, fontWeight:700, letterSpacing:".25em", textTransform:"uppercase" }}>{badge}</span>
        </div>
      </div>
      <h3 style={{ fontFamily:"'Noto Serif',serif", fontSize:22, color:hov?c.primary:c.onSurface, transition:"color .3s", marginBottom:8 }}>{title}</h3>
      <p style={{ fontSize:10, color:c.outline, letterSpacing:".2em", textTransform:"uppercase", marginBottom:16 }}>{dates}</p>
      <button onClick={onBook}
        onMouseEnter={e => { e.currentTarget.style.background=c.primaryContainer; e.currentTarget.style.color=c.onPrimaryContainer; }}
        onMouseLeave={e => { e.currentTarget.style.background=c.surfaceHighest; e.currentTarget.style.color=c.onSurface; }}
        style={{ width:"100%", padding:16, fontSize:11, letterSpacing:".25em", textTransform:"uppercase", background:c.surfaceHighest, border:`1px solid rgba(89,66,56,0.3)`, color:c.onSurface, transition:"all .5s" }}>
        Reserve Seat
      </button>
    </div>
  );
}

function HeroSection({ setPage }) {
  const c = useColors();
  return (
    <section style={{ position:"relative", height:"100vh", display:"flex", alignItems:"center", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,#0a0000 0%,#1a0800 40%,#0d0500 100%)" }} />
      <div style={{ position:"absolute", inset:0, opacity:.15, backgroundImage:"radial-gradient(ellipse at 30% 50%,rgba(249,94,20,0.4) 0%,transparent 60%)" }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(19,19,19,0.95) 40%,rgba(19,19,19,0.3) 100%)" }} />
      <div style={{ position:"relative", zIndex:2, maxWidth:1200, margin:"0 auto", padding:"0 48px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:48, alignItems:"center" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:32 }}>
          <h1 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:88, lineHeight:.9, letterSpacing:"-.03em", color:c.onSurface }}>
            Soli <span style={{ color:c.primaryContainer }}>Deo</span><br />Gloria
          </h1>
          <p style={{ fontSize:18, color:c.onSurfaceVariant, maxWidth:420, lineHeight:1.7, fontWeight:300 }}>
            To the glory of God alone.
          </p>
          <div style={{ display:"flex", gap:20 }}>
            <button onClick={() => setPage("productions")} style={{ background:c.primaryContainer, color:c.onPrimaryContainer, padding:"16px 32px", fontSize:11, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase" }}>View Season</button>
            <button onClick={() => setPage("mission")} style={{ border:`1px solid ${c.outlineVariant}`, color:c.onSurface, padding:"16px 32px", fontSize:11, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase" }}>Our Mission</button>
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"flex-end" }}>
          <div style={{ position:"relative", width:280, height:420 }}>
            <div style={{ position:"absolute", inset:0, border:`1px solid rgba(89,66,56,0.4)` }} />
            <div style={{ position:"absolute", inset:-16, border:`1px solid rgba(249,94,20,0.15)`, zIndex:-1 }} />
            <div style={{ width:"100%", height:"100%", background:"linear-gradient(160deg,#2a1000,#0a0300)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:72, opacity:.6 }}>🕯️</span>
            </div>
            <div style={{ position:"absolute", bottom:24, left:-48, background:c.surface, padding:"20px 24px" }}>
              <span style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", color:c.primaryContainer, fontSize:20, display:"block" }}>Returning Soon</span>
              <span style={{ textTransform:"uppercase", letterSpacing:".15em", fontSize:10 }}>Mother Rabbit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HearthSection() {
  const c = useColors();
  return (
    <section className="pat" style={{ padding:"96px 0", background:c.surfaceLow }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 48px", display:"grid", gridTemplateColumns:"5fr 7fr", gap:64, alignItems:"center" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
          <h2 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:48, lineHeight:1.1 }}>
            Welcome to<br />the <span style={{ color:c.primaryContainer }}>Spirit of Fire</span>
          </h2>
          <div style={{ height:3, width:80, background:c.primaryContainer }} />
          <p style={{ color:c.onSurfaceVariant, lineHeight:1.8, fontWeight:300 }}>At Spirit of Fire, we tell stories that encourage, inspire, and challenge people to see all of life and experience–past, present, and future–by the light of Jesus Christ.</p>
          <p style={{ color:c.onSurfaceVariant, lineHeight:1.8, fontWeight:300 }}>Fire represents the ferocious dedication and passion in any project we undertake. It represents the indwelling Holy Spirit that guides and inspires, and it represents the grace of our Lord we tirelessly seek. Thus, we desire always to have the Spirit, or the essence of this Fire.</p>
          <span style={{ color:c.primary, fontSize:11, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", cursor:"pointer" }}>Learn More →</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
          <div style={{ paddingTop:48 }}>
            <div style={{ width:"100%", height:360, background:"linear-gradient(180deg,#1a0a00,#0d0500)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:64, filter:"grayscale(1)", transition:"filter .7s" }}
              onMouseEnter={e=>e.currentTarget.style.filter="grayscale(0)"}
              onMouseLeave={e=>e.currentTarget.style.filter="grayscale(1)"}>📚</div>
          </div>
          <div>
            <div style={{ width:"100%", height:460, background:"linear-gradient(180deg,#0d0500,#1a0a00)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:64 }}>🔥</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NextOnStageSection() {
  const c = useColors();
  const shows = [
    { title:"Mother Rabbit", dates:"JUN 01 — JUL 01", badge:"Encore Performance", badgeColor:c.tertiaryContainer, badgeText:"#38017a" },
    { title:"Animal Crackers", dates:"TBD", badge:"Adaptation", badgeColor:c.surfaceContainer, badgeText:c.primary },
    { title:"Missing the Rain", dates:"TBD", badge:"World Premiere", badgeColor:c.primaryContainer, badgeText:c.onPrimaryContainer },
  ];
  return (
    <section style={{ padding:"96px 0", background:c.surface }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 48px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:64 }}>
          <div>
            <span style={{ color:c.primary, fontSize:11, letterSpacing:".3em", textTransform:"uppercase", fontWeight:600 }}>Curated Performances</span>
            <h2 style={{ fontFamily:"'Noto Serif',serif", fontSize:56, marginTop:12 }}>Next on <em>Stage</em></h2>
          </div>
          <div style={{ display:"flex", gap:12 }}>
            {["←","→"].map(a => (
              <button key={a} style={{ width:44, height:44, border:`1px solid ${c.outlineVariant}`, color:c.onSurface, fontSize:16 }}>{a}</button>
            ))}
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:32 }}>
          {shows.map(s => <ShowCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const c = useColors();
  const items = [
    { col:"1/3", row:"1/3", label:"The Great Nave", grad:"linear-gradient(135deg,#1a0800,#0a0300)" },
    { col:"3/4", row:"1/2", label:"The Thurible", grad:"linear-gradient(135deg,#0a0800,#050200)" },
    { col:"4/5", row:"1/3", label:"Rose Window", grad:"linear-gradient(135deg,#0a0d1a,#050508)" },
    { col:"3/4", row:"2/3", label:"The Altar", grad:"linear-gradient(135deg,#1a0a00,#080300)" },
  ];
  return (
    <section style={{ padding:"96px 0", background:c.surfaceLowest, overflow:"hidden" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 48px", textAlign:"center", marginBottom:64 }}>
        <h2 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:48, marginBottom:12 }}>Uplifting the <span style={{ color:c.primary }}>Soul</span></h2>
        <p style={{ color:c.outline, textTransform:"uppercase", letterSpacing:".4em", lineHeight: "2em", fontSize:10 }}>Considering it an honour to employ</p>
        <p style={{ color:c.outline, textTransform:"uppercase", letterSpacing:".4em", lineHeight: "2em", fontSize:10 }}>and develop the gifts received from God</p>
      </div>
      <div style={{ maxWidth:1400, margin:"0 auto", padding:"0 16px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gridTemplateRows:"repeat(2,260px)", gap:8 }}>
        {items.map((g,i) => (
          <div key={i} style={{ gridColumn:g.col, gridRow:g.row, position:"relative", overflow:"hidden", cursor:"pointer", background:g.grad }}
            onMouseEnter={e => e.currentTarget.querySelector(".gl").style.opacity=1}
            onMouseLeave={e => e.currentTarget.querySelector(".gl").style.opacity=0}>
            <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", fontSize:48, opacity:.2 }}>⛪</div>
            <div className="gl" style={{ position:"absolute", bottom:24, left:24, opacity:0, transition:"opacity .4s" }}>
              <p style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:22, color:c.onSurface }}>{g.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  const c = useColors();
  return (
    <section style={{ padding:"160px 24px", background:c.surface, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", position:"relative" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,rgba(249,94,20,0.07) 0%,transparent 70%)" }} />
      <h2 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:56, maxWidth:700, marginBottom:48, lineHeight:1.15, position:"relative" }}>
        Keep the <span style={{ color:c.primaryContainer }}>Flame</span> alive
      </h2>
      <div style={{ display:"flex", gap:24, position:"relative" }}>
        <button style={{ padding:"20px 48px", background:c.onSurface, color:c.surface, fontSize:11, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase" }}>Become a Patron</button>
        <button style={{ padding:"20px 48px", border:`1px solid ${c.outline}`, color:c.onSurface, fontSize:11, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase" }}>Get Involved</button>
      </div>
    </section>
  );
}

function HomePage({ setPage }) {
  return (
    <main>
      <HeroSection setPage={setPage} />
      <HearthSection />
      <NextOnStageSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}

function MissionHero() {
  const c = useColors();
  return (
    <section style={{ position:"relative", height:820, display:"flex", alignItems:"flex-end", padding:"0 48px 96px", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,#1a0500 0%,#0a0200 100%)" }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(19,19,19,1) 0%,rgba(19,19,19,0.2) 70%)" }} />
      <div style={{ position:"relative", zIndex:2, maxWidth:860 }}>
        <h1 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:88, lineHeight:.92, letterSpacing:"-.03em", color:c.onSurface, marginBottom:24 }}>
          The Story of<br /><span style={{ color:c.primaryContainer }}>the Hearth.</span>
        </h1>
        <p style={{ fontSize:18, color:c.onSurfaceVariant, maxWidth:600, lineHeight:1.7, fontWeight:300 }}>
          Spirit of Fire began not in a playhouse, but in the quiet flicker of a vigil candle. We are a collective of artists dedicated to the intersection of Catholic liturgy and the vanguard of contemporary performance.
        </p>
      </div>
    </section>
  );
}

function MissionStatement() {
  const c = useColors();
  return (
    <section className="pat" style={{ padding:"96px 48px", position:"relative" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"7fr 5fr", gap:48, alignItems:"center" }}>
        <div>
          <h2 style={{ fontFamily:"'Noto Serif',serif", fontSize:44, lineHeight:1.2, marginBottom:32 }}>
            Our Mission: To Kindle the <em style={{ color:c.primary }}>Divine Spark</em> in the Void.
          </h2>
          <p style={{ fontSize:17, color:"rgba(229,226,225,0.8)", lineHeight:1.8, fontWeight:300, marginBottom:24 }}>
            We believe that theatre is a sacramental act. In a world increasingly defined by digital isolation and flat secularism, we return to the ancient necessity of the gathering—the hearth where stories are told to ward off the dark.
          </p>
          <p style={{ fontSize:17, color:"rgba(229,226,225,0.8)", lineHeight:1.8, fontWeight:300 }}>
            Our work seeks to translate the profound mysteries of the Catholic faith into a visual and auditory language that resonates with the modern soul.
          </p>
        </div>
        <div style={{ position:"relative" }}>
          <div style={{ aspectRatio:"4/5", background:"#1a0800", padding:16, transform:"rotate(2deg)" }}>
            <div style={{ width:"100%", height:"100%", background:"linear-gradient(160deg,#1a0800,#050201)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:80 }}>🕊️</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WarehouseSection() {
  const c = useColors();
  return (
    <section style={{ background:c.surfaceLowest, padding:"96px 48px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:64 }}>
          <span style={{ fontSize:10, textTransform:"uppercase", letterSpacing:".4em", color:c.primaryContainer }}>The Physicality of Grace</span>
          <h2 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:44, marginTop:16 }}>The Converted Warehouse</h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr", gap:2 }}>
          <div style={{ width:"100%", height:320, background:"linear-gradient(120deg,#1a1a0a,#0a0a05)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:64, filter:"grayscale(1)", transition:"filter 1s" }}
            onMouseEnter={e=>e.currentTarget.style.filter="grayscale(0)"}
            onMouseLeave={e=>e.currentTarget.style.filter="grayscale(1)"}>🏭</div>
          <div style={{ background:c.surfaceHigh, padding:48 }}>
            <h3 style={{ fontFamily:"'Noto Serif',serif", fontSize:22, color:c.primary, marginBottom:16 }}>Stone &amp; Iron</h3>
            <p style={{ fontSize:13, lineHeight:1.8, color:c.onSurfaceVariant }}>Founded in 2018, we repurposed a derelict industrial foundry—a cathedral of labor and the spirit.</p>
          </div>
          <div style={{ background:c.surfaceContainer, padding:48 }}>
            <h3 style={{ fontFamily:"'Noto Serif',serif", fontSize:22, color:c.primary, marginBottom:16 }}>A New Liturgy</h3>
            <p style={{ fontSize:13, lineHeight:1.8, color:c.onSurfaceVariant }}>Every corner consecrated to the craft. Beeswax and charred oak ground every production in the tangible elements of our history.</p>
          </div>
          <div style={{ width:"100%", height:320, background:"linear-gradient(120deg,#0a0a05,#151005)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:64, filter:"grayscale(1)", transition:"filter 1s" }}
            onMouseEnter={e=>e.currentTarget.style.filter="grayscale(0)"}
            onMouseLeave={e=>e.currentTarget.style.filter="grayscale(1)"}>🎭</div>
        </div>
      </div>
    </section>
  );
}

function LeadershipProfile({ name, role, bio, cta, icon, emoji }) {
  const c = useColors();
  return (
    <div style={{ display:"flex", gap:32, alignItems:"flex-start" }}>
      <div style={{ position:"relative", width:200, flexShrink:0 }}>
        <div style={{ aspectRatio:"3/4", background:"linear-gradient(160deg,#1a0800,#0a0300)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:72 }}>{emoji}</div>
        <div style={{ position:"absolute", top:-12, right:-12, background:c.primaryContainer, padding:10 }}>
          <span style={{ fontSize:16 }}>{icon}</span>
        </div>
      </div>
      <div style={{ flex:1 }}>
        <h3 style={{ fontFamily:"'Noto Serif',serif", fontSize:28, marginBottom:4 }}>{name}</h3>
        <span style={{ fontSize:10, textTransform:"uppercase", letterSpacing:".2em", color:c.primary, display:"block", marginBottom:24 }}>{role}</span>
        <p style={{ color:c.onSurfaceVariant, lineHeight:1.8, fontWeight:300, marginBottom:24 }}>{bio}</p>
        <span style={{ color:c.primary, fontSize:11, fontWeight:700, letterSpacing:".15em", textTransform:"uppercase", cursor:"pointer" }}>{cta} →</span>
      </div>
    </div>
  );
}

function LeadershipSection() {
  const c = useColors();
  const profiles = [
    { name:"Elias Thorne", role:"Artistic Director", bio:"A graduate of the Pontifical Institute of Mediaeval Studies, Elias brings rigorous theological grounding to his avant-garde staging. His vision centers on 'The Eucharistic Stage'—theatre as a site of real presence.", cta:"Read Director's Note", icon:"📖", emoji:"👨‍🎭" },
    { name:"Clara Vane", role:"Head of Scenography", bio:"Clara's designs are characterized by their 'Living Architecture.' She utilizes light, smoke, and shadow to transform the warehouse into environments that breathe with the rhythm of the text.", cta:"View Portfolio", icon:"🎨", emoji:"👩‍🎨" },
  ];
  return (
    <section style={{ padding:"96px 48px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <h2 style={{ fontFamily:"'Noto Serif',serif", fontSize:40, marginBottom:80 }}>Custodians of the <em>Flame</em></h2>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:96 }}>
          {profiles.map(p => <LeadershipProfile key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}

function MissionCTA() {
  const c = useColors();
  return (
    <section style={{ padding:"96px 48px", background:c.surfaceLow, borderTop:`1px solid rgba(89,66,56,0.1)`, borderBottom:`1px solid rgba(89,66,56,0.1)` }}>
      <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
        <h2 style={{ fontFamily:"'Noto Serif',serif", fontSize:48, marginBottom:24 }}>Witness the <em style={{ color:c.primary }}>Transformation.</em></h2>
        <p style={{ color:"rgba(229,226,225,0.6)", marginBottom:48, fontSize:17, lineHeight:1.7 }}>Join us for our upcoming production of "The Martyr's Silence," a meditative journey through the desert of the soul.</p>
        <div style={{ display:"flex", justifyContent:"center", gap:24 }}>
          <button style={{ background:c.primaryContainer, color:c.onPrimaryContainer, padding:"16px 40px", fontSize:12, fontWeight:700, letterSpacing:".15em", textTransform:"uppercase" }}>Reserve Your Seat</button>
          <button style={{ border:`1px solid rgba(255,181,154,0.3)`, color:c.primary, padding:"16px 40px", fontSize:12, fontWeight:700, letterSpacing:".15em", textTransform:"uppercase" }}>Join the Guild</button>
        </div>
      </div>
    </section>
  );
}

function MissionPage() {
  return (
    <main>
      <MissionHero />
      <MissionStatement />
      <WarehouseSection />
      <LeadershipSection />
      <MissionCTA />
      <Footer />
    </main>
  );
}

function ProductionsHero() {
  const c = useColors();
  return (
    <section style={{ maxWidth:1200, margin:"0 auto", padding:"48px 48px 96px", display:"grid", gridTemplateColumns:"7fr 5fr", gap:48, alignItems:"center" }}>
      <div>
        <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:24 }}>
          <div style={{ height:1, width:48, background:c.primaryContainer }} />
          <span style={{ fontSize:10, textTransform:"uppercase", letterSpacing:".3em", color:c.primary }}>Current Season</span>
        </div>
        <h1 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:80, lineHeight:.92, letterSpacing:"-.03em", marginBottom:32 }}>
          Mother <span style={{ color:c.primaryContainer }}>Rabbit</span>
        </h1>
        <p style={{ fontSize:17, color:c.onSurfaceVariant, lineHeight:1.7, maxWidth:500, marginBottom:40, fontWeight:300 }}>
          Peter Kotski’s mother is sick. His father passed away years ago. His eccentric brothers are eccentric, and estranged. A family crisis brings them together--for better or worse--and their reunion begets all sorts of hijinks.
        </p>
        <button style={{ border:`1px solid ${c.outlineVariant}`, color:c.onSurface, padding:"12px 32px", fontSize:11, letterSpacing:".2em", textTransform:"uppercase" }}>
          Read More
        </button>
      </div>
      <div style={{ position:"relative" }}>
        <div style={{ aspectRatio:"3/4", background:c.surfaceContainer, display:"flex", alignItems:"center", justifyContent:"center", fontSize:96, opacity:.7 }}>🕯️</div>
        <div style={{ position:"absolute", bottom:-24, left:-24, background:c.primaryContainer, padding:24, fontSize:32 }}>🔥</div>
      </div>
    </section>
  );
}

function Performances({ setPage }) {
  const c = useColors();
  const prods = [
    { title:"Mother Rabbit", dates:"JUN 01 — JUL 01", badge:"Encore Performance", badgeColor:c.tertiaryContainer, badgeText:"#38017a" },
    { title:"Animal Crackers", dates:"TBD", badge:"Adaptation", badgeColor:c.surfaceContainer, badgeText:c.primary },
    { title:"Missing the Rain", dates:"TBD", badge:"World Premiere", badgeColor:c.primaryContainer, badgeText:c.onPrimaryContainer },
  ];
  return (
    <section style={{ background:c.surfaceLow, padding:"96px 48px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:64, borderBottom:`1px solid rgba(89,66,56,0.2)`, paddingBottom:28 }}>
          <div>
            <h2 style={{ fontFamily:"'Noto Serif',serif", fontSize:36, marginBottom:8 }}>Performances</h2>
            <p style={{ fontSize:11, color:c.outline, letterSpacing:".2em", textTransform:"uppercase" }}>Active Productions • 2026</p>
          </div>
          <div style={{ display:"flex", gap:16 }}>
            {["←","→"].map(a => <span key={a} style={{ color:c.primary, cursor:"pointer", fontSize:20 }}>{a}</span>)}
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:48 }}>
          {prods.map(p => <ProdCard key={p.title} {...p} onBook={() => setPage("tickets")} />)}
        </div>
      </div>
    </section>
  );
}

function MainQuote() {
  const c = useColors();
  return (
    <section style={{ padding:"160px 48px", textAlign:"center", maxWidth:900, margin:"0 auto" }}>
      <div style={{ fontSize:40, color:c.primaryContainer, marginBottom:32 }}>✦</div>
      <blockquote style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:34, lineHeight:1.4, color:c.onSurface, marginBottom:40 }}>
        All art should have no other end and aim than the glory of God and the soul’s refreshment; where this is not remembered there is no real art but only a devilish hubbub. Soli Deo Gloria.
      </blockquote>
      <cite style={{ fontSize:10, textTransform:"uppercase", letterSpacing:".4em", color:c.primary, fontStyle:"normal" }}>Johann Sebastian Bach</cite>
    </section>
  );
}

function ProductionsPage({ setPage }) {
  return (
    <main className="pat" style={{ minHeight:"100vh" }}>
      <ProductionsHero />
      <Performances setPage={setPage} />
      <MainQuote />
      <Footer />
    </main>
  );
}

function StepIndicator() {
  const c = useColors();
  const steps = ["I · Production", "II · Seat Choice", "III · Review"];
  return (
    <nav style={{ display:"flex", justifyContent:"center", marginBottom:64, padding:"0 48px" }}>
      <ol style={{ display:"flex", alignItems:"center", width:"100%", maxWidth:600 }}>
        {steps.map((s, i) => (
          <li key={s} style={{ display:"flex", alignItems:"center", flex:i < 2 ? 1 : 0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
              <div style={{ width:28, height:28, border:`1px solid ${i===0?c.primaryContainer:c.outline}`, background:i===0?"rgba(249,94,20,0.1)":"transparent", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:i===0?c.primary:c.outline }}>{["I","II","III"][i]}</div>
              <span style={{ fontSize:10, textTransform:"uppercase", letterSpacing:".2em", color:i===0?c.primary:c.outline }}>{s.split(" · ")[1]}</span>
            </div>
            {i < 2 && <div style={{ flex:1, height:1, background:c.outlineVariant, margin:"0 12px" }} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ShowSelector({ selected, onSelect }) {
  const c = useColors();

  const shows = [
    { title:"Mother Rabbit", sub:"Opening Cycle", desc:"An explosive, anarchic comedy inspired by the works of Abbott and Costello and the Marx Brothers." },
    { title:"Animal Crackers", sub:"Adaptation Premiere", desc:"The revival of the old American Comedy genuises: the Marx Brothers." },
    { title:"Missing the Rain", sub:"World Premiere", desc:"A dramatic exploration of forgiveness and family struggles." },
  ];
  return (
    <section>
      <h2 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:28, marginBottom:32, borderLeft:`2px solid ${c.primaryContainer}`, paddingLeft:24 }}>I. Choose Your Performance</h2>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:24 }}>
        {shows.map((show, i) => (
          <div key={i} onClick={() => onSelect(i)} style={{ background:selected===i?c.surfaceHigh:c.surfaceLow, outline:selected===i?`1px solid ${c.primaryContainer}`:"none", cursor:"pointer", overflow:"hidden" }}>
            <div style={{ aspectRatio:"16/10", background:`linear-gradient(160deg,${i===0?"#1a0500,#0a0200":"#1a0a00,#0d0500"})`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:48, position:"relative" }}>
              {i===0?"🕯️":"🎭"}
              {selected===i && <div style={{ position:"absolute", inset:0, background:"rgba(249,94,20,0.1)" }} />}
              {selected===i && <span style={{ position:"absolute", top:8, right:8, color:c.primaryContainer }}>✓</span>}
            </div>
            <div style={{ padding:24 }}>
              <span style={{ fontSize:9, textTransform:"uppercase", letterSpacing:".3em", color:c.primary, display:"block", marginBottom:8 }}>{show.sub}</span>
              <h3 style={{ fontSize:18, fontWeight:700, marginBottom:8 }}>{show.title}</h3>
              <p style={{ fontSize:13, color:c.onSurfaceVariant, lineHeight:1.7, fontWeight:300, marginBottom:16 }}>{show.desc}</p>
              <button style={{ width:"100%", padding:12, fontSize:10, letterSpacing:".2em", textTransform:"uppercase", background:selected===i?c.primaryContainer:"transparent", color:selected===i?c.onPrimaryContainer:c.onSurface, border:selected===i?"none":`1px solid ${c.outlineVariant}`, fontWeight:selected===i?700:400 }}>
                {selected===i?"Performance Selected":"Select Performance"}
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
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const dates = Array.from({length:10},(_,i)=>i+1);
  return (
    <section>
      <h2 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:28, marginBottom:32, borderLeft:`2px solid ${c.primaryContainer}`, paddingLeft:24 }}>II. Choose Your Date</h2>
      <div style={{ background:c.surfaceLow, padding:32 }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:8, marginBottom:16, textAlign:"center" }}>
          {days.map(d => <span key={d} style={{ fontSize:9, textTransform:"uppercase", color:c.outline, letterSpacing:".1em" }}>{d}</span>)}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:8 }}>
          {[null,null,null,null].map((_,i)=><div key={i}/>)}
          {dates.map(d => {
            const disabled = d <= 2;
            const sel = d === selected;
            return (
              <button key={d} onClick={() => !disabled && onSelect(d)} style={{ aspectRatio:"1", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", fontSize:13, cursor:disabled?"not-allowed":"pointer", color:disabled?"rgba(229,226,225,0.25)":sel?c.primary:c.onSurface, background:sel?"rgba(249,94,20,0.15)":"transparent", border:sel?`1px solid ${c.primaryContainer}`:`1px solid rgba(89,66,56,0.3)`, transition:"all .2s", gap:2 }}>
                <span>{d}</span>
                {sel && <span style={{ fontSize:7, textTransform:"uppercase", letterSpacing:".1em" }}>Selected</span>}
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
  const rows = [[0,1,2,3,4,5],[0,1,2,3,4,5,6,7],[null,null,0,1,2,3,null,null]];
  return (
    <section>
      <h2 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:28, marginBottom:32, borderLeft:`2px solid ${c.primaryContainer}`, paddingLeft:24 }}>III. Choose Your Seat</h2>
      <div style={{ background:c.surfaceContainer, padding:48, textAlign:"center" }}>
        <div style={{ position:"relative", marginBottom:40 }}>
          <div style={{ width:"75%", margin:"0 auto", height:2, background:"linear-gradient(to right,transparent,rgba(255,181,154,0.4),transparent)" }} />
          <span style={{ position:"absolute", top:-18, left:"50%", transform:"translateX(-50%)", fontSize:9, textTransform:"uppercase", letterSpacing:".4em", color:c.primary, whiteSpace:"nowrap" }}>The Stage</span>
        </div> 
        <div style={{ display:"flex", flexDirection:"column", gap:16, alignItems:"center" }}>
          {rows.map((row, ri) => (
            <div key={ri} style={{ display:"flex", gap:10, justifyContent:"center" }}>
              {row.map((seat, si) => {
                if (seat === null) return <div key={si} style={{ width:32, height:32 }} />;
                const key = ri*10+si;
                const occupied = ri===2 && (si===0||si===1||si===6||si===7);
                const sel = selected.includes(key);
                return (
                  <button key={si} onClick={() => !occupied && onToggle(key)} style={{ width:32, height:32, borderRadius:"6px 6px 0 0", background:occupied?c.surfaceHighest:sel?c.primaryContainer:c.surfaceHighest, opacity:occupied?.3:1, cursor:occupied?"not-allowed":"pointer", boxShadow:sel?"0 0 12px rgba(249,94,20,0.4)":"none", transition:"all .2s", border:"none" }} />
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ display:"flex", justifyContent:"center", gap:32, marginTop:40, fontSize:9, textTransform:"uppercase", letterSpacing:".2em", color:c.onSurfaceVariant }}>
          {[["Available",c.surfaceHighest,1],["Selected",c.primaryContainer,1],["Occupied",c.surfaceHighest,.3]].map(([l,bg,op])=>(
            <div key={l} style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ width:12, height:12, borderRadius:"3px 3px 0 0", background:bg, opacity:op }} />{l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceSummary({ showIndex, date, seats, offering, onOfferingChange }) {
  const c = useColors();
  const shows = ["Mother Rabbit","Animal Crackers","Missing the Rain"];
  const total = seats.length * 60 + (typeof offering === "number" ? offering : 0);
  return (
    <div style={{ position:"sticky", top:120, background:c.surfaceContainer, padding:32, borderLeft:`1px solid rgba(255,181,154,0.15)` }}>
      <h3 style={{ fontFamily:"'Noto Serif',serif", fontStyle:"italic", fontSize:20, color:c.primary, marginBottom:28 }}>Summary of Purchase</h3>
      <div style={{ display:"flex", flexDirection:"column", gap:20, marginBottom:28, paddingBottom:28, borderBottom:`1px solid ${c.outlineVariant}` }}>
        {[
          { label:"Production", value:shows[showIndex] },
          { label:"Scheduled Time", value:`June ${String(date).padStart(2,"0")}, 2026 • 7:00 p.m.` },
          { label:"Seat", value:`Row A, Seat ${seats.map(s=>s+1).join(", ")||"—"}`, price:`$${seats.length*60}.00` },
        ].map((r,i) => (
          <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
            <div>
              <p style={{ fontSize:9, textTransform:"uppercase", letterSpacing:".15em", color:c.outline, marginBottom:4 }}>{r.label}</p>
              <p style={{ fontSize:14, fontWeight:500 }}>{r.value}</p>
            </div>
            {r.price && <p style={{ fontSize:15, fontWeight:700 }}>{r.price}</p>}
          </div>
        ))}
      </div>
      <div style={{ marginBottom:28 }}>
        <p style={{ fontSize:10, textTransform:"uppercase", letterSpacing:".2em", color:c.primary, fontWeight:700, marginBottom:12 }}>⛩ Goodwill Offering</p>
        <p style={{ fontSize:11, color:c.onSurfaceVariant, lineHeight:1.7, marginBottom:16 }}>Support the ongoing mission through a voluntary contribution.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8 }}>
          {[0,5,10,"Custom"].map(o => (
            <button key={o} onClick={() => typeof o==="number" && onOfferingChange(o)} style={{ padding:"8px 4px", fontSize:12, fontWeight:offering===o?700:400, border:`1px solid ${offering===o?c.primary:c.outline}`, color:offering===o?c.primary:c.onSurface, background:offering===o?"rgba(255,181,154,0.1)":"transparent", transition:"all .2s" }}>
              {typeof o==="number"?`$${o}`:o}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:17, fontWeight:700 }}>
          <span>Total Cost</span>
          <span style={{ color:c.primaryContainer }}>${total}.00</span>
        </div>
        <button style={{ width:"100%", background:c.primaryContainer, color:c.onPrimaryContainer, padding:16, fontSize:11, fontWeight:700, letterSpacing:".2em", textTransform:"uppercase", boxShadow:"0 10px 30px rgba(249,94,20,0.3)" }}>
          Complete Purchase
        </button>
        <p style={{ fontSize:9, textAlign:"center", color:c.outlineVariant, fontStyle:"italic" }}>All tickets are non-refundable purchases.</p>
      </div>
    </div>
  );
}

function TicketsPage() {
  const [selectedShow, setSelectedShow] = useState(1);
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedSeats, setSelectedSeats] = useState([2, 3]);
  const [offering, setOffering] = useState(25);

  function toggleSeat(key) {
    setSelectedSeats(prev => prev.includes(key) ? prev.filter(s => s !== key) : [...prev, key]);
  }

  return (
    <main style={{ padding:"48px 0 96px", maxWidth:1200, margin:"0 auto" }}>
      <StepIndicator />
      <div style={{ display:"grid", gridTemplateColumns:"8fr 4fr", gap:48, padding:"0 48px" }}>
        <div style={{ display:"flex", flexDirection:"column", gap:64 }}>
          <ShowSelector selected={selectedShow} onSelect={setSelectedShow} />
          <DatePicker selected={selectedDate} onSelect={setSelectedDate} />
          <SeatMap selected={selectedSeats} onToggle={toggleSeat} />
        </div>
        <div>
          <PerformanceSummary showIndex={selectedShow} date={selectedDate} seats={selectedSeats} offering={offering} onOfferingChange={setOffering} />
        </div>
      </div>
      <div style={{ padding:"0 48px" }}>
        <Footer />
      </div>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <GlobalStyles />
      <Nav page={page} setPage={setPage} />
      <div style={{ paddingTop: page === "home" ? 0 : 80 }}>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "mission" && <MissionPage />}
        {page === "productions" && <ProductionsPage setPage={setPage} />}
        {page === "tickets" && <TicketsPage />}
      </div>
    </>
  );
}