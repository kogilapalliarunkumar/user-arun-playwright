# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dynamicLoading.spec.ts >> Dynamic Loading - Example 1 >> Validate Hello World appears after loading
- Location: tests\dynamicLoading.spec.ts:5:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Start")')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Dynamic Loading - Example 1', () => {
  4  | 
  5  |   test('Validate Hello World appears after loading', async ({ page }:
  6  |      { page: import('@playwright/test').Page }) => 
  7  |         {
  8  | 
  9  |     // Click Start
> 10 |     await page.click('button:has-text("Start")');
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  11 | 
  12 |     // Wait for Hello World to appear
  13 |     await expect(page.locator('text=Hello World!')).toBeVisible();
  14 |   });
  15 | 
  16 | });
```