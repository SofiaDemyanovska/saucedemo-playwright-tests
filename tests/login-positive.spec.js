// @ts-check
import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');

let loginPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  loginPage = new LoginPage(page);
});

test('успішний логін на демо сайті', async () => {
  await loginPage.fillForm('standard_user', 'secret_sauce');
  await loginPage.submitForm();
  await loginPage.isLoggedIn();
});

test('перевірка, що елементи сторінки після логіну існують', async () => {
  await loginPage.fillForm('standard_user', 'secret_sauce');
  await loginPage.submitForm();
  await loginPage.isLoggedIn();

  await loginPage.checkElementsAfterLogin();
});

test('успішний логін веде на сторінку /inventory', async () => {
  await loginPage.fillForm('standard_user', 'secret_sauce');
  await loginPage.submitForm();

  await expect(loginPage.page).toHaveURL(/.*inventory/);
});

test('немає помилки після валідного логіну', async () => {
  await loginPage.fillForm('standard_user', 'secret_sauce');
  await loginPage.submitForm();

  await expect(loginPage.errorMessage).toHaveCount(0); 
});

test('кнопка "Add to cart" зʼявляється після логіну', async () => {
  await loginPage.fillForm('standard_user', 'secret_sauce');
  await loginPage.submitForm();

  await expect(loginPage.addToCart).toBeVisible();
});

test('LoginPage містить всі основні елементи', async () => {
  await expect(loginPage.nameInput).toBeVisible();
  await expect(loginPage.password).toBeVisible();
  await expect(loginPage.loginButton).toBeVisible();
});