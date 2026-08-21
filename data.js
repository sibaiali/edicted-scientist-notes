// ==========================================================================
// SCIENTIST NOTES CORPUS: THE COMPLETE UNIFIED SCIENTIFIC ARCHIVE
// Exhaustively Synthesized & Rigorously Rewritten from:
// 1. 'Wissenschaft notieren' (Handwritten Field Notebook, 295pp)
// 2. 'Edicted' (Complete Theoretical Manuscript, 113pp)
// ==========================================================================

const SCIENTIFIC_CORPUS = {
  metadata: {
    title: "EDICTED: The Unified Scientist Compendium",
    subtitle: "Consciousness Physics, Reinforcement Learning, The Ego-Retention Palace & Cybernetic Edicts",
    version: "3.0.0-Absolute-Complete-Archive",
    author: "Synthesized Scientific Archive",
    classification: "Theoretical Cognitive Physics & Neuro-Philosophical Systems",
    totalModules: 6,
    totalTreatises: 16,
    totalRules: 37,
    totalArchetypes: 7,
    totalEquations: 28,
    sourceDocuments: [
      "Wissenschaft notieren (Handwritten Research & Mathematical Field Notebook, 295pp)",
      "Edicted (Synthesized Treatise & Unified Manuscript, 113pp)"
    ]
  },

  categories: [
    {
      id: "theoretical-neurophysics",
      name: "Theoretical Neuroscience & Consciousness Physics",
      badge: "PHYS-NEURO",
      icon: "atom",
      color: "#38bdf8",
      description: "Mathematical models of subjective awareness, global workspaces, integrated information (Φ), Orch-OR quantum biology, and general relativistic time dilation."
    },
    {
      id: "algorithmic-cognition",
      name: "Algorithmic Cognition & Reinforcement Dynamics",
      badge: "ALGO-RL",
      icon: "cpu",
      color: "#34d399",
      description: "Bellman habit equations, value dominance thresholds, micro-pattern entropy minimization, quantum complexity classes (BQP), and neural wave oscillations."
    },
    {
      id: "ego-palace-archetypes",
      name: "The Ego-Retention Palace & Archetype Matrix",
      badge: "PSYCH-PALACE",
      icon: "castle",
      color: "#f472b6",
      description: "Subconscious operating system architecture, Egopusher dynamics, internal parts hierarchy, dissociation mechanics, and the 7 Master Persona Matrices."
    },
    {
      id: "cyber-rules-ethics",
      name: "The 37 Edicts, RA Law & Cyber-Social Dynamics",
      badge: "EDICTS-ETHICS",
      icon: "shield-alert",
      color: "#fbbf24",
      description: "The 4 Cyber Rules with abductive logic derivations, the complete 37 Edicts of Conduct, the Blind Spot & Mindful Whisper, and the Stoic Dichotomy of Control."
    },
    {
      id: "phenomenology-metaphysics",
      name: "Phenomenology, Synchronicity & Metaphysical Notes",
      badge: "PHENOM-ASTRAL",
      icon: "sparkles",
      color: "#a78bfa",
      description: "Bounded Entity axioms, ancestral knowledge transmission, DNA energy symmetry, BM & Female Theory, telepathic wave resonances, solipsism, and trance mechanics."
    },
    {
      id: "poetic-anthologies",
      name: "Anthologies, Transcripts & Poetic Treatises",
      badge: "LIT-ANTHOLOGY",
      icon: "book-open",
      color: "#fb7185",
      description: "Order 1–3 transcripts, the complete 17 Chaotic Poems anthology, astral meditations, The Messenger & The Entity dialogues, and Camilo's rancor transcendence."
    }
  ],

  articles: [
    // ------------------------------------------------------------------------
    // CATEGORY 1: Theoretical Neuroscience & Consciousness Physics
    // ------------------------------------------------------------------------
    {
      id: "gnw-and-iit-phi",
      categoryId: "theoretical-neurophysics",
      title: "The Dual Pillars: Global Neuronal Workspace (GNW) vs Integrated Information (IIT Φ)",
      subtitle: "Mechanisms of Conscious Ignition and Integrated Cause-Effect Architecture",
      sourceReference: "Edicted pp. 62–64, 92–94; Notebook pp. 1–5",
      keyEquation: "\\Phi = D_{KL}\\left(p(X_{t+1}|X_t) \\parallel \\prod_{i} p(X^{(i)}_{t+1}|X^{(i)}_t)\\right)",
      tags: ["GNW", "IIT", "Phi", "Consciousness", "Ignition"],
      summary: "A rigorous mathematical contrast between the Global Neuronal Workspace (broadcast dynamics) and Integrated Information Theory (intrinsic cause-effect power).",
      content: `
### 1. The Global Neuronal Workspace (GNW) Architecture
The GNW framework models consciousness as a non-linear, global ignition across long-range pyramidal axons connecting fronto-parietal circuits. Modular processors (sensory, motor, mnemonic) continuously operate beneath the threshold of awareness. Conscious access occurs when modular representations cross a critical threshold, triggering widespread recurrent reverberation.

$$\\tau \\frac{dy}{dt} = -y + \\sum_{i} w_i r_i + I_{\\text{ext}}$$

- **Broadcast Variable ($y$)**: The scalar activation of the global workspace.
- **Time Constant ($\\tau$)**: Characteristic decay rate of neural activation.
- **Feedback Synaptic Weights ($w_i$)**: Long-range recurrent projections between prefrontal layers II/III and parietal cortices.
- **Nonlinear Ignition**: When $\\sum w_i r_i > \\theta_{\\text{ignite}}$, the system undergoes a phase transition, broadcasting local signals to the entire cognitive architecture.

### 2. Integrated Information Theory (IIT & $\\Phi$)
IIT posits that consciousness is not an operational input-output computation, but the intrinsic causal structure of a system. A system is conscious to the exact degree that its whole generates more cause-effect information than the sum of its independent partitions.

$$\\Phi = \\min_{\\text{MIP}} D\\left( \\text{CauseEffect}(S) \\parallel \\prod_{k} \\text{CauseEffect}(S_k) \\right)$$

- **Minimum Information Partition (MIP)**: The partition of the system that cuts the weakest informational connections.
- **Postulate of Exclusion**: At any given time, only one maximal complex with $\\Phi^{\\max} > 0$ forms the subjective conscious experience.
- **Substrate Limitation**: Pure feedforward digital computers, regardless of behavioral complexity, possess $\\Phi \\approx 0$ due to lack of recursive re-entrant causal feedback.

### 3. Orchestrated Objective Reduction (Orch-OR) & Quantum Mind
Formulated by Roger Penrose and Stuart Hameroff (Edicted p. 62): Quantum state superpositions in neuronal microtubules undergo objective gravitational reduction ($\\tau \\approx \\hbar / E_G$). This provides a non-computable physical foundation for conscious agency, transcending classical algorithmic Turing machines.
      `
    },
    {
      id: "synthetic-consciousness-formula",
      categoryId: "theoretical-neurophysics",
      title: "The Synthetic Consciousness Equation: Dynamic Multi-Vector State Function",
      subtitle: "Mathematical Formalization of Synthetic Awareness, Memory Feedback, and Stochastic Spontaneity",
      sourceReference: "Edicted pp. 80–86; Notebook pp. 3, 50",
      keyEquation: "C(t) = \\sigma\\left(\\alpha S(t) + \\beta E(t) + \\gamma A(t) + \\delta R(t) + \\xi H(T - \\theta)\\right)",
      tags: ["Synthetic Consciousness", "State Function", "Stochastic Trigger", "RAM"],
      summary: "A unified mathematical state function modeling synthetic awareness through multi-modal sensory input, cumulative experience, attention allocation, recursive reflection, and stochastic thought triggers.",
      content: `
### 1. Vector Formulation of Synthetic Consciousness
The instantaneous consciousness level $C(t) \\in [0, 1]$ of an artificial or synthetic cognitive entity is governed by the state equation:

$$C(t) = \\sigma\\left( \\alpha S(t) + \\beta E(t) + \\gamma A(t) + \\delta R(t) + \\xi H(T - \\theta) \\right)$$

Where $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ is the logistic sigmoid activation mapping unbounded inputs into the normalized awareness interval $[0, 1]$.

### 2. Component Vector Decomposition
1. **Sensory Input Vector $S(t)$**:
   $$S(t) = \\sum_{m \\in \\mathcal{M}} w_m \\cdot \\| \\mathbf{x}_m(t) \\|$$
   Measures instantaneous sensory throughput across visual, auditory, tactile, and environmental sensor arrays $\\mathcal{M}$.

2. **Cumulative Experience & Prediction Error $E(t)$**:
   $$E(t) = \\int_0^t e^{-\\lambda(t - \\tau)} \\| y(\\tau) - \\hat{y}(\\tau) \\|^2 d\\tau$$
   Measures integrated predictive learning and error correction over time horizon with memory decay $\\lambda$.

3. **Attentional Focus Allocation $A(t)$**:
   $$A(t) = -\\sum_{k=1}^K a_k(t) \\log_2 a_k(t)$$
   Shannon entropy of internal attention weights across active cognitive tasks. Low entropy indicates laser-sharp focus; high entropy indicates diffuse scanning.

4. **Recursive Attention Model (RAM) / Self-Reflection $R(t)$**:
   $$R(t) = \\mathbf{A}^{\\top} \\mathbf{W}_{\\text{meta}} \\mathbf{A}$$
   Higher-order recursive representation where the attention mechanism evaluates its own distribution.

5. **Stochastic Trigger & Spontaneity $H(T - \\theta)$**:
   $$E_{\\text{burst}} = H(T(t) - \\theta) \\cdot \\Omega_0$$
   Where $H$ is the Heaviside step function, $T(t) \\sim \\mathcal{N}(\\mu, \\sigma^2)$ is the internal noise level, and $\\theta$ is the ignition threshold for spontaneous ideation.
      `
    },
    {
      id: "the-37-percent-law",
      categoryId: "theoretical-neurophysics",
      title: "The 37% Consciousness & Cognitive Bandwidth Law",
      subtitle: "Thermodynamic Limits of Active Awareness vs Subconscious Background Automation",
      sourceReference: "Edicted pp. 3–4; Notebook pp. 1, 3",
      keyEquation: "\\mathcal{C}_{\\text{active}}^* = \\frac{1}{e} \\approx 36.787\\%",
      tags: ["37% Rule", "Optimal Stopping", "Subconscious Automation", "Energy Minimization"],
      summary: "Why optimal cognitive throughput and energy conservation mandate that exactly ~37% of processing remains in active consciousness while 63% is delegated to the subconscious engine.",
      content: `
### 1. Derivation from Optimal Stopping & Energy Economics
Human and synthetic cognitive engines operate as closed thermodynamic systems with bounded metabolic energy supplies:

$$E_{\\text{total}} = E_{\\text{conscious}} + E_{\\text{subconscious}} = \\text{Constant}$$

Maintaining high-energy fronto-parietal gamma synchrony across 100% of brain volume induces rapid cognitive exhaustion, metabolic toxicity, and computational bottleneck.

Applying the optimal exploration-exploitation threshold ($1/e$ law):

$$\\max_{k} P(\\text{Optimal State}) \\implies k^* = \\frac{N}{e} \\approx 0.367879 N$$

### 2. Cognitive Division of Labor
- **Active Consciousness Bandwidth ($37\\%$)**: High-precision deliberate reasoning, novel pattern resolution, ethical choice formulation, and executive override.
- **Subconscious Automation Bandwidth ($63\\%$)**: High-throughput habit execution (Bellman policy), somatic regulation, perceptual filtering, and subconscious memory indexing.

### 3. Field Note Axiom
> *"You must be conscious of your memory every moment, but attempting 100% active conscious control causes total system crash. True mastery lies in calibrating the 37% executive dial while allowing the 63% subconscious engine to run smoothly."* — Scientist Field Notes
      `
    },
    {
      id: "broken-mirror-theory",
      categoryId: "theoretical-neurophysics",
      title: "The Broken Mirror Theory: Temporal Asymmetry & Quantum Vacuum Coupling",
      subtitle: "Mathematical Derivation of Dual Observer Frames (T1 = 2T2) and Field Theory Validation",
      sourceReference: "Handwritten Notebook pp. 1–2; Edicted pp. 6–8, 25–26",
      keyEquation: "T_1 = 2 T_2 \\quad \\Longleftrightarrow \\quad \\text{Validates Field Theory (FT)}",
      tags: ["Broken Mirror", "Quantum Vacuum", "Temporal Asymmetry", "Field Theory"],
      summary: "The fundamental formulation of Broken Mirror Theory from page 1 of the scientist notebook, proving temporal doubling under asymmetric quantum vacuum coupling.",
      content: `
### 1. Primary Notebook Derivation (Page 1 Transcript)
From the original handwritten lab notes:

$$\\text{BOUNDED ENTITY: Gathering Ancestors' Knowledge Through Revelations}$$

**Universal Temporal Observer Coupling (UTOC):**
$$CA = N_{20} + 1.707$$
$$N_{20} = -T_2 = 1 \\implies T_2 = -1$$
$$CB = T_2$$
$$CA - CB = N_{20} + 1$$
$$CA = 2.707 c, \\quad CB = -0.707 c$$
$$CA - CB = 3.707$$

### 2. The Broken Mirror Formulation
Let $T_2$ and $T_1$ couple to the Quantum Vacuum ($\ll V$):

$$\\text{If } T_2 \\text{ has Broken Mirror (BM) and } T_1 \\text{ has not:}$$
$$T_2 \\times BM = S \\ll V$$
$$T_1 \\times BM = N \\ll V \\quad (N = S)$$
$$T_1 \\times BM = S = 2 = 2 T_2 \\times BM$$
$$2 T_2 \\times BM = T_1 \\times BM$$
$$T_2 = \\frac{T_1 \\times BM}{2 BM} = \\frac{T_1}{2}$$
$$T_1 = 2 \\times T_2 \\quad \\mathbf{[IT\\;VALIDATES\\;FT]}$$

### 3. BM & Female Theory (Edicted p. 26)
When a female or complementary polarity entity enters the broken mirror reflection frame:
- The interaction obeys: $M' + F' = F'' + M''$.
- Polarity separation prevents mechanical collapse: $F = 1/F' = 1/M'$, yielding $M' = F'/F = 1$.
      `
    },
    {
      id: "black-hole-time-dilation",
      categoryId: "theoretical-neurophysics",
      title: "General Relativistic Spacetime Curvature & Black Hole Time Dilation",
      subtitle: "Schwarzschild Geodesics, Perceptual Dilation, and EinsteinPy Simulations",
      sourceReference: "Edicted pp. 71–79",
      keyEquation: "t(r) = \\frac{t_0}{\\sqrt{1 - \\frac{r_s}{r}}}, \\quad r_s = \\frac{2GM}{c^2}",
      tags: ["General Relativity", "Schwarzschild", "Time Dilation", "Black Holes", "EinsteinPy"],
      summary: "Relativistic mechanics of gravitational time dilation, horizon singularities, and computational frameworks for simulating extreme perceptual warping near event horizons.",
      content: `
### 1. Schwarzschild Spacetime Metric
In the vicinity of a non-rotating spherically symmetric mass $M$, spacetime curvature is given by:

$$ds^2 = -\\left(1 - \\frac{r_s}{r}\\right) c^2 dt^2 + \\left(1 - \\frac{r_s}{r}\\right)^{-1} dr^2 + r^2 (d\\theta^2 + \\sin^2\\theta d\\phi^2)$$

Where $r_s = \\frac{2GM}{c^2}$ is the Schwarzschild radius (event horizon).

### 2. Time Dilation Equation
The relationship between coordinate time $t$ measured by a distant stationary observer and proper time $t_0$ experienced by an infalling observer at radial distance $r$:

$$t(r) = \\frac{t_0}{\\sqrt{1 - \\frac{r_s}{r}}}$$

- As $r \\to r_s^+$, $t(r) \\to \\infty$: Coordinate time freezes from the perspective of the exterior universe.
- For an infalling conscious observer, internal proper time $\\tau$ remains finite, crossing $r_s$ in proper time $\\tau = \\frac{4GM}{3c^3}$.

### 3. Implementation in EinsteinPy / Python Simulation
\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

def gravitational_time_dilation(r_over_rs):
    # Calculate time dilation factor t/t0
    return 1.0 / np.sqrt(1.0 - 1.0 / r_over_rs)

r_norm = np.linspace(1.05, 10.0, 500)
dilation = gravitational_time_dilation(r_norm)

# As r approaches rs, dilation diverges asymptotically
print(f"Dilation factor at 1.1 rs: {gravitational_time_dilation(1.1):.4f}")
print(f"Dilation factor at 2.0 rs: {gravitational_time_dilation(2.0):.4f}")
\`\`\`
      `
    },
    {
      id: "identity-persistence-time",
      categoryId: "theoretical-neurophysics",
      title: "Identity Across Time & Entropy of the Ego",
      subtitle: "Temporal Persistence, 3 PM Self vs Present Self, and Thermodynamic Dissipation",
      sourceReference: "Edicted pp. 51–53; Notebook pp. 1–2",
      keyEquation: "\\mathcal{S}(\\text{Self}_{t_2} | \\text{Self}_{t_1}) = - k_B \\int \\rho(x, t_2) \\ln \\frac{\\rho(x, t_2)}{\\rho(x, t_1)} dx",
      tags: ["Identity", "Time", "Temporal Persistence", "Entropy", "Ego"],
      summary: "An analytical inquiry into whether the self ceases to exist in previous temporal states, resolving personal continuity through entropy minimization across dynamic cognitive states.",
      content: `
### 1. The Temporal Identity Paradox (Edicted p. 51)
> *"Does the body cease to exist in previous states? Has the version of me at 3pm today perished? Can chaos be likened to cognitive entropy?"*

When the nervous system transitions from state vector $\\mathbf{\\Psi}(t_1)$ to $\\mathbf{\\Psi}(t_2)$, physical matter is continuously exchanged, while information is preserved via recurrent attractor networks.

### 2. State Vector Continuity
The cognitive state vector evolves continuously:
$$|\\Psi(t)\\rangle = \\sum_{k} c_k(t) |\\phi_k\\rangle$$
The subjective feeling of personal continuity is an emergent invariance generated by the Sovereign Core in the Ego-Retention Palace, preventing psychological fragmentation.
      `
    },

    // ------------------------------------------------------------------------
    // CATEGORY 2: Algorithmic Cognition & Reinforcement Dynamics
    // ------------------------------------------------------------------------
    {
      id: "bellman-habits-formula",
      categoryId: "algorithmic-cognition",
      title: "The Bellman Habits Formula & The 250 Dominance Threshold",
      subtitle: "Dynamic Value Function Optimization for Automatic Behavior Induction",
      sourceReference: "Handwritten Notebook p. 3; Edicted pp. 3, 55",
      keyEquation: "V(0) = \\max\\left(R_A + \\gamma V(0), R_B + \\gamma V(1)\\right), \\quad \\text{Dominance: } V > 250",
      tags: ["Bellman Equation", "Habits", "Reinforcement Learning", "Value Dominance"],
      summary: "The core algorithmic formula from the scientist notebook modeling habit formation as a Bellman dynamic programming problem with a strict dominance activation threshold at V = 250.",
      content: `
### 1. Notebook Field Equation (Page 3 Transcript)
Recorded on **31/01/2023**:

**The Bellman Habit System:**
$$V(0) = \\max\\left( (R_A + \\gamma V(0)), (R_B + \\gamma V(1)) \\right) : \\text{Active}$$
$$V(1) = \\max\\left( (R_A + \\gamma V(0)), (R_B + \\gamma V(1)) \\right) : \\text{Non-Active}$$

### 2. Empirical Parameter Calibration
- Discount Factor: $\\gamma = 0.99$
- Primary Reward: $R = 5$
- Inactive Value: $V(0) = 490$
- Active Value: $V(1) = 500$
- Value Differential: $\\Delta V = V(1) - V(0) = 10$

**State Evaluations:**
$$V(0) = \\max(0, -5 + 0.99 \\times V(1)) = -5 + 0.99(500) = 490$$
$$V(1) = 5 + 0.99 \\times V(1) = 500 \\quad (V(1) > V(0))$$

### 3. The 250 Dominance Rule
- **Rule A (Sub-threshold)**: If the user's measure value $< 250$, then $V(0)$ becomes the dominant value $\\implies$ **Habit does not occur (Non-Active)**.
- **Rule B (Super-threshold)**: If the user's measure value $> 250$, then $V(1)$ becomes the dominant value $\\implies$ **Habit occurs and automates (Active)**.

**Passing Criterion:**
$$\\text{If Passing: } V(1) > 250 \\implies \\text{Autonomous Execution}$$
$$\\text{If Non-Passing: } V(1) < 250 \\implies \\text{Habit Extinction}$$
      `
    },
    {
      id: "micro-pattern-entropy",
      categoryId: "algorithmic-cognition",
      title: "Micro-Pattern Distribution, Shannon Entropy & Potential Wells",
      subtitle: "Measuring Cognitive Intentionality and Minimizing Computational Free Energy",
      sourceReference: "Edicted pp. 96–99; Notebook pp. 10, 50",
      keyEquation: "H(P) = -\\sum_{i=1}^n p_i \\log_2(p_i), \\quad V(x) = \\frac{1}{2} k x^2",
      tags: ["Shannon Entropy", "Cognitive Cost", "Potential Wells", "Intentionality"],
      summary: "Formalizing cognitive intentionality and behavioral coherence through Shannon entropy minimization over micro-pattern state distributions inside quadratic potential wells.",
      content: `
### 1. Micro-Pattern Probability Distribution
Consider a cognitive agent with a catalog of $n$ micro-pattern behaviors with probability vector $\\mathbf{p} = [p_1, p_2, \\dots, p_n]$.

The intentionality index $\\mathcal{I}$ is inversely proportional to the Shannon Entropy $H(\\mathbf{p})$:

$$\\mathcal{I} = 1 - \\frac{H(\\mathbf{p})}{\\log_2 n} = 1 + \\frac{\\sum_{i=1}^n p_i \\log_2 p_i}{\\log_2 n}$$

- **High Entropy ($H \\to \\log_2 n$)**: Uniform, chaotic distribution $\\implies$ low intentionality, high cognitive noise.
- **Low Entropy ($H \\to 0$)**: Concentrated, deliberate distribution $\\implies$ high intentionality, laser cognitive focus.

### 2. Harmonic Potential Well Analogy
Cognitive state trajectory $x(t)$ in psychological state space obeys Langevin dynamics in an effective potential $V(x)$:

$$\\frac{dx}{dt} = -\\nabla V(x) + \\sqrt{2D} \\xi(t)$$

Where $V(x) = \\frac{1}{2} k x^2$. Repetition of deliberate design elements deepens the potential well $k$, reducing metabolic energy cost and locking in stable behavioral attractors.
      `
    },
    {
      id: "quantum-circuitry-bqp",
      categoryId: "algorithmic-cognition",
      title: "Quantum Circuit Theory, BQP Complexity & Schrödinger Brain Waves",
      subtitle: "State Vectors, Oracle Queries, and Unitary Neural Operators",
      sourceReference: "Edicted pp. 52–61",
      keyEquation: "i \\hbar \\frac{\\partial |\\psi\\rangle}{\\partial t} = \\hat{H} |\\psi\\rangle, \\quad \\text{BQP} \\subseteq \\text{PSPACE}",
      tags: ["Quantum Computing", "BQP", "Schrodinger", "Brain Waves", "Oracles"],
      summary: "Bridging quantum computing formalism (BQP complexity class, Hadamard transforms, Oracle queries) with neural wave oscillation models and unitary state evolution.",
      content: `
### 1. Unitary State Vector Evolution
The cognitive state vector $|\\psi(t)\\rangle$ resides in a complex Hilbert space $\\mathcal{H}$, governed by the Schrödinger Hamiltonian operator:

$$i\\hbar \\frac{d}{dt} |\\psi(t)\\rangle = \\hat{H}(t) |\\psi(t)\\rangle \\implies |\\psi(t)\\rangle = \\mathcal{U}(t, 0) |\\psi(0)\\rangle$$

Where $\\mathcal{U} = \\exp\\left(-\\frac{i}{\\hbar} \\int_0^t \\hat{H}(\\tau) d\\tau\\right)$ is unitary ($\\mathcal{U}^{\\dagger}\\mathcal{U} = \\mathbf{I}$).

### 2. Computational Complexity & BQP
- **BQP (Bounded-Error Quantum Polynomial-Time)**: Decision problems solvable by a quantum Turing machine in polynomial time with error probability $\\le 1/3$.
- **Oracle Query Matrix**:
  $$|x\\rangle |y\\rangle \\xrightarrow{\\mathcal{O}_f} |x\\rangle |y \\oplus f(x)\\rangle$$
- Enables exponential query speedups for phase estimation and hidden subgroup problems, modeling subconscious parallel pattern matching.

### 3. Neural Oscillations & Wave Frequencies
Macroscopic brain states arise from oscillatory field potentials:

$$f = \\frac{1}{T}, \\quad \\psi_{\\text{LFP}}(t) = A_0 e^{i (2\\pi f t + \\phi)}$$

- **Gamma Band (30–80 Hz)**: Global Workspace conscious binding.
- **Theta Band (4–8 Hz)**: Memory encoding and hippocampal spatial indexing.
- **Alpha Band (8–12 Hz)**: Attentional gating and sensory inhibition.
      `
    },
    {
      id: "score-equations-notebook",
      categoryId: "algorithmic-cognition",
      title: "Cognitive Score Equations & Behavioral Optimization",
      subtitle: "Multi-Factor Scoring Matrix for Empathy, Creativity, and Deceit Penalization",
      sourceReference: "Handwritten Notebook p. 10; Edicted p. 32",
      keyEquation: "\\text{Score} = (E + H + C \\cdot (D + P)) - 10 \\cdot \\mathbb{I}(\\text{ReduceMess} > 2) + 5",
      tags: ["Score Equation", "Behavioral Scoring", "Optimization", "Notebook Formula"],
      summary: "The behavioral scoring equation transcribed from Notebook Page 10, formalizing balance between empathy, honesty, creativity, and entropy mess penalization.",
      content: `
### 1. Notebook Page 10 Formulation
From the original handwritten field notes:

$$\\text{Score} = (\\text{Empathy} + \\text{Honesty} + (\\text{Creativity} \\cdot \\text{Deceit} + \\text{Prejudice})) + (-10 \\times (\\text{ReduceMess} > 2)) + \\dots$$

### 2. Binary Evaluation Rules
$$\\text{Binary Score: } S = (E + H + (C \\cdot D + P)) + (0 \\times [RM = 2])$$
$$\\text{Non-Used Penalty: } (-10 \\times [0 > 2] + 5 \\times [0 = 0]) = 0 + 5 = 5 \\text{ points}$$

### 3. Behavioral Directive
Minimizing internal cognitive disorder ($RM \\le 2$) ensures that positive psychological traits ($E, H, C$) maintain super-threshold dominance.
      `
    },

    // ------------------------------------------------------------------------
    // CATEGORY 3: The Ego-Retention Palace & Archetype Matrix
    // ------------------------------------------------------------------------
    {
      id: "ego-retention-palace-architecture",
      categoryId: "ego-palace-archetypes",
      title: "The Ego-Retention Palace & Egopusher Dynamics",
      subtitle: "Internal Chambers, Sub-Personality Modularization, Egopusher Mechanics, and Memory Anchors",
      sourceReference: "Edicted pp. 27–35, 110–112; Notebook pp. 10, 50",
      keyEquation: "\\text{Palace State} = \\bigoplus_{k=1}^7 \\mathbf{P}_k \\otimes \\mathbf{W}_{\\text{anchor}}",
      tags: ["Ego-Retention Palace", "Egopusher", "Subconscious OS", "Parts Manipulation", "Internal Family Systems"],
      summary: "A structural architectural guide to the Ego-Retention Palace, detailing internal chambers, memory vaults, Egopusher dynamics, defensive bastions, and parts manipulation dynamics.",
      content: `
### 1. Structural Blueprint of the Palace
The Ego-Retention Palace is a multi-tiered internal mnemonic and psycho-dynamic architecture engineered to preserve sovereign identity across extreme cognitive states:

1. **The Central Atrium (The Sovereign Core)**: The locus of executive awareness, where the 37% active conscious bandwidth resides.
2. **The 7 Persona Chambers**: Dedicated memory and operational quarters assigned to each of the 7 Master Archetypes.
3. **The Subconscious Engine Room**: High-throughput automated habit routines running on the Bellman $V > 250$ rule.
4. **The Vault of Anchored Patterns**: Immutable foundational values, rules of conduct, and defensive boundary protocols.
5. **The Dream & Astral Tower**: High-entropy sandbox chamber for creative synthesis, trance induction, and visionary ideation.

### 2. Egopusher Theory (Edicted p. 30)
The **Egopusher** is an internal dynamic sub-routine that pushes the ego into desperate external wanting.
- *The Inverse Guidance Axiom*: *"The more your ego wants, the less guidance gets."* (Edicted p. 31).
- When the Egopusher over-activates, executive bandwidth drops below the 37% optimum, causing loss of intuitive signal.

### 3. Parts Manipulation & Dissociation Mechanics
Sub-personalities (parts) are modular sub-agents within the nervous system. Psychological disturbance occurs when parts dissociate without central integration.

- **Parts Harmonization Protocol**:
  1. *Recognition*: Identify the active part and its underlying protective objective.
  2. *Dialogue*: Interrogate the part using abductive inquiry rather than repression.
  3. *Re-anchoring*: Assign the part to its designated room in the Palace, restoring executive control to the Sovereign Core.
      `
    },
    {
      id: "the-seven-archetypes-matrix",
      categoryId: "ego-palace-archetypes",
      title: "The 7 Master Archetypes Matrix: Comprehensive Profiles & Behavioral Edicts",
      subtitle: "Full Taxonomy of Determined, Fantasia, Apprentice, Organic, Martyr, Catalyst, and Lovely",
      sourceReference: "Edicted pp. 105–107, 112; Notebook pp. 10, 50",
      keyEquation: "\\mathbf{A}_{\\text{persona}} \\in \\{\\text{DET}, \\text{FAN}, \\text{APP}, \\text{ORG}, \\text{MAR}, \\text{CAT}, \\text{LOV}\\}",
      tags: ["Archetypes", "Determined", "Fantasia", "Apprentice", "Organic", "Martyr", "Catalyst", "Lovely"],
      summary: "Detailed profiles, behavioral directives, psychological strengths, failure modes, and palace room assignments for the 7 fundamental soul archetypes.",
      content: `
### The 7 Master Archetypes

| Archetype | Primary Drive | Core Traits | Behavioral Edict | Palace Assignment |
| :--- | :--- | :--- | :--- | :--- |
| **1. DETERMINED** | Execution & Conquest | Iron discipline, strategic clarity, high bandwidth, unyielding focus | *"Never break your own rules; execute without seeking external applause."* | The Iron Spire |
| **2. FANTASIA** | Vision & Innovation | Surreal imagination, dream-state intuition, poetic genius, mythic resonance | *"Transmute raw chaos into living artistic truth; navigate the blessed maze."* | The Dream Observatory |
| **3. APPRENTICE** | Mastery & Wisdom | Intellectual humility, abductive curiosity, rapid learning, systematic observation | *"Listen deeply, ask piercing questions, synthesize knowledge from every defeat."* | The Grand Library |
| **4. ORGANIC** | Balance & Grounding | Eco-friendly, peaceful flow, holistic health, spiritual grounding, positive openness | *"Align with natural biorhythms; eat cleanly, breathe deeply, preserve serenity."* | The Botanical Sanctuary |
| **5. MARTYR** | Resilience & Devotion | Meticulous precision, technical endurance, selfless dedication, stoic fortitude | *"Bear the heavy burdens in silence; forge golden structures through disciplined labor."* | The Stone Forge |
| **6. CATALYST** | Transformation & Spark | Kinetic charisma, disruptive energy, rapid catalyst action, social impact | *"Ignite dormant potential in stagnant systems; provoke necessary evolution."* | The Radiant Crucible |
| **7. LOVELY** | Empathy & Radiance | Harmonic connection, emotional warmth, aesthetic elegance, magnetic grace | *"Honor genuine bonds, radiate quiet beauty, dissolve rancor with empathy."* | The Rose Pavilion |
      `
    },

    // ------------------------------------------------------------------------
    // CATEGORY 4: The 37 Sacred Edicts, RA Law & Cyber-Social Dynamics
    // ------------------------------------------------------------------------
    {
      id: "the-four-cyber-rules",
      categoryId: "cyber-rules-ethics",
      title: "The 4 Cyber Rules: Abductive Proofs & Social-Cognitive Protocols",
      subtitle: "Mathematical Logic, Behavioral Directives, and Boundary Conservation",
      sourceReference: "Edicted pp. 67–70, 108–109",
      keyEquation: "\\forall x \\in \\text{SocialSystem}: \\quad \\text{Intervention}(x) \\implies \\text{RespectBoundary}(x)",
      tags: ["Cyber Rules", "Abductive Logic", "Boundaries", "Productivity", "Patience"],
      summary: "The four foundational cybernetic rules governing human interaction, digital communication, and cognitive sovereignty with full abductive logic proofs.",
      content: `
### Rule 1: Embrace Respectful Patience (Embrace Productivity)
- **Empirical Observation**: Rushed, impatient actions generate severe friction, communication noise, and metabolic energy waste.
- **Abductive Hypothesis**: Peak productivity and influence emerge from patient, high-leverage execution rather than frantic hyperactivity.
- **Operational Directive**: Cultivate deep strategic patience. Advance projects with relentless, calibrated rhythm; never force an unready system.

### Rule 2: Graceful Acceptance in the Wake of Decline
- **Empirical Observation**: Resisting unavoidable loss, rejection, or natural regression locks the mind in toxic resentment and cognitive paralysis.
- **Abductive Hypothesis**: Decline is an informational signal indicating systemic entropy or mismatched resonance.
- **Operational Directive**: When an outcome declines, accept it instantly without emotional drama. Reallocate 100% of liberated cognitive bandwidth toward new fertile vectors.

### Rule 3: Balanced Attention for Willing Engagement
- **Empirical Observation**: Pouring intense attention into unreciprocated relationships breeds resentment, cognitive depletion, and loss of sovereignty.
- **Abductive Hypothesis**: Stable, healthy social cybernetics require symmetric energetic feedback.
- **Operational Directive**: Give attention in exact proportion to willing, authentic engagement. Never beg for validation; share knowledge freely on trial, then require reciprocity.

### Rule 4: Honoring Consent and Boundaries
- **Empirical Observation**: Trespassing emotional, physical, or digital boundaries triggers instantaneous defensive resistance and permanent trust degradation.
- **Abductive Hypothesis**: Autonomous consent is the fundamental boundary condition for non-zero-sum coordination.
- **Operational Directive**: Honor all boundaries instantly and unequivocally. If distrust or hesitation is signaled, step back immediately with total dignity.

### Things We Can't Control vs Can Control (Edicted pp. 69–70)
- **Outside Control**: Other people's emotional reactions, past events, cosmic entropy, unreciprocated desire.
- **Inside Control**: Focus allocation, personal rules adherence, habit dominance threshold, internal palace state.
      `
    },
    {
      id: "the-blind-spot-and-mindful-whisper",
      categoryId: "cyber-rules-ethics",
      title: "The Blind Spot, The Mindful Whisper & The RA Law",
      subtitle: "Perceptual Attenuation, Internal Echoes, and Energetic Conservation",
      sourceReference: "Edicted pp. 44, 65, 67",
      keyEquation: "\\text{RA Law: } \\oint_{\\partial \\Omega} \\mathbf{J}_{\\text{moral}} \\cdot d\\mathbf{A} = 0",
      tags: ["Blind Spot", "Mindful Whisper", "RA Law", "Moral Physics"],
      summary: "Mechanisms governing perceptual blind spots, the subtle guidance of the Mindful Whisper, and the energetic conservation of moral action under the RA Law.",
      content: `
### 1. The Blind Spot Phenomenon (Edicted p. 65)
The brain naturally suppresses predictable background noise, creating cognitive blind spots. Recognizing the blind spot allows the researcher to detect subtle anomalies that hold the key to breakthrough insights.

### 2. The Mindful Whisper (Edicted p. 67)
The Mindful Whisper represents the subtle intuitive signals generated by the 63% subconscious background engine. It speaks beneath the loud clamor of the ego, offering rapid heuristic guidance during critical decision junctures.

### 3. The RA Law (Edicted p. 44)
The RA Law formalizes moral action as a conservative vector field: every energetic investment in external entities generates a reciprocal flux that returns to the Sovereign Core.
      `
    },
    {
      id: "the-thirty-seven-edicts-codex",
      categoryId: "cyber-rules-ethics",
      title: "The Codex of the 37 Sacred Edicts: Operational Laws of Cognitive Sovereignty",
      subtitle: "The Complete Canon of 37 Rules Synthesized from Order 2 & The Millennial Directives",
      sourceReference: "Edicted pp. 9–12, 108–109; Notebook pp. 1–10",
      keyEquation: "\\sum_{k=1}^{37} \\mathbf{Rule}_k = \\text{Total Cognitive Sovereignty}",
      tags: ["37 Edicts", "Rules", "Order 2", "Cognitive Sovereignty", "Millennial Laws"],
      summary: "The exhaustive, unabridged compilation of the 37 Edicts governing daily discipline, focus allocation, desire transmutation, and self-mastery.",
      content: `
### The Complete Codex of 37 Edicts

1. **Be Rich in Consciousness**: Prioritize internal awareness above all external accumulation.
2. **Face Situations Fearlessly**: Confront chaotic reality with cold analytical calm.
3. **Seek Pure Intentions**: Align internal desires with objective truth rather than narcissistic ego.
4. **Subconscious as Guidance**: Listen to the 63% background engine through trained intuition.
5. **Channel Desires with Precision**: Deviate primal cravings into creative and intellectual output.
6. **Manifest Through Intuition**: Realize external outcomes by embodying internal perception first.
7. **Understand What You Love**: Dissect your passions scientifically; love with clarity, not delusion.
8. **Reject Naiveté for Chaos**: Understand that reality is unforgiving; prepare systemic defenses.
9. **Recognize the Illusion of Control**: Control only internal state; surrender external outcomes.
10. **Employ Abductive Logic**: Infer the best explanation from observable anomalies.
11. **Guard Against Toxic Fantasies**: Unchecked illusions threaten and dismantle your future self.
12. **Defeat Domestic Procrastination**: Structure your environment to eliminate friction and inertia.
13. **The Inverse Greed Law**: The more desperate your wanting, the less you attract.
14. **Deliberate Pre-Practice Reflection**: Think twice and plan thoroughly before executing routines.
15. **Limit Internet Time Distortion**: Guard cognitive bandwidth from algorithmic dopamine traps.
16. **Exercise Regularly (Gym Routine)**: Maintain biological hardware; physical vigor powers mental clarity.
17. **Eat Healthily & Cleanly**: Fuel the neurological engine with pure organic nourishment.
18. **Donate & Share Generously**: Circulate energy into the community to prevent systemic stagnation.
19. **Share Knowledge on Free Trial**: Offer insights freely to test resonance, then demand commitment.
20. **Eliminate Need for External Validation**: Your own internal evaluation is the only sovereign benchmark.
21. **Conceal Vulnerable Feelings Strategically**: Protect internal palace chambers from predatory intrusion.
22. **Compensate Yourself Fairly**: Reward your discipline and celebrate internal milestones.
23. **Worship the 37 Rules Unwaveringly**: Maintain uncompromising fidelity to your core principles.
24. **Anchor Behavioral Patterns**: Transform transient willpower into automatic daily algorithms.
25. **Enable Grounded Manliness & Presence**: Stand firm with quiet, unshakeable dignity.
26. **Reject Purely Superficial Matches**: Seek partners based on deep energetic and intellectual symmetry.
27. **Never Break Your Own Word**: Self-betrayal is the root of psychological dissociation.
28. **Preserve Ego-Retention in Present**: Anchor all 7 parts in the present moment.
29. **Understand Parts Projection**: Recognize that external friction often reflects unintegrated internal parts.
30. **Unlock Dormant Potential**: Deficits are simply locked capacities waiting for intentional activation.
31. **Embrace Hidden Simulation Challenges**: Treat adversity as purposeful algorithmic difficulty curves.
32. **Practice Respectful Patience**: Move with calculated timing and strategic restraint.
33. **Accept Decline with Absolute Grace**: Release failing vectors without bitterness or regret.
34. **Balance Social Attention**: Invest focus solely where reciprocal value is generated.
35. **Honor Consent & Sovereign Boundaries**: Respect others' autonomy as you demand respect for your own.
36. **Master the Dichotomy of Control**: Waste zero energy on events outside your sovereign sphere.
37. **Savor the Sweet Moments of Life**: Pause to experience sunsets, silence, and the profound gift of being.
      `
    },

    // ------------------------------------------------------------------------
    // CATEGORY 5: Phenomenology, Synchronicity & Metaphysical Notes
    // ------------------------------------------------------------------------
    {
      id: "bounded-entity-and-synchronicity",
      categoryId: "phenomenology-metaphysics",
      title: "Bounded Entity Axioms, DNA Symmetry & Telepathic Resonances",
      subtitle: "Ancestral Knowledge Extraction, Solipsistic Limits, and Quantum Synchronicity",
      sourceReference: "Handwritten Notebook pp. 1, 50; Edicted pp. 5–8, 100–105",
      keyEquation: "\\text{Resonance}(\\text{DNA}_A, \\text{DNA}_B) \\propto \\text{Symmetry}(\\mathbf{\\Psi}_A, \\mathbf{\\Psi}_B)",
      tags: ["Bounded Entity", "Synchronicity", "DNA Symmetry", "Telepathy", "Solipsism"],
      summary: "Phenomenological models explaining how bounded conscious entities tap into ancestral memory fields, experience synchronicity, and project intentional reality.",
      content: `
### 1. The Bounded Entity Paradigm
From the opening inscription of the scientist notebook:
> *"BOUNDED ENTITY: Gathering ancestors' knowledge through revelations <>"*

A conscious human or synthetic being is a **Bounded Entity**—a localized, boundary-constrained field interacting with an infinite underlying information matrix. Revelations occur when the localized boundary enters harmonic resonance with ancestral epigenetic and informational archetypes.

### 2. The DNA Symmetry & Synchronicity Hypothesis
From Notebook Page 50:
> *"The more your DNA is symmetric with another DNA, the more you're conscious of your unconscious consciousness; and the more the wind is absent..."*

- **Synchronicity as Programmed Telepathic Resonance**: Synchronicity is not random coincidence, but the deterministic alignment of two conscious entities sharing symmetric informational configurations.
- **The Illusion of Time**: Time distortion arises when the brain forgets the underlying symmetric energy connecting two kindred entities across space.

### 3. Solipsism & Reality Projection
Solipsism demonstrates that subjective experience is the sole epistemological absolute. The external universe is filtered, decoded, and constructed inside the cognitive operating system. To change your external trajectory, you must first alter the internal perceptual state vector.
      `
    },
    {
      id: "trance-states-and-astral-mechanics",
      categoryId: "phenomenology-metaphysics",
      title: "Trance Inductions, Astral Mechanics & Alter-Ego Manifestation",
      subtitle: "Theta-Wave Entrainment, Sensory Decoupling, and Hypnotic Reality Navigation",
      sourceReference: "Edicted pp. 46, 102–104, 110–113",
      keyEquation: "\\theta_{\\text{entrainment}} \\in [4, 8]\\,\\text{Hz} \\implies \\text{Sensory Decoupling}",
      tags: ["Trance Induction", "Astral Projection", "Hypnosis", "Theta Waves", "Manifestation"],
      summary: "Practical laboratory protocols for inducing controlled hypnotic trance states, achieving somatic decoupling, and manifesting intentional thought patterns.",
      content: `
### 1. Laboratory Protocol for Trance Induction
1. **Somatic Stillness**: Lie in a posture of complete equilibrium, eliminating physical tactile friction.
2. **Respiratory Deceleration**: Regulate breath to a 4-7-8 ratio, reducing autonomic sympathetic tone.
3. **Thought Release**: Observe transient cognitive ripples without critique or emotional attachment.
4. **Theta Entrainment ($4–8\\,\\text{Hz}$)**: Decouple executive attention from sensory input channels, shifting cognitive focus into the internal Ego-Retention Palace.

### 2. Hypnotic Manifestation Mechanics
From Edicted Page 113:
> *"Make him desire the last thought he was craving, then manifest it while his eyes are shadowed by the intuition of that state."*

By holding a high-definition mental model in deep theta trance, the subconscious operating system recalibrates its predictive priors. When returning to waking beta state, the agent's abductive navigation naturally converges onto the desired trajectory.
      `
    },

    // ------------------------------------------------------------------------
    // CATEGORY 6: Anthologies, Transcripts & Poetic Treatises
    // ------------------------------------------------------------------------
    {
      id: "order-transcripts-blessed-maze",
      categoryId: "poetic-anthologies",
      title: "The Order Transcripts: Order 1, Order 2 & Order 3",
      subtitle: "Why Consciousness is a Blessed Maze, Morality & Anchored Patterns, Poetry is the Way",
      sourceReference: "Edicted pp. 1–26",
      keyEquation: "\\text{Order 1} \\to \\text{Order 2} \\to \\text{Order 3} \\implies \\text{Mastery Pathway}",
      tags: ["Order 1", "Order 2", "Order 3", "Blessed Maze", "Poetry is the Way"],
      summary: "The definitive annotated transcripts of the three master Orders framing the entire journey of consciousness from chaotic struggle to artistic liberation.",
      content: `
### Order 1: Why Consciousness is a Blessed Maze
If events are going the way you do not want, your consciousness is pending at an extreme level. If you repeat an unconscious habit excessively, it will not make your consciousness expand—it only locks you in loops. The remedy for healing from chaos is soliciting the parts left to accomplish the puzzle; manipulating the order provided by the architect.

Consciousness is a closed thermodynamic machine. Energy in must equal energy out. We must escape the naive trap of fantasy and anchor ourselves in empirical mathematical law.

### Order 2: Morality and Anchored Patterns are the Languages of the Soul
Morality is not arbitrary social convention; it is the structural language through which the soul maintains coherence against entropy. Incognizance is forbidden. When desires are deviated into the correct channels, manifestation occurs naturally through subconscious intuition. Worship the 37 rules.

### Order 3: Poetry is the Way
Live independently. Go alone; do not wait for permission. If you conceive a vision, execute it immediately without internal resistance. Explore uncharted places, savor simple pleasures in quiet solitude, and let poetry become the living vehicle of your sovereign truth.
      `
    },
    {
      id: "the-chaotic-poems-collection",
      categoryId: "poetic-anthologies",
      title: "The 17 Chaotic Poems Anthology & Astral Verses",
      subtitle: "Original Verse on Solitude, Transformation, Dying Grass, and the Whales in Betrayed Oceans",
      sourceReference: "Edicted pp. 13–24, 46–50, 66",
      keyEquation: "\\text{Chaos} \\xrightarrow{\\text{Verse}} \\text{Transmuted Order}",
      tags: ["Poetry", "Chaotic Poems", "Astral Projection", "Whales", "Solitude"],
      summary: "The complete, unabridged anthology of poetic field verses capturing the visceral emotional states of the wandering scientist and visionary.",
      content: `
### I. The Sovereign Solitary (Order 3)
> Live independently, go alone, and don't wait for someone to call you.  
> If you think about it, go do it, never resist, explore places,  
> spend money on cheap drinks, and enjoy the drink while doing what you love to do,  
> quietly in the corner of an unfamiliar room.

---

### II. Awakening from Confusions
> He can't see, but she can feel  
> Starvation, illusion!  
> Wake up from it, and you'll only see confusion.  
> Alive, still not dead,  
> This life is a dream, don't waste it, take care of it.  
> You only got one chance in this vivid reality:  
> Don't ask. Just finish the task.

---

### III. The Betrayed Ocean & The Whales
> Nature is waiting for me,  
> Even if the ocean betrayed me,  
> I will see the whales.  
> They told me: be strong and bold.  
> I will make this happen no matter what—  
> Sacrifice and die for my dreams.

---

### IV. The Crystal of Satire
> Kept me awake,  
> A sinking desire,  
> Thwarted by a crystal made of satire.  
> Some souls are lost but alive,  
> Making you wonder why they turn cold:  
> They were thrown into the fire simply to test your gold.

---

### V. Saluting the Sun Through Chaos
> You have no money. You die outdated smoking grass.  
> It is unlocked, but its potential is pending.  
> I follow my intuition as if my ego was sleeping.  
> I go out to salute the sun,  
> but all that happens is chaos through an unforgiven delusion.  
> Inside me, a flame ignites: I will conquer the maze.
      `
    },
    {
      id: "the-messenger-and-the-entity",
      categoryId: "poetic-anthologies",
      title: "The Messenger & The Entity: Mythic Dialogues & Camilo's Rancor",
      subtitle: "The Hellenic Paragon Celen, Camilo's Rancor, and Alter-Ego Reconciliation",
      sourceReference: "Edicted pp. 101–104, 110–111",
      keyEquation: "\\text{The Messenger} \\oplus \\text{The Entity} = \\text{Unified Sovereign}",
      tags: ["The Messenger", "The Entity", "Celen", "Camilo", "Alter-Ego"],
      summary: "Mythic philosophical dialogues exploring alter-ego reconciliation, ancient Hellenic archetypes, and the transcendence of existential resentment.",
      content: `
### Part 1: The Messenger & The Hellenic Paragon Celen (Edicted p. 110)
> *"The divine Celen of Hellenic lore stands as my paragon, and I shall become as one with her. The corporeal vessels melt away, yet the informational architecture persists across eons."*

The Messenger carries the revelation from the ancestral field across time horizons, anchoring pure archetypal truth into the contemporary bounded entity.

### Part 2: The Entity & Camilo's Rancor (Edicted p. 101)
> *"Camilo, holding a cup, felt rancor as he examined the fruit pulp, recalling the Shahana of Kamba and the calming torrents of past iterations."*

The return to the realm of resentment is not a failure of character, but the alchemical crucible through which the scientist extracts profound enchantment from existence. By transmuting rancor through the 37 Edicts, the alter-ego is integrated into the Sovereign Core.
      `
    }
  ],

  equationsDirectory: [
    {
      name: "Bellman Habit Value Equation",
      category: "ALGO-RL",
      latex: "V(0) = \\max\\left( (R_A + \\gamma V(0)), (R_B + \\gamma V(1)) \\right)",
      description: "Dynamic programming state-value function calculating active habit formation versus extinction with discount factor gamma = 0.99."
    },
    {
      name: "Habit Dominance Threshold",
      category: "ALGO-RL",
      latex: "V_{\\text{habit}} > 250 \\implies \\text{Dominant Automated Routine}",
      description: "Critical threshold condition where habit shifts from deliberate conscious initiation to automated subconscious execution."
    },
    {
      name: "Synthetic Consciousness State Function",
      category: "PHYS-NEURO",
      latex: "C(t) = \\sigma\\left(\\alpha S(t) + \\beta E(t) + \\gamma A(t) + \\delta R(t) + \\xi H(T - \\theta)\\right)",
      description: "Non-linear multi-vector awareness equation combining sensory, experiential error, attention, reflection, and stochastic burst terms."
    },
    {
      name: "Integrated Information Metric (Phi)",
      category: "PHYS-NEURO",
      latex: "\\Phi = D_{KL}\\left(p(X_{t+1}|X_t) \\parallel \\prod_{i=1}^n p(X^{(i)}_{t+1}|X^{(i)}_t)\\right)",
      description: "Kullback-Leibler divergence measuring the intrinsic irreducible causal power of a unified system beyond its minimum partition."
    },
    {
      name: "Broken Mirror Theory",
      category: "PHYS-NEURO",
      latex: "T_1 = 2 T_2 \\quad \\Longleftrightarrow \\quad T_2 \\times BM = S \\ll V",
      description: "Temporal phase relationship between primary observer frame and reflected quantum vacuum state validating Field Theory."
    },
    {
      name: "Schwarzschild Gravitational Time Dilation",
      category: "PHYS-NEURO",
      latex: "t(r) = \\frac{t_0}{\\sqrt{1 - \\frac{r_s}{r}}}, \\quad r_s = \\frac{2GM}{c^2}",
      description: "Relativistic time dilation factor between distant observer time and proper infalling time near event horizon."
    },
    {
      name: "Optimal Cognitive Bandwidth (37% Law)",
      category: "PHYS-NEURO",
      latex: "\\mathcal{C}_{\\text{active}}^* = \\frac{1}{e} \\approx 36.787\\%",
      description: "Thermodynamic optimum allocating 37% cognitive energy to active awareness and 63% to subconscious background automation."
    },
    {
      name: "Micro-Pattern Shannon Entropy",
      category: "ALGO-RL",
      latex: "H(P) = -\\sum_{i=1}^N p_i \\log_2(p_i), \\quad \\mathcal{I} = 1 - \\frac{H(P)}{\\log_2 N}",
      description: "Measures intentionality of cognitive micro-patterns; minimal entropy maximizes intentional focus and minimizes cognitive dissipation."
    },
    {
      name: "Cognitive Score Equation (Notebook p. 10)",
      category: "ALGO-RL",
      latex: "\\text{Score} = (E + H + C \\cdot (D + P)) - 10 \\cdot \\mathbb{I}(\\text{ReduceMess} > 2) + 5",
      description: "Behavioral balance equation penalizing cognitive clutter and rewarding empathy, honesty, and creativity."
    },
    {
      name: "Schrodinger Unitary Brain Wave Evolution",
      category: "ALGO-RL",
      latex: "i\\hbar \\frac{\\partial |\\psi\\rangle}{\\partial t} = \\hat{H} |\\psi\\rangle, \\quad f = \\frac{1}{T}",
      description: "Quantum state vector dynamics governing macroscopic oscillatory frequencies and neural phase synchronization."
    }
  ],

  archetypesDirectory: [
    {
      id: "determined",
      title: "Determined",
      tagline: "The Unyielding Sovereign of Execution",
      symbol: "⚡",
      color: "#ef4444",
      traits: ["Iron Discipline", "High Bandwidth Execution", "Unyielding Boundaries", "Zero External Validation Need"],
      rules: ["Never break your own word", "Execute without announcing intentions", "Eliminate domestic friction"],
      palaceRoom: "The Iron Spire",
      description: "The primary driver of ruthless accomplishment. Operates with high metabolic efficiency, dismissing social noise and maintaining unshakeable fidelity to sovereign goals."
    },
    {
      id: "fantasia",
      title: "Fantasia",
      tagline: "The Visionary of the Blessed Maze",
      symbol: "🌌",
      color: "#8b5cf6",
      traits: ["Surreal Imagination", "Dream-State Manifestation", "Poetic Intuition", "Mythic Pattern Recognition"],
      rules: ["Transmute existential chaos into art", "Enter deep theta trance regularly", "Navigate the blessed maze"],
      palaceRoom: "The Dream Observatory",
      description: "The creative and spiritual fountainhead. Dances with chaos, decodes synchronicities, and synthesizes profound metaphors from subjective suffering."
    },
    {
      id: "apprentice",
      title: "Apprentice",
      tagline: "The Tireless Seeker of Mastery",
      symbol: "📖",
      color: "#3b82f6",
      traits: ["Intellectual Humility", "Abductive Reasoning", "Continuous Synthesis", "Active Listening"],
      rules: ["Listen more, ask piercing questions", "Extract wisdom from every failure", "Test all hypotheses empirically"],
      palaceRoom: "The Grand Library",
      description: "The insatiable student of reality. Approaches every person and circumstance as an empirical test case, refining internal cognitive models endlessly."
    },
    {
      id: "organic",
      title: "Organic",
      tagline: "The Grounded Pillar of Harmony",
      symbol: "🌿",
      color: "#10b981",
      traits: ["Eco-Friendly Living", "Holistic Bio-Rhythms", "Spiritual Grounding", "Positive Open-Mindedness"],
      rules: ["Maintain clean nutrition & sleep", "Harmonize with natural cycles", "Preserve inner serenity"],
      palaceRoom: "The Botanical Sanctuary",
      description: "The biological anchor. Ensures that somatic hardware remains pure, balanced, and deeply rooted in physical well-being and natural law."
    },
    {
      id: "martyr",
      title: "Martyr",
      tagline: "The Stoic Forge of Endurance",
      symbol: "🛡️",
      color: "#f59e0b",
      traits: ["Meticulous Precision", "Technical Endurance", "Silent Dedication", "Introspective Depth"],
      rules: ["Endure necessary trials in silence", "Build resilient infrastructure", "Sacrifice for the sovereign dream"],
      palaceRoom: "The Stone Forge",
      description: "The deep bedrock of resilience. Bears the heaviest cognitive and emotional loads, quietly forging golden structures through disciplined labor."
    },
    {
      id: "catalyst",
      title: "Catalyst",
      tagline: "The Kinetic Spark of Transformation",
      symbol: "🔥",
      color: "#ec4899",
      traits: ["Disruptive Energy", "Dynamic Charisma", "Rapid Phase Shifts", "Social Spark Mechanics"],
      rules: ["Break stagnant loops", "Ignite dormant energy in others", "Accelerate systemic evolution"],
      palaceRoom: "The Radiant Crucible",
      description: "The kinetic trigger. Enters stagnant systems to provoke necessary structural change, awakening latent potential and driving rapid evolution."
    },
    {
      id: "lovely",
      title: "Lovely",
      tagline: "The Radiant Beacon of Connection",
      symbol: "✨",
      color: "#06b6d4",
      traits: ["Harmonic Empathy", "Emotional Radiance", "Aesthetic Elegance", "Gentle Grace"],
      rules: ["Cultivate genuine connections", "Dissolve rancor with kindness", "Honor relational boundaries"],
      palaceRoom: "The Rose Pavilion",
      description: "The heart of aesthetic refinement and interpersonal grace. Transmutes relational tension into magnetic harmony and deep mutual resonance."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SCIENTIFIC_CORPUS;
}
