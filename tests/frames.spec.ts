import { test } from '../Fixtures/framesFixtures';

test.describe('Frames & iFrame Tests', () => {

  test('Verify Nested Frames content', async ({ framesPage }) => {
    await framesPage.openNestedFrames();
    await framesPage.verifyNestedFrames();
  });

  test('Verify iFrame default text (Read-only)', async ({ framesPage }) => {
    await framesPage.openIFrame();

    await framesPage.verifyDefaultIFrameText();
  });

});
``