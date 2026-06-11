# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPage.spec.ts >> Login Test Functionality >> Login 1 | valid | Admin
- Location: tests\loginPage.spec.ts:8:13

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//span[contains(normalize-space(), \'My Info\')]')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//span[contains(normalize-space(), \'My Info\')]')

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class Loginpage {
  4  |     readonly page: Page;
  5  |     readonly usernameInput: Locator;
  6  |     readonly passwordInput: Locator;
  7  |     readonly loginButton: Locator;
  8  |     readonly myinfo: Locator;
  9  |     readonly errorMessage:Locator;
  10 | 
  11 |     constructor(page: Page) {
  12 |         this.page = page;
  13 |         this.usernameInput = page.locator('//input[@name="username"]');
  14 |         this.passwordInput = page.locator('//input[@name="password"]');
  15 |         this.loginButton = page.locator('//button[@type="submit"]');
  16 |         this.myinfo = page.locator("//span[contains(normalize-space(), 'My Info')]");
  17 |         this.errorMessage=page.locator("//span[contains(normalize-space(), 'Invalid credentials')]");
  18 | 
  19 |     
  20 |     }
  21 |      async login(username:string,password:string)
  22 |      {
  23 |         await this.usernameInput.fill(username);
  24 |         await this.passwordInput.fill(password);
  25 |         await this.loginButton.click();
  26 |      }
  27 |     async verifyValidationLogin()
  28 |     {
> 29 |         await expect(this.myinfo).toBeVisible();
     |                                   ^ Error: expect(locator).toBeVisible() failed
  30 |     }
  31 |     async verifyinvalidLogin()
  32 |     {
  33 |         await expect(this.errorMessage).toBeVisible();
  34 |     }
  35 | }
  36 | 
```