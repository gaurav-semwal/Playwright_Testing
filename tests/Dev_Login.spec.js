import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://dev.anhadfashions.com/admin/login");
  await page
    .getByRole("textbox", { name: "Enter Phone number / Email" })
    .click();
  await page
    .getByRole("textbox", { name: "Enter Phone number / Email" })
    .fill("admin@admin.com");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("12345678");
  await page.getByRole("button", { name: "Login" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Visit Website" }).click();
  const page1 = await page1Promise;
  await page1.getByRole("link", { name: "System Admin" }).click();
  await page1.getByRole("link", { name: "Logout" }).click();
}); 
