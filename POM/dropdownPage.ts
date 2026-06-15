import { Page, expect } from '@playwright/test';

export class DropdownPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/dropdown');
  }

  async selectOption1() {
    await this.page.selectOption('#dropdown', '1');
  }

  async selectOption2() {
    await this.page.selectOption('#dropdown', '2');
  }

  async verifyOption1Selected() {
    await expect(this.page.locator('#dropdown')).toHaveValue('1');
  }

  async verifyOption2Selected() {
    await expect(this.page.locator('#dropdown')).toHaveValue('2');
  }
}