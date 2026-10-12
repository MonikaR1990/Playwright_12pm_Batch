import { Before, After, setDefaultTimeout } from "@cucumber/cucumber"; 
import { chromium, Browser, BrowserContext, Page } from "@playwright/test"; 
import { CustomWorld } from '../hooks/world'

setDefaultTimeout(30000);

Before(async function(){
    this.browser = await chromium.launch()
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()
})

After(async function () {
    if(this.page)
    {
        await this.page.close()
    }
    if(this.context)
    {
        await this.context.close()
    }
    if(this.browser)
    {
        await this.browser.close()
    }
})
