// ==========================================================================
// EDICTED // 10,000-YEAR DUNE & SPACE OBSERVATORY INTERACTIVE CORE
// 6 Interactive Visual Simulators + Space Particle Constellations + Bilingual EN/DE
// ==========================================================================

let currentLang = localStorage.getItem('scientist_lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initSpaceParticleCanvas();
  renderApp();
  initSimulators();
  initSearch();
  initAudioEngine();
  initModal();
});

// --------------------------------------------------------------------------
// 1. Language Toggle (EN / DE)
// --------------------------------------------------------------------------
function initLanguage() {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'de' : 'en';
      localStorage.setItem('scientist_lang', currentLang);
      updateLangButton();
      renderApp();
    });
  }
  updateLangButton();
}

function updateLangButton() {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'en' ? '🌐 EN | DE' : '🌐 DE | EN';
  }
}

// --------------------------------------------------------------------------
// 2. Global Render (Bilingual)
// --------------------------------------------------------------------------
function renderApp() {
  renderStaticUIText();
  renderMetrics();
  renderCategoriesNav();
  renderArticles();
  renderArchetypes();
  renderEquationsDirectory();
  renderRulesCodex();
}

function renderStaticUIText() {
  const isDe = currentLang === 'de';

  const titleEl = document.getElementById('hero-main-title');
  const subEl = document.getElementById('hero-main-subtitle');
  const chronoEl = document.getElementById('hero-chrono-stamp');
  const searchInput = document.getElementById('global-search-input');
  const pdfBtnText = document.getElementById('pdf-download-text');
  const audioBtnText = document.getElementById('audio-btn-text');

  if (titleEl) titleEl.textContent = SCIENTIFIC_CORPUS.metadata.title[currentLang];
  if (subEl) subEl.textContent = SCIENTIFIC_CORPUS.metadata.subtitle[currentLang];
  if (chronoEl) chronoEl.textContent = SCIENTIFIC_CORPUS.metadata.stardate;
  if (searchInput) searchInput.placeholder = isDe 
    ? "Gleichungen, Archetypen, Regeln, Raumzeitmodelle durchsuchen..."
    : "Search equations, archetypes, rules, spacetime models...";
  if (pdfBtnText) pdfBtnText.textContent = isDe ? "📥 PDF Herunterladen" : "📥 Download Clean PDF";
  if (audioBtnText) audioBtnText.textContent = isDe ? "▶️ 40Hz Fokus-Wellen Abspielen" : "▶️ Play Focus Waves (40Hz)";
}

// --------------------------------------------------------------------------
// 3. Theme Management
// --------------------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem('scientist_theme') || 'deepspace';
  setTheme(savedTheme);

  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'deepspace';
      const nextTheme = current === 'deepspace' ? 'parchment' : current === 'parchment' ? 'matrix' : 'deepspace';
      setTheme(nextTheme);
    });
  }
}

function setTheme(theme) {
  if (theme === 'deepspace') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
  localStorage.setItem('scientist_theme', theme);
  const themeLabel = document.getElementById('current-theme-label');
  if (themeLabel) {
    themeLabel.textContent = theme === 'deepspace' ? 'Obsidian Void' : theme === 'parchment' ? 'Arrakis Sun' : 'Mentat Matrix';
  }
  setTimeout(() => {
    updateBellmanSim();
    updateConsciousnessSim();
    updateRelativitySim();
    updateBrokenMirrorSim();
    updateCognitiveBandwidthSim();
    updatePhiNetworkSim();
  }, 100);
}

// --------------------------------------------------------------------------
// 4. Metrics
// --------------------------------------------------------------------------
function renderMetrics() {
  document.getElementById('metric-articles').textContent = SCIENTIFIC_CORPUS.articles.length;
  document.getElementById('metric-rules').textContent = SCIENTIFIC_CORPUS.metadata.totalRules;
  document.getElementById('metric-archetypes').textContent = SCIENTIFIC_CORPUS.metadata.totalArchetypes;
  document.getElementById('metric-equations').textContent = SCIENTIFIC_CORPUS.equationsDirectory.length;
}

// --------------------------------------------------------------------------
// 5. Sidebar Navigation
// --------------------------------------------------------------------------
function renderCategoriesNav() {
  const container = document.getElementById('categories-nav-list');
  if (!container) return;

  container.innerHTML = SCIENTIFIC_CORPUS.categories.map(cat => {
    const count = SCIENTIFIC_CORPUS.articles.filter(a => a.categoryId === cat.id).length;
    const catName = cat.name[currentLang] || cat.name.en;
    return `
      <a href="#cat-${cat.id}" class="nav-link">
        <span>${cat.icon} ${catName}</span>
        <span class="badge">${count}</span>
      </a>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 6. Articles Grid
// --------------------------------------------------------------------------
function renderArticles(filterQuery = '') {
  const container = document.getElementById('modules-container');
  if (!container) return;

  const q = filterQuery.toLowerCase().trim();

  container.innerHTML = SCIENTIFIC_CORPUS.categories.map(cat => {
    const categoryArticles = SCIENTIFIC_CORPUS.articles.filter(art => {
      if (art.categoryId !== cat.id) return false;
      if (!q) return true;
      const title = (art.title[currentLang] || art.title.en).toLowerCase();
      const summary = (art.summary[currentLang] || art.summary.en).toLowerCase();
      return title.includes(q) || summary.includes(q) || art.tags.some(t => t.toLowerCase().includes(q));
    });

    if (categoryArticles.length === 0) return '';

    const catName = cat.name[currentLang] || cat.name.en;

    const cardsHtml = categoryArticles.map(art => {
      const artTitle = art.title[currentLang] || art.title.en;
      const artSummary = art.summary[currentLang] || art.summary.en;

      return `
        <div class="article-card" data-article-id="${art.id}" onclick="openArticleModal('${art.id}')">
          <div class="card-top">
            <span class="card-badge">${cat.badge}</span>
            <span class="card-source">${art.sourceReference.split(';')[0]}</span>
          </div>
          <h3 class="card-title">${artTitle}</h3>
          <p class="card-summary">${artSummary}</p>
          <div class="card-equation-box">
            $$${art.keyEquation}$$
          </div>
          <div class="card-tags">
            ${art.tags.map(t => `<span class="card-tag-pill">#${t}</span>`).join('')}
          </div>
        </div>
      `;
    }).join('');

    return `
      <section id="cat-${cat.id}" class="category-section" style="margin-bottom: 4rem;">
        <div class="section-header">
          <h2 class="section-title">
            <span>${cat.icon} ${catName}</span>
          </h2>
          <span class="section-tag">${cat.badge} // ${categoryArticles.length} ${currentLang === 'de' ? 'Traktate' : 'Treatises'}</span>
        </div>
        <div class="cards-grid">
          ${cardsHtml}
        </div>
      </section>
    `;
  }).join('');

  renderMathInElementSafely(container);
}

// --------------------------------------------------------------------------
// 7. Archetypes Matrix
// --------------------------------------------------------------------------
function renderArchetypes() {
  const container = document.getElementById('archetypes-container');
  if (!container) return;

  container.innerHTML = SCIENTIFIC_CORPUS.archetypesDirectory.map(arch => {
    const title = arch.title[currentLang] || arch.title.en;
    const tagline = arch.tagline[currentLang] || arch.tagline.en;
    const palace = arch.palaceRoom[currentLang] || arch.palaceRoom.en;
    const desc = arch.description[currentLang] || arch.description.en;
    const traits = arch.traits[currentLang] || arch.traits.en;
    const rules = arch.rules[currentLang] || arch.rules.en;

    return `
      <div class="archetype-card" style="border-top: 4px solid ${arch.color}">
        <div class="archetype-header">
          <span class="archetype-icon">${arch.symbol}</span>
          <div>
            <h3 class="archetype-title" style="color: ${arch.color}">${title}</h3>
            <span class="archetype-tagline">${tagline}</span>
          </div>
        </div>
        <div class="palace-pill">🏛️ ${currentLang === 'de' ? 'Palast-Kammer' : 'Palace Chamber'}: ${palace}</div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.35rem; line-height: 1.6;">
          ${desc}
        </p>
        <div style="font-size: 0.75rem; font-family: var(--font-display); color: var(--text-muted); margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.08em;">
          ${currentLang === 'de' ? 'Kernattribute' : 'Core Attributes'}
        </div>
        <ul class="traits-list">
          ${traits.map(t => `<li>${t}</li>`).join('')}
        </ul>
        <div style="font-size: 0.75rem; font-family: var(--font-display); color: var(--text-muted); margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 0.08em;">
          ${currentLang === 'de' ? 'Handlungs-Edikt' : 'Behavioral Directive'}
        </div>
        <div style="font-size: 0.85rem; font-style: italic; color: var(--text-primary); background: rgba(0,0,0,0.35); padding: 0.75rem 1rem; border-radius: 8px; border-left: 3px solid ${arch.color}">
          "${rules[0]}"
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 8. Equations Directory
// --------------------------------------------------------------------------
function renderEquationsDirectory() {
  const container = document.getElementById('equations-codex-container');
  if (!container) return;

  container.innerHTML = SCIENTIFIC_CORPUS.equationsDirectory.map(eq => {
    const desc = eq.description[currentLang] || eq.description.en;
    return `
      <div class="article-card" style="padding: 1.75rem;">
        <div class="card-top">
          <span class="card-badge">${eq.category}</span>
          <span class="card-source">${eq.name}</span>
        </div>
        <div class="card-equation-box" style="margin: 1rem 0;">
          $$${eq.latex}$$
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">
          ${desc}
        </p>
      </div>
    `;
  }).join('');

  renderMathInElementSafely(container);
}

// --------------------------------------------------------------------------
// 9. 37 Rules Codex
// --------------------------------------------------------------------------
function renderRulesCodex() {
  const container = document.getElementById('rules-codex-list');
  if (!container) return;

  const rulesArticle = SCIENTIFIC_CORPUS.articles.find(a => a.id === 'the-thirty-seven-edicts-codex');
  if (!rulesArticle) return;

  const contentStr = rulesArticle.content[currentLang] || rulesArticle.content.en;
  const parts = contentStr.split('|').map(s => s.trim()).filter(Boolean);

  container.innerHTML = parts.map((part, idx) => {
    const cleanText = part.replace(/^\d+\.\s*/, '').replace(/###.*?\n/, '').trim();
    if (!cleanText) return '';

    return `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem 1.5rem; display: flex; gap: 1.15rem; align-items: center; box-shadow: var(--shadow-hud);">
        <span style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; color: var(--accent-gold); min-width: 42px;">
          #${String(idx + 1).padStart(2, '0')}
        </span>
        <div style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">
          ${cleanText}
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 10. Space Dust & Constellation Particles
// --------------------------------------------------------------------------
function initSpaceParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  let mouse = { x: null, y: null, radius: 120 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 0.8,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    color: Math.random() > 0.4 ? 'rgba(245, 158, 11, ' : 'rgba(56, 189, 248, '
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0) p1.x = width;
      if (p1.x > width) p1.x = 0;
      if (p1.y < 0) p1.y = height;
      if (p1.y > height) p1.y = 0;

      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      ctx.fillStyle = p1.color + '0.7)';
      ctx.fill();

      // Connect constellation lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(245, 158, 11, ${0.15 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }
  animate();
}

// --------------------------------------------------------------------------
// 11. All 6 Interactive Simulators
// --------------------------------------------------------------------------
function initSimulators() {
  const tabBtns = document.querySelectorAll('.lab-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.simulator-panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');

      if (targetId === 'sim-bellman') updateBellmanSim();
      if (targetId === 'sim-consciousness') updateConsciousnessSim();
      if (targetId === 'sim-relativity') updateRelativitySim();
      if (targetId === 'sim-broken-mirror') updateBrokenMirrorSim();
      if (targetId === 'sim-bandwidth') updateCognitiveBandwidthSim();
      if (targetId === 'sim-phi-network') updatePhiNetworkSim();
    });
  });

  // Simulator 1: Bellman
  ['bellman-gamma', 'bellman-reward', 'bellman-userval'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateBellmanSim);
  });

  // Simulator 2: Consciousness C(t)
  ['sim-s', 'sim-e', 'sim-a', 'sim-r', 'sim-t', 'sim-theta'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateConsciousnessSim);
  });

  // Simulator 3: Relativity
  ['rel-r', 'rel-mass'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateRelativitySim);
  });

  // Simulator 4: Broken Mirror
  ['bm-t2-slider', 'bm-asym-slider'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateBrokenMirrorSim);
  });

  // Simulator 5: Cognitive Bandwidth
  const bandSlider = document.getElementById('bandwidth-slider');
  if (bandSlider) bandSlider.addEventListener('input', updateCognitiveBandwidthSim);

  // Simulator 6: Phi Network
  ['phi-node1-btn', 'phi-node2-btn', 'phi-node3-btn', 'phi-node4-btn'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      updatePhiNetworkSim();
    });
  });

  updateBellmanSim();
  updateConsciousnessSim();
  updateRelativitySim();
  updateBrokenMirrorSim();
  updateCognitiveBandwidthSim();
  updatePhiNetworkSim();
}

// --- Sim 1: Bellman ---
function updateBellmanSim() {
  const gamma = parseFloat(document.getElementById('bellman-gamma')?.value || 0.99);
  const reward = parseFloat(document.getElementById('bellman-reward')?.value || 5.0);
  const userVal = parseFloat(document.getElementById('bellman-userval')?.value || 280);

  document.getElementById('val-bellman-gamma').textContent = gamma.toFixed(2);
  document.getElementById('val-bellman-reward').textContent = reward.toFixed(1);
  document.getElementById('val-bellman-userval').textContent = userVal.toFixed(0);

  const v1 = reward / (1.0 - gamma);
  const v0 = v1 - 2 * reward;
  const isDominant = userVal > 250;

  const resultBadge = document.getElementById('bellman-state-result');
  if (resultBadge) {
    resultBadge.innerHTML = isDominant 
      ? `<span style="color: var(--accent-emerald); font-weight: 800;">🟢 ${currentLang === 'de' ? 'AKTIVE GEWOHNHEIT (DOMINANT, V > 250)' : 'ACTIVE HABIT (DOMINANT, V > 250)'}</span>`
      : `<span style="color: var(--accent-rose); font-weight: 800;">🔴 ${currentLang === 'de' ? 'INAKTIV / ERLOSCHEN (V < 250)' : 'INACTIVE / EXTINCT (V < 250)'}</span>`;
  }

  document.getElementById('bellman-v1-calc').textContent = v1.toFixed(1);
  document.getElementById('bellman-delta-calc').textContent = (v1 - v0).toFixed(1);

  drawBellmanCanvas(gamma, reward, userVal, v1);
}

function drawBellmanCanvas(gamma, reward, userVal, v1) {
  const canvas = document.getElementById('bellman-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth || 400;
  const h = canvas.height = 240;

  ctx.clearRect(0, 0, w, h);

  // Grid
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.12)';
  ctx.lineWidth = 1;
  for (let x = 40; x < w; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h - 30); ctx.stroke();
  }
  for (let y = 20; y < h - 30; y += 30) {
    ctx.beginPath(); ctx.moveTo(40, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Threshold V=250
  const threshY = (h - 30) - (250 / 600) * (h - 50);
  ctx.strokeStyle = '#f59e0b';
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(40, threshY);
  ctx.lineTo(w, threshY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#f59e0b';
  ctx.font = '11px monospace';
  ctx.fillText('Dominance V=250', 45, threshY - 6);

  // Curve
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 3;
  ctx.beginPath();
  let currV = userVal * 0.3;
  for (let step = 0; step < 20; step++) {
    const x = 40 + (step / 19) * (w - 60);
    currV = reward + gamma * currV;
    const y = (h - 30) - (Math.min(currV, 600) / 600) * (h - 50);
    if (step === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Operating Dot
  const finalX = w - 20;
  const finalY = (h - 30) - (Math.min(userVal, 600) / 600) * (h - 50);
  ctx.fillStyle = userVal > 250 ? '#10b981' : '#ef4444';
  ctx.beginPath();
  ctx.arc(finalX, finalY, 7, 0, Math.PI * 2);
  ctx.fill();
}

// --- Sim 2: Consciousness C(t) ---
function updateConsciousnessSim() {
  const S = parseFloat(document.getElementById('sim-s')?.value || 0.8);
  const E = parseFloat(document.getElementById('sim-e')?.value || 0.7);
  const A = parseFloat(document.getElementById('sim-a')?.value || 0.9);
  const R = parseFloat(document.getElementById('sim-r')?.value || 0.6);
  const T = parseFloat(document.getElementById('sim-t')?.value || 0.4);
  const theta = parseFloat(document.getElementById('sim-theta')?.value || 0.5);

  document.getElementById('val-sim-s').textContent = S.toFixed(2);
  document.getElementById('val-sim-e').textContent = E.toFixed(2);
  document.getElementById('val-sim-a').textContent = A.toFixed(2);
  document.getElementById('val-sim-r').textContent = R.toFixed(2);
  document.getElementById('val-sim-t').textContent = T.toFixed(2);
  document.getElementById('val-sim-theta').textContent = theta.toFixed(2);

  const alpha = 0.3, beta = 0.25, gamma = 0.25, delta = 0.2, xi = 0.4;
  const burst = (T > theta) ? 1.0 : 0.0;
  const rawZ = alpha * S + beta * E + gamma * A + delta * R + xi * burst - 0.5;
  const C = 1.0 / (1.0 + Math.exp(-3.5 * rawZ));

  const valDisplay = document.getElementById('consciousness-level-val');
  if (valDisplay) valDisplay.textContent = (C * 100).toFixed(1) + '%';

  const burstStatus = document.getElementById('burst-status-badge');
  if (burstStatus) {
    burstStatus.innerHTML = burst > 0 
      ? `<span style="color: var(--accent-emerald)">⚡ ${currentLang === 'de' ? 'SPONTANE ZÜNDUNG AKTIV (T > θ)' : 'SPONTANEOUS IGNITION ACTIVE (T > θ)'}</span>`
      : `<span style="color: var(--text-muted)">💤 ${currentLang === 'de' ? 'RUHENDER ZUSTAND' : 'QUIESCENT STEADY STATE'}</span>`;
  }

  drawConsciousnessCanvas(C, burst);
}

function drawConsciousnessCanvas(C, burst) {
  const canvas = document.getElementById('consciousness-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth || 400;
  const h = canvas.height = 240;

  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = burst ? '#f59e0b' : '#a855f7';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  const freq = 4 + C * 22;
  const amplitude = 20 + C * 55;

  for (let x = 0; x < w; x++) {
    const rad = (x / w) * Math.PI * 2 * (freq / 4);
    const noise = burst ? (Math.random() - 0.5) * 10 : 0;
    const y = h / 2 + Math.sin(rad) * amplitude + noise;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.fillStyle = 'rgba(245, 158, 11, 0.85)';
  ctx.font = '11px monospace';
  ctx.fillText(`C(t) State: ${(C * 100).toFixed(1)}% | Frequency: ${freq.toFixed(1)} Hz`, 15, 25);
}

// --- Sim 3: Relativity ---
function updateRelativitySim() {
  const rOverRs = parseFloat(document.getElementById('rel-r')?.value || 2.0);
  const mass = parseFloat(document.getElementById('rel-mass')?.value || 10.0);

  document.getElementById('val-rel-r').textContent = rOverRs.toFixed(2) + ' rs';
  document.getElementById('val-rel-mass').textContent = mass.toFixed(0) + ' M☉';

  const rsKm = 2.95 * mass;
  document.getElementById('val-rs-km').textContent = rsKm.toFixed(1) + ' km';

  let dilation = 1.0 / Math.sqrt(1.0 - 1.0 / rOverRs);
  if (dilation > 999) dilation = 999;

  document.getElementById('val-dilation-factor').textContent = dilation > 100 ? '∞ (Horizon Freeze)' : dilation.toFixed(3) + 'x';

  drawRelativityCanvas(rOverRs);
}

function drawRelativityCanvas(currentR) {
  const canvas = document.getElementById('relativity-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth || 400;
  const h = canvas.height = 240;

  ctx.clearRect(0, 0, w, h);

  const horizonX = 65;
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, horizonX, h);
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(horizonX, 0); ctx.lineTo(horizonX, h); ctx.stroke();

  ctx.fillStyle = '#ef4444';
  ctx.font = '11px monospace';
  ctx.fillText('Horizon (rs)', 5, 22);

  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  let first = true;
  for (let r = 1.05; r <= 5.0; r += 0.05) {
    const x = horizonX + ((r - 1.0) / 4.0) * (w - horizonX - 20);
    const dilation = 1.0 / Math.sqrt(1.0 - 1.0 / r);
    const clampedDil = Math.min(dilation, 8.0);
    const y = (h - 20) - (clampedDil / 8.0) * (h - 40);

    if (first) { ctx.moveTo(x, y); first = false; }
    else { ctx.lineTo(x, y); }
  }
  ctx.stroke();

  const obsX = horizonX + ((currentR - 1.0) / 4.0) * (w - horizonX - 20);
  const obsDil = Math.min(1.0 / Math.sqrt(1.0 - 1.0 / currentR), 8.0);
  const obsY = (h - 20) - (obsDil / 8.0) * (h - 40);

  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(obsX, obsY, 7, 0, Math.PI * 2);
  ctx.fill();
}

// --- Sim 4: Broken Mirror Theory (T1 = 2T2) ---
function updateBrokenMirrorSim() {
  const t2Val = parseFloat(document.getElementById('bm-t2-slider')?.value || 1.0);
  const asym = parseFloat(document.getElementById('bm-asym-slider')?.value || 2.0);

  const t1Calc = asym * t2Val;

  const t2Display = document.getElementById('val-bm-t2');
  const asymDisplay = document.getElementById('val-bm-asym');
  const t1Display = document.getElementById('val-bm-t1-calc');

  if (t2Display) t2Display.textContent = t2Val.toFixed(2) + ' sec';
  if (asymDisplay) asymDisplay.textContent = asym.toFixed(1) + 'x';
  if (t1Display) t1Display.textContent = t1Calc.toFixed(2) + ' sec';

  drawBrokenMirrorCanvas(t2Val, asym, t1Calc);
}

function drawBrokenMirrorCanvas(t2, asym, t1) {
  const canvas = document.getElementById('broken-mirror-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth || 400;
  const h = canvas.height = 240;

  ctx.clearRect(0, 0, w, h);

  // Draw Primary Observer Wave T1 (Gold)
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let x = 0; x < w; x++) {
    const y = h * 0.35 + Math.sin((x / w) * Math.PI * 2 * (t1 * 2)) * 30;
    if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Draw Reflected Vacuum Wave T2 (Cyan)
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  for (let x = 0; x < w; x++) {
    const y = h * 0.75 + Math.sin((x / w) * Math.PI * 2 * (t2 * 2)) * 30;
    if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.setLineDash([]);

  // Labels
  ctx.fillStyle = '#f59e0b';
  ctx.font = '11px monospace';
  ctx.fillText(`Primary Frame T1: ${t1.toFixed(2)}s (f1 = ${t1 * 2}Hz)`, 15, 25);

  ctx.fillStyle = '#38bdf8';
  ctx.fillText(`Vacuum Reflected Frame T2: ${t2.toFixed(2)}s (f2 = ${t2 * 2}Hz)`, 15, h * 0.75 - 38);
}

// --- Sim 5: 37% Cognitive Bandwidth Allocator ---
function updateCognitiveBandwidthSim() {
  const activePercent = parseFloat(document.getElementById('bandwidth-slider')?.value || 37);
  const subPercent = 100 - activePercent;

  const activeDisplay = document.getElementById('val-bandwidth-active');
  const subDisplay = document.getElementById('val-bandwidth-sub');
  const statusDisplay = document.getElementById('bandwidth-status-badge');

  if (activeDisplay) activeDisplay.textContent = activePercent.toFixed(0) + '%';
  if (subDisplay) subDisplay.textContent = subPercent.toFixed(0) + '%';

  const isOptimal = Math.abs(activePercent - 37) <= 4;
  if (statusDisplay) {
    statusDisplay.innerHTML = isOptimal
      ? `<span style="color: var(--accent-emerald); font-weight: 800;">🟢 ${currentLang === 'de' ? 'THERMODYNAMISCHES OPTIMUM (37% AKTIV)' : 'THERMODYNAMIC OPTIMUM (37% ACTIVE)'}</span>`
      : activePercent > 50
      ? `<span style="color: var(--accent-rose); font-weight: 800;">🔴 ${currentLang === 'de' ? 'METABOLISCHE ÜBERHITZUNG (>50%)' : 'METABOLIC OVERLOAD (>50%)'}</span>`
      : `<span style="color: var(--accent-gold); font-weight: 800;">🟡 ${currentLang === 'de' ? 'SUBOPTIMALE DURCHDRINGUNG' : 'SUBOPTIMAL FOCUS'}</span>`;
  }

  drawCognitiveBandwidthCanvas(activePercent, subPercent);
}

function drawCognitiveBandwidthCanvas(active, sub) {
  const canvas = document.getElementById('bandwidth-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth || 400;
  const h = canvas.height = 240;

  ctx.clearRect(0, 0, w, h);

  const centerX = w / 2;
  const centerY = h / 2;
  const radius = 75;

  const activeRad = (active / 100) * Math.PI * 2;

  // Draw 63% Subconscious Arc (Deep Slate / Cyan)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, activeRad - Math.PI / 2, Math.PI * 1.5);
  ctx.lineTo(centerX, centerY);
  ctx.fillStyle = 'rgba(56, 189, 248, 0.25)';
  ctx.fill();
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw 37% Active Consciousness Arc (Gold)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, -Math.PI / 2, activeRad - Math.PI / 2);
  ctx.lineTo(centerX, centerY);
  ctx.fillStyle = 'rgba(245, 158, 11, 0.75)';
  ctx.fill();
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Center Cutout (Doughnut)
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.45, 0, Math.PI * 2);
  ctx.fillStyle = '#0c1220';
  ctx.fill();
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
  ctx.stroke();

  ctx.fillStyle = '#f8fafc';
  ctx.font = '12px Orbitron';
  ctx.textAlign = 'center';
  ctx.fillText(`${active}% / ${sub}%`, centerX, centerY + 4);
}

// --- Sim 6: IIT Phi Network Visualizer ---
function updatePhiNetworkSim() {
  const n1 = document.getElementById('phi-node1-btn')?.classList.contains('active') || false;
  const n2 = document.getElementById('phi-node2-btn')?.classList.contains('active') || false;
  const n3 = document.getElementById('phi-node3-btn')?.classList.contains('active') || false;
  const n4 = document.getElementById('phi-node4-btn')?.classList.contains('active') || false;

  const activeNodes = [n1, n2, n3, n4].filter(Boolean).length;
  let phiValue = 0.0;

  if (activeNodes <= 1) phiValue = 0.0;
  else if (activeNodes === 2) phiValue = 0.75;
  else if (activeNodes === 3) phiValue = 1.85;
  else if (activeNodes === 4) phiValue = 3.64;

  const phiValDisplay = document.getElementById('val-phi-calc');
  if (phiValDisplay) phiValDisplay.textContent = `Φ = ${phiValue.toFixed(2)} bits`;

  drawPhiNetworkCanvas(n1, n2, n3, n4, phiValue);
}

function drawPhiNetworkCanvas(n1, n2, n3, n4, phi) {
  const canvas = document.getElementById('phi-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth || 400;
  const h = canvas.height = 240;

  ctx.clearRect(0, 0, w, h);

  const nodes = [
    { x: w * 0.3, y: h * 0.3, active: n1, label: "M1" },
    { x: w * 0.7, y: h * 0.3, active: n2, label: "M2" },
    { x: w * 0.7, y: h * 0.7, active: n3, label: "M3" },
    { x: w * 0.3, y: h * 0.7, active: n4, label: "M4" }
  ];

  // Draw feedback connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].active && nodes[j].active) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.7)';
        ctx.lineWidth = 2.5;
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw Nodes
  nodes.forEach(node => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
    ctx.fillStyle = node.active ? '#f59e0b' : 'rgba(255, 255, 255, 0.1)';
    ctx.fill();
    ctx.strokeStyle = node.active ? '#ffffff' : 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = node.active ? '#000000' : '#64748b';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(node.label, node.x, node.y + 3);
  });

  ctx.fillStyle = '#f59e0b';
  ctx.font = '12px Orbitron';
  ctx.textAlign = 'left';
  ctx.fillText(`Integrated Information: Φ = ${phi.toFixed(2)} bits`, 15, 25);
}

// --------------------------------------------------------------------------
// 12. Search
// --------------------------------------------------------------------------
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    renderArticles(e.target.value);
  });
}

// --------------------------------------------------------------------------
// 13. Audio Focus Engine
// --------------------------------------------------------------------------
let audioCtx = null;
let isAudioPlaying = false;
let osc1 = null, osc2 = null, gainNode = null;

function initAudioEngine() {
  const btn = document.getElementById('audio-play-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (!isAudioPlaying) {
      startSoundscape();
      btn.innerHTML = `<span>⏹️ ${currentLang === 'de' ? 'Fokus-Wellen Stoppen' : 'Stop Focus Waves (40Hz)'}</span>`;
      btn.style.background = 'rgba(239, 68, 68, 0.2)';
      btn.style.borderColor = 'var(--accent-rose)';
      btn.style.color = 'var(--accent-rose)';
    } else {
      stopSoundscape();
      btn.innerHTML = `<span>▶️ ${currentLang === 'de' ? '40Hz Fokus-Wellen Abspielen' : 'Play Focus Waves (40Hz)'}</span>`;
      btn.style.background = 'rgba(245, 158, 11, 0.18)';
      btn.style.borderColor = 'var(--accent-gold)';
      btn.style.color = 'var(--accent-gold)';
    }
  });
}

function startSoundscape() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    osc1 = audioCtx.createOscillator();
    osc2 = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();

    osc1.frequency.setValueAtTime(200, audioCtx.currentTime);
    osc2.frequency.setValueAtTime(240, audioCtx.currentTime);

    osc1.connect(gainNode);
    osc2.connect(gainNode);

    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gainNode.connect(audioCtx.destination);

    osc1.start();
    osc2.start();
    isAudioPlaying = true;
  } catch (err) {
    console.warn("Audio error:", err);
  }
}

function stopSoundscape() {
  if (osc1) osc1.stop();
  if (osc2) osc2.stop();
  if (audioCtx) audioCtx.close();
  isAudioPlaying = false;
}

// --------------------------------------------------------------------------
// 14. Modal Reader
// --------------------------------------------------------------------------
function initModal() {
  const backdrop = document.getElementById('reader-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', () => {
      backdrop.classList.remove('open');
    });
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });
  }
}

function openArticleModal(articleId) {
  const article = SCIENTIFIC_CORPUS.articles.find(a => a.id === articleId);
  if (!article) return;

  const modal = document.getElementById('reader-modal');
  const titleEl = document.getElementById('modal-article-title');
  const sourceEl = document.getElementById('modal-article-source');
  const bodyEl = document.getElementById('modal-article-body');

  titleEl.textContent = article.title[currentLang] || article.title.en;
  sourceEl.textContent = `CHRONO-REF: ${article.sourceReference}`;

  const rawContent = article.content[currentLang] || article.content.en;
  bodyEl.innerHTML = parseMarkdownToHtml(rawContent);

  renderMathInElementSafely(bodyEl);
  modal.classList.add('open');
}

function parseMarkdownToHtml(md) {
  let html = md
    .replace(/### (.*?)\n/g, '<h3>$1</h3>')
    .replace(/## (.*?)\n/g, '<h2>$1</h2>')
    .replace(/# (.*?)\n/g, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/> (.*?)\n/g, '<blockquote>$1</blockquote>')
    .replace(/```python([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/\n\n/g, '<p></p>')
    .replace(/\n/g, '<br>');
  return html;
}

function renderMathInElementSafely(element) {
  if (typeof renderMathInElement === 'function') {
    try {
      renderMathInElement(element, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn("KaTeX error:", e);
    }
  }
}
