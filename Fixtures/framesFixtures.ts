import { test as base } from '@playwright/test';
import { FramesPage } from '../POM/framesPage';

type Fixtures = {
  framesPage: FramesPage;
};

export const test = base.extend<Fixtures>({
  framesPage: async ({ page }, use) => {
    const framesPage = new FramesPage(page);

    await framesPage.goToFramesPage();

    await use(framesPage);
  },
});
