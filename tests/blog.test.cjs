const assert = require('node:assert/strict');
const fs     = require('node:fs');
const vm     = require('node:vm');
const path   = require('node:path');
const root   = {dataset: {theme: 'light'}};
const attrs  = {};
const label  = {};
const button = {
 setAttribute(name, value) { attrs[name] = value; },
 querySelector() { return label; },
 addEventListener(name, handler) { this[name] = handler; }
};
const saved  = {};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/blog.js'), 'utf8'), {
 document: {documentElement: root, querySelector: () => null, querySelectorAll: selector => selector === '.theme-toggle' ? [button] : []},
 localStorage: {setItem(key, value) { saved[key] = value; }},
 location: {pathname: '/', hash: ''}
});
assert.equal(attrs['aria-pressed'], 'false');
button.click();
assert.equal(root.dataset.theme, 'dark');
assert.equal(saved['blog-theme'], 'dark');
button.click();
assert.equal(root.dataset.theme, 'light');
console.log('Theme interaction passed');
