# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.js >> Place order for different datasets iphone 13 pro
- Location: tests\demo.spec.js:5:6

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('.cartSection h3') resolved to 2 elements:
    1) <h3 _ngcontent-pya-c41="">ZARA COAT 3</h3> aka getByRole('heading', { name: 'ZARA COAT' })
    2) <h3 _ngcontent-pya-c41="">iphone 13 pro</h3> aka getByRole('heading', { name: 'iphone 13 pro' })

Call log:
  - waiting for locator('.cartSection h3') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e7]:
        - link "Automation Automation Practice":
          - /url: ""
          - generic [ref=e8] [cursor=pointer]:
            - heading "Automation" [level=3] [ref=e9]
            - paragraph [ref=e10]: Automation Practice
      - text: 
      - link "Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot" [ref=e11] [cursor=pointer]:
        - /url: http://qasummit.org/
      - list [ref=e12]:
        - listitem [ref=e13] [cursor=pointer]:
          - button " HOME" [ref=e14]:
            - generic [ref=e15]: 
            - text: HOME
        - listitem
        - listitem [ref=e16] [cursor=pointer]:
          - button " ORDERS" [ref=e17]:
            - generic [ref=e18]: 
            - text: ORDERS
        - listitem [ref=e19] [cursor=pointer]:
          - button " Cart 2" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
            - generic [ref=e22]: "2"
        - listitem [ref=e23] [cursor=pointer]:
          - button "Sign Out" [ref=e24]:
            - generic [ref=e25]: 
            - text: Sign Out
    - generic [ref=e26]:
      - generic [ref=e27]:
        - heading "My Cart" [level=1] [ref=e28]
        - button "Continue Shopping❯" [ref=e29] [cursor=pointer]
      - generic [ref=e30]:
        - list [ref=e31]:
          - listitem [ref=e32] [cursor=pointer]:
            - generic [ref=e33]:
              - generic [ref=e34]:
                - paragraph [ref=e35]: "#6960eac0c941646b7a8b3e68"
                - heading "ZARA COAT 3" [level=3] [ref=e36]
                - paragraph [ref=e37]: MRP $ 11500
                - paragraph [ref=e38]: In Stock
              - paragraph [ref=e40]: $ 11500
              - generic [ref=e41]:
                - button "Buy Now❯" [ref=e42]
                - button "❯" [ref=e43]:
                  - generic [ref=e44]: 
                  - text: ❯
        - list [ref=e45]:
          - listitem [ref=e46] [cursor=pointer]:
            - generic [ref=e47]:
              - generic [ref=e48]:
                - paragraph [ref=e49]: "#6960ea76c941646b7a8b3dd5"
                - heading "iphone 13 pro" [level=3] [ref=e50]
                - paragraph [ref=e51]: MRP $ 55000
                - paragraph [ref=e52]: In Stock
              - paragraph [ref=e54]: $ 55000
              - generic [ref=e55]:
                - button "Buy Now❯" [ref=e56]
                - button "❯" [ref=e57]:
                  - generic [ref=e58]: 
                  - text: ❯
      - list [ref=e60]:
        - listitem [ref=e61]:
          - generic [ref=e62]: Subtotal
          - generic [ref=e63]: $66500
        - listitem [ref=e64]:
          - generic [ref=e65]: Total
          - generic [ref=e66]: $66500
        - listitem [ref=e67]:
          - button "Checkout❯" [ref=e68] [cursor=pointer]
  - alert "Product Added To Cart" [ref=e70]
```

# Test source

```ts
  1  | const {test,expect} = require('@playwright/test')
  2  | const dataSet = JSON.parse(JSON.stringify(require("../utils/testdataSet.json")))
  3  | //test.describe.configure({mode:"serial"});
  4  | for(let data of dataSet){
  5  |      test(`Place order for different datasets ${data.productName}`,async ({browser})=>{
  6  |         const context = await browser.newContext();
  7  |      const page = await context.newPage();
  8  |      await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  9  |      await page.getByRole('textbox', { name: 'email@example.com' }).fill(data.userName);
  10 |      await page.getByRole('textbox', { name: 'enter your passsword' }).fill(data.password);
  11 |      await page.getByRole('button', { name: 'Login' }).click();
  12 |      expect(await page.locator("//div[@class='overlay-container']")).toContainText("Login Successfully");
  13 |      await page.locator("//div[@class='card-body']//b").first().waitFor();
  14 |      const products = await page.locator("//div[@class='card-body']//b").allTextContents();
  15 |      for(let product of products){
  16 |           console.log(product)
  17 |      }
  18 |      await page.locator(".card-body").filter({hasText:data.productName}).locator("button[style='float: right;']").click();
  19 |      expect(await page.locator("//div[@class='overlay-container']")).toContainText("Product Added To Cart");
  20 |      await page.locator("//button[@class='btn btn-custom' and contains(text(),'Cart')]").click();
> 21 |      await page.locator(".cartSection h3").waitFor();
     |                                            ^ Error: locator.waitFor: Error: strict mode violation: locator('.cartSection h3') resolved to 2 elements:
  22 |      expect(await page.locator(".cartSection h3")).toHaveText(data.productName);
  23 |      await page.getByRole("button",{name:"Checkout"}).click();
  24 |      await page.locator(".payment__shipping").waitFor();
  25 |      expect (await page.locator(".payment__shipping")).toContainText("Shipping Information");
  26 |      await page.getByPlaceholder('Select Country').pressSequentially('india');
  27 |      await page.locator("//span[@class='ng-star-inserted' and text()=' India']").click();
  28 |      await page.locator(".btnn.action__submit.ng-star-inserted").click();
  29 |      await page.locator(".hero-primary").waitFor();
  30 |      expect(await page.locator(".hero-primary")).toContainText("Thankyou for the order.")
  31 |      let orderID=await page.locator("//h1[@class='hero-primary']/parent::td/parent::tr/following-sibling::tr/td").last().textContent();
  32 |      orderID=orderID.trim()
  33 |      orderID=orderID.split(" ")[1]
  34 |      console.log(orderID);  
  35 |      })
  36 | }
```