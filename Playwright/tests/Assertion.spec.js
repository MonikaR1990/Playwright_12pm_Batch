//Assertion = testing
//Hard Assert
//Soft Assert

import {test, expect} from '@playwright/test'

test('toBeVisible', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value="Log in"]').click()

    let account = page.locator('.account').first()
    //let account = page.locator("//a[contains(text(),'gmail.com')]")
    await expect(account).toBeVisible()
})

//Check the Exact Text (Visible Text)
test('toHaveText', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value="Log in"]').click()

    await expect(page.locator('.ico-logout')).toHaveText('Log out')
})

//Check the Partial Text (Visible Text)
test('toContainText', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    await page.locator('#Email').fill("sonya.a@gmail.com")
    await page.locator('#Password').fill("sonya@123")
    await page.locator('[value="Log in"]').click()

    const account = page.locator('.account').first()
    await expect(account).toContainText('sonya') 
    await expect(account).toHaveText('sonya.a@gmail.com')
})
test('toHaveURL', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator('.ico-login').click()

    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
})
test('toHaveTitle', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator('.ico-login').click()

    await expect(page).toHaveTitle('Demo Web Shop. Wishlist')
})
test('toBeEnabled', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")

    await page.locator('.ico-login').click()

    const signInHeading = page.locator('h1')

    await expect(signInHeading).toBeEnabled()   //toBeEnabled mainly for buttons
})
test('toBeDisibled', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()

    const signINHeading = page.locator('h1')

    await expect(signINHeading).toBeVisible()

    await expect(signINHeading).toBeEnabled()

    await expect(signINHeading).toBeDisabled()

})
test('toHaveValue', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    const userEmail = page.locator('#Email')
    await userEmail.fill('meenu@gmail.com')

    await expect(userEmail).toHaveValue('meenu@gmail.com')
})
test('toBeChecked', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#male').check()

    await expect(page.locator('#male')).toBeChecked()
})
test('toHaveCount', async({page})=>{
    await page.goto("https://www.saucedemo.com/inventory.html")
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    const products = page.locator('.inventory_item_name ')
    await expect(products).toHaveCount(7) //ensure the element count
})
test('toHaveAttribute', async({page})=>{
    await page.goto("https://www.saucedemo.com")
    await expect(page.locator('#user-name')).toHaveAttribute('placeholder', 'Username')
    await expect(page.locator('#user-name')).toHaveAttribute('placeholder', 'Username')

    //verify email field
    //verify password
    //verify login button
    //verify image => src = "logo.png"
    //verify hyperlink => href "/home"
})

//toBe (Genric value test, number, string, boolean)
test('toBe', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()

    const title = await page.title()
    expect(title).toBe('Demo Web Shop. Login')
})

test('toEqual', async()=>{
    const actual = {
        name: "Bala",
        id: 101
    }
    const expected = {
        name: "Bala",
        id: 101
    }

    expect(actual).toEqual(expected)
})

test('toEqual Array', async({page})=>{
    const fruits = ['Apple', 'Mango', 'Orange']
    const expectedFruits = ['Apple', 'Mango', 'Orange']

    expect(fruits).toEqual(expectedFruits)
})

test('toContain', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    await page.locator('.ico-login').click()
    
    const title = await page.title() //Demo Web Shop. Login
    expect(title).toContain('Login')

    //account element ==> toContainText ==> await
    //title string ==> toContain ==> no need await
})

test('toBeTruthy', async()=>{
    const userName = "Monika"
    expect(userName).toBeTruthy() //Passed

    const id = null
    expect(id).toBeTruthy()  //Failed
})

test('toBeFalsy', async()=>{
    const id = 0
    expect(id).toBeFalsy()
})

test('toMatch', async({})=>{
    const phone = 9600393318
    expect(phone.toString()).toMatch(/^\d{10}$/)

    //Regular Expression, Date, mail id, phone number, address, zip code

})

















