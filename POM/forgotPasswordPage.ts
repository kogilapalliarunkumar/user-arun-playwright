import { Page, Locator, expect } from '@playwright/test';

export class ForgotPasswordPage
 {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly retrieveButton: Locator;

  constructor(page: Page)
   {
    this.page = page;

    this.emailInput = page.locator('#email');
    this.retrieveButton = page.locator('button[type="submit"]');
  }

  async navigate() 
  {
    await this.page.goto('https://the-internet.herokuapp.com/forgot_password');
  }

  async enterEmail(email: string)
   {
    await this.emailInput.fill(email);
  }

  async clickRetrievePassword() 
  {
    await this.retrieveButton.click();
  }

  async verifyErrorMessage() 
  {
    await expect(this.page.locator('body')).toContainText('Internal Server Error');
  }
}