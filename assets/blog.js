const themeButton = document.querySelector('.theme-toggle');
const root        = document.documentElement;

function syncTheme() {
  const dark = root.dataset.theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? '화이트 모드로 전환' : '다크 모드로 전환');
  themeButton.querySelector('.theme-label').textContent = dark ? '화이트' : '다크';
}
syncTheme();
themeButton.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('blog-theme', root.dataset.theme); } catch (_) {}
  syncTheme();
});

const legacyCategories = { ai: 'ai', notes: 'journal', engineering: 'programming', data: 'ai' };
if (location.pathname === '/' && legacyCategories[location.hash.slice(1)]) {
  location.replace(`/categories/${legacyCategories[location.hash.slice(1)]}/`);
}
const selectedSubcategory = document.querySelector('.subcategory-nav [aria-current]');
if (selectedSubcategory) {
  const nav = selectedSubcategory.parentElement;
  nav.scrollLeft = Math.max(0, selectedSubcategory.offsetLeft - nav.offsetLeft - 24);
}
const submenuShell      = document.querySelector('.submenu-shell');
const activeTopCategory = document.querySelector('.categories a[aria-current="page"]');
if (submenuShell && activeTopCategory) {
  const alignSubmenu = () => {
    const shellBounds  = submenuShell.getBoundingClientRect();
    const activeBounds = activeTopCategory.getBoundingClientRect();
    const submenuWidth = submenuShell.querySelector('.subcategory-nav').getBoundingClientRect().width;
    const desiredLeft  = activeBounds.left - shellBounds.left;
    const safeLeft     = Math.max(0, Math.min(desiredLeft, shellBounds.width - submenuWidth));
    submenuShell.style.setProperty('--submenu-left', safeLeft + 'px');
  };
  alignSubmenu();
  window.addEventListener('resize', alignSubmenu);
}
