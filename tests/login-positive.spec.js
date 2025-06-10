// @ts-check
import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/loginPage');

test('успішний логін на демо сайті', async ({ page }) => {
  const loginPage = new LoginPage(page);
  

  await page.goto('https://www.saucedemo.com/');
  await loginPage.fillForm('standard_user', 'secret_sauce');
  await loginPage.submitForm();
  await loginPage.isLoggedIn();

});

test('перевірка, що елементи сторінки після логіну існують', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://www.saucedemo.com/');
  await loginPage.fillForm('standard_user', 'secret_sauce');
  await loginPage.submitForm();
  await loginPage.isLoggedIn();

  // Перевірка наявності елементів після логіну
  await loginPage.checkElementsAfterLogin();
});