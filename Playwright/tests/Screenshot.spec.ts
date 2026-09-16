import {test, expect} from '@playwright/test'

test('ScreenShot 1', async({page})=>{
    await page.goto("https://letcode.in/")
    await page.screenshot({path: 'E:\\letcodescreenshot.png', fullPage: true})
})
test('ScreenShot 2', async({page})=>{
    await page.goto("https://letcode.in/")
    await page.screenshot({path: `ScreenshotsImages/letcodeHomePage.jpg`})
})
test('Screenshot 3', async({page})=>{
    await page.goto("https://letcode.in/")
    const sandBox = page.locator("//span[contains(text(),'Quiz')]/parent::div")
    await sandBox.screenshot({path: `ScreenshotsImages/sandBox.jpg`})
})
test('ScreenShot 4', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill("standard_user") //valid login test
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveURL(/inventory1.html/)
})
test('ScreenShot 5', async({page})=>{
        const timeStamp = Date.now() //returns a number
        console.log(timeStamp)
        await page.goto("https://www.saucedemo.com/")
        await page.locator('#user-name').fill("standard_user") //valid login test
        await page.locator('#password').fill('secret_sauce')
        await page.locator('#login-button').click()

        await page.screenshot({path: `ScreenshotsImages/${timeStamp}.png`})
})


