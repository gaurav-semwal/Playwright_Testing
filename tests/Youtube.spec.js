import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('beesolver technology');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await page.getByRole('link', { name: 'BeeSolver Technology Pvt Ltd @BeeSolverTechnologyPvtltd•108 subscribers' }).click();
  await page.getByRole('button', { name: 'Mute keyboard shortcut m' }).click();
  await page.locator('#tabsContent').getByText('Shorts').click();
  await page.locator('ytm-shorts-lockup-view-model').filter({ hasText: '#WorkVibes #TeamGoals #' }).locator('a').first().click();
  await page.goto('https://www.youtube.com/shorts/86lkfXcWZ-c');

// -------------------------------------------------->

  await page.goto('https://www.github.com/gaurav-semwal');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.locator('#tabsContent').getByText('Playlist').click();
  await page.goto('https://demoblaze.co/index.html');
  await expect(page).toHaveURL('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Perfumes' }).click();
  await page.getByRole("link", { name: "Logout" }).click(); 
});