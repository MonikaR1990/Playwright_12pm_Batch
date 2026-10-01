import {test, expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

let home: HomePage
let login: LoginPage

test.beforeEach(async({ page })=>{
    home = new HomePage(page)
    login = new LoginPage(page)

    await home.gotoHomePage()
    await home.clickSignupLoginBtn()
})

test('Valid Login', async( {page} )=>{
    await login.LoginAs("newtesting@gmail.com", "newtesting@123")

    await expect(login.loggedUser).toBeVisible()
})

test('Invalid Login', async({page})=>{
    await login.LoginAs("wronguser@gmail.com", "wronguser@123")

    await expect(login.errorMsg).toBeVisible()
})

test('Empty Login', async({page})=>{
    await login.LoginAs("", "")

    await expect(page).toHaveURL('https://automationexercise.com/login')
    
    expect(await login.loggedUser.isVisible()).toBeFalsy()
})

