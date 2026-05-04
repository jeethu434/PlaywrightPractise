import { expect, test } from '@playwright/test'

test("Practise", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const lsitLocator = page.locator('//div[@class="tableFixHead"]//table[@id="product"]//tr');
    const count = await lsitLocator.count();
    const Amounts = [];
    for (let i = 1; i < count; i++) {
        Amounts.push(Number(await lsitLocator.nth(i).locator('//td').last().textContent()));
    }
    console.log(Amounts);
    const amount = Amounts.reduce((pn, cn) => pn + cn, 0);
    expect(await page.locator(".totalAmount").textContent()).toContain(String(amount));
    await page.locator("#checkBoxOption1").check();
    await expect(page.locator("#checkBoxOption1")).toBeChecked();
    await page.locator("#checkBoxOption1").uncheck();
    expect(await page.locator("#checkBoxOption1").isChecked()).toBe(false);
    await page.selectOption('#dropdown-class-example', 'option3');
    await page.locator("#autocomplete").fill('India');
    await page.locator('#ui-id-3').click();

    expect(await page.locator('#displayed-text').isVisible()).toBeTruthy();
    await page.locator('#hide-textbox').click();
    expect(await page.locator('#displayed-text').isVisible()).toBe(false);

    await page.locator("#mousehover").hover();
    await page.getByText('Reload').click();
    // await page.pause();
    const locato = page.frameLocator("#courses-iframe").getByText('Blog');
    await locato.first().click();
    await page.reload({ waitUntil: "networkidle" });
    await page.locator('#alertbtn').click();
    page.on("dialog", dialog => dialog.accept());
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('#opentab').click()

    ])

   await newPage.waitForLoadState();
   console.log(await newPage.title())



})
