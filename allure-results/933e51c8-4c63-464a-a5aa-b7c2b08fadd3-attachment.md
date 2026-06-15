# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dynamicLoadingFile.spec.ts >> Dynamic Loading Tests >> Example 1 - Validate Hello World appears
- Location: tests\dynamicLoadingFile.spec.ts:6:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import { test as base } from '@playwright/test';
  2  | 
  3  | class DynamicLoadingPage {
  4  |   readonly page: any;
  5  |   constructor(page: any) {
  6  |     this.page = page;
  7  |   }
  8  |   async navigate() {
  9  |    
> 10 |     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |                     ^ Error: page.goto: Target page, context or browser has been closed
  11 |   }
  12 | }
  13 | 
  14 | type MyFixtures = {
  15 |   dynamicPage: DynamicLoadingPage;
  16 | };
  17 | 
  18 | export const test = base.extend<MyFixtures>({
  19 |   dynamicPage: async ({ page }, use) => {
  20 |     const dynamicPage = new DynamicLoadingPage(page);
  21 |     await dynamicPage.navigate();
  22 |     await use(dynamicPage);
  23 |   },
  24 | });
  25 | 
```