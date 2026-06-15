import { Page, Locator, expect } from '@playwright/test';

export class EntryAdPage {

  readonly page: Page;
  readonly modal: Locator;
  readonly closeButton: Locator;
  readonly pageHeading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.modal = page.locator('.modal');
    this.closeButton = page.locator('.modal-footer >> text=Close');
    this.pageHeading = page.locator('h3:has-text("Entry Ad")');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/entry_ad');
  }

  async verifyModalVisible() {
    await expect(this.modal).toBeVisible({ timeout: 10000 });
  }

  async closeModal() {
    await this.closeButton.click();
  }

  async verifyModalClosed() {
    await expect(this.modal).toBeHidden({ timeout: 10000 });
  }
}