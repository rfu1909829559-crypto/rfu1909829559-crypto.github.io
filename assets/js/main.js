// 设置页脚年份
document.getElementById('year').textContent = new Date().getFullYear();

// 高亮当前页面对应的导航项
var path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.links a').forEach(function (a) {
  if (a.getAttribute('href') === path) {
    a.style.color = 'var(--accent)';
    a.style.fontWeight = '600';
  }
});
