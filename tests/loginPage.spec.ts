import { test } from '../Fixtures/loginPageFixture';
import loginData from '../TestData/loginData.json';

test.describe('Login Test Functionality', () => {

    for (const [index, data] of loginData.entries()) {

        test(`Login ${index + 1} | ${data.validity} | ${data.Username}`, async ({ loginPage }) => {

            await test.step('Perform login', async () => {
                await loginPage.login(data.Username, data.Password);
            });

            if (data.validity === 'valid') 
                {

                await test.step('Verify successful login', async () => 
                    {
                    await loginPage.verifyValidationLogin();
                   });

                console.log(`Login successful - Username: ${data.Username}`);

               } 
            else 
                {

                   await test.step('Verify invalid login', async () =>
                     {
                    await loginPage.verifyinvalidLogin()
                   });

                console.log(`Login failed - Username: ${data.Username}`);
            }
        });
    }
});