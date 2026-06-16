import { test } from '../Fixtures/jsAlertsFixtures';

test.describe('JavaScript Alerts Tests', () => 
    {

  test('JS Alert (OK)', async ({ jsAlertsPage }) => 
    {
    await jsAlertsPage.handleJSAlert();
    await jsAlertsPage.verifyJSAlert();
  });

  test('JS Confirm - Accept', async ({ jsAlertsPage }) => 
    {
    await jsAlertsPage.handleJSConfirmAccept();
    await jsAlertsPage.verifyJSConfirmAccept();
  });

  test('JS Confirm - Cancel', async ({ jsAlertsPage }) =>
     {
    await jsAlertsPage.handleJSConfirmCancel();
    await jsAlertsPage.verifyJSConfirmCancel();
  });

  test('JS Prompt', async ({ jsAlertsPage }) => 
    {
    await jsAlertsPage.handleJSPrompt('Hello Arun');
    await jsAlertsPage.verifyJSPrompt('Hello Arun');
  });

});
``