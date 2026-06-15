import { Page, Locator, expect } from '@playwright/test';

export class DynamicLoadingPage {

  readonly page: Page;
  readonly example1Link: Locator;
  readonly startButton: Locator;
  readonly loading: Locator;
  readonly helloText: Locator;

  constructor(page: Page) {
    this.page = page;

    // Main page
    this.example1Link = page.locator('text=Example 1: Element on page that is hidden');

    // Example 1 page elements
    this.startButton = page.locator('#start button');
    this.loading = page.locator('#loading');
    this.helloText = page.locator('#finish h4');
  }

  async navigateToMainPage() {
    await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading');
  }

  async clickExample1() {
    await this.example1Link.click();
  }

  async clickStart() {
    await this.startButton.click();
  }

  async waitForResult() {
    await expect(this.helloText).toHaveText('Hello World!', { timeout: 15000 });
  }

  async verifyHelloText() {
    await expect(this.helloText).toBeVisible();
  }
}

