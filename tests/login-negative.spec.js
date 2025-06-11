// @ts-check
import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');

test('невдалий логін: порожнє поле логіну + валідний пароль', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const errorMsg = page.locator(`[data-test="error"]`);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.fillForm('', 'secret_sauce');
  await loginPage.submitForm();
  //await expect(errorMsg).toHaveText(/Username is required/);

});

test('невдалий логін: Валідний логін + пустий пароль', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const errorMsg = page.locator(`[data-test="error"]`);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.fillForm('locked_out_user', '');
  await loginPage.submitForm();
  await expect(errorMsg).toHaveText(/Password is required/);

});

test('невдалий логін: Невірні дані', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const errorMsg = page.locator(`[data-test="error"]`);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.fillForm('locked_out127946816294121241241_user', '71962946192846891268461824');
  await loginPage.submitForm();
  await expect(errorMsg).toHaveText(/Username and password do not match/);

}); 