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
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
=========================== logs ===========================
  "commit" event fired
  "domcontentloaded" event fired
  "load" event fired
============================================================
```

# Test source

```ts
  1  | /*
  2  | import { Page, Locator, expect } from '@playwright/test';
  3  | 
  4  | export class Loginpage {
  5  |     readonly page: Page;
  6  |     readonly usernameInput: Locator;
  7  |     readonly passwordInput: Locator;
  8  |     readonly loginButton: Locator;
  9  |     readonly myinfo: Locator;
  10 |     readonly errorMessage:Locator;
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 |         this.usernameInput = page.locator('//input[@name="username"]');
  15 |         this.passwordInput = page.locator('//input[@name="password"]');
  16 |         this.loginButton = page.locator('//button[@type="submit"]');
  17 |         this.myinfo = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a/span');
  18 |         this.errorMessage=page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p');
  19 | 
  20 |     
  21 |     }
  22 |      async login(username:string,password:string)
  23 |      {
  24 |         await this.usernameInput.fill(username);
  25 |         await this.passwordInput.fill(password);
  26 |         await this.loginButton.click();
  27 |      }
  28 |     async verifyValidationLogin()
  29 |     {
  30 |         await expect(this.myinfo).toBeVisible();
  31 |     }
  32 |     async verifyinvalidLogin()
  33 |     {
  34 |         await expect(this.errorMessage).toBeVisible();
  35 |     }
  36 | }
  37 |     */
  38 | 
  39 | import { Page, Locator, expect } from '@playwright/test';
  40 | 
  41 | export class Loginpage {
  42 |     readonly page: Page;
  43 |     readonly usernameInput: Locator;
  44 |     readonly passwordInput: Locator;
  45 |     readonly loginButton: Locator;
  46 |     readonly myinfo: Locator;
  47 |     readonly errorMessage: Locator;
  48 | 
  49 |     constructor(page: Page) {
  50 |         this.page = page;
  51 | 
  52 |         // ✅ Stable, user-facing locators (Playwright best practice)
  53 |         this.usernameInput = page.locator('//input[@placeholder="Username"]');
  54 |         this.passwordInput = page.locator('//input[@placeholder="Password"]');
  55 |         this.loginButton = page.locator('//button[@type="submit"]');
  56 | 
  57 |         this.myinfo = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a/span');
  58 |         this.errorMessage = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p');
  59 |     }
  60 | 
  61 |     async login(username: string, password: string) {
  62 |         // ✅ Ensure fields are ready
  63 |         await this.usernameInput.waitFor();
  64 | 
  65 |         await this.usernameInput.fill(username);
  66 |         await this.passwordInput.fill(password);
  67 | 
  68 |         // ✅ Proper click + implicit waiting
  69 |         await Promise.all([
> 70 |             this.page.waitForLoadState('networkidle'),
     |                       ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  71 |             this.loginButton.click()
  72 |         ]);
  73 |     }
  74 | 
  75 |     async verifyValidationLogin() {
  76 |         // ✅ Waits automatically for visibility
  77 |         await expect(this.myinfo).toBeVisible();
  78 |     }
  79 | 
  80 |     async verifyInvalidLogin() {
  81 |         await expect(this.errorMessage).toBeVisible();
  82 |     }
  83 | }
  84 | ``
  85 | 
```