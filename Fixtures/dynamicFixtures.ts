import { test as base } from '@playwright/test';
import { DynamicLoadingPage } from '../POM/dynamicLoadingPage';

type MyFixtures = {
  dynamicPage: DynamicLoadingPage;
};

export const test = base.extend<MyFixtures>({
  dynamicPage: async ({ page }, use) => {
    const dynamicPage = new DynamicLoadingPage(page);

    // Navigate to main page once
    await dynamicPage.navigateToMainPage();

    await use(dynamicPage);
  }
});

export const expect = test.expect;
