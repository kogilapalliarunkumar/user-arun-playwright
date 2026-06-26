# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\APITestingPost.spec.ts >> Employee Create API Tests - POST >> POST Create Employee - validate response
- Location: tests\API\APITestingPost.spec.ts:13:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected value: 429
Received array: [200, 201]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Employee Create API Tests - POST', () => {
  4  | 
  5  |   const apiUrl = 'https://dummy.restapiexample.com/api/v1/create';
  6  | 
  7  |   const requestBody = {
  8  |     name: 'test',
  9  |     salary: '123',
  10 |     age: '23'
  11 |   };
  12 | 
  13 |   test('POST Create Employee - validate response', async ({ request }) => {
  14 | 
  15 |     let response;
  16 | 
  17 |     // Retry + SSL handling
  18 |     for (let i = 0; i < 3; i++) {
  19 |       response = await request.post(apiUrl, {
  20 |         data: requestBody,
  21 |         ignoreHTTPSErrors: true
  22 |       });
  23 | 
  24 |       console.log(`Attempt ${i + 1} - Status: ${response.status()}`);
  25 | 
  26 |       if ([200].includes(response.status())) break;
  27 | 
  28 |       await new Promise(res => setTimeout(res, 1000));
  29 |     }
  30 | 
  31 |     // Status validation
> 32 |     expect([200, 201]).toContain(response!.status());
     |                        ^ Error: expect(received).toContain(expected) // indexOf
  33 | 
  34 |     const responseData = await response!.json();
  35 | 
  36 |     console.log('\n Full API Response:');
  37 |     console.log(JSON.stringify(responseData, null, 2));
  38 | 
  39 |     // Validate structure
  40 |     expect(responseData?.data).toBeDefined();
  41 | 
  42 |     const data = responseData.data;
  43 | 
  44 |     // Prepare expected vs actual
  45 |     const expectedResult = {
  46 |       name: requestBody.name,
  47 |       salary: Number(requestBody.salary),
  48 |       age: Number(requestBody.age)
  49 |     };
  50 | 
  51 |     const actualResult = {
  52 |       name: data.name,
  53 |       salary: Number(data.salary),
  54 |       age: Number(data.age)
  55 |     };
  56 | 
  57 |     // PRINT OUTPUT
  58 |     console.log('\n========= EXPECTED RESULT =========');
  59 |     console.log(JSON.stringify(expectedResult, null, 2));
  60 | 
  61 |     console.log('\n========= ACTUAL RESULT =========');
  62 |     console.log(JSON.stringify(actualResult, null, 2));
  63 | 
  64 |     console.log('\n=========COMPARISON TABLE =========');
  65 |     console.table({
  66 |       EXPECTED: expectedResult,
  67 |       ACTUAL: actualResult
  68 |     });
  69 | 
  70 |     // Assertions
  71 |     expect(data).toHaveProperty('id');
  72 |     expect(actualResult).toMatchObject(expectedResult);
  73 | 
  74 |     console.log(`\n Created Employee ID: ${data.id}`);
  75 | 
  76 |   });
  77 | 
  78 | });
  79 | 
```