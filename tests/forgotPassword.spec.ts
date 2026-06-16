import { test } from '../Fixtures/forgotPasswordFixtures';

test.describe('Forgot Password Tests', () => {

  test('Verify user can submit email', async ({ forgotPasswordPage }) =>
     {
    
    await forgotPasswordPage.enterEmail('test@example.com');
    await forgotPasswordPage.clickRetrievePassword();

  });

});
