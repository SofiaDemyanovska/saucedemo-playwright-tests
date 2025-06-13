// @ts-check
import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');

let loginPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
});

test('невдалий логін: порожнє поле логіну + валідний пароль', async () => {
  const errorMsg = loginPage.page.locator(`[data-test="error"]`);
  await loginPage.fillForm('', 'secret_sauce');
  await loginPage.submitForm();
  await expect(errorMsg).toHaveText(/Username is required/);
});

test('невдалий логін: Валідний логін + пустий пароль', async () => {
  const errorMsg = loginPage.page.locator(`[data-test="error"]`);
  await loginPage.fillForm('locked_out_user', '');
  await loginPage.submitForm();
  await expect(errorMsg).toHaveText(/Password is required/);
});

test('невдалий логін: Невірні дані', async () => {
  const errorMsg = loginPage.page.locator(`[data-test="error"]`);
  await loginPage.fillForm('locked_out127946816294121241241_user', '71962946192846891268461824');
  await loginPage.submitForm();
  await expect(errorMsg).toHaveText(/Username and password do not match/);
});

test('невдалий логін: порожні логін і пароль', async () => {
  const errorMsg = loginPage.page.locator(`[data-test="error"]`);
  await loginPage.fillForm('', '');
  await loginPage.submitForm();
  await expect(errorMsg).toHaveText(/Username is required/);
});

test('невдалий логін: користувач locked_out_user', async () => {
  const errorMsg = loginPage.page.locator(`[data-test="error"]`);
  await loginPage.fillForm('locked_out_user', 'secret_sauce');
  await loginPage.submitForm();
  await expect(errorMsg).toContainText(/locked out/);
});

test('невдалий логін: занадто довгий логін та пароль', async () => {
  const errorMsg = loginPage.page.locator(`[data-test="error"]`);
  const longString = 'a'.repeat(1000);
  await loginPage.fillForm(longString, longString);
  await loginPage.submitForm();
  await expect(errorMsg).toHaveText(/Username and password do not match/);
});