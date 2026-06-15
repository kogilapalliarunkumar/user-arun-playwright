import { test } from '../Fixtures/dynamicFixtures';
import { expect } from '@playwright/test';

test.describe('Dynamic Loading Tests', () => {

  test('Example 1 - Validate Hello World appears', async ({ dynamicPage }) => {
    await dynamicPage.page.click('text=Example 1');
    await dynamicPage.page.click('text=Start');
    await expect(dynamicPage.page.locator('#finish')).toContainText('Hello World!');

  });

});