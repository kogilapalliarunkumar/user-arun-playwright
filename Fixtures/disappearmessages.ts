import { test as base } from '@playwright/test';
import { HomePage } from '../POM/homePage';
import { DisappearingPage } from '../POM/disappearingPage';

type Fixtures = {
  homePage: HomePage;
  disappearingPage: DisappearingPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  disappearingPage: async ({ page }, use) => {
    await use(new DisappearingPage(page));
  },
});
``