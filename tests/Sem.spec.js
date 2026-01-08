import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.locator("body").click();
  await page.goto("https://github.com/gaurav-semwal");
  await page.getByRole("button", { name: "Platform" }).click();
  await page.getByRole("link", { name: "Git_Practice" }).click();
  await page.locator("#loginusername").click();
  await page.getByRole("button", { name: "Log in" }).click();
  await page.close();
});
