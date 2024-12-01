import fs from "fs";
import path from "path";

// test that the HTML file links to the CSS and JS files
test("HTML file should link to CSS and JS files", () => {
  const html = fs.readFileSync(path.resolve("workshop/index.html"), "utf8");
  expect(html).toMatch(/<link rel="stylesheet" href="styles.css">/);
  expect(html).toMatch(/<script type="module" src="main.js"><\/script>/);
});

// test that the CSS file contains specific styles
test("CSS file should contain specific styles", () => {
  const css = fs.readFileSync(path.resolve("workshop/styles.css"), "utf8");
  expect(css).toMatch(/text-align: center;/);
  expect(css).toMatch(/color: blue;/);
});

// test that the JS file contains a console log
test("JS file should contain console log", () => {
  const js = fs.readFileSync(path.resolve("workshop/main.js"), "utf8");
  expect(js).toMatch(/console\.log\('Hello World'\);/);
});
