import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../POM/loginPageforAuth';

type Fixtures = {
  loginPage: LoginPage;
};

export const test = baseTest.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    // Auto navigation
    await loginPage.navigate();

    await use(loginPage);
  },
});
``