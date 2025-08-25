// const { test, expect } = require("@playwright/test");

import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  await page.click("id=login2"); //OR
  // await page.locator("id=login2").click();

  await page.fill("#loginusername", "semwal"); //OR
  // await page.locator("#loginusername").fill("semwal");,
  // await page.type('#loginusername', 'Semwal')

  await page.fill("#loginpassword", "test@123");

  await page.click('//button[normalize-space()="Log in"]');

   const logout = await page.locator("(//a[normalize-space()='Log out'])[1]");
    // const logout = await page.click("(//a[normalize-space()='Log out'])[1]");
console.log("CHECKING SEMWAL LOGOUT IS WORKInG OR NOT", logout);

    await expect(logout).toBeVisible();

  await page.close();
});
