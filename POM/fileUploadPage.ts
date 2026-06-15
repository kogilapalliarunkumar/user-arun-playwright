import { Page, Locator, expect } from '@playwright/test';
import path from 'path';

export class FileUploadPage {

  readonly page: Page;
  readonly fileInput: Locator;
  readonly uploadButton: Locator;
  readonly uploadedText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.fileInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.uploadedText = page.locator('#uploaded-files');
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/upload');
  }

  async uploadFile(fileName: string) {
    const filePath = path.join(process.cwd(), 'TestData', fileName);
    await this.fileInput.setInputFiles(filePath);
  }

  async clickUpload() {
    await this.uploadButton.click();
  }

  async verifyUpload(fileName: string) {
    await expect(this.uploadedText)
      .toHaveText(fileName, { timeout: 10000 });
  }
}
