const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
  const text = generateText("Max", 42);
  expect(text).toBe("Max (42 years old)");
});

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 42);
  expect(text).toBe("Max (42 years old)");
});

// test("should click around", async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: ["--window-size=1920, 1080"],
//   });
//   const page = await browser.newPage();
//   await page.goto("http://127.0.0.1:5500/index.html");
//   await page.click("input#name");
//   await page.type("input#name", "Chad");
//   await page.click("input#age");
//   await page.type("input#age", "42");
// });
