import { test, expect } from '@playwright/test';

test.skip('PUT Update Employee', async ({ request }) => {

  const employeeId = 1;
  const apiUrl = `https://dummy.restapiexample.com/api/v1/update/${employeeId}`;

  const requestBody = {
    name: 'Arun',
    salary: '320800',
    age: '61'
  };

  let response;

  // Retry + SSL fix
  for (let i = 0; i < 3; i++) {
    response = await request.put(apiUrl, {
      data: requestBody,
      ignoreHTTPSErrors: true
    });

    console.log(`Attempt ${i + 1} - Status: ${response.status()}`);

    if ([200, 201].includes(response.status())) break;

    await new Promise(res => setTimeout(res, 1000));
  }

  // Validate status
  expect([200]).toContain(response!.status());

  const responseData = await response!.json();

  console.log('\n Full API Response:');
  console.log(JSON.stringify(responseData, null, 2));

  // Validate response structure
  expect(responseData).toBeDefined();
  expect(responseData.data).toBeDefined();

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

  console.log('\n========= COMPARISON TABLE =========');
  console.table({
    EXPECTED: expectedResult,
    ACTUAL: actualResult
  });
  
  expect(actualResult).toMatchObject(expectedResult);

});
