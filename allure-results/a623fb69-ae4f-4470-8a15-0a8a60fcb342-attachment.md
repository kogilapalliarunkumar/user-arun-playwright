# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITestingGet.spec.ts >> Get the employees data (Tiger Nixon)
- Location: tests\APITestingGet.spec.ts:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 429
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | interface Employee {
  4  |   id: number;
  5  |   employee_name: string;
  6  |   employee_salary: number | string;
  7  |   employee_age: number | string;
  8  |   profile_image?: string;
  9  | }
  10 | 
  11 | test('Get the employees data (Tiger Nixon)', async ({ request }) => {
  12 | 
  13 |   const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
  14 | 
  15 |   const expectedEmployee = {
  16 |     id: 1,
  17 |     employee_name: 'Tiger Nixon',
  18 |     employee_salary: 320800,
  19 |     employee_age: 61,
  20 |     profile_image: ''
  21 |   };
  22 | 
  23 |   let response;
  24 | 
  25 |   for (let i = 0; i < 3; i++) {
  26 |     response = await request.get(apiUrl,
  27 |          {
  28 |             ignoreHTTPSErrors: true
  29 |          });
  30 | 
  31 |     if (response.status() === 200) break;
  32 | 
  33 |     console.log(`Retrying... Attempt ${i + 1}`);
  34 |     await new Promise(res => setTimeout(res, 1000));
  35 |   }
  36 | 
> 37 |   expect(response!.status()).toBe(200);
     |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  38 | 
  39 |   const responseData = await response!.json();
  40 | 
  41 |   console.log('\n Full API Response:');
  42 |   console.log(JSON.stringify(responseData, null, 2));
  43 | 
  44 | 
  45 |   expect(responseData).toHaveProperty('status', 'success');
  46 |   expect(Array.isArray(responseData.data)).toBeTruthy();
  47 | 
  48 |   const tigerNixon = responseData.data.find(
  49 |     (emp: Employee) => emp.id === expectedEmployee.id
  50 |   );
  51 | 
  52 |   if (!tigerNixon) {
  53 |     throw new Error('Employee with ID 1 not found');
  54 |   }
  55 | 
  56 | 
  57 |   const actualEmployee = {
  58 |     id: tigerNixon.id,
  59 |     employee_name: tigerNixon.employee_name,
  60 |     employee_salary: Number(tigerNixon.employee_salary),
  61 |     employee_age: Number(tigerNixon.employee_age),
  62 |     profile_image: tigerNixon.profile_image ?? ''
  63 |   };
  64 | 
  65 | 
  66 |   console.log('\n========= EXPECTED RESULT =========');
  67 |   console.log(JSON.stringify(expectedEmployee, null, 2));
  68 | 
  69 |   console.log('\n========= ACTUAL RESULT =========');
  70 |   console.log(JSON.stringify(actualEmployee, null, 2));
  71 | 
  72 |   console.log('\n========= COMPARISON TABLE =========');
  73 |   console.table({
  74 |     EXPECTED: expectedEmployee,
  75 |     ACTUAL: actualEmployee
  76 |   });
  77 | 
  78 |   expect(actualEmployee).toMatchObject(expectedEmployee);
  79 | 
  80 | });
```