import { test } from '../Fixtures/dynamicContentFixture';

test('Dynamic Content Test', async ({ dynamicContentPage }) => {

  await dynamicContentPage.navigate();

  // Capture initial content
  const oldText = await dynamicContentPage.getFirstContentText();

  // Refresh page by navigating again
  await dynamicContentPage.navigate();

  // Verify content changes
  await dynamicContentPage.verifyContentChanges();

});