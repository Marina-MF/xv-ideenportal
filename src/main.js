import xvLogoUrl from '/xv-logo.png?url'

// ── Formspree Config ────────────────────────────────────────
const FORMSPREE_URL = 'https://formspree.io/f/xjgaaykr';

// ── Data & Config ───────────────────────────────────────────
const DEPARTMENTS = [
  'Media',
  'AdOps',
  'adbase',
  'Marketing',
  'Sales',
  'HR',
  'Finance',
  'Geschäftsführung',
  'IT',
];

const ORIGINS = [
  'Nutzerfeedback',
  'Bestehender Kunde',
  'Eigene Idee',
  'Marktbeobachtung',
  'Sonstiges',
];

const CATEGORIES = [
  'Allgemein',
  'OOH',
  'DOOH',
  'Online',
  'Print',
  'Kino',
  'Radio',
  'TV',
  'Sonstiges',
];

const PRIORITIES = ['Niedrig', 'Mittel', 'Hoch'];

// ── SVG Icons (single-color, 20x20) ────────────────────────
const ICONS = {
  lightbulb: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>`,
  person: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
  origin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>`,
  category: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  idea: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  settings: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  upload: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  file: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  clipboard: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
};

// ── Helpers ─────────────────────────────────────────────────
function buildOptions(items, placeholder) {
  return `<option value="" disabled selected>${placeholder}</option>`
    + items.map(i => `<option value="${i}">${i}</option>`).join('');
}

function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ── Storage (simulated) ─────────────────────────────────────
function getStoredIdeas() {
  try {
    return JSON.parse(localStorage.getItem('xv_ideas') || '[]');
  } catch {
    return [];
  }
}

function storeIdea(idea) {
  const ideas = getStoredIdeas();
  ideas.push(idea);
  localStorage.setItem('xv_ideas', JSON.stringify(ideas));
  console.info('[Ideenportal] Gespeicherte Idee:', idea);
  return idea;
}

// ── App State ───────────────────────────────────────────────
let currentView = 'form'; // 'form' | 'confirmation'
let selectedFile = null;

// ── Render ──────────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="app-wrapper">
      ${renderHeader()}
      <main class="main-content">
        ${currentView === 'form' ? renderForm() : renderConfirmation()}
      </main>
      ${renderFooter()}
    </div>
  `;
  if (currentView === 'form') {
    bindFormEvents();
  } else {
    bindConfirmationEvents();
  }
}

// ── Header ──────────────────────────────────────────────────
function renderHeader() {
  return `
    <header class="app-header">
      <div class="header-inner">
        <div class="header-logo">
          <span class="header-logo-emoji">\uD83D\uDCA1</span>
          Ideenportal
        </div>
        <span class="header-badge">Intern</span>
      </div>
    </header>
  `;
}

// ── Footer ──────────────────────────────────────────────────
function renderFooter() {
  return `
    <footer class="app-footer">
      crossvertise Ideenportal &middot; Deine Ideen z\u00e4hlen!
    </footer>
  `;
}

// ── Form View ───────────────────────────────────────────────
function renderForm() {
  return `
    <div class="hero">
      <div class="hero-icon xv-logo">
        <img src="${xvLogoUrl}" alt="crossvertise" width="56" height="56" />
      </div>
      <h1>Teile deine Idee mit uns</h1>
      <p>Hilf uns, unsere Plattform weiterzuentwickeln. Jeder Vorschlag wird vom Product Team gepr\u00fcft.</p>
    </div>

    <form id="ideaForm" novalidate>
      <!-- Section 1: Person -->
      <div class="form-section">
        <div class="section-header">
          <div class="section-icon">${ICONS.person}</div>
          <div>
            <div class="section-title">\u00DCber dich</div>
            <div class="section-subtitle">Wer reicht die Idee ein?</div>
          </div>
        </div>
        <div class="field-grid">
          <div class="field-group" data-field="name">
            <label class="field-label" for="name">Name <span class="required">*</span></label>
            <input type="text" id="name" name="name" placeholder="z.\u00a0B. Anna M\u00fcller" required />
            <span class="field-error" id="name-error">Bitte gib deinen Namen ein.</span>
          </div>
          <div class="field-group" data-field="abteilung">
            <label class="field-label" for="abteilung">Abteilung <span class="required">*</span></label>
            <select id="abteilung" name="abteilung" required>
              ${buildOptions(DEPARTMENTS, 'Abteilung w\u00e4hlen\u2026')}
            </select>
            <span class="field-error" id="abteilung-error">Bitte w\u00e4hle eine Abteilung.</span>
          </div>
        </div>
      </div>

      <!-- Section 2: Origin -->
      <div class="form-section">
        <div class="section-header">
          <div class="section-icon">${ICONS.origin}</div>
          <div>
            <div class="section-title">Ursprung der Idee</div>
            <div class="section-subtitle">Woher stammt der Input?</div>
          </div>
        </div>
        <div class="field-group" data-field="ursprung">
          <label class="field-label" for="ursprung">Quelle <span class="required">*</span></label>
          <select id="ursprung" name="ursprung" required>
            ${buildOptions(ORIGINS, 'Quelle w\u00e4hlen\u2026')}
          </select>
          <span class="field-error" id="ursprung-error">Bitte w\u00e4hle eine Quelle.</span>
        </div>
      </div>

      <!-- Section 3: Category -->
      <div class="form-section">
        <div class="section-header">
          <div class="section-icon">${ICONS.category}</div>
          <div>
            <div class="section-title">Kategorie</div>
            <div class="section-subtitle">Zu welchem Bereich geh\u00f6rt die Idee?</div>
          </div>
        </div>
        <div class="field-group" data-field="kategorie">
          <label class="field-label" for="kategorie">Bereich <span class="required">*</span></label>
          <select id="kategorie" name="kategorie" required>
            ${buildOptions(CATEGORIES, 'Bereich w\u00e4hlen\u2026')}
          </select>
          <span class="field-error" id="kategorie-error">Bitte w\u00e4hle einen Bereich.</span>
        </div>
      </div>

      <!-- Section 4: Idea Details -->
      <div class="form-section">
        <div class="section-header">
          <div class="section-icon">${ICONS.idea}</div>
          <div>
            <div class="section-title">Deine Idee</div>
            <div class="section-subtitle">Beschreibe deinen Vorschlag</div>
          </div>
        </div>
        <div class="field-group" data-field="titel" style="margin-bottom: 16px;">
          <label class="field-label" for="titel">Titel der Idee <span class="required">*</span></label>
          <input type="text" id="titel" name="titel" placeholder="Kurzer, pr\u00e4gnanter Titel" required />
          <span class="field-error" id="titel-error">Bitte gib einen Titel ein.</span>
        </div>
        <div class="field-group" data-field="beschreibung" style="margin-bottom: 16px;">
          <label class="field-label" for="beschreibung">Beschreibung <span class="required">*</span></label>
          <textarea id="beschreibung" name="beschreibung" rows="4"
            placeholder="Beschreibe kurz deine Idee und welchen Mehrwert sie bringen k\u00f6nnte." required></textarea>
          <span class="field-error" id="beschreibung-error">Bitte beschreibe deine Idee.</span>
        </div>
        <div class="field-group" data-field="problem">
          <label class="field-label" for="problem">Welches Problem wird damit gel\u00f6st? <span class="optional-tag">Optional</span></label>
          <textarea id="problem" name="problem" rows="2"
            placeholder="z.\u00a0B. Nutzer finden Feature X nicht schnell genug."></textarea>
        </div>
      </div>

      <!-- Section 5: Optional -->
      <div class="form-section">
        <div class="section-header">
          <div class="section-icon">${ICONS.settings}</div>
          <div>
            <div class="section-title">Weitere Angaben</div>
            <div class="section-subtitle">Optionale Erg\u00e4nzungen</div>
          </div>
        </div>
        <div class="field-grid">
          <div class="field-group">
            <label class="field-label" for="prioritaet">Priorit\u00e4t <span class="optional-tag">Optional</span></label>
            <select id="prioritaet" name="prioritaet">
              <option value="" disabled selected>Priorit\u00e4t w\u00e4hlen\u2026</option>
              ${PRIORITIES.map(p => `<option value="${p}">${p}</option>`).join('')}
            </select>
          </div>
          <div class="field-group full-width">
            <label class="field-label">Datei oder Screenshot <span class="optional-tag">Optional</span></label>
            <div class="file-upload-area" id="fileUploadArea">
              <input type="file" id="fileInput" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx" hidden />
              <div class="file-upload-icon">${ICONS.upload}</div>
              <div class="file-upload-text">
                Datei hierher ziehen oder <strong>durchsuchen</strong>
              </div>
              <div class="file-upload-hint">PNG, JPG, PDF, DOC bis 10\u00a0MB</div>
            </div>
            <div class="file-preview" id="filePreview">
              <span class="file-preview-icon">${ICONS.file}</span>
              <div class="file-preview-info">
                <div class="file-preview-name" id="fileName"></div>
                <div class="file-preview-size" id="fileSize"></div>
              </div>
              <button type="button" class="file-preview-remove" id="fileRemove" title="Datei entfernen">&times;</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Submit -->
      <div class="submit-area">
        <button type="submit" class="btn-submit" id="submitBtn">
          <span class="btn-text">Idee einreichen</span>
          <span class="spinner"></span>
        </button>
        <span class="submit-hint">Alle mit * markierten Felder sind Pflichtfelder.</span>
      </div>
    </form>
  `;
}

// ── Confirmation View ───────────────────────────────────────
function renderConfirmation() {
  return `
    <div class="confirmation-page">
      <div class="confirmation-icon-wrap">
        <div class="confirmation-icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24l8 8 16-16" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div class="confetti" style="top:50%;left:50%;"></div>
        <div class="confetti" style="top:50%;left:50%;"></div>
        <div class="confetti" style="top:50%;left:50%;"></div>
        <div class="confetti" style="top:50%;left:50%;"></div>
        <div class="confetti" style="top:50%;left:50%;"></div>
        <div class="confetti" style="top:50%;left:50%;"></div>
      </div>

      <h1>Danke f\u00fcr deinen Input!</h1>
      <p class="message">
        Deine Idee wurde erfolgreich \u00fcbermittelt. Unser Product Team pr\u00fcft jeden
        Vorschlag sorgf\u00e4ltig und bewertet, wie wir unsere Plattform weiter
        verbessern k\u00f6nnen.
      </p>

      <div class="next-steps">
        <div class="next-steps-title">${ICONS.clipboard} So geht es weiter</div>
        <ul class="step-list">
          <li class="step-item">
            <span class="step-number">1</span>
            <span>Unser Produktteam sammelt alle Vorschl\u00e4ge und sichtet sie regelm\u00e4\u00dfig.</span>
          </li>
          <li class="step-item">
            <span class="step-number">2</span>
            <span>Vielversprechende Ideen werden priorisiert und in die Roadmap aufgenommen.</span>
          </li>
          <li class="step-item">
            <span class="step-number">3</span>
            <span>Bei R\u00fcckfragen melden wir uns direkt bei dir.</span>
          </li>
        </ul>
      </div>

      <button class="btn-new-idea" id="newIdeaBtn">
        ${ICONS.lightbulb} Neue Idee einreichen
      </button>
    </div>
  `;
}

// ── Form Events ─────────────────────────────────────────────
function bindFormEvents() {
  const form = document.getElementById('ideaForm');
  const fileInput = document.getElementById('fileInput');
  const uploadArea = document.getElementById('fileUploadArea');
  const filePreview = document.getElementById('filePreview');
  const fileRemoveBtn = document.getElementById('fileRemove');

  // File upload – click
  uploadArea.addEventListener('click', () => fileInput.click());

  // File upload – drag & drop
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragging');
  });
  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragging');
  });
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragging');
    if (e.dataTransfer.files.length) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  });

  // File input change
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
      handleFileSelect(fileInput.files[0]);
    }
  });

  // File remove
  fileRemoveBtn.addEventListener('click', () => {
    selectedFile = null;
    fileInput.value = '';
    filePreview.classList.remove('visible');
    uploadArea.style.display = '';
  });

  // Clear errors on input
  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => {
      const group = el.closest('.field-group');
      if (group) {
        group.classList.remove('has-error');
        const error = group.querySelector('.field-error');
        if (error) error.classList.remove('visible');
      }
    });
    el.addEventListener('change', () => {
      const group = el.closest('.field-group');
      if (group) {
        group.classList.remove('has-error');
        const error = group.querySelector('.field-error');
        if (error) error.classList.remove('visible');
      }
    });
  });

  // Submit
  form.addEventListener('submit', handleSubmit);
}

function handleFileSelect(file) {
  const maxSize = 10 * 1024 * 1024; // 10 MB
  if (file.size > maxSize) {
    alert('Die Datei ist zu gro\u00df. Maximale Gr\u00f6\u00dfe: 10\u00a0MB.');
    return;
  }
  selectedFile = file;

  const uploadArea = document.getElementById('fileUploadArea');
  const filePreview = document.getElementById('filePreview');

  uploadArea.style.display = 'none';
  filePreview.classList.add('visible');
  document.getElementById('fileName').textContent = file.name;
  document.getElementById('fileSize').textContent = formatFileSize(file.size);
}

function validateForm(form) {
  const requiredFields = ['name', 'abteilung', 'ursprung', 'kategorie', 'titel', 'beschreibung'];
  let firstError = null;
  let isValid = true;

  requiredFields.forEach(fieldName => {
    const el = form.elements[fieldName];
    const group = el.closest('.field-group');
    const error = document.getElementById(`${fieldName}-error`);

    if (!el.value.trim()) {
      isValid = false;
      group.classList.add('has-error');
      if (error) error.classList.add('visible');
      if (!firstError) firstError = el;
    }
  });

  if (firstError) {
    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstError.focus();
  }

  return isValid;
}

async function sendToFormspree(idea) {
  if (!FORMSPREE_URL) {
    console.warn('[Ideenportal] Kein FORMSPREE_URL konfiguriert – E-Mail wird nicht gesendet.');
    return { ok: true, skipped: true };
  }

  const payload = {
    _subject: `Neue Idee: ${idea.titel}`,
    Name: idea.name,
    Abteilung: idea.abteilung,
    Quelle: idea.ursprung,
    Bereich: idea.kategorie,
    'Titel der Idee': idea.titel,
    Beschreibung: idea.beschreibung,
    'Problem / Kontext': idea.problem,
    'Priorität': idea.prioritaet,
    Dateianhang: idea.dateiName,
    'Eingereicht am': idea.eingereichtAm,
  };

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    console.info('[Ideenportal] Formspree erfolgreich gesendet.');
    return { ok: true };
  } catch (err) {
    console.error('[Ideenportal] Formspree-Fehler:', err);
    return { ok: false, error: err.message };
  }
}

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;

  if (!validateForm(form)) return;

  const btn = document.getElementById('submitBtn');
  btn.classList.add('loading');
  btn.disabled = true;

  // Build data object
  const idea = {
    id: `idea-${Date.now()}`,
    eingereichtAm: new Date().toLocaleString('de-DE', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
    name: form.elements.name.value.trim(),
    abteilung: form.elements.abteilung.value,
    ursprung: form.elements.ursprung.value,
    kategorie: form.elements.kategorie.value,
    titel: form.elements.titel.value.trim(),
    beschreibung: form.elements.beschreibung.value.trim(),
    problem: form.elements.problem.value.trim() || '–',
    prioritaet: form.elements.prioritaet.value || '–',
    dateiName: selectedFile ? selectedFile.name : '–',
    status: 'Neu',
  };

  // Send to Formspree (email)
  const result = await sendToFormspree(idea);

  // Also store in localStorage as backup
  storeIdea(idea);

  if (!result.ok) {
    btn.classList.remove('loading');
    btn.disabled = false;
    alert('Die Idee konnte leider nicht gesendet werden. Bitte versuche es erneut.');
    return;
  }

  // Switch to confirmation
  selectedFile = null;
  currentView = 'confirmation';
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Confirmation Events ─────────────────────────────────────
function bindConfirmationEvents() {
  document.getElementById('newIdeaBtn').addEventListener('click', () => {
    currentView = 'form';
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Init ────────────────────────────────────────────────────
render();
