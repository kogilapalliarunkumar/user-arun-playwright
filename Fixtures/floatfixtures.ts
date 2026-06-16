import { test as baseTest } from '@playwright/test';
import { FloatingMenuPage } from '../POM/floatingMenuPage';

type FloatingMenuFixtures = {
  floatingMenuPage: FloatingMenuPage;
};

export const test = baseTest.extend<FloatingMenuFixtures>({
  floatingMenuPage: async ({ page }, use) => {
    const floatingMenuPage = new FloatingMenuPage(page);

    // ✅ Auto navigation before every test
    await floatingMenuPage.navigate();

    await use(floatingMenuPage);
  },
});