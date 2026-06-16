import { test as baseTest } from '@playwright/test';
import { ForgotPasswordPage } from '../POM/forgotPasswordPage';

type ForgotPasswordFixtures =
 {
  forgotPasswordPage: ForgotPasswordPage;
};

export const test = baseTest.extend<ForgotPasswordFixtures>({
  forgotPasswordPage: async ({ page }, use) => 
    {
    const forgotPasswordPage = new ForgotPasswordPage(page);

    await forgotPasswordPage.navigate();

    await use(forgotPasswordPage);
  },
});