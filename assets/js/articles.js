// ============================================================
// Article data. To publish a new post, add an entry to ARTICLES.
// Fields:
//   id        unique id (lowercase-with-hyphens)
//   title     post title (rendered as the page H1 in detail view)
//   date      publish date YYYY-MM-DD
//   category  one of the keys in CATEGORIES (e.g. 'privacy')
//   featured  true/false — shown on Home and under "Featured Essays"
//   excerpt   one-line summary for the list page
//   tags      optional array of strings (rendered as chips in detail view)
//   content   body in MARKDOWN. The H1 title is the `title` field above,
//             so start the body AFTER the heading (e.g. with a subtitle).
//             GitHub-style callouts "> [!NOTE]" are supported.
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
    id: 'what-privacy-really-means',
    title: 'What Privacy Really Means',
    date: '2026-11-07',
    category: 'privacy',
    featured: true,
    excerpt: 'Privacy is often misunderstood as secrecy or anonymity. Modern privacy research suggests a different perspective centered on context, control, and inference.',
    tags: ['Privacy', 'Security', 'Data Protection', 'Differential Privacy'],
    content: `
*Beyond Secrecy, Security, and Anonymity*

**Estimated Reading Time:** 7 min
**Level:** Beginner to Intermediate
**Topics:** Privacy, Security, Contextual Integrity, Differential Privacy

> [!NOTE]
> ### Why This Matters
>
> Many people think privacy means hiding information.
>
> Modern privacy research suggests something different.
>
> Privacy is often about controlling who can learn what, under which circumstances, and for what purpose.
>
> A system can be perfectly secure and still violate privacy. Data can be anonymized and still reveal identities. Information can be legally shared and still cause harm.
>
> Understanding these distinctions is the first step toward understanding modern privacy technologies such as Differential Privacy.
> **Personal Perspective**
>
> One of the biggest misconceptions about privacy is that it can be solved simply by hiding information. The more I studied modern privacy systems, the more I realized that privacy is fundamentally about controlling information flows and limiting what others can infer.

---

Most people think privacy is simple.
Do not share personal information. Hide sensitive details. Remove names from datasets. Use stronger passwords.
Problem solved.
Unfortunately, modern privacy incidents suggest otherwise.
A dataset can contain no names and still reveal identities. A system can be perfectly secure and still violate privacy. Information can be shared legally and still cause harm.
The problem is that privacy is often confused with several related, but fundamentally different, concepts.
Over the past few decades, privacy researchers, engineers, and policymakers have gradually moved away from the idea that privacy is simply about keeping secrets. Instead, privacy has increasingly been understood as a problem of control, inference, context, and social expectations.
This shift changes how we think about data, technology, and the systems that surround us.

## Privacy and Security Are Not the Same Thing

Privacy and security are often treated as if they were identical.
They are not.
A useful way to think about the difference is to imagine a chessboard.
The pieces represent data.
Security focuses on preventing someone from taking your pieces through unfair means.
Security asks questions such as:

- Can an attacker break into the system?
- Can someone bypass authorization controls?
- Can information be stolen?
- Can encryption be defeated?

In short, security is concerned with **unauthorized access**.
Privacy is concerned with a different problem.
It assumes that some information may already be shared, visible, or legitimately accessible.
The question then becomes:

- What can be learned from that data?
- Who is allowed to access it?
- How much should they be able to infer?
- Did the individual expect this use?

A company can build excellent cybersecurity defenses and still create serious privacy problems if it collects excessive information, shares data unexpectedly, or enables invasive forms of inference.
A simple summary is:

> Security protects data.
>
> Privacy protects meaning.

Security prevents information from being stolen.
Privacy prevents people from learning more than they should.

## Privacy Violations and Privacy Harm

Another common misunderstanding is the assumption that every privacy violation automatically causes harm.
Not necessarily.
Privacy researchers often distinguish between **privacy violations** and **privacy harms**.
A privacy violation occurs when information is collected, analyzed, monitored, or shared in ways that violate reasonable privacy expectations, legal requirements, or social norms.
A privacy harm is the actual negative consequence that may result from those actions.
Examples include:

- Identity theft
- Financial loss
- Discrimination
- Harassment
- Reputational damage
- Psychological distress

This distinction matters because violations and harms do not always occur together.
For example, a company may collect location data without meaningful consent. That action may already represent a privacy violation even if nobody experiences immediate damage.
However, if the information is later leaked, sold, or used to make important decisions about individuals, privacy harms may follow.
Good privacy practices therefore aim to prevent both inappropriate data collection and the harms that may emerge later.

## Privacy Depends on Context

Many people think information is either private or public.
Reality is rarely that simple.
Imagine showing a student ID card to a classmate.
The classmate already knows which university you attend. Very little new information is revealed.
Now imagine posting the same image online.
The university name may suddenly reveal where you live, study, or spend most of your time.
The information has not changed.
The audience has.
This idea lies at the heart of Helen Nissenbaum's theory of **Contextual Integrity**.
According to this framework, privacy is not determined solely by the sensitivity of information itself.
Instead, privacy depends on whether information flows match the expectations of a particular social context.
The same location data may be perfectly acceptable when used by a navigation application.
The same location data may also be acceptable when shared with a physician.
The same data may feel inappropriate when sold to advertisers.
And most people would strongly object if it were made available to strangers.
The data remains the same.
The context changes.
Privacy is therefore less about hiding information and more about governing how information moves between people, organizations, and systems.

## Why Anonymous Data Is Often Not Anonymous

For many years, organizations believed privacy could be protected simply by removing names from datasets.
If direct identifiers were removed, the data was assumed to be anonymous.
The famous Netflix Prize dataset demonstrated why that assumption was incomplete.
In 2006, Netflix released a large dataset of movie ratings to support recommendation-system research.
Names, email addresses, and other direct identifiers were already removed.
At first glance, the dataset appeared anonymous.
Researchers later demonstrated that some users could still be re-identified by combining the Netflix dataset with publicly available movie ratings from IMDb.
The lesson was important.
People are not identified only by names.
They can often be identified by patterns.
Examples include:

- Movie preferences
- Travel histories
- Shopping habits
- Web searches
- Social relationships

Each individual piece of information may appear harmless.
Together, those pieces can become surprisingly unique.
Modern privacy research increasingly recognizes that anonymity does not depend solely on what is released.
It also depends on what an attacker may already know.

## When Privacy Meets Public Interest

Privacy becomes even more complicated when information serves a broader public purpose.
The debate surrounding the right to be forgotten illustrates this tension.
Many people believe individuals should be allowed to move beyond mistakes from the past.
Digital records can persist indefinitely, long after the original event has lost relevance.
Yet there are situations where society has a legitimate interest in preserving certain information.
Examples include:

- Corruption records of public officials
- Misconduct by influential executives
- Criminal histories relevant to public safety

This raises a difficult question:

> When does personal information become information that serves the public interest?

Influence appears to be one important factor.
Political leaders, business executives, public figures, and celebrities often affect the opportunities and decisions of others.
As a result, societies frequently impose stronger expectations of transparency upon them.
At the same time, public attention itself creates influence.
Media coverage, online platforms, and social networks amplify visibility.
Influence attracts attention.
Attention creates influence.
The two reinforce each other.
Because of this dynamic, privacy rights and public interests rarely have a clean boundary between them.
The debate is often not about whether information exists.
The debate is about how long information should continue to shape public judgment.

## Privacy Is Ultimately About Control

Across all of these examples, a common theme emerges.
Privacy is not primarily about secrecy.
Most people willingly share information every day.
They use navigation apps.
They participate in social media.
They communicate through digital platforms.
They carry connected devices everywhere.
The question is not whether information is shared.
The question is whether people maintain meaningful control over how information is used.

- Who can access it?
- What conclusions can be drawn from it?
- Can it be combined with other datasets?
- Can individuals influence these decisions?

Privacy problems often emerge when that control disappears.
When information travels beyond its intended context.
When systems draw conclusions people never expected.
When simple facts become tools for powerful inference.
Privacy is therefore better understood as a question of control, context, and inference rather than a simple effort to keep information hidden.

## Looking Ahead

The evolution of privacy research reflects a broader reality.
Modern information systems are increasingly capable of learning surprising amounts from seemingly ordinary data.
Names are not always necessary.
Direct identifiers are not always necessary.
Sometimes only a handful of statistics are enough.
This realization eventually led researchers to ask a new question:

> What guarantees can we provide even when data is released?

That question became one of the motivations behind the development of **Differential Privacy**, a privacy framework that attempts to limit what can be learned about individuals while still allowing useful analysis of datasets.
That story deserves its own article.

## Further Reading

- Calo, R. (2011). *The Boundaries of Privacy Harm*.
- Nissenbaum, H. (2010). *Privacy in Context: Technology, Policy, and the Integrity of Social Life*.
- Narayanan, A., & Shmatikov, V. (2008). *Robust De-anonymization of Large Sparse Datasets*.
- Dwork, C. (2006). *Differential Privacy*.

## Author's Note

The ideas, examples, and perspectives presented in this article originate from the author's independent study and reflections on privacy, security, and information systems.
Generative AI was used to assist with drafting, editing, language refinement, and structural organization. The author reviewed and approved all content and remains responsible for the final arguments, interpretations, and conclusions.
`
  },
  {
    id: 'privacy-chatbot-notes',
    title: 'Notes on Building a Privacy-Law Vertical Chatbot',
    date: '2026-11-07',
    category: 'privacy',
    featured: true,
    excerpt: '20 privacy laws from different countries — no fine-tuning, just RAG: a small model interprets vague requests while retrieval picks the right articles.',
    tags: ['Privacy', 'RAG', 'LLM'],
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
    tags: ['AI', 'RAG', 'Fine-tuning'],
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

// ---- markdown rendering ----

// Render markdown to HTML. Supports GitHub-style "> [!NOTE]" callouts.
function renderMarkdown(md) {
  if (typeof marked === 'undefined') {
    // Fallback: if the markdown library failed to load, show raw text safely.
    var pre = document.createElement('pre');
    pre.textContent = md;
    return pre.outerHTML;
  }
  var html = marked.parse(md, { gfm: true, breaks: false });
  // Convert "> [!NOTE]" blockquotes into styled callout divs
  html = html.replace(
    /<blockquote>\s*<p>\[!NOTE\]<\/p>([\s\S]*?)<\/blockquote>/g,
    '<div class="callout note">$1</div>'
  );
  return html;
}

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
    el.addEventListener('click', function () { location.href = 'articles.html?id=' + a.id; });
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

// Render a single article's tags as chips
function renderTags(tags) {
  if (!tags || !tags.length) return '';
  var chips = tags.map(function (t) {
    return '<span class="tag">' + t + '</span>';
  }).join('');
  return '<div class="tags">' + chips + '</div>';
}

// Render the detail view for a single article
function renderDetail(id) {
  var a = ARTICLES.find(function (x) { return x.id === id; });
  if (!a) return;
  var listEl = document.getElementById('article-list');
  var detailEl = document.getElementById('article-detail');
  if (listEl) listEl.hidden = true;
  if (!detailEl) { return; }
  detailEl.hidden = false;
  detailEl.innerHTML =
    '<a class="back" href="#" onclick="renderList();return false;">← Back to list</a>' +
    '<h1 class="article-title">' + a.title + '</h1>' +
    '<p class="meta">' + a.date + '</p>' +
    renderTags(a.tags) +
    '<div class="article-body">' + renderMarkdown(a.content) + '</div>';
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('article-list')) {
    // Deep-link support: articles.html?id=... opens a specific article
    var idParam = new URLSearchParams(location.search).get('id');
    if (idParam && ARTICLES.some(function (x) { return x.id === idParam; })) {
      renderDetail(idParam);
    } else {
      renderList();
    }
  }
  if (document.getElementById('featured-preview')) renderPreview('featured-preview', 4);
});
