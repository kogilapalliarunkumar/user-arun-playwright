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
  - waiting for locator('text=Start')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Dynamic Loading - Example 1', () => {
  4  | 
  5  |   test('Validate Hello World appears after loading', async ({ page }: { page: import('@playwright/test').Page }) => {
  6  | 
  7  |     // Click Start
> 8  |     await page.click('text=Start');
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  9  | 
  10 |     // Wait for Hello World to appear
  11 |     await expect(page.locator('text=Hello World!')).toBeVisible();
  12 |   });
  13 | 
  14 | });
```