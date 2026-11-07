// ============================================================
// Article data: to publish a new post, add an entry to the ARTICLES array.
// Fields:
//   id       unique id (lowercase-with-hyphens, used internally)
//   title    post title
//   date     publish date YYYY-MM-DD
//   excerpt  one-line summary shown on the list page
//   content  body (plain HTML is fine, e.g. <p> <ul> <code>)
// ============================================================
const ARTICLES = [
  {
    id: 'privacy-chatbot-notes',
    title: 'Notes on Building a Privacy-Law Vertical Chatbot',
    date: '2026-11-07',
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

// Render the list view
function renderList() {
  var list = document.getElementById('article-list');
  var detail = document.getElementById('article-detail');
  list.hidden = false;
  detail.hidden = true;
  list.innerHTML = '';
  ARTICLES.forEach(function (a) {
    var el = document.createElement('div');
    el.className = 'article-item';
    el.innerHTML =
      '<h3>' + a.title + '</h3>' +
      '<p class="meta">' + a.date + '</p>' +
      '<p class="excerpt">' + a.excerpt + '</p>';
    el.addEventListener('click', function () { renderDetail(a.id); });
    list.appendChild(el);
  });
}

// Render the detail view
function renderDetail(id) {
  var a = ARTICLES.find(function (x) { return x.id === id; });
  if (!a) return;
  var list = document.getElementById('article-list');
  var detail = document.getElementById('article-detail');
  list.hidden = true;
  detail.hidden = false;
  detail.innerHTML =
    '<a class="back" href="#" onclick="renderList();return false;">← Back to list</a>' +
    '<h2>' + a.title + '</h2>' +
    '<p class="meta">' + a.date + '</p>' +
    a.content;
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', renderList);
