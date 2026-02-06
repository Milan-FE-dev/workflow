import { test, expect } from '@playwright/test';

test('homepage shows Hello world and has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/vite-project/);
  await expect(page.locator('text=Hello world')).toBeVisible();
});
