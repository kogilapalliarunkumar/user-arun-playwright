/*
import { Page, Locator, expect } from '@playwright/test';

export class Loginpage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly myinfo: Locator;
    readonly errorMessage:Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('//input[@name="username"]');
        this.passwordInput = page.locator('//input[@name="password"]');
        this.loginButton = page.locator('//button[@type="submit"]');
        this.myinfo = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a/span');
        this.errorMessage=page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p');

    
    }
     async login(username:string,password:string)
     {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
     }
    async verifyValidationLogin()
    {
        await expect(this.myinfo).toBeVisible();
    }
    async verifyinvalidLogin()
    {
        await expect(this.errorMessage).toBeVisible();
    }
}
    */

import { Page, Locator, expect } from '@playwright/test';

export class Loginpage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly myinfo: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.usernameInput = page.locator('//input[@placeholder="Username"]');
        this.passwordInput = page.locator('//input[@placeholder="Password"]');
        this.loginButton = page.locator('//button[@type="submit"]');

        this.myinfo = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a/span');
        this.errorMessage = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p');
    }

    async login(username: string, password: string) {
        
        await this.usernameInput.waitFor();

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);

        
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.loginButton.click()
        ]);
    }

    async verifyValidationLogin() {
        
        await expect(this.myinfo).toBeVisible();
    }

    async verifyInvalidLogin() {
        await expect(this.errorMessage).toBeVisible();
    }
}
``
