const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const POManager = require("../../pages/POManager");

Before(async function () {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // ✅ Use consistent property name
    this.poManager = new POManager(this.page);

    console.log("✅ Scenario started");
});

After(async function () {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
    console.log("✅ Scenario completed");
});
