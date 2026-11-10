(function () {
  'use strict';

  var root = document.documentElement;
  var toggleBtn = document.getElementById('theme-toggle');

  function getActiveTheme() {
    var current = root.getAttribute('data-theme');
    return current === 'light' ? 'light' : 'dark';
  }

  function syncToggleUI(theme) {
    var isLight = theme === 'light';
    var metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isLight ? '#FAFAFA' : '#090C10');
    }
    if (!toggleBtn) return;
    var nextLabel = isLight ? 'Switch to dark theme' : 'Switch to light theme';
    toggleBtn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    toggleBtn.setAttribute('aria-label', nextLabel);
    toggleBtn.setAttribute('title', nextLabel);
  }

  function setTheme(nextTheme) {
    root.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {
      // Ignore storage errors in restricted environments
    }
    syncToggleUI(nextTheme);
  }

  syncToggleUI(getActiveTheme());

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var nextTheme = getActiveTheme() === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
})();
