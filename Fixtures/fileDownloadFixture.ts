import { test as base } from '@playwright/test';
import { FileDownloadPage } from '../POM/fileDownloadPage';

type MyFixtures = 
{
  fileDownloadPage: FileDownloadPage;
};

export const test = base.extend<MyFixtures>({
  fileDownloadPage: async ({ page }, use) =>
     {

    const fileDownloadPage = new FileDownloadPage(page);
    await fileDownloadPage.navigate();
    await use(fileDownloadPage);
  }
});