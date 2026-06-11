import { test as base } from '@playwright/test';
import { Loginpage } from '../POM/loginPage';
export{expect} from '@playwright/test';

type myFixture = {
    loginPage: Loginpage;
};

export const test = base.extend<myFixture>({
    loginPage: async ({ page }, use) => {

        const loginPage = new Loginpage(page);

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await use(loginPage);

        //await page.waitForTimeout(3000);
    },
});