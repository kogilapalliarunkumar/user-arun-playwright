import { Page, Locator, expect } from '@playwright/test';

export class DynamicLoadingPage {
  readonly page: Page;
  readonly startButton: Locator;
  readonly loadingIcon: Locator;
  readonly helloWorldText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startButton = page.locator('#start button');
    this.loadingIcon = page.locator('#loading');
    this.helloWorldText = page.locator('#finish h4');
  }

  async navigate() 
  {
    await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
  }

  async clickStart()
   {
    await this.startButton.click();
  }

  async waitForLoadingToDisappear() 
  {
    await expect(this.loadingIcon).toBeHidden({ timeout: 10000 });
  }

  async getHelloWorldText()
   {
    return await this.helloWorldText.textContent();
  }

  async verifyHelloWorld()
   {
    await expect(this.helloWorldText).toHaveText('Hello World!', { timeout: 10000 });
  }
}
``