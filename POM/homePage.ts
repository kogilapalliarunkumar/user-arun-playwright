import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  async goToDisappearingElements() {
    await this.page.click('text=Disappearing Elements');
  }
}