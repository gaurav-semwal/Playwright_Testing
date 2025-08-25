const { test, expect } = require("@playwright/test");

test("Home Semwal", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  const pageTitle = await page.title();
  console.log("Page title is:", pageTitle);

  await expect(page).toHaveTitle("STORE");

  const sem = await page.url();
  console.log("Page URL is Semwal", sem);

  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  await page.close();
});
