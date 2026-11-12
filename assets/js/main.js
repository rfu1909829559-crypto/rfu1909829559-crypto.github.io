// Set the footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight the nav item for the current page
var path = location.pathname.split('/').pop() || 'index.html';
var current = path + (location.search || '');
document.querySelectorAll('.links a').forEach(function (a) {
  if (a.getAttribute('href') === current) {
    a.style.color = 'var(--accent)';
    a.style.fontWeight = '600';
  }
});

// ---- Homepage Daily Digest: render from assets/data/digest.json ----
function escDigest(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}
(function renderDigest() {
  var list = document.getElementById('digest-list');
  if (!list) return; // only present on the homepage
  var dateEl = document.getElementById('digest-date');
  fetch('assets/data/digest.json?t=' + Date.now())
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (dateEl && data.updated) dateEl.textContent = 'Last updated: ' + data.updated;
      var items = data.items || [];
      if (!items.length) { list.innerHTML = '<p class="excerpt">No digest available yet.</p>'; return; }
      list.innerHTML = items.map(function (it, i) {
        return '<div class="article-item">' +
          '<h3>' + (i + 1) + '. ' + escDigest(it.title) + '</h3>' +
          (it.source ? '<p class="meta">' + escDigest(it.source) + '</p>' : '') +
          (it.summary ? '<p class="excerpt">' + escDigest(it.summary) + '</p>' : '') +
          (it.impact ? '<p class="excerpt"><strong>Impact:</strong> ' + escDigest(it.impact) + '</p>' : '') +
          (it.url ? '<a class="source-link" href="' + escDigest(it.url) + '" target="_blank" rel="noopener">Read original →</a>' : '') +
          '</div>';
      }).join('');
    })
    .catch(function () { list.innerHTML = '<p class="excerpt">Digest temporarily unavailable.</p>'; });
})();
