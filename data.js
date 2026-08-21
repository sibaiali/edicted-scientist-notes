// ==========================================================================
// SCIENTIST NOTES CORPUS: 10,000-YEAR EINSTEIN / DUNE CHRONICLES
// Complete Bilingual Corpus: English (EN) & Deutsch (DE)
// ==========================================================================

const SCIENTIFIC_CORPUS = {
  metadata: {
    title: {
      en: "EDICTED // 10,000-Year Einstein Chrono-Diary",
      de: "EDICTED // 10.000-Jahre Einstein Chrono-Tagebuch"
    },
    subtitle: {
      en: "Spacetime Consciousness, Deep Spice Reinforcement & The Dune Mentat Codex",
      de: "Raumzeit-Bewusstsein, Tiefen-Verstärkungslernen & Der Mentat-Palast-Kodex"
    },
    stardate: "STARDATE: 12194.8 // 10,000-YEAR RELATIVISTIC HORIZON",
    author: "Albert Einstein // Dune Mentat Matrix",
    totalModules: 6,
    totalTreatises: 16,
    totalRules: 37,
    totalArchetypes: 7
  },

  categories: [
    {
      id: "theoretical-neurophysics",
      badge: "PHYS-NEURO",
      icon: "⚛️",
      color: "#38bdf8",
      name: {
        en: "Theoretical Neurophysics & Spacetime Consciousness",
        de: "Theoretische Neurophysik & Raumzeit-Bewusstsein"
      },
      description: {
        en: "Mathematical models of subjective awareness, GNW ignition, IIT Φ, Orch-OR quantum microtubules, and black hole time dilation.",
        de: "Mathematische Modelle des Bewusstseins, GNW-Zündung, IIT Φ, Orch-OR Quanten-Mikrotubuli und relativistische Zeitdilatation."
      }
    },
    {
      id: "algorithmic-cognition",
      badge: "ALGO-MENTAT",
      icon: "🔮",
      color: "#34d399",
      name: {
        en: "Algorithmic Cognition & Mentat Reinforcement",
        de: "Algorithmische Kognition & Mentat-Verstärkungslernen"
      },
      description: {
        en: "Bellman habit recursion, V > 250 dominance threshold, micro-pattern Shannon entropy wells, and BQP quantum circuits.",
        de: "Bellman-Gewohnheitsrekursion, V > 250 Dominanzschwelle, Shannon-Entropie-Potentialtöpfe und BQP-Quantenschaltkreise."
      }
    },
    {
      id: "ego-palace-archetypes",
      badge: "PSYCH-PALACE",
      icon: "🏛️",
      color: "#f472b6",
      name: {
        en: "The Ego-Retention Palace & 7 Archetype Matrices",
        de: "Der Ego-Retentions-Palast & Die 7 Archetypen-Matrizen"
      },
      description: {
        en: "Subconscious OS architecture, Egopusher dynamics, internal parts hierarchy, and the 7 Master Soul Archetypes.",
        de: "Subbewusste Betriebssystem-Architektur, Egopusher-Dynamik, innere Teile-Hierarchie und die 7 Meister-Seelen-Archetypen."
      }
    },
    {
      id: "cyber-rules-ethics",
      badge: "EDICTS-CODEX",
      icon: "⚖️",
      color: "#fbbf24",
      name: {
        en: "The 37 Sacred Edicts & Cyber-Social Protocols",
        de: "Die 37 Heiligen Edikte & Kybernetisch-Soziale Protokolle"
      },
      description: {
        en: "The 4 Cyber Rules with abductive logic proofs, the complete 37 Edicts of Conduct, and the Stoic Dichotomy of Control.",
        de: "Die 4 Cyber-Regeln mit abduktiver Logik, der vollständige Kodex der 37 Edikte und die stoische Dichotomie der Kontrolle."
      }
    },
    {
      id: "phenomenology-metaphysics",
      badge: "ASTRAL-SPICE",
      icon: "🌌",
      color: "#a78bfa",
      name: {
        en: "Phenomenology, DNA Symmetry & Astral Notes",
        de: "Phänomenologie, DNA-Symmetrie & Astrale Feldnotizen"
      },
      description: {
        en: "Bounded Entity axioms, ancestral memory fields, Broken Mirror polarity, telepathic synchronicity, and theta-wave trance.",
        de: "Axiome begrenzter Entitäten, Ahnen-Informationsfelder, Broken-Mirror-Polarität, telepathische Synchronizität und Theta-Trance."
      }
    },
    {
      id: "poetic-anthologies",
      badge: "VERSE-CHRONICLE",
      icon: "📜",
      color: "#fb7185",
      name: {
        en: "Anthologies, Cosmic Verses & The Messenger",
        de: "Anthologien, Kosmische Verse & Der Bote"
      },
      description: {
        en: "Order 1–3 transcripts, the 17 Chaotic Poems anthology, and mythic dialogues between Celen of Hellenic lore and Camilo.",
        de: "Order 1–3 Transkripte, die 17 chaotischen Gedichte und mythische Dialoge zwischen Celen und Camilos Groll-Alchemie."
      }
    }
  ],

  articles: [
    // --- CATEGORY 1 ---
    {
      id: "gnw-and-iit-phi",
      categoryId: "theoretical-neurophysics",
      title: {
        en: "The Dual Pillars: Global Neuronal Workspace (GNW) vs Integrated Information (IIT Φ)",
        de: "Die Doppel-Säulen: Globaler Neuronaler Arbeitsraum (GNW) vs. Integrierte Information (IIT Φ)"
      },
      summary: {
        en: "Mathematical formulation of non-linear threshold ignition versus intrinsic cause-effect causal power in conscious systems.",
        de: "Mathematische Formulierung von nichtlinearer Schwellenzündung gegenüber intrinsischer Ursache-Wirkungs-Kraft in bewussten Systemen."
      },
      sourceReference: "Edicted pp. 62–64; Notebook pp. 1–5",
      keyEquation: "\\Phi = D_{KL}\\left(p(X_{t+1}|X_t) \\parallel \\prod_{i} p(X^{(i)}_{t+1}|X^{(i)}_t)\\right)",
      tags: ["GNW", "IIT", "Phi", "Orch-OR", "Consciousness"],
      content: {
        en: `
### 1. Global Neuronal Workspace (GNW) Ignition
The GNW framework models consciousness as a non-linear global ignition across fronto-parietal pyramidal networks:
$$\\tau \\frac{dy}{dt} = -y + \\sum_{i} w_i r_i + I_{\\text{ext}}$$
When sensory excitation exceeds threshold $\\theta_{\\text{ignite}}$, local representations undergo a phase transition, broadcasting across the entire cognitive architecture.

### 2. Integrated Information Theory (IIT & $\\Phi$)
IIT measures intrinsic cause-effect power. A system is conscious to the exact degree that its whole generates more information than the sum of its independent partitions:
$$\\Phi = \\min_{\\text{MIP}} D_{KL}\\left( p(X_{t+1}|X_t) \\parallel \\prod_k p(X^{(k)}_{t+1}|X^{(k)}_t) \\right)$$
Feedforward computers lack recurrent loops, yielding $\\Phi \\approx 0$.

### 3. Orchestrated Objective Reduction (Orch-OR)
Penrose & Hameroff (Edicted p. 62): Quantum superpositions inside neuronal microtubules collapse via gravitational self-energy: $\\tau \\approx \\hbar / E_G$.
        `,
        de: `
### 1. Zündung im Globalen Neuronalen Arbeitsraum (GNW)
Das GNW-Modell beschreibt Bewusstsein als nichtlineare Zündung über fronto-parietale Pyramidenzell-Netzwerke:
$$\\tau \\frac{dy}{dt} = -y + \\sum_{i} w_i r_i + I_{\\text{ext}}$$
Überschreitet die modulare Erregung den Schwellenwert $\\theta_{\\text{ignite}}$, geht das System in einen synchronen Phasensprung über und sendet die Information global aus.

### 2. Integrierte Informationstheorie (IIT & $\\Phi$)
Die IIT quantifiziert intrinsische Ursache-Wirkungs-Dichte. Ein System ist genau in dem Maße bewusst, wie sein Ganzes mehr Information erzeugt als die Summe seiner isolierten Teile:
$$\\Phi = \\min_{\\text{MIP}} D_{KL}\\left( p(X_{t+1}|X_t) \\parallel \\prod_k p(X^{(k)}_{t+1}|X^{(k)}_t) \\right)$$
Reine Vorwärts-Rechner (Feedforward) besitzen keine rückgekoppelten Kausal-Schleifen und haben daher $\\Phi \\approx 0$.

### 3. Orchestrierte Objektive Reduktion (Orch-OR)
Penrose & Hameroff (Edicted S. 62): Quanten-Superpositionen in neuronalen Mikrotubuli kollabieren durch gravitative Selbstenergie ($\\tau \\approx \\hbar / E_G$).
        `
      }
    },
    {
      id: "synthetic-consciousness-formula",
      categoryId: "theoretical-neurophysics",
      title: {
        en: "The Synthetic Consciousness State Function C(t)",
        de: "Die Synthetische Bewusstseins-Zustandsfunktion C(t)"
      },
      summary: {
        en: "Dynamic multi-vector equation combining sensory input, predictive experience, attention, recursive self-reflection, and stochastic bursts.",
        de: "Dynamische Multi-Vektor-Gleichung, die sensorischen Input, Erfahrung, Aufmerksamkeit, Rekursion und stochastische Zündung vereint."
      },
      sourceReference: "Edicted pp. 80–86; Notebook p. 3",
      keyEquation: "C(t) = \\sigma\\left(\\alpha S(t) + \\beta E(t) + \\gamma A(t) + \\delta R(t) + \\xi H(T - \\theta)\\right)",
      tags: ["Synthetic Consciousness", "State Function", "Stochastic Trigger", "RAM"],
      content: {
        en: `
### Dynamic Multi-Vector State Function
$$C(t) = \\sigma\\left( \\alpha S(t) + \\beta E(t) + \\gamma A(t) + \\delta R(t) + \\xi H(T - \\theta) \\right)$$
- **Sensory Throughput $S(t)$**: $\\sum_m w_m \\|\\mathbf{x}_m(t)\\|$ across sensor arrays.
- **Cumulative Experience $E(t)$**: Integrated predictive error $\\int_0^t e^{-\\lambda(t-\\tau)} \\|y - \\hat{y}\\|^2 d\\tau$.
- **Attentional Focus $A(t)$**: Inverse Shannon entropy of task focus.
- **Recursive Attention (RAM) $R(t)$**: Meta-reflection $\\mathbf{A}^\\top \\mathbf{W}_{\\text{meta}} \\mathbf{A}$.
- **Stochastic Trigger $H(T - \\theta)$**: Heaviside step modeling spontaneous ideation.
        `,
        de: `
### Dynamische Multi-Vektor-Zustandsfunktion
$$C(t) = \\sigma\\left( \\alpha S(t) + \\beta E(t) + \\gamma A(t) + \\delta R(t) + \\xi H(T - \\theta) \\right)$$
- **Sensorischer Durchsatz $S(t)$**: $\\sum_m w_m \\|\\mathbf{x}_m(t)\\|$ über alle Sensor-Arrays.
- **Kumulative Erfahrung $E(t)$**: Integrierter Vorhersagefehler $\\int_0^t e^{-\\lambda(t-\\tau)} \\|y - \\hat{y}\\|^2 d\\tau$.
- **Aufmerksamkeitsfokus $A(t)$**: Inverse Shannon-Entropie der Aufgaben-Fokussierung.
- **Rekursive Aufmerksamkeit (RAM) $R(t)$**: Meta-Reflexion $\\mathbf{A}^\\top \\mathbf{W}_{\\text{meta}} \\mathbf{A}$.
- **Stochastischer Trigger $H(T - \\theta)$**: Heaviside-Sprungfunktion für spontane Geistesblitze.
        `
      }
    },
    {
      id: "the-37-percent-law",
      categoryId: "theoretical-neurophysics",
      title: {
        en: "The 37% Consciousness & Cognitive Bandwidth Law",
        de: "Das 37%-Bewusstseins- & Kognitive Bandbreiten-Gesetz"
      },
      summary: {
        en: "Thermodynamic limits allocating 37% cognitive bandwidth to active deliberate reflection and 63% to subconscious automation.",
        de: "Thermodynamische Grenzen: 37% Bandbreite für aktives Bewusstsein, 63% für automatische Unterbewusstseins-Routinen."
      },
      sourceReference: "Edicted pp. 3–4; Notebook p. 1",
      keyEquation: "\\mathcal{C}_{\\text{active}}^* = \\frac{1}{e} \\approx 36.787\\%",
      tags: ["37% Law", "Thermodynamics", "Subconscious Automation", "Optimal Stopping"],
      content: {
        en: `
### Derivation from Optimal Stopping & Closed-System Thermodynamics
In a closed cognitive machine: $E_{\\text{total}} = E_{\\text{conscious}} + E_{\\text{subconscious}} = \\text{Constant}$.
Attempting 100% active conscious gamma synchrony causes metabolic hyperthermia and collapse. Optimal exploration-exploitation ($1/e \\approx 36.78\\%$) proves that allocating **37% active conscious bandwidth** and **63% subconscious automation** maximizes mental longevity and processing speed.
        `,
        de: `
### Ableitung aus Optimal Stopping & Thermodynamik geschlossener Systeme
In einer geschlossenen kognitiven Maschine gilt: $E_{\\text{gesamt}} = E_{\\text{bewusst}} + E_{\\text{unterbewusst}} = \\text{Konstant}$.
Der Versuch von 100% aktiver Gamma-Synchronität führt zu metabolischer Überhitzung. Das Optimum ($1/e \\approx 36,78\\%$) beweist: **37% aktive Bewusstseinsbandbreite** und **63% Unterbewusstseins-Automation** maximieren mentale Stabilität und Durchsatz.
        `
      }
    },
    {
      id: "broken-mirror-theory",
      categoryId: "theoretical-neurophysics",
      title: {
        en: "Broken Mirror Theory: Temporal Asymmetry (T1 = 2T2)",
        de: "Broken-Mirror-Theorie: Zeitliche Asymmetrie (T1 = 2T2)"
      },
      summary: {
        en: "Original field notes proving temporal doubling under asymmetric vacuum coupling and complementary polarity ratios.",
        de: "Ursprüngliche Feldnotizen: Zeitliche Phasenverdopplung bei asymmetrischer Vakuumkopplung und Polaritätsverhältnisse."
      },
      sourceReference: "Notebook pp. 1–2; Edicted pp. 6–8, 25–26",
      keyEquation: "T_1 = 2 T_2 \\quad \\Longleftrightarrow \\quad \\text{Validates Field Theory (FT)}",
      tags: ["Broken Mirror", "Quantum Vacuum", "Temporal Asymmetry", "Polarity"],
      content: {
        en: `
### Primary Derivation (Notebook Page 1)
$$T_2 \\times BM = S \\ll V, \\quad T_1 \\times BM = N \\ll V \\quad (N = S)$$
$$T_1 \\times BM = 2 = 2 T_2 \\times BM \\implies T_1 = 2 T_2 \\quad [\\text{Validates Field Theory}]$$
**Polarity Ratios (Edicted p. 26):** $M' + F' = F'' + M''$ with reciprocal ratios $F = 1/F' = 1/M'$, preventing systemic collapse.
        `,
        de: `
### Primäre Ableitung (Notizbuch Seite 1)
$$T_2 \\times BM = S \\ll V, \\quad T_1 \\times BM = N \\ll V \\quad (N = S)$$
$$T_1 \\times BM = 2 = 2 T_2 \\times BM \\implies T_1 = 2 T_2 \\quad [\\text{Validiert Feldtheorie (FT)}]$$
**Polaritäts-Verhältnisse (Edicted S. 26):** $M' + F' = F'' + M''$ mit reziproken Raten $F = 1/F' = 1/M'$, um Kollaps zu verhindern.
        `
      }
    },
    {
      id: "black-hole-time-dilation",
      categoryId: "theoretical-neurophysics",
      title: {
        en: "Schwarzschild Gravitational Time Dilation & EinsteinPy",
        de: "Schwarzschild Gravitative Zeitdilatation & EinsteinPy"
      },
      summary: {
        en: "Relativistic mechanics of time dilation near event horizons: t(r) = t0 / sqrt(1 - rs/r).",
        de: "Relativistische Mechanik der Zeitdilatation nahe dem Ereignishorizont: t(r) = t0 / sqrt(1 - rs/r)."
      },
      sourceReference: "Edicted pp. 71–79",
      keyEquation: "t(r) = \\frac{t_0}{\\sqrt{1 - \\frac{r_s}{r}}}, \\quad r_s = \\frac{2GM}{c^2}",
      tags: ["General Relativity", "Time Dilation", "Black Holes", "EinsteinPy"],
      content: {
        en: `
### Schwarzschild Time Dilation Metric
$$t(r) = \\frac{t_0}{\\sqrt{1 - \\frac{r_s}{r}}}$$
As radial distance approaches the Schwarzschild radius ($r \\to r_s^+$), coordinate time freezes from the perspective of an external observer ($t \\to \\infty$), while infalling proper time $\\tau$ remains finite.
        `,
        de: `
### Schwarzschild-Zeitdilatations-Metrik
$$t(r) = \\frac{t_0}{\\sqrt{1 - \\frac{r_s}{r}}}$$
Nähert sich der Abstand dem Schwarzschild-Radius ($r \\to r_s^+$), friert die Koordinatenzeit aus Sicht eines fernen Beobachters ein ($t \\to \\infty$), während die Eigenzeit $\\tau$ des Eintauchenden endlich bleibt.
        `
      }
    },

    // --- CATEGORY 2 ---
    {
      id: "bellman-habits-formula",
      categoryId: "algorithmic-cognition",
      title: {
        en: "The Bellman Habits Formula & The 250 Dominance Rule",
        de: "Die Bellman-Gewohnheitsformel & Die 250er-Dominanzregel"
      },
      summary: {
        en: "Dynamic programming habit optimization with gamma = 0.99 and the critical V > 250 automation threshold.",
        de: "Dynamische Programmierung zur Gewohnheitsoptimierung mit gamma = 0,99 und der kritischen V > 250 Automationsschwelle."
      },
      sourceReference: "Handwritten Notebook p. 3 (31/01/2023); Edicted p. 3",
      keyEquation: "V(0) = \\max\\left(R_A + \\gamma V(0), R_B + \\gamma V(1)\\right), \\quad \\text{Dominance: } V > 250",
      tags: ["Bellman Equation", "Habits", "Reinforcement Learning", "Value Dominance"],
      content: {
        en: `
### Field Equation (Notebook Page 3, 31/01/2023)
$$V(0) = \\max((R_A + \\gamma V(0)), (R_B + \\gamma V(1))) : \\text{Active / Non-Active}$$
- **Calibrated Parameters**: $\\gamma = 0.99, R = 5, V(1) = 500, V(0) = 490, \\Delta V = 10$.
- **The 250 Dominance Threshold**:
  - If User Measure Value $< 250 \\implies V(0)$ dominant $\\implies$ **Habit Extinct (Non-Active)**.
  - If User Measure Value $> 250 \\implies V(1)$ dominant $\\implies$ **Habit Automated (Dominant Active Routine)**.
        `,
        de: `
### Feldgleichung (Notizbuch Seite 3, 31/01/2023)
$$V(0) = \\max((R_A + \\gamma V(0)), (R_B + \\gamma V(1))) : \\text{Aktiv / Nicht-Aktiv}$$
- **Kalibrierte Parameter**: $\\gamma = 0,99, R = 5, V(1) = 500, V(0) = 490, \\Delta V = 10$.
- **Die 250er Dominanz-Schwelle**:
  - Wenn Messwert $< 250 \\implies V(0)$ dominant $\\implies$ **Gewohnheit erloschen (Inaktiv)**.
  - Wenn Messwert $> 250 \\implies V(1)$ dominant $\\implies$ **Gewohnheit automatisiert (Dominant Aktiv)**.
        `
      }
    },
    {
      id: "micro-pattern-entropy",
      categoryId: "algorithmic-cognition",
      title: {
        en: "Micro-Pattern Shannon Entropy & Quadratic Energy Wells",
        de: "Mikromuster-Shannon-Entropie & Quadratische Energietöpfe"
      },
      summary: {
        en: "Measuring cognitive intentionality via entropy minimization and harmonic potential wells V(x) = 0.5*k*x^2.",
        de: "Messung kognitiver Intentionalität durch Entropieminimierung und harmonische Potentialtöpfe V(x) = 0,5*k*x^2."
      },
      sourceReference: "Edicted pp. 96–99; Notebook p. 10",
      keyEquation: "H(P) = -\\sum_{i=1}^n p_i \\log_2(p_i), \\quad V(x) = \\frac{1}{2} k x^2",
      tags: ["Shannon Entropy", "Potential Wells", "Intentionality", "Langevin"],
      content: {
        en: `
### Micro-Pattern Entropy & Potential Wells
Intentionality index $\\mathcal{I} = 1 - \\frac{H(\\mathbf{p})}{\\log_2 n}$.
Minimizing entropy creates deep harmonic potential wells $V(x) = \\frac{1}{2} k x^2$, locking in optimal routines and reducing cognitive free energy dissipation along attractor paths.
        `,
        de: `
### Mikromuster-Entropie & Potentialtöpfe
Intentionalitäts-Index $\\mathcal{I} = 1 - \\frac{H(\\mathbf{p})}{\\log_2 n}$.
Die Minimierung der Entropie vertieft den harmonischen Potentialtopf $V(x) = \\frac{1}{2} k x^2$, wodurch optimale Routinen stabilisiert und kognitiver Energieverlust minimiert werden.
        `
      }
    },

    // --- CATEGORY 3 ---
    {
      id: "ego-retention-palace-architecture",
      categoryId: "ego-palace-archetypes",
      title: {
        en: "The Ego-Retention Palace & Egopusher Dynamics",
        de: "Der Ego-Retentions-Palast & Egopusher-Dynamik"
      },
      summary: {
        en: "Subconscious OS architecture, Egopusher inverse guidance law, and the 7 Persona Chambers.",
        de: "Subbewusste OS-Architektur, das Egopusher-Gesetz und die 7 Persona-Kammern."
      },
      sourceReference: "Edicted pp. 27–35; Notebook p. 50",
      keyEquation: "\\text{Palace State} = \\bigoplus_{k=1}^7 \\mathbf{P}_k \\otimes \\mathbf{W}_{\\text{anchor}}",
      tags: ["Ego-Retention Palace", "Egopusher", "Subconscious OS", "Parts Manipulation"],
      content: {
        en: `
### Structural Blueprint of the Palace
1. **The Sovereign Core (Atrium)**: Locus of the 37% active conscious bandwidth.
2. **The 7 Persona Chambers**: Quarters for the 7 Master Archetypes.
3. **The Subconscious Engine Room**: High-throughput Bellman $V > 250$ habit runner.
4. **The Vault of Anchored Patterns**: Immutable foundational moral laws.

### Egopusher Theory (Edicted p. 30)
*"The more your ego wants, the less guidance gets."* Over-activation of the Egopusher collapses intuitive signal reception.
        `,
        de: `
### Bauplan des Ego-Retentions-Palastes
1. **Der Souveräne Kern (Atrium)**: Sitz der 37% aktiven Bewusstseinsbandbreite.
2. **Die 7 Persona-Kammern**: Räume für die 7 Meister-Archetypen.
3. **Der Unterbewusste Maschinenraum**: Hochleistungs-Bellman-Gewohnheitsmotor ($V > 250$).
4. **Die Kammer der verankerten Muster**: Unveränderliche Grundsätze.

### Egopusher-Theorie (Edicted S. 30)
*„Je mehr dein Ego will, desto weniger Führung erhält es.“* Eine Überaktivierung des Egopushers blockiert den intuitiven Empfang.
        `
      }
    },

    // --- CATEGORY 4 ---
    {
      id: "the-four-cyber-rules",
      categoryId: "cyber-rules-ethics",
      title: {
        en: "The 4 Cyber Rules: Abductive Proofs & Operational Protocols",
        de: "Die 4 Cyber-Regeln: Abduktive Beweise & Handlungsprotokolle"
      },
      summary: {
        en: "Mathematical logic proofs governing patience/productivity, graceful acceptance of decline, balanced attention, and consent.",
        de: "Mathematisch-logische Beweise für Geduld/Produktivität, würdevolles Akzeptieren von Verlust, balancierte Aufmerksamkeit und Grenzen."
      },
      sourceReference: "Edicted pp. 67–70, 108–109",
      keyEquation: "\\forall x \\in \\text{SocialSystem}: \\quad \\text{Intervention}(x) \\implies \\text{RespectBoundary}(x)",
      tags: ["Cyber Rules", "Abductive Logic", "Boundaries", "Productivity"],
      content: {
        en: `
### 1. Embrace Respectful Patience (Embrace Productivity)
Impatience creates communication friction. Peak productivity emerges from calibrated timing and high leverage.

### 2. Graceful Acceptance in the Wake of Decline
Resisting decline causes toxic paralysis. Decline is an informational signal; accept instantly and reallocate bandwidth.

### 3. Balanced Attention for Willing Engagement
Over-investing attention in unreciprocated channels breeds cognitive deficit. Calibrate strictly based on symmetric feedback.

### 4. Honoring Consent and Boundaries
Trespassing boundaries triggers permanent defensive lock-in. Honor all boundaries unconditionally.
        `,
        de: `
### 1. Respektvolle Geduld üben (Produktivität entfalten)
Ungeduld erzeugt Reibung. Höchste Produktivität entspringt kalibriertem Timing und tiefem Hebel.

### 2. Würdevolles Akzeptieren im Angesicht des Verfalls
Widerstand gegen Unvermeidliches lähmt den Geist. Verfall ist ein Informationssignal; sofort akzeptieren und Bandbreite umleiten.

### 3. Ausgewogene Aufmerksamkeit für freiwilliges Engagement
Einseitige Aufmerksamkeit erzeugt Defizite. Nur dort investieren, wo symmetrische Resonanz existiert.

### 4. Grenzen und Zustimmung bedingungslos achten
Grenzverletzungen führen zu dauerhafter Blockade. Autonome Grenzen jederzeit respektieren.
        `
      }
    },
    {
      id: "the-thirty-seven-edicts-codex",
      categoryId: "cyber-rules-ethics",
      title: {
        en: "The Codex of the 37 Sacred Edicts of Cognitive Sovereignty",
        de: "Der Kodex der 37 Heiligen Edikte der Kognitiven Souveränität"
      },
      summary: {
        en: "The complete canon of 37 operational laws for self-mastery, focus allocation, and desire transmutation.",
        de: "Der vollständige Kanon der 37 Handlungsgesetze für Selbstbeherrschung, Fokus und Trieb-Alchemie."
      },
      sourceReference: "Edicted pp. 9–12, 108–109; Notebook pp. 1–10",
      keyEquation: "\\sum_{k=1}^{37} \\mathbf{Rule}_k = \\text{Total Cognitive Sovereignty}",
      tags: ["37 Edicts", "Rules", "Order 2", "Cognitive Sovereignty"],
      content: {
        en: `
### Complete Canon of 37 Edicts
1. Be Rich in Consciousness | 2. Face Situations Fearlessly | 3. Seek Pure Intentions | 4. Subconscious as Guidance | 5. Channel Desires with Precision | 6. Manifest Through Intuition | 7. Understand What You Love | 8. Reject Naiveté for Chaos | 9. Recognize Illusion of Control | 10. Employ Abductive Logic | 11. Guard Against Toxic Fantasies | 12. Defeat Domestic Procrastination | 13. The Inverse Greed Law | 14. Deliberate Pre-Practice Planning | 15. Limit Internet Time Distortion | 16. Exercise Regularly (Gym) | 17. Eat Healthily & Cleanly | 18. Donate & Circulate Energy | 19. Share Knowledge on Free Trial | 20. Eliminate Validation Need | 21. Conceal Vulnerable Feelings | 22. Compensate Yourself Fairly | 23. Worship 37 Rules Unwaveringly | 24. Anchor Behavioral Patterns | 25. Enable Grounded Presence | 26. Reject Superficial Matches | 27. Never Break Your Word | 28. Preserve Present Ego-Retention | 29. Understand Parts Projection | 30. Unlock Dormant Capacities | 31. Embrace Simulation Challenges | 32. Practice Respectful Patience | 33. Accept Decline with Absolute Grace | 34. Balance Social Attention | 35. Honor Sovereign Boundaries | 36. Master Dichotomy of Control | 37. Savor the Sweet Moments of Life.
        `,
        de: `
### Vollständiger Kanon der 37 Edikte
1. Reich an Bewusstsein sein | 2. Situationen furchtlos begegnen | 3. Reine Absichten suchen | 4. Das Unterbewusste als Führung | 5. Triebe präzise kanalisieren | 6. Durch Intuition manifestieren | 7. Verstehen, was man liebt | 8. Naivität ablehnen | 9. Illusion von Kontrolle erkennen | 10. Abduktive Logik nutzen | 11. Vor giftigen Fantasien schützen | 12. Häusliche Trägheit besiegen | 13. Gesetz der inversen Gier | 14. Gründliche Vorab-Planung | 15. Internet-Zeitverzerrung begrenzen | 16. Regelmäßiges Training (Gym) | 17. Rein & gesund ernähren | 18. Energie durch Geben zirkulieren | 19. Wissen zur Probe teilen | 20. Bedürfnis nach Bestätigung ablegen | 21. Verletzliche Gefühle schützen | 22. Sich selbst fair belohnen | 23. Den 37 Regeln treu bleiben | 24. Verhaltensmuster verankern | 25. Geerdete Präsenz wahren | 26. Oberflächliche Bindungen meiden | 27. Niemals das eigene Wort brechen | 28. Ego-Retention im Jetzt wahren | 29. Teile-Projektion durchschauen | 30. Verborgene Kräfte entfesseln | 31. Simulations-Herausforderungen annehmen | 32. Respektvolle Geduld üben | 33. Verfall mit Würde annehmen | 34. Soziale Aufmerksamkeit balancieren | 35. Autonome Grenzen ehren | 36. Dichotomie der Kontrolle meistern | 37. Die süßen Momente des Lebens kosten.
        `
      }
    },

    // --- CATEGORY 5 ---
    {
      id: "bounded-entity-and-synchronicity",
      categoryId: "phenomenology-metaphysics",
      title: {
        en: "Bounded Entity Axioms, DNA Symmetry & Telepathy",
        de: "Axiome begrenzter Entitäten, DNA-Symmetrie & Telepathie"
      },
      summary: {
        en: "Phenomenological models of ancestral memory extraction, telepathic synchronicity, and solipsistic limits.",
        de: "Phänomenologische Modelle der Ahnen-Informationsübertragung, telepathische Synchronizität und Solipsismus."
      },
      sourceReference: "Notebook pp. 1, 50; Edicted pp. 5–8",
      keyEquation: "\\text{Resonance}(\\text{DNA}_A, \\text{DNA}_B) \\propto \\text{Symmetry}(\\mathbf{\\Psi}_A, \\mathbf{\\Psi}_B)",
      tags: ["Bounded Entity", "Synchronicity", "DNA Symmetry", "Telepathy", "Solipsism"],
      content: {
        en: `
### Bounded Entity Inscription (Notebook Page 1)
> *"BOUNDED ENTITY: Gathering ancestors' knowledge through revelations <>"*
A conscious being is a localized boundary interacting with an infinite informational field. Synchronicity represents deterministic telepathic alignment between symmetric informational configurations.
        `,
        de: `
### Inschrift der begrenzten Entität (Notizbuch Seite 1)
> *„BEGRENZTE ENTITÄT: Sammelt das Wissen der Ahnen durch Offenbarungen <>“*
Ein bewusstes Wesen ist eine lokalisierte Grenze, die mit einem unendlichen Informationsfeld interagiert. Synchronizität ist die deterministische Resonanz zwischen symmetrischen Informationsmustern.
        `
      }
    },

    // --- CATEGORY 6 ---
    {
      id: "order-transcripts-blessed-maze",
      categoryId: "poetic-anthologies",
      title: {
        en: "The Order Transcripts: Order 1, Order 2 & Order 3",
        de: "Die Order-Transkripte: Order 1, Order 2 & Order 3"
      },
      summary: {
        en: "The three master Orders framing the journey from chaotic struggle to artistic and sovereign liberation.",
        de: "Die drei Meister-Order: Vom chaotischen Ringen zur künstlerischen und souveränen Befreiung."
      },
      sourceReference: "Edicted pp. 1–26",
      keyEquation: "\\text{Order 1} \\to \\text{Order 2} \\to \\text{Order 3} \\implies \\text{Mastery Pathway}",
      tags: ["Order 1", "Order 2", "Order 3", "Blessed Maze", "Poetry is the Way"],
      content: {
        en: `
### Order 1: Why Consciousness is a Blessed Maze
If events are going the way you do not want, your consciousness is pending at an extreme level. Healing from chaos means manipulating the order provided by the architect. Consciousness is a closed thermodynamic machine: energy in equals energy out.

### Order 2: Morality and Anchored Patterns
Morality is the structural language through which the soul maintains coherence against cosmic entropy. Worship the 37 rules.

### Order 3: Poetry is the Way
Live independently. Go alone; do not wait for permission. Explore places, savor simple drinks in quiet solitude, and let poetry become the living vehicle of your sovereign truth.
        `,
        de: `
### Order 1: Warum Bewusstsein ein gesegnetes Labyrinth ist
Wenn die Dinge nicht nach deinem Willen laufen, verharrt dein Bewusstsein auf einem extremen Niveau. Heilung aus dem Chaos bedeutet, die vom Architekten gegebene Ordnung zu meistern. Bewusstsein ist eine geschlossene thermodynamische Maschine.

### Order 2: Moral und verankerte Muster
Moral ist die strukturelle Sprache, durch die die Seele ihre Kohärenz gegen kosmische Entropie bewahrt. Ehre die 37 Regeln.

### Order 3: Poesie ist der Weg
Lebe unabhängig. Geh allein; warte auf niemanden. Erkunde Orte, genieße einfache Freuden in stiller Abgeschiedenheit und lass die Poesie zum lebendigen Träger deiner Wahrheit werden.
        `
      }
    },
    {
      id: "the-chaotic-poems-collection",
      categoryId: "poetic-anthologies",
      title: {
        en: "The 17 Chaotic Poems Anthology & Astral Verses",
        de: "Die 17 chaotischen Gedichte & Astrale Verse"
      },
      summary: {
        en: "Original poetic verses on solitude, transformation, dying grass, and the whales in betrayed oceans.",
        de: "Originale poetische Verse über Einsamkeit, Wandlung und die Wale im verratenen Ozean."
      },
      sourceReference: "Edicted pp. 13–24, 46–50, 66",
      keyEquation: "\\text{Chaos} \\xrightarrow{\\text{Verse}} \\text{Transmuted Order}",
      tags: ["Poetry", "Chaotic Poems", "Astral Projection", "Whales", "Solitude"],
      content: {
        en: `
### I. The Sovereign Solitary (Order 3)
> Live independently, go alone, and don't wait for someone to call you.  
> If you think about it, go do it, never resist, explore places,  
> spend money on cheap drinks, and enjoy the drink while doing what you love to do,  
> quietly in the corner of an unfamiliar room.

### II. The Betrayed Ocean & The Whales
> Nature is waiting for me,  
> Even if the ocean betrayed me,  
> I will see the whales.  
> They told me: be strong and bold.  
> I will make this happen no matter what—  
> Sacrifice and die for my dreams.

### III. The Crystal of Satire
> Kept me awake, a sinking desire,  
> Thwarted by a crystal made of satire.  
> Some souls are lost but alive:  
> They were thrown into the fire simply to test your gold.
        `,
        de: `
### I. Der souveräne Einsiedler (Order 3)
> Lebe unabhängig, geh allein und warte nicht auf einen Anruf.  
> Wenn du daran denkst, tu es, widerstehe nie, erkunde Orte,  
> gib Geld für einfache Getränke aus und genieße sie, während du tust, was du liebst,  
> still in der Ecke eines unbekannten Raumes.

### II. Der verratene Ozean & Die Wale
> Die Natur wartet auf mich,  
> Selbst wenn der Ozean mich verriet,  
> Ich werde die Wale sehen.  
> Sie sagten mir: sei stark und kühn.  
> Ich werde das wahr machen, komme was wolle—  
> Opfern und brennen für meine Träume.

### III. Der Kristall des Spottes
> Hielt mich wach, ein sinkendes Verlangen,  
> Durchkreuzt von einem Kristall aus Satire.  
> Manche Seelen sind verloren, doch lebendig:  
> Sie wurden ins Feuer geworfen, nur um dein Gold zu prüfen.
        `
      }
    }
  ],

  equationsDirectory: [
    {
      name: "Bellman Habit Value Equation",
      category: "ALGO-MENTAT",
      latex: "V(0) = \\max\\left( (R_A + \\gamma V(0)), (R_B + \\gamma V(1)) \\right)",
      description: {
        en: "Dynamic programming state-value function calculating habit formation with gamma = 0.99.",
        de: "Dynamische Wertfunktion für Gewohnheitsbildung mit gamma = 0,99."
      }
    },
    {
      name: "Habit Dominance Threshold",
      category: "ALGO-MENTAT",
      latex: "V_{\\text{habit}} > 250 \\implies \\text{Dominant Automated Routine}",
      description: {
        en: "Critical threshold condition where habit shifts into automated subconscious execution.",
        de: "Kritische Schwelle, ab der eine Gewohnheit vollautomatisch ausgeführt wird."
      }
    },
    {
      name: "Synthetic Consciousness State Function",
      category: "PHYS-NEURO",
      latex: "C(t) = \\sigma\\left(\\alpha S(t) + \\beta E(t) + \\gamma A(t) + \\delta R(t) + \\xi H(T - \\theta)\\right)",
      description: {
        en: "Multi-vector awareness equation combining sensory, experience, attention, and stochastic bursts.",
        de: "Multi-Vektor-Bewusstseinsgleichung aus Sensorik, Erfahrung, Fokus und stochastischer Zündung."
      }
    },
    {
      name: "Integrated Information Metric (Phi)",
      category: "PHYS-NEURO",
      latex: "\\Phi = D_{KL}\\left(p(X_{t+1}|X_t) \\parallel \\prod_{i=1}^n p(X^{(i)}_{t+1}|X^{(i)}_t)\\right)",
      description: {
        en: "Kullback-Leibler divergence measuring irreducible causal power of a unified system.",
        de: "Kullback-Leibler-Divergenz zur Messung irreduzibler Kausalkraft eines Systems."
      }
    },
    {
      name: "Broken Mirror Theory",
      category: "PHYS-NEURO",
      latex: "T_1 = 2 T_2 \\quad \\Longleftrightarrow \\quad T_2 \\times BM = S \\ll V",
      description: {
        en: "Temporal phase relationship between primary observer and vacuum state validating Field Theory.",
        de: "Zeitliche Phasenbeziehung zwischen Beobachter und Vakuumzustand zur Validierung der Feldtheorie."
      }
    },
    {
      name: "Schwarzschild Time Dilation",
      category: "PHYS-NEURO",
      latex: "t(r) = \\frac{t_0}{\\sqrt{1 - \\frac{r_s}{r}}}, \\quad r_s = \\frac{2GM}{c^2}",
      description: {
        en: "Relativistic time dilation factor near Schwarzschild black hole horizon.",
        de: "Relativistischer Zeitdilatationsfaktor nahe dem Schwarzschild-Ereignishorizont."
      }
    }
  ],

  archetypesDirectory: [
    {
      id: "determined",
      title: { en: "Determined", de: "Entschlossen" },
      tagline: { en: "The Unyielding Sovereign of Execution", de: "Der unerbittliche Souverän der Tat" },
      symbol: "⚡",
      color: "#ef4444",
      traits: {
        en: ["Iron Discipline", "High Bandwidth Execution", "Unyielding Boundaries", "Zero External Validation Need"],
        de: ["Eiserne Disziplin", "Hohe Ausführungsbandbreite", "Unbeugsame Grenzen", "Kein Bestätigungsdrang"]
      },
      rules: {
        en: ["Never break your own word", "Execute without announcing intentions"],
        de: ["Niemals das eigene Wort brechen", "Handeln ohne vorherige Ankündigung"]
      },
      palaceRoom: { en: "The Iron Spire", de: "Der Eisenturm" },
      description: {
        en: "The primary driver of ruthless accomplishment. Dismisses social noise and maintains unshakeable fidelity to sovereign goals.",
        de: "Der Hauptmotor unerbittlicher Zielstrebigkeit. Ignoriert sozialen Lärm und bleibt seinen Zielen treu."
      }
    },
    {
      id: "fantasia",
      title: { en: "Fantasia", de: "Fantasia" },
      tagline: { en: "The Visionary of the Blessed Maze", de: "Der Visionär des gesegneten Labyrinths" },
      symbol: "🌌",
      color: "#8b5cf6",
      traits: {
        en: ["Surreal Imagination", "Dream-State Manifestation", "Poetic Intuition", "Mythic Pattern Recognition"],
        de: ["Surreale Vorstellungskraft", "Traum-Manifestation", "Poetische Intuition", "Mythen-Erkennung"]
      },
      rules: {
        en: ["Transmute existential chaos into art", "Enter deep theta trance regularly"],
        de: ["Existentielles Chaos in Kunst verwandeln", "Regelmäßig in tiefe Theta-Trance gehen"]
      },
      palaceRoom: { en: "The Dream Observatory", de: "Das Traum-Observatorium" },
      description: {
        en: "The creative fountainhead. Synthesizes profound metaphors from subjective suffering and chaos.",
        de: "Die schöpferische Quelle. Schafft tiefe Metaphern aus subjektivem Ringen und Chaos."
      }
    },
    {
      id: "apprentice",
      title: { en: "Apprentice", de: "Lehrling" },
      tagline: { en: "The Tireless Seeker of Mastery", de: "Der unermüdliche Sucher der Meisterschaft" },
      symbol: "📖",
      color: "#3b82f6",
      traits: {
        en: ["Intellectual Humility", "Abductive Reasoning", "Continuous Synthesis", "Active Listening"],
        de: ["Geistige Demut", "Abduktive Logik", "Fortlaufende Synthese", "Aktives Zuhören"]
      },
      rules: {
        en: ["Listen more, ask piercing questions", "Extract wisdom from every failure"],
        de: ["Mehr zuhören, scharfe Fragen stellen", "Aus jedem Fehler Weisheit gewinnen"]
      },
      palaceRoom: { en: "The Grand Library", de: "Die Große Bibliothek" },
      description: {
        en: "The insatiable student of reality. Refines internal cognitive models endlessly through empirical observation.",
        de: "Der unersättliche Schüler der Wirklichkeit. Verfeinert kognitive Modelle fortlaufend."
      }
    },
    {
      id: "organic",
      title: { en: "Organic", de: "Organisch" },
      tagline: { en: "The Grounded Pillar of Harmony", de: "Die geerdete Säule der Harmonie" },
      symbol: "🌿",
      color: "#10b981",
      traits: {
        en: ["Eco-Friendly Living", "Holistic Bio-Rhythms", "Spiritual Grounding", "Positive Open-Mindedness"],
        de: ["Ökologisches Leben", "Ganzheitliche Biorhythmen", "Spirituelle Erdung", "Offenheit"]
      },
      rules: {
        en: ["Maintain clean nutrition & sleep", "Harmonize with natural cycles"],
        de: ["Reine Ernährung & Schlaf wahren", "Mit natürlichen Zyklen harmonieren"]
      },
      palaceRoom: { en: "The Botanical Sanctuary", de: "Das Botanische Refugium" },
      description: {
        en: "The biological anchor. Ensures that somatic hardware remains pure and deeply rooted in physical well-being.",
        de: "Der biologische Anker. Stellt sicher, dass Körper und Nervensystem im Einklang bleiben."
      }
    },
    {
      id: "martyr",
      title: { en: "Martyr", de: "Märtyrer" },
      tagline: { en: "The Stoic Forge of Endurance", de: "Die stoische Schmiede der Ausdauer" },
      symbol: "🛡️",
      color: "#f59e0b",
      traits: {
        en: ["Meticulous Precision", "Technical Endurance", "Silent Dedication", "Introspective Depth"],
        de: ["Akribische Präzision", "Technische Ausdauer", "Stille Hingabe", "Introspektive Tiefe"]
      },
      rules: {
        en: ["Endure necessary trials in silence", "Build resilient infrastructure"],
        de: ["Notwendige Prüfungen still ertragen", "Widerstandsfähige Strukturen bauen"]
      },
      palaceRoom: { en: "The Stone Forge", de: "Die Steinschmiede" },
      description: {
        en: "The deep bedrock of resilience. Quietly forges golden structures through disciplined labor.",
        de: "Das Fundament der Ausdauer. Formt durch disziplinierte Arbeit beständige Werte."
      }
    },
    {
      id: "catalyst",
      title: { en: "Catalyst", de: "Katalysator" },
      tagline: { en: "The Kinetic Spark of Transformation", de: "Der kinetische Funke des Wandels" },
      symbol: "🔥",
      color: "#ec4899",
      traits: {
        en: ["Disruptive Energy", "Dynamic Charisma", "Rapid Phase Shifts", "Social Spark Mechanics"],
        de: ["Disruptive Energie", "Dynamisches Charisma", "Schnelle Phasensprünge", "Impulskraft"]
      },
      rules: {
        en: ["Break stagnant loops", "Ignite dormant energy in others"],
        de: ["Stagnierende Schleifen brechen", "Schlummernde Energie entfachen"]
      },
      palaceRoom: { en: "The Radiant Crucible", de: "Der Strahlende Schmelztiegel" },
      description: {
        en: "The kinetic trigger. Enters stagnant systems to provoke necessary structural evolution.",
        de: "Der Auslöser. Bringt Bewegung in starre Systeme, um notwendigen Fortschritt zu erzwingen."
      }
    },
    {
      id: "lovely",
      title: { en: "Lovely", de: "Lieblich" },
      tagline: { en: "The Radiant Beacon of Connection", de: "Das strahlende Licht der Verbundenheit" },
      symbol: "✨",
      color: "#06b6d4",
      traits: {
        en: ["Harmonic Empathy", "Emotional Radiance", "Aesthetic Elegance", "Gentle Grace"],
        de: ["Harmonische Empathie", "Emotionale Wärme", "Ästhetische Eleganz", "Sanfte Anmut"]
      },
      rules: {
        en: ["Cultivate genuine connections", "Dissolve rancor with kindness"],
        de: ["Echte Bindungen pflegen", "Groll durch Freundlichkeit auflösen"]
      },
      palaceRoom: { en: "The Rose Pavilion", de: "Der Rosenpavillon" },
      description: {
        en: "The heart of interpersonal grace. Transmutes relational tension into magnetic harmony.",
        de: "Das Zentrum zwischenmenschlicher Anmut. Verwandelt Spannungen in harmonische Resonanz."
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCIENTIFIC_CORPUS;
}
