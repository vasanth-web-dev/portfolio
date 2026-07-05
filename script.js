const covers = {
  blog: `<svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
    <defs><linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a1200"/><stop offset="100%" stop-color="#0d0d0d"/></linearGradient></defs>
    <rect width="600" height="210" fill="url(#bg1)"/>
    <rect x="55" y="20" width="490" height="170" rx="10" fill="#1c1c1c" stroke="rgba(255,215,0,0.18)" stroke-width="1.2"/>
    <rect x="55" y="20" width="490" height="28" rx="10" fill="#252525"/>
    <circle cx="78" cy="34" r="5" fill="#ff5f57"/><circle cx="94" cy="34" r="5" fill="#febc2e"/><circle cx="110" cy="34" r="5" fill="#28c840"/>
    <rect x="128" y="26" width="260" height="16" rx="8" fill="#333"/>
    <text x="148" y="38" fill="rgba(255,255,255,0.28)" font-size="8.5" font-family="monospace">vasanth-web-dev.github.io/Blog-Site</text>
    <rect x="65" y="56" width="470" height="18" rx="4" fill="rgba(255,215,0,0.06)"/>
    <text x="76" y="68" fill="rgba(255,215,0,0.7)" font-size="8" font-family="monospace" font-weight="bold">VS Blog</text>
    <text x="380" y="68" fill="rgba(255,255,255,0.3)" font-size="7.5" font-family="monospace">Home  Articles  About</text>
    <rect x="65" y="84" width="220" height="12" rx="3" fill="rgba(255,215,0,0.6)"/>
    <rect x="65" y="102" width="460" height="7" rx="2" fill="rgba(255,255,255,0.1)"/>
    <rect x="65" y="114" width="430" height="7" rx="2" fill="rgba(255,255,255,0.07)"/>
    <rect x="65" y="126" width="450" height="7" rx="2" fill="rgba(255,255,255,0.07)"/>
    <rect x="65" y="155" width="140" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,215,0,0.15)" stroke-width="1"/>
    <rect x="215" y="155" width="140" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,215,0,0.1)" stroke-width="1"/>
    <rect x="365" y="155" width="140" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,215,0,0.1)" stroke-width="1"/>
    <text x="135" y="173" fill="rgba(255,215,0,0.6)" font-size="7" font-family="monospace" text-anchor="middle">✍ Web Dev</text>
    <text x="285" y="173" fill="rgba(255,255,255,0.3)" font-size="7" font-family="monospace" text-anchor="middle">📖 SEO Tips</text>
    <text x="435" y="173" fill="rgba(255,255,255,0.3)" font-size="7" font-family="monospace" text-anchor="middle">💡 React</text>
  </svg>`,
  todo: `<svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
    <defs><linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#001510"/><stop offset="100%" stop-color="#0d0d0d"/></linearGradient></defs>
    <rect width="600" height="210" fill="url(#bg2)"/>
    <rect x="55" y="20" width="490" height="170" rx="10" fill="#1c1c1c" stroke="rgba(255,215,0,0.18)" stroke-width="1.2"/>
    <rect x="55" y="20" width="490" height="28" rx="10" fill="#252525"/>
    <circle cx="78" cy="34" r="5" fill="#ff5f57"/><circle cx="94" cy="34" r="5" fill="#febc2e"/><circle cx="110" cy="34" r="5" fill="#28c840"/>
    <rect x="128" y="26" width="250" height="16" rx="8" fill="#333"/>
    <text x="148" y="38" fill="rgba(255,255,255,0.28)" font-size="8.5" font-family="monospace">vasanth-web-dev.github.io/to-do-app</text>
    <rect x="65" y="57" width="470" height="22" rx="5" fill="rgba(255,215,0,0.08)"/>
    <text x="300" y="72" fill="#FFD700" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">My Tasks</text>
    <rect x="65" y="86" width="470" height="20" rx="4" fill="rgba(255,255,255,0.05)"/>
    <circle cx="82" cy="96" r="6" fill="none" stroke="#FFD700" stroke-width="1.5"/>
    <text x="96" y="100" fill="rgba(255,255,255,0.7)" font-size="9" font-family="monospace">Design a landing page</text>
    <rect x="65" y="110" width="470" height="20" rx="4" fill="rgba(255,215,0,0.05)"/>
    <circle cx="82" cy="120" r="6" fill="#FFD700"/>
    <line x1="78" y1="120" x2="81" y2="123" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="81" y1="123" x2="86" y2="116" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>
    <text x="96" y="124" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace" text-decoration="line-through">Push code to GitHub</text>
    <rect x="65" y="134" width="470" height="20" rx="4" fill="rgba(255,255,255,0.03)"/>
    <circle cx="82" cy="144" r="6" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
    <text x="96" y="148" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">Write meta tags for SEO</text>
    <rect x="65" y="162" width="370" height="22" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,215,0,0.3)" stroke-width="1"/>
    <text x="80" y="177" fill="rgba(255,255,255,0.2)" font-size="8.5" font-family="monospace">+ Add a new task...</text>
    <rect x="446" y="162" width="89" height="22" rx="6" fill="#FFD700"/>
    <text x="490" y="177" fill="#000" font-size="9" font-family="monospace" font-weight="bold" text-anchor="middle">Add Task</text>
  </svg>`,
  portfolio: `<svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
    <defs>
      <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1a0d00"/><stop offset="100%" stop-color="#0d0d0d"/></linearGradient>
      <radialGradient id="glow3" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255,215,0,0.14)"/><stop offset="100%" stop-color="transparent"/></radialGradient>
    </defs>
    <rect width="600" height="210" fill="url(#bg3)"/>
    <ellipse cx="300" cy="105" rx="280" ry="100" fill="url(#glow3)"/>
    <rect x="40" y="28" width="148" height="154" rx="12" fill="#1e1e1e" stroke="rgba(255,215,0,0.18)" stroke-width="1"/>
    <rect x="40" y="28" width="148" height="72" rx="12" fill="rgba(255,215,0,0.1)"/>
    <text x="114" y="70" font-size="30" text-anchor="middle" fill="rgba(255,215,0,0.5)">📸</text>
    <rect x="52" y="110" width="90" height="8" rx="3" fill="rgba(255,215,0,0.45)"/>
    <rect x="52" y="124" width="124" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
    <rect x="52" y="136" width="110" height="6" rx="2" fill="rgba(255,255,255,0.07)"/>
    <rect x="208" y="14" width="184" height="182" rx="14" fill="#222" stroke="rgba(255,215,0,0.4)" stroke-width="1.5"/>
    <rect x="208" y="14" width="184" height="86" rx="14" fill="rgba(255,215,0,0.16)"/>
    <text x="300" y="66" font-size="36" text-anchor="middle" fill="#FFD700">🎨</text>
    <rect x="220" y="110" width="110" height="9" rx="3" fill="rgba(255,215,0,0.65)"/>
    <rect x="220" y="126" width="158" height="6" rx="2" fill="rgba(255,255,255,0.14)"/>
    <rect x="220" y="138" width="144" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
    <rect x="220" y="166" width="72" height="22" rx="11" fill="#FFD700"/>
    <text x="256" y="180" fill="#000" font-size="8.5" font-weight="bold" text-anchor="middle">View →</text>
    <rect x="412" y="28" width="148" height="154" rx="12" fill="#1e1e1e" stroke="rgba(255,215,0,0.18)" stroke-width="1"/>
    <rect x="412" y="28" width="148" height="72" rx="12" fill="rgba(255,215,0,0.09)"/>
    <text x="486" y="70" font-size="30" text-anchor="middle" fill="rgba(255,215,0,0.45)">📱</text>
    <rect x="424" y="110" width="86" height="8" rx="3" fill="rgba(255,215,0,0.4)"/>
    <rect x="424" y="124" width="124" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
    <rect x="424" y="136" width="110" height="6" rx="2" fill="rgba(255,255,255,0.07)"/>
  </svg>`
};

const projects = [
  { title:"Blog Site", description:"A fully responsive blog platform built with HTML, CSS, and JavaScript. Features SEO-friendly structure, smooth navigation, and an elegant reading experience.", tech:["HTML5","CSS3","JavaScript"], link:"https://vasanth-web-dev.github.io/Blog-Site/", cover:"blog", label:"GitHub Pages", btnText:"Live Preview" },
  { title:"To-Do App", description:"A sleek task management app with add, complete, and delete operations, smooth animations, and a minimal user-friendly interface.", tech:["HTML5","CSS3","JavaScript"], link:"https://vasanth-web-dev.github.io/to-do-app/", cover:"todo", label:"GitHub Pages", btnText:"Live Preview" },
  { title:"Social Media Design Portfolio", description:"A curated collection of social media design work for 10+ businesses — brand posts, stories, banners, and promotional creatives crafted in Canva.", tech:["Canva","Social Media Design","Branding"], link:"https://drive.google.com/file/d/1JaChQFxyjcFnkHDC1co4VO81WvAy-u4R/view?usp=drive_link", cover:"portfolio", label:"Google Drive", btnText:"View Portfolio" }
];

function renderProjects() {
  document.getElementById("projectsGrid").innerHTML = projects.map((p,i) => `
    <article class="project-card reveal" style="transition-delay:${i*0.15}s">
      <div class="project-thumb">
        <div class="project-thumb-cover">${covers[p.cover]}</div>
        <div class="project-thumb-overlay">
          <a href="${p.link}" target="_blank" rel="noopener" class="project-live-btn">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            ${p.btnText}
          </a>
        </div>
      </div>
      <div class="project-body">
        <div class="project-tech">${p.tech.map(t=>`<span class="project-tech-tag">${t}</span>`).join("")}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-footer">
          <a href="${p.link}" target="_blank" rel="noopener" class="project-link">
            View Project
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </a>
          <span style="font-size:0.72rem;color:var(--muted);font-weight:600;">${p.label}</span>
        </div>
      </div>
    </article>
  `).join("");
  observeElements();
}

window.addEventListener("scroll", () =>
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 60)
);

// Hamburger / mobile menu
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mobileMenu").classList.toggle("open");
});
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// Scroll reveal
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach(el => observer.observe(el));
}

// Skill bar animation
function animateSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const pct = e.target.getAttribute("data-width");
        setTimeout(() => { e.target.style.width = pct + "%"; }, 100);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(bar => observer.observe(bar));
}

// Init
window.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  observeElements();
  animateSkillBars();
});

