import { test as base } from '@playwright/test';
import { FileUploadPage } from '../POM/fileUploadPage';

type MyFixtures = {
  fileUploadPage: FileUploadPage;
};

export const test = base.extend<MyFixtures>({
  fileUploadPage: async ({ page }, use) => {

    const fileUploadPage = new FileUploadPage(page);

    await fileUploadPage.navigate();

    await use(fileUploadPage);
  }
});

export const expect = test.expect;