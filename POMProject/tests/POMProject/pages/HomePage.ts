import { Page, Locator } from '@playwright/test'

export class HomePage
{
    //Properties
    page: Page
    signupLoginBtn: Locator
    constructor(page: Page)
    {
        this.page = page //page
        this.signupLoginBtn = page.locator('[href="/login"]')
    }
    
    //Methods
    async gotoHomePage(): Promise<void>
    {
        await this.page.goto("https://automationexercise.com")
    }
    async clickSignupLoginBtn(): Promise<void>
    {
        await this.signupLoginBtn.click()   
    }
}

//class it consists
//properties --> page, element locators --> constructor
//methods --> element interaction 

//1. application open (home page open)
//2. click signup/login link