import { test as base } from '@playwright/test';
import { AlertPage } from '../POM/alert';

type MyFixtures = {
  alertPage: AlertPage;
};

export const test = base.extend<MyFixtures>({
  alertPage: async ({ page }, use) => {
    const alertPage = new AlertPage(page);
    await use(alertPage);
  },
});

