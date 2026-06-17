# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APITestingDelete.spec.ts >> DELETE Employee by ID
- Location: tests\APITestingDelete.spec.ts:3:5

# Error details

```
Error: apiRequestContext.delete: unable to get local issuer certificate
Call log:
  - → DELETE https://dummy.restapiexample.com/api/v1/delete/2
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('DELETE Employee by ID', async ({ request }) => {
  4  | 
  5  |   const employeeId = 2;
  6  |   const apiUrl = `https://dummy.restapiexample.com/api/v1/delete/${employeeId}`;
  7  | 
> 8  |   const response = await request.delete(apiUrl);
     |                                        ^ Error: apiRequestContext.delete: unable to get local issuer certificate
  9  | 
  10 |   console.log('Status:', response.status());
  11 | 
  12 |   expect(response.status()).toBe(200);
  13 | 
  14 |   const responseData = await response.json();
  15 | 
  16 |   console.log('Response:', JSON.stringify(responseData, null, 2));
  17 | 
  18 |   // Validate structure
  19 |   expect(responseData).toBeDefined();
  20 |   expect(responseData.status).toBeDefined();
  21 |   expect(responseData.message).toBeDefined();
  22 | 
  23 |   // Validate success message
  24 |   expect(responseData.status).toBe('success');
  25 |   expect(responseData.message.toLowerCase()).toContain('successfully');
  26 | });
```