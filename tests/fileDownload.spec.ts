import { test } from '../Fixtures/fileDownloadFixture';

test.describe('File Download Tests', () => 
    {
    test('Download and verify file', async ({ fileDownloadPage }) => 
    {
    const fileName = 'some-file.txt';
    const download = await fileDownloadPage.downloadFile(fileName);
    await fileDownloadPage.verifyDownload(download, fileName);

  });

});
