import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  await page.getByRole("link", { name: "Sign up" }).click();
  await page.getByRole("textbox", { name: "Username:" }).click();
  await page.getByRole("textbox", { name: "Username:" }).fill("semwal");
  await page.getByRole("textbox", { name: "Username:" }).press("Tab");
  await page.getByRole("textbox", { name: "Password:" }).fill("semwal");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByRole("textbox", { name: "Username:" }).click();
  await page.getByRole("textbox", { name: "Username:" }).dblclick();
  await page.getByRole("textbox", { name: "Username:" }).fill("gaurav");
  await page.getByRole("textbox", { name: "Username:" }).press("Tab");
  await page.getByRole("textbox", { name: "Password:" }).fill("semwal");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByRole("textbox", { name: "Username:" }).dblclick();
  await page.getByRole("textbox", { name: "Username:" }).fill("admin");
  await page.getByRole("textbox", { name: "Username:" }).press("Tab");
  await page.getByRole("textbox", { name: "Password:" }).fill("admin");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByRole("textbox", { name: "Password:" }).click();
  await page.getByRole("textbox", { name: "Username:" }).dblclick(); 
  await page.getByRole("textbox", { name: "Username:" }).fill("beesolver");
  await page.getByRole("textbox", { name: "Username:" }).press("Tab");
  await page.getByRole("textbox", { name: "Password:" }).fill("beesolver");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").click();
  await page.locator("#loginusername").fill("beesolver");
  await page.locator("#loginusername").press("Tab");
  await page.locator("#loginpassword").fill("beesolver");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.close();
  await page.locator
});
