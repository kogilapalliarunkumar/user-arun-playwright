import { test as base } from '@playwright/test';
import { EntryAdPage } from '../POM/entryAdPage';

type MyFixtures = {
  entryAdPage: EntryAdPage;
};

export const test = base.extend<MyFixtures>({
  entryAdPage: async ({ page }, use) => {
    const entryAdPage = new EntryAdPage(page);

    // Navigate automatically
    await entryAdPage.navigate();

    await use(entryAdPage);
  }
});

export const expect = test.expect;
