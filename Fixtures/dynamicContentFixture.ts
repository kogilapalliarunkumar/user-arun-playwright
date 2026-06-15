import { test as base } from '@playwright/test';
import { DynamicContentPage } from '../POM/dynamicContentPage';

type Fixtures = {
  dynamicContentPage: DynamicContentPage;
};

export const test = base.extend<Fixtures>({
  dynamicContentPage: async ({ page }, use) => {
    await use(new DynamicContentPage(page));
  },
});

export { expect } from '@playwright/test';
