import { Page, expect } from '@playwright/test';

export class DisappearingPage {
  constructor(private page: Page) {}

  // Static tabs - always visible
  async validateStaticTabs() {
    await expect(this.page.locator('text=Home')).toBeVisible();
    await expect(this.page.locator('text=About')).toBeVisible();
    await expect(this.page.locator('text=Contact Us')).toBeVisible();
    await expect(this.page.locator('text=Portfolio')).toBeVisible();
  }

  // Dynamic tab - may or may not appear
  async checkDynamicTabs() {
    const galleryTab = this.page.locator('text=Gallery');

    if (await galleryTab.isVisible()) {
      console.log('Gallery tab is visible');
    } else {
      console.log('Gallery tab is NOT visible');
    }
  }

  async refreshPage() {
    await this.page.reload();
  }
}