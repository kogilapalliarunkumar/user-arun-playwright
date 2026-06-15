import { test } from '../Fixtures/disappearmessages';

test('Disappearing Elements Test', async ({ homePage, disappearingPage }) => {

  await homePage.navigate();
  await homePage.goToDisappearingElements();

  await disappearingPage.validateStaticTabs();
  await disappearingPage.checkDynamicTabs();

  await disappearingPage.refreshPage();

  await disappearingPage.checkDynamicTabs();
});