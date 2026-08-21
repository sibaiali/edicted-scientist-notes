// ==========================================================================
// SCIENTIST NOTES MODE: INTERACTIVE APPLICATION CORE
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderMetrics();
  renderCategoriesNav();
  renderArticles();
  renderArchetypes();
  renderEquationsDirectory();
  renderRulesCodex();
  initSimulators();
  initSearch();
  initAudioEngine();
  initModal();
});

// --------------------------------------------------------------------------
// 1. Theme Management
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
    themeLabel.textContent = theme === 'deepspace' ? 'Deep Space' : theme === 'parchment' ? 'Parchment Lab' : 'Quantum Matrix';
  }
  // Re-draw simulator charts with current theme colors
  setTimeout(() => {
    updateBellmanSim();
    updateConsciousnessSim();
    updateRelativitySim();
  }, 100);
}

// --------------------------------------------------------------------------
// 2. Metrics & Stats
// --------------------------------------------------------------------------
function renderMetrics() {
  const totalArticles = SCIENTIFIC_CORPUS.articles.length;
  const totalRules = SCIENTIFIC_CORPUS.metadata.totalRules;
  const totalArchetypes = SCIENTIFIC_CORPUS.metadata.totalArchetypes;
  const totalEquations = SCIENTIFIC_CORPUS.equationsDirectory.length;

  document.getElementById('metric-articles').textContent = totalArticles;
  document.getElementById('metric-rules').textContent = totalRules;
  document.getElementById('metric-archetypes').textContent = totalArchetypes;
  document.getElementById('metric-equations').textContent = totalEquations;
}

// --------------------------------------------------------------------------
// 3. Navigation
// --------------------------------------------------------------------------
function renderCategoriesNav() {
  const container = document.getElementById('categories-nav-list');
  if (!container) return;

  container.innerHTML = SCIENTIFIC_CORPUS.categories.map(cat => {
    const count = SCIENTIFIC_CORPUS.articles.filter(a => a.categoryId === cat.id).length;
    return `
      <a href="#cat-${cat.id}" class="nav-link">
        <span>${cat.name}</span>
        <span class="badge">${count}</span>
      </a>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 4. Articles Grid Rendering
// --------------------------------------------------------------------------
function renderArticles(filterQuery = '') {
  const container = document.getElementById('modules-container');
  if (!container) return;

  const q = filterQuery.toLowerCase().trim();

  container.innerHTML = SCIENTIFIC_CORPUS.categories.map(cat => {
    const categoryArticles = SCIENTIFIC_CORPUS.articles.filter(art => {
      if (art.categoryId !== cat.id) return false;
      if (!q) return true;
      return (
        art.title.toLowerCase().includes(q) ||
        art.summary.toLowerCase().includes(q) ||
        art.tags.some(t => t.toLowerCase().includes(q))
      );
    });

    if (categoryArticles.length === 0) return '';

    const cardsHtml = categoryArticles.map(art => `
      <div class="article-card" data-article-id="${art.id}" onclick="openArticleModal('${art.id}')">
        <div class="card-top">
          <span class="card-badge">${cat.badge}</span>
          <span class="card-source">${art.sourceReference.split(';')[0]}</span>
        </div>
        <h3 class="card-title">${art.title}</h3>
        <p class="card-summary">${art.summary}</p>
        <div class="card-equation-box" id="eq-preview-${art.id}">
          $$${art.keyEquation}$$
        </div>
        <div class="card-tags">
          ${art.tags.map(t => `<span class="card-tag-pill">#${t}</span>`).join('')}
        </div>
      </div>
    `).join('');

    return `
      <section id="cat-${cat.id}" class="category-section">
        <div class="section-header">
          <h2 class="section-title">
            <span>${cat.name}</span>
          </h2>
          <span class="section-tag">${cat.badge} // ${categoryArticles.length} Treatises</span>
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
// 5. Archetypes Matrix
// --------------------------------------------------------------------------
function renderArchetypes() {
  const container = document.getElementById('archetypes-container');
  if (!container) return;

  container.innerHTML = SCIENTIFIC_CORPUS.archetypesDirectory.map(arch => `
    <div class="archetype-card" style="border-top: 3px solid ${arch.color}">
      <div class="archetype-header">
        <span class="archetype-icon">${arch.symbol}</span>
        <div>
          <h3 class="archetype-title" style="color: ${arch.color}">${arch.title}</h3>
          <span class="archetype-tagline">${arch.tagline}</span>
        </div>
      </div>
      <div class="palace-pill">🏛️ Palace Chamber: ${arch.palaceRoom}</div>
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
        ${arch.description}
      </p>
      <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase;">
        Core Attributes
      </div>
      <ul class="traits-list">
        ${arch.traits.map(t => `<li>${t}</li>`).join('')}
      </ul>
      <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.5rem; text-transform: uppercase;">
        Behavioral Directives
      </div>
      <div style="font-size: 0.8rem; font-style: italic; color: var(--text-primary); background: rgba(0,0,0,0.2); padding: 0.5rem 0.75rem; border-radius: 4px; border-left: 2px solid ${arch.color}">
        "${arch.rules[0]}"
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 6. Equations Codex Directory
// --------------------------------------------------------------------------
function renderEquationsDirectory() {
  const container = document.getElementById('equations-codex-container');
  if (!container) return;

  container.innerHTML = SCIENTIFIC_CORPUS.equationsDirectory.map(eq => `
    <div class="article-card" style="padding: 1.25rem;">
      <div class="card-top">
        <span class="card-badge">${eq.category}</span>
        <span class="card-source">${eq.name}</span>
      </div>
      <div class="card-equation-box" style="margin: 0.75rem 0;">
        $$${eq.latex}$$
      </div>
      <p style="font-size: 0.82rem; color: var(--text-secondary);">
        ${eq.description}
      </p>
    </div>
  `).join('');

  renderMathInElementSafely(container);
}

// --------------------------------------------------------------------------
// 7. 37 Rules Codex
// --------------------------------------------------------------------------
function renderRulesCodex() {
  const container = document.getElementById('rules-codex-list');
  if (!container) return;

  const rulesArticle = SCIENTIFIC_CORPUS.articles.find(a => a.id === 'the-thirty-seven-edicts-codex');
  if (!rulesArticle) return;

  // Extract the list of 37 rules from the article content
  const lines = rulesArticle.content.split('\n').filter(l => /^\d+\.\s+\*\*/.test(l.trim()));

  container.innerHTML = lines.map(line => {
    const match = line.trim().match(/^(\d+)\.\s+\*\*(.*?)\*\*:\s*(.*)$/);
    if (!match) return '';
    const num = match[1];
    const title = match[2];
    const desc = match[3];

    return `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; gap: 1rem; align-items: flex-start;">
        <span style="font-family: var(--font-mono); font-size: 1.1rem; font-weight: 800; color: var(--accent-cyan); min-width: 32px;">
          #${num.padStart(2, '0')}
        </span>
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem;">
            ${title}
          </h4>
          <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5;">
            ${desc}
          </p>
        </div>
      </div>
    `;
  }).join('');
}

// --------------------------------------------------------------------------
// 8. Interactive Simulators
// --------------------------------------------------------------------------
function initSimulators() {
  // Tab switching
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
      if (targetId === 'sim-phi') updatePhiSim();
    });
  });

  // Simulator 1: Bellman Habit Controls
  const gammaSlider = document.getElementById('bellman-gamma');
  const rewardSlider = document.getElementById('bellman-reward');
  const userValSlider = document.getElementById('bellman-userval');

  if (gammaSlider) gammaSlider.addEventListener('input', updateBellmanSim);
  if (rewardSlider) rewardSlider.addEventListener('input', updateBellmanSim);
  if (userValSlider) userValSlider.addEventListener('input', updateBellmanSim);

  // Simulator 2: Synthetic Consciousness Controls
  ['sim-s', 'sim-e', 'sim-a', 'sim-r', 'sim-t', 'sim-theta'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateConsciousnessSim);
  });

  // Simulator 3: Relativity Controls
  const rSlider = document.getElementById('rel-r');
  const massSlider = document.getElementById('rel-mass');
  if (rSlider) rSlider.addEventListener('input', updateRelativitySim);
  if (massSlider) massSlider.addEventListener('input', updateRelativitySim);

  // Initial runs
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

  // Steady-state value calculation: V(1) = R / (1 - gamma)
  const v1 = reward / (1.0 - gamma);
  const v0 = v1 - 2 * reward; // Inactive baseline
  const isDominant = userVal > 250;

  const resultBadge = document.getElementById('bellman-state-result');
  if (resultBadge) {
    resultBadge.innerHTML = isDominant 
      ? `<span style="color: var(--accent-emerald); font-weight: 700;">🟢 ACTIVE HABIT (DOMINANT, V > 250)</span>`
      : `<span style="color: var(--accent-rose); font-weight: 700;">🔴 INACTIVE / EXTINCT (V < 250)</span>`;
  }

  document.getElementById('bellman-v1-calc').textContent = v1.toFixed(1);
  document.getElementById('bellman-delta-calc').textContent = (v1 - v0).toFixed(1);

  // Draw Bellman Dynamics Graph
  drawBellmanCanvas(gamma, reward, userVal, v1);
}

function drawBellmanCanvas(gamma, reward, userVal, v1) {
  const canvas = document.getElementById('bellman-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth || 400;
  const h = canvas.height = 220;

  ctx.clearRect(0, 0, w, h);

  // Draw Grid Lines
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
  ctx.lineWidth = 1;
  for (let x = 40; x < w; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h - 30); ctx.stroke();
  }
  for (let y = 20; y < h - 30; y += 30) {
    ctx.beginPath(); ctx.moveTo(40, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Draw 250 Threshold Line
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

  // Draw Habit Value Curve over 20 iterations
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

  // Draw Active Operating Point
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

  // Weighted summation
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

  // Draw Waveform
  ctx.strokeStyle = burst ? '#fbbf24' : '#a78bfa';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  const freq = 4 + C * 20; // 4 Hz (Theta) to 24 Hz (Beta/Gamma)
  const amplitude = 20 + C * 50;

  for (let x = 0; x < w; x++) {
    const rad = (x / w) * Math.PI * 2 * (freq / 4);
    const noise = burst ? (Math.random() - 0.5) * 8 : 0;
    const y = h / 2 + Math.sin(rad) * amplitude + noise;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Draw 37% Bandwidth Marker
  ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
  ctx.font = '11px monospace';
  ctx.fillText(`C(t) State: ${(C * 100).toFixed(1)}% | Frequency: ${freq.toFixed(1)} Hz`, 15, 25);
}

function updateRelativitySim() {
  const rOverRs = parseFloat(document.getElementById('rel-r')?.value || 2.0);
  const mass = parseFloat(document.getElementById('rel-mass')?.value || 10.0);

  document.getElementById('val-rel-r').textContent = rOverRs.toFixed(2) + ' rs';
  document.getElementById('val-rel-mass').textContent = mass.toFixed(0) + ' M☉';

  // Schwarzschild radius: rs = 2.95 km * (M / M_sun)
  const rsKm = 2.95 * mass;
  document.getElementById('val-rs-km').textContent = rsKm.toFixed(1) + ' km';

  // Time dilation: t / t0 = 1 / sqrt(1 - 1 / (r/rs))
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

  // Draw Event Horizon (r = 1)
  const horizonX = 60;
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, horizonX, h);
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(horizonX, 0); ctx.lineTo(horizonX, h); ctx.stroke();

  ctx.fillStyle = '#ef4444';
  ctx.font = '10px monospace';
  ctx.fillText('Horizon (rs)', 5, 20);

  // Plot Dilation Curve: x = r/rs (1.05 to 5.0)
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

  // Draw Current Observer Position
  const obsX = horizonX + ((currentR - 1.0) / 4.0) * (w - horizonX - 20);
  const obsDil = Math.min(1.0 / Math.sqrt(1.0 - 1.0 / currentR), 8.0);
  const obsY = (h - 20) - (obsDil / 8.0) * (h - 40);

  ctx.fillStyle = '#fbbf24';
  ctx.beginPath();
  ctx.arc(obsX, obsY, 6, 0, Math.PI * 2);
  ctx.fill();
}

function updatePhiSim() {
  // IIT Phi simulation visualizer
  const phiVal = (Math.random() * 0.8 + 2.4).toFixed(3);
  const el = document.getElementById('phi-calc-output');
  if (el) el.textContent = `Φ = ${phiVal} bits`;
}

// --------------------------------------------------------------------------
// 9. Search & Filter
// --------------------------------------------------------------------------
function initSearch() {
  const searchInput = document.getElementById('global-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    renderArticles(e.target.value);
  });
}

// --------------------------------------------------------------------------
// 10. Web Audio Focus Soundscape Engine
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
      btn.innerHTML = `<span>⏹️ Stop Focus Waves (40Hz Gamma)</span>`;
      btn.style.background = 'rgba(239, 68, 68, 0.2)';
      btn.style.borderColor = 'var(--accent-rose)';
      btn.style.color = 'var(--accent-rose)';
    } else {
      stopSoundscape();
      btn.innerHTML = `<span>▶️ Play Focus Waves (40Hz Gamma)</span>`;
      btn.style.background = 'rgba(52, 211, 153, 0.15)';
      btn.style.borderColor = 'var(--accent-emerald)';
      btn.style.color = 'var(--accent-emerald)';
    }
  });
}

function startSoundscape() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    // 40Hz Gamma Binaural Beat (Left: 200Hz, Right: 240Hz)
    osc1 = audioCtx.createOscillator();
    osc2 = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();

    const panner1 = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;
    const panner2 = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;

    osc1.frequency.setValueAtTime(200, audioCtx.currentTime); // Base Carrier
    osc2.frequency.setValueAtTime(240, audioCtx.currentTime); // +40Hz Gamma difference

    if (panner1 && panner2) {
      panner1.pan.setValueAtTime(-1, audioCtx.currentTime);
      panner2.pan.setValueAtTime(1, audioCtx.currentTime);
      osc1.connect(panner1);
      osc2.connect(panner2);
      panner1.connect(gainNode);
      panner2.connect(gainNode);
    } else {
      osc1.connect(gainNode);
      osc2.connect(gainNode);
    }

    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime); // Soft background volume
    gainNode.connect(audioCtx.destination);

    osc1.start();
    osc2.start();
    isAudioPlaying = true;
  } catch (err) {
    console.warn("Audio context not allowed yet:", err);
  }
}

function stopSoundscape() {
  if (osc1) osc1.stop();
  if (osc2) osc2.stop();
  if (audioCtx) audioCtx.close();
  isAudioPlaying = false;
}

// --------------------------------------------------------------------------
// 11. Modal Reader
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

  titleEl.textContent = article.title;
  sourceEl.textContent = `SOURCE: ${article.sourceReference}`;

  // Simple Markdown-to-HTML parser for modal
  bodyEl.innerHTML = parseMarkdownToHtml(article.content);

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
