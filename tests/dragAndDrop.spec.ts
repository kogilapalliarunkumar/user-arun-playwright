import { test } from '../Fixtures/dragAndDropFixture';

test('Drag and Drop Test', async ({ dragAndDropPage }) => {

  await dragAndDropPage.navigate();
  await dragAndDropPage.dragAtoB();
  await dragAndDropPage.verifySwap();

});