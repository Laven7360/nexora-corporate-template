(function () {
  var saved = null;
  try { saved = localStorage.getItem('nexora-theme'); } catch { /* Storage may be unavailable. */ }
  var theme = saved === 'light' || saved === 'dark' ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();
