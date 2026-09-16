import {test} from '@playwright/test'

test('Iframe', async({page})=>{
    await page.goto('https://letcode.in/frame')

    const frame1 = page.frameLocator('#firstFr')
    await frame1.locator('[name="fname"]').fill("Bala")
    await frame1.locator('[name="lname"]').fill("G")

    const frame2 = frame1.frameLocator('[src="/innerframe"]')
    await frame2.locator('[name="email"]').fill('balag@gmail.com')

    await frame1.locator('[name="fname"]').clear()
    await frame1.locator('[name="lname"]').clear()

    await page.getByText('Contact').first().click()

})