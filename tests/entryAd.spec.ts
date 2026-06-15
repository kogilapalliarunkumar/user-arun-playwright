import { test, expect } from '../Fixtures/entryAdFixture';

test.describe('Entry Ad Modal Tests', () => {

  test('Validate modal appears and can be closed', async ({ entryAdPage }) => {
    await entryAdPage.verifyModalVisible();
    await entryAdPage.closeModal();
    await entryAdPage.verifyModalClosed();

  });

});