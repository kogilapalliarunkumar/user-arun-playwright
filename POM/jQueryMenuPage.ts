import { Page, Locator, expect, FrameLocator } from '@playwright/test';

export class JQueryMenuPage {
  readonly page: Page;
  readonly frame: FrameLocator;

  readonly enabledMenu: Locator;
  readonly downloadsMenu: Locator;
  readonly pdfOption: Locator;
  readonly csvOption: Locator;
  readonly excelOption: Locator;

  readonly jqueryLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // ✅ iframe reference
    this.frame = page.frameLocator('iframe');

    // ✅ Stable locators inside iframe
    this.enabledMenu = this.frame.locator('text=Enabled').first();
    this.downloadsMenu = this.frame.locator('text=Downloads').first();

    this.pdfOption = this.frame.locator('text=PDF').first();
    this.csvOption = this.frame.locator('text=CSV').first();
    this.excelOption = this.frame.locator('text=Excel').first();

    // ✅ Main page locator
    this.jqueryLink = page.locator('text=JQuery UI Menus');
  }

  // ✅ Navigate to page
  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/jqueryui/menu');
  }

  // ✅ Verify page loaded
  async verifyPageLoaded() {
    await expect(this.jqueryLink).toBeVisible();
  }

  // ✅ Ensure iframe is READY before actions
  async ensureFrameReady() {
    await this.page.waitForLoadState('domcontentloaded');

    const iframe = this.page.locator('iframe');
    await iframe.waitFor({ state: 'attached' });

    // wait until frame DOM is ready
    await this.frame.locator('body').waitFor();
  }

  // ✅ Hover "Enabled"
  async hoverEnabled() {
    await this.ensureFrameReady();

    await this.enabledMenu.waitFor({ state: 'visible' });
    await this.enabledMenu.hover();

    // 🔥 Needed for jQuery menus
    await this.page.waitForTimeout(300);
  }

  // ✅ Hover "Downloads"
  async hoverDownloads() {
    await this.downloadsMenu.waitFor({ state: 'visible' });
    await this.downloadsMenu.hover();

    // 🔥 stabilizes submenu
    await this.page.waitForTimeout(300);
  }

  // ✅ Click options
  async clickPDF() {
    await this.pdfOption.waitFor({ state: 'visible' });
    await this.pdfOption.click();
  }

  async clickCSV() {
    await this.csvOption.waitFor({ state: 'visible' });
    await this.csvOption.click();
  }

  async clickExcel() {
    await this.excelOption.waitFor({ state: 'visible' });
    await this.excelOption.click();
  }

  // ✅ Reusable navigation method (BEST PRACTICE)
  async navigateTo(option: 'PDF' | 'CSV' | 'Excel') {
    await this.hoverEnabled();
    await this.hoverDownloads();

    if (option === 'PDF') {
      await this.clickPDF();
    } else if (option === 'CSV') {
      await this.clickCSV();
    } else {
      await this.clickExcel();
    }
  }

  // ✅ Optional navigation check
  async verifyNavigationToJQuery() {
    await expect(this.page).toHaveURL(/jqueryui/);
  }

  async clickJQueryLink() {
    await this.jqueryLink.click();
  }
}