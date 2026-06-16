import { test } from '../Fixtures/loginAuthFixtures';

test.describe('Login Tests', () => {

  test('Valid Login', async ({ loginPage }) => {
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.verifySuccessfulLogin();
  });

  test('Invalid Username', async ({ loginPage }) => {
    await loginPage.login('wrongUser', 'SuperSecretPassword!');
    await loginPage.verifyInvalidLogin();
  });

  test('Invalid Password', async ({ loginPage }) => {
    await loginPage.login('tomsmith', 'wrongPassword');
    await loginPage.verifyInvalidPassword();
  });

});