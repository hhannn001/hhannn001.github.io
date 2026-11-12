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

const filters = [...document.querySelectorAll('[data-filter]')];
const entries = [...document.querySelectorAll('[data-category]')];

function filterPosts() {
  const key     = location.hash.slice(1);
  const current = filters.some(link => link.dataset.filter === key) ? key : 'all';
  let visible   = 0;
  filters.forEach(link => {
    if (link.dataset.filter === current) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  entries.forEach(entry => {
    entry.hidden = current !== 'all' && entry.dataset.category !== current;
    entry.classList.toggle('featured', !entry.hidden && visible === 0);
    if (!entry.hidden) visible += 1;
  });
  document.querySelector('#post-count').textContent = `${visible}개의 글`;
  document.querySelector('#empty-state').hidden     = visible !== 0;
}
if (filters.length) {
  window.addEventListener('hashchange', filterPosts);
  filterPosts();
}
