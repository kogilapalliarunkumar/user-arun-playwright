import { Page, Locator, Download, expect } from '@playwright/test';

export class FileDownloadPage
 {
  readonly page: Page;
  readonly fileLinks: Locator;

  constructor(page: Page) 
  {
    this.page = page;
    this.fileLinks = page.locator('div.example a');
  }

  async navigate() 
  {
    await this.page.goto('https://the-internet.herokuapp.com/download');
  }

  async downloadFile(fileName: string): Promise<Download>
   {

    const downloadPromise = this.page.waitForEvent('download');
    await this.page.click(`text=${fileName}`);
    const download = await downloadPromise;
    return download;
  }

  async verifyDownload(download: Download, expectedFileName: string)
   {

    const fileName = download.suggestedFilename();
    expect(fileName).toBe(expectedFileName);
    await download.saveAs(`downloads/${fileName}`);
  }
}