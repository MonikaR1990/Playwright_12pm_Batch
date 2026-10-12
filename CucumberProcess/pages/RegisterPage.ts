import { Page, Locator } from '@playwright/test'

export class RegisterPage
{
    page: Page
    maleBtn: Locator
    femaleBtn: Locator
    fname: Locator
    lname: Locator
    email: Locator
    password: Locator
    confirmPassword: Locator
    registerBtn: Locator
    successMsg: Locator
    constructor(page: Page)
    {
        this.page = page
        
        this.maleBtn = page.locator('#gender-male')
        this.femaleBtn = page.locator('#gender-female')
        this.fname = page.locator('#FirstName')
        this.lname = page.locator('#LastName')
        this.email = page.locator('#Email')
        this.password = page.locator('#Password')
        this.confirmPassword = page.locator('#ConfirmPassword')
        this.registerBtn = page.locator('#register-button')

        this.successMsg = page.locator('.result')
    } 
    async navigateRegisterPage(): Promise<void>
    {
        await this.page.goto("https://demowebshop.tricentis.com/register")
    }
    async selectGender(gender: string): Promise<void>
    {
        if(gender === "male" || gender === "Male")
        {
            await this.maleBtn.check()
        }
        else
        {
            await this.femaleBtn.check()
        }
    }
    async userEnterDetails(): Promise<void>
    {
        await this.fname.fill('swetha')
        await this.lname.fill('mm')
        await this.email.fill("swetha.mm@gmail.com")
        await this.password.fill("swetha.mm.123")
        await this.confirmPassword.fill("swetha.mm.123")
    }
    async clickReisterBtn(): Promise<void>
    {
        await this.registerBtn.click()
    }
    async getSuccessMsg(): Promise<string | null>
    {
        return await this.successMsg.textContent()
    }
}