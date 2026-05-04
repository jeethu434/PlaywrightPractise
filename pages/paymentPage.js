const { expect } = require('@playwright/test')
class paymentPage {
    constructor(page) {
        this.page = page;
        this.ShippingInformation_text = this.page.locator(".payment__shipping")
        this.SelectCountry_textfield = this.page.getByPlaceholder('Select Country')
        this.placeOrder_button = this.page.locator(".btnn.action__submit.ng-star-inserted")
        this.thankyouForTheOrder_text = this.page.locator(".hero-primary")
        this.SelectCountry_option = this.page.locator("//span[@class='ng-star-inserted' and text()=' India']")
        this.order_Id = this.page.locator("//h1[@class='hero-primary']/parent::td/parent::tr/following-sibling::tr/td").last()
    }
    async placeOrder(country) {
        await this.ShippingInformation_text.waitFor();
        expect(await this.ShippingInformation_text).toContainText("Shipping Information");
        await this.SelectCountry_textfield.pressSequentially(country);
        await this.SelectCountry_option.click();
        await this.placeOrder_button.click();
        await this.thankyouForTheOrder_text.waitFor();
        expect(await this.thankyouForTheOrder_text).toContainText("Thankyou for the order.")
        let orderID = await this.order_Id.textContent();
        orderID = orderID.trim()
        orderID = orderID.split(" ")[1]
        console.log(orderID);
    }
}

module.exports=paymentPage