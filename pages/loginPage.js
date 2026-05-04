const {expect} = require('@playwright/test')
class loginPage {
    constructor(page) {
        this.page = page;
        this.userName_textfield = this.page.getByRole('textbox', { name: 'email@example.com' });
        this.password_textfield = this.page.getByRole('textbox', { name: 'enter your passsword' });
        this.login_button = this.page.getByRole('button', { name: 'Login' });
        this.toster_meassge=page.locator("//div[@class='overlay-container']");
    }

    async loginToApp(userName,passsword) {
        await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
        await this.userName_textfield.fill("tester@test.com");
        await this.password_textfield.fill("Test@123");
        await this.login_button.click();
        expect(await this.toster_meassge).toContainText("Login Successfully");
    }
}

module.exports=loginPage