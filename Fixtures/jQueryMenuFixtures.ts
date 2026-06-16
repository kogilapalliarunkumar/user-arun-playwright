import { test as base } from '@playwright/test';
import { JQueryMenuPage } from '../POM/jQueryMenuPage';

type Fixtures = {
  jQueryMenuPage: JQueryMenuPage;
};

export const test = base.extend<Fixtures>({
  jQueryMenuPage: async ({ page }, use) => {
    const menuPage = new JQueryMenuPage(page);

    await menuPage.navigate();
    await menuPage.verifyPageLoaded();

    await use(menuPage);
  },
});