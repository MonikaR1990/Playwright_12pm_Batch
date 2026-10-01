//Custom Fixture is reusable setup

//once we create a fixture and reuse in across multiple tests

import {test as base} from '@playwright/test'
import {Page} from '@playwright/test'

type myFixture = {
    login: Page      //Page interface given as type for login
}

export const test = base.extend<myFixture>({
    login: async({page}, use) =>{
        await page.goto("https://www.saucedemo.com/")

        await page.locator('#user-name').fill("standard_user")
        await page.locator('#password').fill("secret_sauce")
        await page.locator('#login-button').click()

        await use(page)
    }
})


