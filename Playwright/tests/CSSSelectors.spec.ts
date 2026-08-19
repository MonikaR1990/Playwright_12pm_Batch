import {test} from '@playwright/test'

test('CSS Selector', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#name').fill("Harini")
    await page.locator('#email').fill("harini@gmail.com")
    await page.locator('.start').click()
    await page.locator('[placefolder="Enter EMail"]').fill("8798797987")


})

//CSS Selector

//1. id --> #idvalue
//2. classname --> .classvalue
//3. other attributes -->