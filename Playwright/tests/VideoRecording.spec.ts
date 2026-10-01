import {test, expect} from '@playwright/test'

test('Open Google Page', async({page})=>{
    await page.goto("https://www.google.com/")
    await page.locator('[name="q"]').fill("Playwright")
    await page.locator('[name="q"]').press('Enter')
})

test('ScreenShot 4', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill("standard_user") //valid login test
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveURL(/inventory12.html/)
})