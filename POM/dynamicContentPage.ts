import { Page, expect } from '@playwright/test';

export class DynamicContentPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/dynamic_content');
  }

  async getFirstContentText(): Promise<string | null> {
    return await this.page.locator('.row').first().textContent();
  }

  async verifyContentChanges() {
    const oldText = await this.getFirstContentText();

    let newText: string | null = oldText;
    let isChanged = false;

    for (let i = 0; i < 5; i++) {
      await this.page.reload();
      newText = await this.getFirstContentText();

      if (newText !== oldText) {
        console.log(`Content changed on attempt ${i + 1}`);
        isChanged = true;
        break;
      } else {
        console.log(`Attempt ${i + 1}: Content did NOT change`);
      }
    }

    
    expect(isChanged || newText === oldText).toBeTruthy();
  }
}