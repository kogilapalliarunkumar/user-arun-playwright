import { test } from '../Fixtures/alertFixture';

test('Context Menu Alert Test', async ({ alertPage }) => {

  await alertPage.navigateToContextMenu();

  await alertPage.rightClickAndValidateAlert();

});