import { Given, When, Then } from "@cucumber/cucumber"; //cucumber method not playwright test method
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { log } from "node:console";

let login: LoginPage

Given('user navigate to the login page', async function() {
    login = new LoginPage(this.page) //object creation for login page
    await login.gotoLoginPage()
})
Given('user enters username and password', async function() {
    await login.enterLoginDetails('sonya.a@gmail.com', 'sonya@123')
})
Given('user enters invalid username and password', async function () {
    await login.enterLoginDetails('wronguser@gmail.com', 'wrong@123')
})
When('user clicks the login button', async function () {
    await login.clickLogin()
})
Then('user navigate to the user home page', async function () {
    const acutualEmail = await login.verifyLogin()
    console.log(acutualEmail)

    expect(acutualEmail).toBe('sonya.a@gmail.com') //for verification playwright expect method
})
Then('user should see the login error', async function () {
    const errorMsg = await login.isErrorMsgVisible()

    expect(errorMsg).toBeTruthy()
})





// test('testname', async({page})=>{

// })
