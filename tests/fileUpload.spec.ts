import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Upload file debug', async ({ page }) => {

  const fileName = 'Book1.xlsx';

  const filePath = path.join(process.cwd(), 'TestData', fileName);

  // ✅ DEBUG
  console.log('File exists:', fs.existsSync(filePath));
  console.log('File path:', filePath);

  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.setInputFiles('#file-upload', filePath);
  
  await page.click('#file-submit');

  await expect(page.locator('#uploaded-files'))
    .toHaveText(fileName);

});
