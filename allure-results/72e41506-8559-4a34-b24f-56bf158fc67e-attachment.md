# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo2.spec.js >> Place order for different datasets iphone 13 pro
- Location: tests\demo2.spec.js:5:6

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e7]: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e15]: 
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e17]: 
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading "Practice Website for Rahul Shetty Academy Students" [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]: tester@test.com
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]: Test@123
          - button "Login" [active] [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e50]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e55]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e60]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e71]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | const {test,expect} = require('../utils/Fixtures/fixture')
  2  | const dataSet = JSON.parse(JSON.stringify(require("../utils/testdataSet.json")))
  3  | //test.describe.configure({mode:"serial"});
  4  | for (let data of dataSet) {
  5  |      test(`Place order for different datasets ${data.productName}`, async ({loginToApp} ) => {
> 6  |           await page.locator("//div[@class='card-body']//b").first().waitFor();
     |           ^ ReferenceError: page is not defined
  7  |           const products = await page.locator("//div[@class='card-body']//b").allTextContents();
  8  |           for (let product of products) {
  9  |                console.log(product)
  10 |           }
  11 |           await page.locator(".card-body").filter({ hasText: data.productName }).locator("button[style='float: right;']").click();
  12 |           expect(await page.locator("//div[@class='overlay-container']")).toContainText("Product Added To Cart");
  13 |           await page.locator("//button[@class='btn btn-custom' and contains(text(),'Cart')]").click();
  14 |           await page.locator(".cartSection h3").waitFor();
  15 |           expect(await page.locator(".cartSection h3")).toHaveText(data.productName);
  16 |           await page.getByRole("button", { name: "Checkout" }).click();
  17 |           await page.locator(".payment__shipping").waitFor();
  18 |           expect(await page.locator(".payment__shipping")).toContainText("Shipping Information");
  19 |           await page.getByPlaceholder('Select Country').pressSequentially('india');
  20 |           await page.locator("//span[@class='ng-star-inserted' and text()=' India']").click();
  21 |           await page.locator(".btnn.action__submit.ng-star-inserted").click();
  22 |           await page.locator(".hero-primary").waitFor();
  23 |           expect(await page.locator(".hero-primary")).toContainText("Thankyou for the order.")
  24 |           let orderID = await page.locator("//h1[@class='hero-primary']/parent::td/parent::tr/following-sibling::tr/td").last().textContent();
  25 |           orderID = orderID.trim()
  26 |           orderID = orderID.split(" ")[1]
  27 |           console.log(orderID);
  28 |      })
  29 | }
```