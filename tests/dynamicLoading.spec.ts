import { test, expect } from '@playwright/test';

test.describe('Dynamic Loading - Example 1', () => {

  test('Validate Hello World appears after loading', async ({ page }) => 
    {

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    await page.click('#start button');

    await expect(page.locator('#finish h4')).toHaveText('Hello World!', { timeout: 15000 });

  });

});
