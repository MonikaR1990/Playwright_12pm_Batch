import {test} from '../tests/LoginFixture.spec.js'
import {expect} from '@playwright/test'

test('TestCase 1', async({login})=>{
    await expect(login).toHaveURL('https://www.saucedemo.com/inventory.html')
})
test('TestCase 2', async({login})=>{
    await expect(login).toHaveTitle('Swag Labs')
})

test('TestCase 3', async({login})=>{
    const title = login.locator('.title')
    await expect(title).toBeVisible()
})











