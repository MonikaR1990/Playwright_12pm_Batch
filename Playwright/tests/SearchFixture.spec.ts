import {test as base, Page} from '@playwright/test'

type mySearchFixture = {
    searchPage: Page
}

export const test = base.extend<mySearchFixture>({
    searchPage: async({page}, use)=>{
    
    //setup
    await page.goto("https://www.amazon.in/")

    //search the Laptop
    await page.locator("input#twotabsearchtextbox").fill("Laptop")
    await page.locator("#nav-search-submit-button").click()

    await use(page)  // give this prepared value to the test

    }
})