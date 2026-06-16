# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: floatingMenu.spec.ts >> Floating Menu Tests >> Verify menu is visible on page load
- Location: tests\floatingMenu.spec.ts:6:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#floating-menu') to be visible

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class FloatingMenuPage {
  4  |   readonly page: Page;
  5  |   readonly floatingMenuLink: Locator;
  6  |   readonly menuBar: Locator;
  7  |   readonly homeLink: Locator;
  8  |   readonly newsLink: Locator;
  9  |   readonly contactLink: Locator;
  10 |   readonly aboutLink: Locator;
  11 | 
  12 |   constructor(page: Page) {
  13 |     this.page = page;
  14 | 
  15 |     // ✅ Homepage link
  16 |     this.floatingMenuLink = page.locator('a[href="/floating_menu"]');
  17 | 
  18 |     // ✅ Correct menu locator
  19 |     this.menuBar = page.locator('#floating-menu');
  20 | 
  21 |     this.homeLink = page.locator('text=Home');
  22 |     this.newsLink = page.locator('text=News');
  23 |     this.contactLink = page.locator('text=Contact');
  24 |     this.aboutLink = page.locator('text=About');
  25 |   }
  26 | 
  27 |   async navigate() {
  28 |     // ✅ Step 1: Go to homepage
  29 |     await this.page.goto('https://the-internet.herokuapp.com/');
  30 | 
  31 |     // ✅ Step 2: Click Floating Menu
  32 |     await this.floatingMenuLink.click();
  33 | 
  34 |     // ✅ Step 3: Ensure page is loaded
  35 |     await this.page.waitForURL('**/floating_menu');
  36 |   }
  37 | 
  38 |   async verifyMenuVisible() {
  39 |     // ✅ Wait + verify visibility
> 40 |     await this.menuBar.waitFor({ state: 'visible' });
     |                        ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  41 |     await expect(this.menuBar).toBeVisible();
  42 |   }
  43 | 
  44 |   async scrollPage() {
  45 |     await this.page.mouse.wheel(0, 1500);
  46 |   }
  47 | 
  48 |   async verifyMenuStillVisibleAfterScroll() {
  49 |     await expect(this.menuBar).toBeVisible();
  50 |   }
  51 | 
  52 |   async clickHome() {
  53 |     await expect(this.homeLink).toBeVisible();
  54 |     await this.homeLink.click();
  55 |   }
  56 | 
  57 |   async clickNews() {
  58 |     await expect(this.newsLink).toBeVisible();
  59 |     await this.newsLink.click();
  60 |   }
  61 | 
  62 |   async clickContact() {
  63 |     await expect(this.contactLink).toBeVisible();
  64 |     await this.contactLink.click();
  65 |   }
  66 | 
  67 |   async clickAbout() {
  68 |     await expect(this.aboutLink).toBeVisible();
  69 |     await this.aboutLink.click();
  70 |   }
  71 | }
```