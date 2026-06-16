import { Page, Locator, expect } from '@playwright/test';

export class FloatingMenuPage {
  readonly page: Page;
  readonly floatingMenuLink: Locator;
  readonly menuBar: Locator;
  readonly homeLink: Locator;
  readonly newsLink: Locator;
  readonly contactLink: Locator;
  readonly aboutLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // ✅ Link from homepage
    this.floatingMenuLink = page.locator('a[href="/floating_menu"]');

    // ✅ FIXED selector (IMPORTANT)
    this.menuBar = page.locator('#menu');

    // ✅ Scoped locators (best practice)
    this.homeLink = this.menuBar.getByText('Home');
    this.newsLink = this.menuBar.getByText('News');
    this.contactLink = this.menuBar.getByText('Contact');
    this.aboutLink = this.menuBar.getByText('About');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.floatingMenuLink.click();
    await this.page.waitForURL('**/floating_menu');

    // ✅ optional but improves stability
    await expect(this.menuBar).toBeVisible();
  }

  async verifyMenuVisible() {
    await expect(this.menuBar).toBeVisible();
  }

  async scrollPage() {
    await this.page.mouse.wheel(0, 1500);
  }

  async verifyMenuStillVisibleAfterScroll() {
    await expect(this.menuBar).toBeVisible();
  }

  async clickHome() {
    await this.homeLink.click();
  }

  async clickNews() {
    await this.newsLink.click();
  }

  async clickContact() {
    await this.contactLink.click();
  }

  async clickAbout() {
    await this.aboutLink.click();
  }
}