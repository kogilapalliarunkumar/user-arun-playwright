import { test } from '../Fixtures/floatfixtures';
import { expect } from '@playwright/test';

test.describe('Floating Menu Tests', () => {

  test('Verify menu is visible on page load', async ({ floatingMenuPage }) => {
    await floatingMenuPage.verifyMenuVisible();
  });

  test('Verify menu remains visible after scrolling', async ({ floatingMenuPage }) => {
    await floatingMenuPage.scrollPage();
    await floatingMenuPage.verifyMenuStillVisibleAfterScroll();
  });

  test('Verify menu links are clickable and URLs update', async ({ floatingMenuPage, page }) => {
    
    await floatingMenuPage.clickHome();
    await expect(page).toHaveURL(/#home/);

    await floatingMenuPage.clickNews();
    await expect(page).toHaveURL(/#news/);

    await floatingMenuPage.clickContact();
    await expect(page).toHaveURL(/#contact/);

    await floatingMenuPage.clickAbout();
    await expect(page).toHaveURL(/#about/);
  });

});