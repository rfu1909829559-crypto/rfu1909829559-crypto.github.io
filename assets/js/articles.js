// ============================================================
// Article data. To publish a new post, add an entry to ARTICLES.
// Fields:
//   id        unique id (lowercase-with-hyphens)
//   title     post title
//   date      publish date YYYY-MM-DD
//   category  one of the keys in CATEGORIES (e.g. 'privacy')
//   featured  true/false — shown on Home and under "Featured Essays"
//   excerpt   one-line summary for the list page
//   content   body (plain HTML is fine, e.g. <p> <ul> <code>)
// ============================================================

const CATEGORIES = {
  featured:     { label: 'Featured Essays',    title: 'Featured Essays' },
  privacy:      { label: 'Privacy',           title: 'Privacy' },
  'ai-society': { label: 'AI & Society',      title: 'AI & Society' },
  security:     { label: 'Security',          title: 'Security' },
  news:         { label: 'News & Commentary', title: 'News & Commentary' },
  explainers:   { label: 'Quick Explainers',  title: 'Quick Explainers' },
};

// Nav order for category links
const CATEGORY_ORDER = ['featured', 'privacy', 'ai-society', 'security', 'news', 'explainers'];

const ARTICLES = [
  {
    id: 'privacy-chatbot-notes',
    title: 'Notes on Building a Privacy-Law Vertical Chatbot',
    date: '2026-11-07',
    category: 'privacy',
    featured: true,
    excerpt: '20 privacy laws from different countries — no fine-tuning, just RAG: a small model interprets vague requests while retrieval picks the right articles.',
    content: `
      <p>Key takeaway: this scenario does not need an advanced model. Turn the laws into a retrievable article corpus; when a user asks, a lightweight model first parses the vague request into a structured query, then hybrid retrieval + re-ranking runs, and finally cited articles are generated.</p>
      <p>The site provides the foundation first; the chatbot can later be embedded into the Demos page via an iframe or mount script, fully decoupled.</p>
      <p>Two entry points — an AI text mode (automatic parsing) and a manual dropdown filter (country → scenario → action) — converge at the "structured query" step and then share the same retrieval pipeline.</p>
    `
  },
  {
    id: 'rag-vs-finetune',
    title: 'RAG or Fine-tuning? Choosing with a Small Corpus',
    date: '2026-10-30',
    category: 'ai-society',
    featured: true,
    excerpt: 'With only ~20 legal documents, fine-tuning is low ROI; RAG is plug-and-play and naturally explainable and traceable.',
    content: `
      <p>When you hold "a few dozen authoritative documents" rather than "massive training data", RAG is almost the default choice:</p>
      <ul>
        <li>Plug-and-play: edit the docs and rebuild the index — no retraining.</li>
        <li>Explainable: it returns the real article text + article number, fully traceable, no hallucination.</li>
        <li>Low cost: the model only "understands + explains", so it doesn't need to be large.</li>
      </ul>
      <p>Fine-tuning is only worth considering when "off-the-shelf models genuinely can't parse your domain jargon" — and it needs labeled data, which is a sizable engineering effort.</p>
    `
  }
];

// ---- helpers ----

// Read the active category from the URL (?cat=...), default to 'featured'
function getCat() {
  var params = new URLSearchParams(location.search);
  var c = params.get('cat');
  return CATEGORIES[c] ? c : 'featured';
}

// Articles belonging to a category
function articlesForCat(cat) {
  if (cat === 'featured') return ARTICLES.filter(function (a) { return a.featured; });
  return ARTICLES.filter(function (a) { return a.category === cat; });
}

// Render a list of articles into a container element
function renderArticles(container, list) {
  container.innerHTML = '';
  if (!list.length) {
    container.innerHTML = '<p class="lead">No posts yet — check back soon.</p>';
    return;
  }
  list.forEach(function (a) {
    var el = document.createElement('div');
    el.className = 'article-item';
    el.innerHTML =
      '<h3>' + a.title + '</h3>' +
      '<p class="meta">' + a.date + '</p>' +
      '<p class="excerpt">' + a.excerpt + '</p>';
    el.addEventListener('click', function () { renderDetail(a.id); });
    container.appendChild(el);
  });
}

// Render the list view for a category page
function renderList() {
  var cat = getCat();
  var listEl = document.getElementById('article-list');
  var detailEl = document.getElementById('article-detail');
  var titleEl = document.getElementById('category-title');
  if (titleEl) titleEl.textContent = CATEGORIES[cat].title;
  listEl.hidden = false;
  detailEl.hidden = true;
  renderArticles(listEl, articlesForCat(cat));
}

// Render a small preview (e.g., the Featured Essays section on Home)
function renderPreview(containerId, limit) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var list = ARTICLES.filter(function (a) { return a.featured; }).slice(0, limit || 4);
  renderArticles(container, list);
}

// Render the detail view for a single article
function renderDetail(id) {
  var a = ARTICLES.find(function (x) { return x.id === id; });
  if (!a) return;
  var listEl = document.getElementById('article-list');
  var detailEl = document.getElementById('article-detail');
  listEl.hidden = true;
  detailEl.hidden = false;
  detailEl.innerHTML =
    '<a class="back" href="#" onclick="renderList();return false;">← Back to list</a>' +
    '<h2>' + a.title + '</h2>' +
    '<p class="meta">' + a.date + '</p>' +
    a.content;
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('article-list')) renderList();
  if (document.getElementById('featured-preview')) renderPreview('featured-preview', 4);
});
