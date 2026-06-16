import { Page, Locator, expect } from '@playwright/test';

export class JSAlertsPage {
  readonly page: Page;
  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;
  readonly resultText: Locator;

  constructor(page: Page) {
    this.page = page;


    this.jsAlertButton = page.locator('button:has-text("Click for JS Alert")');
    this.jsConfirmButton = page.locator('button:has-text("Click for JS Confirm")');
    this.jsPromptButton = page.locator('button:has-text("Click for JS Prompt")');


    this.resultText = page.locator('#result');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  }


  async handleJSAlert() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await this.jsAlertButton.click();
  }

  async verifyJSAlert() {
    await expect(this.resultText).toHaveText('You successfully clicked an alert');
  }


  async handleJSConfirmAccept() {
    this.page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await this.jsConfirmButton.click();
  }

  async verifyJSConfirmAccept() {
    await expect(this.resultText).toHaveText('You clicked: Ok');
  }


  async handleJSConfirmCancel() {
    this.page.once('dialog', async dialog => {
      await dialog.dismiss();
    });

    await this.jsConfirmButton.click();
  }

  async verifyJSConfirmCancel() {
    await expect(this.resultText).toHaveText('You clicked: Cancel');
  }


  async handleJSPrompt(text: string) {
    this.page.once('dialog', async dialog => {
      await dialog.accept(text);
    });

    await this.jsPromptButton.click();
  }

  async verifyJSPrompt(text: string) {
    await expect(this.resultText).toHaveText(`You entered: ${text}`);
  }
}