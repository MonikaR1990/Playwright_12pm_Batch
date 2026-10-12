import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { RegisterPage } from '../pages/RegisterPage'

let register: RegisterPage

Given('user navigate to the register page', async function () {
    register = new RegisterPage(this.page)
    await register.navigateRegisterPage()
})
When('user selects gender', async function () {
    await register.selectGender('female')
})
When('user enters the valid details', async function () {
    await register.userEnterDetails()
})
When('user clicks the register button', async function () {
    await register.clickReisterBtn() 
})
Then('user should see register successful message', async function () {
    const msg = await register.getSuccessMsg()
    console.log(msg)

    expect(msg).toContain('Your registration completed')
})

