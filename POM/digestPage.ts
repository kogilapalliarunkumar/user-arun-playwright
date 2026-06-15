import { Page, Locator, expect } from '@playwright/test';

export class DigestPage {
  readonly page: Page;
  readonly digestLink: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // From homepage list
    this.digestLink = page.locator('text=Digest Authentication');

    // After login success
    this.successMessage = page.locator('p');
  }

  async navigateToPage() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.digestLink.click();
  }

  async validateLoginSuccess() {
    await expect(this.successMessage).toContainText('Congratulations');
  }
}
``