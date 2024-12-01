import fs from 'fs';
import path from 'path';

const mainJsPath = path.resolve('workshop/main.js');

// Helper function to execute the main.js file in a sandboxed environment
const executeMainJs = () => {
  const code = fs.readFileSync(mainJsPath, 'utf8');
  const sandbox = { console: { log: jest.fn() }, Array };
  const script = new Function('sandbox', `with (sandbox) { ${code} }`);
  script(sandbox);
  return sandbox;
};

// Test that the second favorite song is logged to the console
test('second favorite song is logged to the console', () => {
  const sandbox = executeMainJs();
  expect(sandbox.console.log).toHaveBeenCalledWith(sandbox.songs[1]);
});

// Test that the most favorite song is logged to the console
test('most favorite song is logged to the console', () => {
  const sandbox = executeMainJs();
  expect(sandbox.console.log).toHaveBeenCalledWith(sandbox.songs[0]);
});