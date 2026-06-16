import { test as base } from '@playwright/test';
import { JSAlertsPage } from '../POM/jsAlertsPage';

type Fixtures = {
  jsAlertsPage: JSAlertsPage;
};

export const test = base.extend<Fixtures>({
  jsAlertsPage: async ({ page }, use) => {
    const jsAlertsPage = new JSAlertsPage(page);

    await jsAlertsPage.navigate();

    await use(jsAlertsPage);
  },
});