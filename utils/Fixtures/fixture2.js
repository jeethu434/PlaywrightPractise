import { test as base,expect} from '@playwright/test'

export const test= base.extend({
    loginToApp : async({browser},use)=>{
    const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
            await page.getByRole('textbox', { name: 'email@example.com' }).fill("tester@test.com");
            await page.getByRole('textbox', { name: 'enter your passsword' }).fill("Test@123");
            await page.getByRole('button', { name: 'Login' }).click();
            expect(await page.locator("//div[@class='overlay-container']")).toContainText("Login Successfully");
            await use(page);

    }
})