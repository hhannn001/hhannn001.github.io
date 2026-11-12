const assert = require('node:assert/strict');
const fs     = require('node:fs');
const vm     = require('node:vm');
const path   = require('node:path');

function element(category) {
  const classes = new Set();
  return {
    dataset: { category, filter: category },
    hidden: false,
    attrs: {},
    classes,
    classList: { toggle(name, active) { active ? classes.add(name) : classes.delete(name); } },
    setAttribute(name, value) { this.attrs[name] = value; },
    removeAttribute(name) { delete this.attrs[name]; },
    addEventListener(name, handler) { this[name] = handler; },
    querySelector() { return this.label ??= {}; }
  };
}
const button  = element();
const root    = { dataset: { theme: 'light' } };
const filters = ['all', 'engineering', 'ai', 'notes'].map(element);
const entries = ['engineering', 'ai', 'notes'].map(element);
const count   = {};
const empty   = {};
const stored  = {};
const context = {
  document: {
    documentElement: root,
    querySelector: selector => ({ '.theme-toggle': button, '#post-count': count, '#empty-state': empty })[selector],
    querySelectorAll: selector => selector === '[data-filter]' ? filters : entries
  },
  localStorage: { setItem(key, value) { stored[key] = value; } },
  location: { hash: '' },
  window: { addEventListener(name, handler) { this[name] = handler; } }
};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/blog.js'), 'utf8'), context);
assert.equal(root.dataset.theme, 'light');
button.click();
assert.equal(root.dataset.theme, 'dark');
assert.equal(stored['blog-theme'], 'dark');
assert.equal(button.attrs['aria-pressed'], 'true');
button.click();
assert.equal(root.dataset.theme, 'light');
context.location.hash = '#ai';
context.window.hashchange();
assert.deepEqual(entries.map(entry => entry.hidden), [true, false, true]);
assert(entries[1].classes.has('featured'));
context.location.hash = '#unknown';
context.window.hashchange();
assert(entries.every(entry => !entry.hidden));
assert.equal(count.textContent, '3개의 글');
context.localStorage.setItem = () => { throw new Error('Storage unavailable'); };
assert.doesNotThrow(() => button.click());
console.log('Theme switching, persistence writes, storage fallback, and category filtering passed.');
