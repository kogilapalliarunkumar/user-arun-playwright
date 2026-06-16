# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginPage.spec.ts >> Login Test Functionality >> Login 3 | invalid | Admin
- Location: tests\loginPage.spec.ts:8:13

# Error details

```
Test timeout of 30000ms exceeded while setting up "loginPage".
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import { test as base } from '@playwright/test';
  2  | import { Loginpage } from '../POM/loginPage';
  3  | export{expect} from '@playwright/test';
  4  | 
  5  | type myFixture = {
  6  |     loginPage: Loginpage;
  7  | };
  8  | 
  9  | export const test = base.extend<myFixture>({
  10 |     loginPage: async ({ page }, use) => {
  11 | 
  12 |         const loginPage = new Loginpage(page);
  13 | 
> 14 |         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  15 | 
  16 |         await use(loginPage);
  17 | 
  18 |         //await page.waitForTimeout(3000);
  19 |     },
  20 | });
```