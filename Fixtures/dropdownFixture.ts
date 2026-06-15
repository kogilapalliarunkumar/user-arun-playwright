import { test as base } from '@playwright/test';
import { DropdownPage } from '../POM/dropdownPage';

type Fixtures = {
  dropdownPage: DropdownPage;
};

export const test = base.extend<Fixtures>({
  dropdownPage: async ({ page }, use) => {
    await use(new DropdownPage(page));
  },
});

export { expect } from '@playwright/test';