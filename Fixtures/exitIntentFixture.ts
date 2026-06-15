import { test as base } from '@playwright/test';
import { ExitIntentPage } from '../POM/exitIntentPage';

type MyFixtures = 
{
  exitIntentPage: ExitIntentPage;
};

export const test = base.extend<MyFixtures>({
  exitIntentPage: async ({ page }, use) => 
    {

    const exitIntentPage = new ExitIntentPage(page);
    await exitIntentPage.navigate();
    await use(exitIntentPage);
  }
});

export const expect = test.expect;
