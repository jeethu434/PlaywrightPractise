const {test,expect} = require('../utils/Fixtures/fixture2')
const dataSet = JSON.parse(JSON.stringify(require("../utils/testdataSet.json")))
test.describe.configure({mode:"serial"});
for (let data of dataSet) {
     test(`Place order for different datasets ${data.productName}`, async ({loginToApp} ) => {
          await loginToApp.locator("//div[@class='card-body']//b").first().waitFor();
          const products = await loginToApp.locator("//div[@class='card-body']//b").allTextContents();
          for (let product of products) {
               console.log(product)
          }
          await loginToApp.locator(".card-body").filter({ hasText: data.productName }).locator("button[style='float: right;']").click();
          expect(await loginToApp.locator("//div[@class='overlay-container']")).toContainText("Product Added To Cart");
          await loginToApp.locator("//button[@class='btn btn-custom' and contains(text(),'Cart')]").click();
          await loginToApp.locator(".cartSection h3").waitFor();
          expect(await loginToApp.locator(".cartSection h3")).toHaveText(data.productName);
          await loginToApp.getByRole("button", { name: "Checkout" }).click();
          await loginToApp.locator(".payment__shipping").waitFor();
          expect(await loginToApp.locator(".payment__shipping")).toContainText("Shipping Information");
          await loginToApp.getByPlaceholder('Select Country').pressSequentially('india');
          await loginToApp.locator("//span[@class='ng-star-inserted' and text()=' India']").click();
          await loginToApp.locator(".btnn.action__submit.ng-star-inserted").click();
          await loginToApp.locator(".hero-primary").waitFor();
          expect(await loginToApp.locator(".hero-primary")).toContainText("Thankyou for the order.")
          let orderID = await loginToApp.locator("//h1[@class='hero-primary']/parent::td/parent::tr/following-sibling::tr/td").last().textContent();
          orderID = orderID.trim()
          orderID = orderID.split(" ")[1]
          console.log(orderID);
     })
}