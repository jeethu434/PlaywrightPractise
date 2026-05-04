const {test} = require('@playwright/test')
const data = JSON.parse(JSON.stringify(require("../utils/testdata.json")))
const LoginPage = require('../pages/loginPage');
const HomePage =require('../pages/homePage');
const CartPage =require('../pages/cartPage');
const PaymentPage = require('../pages/paymentPage');

test("End to End", async ({browser})=>{
     const context = await browser.newContext();
     const page = await context.newPage();
     const loginPage = new LoginPage(page);
     await loginPage.loginToApp(data.userName,data.password)
     const homePage= new HomePage(page);
     await homePage.serachAndAddProductToCart(data.productName);
     const cartPage = new CartPage(page);
     await cartPage.moveProductFromPayment(data.productName);
     const paymentPage = new PaymentPage(page);
     await paymentPage.placeOrder('India');        
})

