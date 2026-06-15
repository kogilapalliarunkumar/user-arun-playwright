import { test as base } from '@playwright/test';
import { DigestPage } from '../POM/digestPage';

type MyFixtures = {
  digestPage: DigestPage;
};

export const test = base.extend<MyFixtures>({
  
  // Override page with authentication
  page: async ({ browser }, use) => {

    const context = await browser.newContext({
      httpCredentials: {
        username: 'admin',
        password: 'admin',
      },
    });

    const page = await context.newPage();
    await use(page);
  },

  digestPage: async ({ page }, use) => {
    await use(new DigestPage(page));
  },
});

