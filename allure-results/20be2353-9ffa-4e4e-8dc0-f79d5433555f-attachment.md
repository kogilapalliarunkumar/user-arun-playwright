# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: jQueryMenu.spec.ts >> JQuery UI Menu Tests >> Navigate to Downloads -> PDF
- Location: tests\jQueryMenu.spec.ts:43:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('text=Enabled')

```

# Test source

```ts
  1  | import { test as base, Page } from '@playwright/test';
  2  | 
  3  | class JQueryMenuPage {
  4  |   readonly page: Page;
  5  | 
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  |   }
  9  | 
  10 |   async hoverEnabled() {
> 11 |     await this.page.hover('text=Enabled');
     |                     ^ Error: page.hover: Test timeout of 30000ms exceeded.
  12 |   }
  13 | 
  14 |   async hoverDownloads() {
  15 |     await this.page.hover('text=Downloads');
  16 |   }
  17 | 
  18 |   async clickPDF() {
  19 |     await this.page.click('text=PDF');
  20 |   }
  21 | 
  22 |   async clickCSV() {
  23 |     await this.page.click('text=CSV');
  24 |   }
  25 | 
  26 |   async clickExcel() {
  27 |     await this.page.click('text=Excel');
  28 |   }
  29 | }
  30 | 
  31 | type TestFixtures = {
  32 |   jQueryMenuPage: JQueryMenuPage;
  33 | };
  34 | 
  35 | const test = base.extend<TestFixtures>({
  36 |   jQueryMenuPage: async ({ page }, use) => {
  37 |     await use(new JQueryMenuPage(page));
  38 |   },
  39 | });
  40 | 
  41 | test.describe('JQuery UI Menu Tests', () => {
  42 | 
  43 |   test('Navigate to Downloads -> PDF', async ({ jQueryMenuPage }) => {
  44 | 
  45 |     await jQueryMenuPage.hoverEnabled();
  46 |     await jQueryMenuPage.hoverDownloads();
  47 |     await jQueryMenuPage.clickPDF();
  48 | 
  49 |   });
  50 | 
  51 |   test('Navigate to Downloads -> CSV', async ({ jQueryMenuPage }) => {
  52 | 
  53 |     await jQueryMenuPage.hoverEnabled();
  54 |     await jQueryMenuPage.hoverDownloads();
  55 |     await jQueryMenuPage.clickCSV();
  56 | 
  57 |   });
  58 | 
  59 |   test('Navigate to Downloads -> Excel', async ({ jQueryMenuPage }) => {
  60 | 
  61 |     await jQueryMenuPage.hoverEnabled();
  62 |     await jQueryMenuPage.hoverDownloads();
  63 |     await jQueryMenuPage.clickExcel();
  64 | 
  65 |   });
  66 | 
  67 | });
```