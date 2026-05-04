const loginpage = require("../pages/loginPage")
const homepage = require("../pages/homePage")
const cartpage = require("../pages/cartPage")
const paymentpage = require("../pages/paymentPage");
class POManager {
    constructor(page) {
        this.loginPage = new loginpage(page);
        this.homePage = new homepage(page);
        this.cartPage = new cartpage(page);
        this.paymentPage = new paymentpage(page);
    }
    getLoginPage() {
        return this.loginPage;
    }
    getHomePage() {
        return this.homePage;
    }
    getCartPage() {
        return this.cartPage;
    }
    getPaymentPage() {
        return this.paymentPage;
    }
}
module.exports = POManager