// Set the footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight the nav item for the current page
var path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.links a').forEach(function (a) {
  if (a.getAttribute('href') === path) {
    a.style.color = 'var(--accent)';
    a.style.fontWeight = '600';
  }
});
