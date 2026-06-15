import { test } from '../Fixtures/dropdownFixture';

test('Dropdown Test - Select Option 1 and Option 2', async ({ dropdownPage }) => {

  await dropdownPage.navigate();

  await dropdownPage.selectOption1();
  await dropdownPage.verifyOption1Selected();

  await dropdownPage.selectOption2();
  await dropdownPage.verifyOption2Selected();

});
