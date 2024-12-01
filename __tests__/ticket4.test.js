import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { jest } from "@jest/globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const mainJsPath = path.resolve(__dirname, "../workshop/main.js");

// Helper function to execute the main.js file in a sandboxed environment
const executeMainJs = () => {
  const code = fs.readFileSync(mainJsPath, "utf8");
  const sandbox = { console: { log: jest.fn() }, Array, songs: [] };
  const script = new Function("sandbox", `with (sandbox) { ${code} }`);
  script(sandbox);
  return sandbox;
};

// Test that the fifth song is modified to "Baby Shark" and array is logged
test('fifth song is modified to "Baby Shark" and array is logged', () => {
  const sandbox = executeMainJs();
  expect(sandbox.songs[4]).toBe("Baby Shark");
  expect(sandbox.console.log).toHaveBeenCalledWith(sandbox.songs);
});
