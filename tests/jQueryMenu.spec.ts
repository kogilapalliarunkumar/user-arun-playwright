import { test } from '../Fixtures/jQueryMenuFixtures';

test.describe('JQuery UI Menu Tests', () => {

  test('Validate JQuery UI Menus link', async ({ jQueryMenuPage }) => {
    await jQueryMenuPage.clickJQueryLink();
    await jQueryMenuPage.verifyNavigationToJQuery();
  });

  test('Navigate to Downloads -> PDF', async ({ jQueryMenuPage }) => {
    await jQueryMenuPage.hoverEnabled();
    await jQueryMenuPage.hoverDownloads();
    await jQueryMenuPage.clickPDF();
  });

  test('Navigate to Downloads -> CSV', async ({ jQueryMenuPage }) => {
    await jQueryMenuPage.hoverEnabled();
    await jQueryMenuPage.hoverDownloads();
    await jQueryMenuPage.clickCSV();
  });

  test('Navigate to Downloads -> Excel', async ({ jQueryMenuPage }) => {
    await jQueryMenuPage.hoverEnabled();
    await jQueryMenuPage.hoverDownloads();
    await jQueryMenuPage.clickExcel();
  });

});