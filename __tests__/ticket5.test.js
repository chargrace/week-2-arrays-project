import fs from "fs";
import path from "path";
import { jest } from "@jest/globals";

const mainJsPath = path.resolve("workshop/main.js");

describe("Cookie Order Multiplication", () => {
  let sandbox;

  beforeEach(() => {
    sandbox = {
      console: { log: jest.fn() },
      cookiesOrdered: [15, 3, 67, 1, 22, 100],
    };
    const code = fs.readFileSync(mainJsPath, "utf8");
    const script = new Function("sandbox", `with(sandbox) { ${code} }`);
    script(sandbox);
  });

  test("multiplies all cookie orders by 10", () => {
    expect(sandbox.cookiesOrdered).toEqual([150, 30, 670, 10, 220, 1000]);
  });

  test("logs the modified array to console", () => {
    expect(sandbox.console.log).toHaveBeenCalledWith([
      150, 30, 670, 10, 220, 1000,
    ]);
  });
});
