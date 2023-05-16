import { test, expect } from "@playwright/test";

test("should see the car list page", async ({ page }) => {
  await page.goto("/");
  const pageTitle = await page.getByTestId("page-title").innerText();

  expect(pageTitle).toBe("Clidrive Car Search");
});

test("should see 50 cars", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector('[data-testid="car-list"]');
  const cars = await page.getByTestId("car-list").locator("li").count();

  expect(cars).toBe(50);
});

test("should filter by make", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector('[data-testid="car-list"]');
  await page.getByTestId("make-input").fill("BMW");

  // Wait for progress to disappear
  await page.waitForSelector('[data-testid="progress"]', { state: "hidden" });

  // Test if every .car-name contains "BMW"
  const contains = await page
    .getByTestId("car-list")
    .locator(".car-name")
    .evaluateAll((cars) =>
      cars.every((car) => car.textContent?.includes("BMW"))
    );

  expect(contains).toBe(true);
});

test("should filter by model", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector('[data-testid="car-list"]');
  await page.getByTestId("model-input").fill("A3");

  // Wait for progress to disappear
  await page.waitForSelector('[data-testid="progress"]', { state: "hidden" });

  // Test if every .car-name contains "A3"
  const contains = await page
    .getByTestId("car-list")
    .locator(".car-name")
    .evaluateAll((cars) =>
      cars.every((car) => car.textContent?.includes("A3"))
    );

  expect(contains).toBe(true);
});
