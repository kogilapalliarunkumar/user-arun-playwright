import { test } from '../Fixtures/test-fixtures';
import { expect } from '@playwright/test';

test('Digest Authentication Test', async ({ digestPage }) => {
  await digestPage.navigateToPage();
  await digestPage.validateLoginSuccess();
});