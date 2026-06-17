# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITestingGet.spec.ts >> Get the employees data (Tiger Nixon)
- Location: tests\APITestingGet.spec.ts:11:5

# Error details

```
Error: apiRequestContext.get: unable to get local issuer certificate
Call log:
  - → GET https://dummy.restapiexample.com/api/v1/employees
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

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
  25 |   // ✅ Retry logic (important for this unstable API)
  26 |   for (let i = 0; i < 3; i++) {
> 27 |     response = await request.get(apiUrl);
     |                              ^ Error: apiRequestContext.get: unable to get local issuer certificate
  28 | 
  29 |     if (response.status() === 200) {
  30 |       break;
  31 |     }
  32 |     await new Promise(res => setTimeout(res, 1000));
  33 |   }
  34 | 
  35 |   // ✅ Status validation
  36 |   expect(response!.status()).toBe(200);
  37 | 
  38 |   const responseData = await response!.json();
  39 | 
  40 |   console.log('Full API Response:', JSON.stringify(responseData, null, 2));
  41 | 
  42 |   // ✅ Validate structure
  43 |   expect(responseData).toHaveProperty('status', 'success');
  44 |   expect(Array.isArray(responseData.data)).toBeTruthy();
  45 |   expect(responseData.data.length).toBeGreaterThan(0);
  46 | 
  47 |   // ✅ Find employee
  48 |   const tigerNixon = responseData.data.find(
  49 |     (emp: Employee) => emp.id === expectedEmployee.id
  50 |   );
  51 | 
  52 |   // ✅ Fail fast if not found
  53 |   if (!tigerNixon) {
  54 |     throw new Error('Employee with ID 1 not found in API response');
  55 |   }
  56 | 
  57 |   console.log('Tiger Nixon Data:', tigerNixon);
  58 | 
  59 |   // ✅ Final validation
  60 |   expect({
  61 |     id: tigerNixon.id,
  62 |     employee_name: tigerNixon.employee_name,
  63 |     employee_salary: Number(tigerNixon.employee_salary),
  64 |     employee_age: Number(tigerNixon.employee_age),
  65 |     profile_image: tigerNixon.profile_image ?? ''
  66 |   }).toMatchObject(expectedEmployee);
  67 | 
  68 | });
```