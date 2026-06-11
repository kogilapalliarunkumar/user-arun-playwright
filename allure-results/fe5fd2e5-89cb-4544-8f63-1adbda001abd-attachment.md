# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPage.spec.ts >> Login Test Functionality >> Login 2 | invalid | Admin
- Location: tests\loginPage.spec.ts:8:13

# Error details

```
Test timeout of 30000ms exceeded.
```

```
TypeError: loginPage.verifyInvalidLogin is not a function
```

# Test source

```ts
  1  | import { test } from '../Fixtures/loginPageFixture';
  2  | import loginData from '../TestData/loginData.json';
  3  | 
  4  | test.describe('Login Test Functionality', () => {
  5  | 
  6  |     for (const [index, data] of loginData.entries()) {
  7  | 
  8  |         test(`Login ${index + 1} | ${data.validity} | ${data.Username}`, async ({ loginPage }) => {
  9  | 
  10 |             await test.step('Perform login', async () => {
  11 |                 await loginPage.login(data.Username, data.Password);
  12 |             });
  13 | 
  14 |             if (data.validity === 'valid') 
  15 |                 {
  16 | 
  17 |                 await test.step('Verify successful login', async () => 
  18 |                     {
  19 |                     await loginPage.verifyValidationLogin();
  20 |                    });
  21 |                 
  22 |                 console.log(`Login Successful - Username: ${data.Username}, Password: ${data.Password}`);
  23 | 
  24 |                } 
  25 |             else 
  26 |                 {
  27 | 
  28 |                    await test.step('Verify invalid login', async () =>
  29 |                      {
> 30 |                     await loginPage.verifyInvalidLogin()
     |                                     ^ TypeError: loginPage.verifyInvalidLogin is not a function
  31 |                    });
  32 | 
  33 |                 console.log(`Login failed - Username: ${data.Username}, Password: ${data.Password}`);
  34 | 
  35 |             }
  36 |         });
  37 |     }
  38 | });
```