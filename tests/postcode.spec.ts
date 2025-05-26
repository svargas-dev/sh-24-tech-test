import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Sam Vargas | SH:24 Tech Test - May 2025/);
});

test('should show error message when postcode is empty', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('status')).toHaveText(/Postcode is required/);
});

test('should show error message when postcode is invalid', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Postcode' }).fill('invalid postcode');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('status')).toHaveText(/Your postcode must be a valid UK postcode./);
});

test('should disable button when postcode is valid & submitting form', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Postcode' }).fill('SH241AA');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('button', { name: /Continue/ })).toBeDisabled();
});

test('should redirect to success page when postcode is valid (allow list)', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Postcode' }).fill('SH241AA');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page).toHaveURL('/success');

  await expect(page).toHaveTitle(/Sam Vargas \| Available in your area/);
  const description = await page.locator('meta[name="description"]').getAttribute('content');
  expect(description).toBe('Sam Vargas tech test for SH:24 for hiring a new software engineer in May/June 2025');
  await expect(page.getByRole("heading", { name: "We're available in your area!" })).toBeVisible();
});

test('should redirect to success page when postcode is valid (postcode.io)', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Postcode' }).fill('SE5 9QY');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page).toHaveURL('/success');
});

test('should redirect to out of service area page when postcode is valid (postcode.io) & not in service area', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Postcode' }).fill('W5 4SA');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page).toHaveURL('/out-of-service-area');

  await expect(page).toHaveTitle(/Sam Vargas \| Out of service area/);
  const description = await page.locator('meta[name="description"]').getAttribute('content');
  expect(description).toBe('Sam Vargas tech test for SH:24 for hiring a new software engineer in May/June 2025');
  await expect(page.getByRole("heading", { name: "We're sorry, we don't offer services to that area." })).toBeVisible();
});

test('should show error when no postcode is entered, then show success page when a valid postcode is entered', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('status')).toHaveText(/Postcode is required/);

  await page.getByRole('textbox', { name: 'Postcode' }).fill('SH241AA');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page).toHaveURL('/success');
});


test('should show error when postcode is invalid, then show success page when a valid postcode is entered', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('textbox', { name: 'Postcode' }).fill('nonesense');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('status')).toHaveText(/Your postcode must be a valid UK postcode./);

  await page.getByRole('textbox', { name: 'Postcode' }).fill('SH241AA');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page).toHaveURL('/success');
});


test('should show error when no postcode is entered, then show invalid postcode error', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('status')).toHaveText(/Postcode is required/);

  await page.getByRole('textbox', { name: 'Postcode' }).fill('nonsense');
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('status')).toHaveText(/Your postcode must be a valid UK postcode./);
});
