const { Given, When, Then } = require('@cucumber/cucumber')
const pomanager = require('../../pages/POManager')
const { playwright, expect, test } = require('@playwright/test')

Given('Login to Ecommerce aplication with {string} and {string}', { timeout: 100 * 1000 }, async function(userName, password) {
    // Write code here that turns the phrase above into concrete actions
    await this.poManager.getLoginPage().loginToApp(userName, password);
});

When('Add {string} product to cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    await this.poManager.getHomePage().serachAndAddProductToCart(productName);
});
Then('Verify {string} is displayed in cart', async function (productName) {
    // Write code here that turns the phrase above into concrete actions
    await this.poManager.getCartPage().moveProductFromPayment(productName);
});
Then('Place the ordernpx', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.poManager.getPaymentPage().placeOrder('India');
});

Given('Navigate to playwright application', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.page.goto('https://playwright.dev/');
});

When('click on Get Started link', { timeout: 100 * 1000 }, async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.page.getByRole('link', { name: 'Get started' }).click();

});

Then('Verify Installation heading is visible', async function () {
    // Write code here that turns the phrase above into concrete actions
    await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});