import { Page, expect } from '@playwright/test';

export class DragAndDropPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');
  }

  async dragAtoB() {
    await this.page.evaluate(() => {

      const source = document.querySelector('#column-a');
      const target = document.querySelector('#column-b');

      function dragDrop(source: Element, target: Element) {
        const dataTransfer = new DataTransfer();

        source.dispatchEvent(new DragEvent('dragstart', {
          bubbles: true,
          dataTransfer
        }));

        target.dispatchEvent(new DragEvent('drop', {
          bubbles: true,
          dataTransfer
        }));

        source.dispatchEvent(new DragEvent('dragend', {
          bubbles: true,
          dataTransfer
        }));
      }

      if (source && target) {
        dragDrop(source, target);
      }
    });
  }

  async verifySwap() {
    await expect(this.page.locator('#column-a')).toContainText('B');
    await expect(this.page.locator('#column-b')).toContainText('A');
    await this.page.waitForTimeout(1000);
  }
}
