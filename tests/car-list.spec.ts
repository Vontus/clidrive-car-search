import { test, expect } from '@playwright/test';

test('should see the car list page', async ({ page }) => {
  await page.goto('/');
  const pageTitle = await page.getByTestId("page-title").innerText();

  expect(pageTitle).toBe('Car List');
});

test('should see 50 cars', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('[data-testid="car-list"]');
  const cars = await page.getByTestId("car-list").locator("li").count();

  expect(cars).toBe(50);
});
