import { Page, Locator, expect } from '@playwright/test';

export class AlertPage {
  readonly page: Page;
  readonly contextMenuLink: Locator;
  readonly hotSpotBox: Locator;

  constructor(page: Page)
   {
    this.page = page;
    this.contextMenuLink = page.locator('text=Context Menu');
    this.hotSpotBox = page.locator('#hot-spot');
  }

  async navigateToContextMenu()
   {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.contextMenuLink.click();
  }

  async rightClickAndValidateAlert() {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe('You selected a context menu');
      await dialog.accept();
    });

    await this.hotSpotBox.click({ button: 'right' });
  }
}