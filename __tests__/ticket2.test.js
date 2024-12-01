import fs from "fs";
import path from "path";

const mainJsPath = path.resolve("workshop/main.js");

// Helper function to execute the main.js file in a sandboxed environment
const executeMainJs = () => {
  const code = fs.readFileSync(mainJsPath, "utf8");
  const sandbox = { console: { log: jest.fn() }, Array };
  const script = new Function("sandbox", `with (sandbox) { ${code} }`);
  script(sandbox);
  return sandbox;
};

// Test that the songs array is created and has the correct length
test("songs array is created and has correct length", () => {
  const sandbox = executeMainJs();
  expect(sandbox.songs).toBeDefined();
  expect(Array.isArray(sandbox.songs)).toBe(true);
  expect(sandbox.songs.length).toBe(5);
});

// Test that the songs array is logged to the console
test("songs array is logged to the console", () => {
  const sandbox = executeMainJs();
  expect(sandbox.console.log).toHaveBeenCalledWith(5);
});

// Test that the Array.isArray method correctly identifies the songs array
test("Array.isArray correctly identifies the songs array", () => {
  const sandbox = executeMainJs();
  expect(sandbox.console.log).toHaveBeenCalledWith(true);
});
