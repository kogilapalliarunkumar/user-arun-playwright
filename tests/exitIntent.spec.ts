import { test, expect } from '../Fixtures/exitIntentFixture';

test.describe('Exit Intent Modal Tests', () => 
    {
   test('Validate modal appears on exit intent and closes', async ({ exitIntentPage }) => 
    {
    await exitIntentPage.triggerExitIntent();
    await exitIntentPage.verifyModalVisible();
    await exitIntentPage.closeModal();
    await exitIntentPage.verifyModalClosed();

  });

});