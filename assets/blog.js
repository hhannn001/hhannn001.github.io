const themeButtons = document.querySelectorAll('.theme-toggle');
const root         = document.documentElement;

function syncTheme() {
  const dark = root.dataset.theme === 'dark';
  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? '화이트 모드로 전환' : '다크 모드로 전환');
    button.querySelector('.theme-label').textContent = dark ? '화이트' : '다크';
  });
}
syncTheme();
themeButtons.forEach((button) => button.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('blog-theme', root.dataset.theme); } catch (_) {}
  syncTheme();
}));

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
    const desiredLeft  = activeBounds.left + activeBounds.width / 2 - shellBounds.left - submenuWidth / 2;
    const safeLeft     = Math.max(0, Math.min(desiredLeft, shellBounds.width - submenuWidth));
    submenuShell.style.setProperty('--submenu-left', safeLeft + 'px');
  };
  alignSubmenu();
  window.addEventListener('resize', alignSubmenu);
}
const searchForms = document.querySelectorAll('.site-search');
let searchIndex;
searchForms.forEach((form) => {
  const input   = form.querySelector('input');
  const results = form.querySelector('.search-results');
  const close   = () => { results.hidden = true; input.setAttribute('aria-expanded', 'false'); };
  const render  = async () => {
    const query = input.value.trim().toLocaleLowerCase();
    if (!query) { close(); return; }
    try {
      searchIndex ??= fetch(form.dataset.index).then((response) => {
        if (!response.ok) throw new Error('검색 목록을 불러오지 못했습니다.');
        return response.json();
      });
      const posts   = await searchIndex;
      const matches = posts.filter((post) => (post.title + ' ' + post.description).toLocaleLowerCase().includes(query)).slice(0, 8);
      results.replaceChildren();
      if (matches.length) {
        matches.forEach((post) => {
          const link = document.createElement('a');
          link.href  = post.url;
          link.textContent = post.title;
          results.append(link);
        });
      } else {
        const empty = document.createElement('p');
        empty.textContent = '검색 결과가 없습니다.';
        results.append(empty);
      }
      results.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    } catch (_) {
      const error = document.createElement('p');
      error.textContent = '검색 목록을 불러오지 못했습니다.';
      results.replaceChildren(error);
      results.hidden = false;
    }
  };
  input.addEventListener('input', render);
  input.addEventListener('focus', render);
  input.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const first = results.querySelector('a');
    if (first) location.assign(first.href);
  });
  document.addEventListener('click', (event) => { if (!form.contains(event.target)) close(); });
});
