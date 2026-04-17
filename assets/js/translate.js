/**
 * translate.js — English ⇄ Hindi toggle for GitHub Pages
 * 
 * HOW TO USE:
 *  1. Drop this file in your project (e.g. /assets/js/translate.js)
 *  2. Add data-translate="true" to any element whose text you want translated
 *  3. Include this script at the bottom of your index.html <body>
 *  4. Add a toggle button with id="lang-toggle" anywhere in your HTML
 *  5. Bump CACHE_VERSION whenever you update your page content
 *
 * EXAMPLE HTML:
 *   <h1 data-translate="true">Welcome to My Project</h1>
 *   <p data-translate="true">This is my landing page description.</p>
 *   <button id="lang-toggle">🌐 हिन्दी</button>
 *   <script src="assets/js/translate.js"></script>
 */

const Translator = (() => {

  // ─── CONFIG ────────────────────────────────────────────────────────────────
  // Bump this string any time you edit your page content — clears old cache
  const CACHE_VERSION = 'v1';
  const CACHE_KEY     = `hin_translations_${CACHE_VERSION}`;
  const LANG_KEY      = 'preferred_lang';
  const API_BASE      = 'https://api.mymemory.translated.net/get';
  // ───────────────────────────────────────────────────────────────────────────

  let currentLang  = 'en';
  let translations = {}; // { originalText: hindiText }
  let isLoading    = false;

  // ── Collect all translatable elements ──────────────────────────────────────
  function getTranslatableElements() {
    return [...document.querySelectorAll('[data-translate="true"]')];
  }

  // ── Extract the direct text content of an element (not children) ───────────
  function getTextContent(el) {
    return [...el.childNodes]
      .filter(n => n.nodeType === Node.TEXT_NODE)
      .map(n => n.textContent.trim())
      .join(' ')
      .trim();
  }

  // ── Replace direct text node content ───────────────────────────────────────
  function setTextContent(el, newText, originalText) {
    let replaced = false;
    el.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        if (!replaced) {
          node.textContent = ' ' + newText + ' ';
          replaced = true;
        } else {
          node.textContent = '';
        }
      }
    });
    // Store original so we can restore
    if (!el.dataset.original) el.dataset.original = originalText;
  }

  // ── Translate a single string via MyMemory API ─────────────────────────────
  async function fetchTranslation(text) {
    const url = `${API_BASE}?q=${encodeURIComponent(text)}&langpair=en|hi`;
    const res  = await fetch(url);
    const data = await res.json();
    if (data.responseStatus === 200) {
      return data.responseData.translatedText;
    }
    throw new Error(data.responseDetails || 'Translation failed');
  }

  // ── Translate all elements (with concurrency control) ─────────────────────
  async function translateAll() {
    const elements = getTranslatableElements();
    const toFetch  = [];

    // Figure out which texts aren't cached yet
    elements.forEach(el => {
      const text = getTextContent(el);
      if (text && !translations[text]) {
        toFetch.push(text);
      }
    });

    // Deduplicate
    const unique = [...new Set(toFetch)];

    if (unique.length > 0) {
      setToggleState('loading');

      // Fetch in batches of 5 to avoid rate limits
      const BATCH = 5;
      for (let i = 0; i < unique.length; i += BATCH) {
        const batch = unique.slice(i, i + BATCH);
        await Promise.all(
          batch.map(async text => {
            try {
              translations[text] = await fetchTranslation(text);
            } catch (e) {
              console.warn(`[Translator] Could not translate: "${text}"`, e);
              translations[text] = text; // Fallback to original
            }
          })
        );
      }

      // Persist to localStorage
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(translations));
      } catch (e) {
        console.warn('[Translator] Could not save to localStorage:', e);
      }
    }

    // Apply translations to DOM
    elements.forEach(el => {
      const original = el.dataset.original || getTextContent(el);
      const hindi    = translations[original];
      if (hindi) setTextContent(el, hindi, original);
    });
  }

  // ── Restore all elements to English ───────────────────────────────────────
  function restoreAll() {
    getTranslatableElements().forEach(el => {
      if (el.dataset.original) {
        setTextContent(el, el.dataset.original, el.dataset.original);
      }
    });
  }

  // ── Toggle button UI states ────────────────────────────────────────────────
  function setToggleState(state) {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    if (state === 'loading') {
      btn.disabled    = true;
      btn.textContent = '⏳ Translating…';
    } else if (state === 'hindi') {
      btn.disabled    = false;
      btn.textContent = '🌐 English';
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.disabled    = false;
      btn.textContent = '🌐 हिन्दी';
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  // ── Main toggle handler ────────────────────────────────────────────────────
  async function toggle() {
    if (isLoading) return;
    isLoading = true;

    if (currentLang === 'en') {
      await translateAll();
      currentLang = 'hi';
      setToggleState('hindi');
      document.documentElement.lang = 'hi';
      try { localStorage.setItem(LANG_KEY, 'hi'); } catch (_) {}
    } else {
      restoreAll();
      currentLang = 'en';
      setToggleState('english');
      document.documentElement.lang = 'en';
      try { localStorage.setItem(LANG_KEY, 'en'); } catch (_) {}
    }

    isLoading = false;
  }

  // ── Load cache from localStorage ──────────────────────────────────────────
  function loadCache() {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) translations = JSON.parse(cached);
    } catch (_) {
      translations = {};
    }
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  function init() {
    loadCache();

    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', toggle);
      btn.setAttribute('aria-pressed', 'false');
    } else {
      console.warn('[Translator] No element with id="lang-toggle" found.');
    }

    // Restore last preferred language on page load
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved === 'hi') toggle(); // auto-switch if user preferred Hindi
    } catch (_) {}
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { toggle, clearCache: () => localStorage.removeItem(CACHE_KEY) };

})();
