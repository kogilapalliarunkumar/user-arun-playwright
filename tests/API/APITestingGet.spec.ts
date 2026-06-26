import { test, expect } from '@playwright/test';

interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number | string;
  employee_age: number | string;
  profile_image?: string;
}

test.skip('Get the employees data (Tiger Nixon)', async ({ request }) => {

  const apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';

  const expectedEmployee = {
    id: 1,
    employee_name: 'Tiger Nixon',
    employee_salary: 320800,
    employee_age: 61,
    profile_image: ''
  };

  let response;

  for (let i = 0; i < 3; i++) {
    response = await request.get(apiUrl,
         {
            ignoreHTTPSErrors: true
         });

    if (response.status() === 200) break;

    console.log(`Retrying... Attempt ${i + 1}`);
    await new Promise(res => setTimeout(res, 1000));
  }

  expect(response!.status()).toBe(200);

  const responseData = await response!.json();

  console.log('\n Full API Response:');
  console.log(JSON.stringify(responseData, null, 2));


  expect(responseData).toHaveProperty('status', 'success');
  expect(Array.isArray(responseData.data)).toBeTruthy();

  const tigerNixon = responseData.data.find(
    (emp: Employee) => emp.id === expectedEmployee.id
  );

  if (!tigerNixon) {
    throw new Error('Employee with ID 1 not found');
  }


  const actualEmployee = {
    id: tigerNixon.id,
    employee_name: tigerNixon.employee_name,
    employee_salary: Number(tigerNixon.employee_salary),
    employee_age: Number(tigerNixon.employee_age),
    profile_image: tigerNixon.profile_image ?? ''
  };


  console.log('\n========= EXPECTED RESULT =========');
  console.log(JSON.stringify(expectedEmployee, null, 2));

  console.log('\n========= ACTUAL RESULT =========');
  console.log(JSON.stringify(actualEmployee, null, 2));

  console.log('\n========= COMPARISON TABLE =========');
  console.table({
    EXPECTED: expectedEmployee,
    ACTUAL: actualEmployee
  });

  expect(actualEmployee).toMatchObject(expectedEmployee);

});