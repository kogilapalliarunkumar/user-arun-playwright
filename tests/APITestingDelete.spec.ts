import { test, expect } from '@playwright/test';

test('DELETE Employee by ID', async ({ request }) => {

  const employeeId = 2;
  const apiUrl = `https://dummy.restapiexample.com/api/v1/delete/${employeeId}`;

  let response;

  // Retry 
  for (let i = 0; i < 3; i++) {
    response = await request.delete(apiUrl, {
      ignoreHTTPSErrors: true
    });

    console.log(`Attempt ${i + 1} - Status: ${response.status()}`);

    if (response.status() === 200) break;

    await new Promise(res => setTimeout(res, 1000));
  }

  // Status validation
  expect(response!.status()).toBe(200);

  const responseData = await response!.json();

  console.log('\n Full API Response:');
  console.log(JSON.stringify(responseData, null, 2));

  // Expected vs Actual
  const expectedResult = {
    status: 'success'
  };

  const actualResult = {
    status: responseData.status,
    message: responseData.message
  };

  // PRINT OUTPUT
  console.log('\n========= EXPECTED RESULT =========');
  console.log(JSON.stringify(expectedResult, null, 2));

  console.log('\n========= ACTUAL RESULT =========');
  console.log(JSON.stringify(actualResult, null, 2));

  console.log('\n========= COMPARISON =========');
  console.table({
    EXPECTED: expectedResult,
    ACTUAL: actualResult
  });

  //Validations
  expect(responseData).toBeDefined();
  expect(responseData.status).toBeDefined();
  expect(responseData.message).toBeDefined();

  expect(actualResult.status).toBe(expectedResult.status);
  expect(actualResult.message.toLowerCase()).toContain('success');

  console.log(`\n Delete Message: ${responseData.message}`);
});