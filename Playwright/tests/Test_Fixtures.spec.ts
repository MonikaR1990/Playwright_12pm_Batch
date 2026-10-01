//Test Fixtures

//Test fixture is a pre-defined setup or reusable object/data

// {page} is playwright fixture


//common playwright fixtures
//browser ==> Browser Instance
//context ==> separate browser Session
//page ==> Brower tab/page
//browserName ==> Name of the browser
//request ==> API request object

//page fixture ==> automatically open the browser application, session create (context). every tab open a page 

import {chromium, test} from '@playwright/test'

test('Fixture_1', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.amazon.in/")
})
test('Fixture_2', async({context})=>{
    const page = await context.newPage()
    await page.goto("https://www.amazon.in/")
})
test('Fixtue_3', async({page})=>{
    await page.goto("https://www.amazon.in/")
})

// async browserLaunch()
// {
// const browser = await chromium.launch()
// const context = await browser.newContext()
// const page = await context.newPage()
// await page.goto("https://www.amazon.in/")
// }
    
test('Two User Login', async({browser})=>{
    const context1 = await browser.newContext()
    const context2 = await browser.newContext()

    const user1 = await context1.newPage()
    const user2 = await context2.newPage()

    await user1.goto("https://www.saucedemo.com/")
    await user1.locator('#user-name').fill("standard_user")
    await user1.locator('#password').fill("secret_sauce")
    await user1.locator('#login-button').click()

    await user2.goto("https://www.saucedemo.com/")
    await user2.locator('#user-name').fill("locked_out_user")
    await user2.locator('#password').fill("secret_sauce")
    await user2.locator('#login-button').click()

})

//Each context has its own
//1. session
//2. cookies
//3. storage
//4. Browser Data
//5. Login status

