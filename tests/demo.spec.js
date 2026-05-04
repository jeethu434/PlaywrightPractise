const {test,expect} = require('@playwright/test')
const dataSet = JSON.parse(JSON.stringify(require("../utils/testdataSet.json")))
test.describe.configure({mode:"serial"});
for(let data of dataSet){
     test(`Place order for different datasets ${data.productName}`,async ({browser})=>{
        const context = await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     await page.getByRole('textbox', { name: 'email@example.com' }).fill(data.userName);
     await page.getByRole('textbox', { name: 'enter your passsword' }).fill(data.password);
     await page.getByRole('button', { name: 'Login' }).click();
     expect(await page.locator("//div[@class='overlay-container']")).toContainText("Login Successfully");
     await page.locator("//div[@class='card-body']//b").first().waitFor();
     const products = await page.locator("//div[@class='card-body']//b").allTextContents();
     for(let product of products){
          console.log(product)
     }
     await page.locator(".card-body").filter({hasText:data.productName}).locator("button[style='float: right;']").click();
     expect(await page.locator("//div[@class='overlay-container']")).toContainText("Product Added To Cart");
     await page.locator("//button[@class='btn btn-custom' and contains(text(),'Cart')]").click();
     await page.locator(".cartSection h3").waitFor();
     expect(await page.locator(".cartSection h3")).toHaveText(data.productName);
     await page.getByRole("button",{name:"Checkout"}).click();
     await page.locator(".payment__shipping").waitFor();
     expect (await page.locator(".payment__shipping")).toContainText("Shipping Information");
     await page.getByPlaceholder('Select Country').pressSequentially('india');
     await page.locator("//span[@class='ng-star-inserted' and text()=' India']").click();
     await page.locator(".btnn.action__submit.ng-star-inserted").click();
     await page.locator(".hero-primary").waitFor();
     expect(await page.locator(".hero-primary")).toContainText("Thankyou for the order.")
     let orderID=await page.locator("//h1[@class='hero-primary']/parent::td/parent::tr/following-sibling::tr/td").last().textContent();
     orderID=orderID.trim()
     orderID=orderID.split(" ")[1]
     console.log(orderID);  
     })
}