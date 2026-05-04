const {test,expect} = require('@playwright/test');
const pomanager = require('../pages/POManager');
const data = JSON.parse(JSON.stringify(require("../utils/testdata.json")))
const POManager = require("../pages/POManager")
test("@Web End to End 2", async ({browser})=>{
     const context = await browser.newContext();
     const page = await context.newPage();
     const POManager = new pomanager(page);
     await POManager.getLoginPage().loginToApp(data.userName,data.password);
     await POManager.getHomePage().serachAndAddProductToCart(data.productName);
     await POManager.getCartPage().moveProductFromPayment(data.productName);
     await POManager.getPaymentPage().placeOrder('India');  


})

