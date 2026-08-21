// ==========================================================================
// EDICTED: 10,000-YEAR EINSTEIN / DUNE MENTAT INTERACTIVE CORE
// Complete Bilingual Application (EN / DE) + Particle Canvas & HUD
// ==========================================================================

let currentLang = localStorage.getItem('scientist_lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initParticleCanvas();
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

  // Hero Texts
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
    ? "Gleichungen, Archetypen, Regeln, Quantenmodelle durchsuchen..."
    : "Search equations, archetypes, rules, quantum models...";
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
    themeLabel.textContent = theme === 'deepspace' ? 'Obsidian Void' : theme === 'parchment' ? 'Arrakis Gold' : 'Mentat Matrix';
  }
  setTimeout(() => {
    updateBellmanSim();
    updateConsciousnessSim();
    updateRelativitySim();
  }, 100);
}

// --------------------------------------------------------------------------
// 4. Metrics & Stats
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
// 6. Articles Grid Rendering
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
      <section id="cat-${cat.id}" class="category-section" style="margin-bottom: 3.5rem;">
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
      <div class="archetype-card" style="border-top: 3px solid ${arch.color}">
        <div class="archetype-header">
          <span class="archetype-icon">${arch.symbol}</span>
          <div>
            <h3 class="archetype-title" style="color: ${arch.color}">${title}</h3>
            <span class="archetype-tagline">${tagline}</span>
          </div>
        </div>
        <div class="palace-pill">🏛️ ${currentLang === 'de' ? 'Palast-Kammer' : 'Palace Chamber'}: ${palace}</div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
          ${desc}
        </p>
        <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase;">
          ${currentLang === 'de' ? 'Kernattribute' : 'Core Attributes'}
        </div>
        <ul class="traits-list">
          ${traits.map(t => `<li>${t}</li>`).join('')}
        </ul>
        <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase;">
          ${currentLang === 'de' ? 'Handlungs-Edikt' : 'Behavioral Directive'}
        </div>
        <div style="font-size: 0.82rem; font-style: italic; color: var(--text-primary); background: rgba(0,0,0,0.3); padding: 0.6rem 0.85rem; border-radius: 6px; border-left: 2px solid ${arch.color}">
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
      <div class="article-card" style="padding: 1.5rem;">
        <div class="card-top">
          <span class="card-badge">${eq.category}</span>
          <span class="card-source">${eq.name}</span>
        </div>
        <div class="card-equation-box" style="margin: 0.85rem 0;">
          $$${eq.latex}$$
        </div>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">
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
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.1rem 1.35rem; display: flex; gap: 1rem; align-items: center; box-shadow: var(--shadow-hud);">
        <span style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 800; color: var(--accent-gold); min-width: 38px;">
          #${String(idx + 1).padStart(2, '0')}
        </span>
        <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-primary);">
          ${cleanText}
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 10. Ambient Particle Canvas (Dune Spice / Quantum Dust)
// --------------------------------------------------------------------------
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.2
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// --------------------------------------------------------------------------
// 11. Simulators
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
    });
  });

  ['bellman-gamma', 'bellman-reward', 'bellman-userval'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateBellmanSim);
  });

  ['sim-s', 'sim-e', 'sim-a', 'sim-r', 'sim-t', 'sim-theta'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateConsciousnessSim);
  });

  ['rel-r', 'rel-mass'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateRelativitySim);
  });

  updateBellmanSim();
  updateConsciousnessSim();
  updateRelativitySim();
}

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
      ? `<span style="color: var(--accent-emerald); font-weight: 800;">🟢 ACTIVE HABIT (DOMINANT, V > 250)</span>`
      : `<span style="color: var(--accent-rose); font-weight: 800;">🔴 INACTIVE / EXTINCT (V < 250)</span>`;
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
  const h = canvas.height = 220;

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

  // 250 Threshold Line
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
  ctx.fillText('Threshold V=250', 45, threshY - 6);

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

  // Operating Point
  const finalX = w - 20;
  const finalY = (h - 30) - (Math.min(userVal, 600) / 600) * (h - 50);
  ctx.fillStyle = userVal > 250 ? '#10b981' : '#ef4444';
  ctx.beginPath();
  ctx.arc(finalX, finalY, 6, 0, Math.PI * 2);
  ctx.fill();
}

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
  if (valDisplay) {
    valDisplay.textContent = (C * 100).toFixed(1) + '%';
  }

  const burstStatus = document.getElementById('burst-status-badge');
  if (burstStatus) {
    burstStatus.innerHTML = burst > 0 
      ? `<span style="color: var(--accent-emerald)">⚡ SPONTANEOUS IGNITION ACTIVE (T > θ)</span>`
      : `<span style="color: var(--text-muted)">💤 QUIESCENT STEADY STATE</span>`;
  }

  drawConsciousnessCanvas(C, burst);
}

function drawConsciousnessCanvas(C, burst) {
  const canvas = document.getElementById('consciousness-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth || 400;
  const h = canvas.height = 220;

  ctx.clearRect(0, 0, w, h);

  ctx.strokeStyle = burst ? '#f59e0b' : '#a78bfa';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  const freq = 4 + C * 20;
  const amplitude = 20 + C * 50;

  for (let x = 0; x < w; x++) {
    const rad = (x / w) * Math.PI * 2 * (freq / 4);
    const noise = burst ? (Math.random() - 0.5) * 8 : 0;
    const y = h / 2 + Math.sin(rad) * amplitude + noise;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.fillStyle = 'rgba(245, 158, 11, 0.8)';
  ctx.font = '11px monospace';
  ctx.fillText(`C(t) State: ${(C * 100).toFixed(1)}% | Wave: ${freq.toFixed(1)} Hz`, 15, 25);
}

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
  const h = canvas.height = 220;

  ctx.clearRect(0, 0, w, h);

  const horizonX = 60;
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, horizonX, h);
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(horizonX, 0); ctx.lineTo(horizonX, h); ctx.stroke();

  ctx.fillStyle = '#ef4444';
  ctx.font = '10px monospace';
  ctx.fillText('Horizon (rs)', 5, 20);

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
  ctx.arc(obsX, obsY, 6, 0, Math.PI * 2);
  ctx.fill();
}

// --------------------------------------------------------------------------
// 12. Search & Filter
// --------------------------------------------------------------------------
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    renderArticles(e.target.value);
  });
}

// --------------------------------------------------------------------------
// 13. Web Audio Binaural Engine
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
      btn.style.background = 'rgba(245, 158, 11, 0.15)';
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
    console.warn("Audio context not allowed:", err);
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
      console.warn("KaTeX rendering error:", e);
    }
  }
}
