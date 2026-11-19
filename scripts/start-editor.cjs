const path  = require('node:path');
const spawn = require('node:child_process').spawn;
const root  = path.resolve(__dirname, '..');
const child = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'dev'], {
  cwd: path.join(root, 'editor'),
  env: { ...process.env, BLOG_WORKSPACE_ROOT: root },
  stdio: 'inherit'
});
child.on('exit', code => process.exit(code ?? 1));
