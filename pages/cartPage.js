const {expect} = require('@playwright/test')
class cartPage {
    constructor(page) {
        this.page = page;
        this.productInCart = this.page.locator(".cartSection h3");
        this.checkout_button = this.page.getByRole("button", { name: "Checkout" })
    }

    async moveProductFromPayment(productName) {
        await this.productInCart .waitFor();
        expect(await this.productInCart).toHaveText(productName);
        await this.checkout_button.click();
    }
}
module.exports=cartPage