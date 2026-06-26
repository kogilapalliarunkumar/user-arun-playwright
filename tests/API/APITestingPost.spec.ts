import { test, expect } from '@playwright/test';

test.describe.skip('Employee Create API Tests - POST', () => {

  const apiUrl = 'https://dummy.restapiexample.com/api/v1/create';

  const requestBody = {
    name: 'test',
    salary: '123',
    age: '23'
  };

  test('POST Create Employee - validate response', async ({ request }) => {

    let response;

    // Retry + SSL handling
    for (let i = 0; i < 3; i++) {
      response = await request.post(apiUrl, {
        data: requestBody,
        ignoreHTTPSErrors: true
      });

      console.log(`Attempt ${i + 1} - Status: ${response.status()}`);

      if ([200].includes(response.status())) break;

      await new Promise(res => setTimeout(res, 1000));
    }

    // Status validation
    expect([200, 201]).toContain(response!.status());

    const responseData = await response!.json();

    console.log('\n Full API Response:');
    console.log(JSON.stringify(responseData, null, 2));

    // Validate structure
    expect(responseData?.data).toBeDefined();

    const data = responseData.data;

    // Prepare expected vs actual
    const expectedResult = {
      name: requestBody.name,
      salary: Number(requestBody.salary),
      age: Number(requestBody.age)
    };

    const actualResult = {
      name: data.name,
      salary: Number(data.salary),
      age: Number(data.age)
    };

    // PRINT OUTPUT
    console.log('\n========= EXPECTED RESULT =========');
    console.log(JSON.stringify(expectedResult, null, 2));

    console.log('\n========= ACTUAL RESULT =========');
    console.log(JSON.stringify(actualResult, null, 2));

    console.log('\n=========COMPARISON TABLE =========');
    console.table({
      EXPECTED: expectedResult,
      ACTUAL: actualResult
    });

    // Assertions
    expect(data).toHaveProperty('id');
    expect(actualResult).toMatchObject(expectedResult);

    console.log(`\n Created Employee ID: ${data.id}`);

  });

});
