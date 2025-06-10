const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.inventoryList = page.locator('[data-test="inventory-list"]');
    this.errorMessage = page.locator('.error-message-container.error')
    this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
    this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
    this.productSortContainer = page.locator('[data-test="product-sort-container"]');
  }

  async fillName(name) {
    await this.nameInput.fill(name);
  }

  async fillPassword(password) {
    await this.password.fill(password);
  }

  async submitForm() {
    await this.loginButton.click();
  }

  async fillForm( name, password) {
    await this.fillName(name);
    await this.fillPassword(password);
  }

async isLoggedIn() {
  await expect(this.inventoryList).toBeVisible();
}


async checkElementsAfterLogin() {
  await expect(this.addToCart).toBeVisible();
  await expect(this.shoppingCart).toBeVisible();
  await expect(this.productSortContainer).toBeVisible();
}

}

module.exports = {LoginPage};

