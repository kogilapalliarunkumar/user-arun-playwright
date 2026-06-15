# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: disappearing.spec.ts >> Disappearing Elements Test
- Location: tests\disappearing.spec.ts:3:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'goToDisappearingElements')
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Disappearing Elements Test', async (args: any) => {
  4  |   const { homePage, disappearingPage } = args as { homePage: any; disappearingPage: any };
  5  | 
  6  |   // Step 1: open home page
  7  |  // await homePage.navigate();
  8  | 
  9  |   // Step 2: click Disappearing Elements
> 10 |   await homePage.goToDisappearingElements();
     |                  ^ TypeError: Cannot read properties of undefined (reading 'goToDisappearingElements')
  11 | 
  12 |   // Step 3: validate stable elements
  13 |   await disappearingPage.validateStaticTabs();
  14 | 
  15 |   // Step 4: check dynamic elements
  16 |   await disappearingPage.checkDynamicTabs();
  17 | 
  18 |   // Step 5: refresh and check again
  19 |   await disappearingPage.refreshPage();
  20 |   await disappearingPage.checkDynamicTabs();
  21 | 
  22 | });
  23 | 
```