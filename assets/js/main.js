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
