import { Page, Locator, expect } from '@playwright/test';

export class JQueryMenuPage {
  readonly page: Page;
  readonly frame;

  readonly enabledMenu: Locator;
  readonly downloadsMenu: Locator;
  readonly pdfOption: Locator;
  readonly csvOption: Locator;
  readonly excelOption: Locator;

  readonly jqueryLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // ✅ iframe
    this.frame = page.frameLocator('iframe');

    this.enabledMenu = this.frame.locator('text=Enabled');
    this.downloadsMenu = this.frame.locator('text=Downloads');

    this.pdfOption = this.frame.locator('text=PDF');
    this.csvOption = this.frame.locator('text=CSV');
    this.excelOption = this.frame.locator('text=Excel');

    // ✅ top link: "JQuery UI Menus"
    this.jqueryLink = page.locator('text=JQuery UI Menus');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/jqueryui/menu');
  }

  async verifyPageLoaded() {
    await expect(this.jqueryLink).toBeVisible();
  }

  // ✅ menu actions
  async hoverEnabled() {
    await this.enabledMenu.hover();
  }

  async hoverDownloads() {
    await this.downloadsMenu.hover();
  }

  async clickPDF() {
    await this.pdfOption.click();
  }

  async clickCSV() {
    await this.csvOption.click();
  }

  async clickExcel() {
    await this.excelOption.click();
  }

  // ✅ link validation
  async clickJQueryLink() {
    await this.jqueryLink.click();
  }

  async verifyNavigationToJQuery() {
    await expect(this.page).toHaveURL(/jqueryui/);
  }
}