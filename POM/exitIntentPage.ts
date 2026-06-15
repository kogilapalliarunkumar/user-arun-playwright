import { Page, Locator, expect } from '@playwright/test';

export class ExitIntentPage {

  readonly page: Page;
  readonly modal: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.modal = page.locator('.modal');
    this.closeButton = page.locator('.modal-footer >> text=Close');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/exit_intent');
  }


  async triggerExitIntent()
   {
    await this.page.mouse.move(100, 100); 
    await this.page.mouse.move(0, 0);  
    await this.page.mouse.move(-10, -10); 
  }

  async verifyModalVisible()
   {
    await expect(this.modal).toBeVisible({ timeout: 10000 });
  }

  async closeModal()
   {
    await this.closeButton.click();
  }

  async verifyModalClosed()
   {
    await expect(this.modal).toBeHidden({ timeout: 10000 });
  }
}