import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;


    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
    await expect(this.usernameInput).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifySuccessfulLogin() {
    await expect(this.flashMessage).toContainText('You logged into a secure area!');
  }

  async verifyInvalidLogin() {
    await expect(this.flashMessage).toContainText('Your username is invalid!');
  }

  async verifyInvalidPassword() {
    await expect(this.flashMessage).toContainText('Your password is invalid!');
  }
}