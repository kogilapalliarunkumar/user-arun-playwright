import { test as base } from '@playwright/test';

class DynamicLoadingPage {
  readonly page: any;
  constructor(page: any) {
    this.page = page;
  }
  async navigate() {
   
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }
}

type MyFixtures = {
  dynamicPage: DynamicLoadingPage;
};

export const test = base.extend<MyFixtures>({
  dynamicPage: async ({ page }, use) => {
    const dynamicPage = new DynamicLoadingPage(page);
    await dynamicPage.navigate();
    await use(dynamicPage);
  },
});
