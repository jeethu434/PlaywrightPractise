const { expect } = require('@playwright/test')
class homePage {
    constructor(page) {
        this.page = page;
        this.productList = this.page.locator("//div[@class='card-body']//b");
        this.cart_link = this.page.locator("//button[@class='btn btn-custom' and contains(text(),'Cart')]");
        this.toster_meassge= this.page.locator("//div[@class='overlay-container']");
    }
    async serachAndAddProductToCart(productName) {
        await this.productList.first().waitFor();
        const products = await this.productList.allTextContents();
        for (let product of products) {
            console.log(product)
        }
        await this.page.locator(".card-body").filter({ hasText: productName }).locator("button[style='float: right;']").click();
        expect(await this.toster_meassge).toContainText("Product Added To Cart");
        await this.cart_link.click();
    }
}
module.exports = homePage