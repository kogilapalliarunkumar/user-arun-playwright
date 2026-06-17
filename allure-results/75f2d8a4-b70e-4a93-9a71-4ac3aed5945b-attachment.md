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
  13 |   const apiurl = 'https://dummy.restapiexample.com/api/v1/employees';
  14 | 
  15 |   const expectedEmployee = {
  16 |     id: 1,
  17 |     employee_name: 'Tiger Nixon',
  18 |     employee_salary: 320800,
  19 |     employee_age: 61,
  20 |     profile_image: ""
  21 |   };
  22 | 
> 23 |   const response = await request.get(apiurl);
     |                                  ^ Error: apiRequestContext.get: unable to get local issuer certificate
  24 |   expect(response.status()).toBe(200);
  25 | 
  26 |   const responseData = await response.json();
  27 | 
  28 |   expect(responseData.status).toBe('success');
  29 |   expect(Array.isArray(responseData.data)).toBeTruthy();
  30 | 
  31 |   const tigerNixon = responseData.data.find(
  32 |     (emp: Employee) => emp.id === expectedEmployee.id
  33 |   );
  34 | 
  35 |   if (!tigerNixon) {
  36 |     throw new Error('Employee with ID 1 not found');
  37 |   }
  38 | 
  39 |   expect({
  40 |     id: tigerNixon.id,
  41 |     employee_name: tigerNixon.employee_name,
  42 |     employee_salary: Number(tigerNixon.employee_salary),
  43 |     employee_age: Number(tigerNixon.employee_age),
  44 |     profile_image: tigerNixon.profile_image ?? ''
  45 |   }).toMatchObject(expectedEmployee);
  46 | });
```