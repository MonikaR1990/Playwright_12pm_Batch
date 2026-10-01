import { Page, Locator } from '@playwright/test'

export class LoginPage
{
    page: Page
    emailAddress: Locator
    password: Locator
    loginBtn: Locator
    loggedUser: Locator
    errorMsg: Locator
    productPageLink: Locator
    constructor(page: Page)
    {
        this.page = page
        this.emailAddress = page.locator('[data-qa="login-email"]')
        this.password = page.locator('[data-qa="login-email"]')
        this.loginBtn = page.locator('[data-qa="login-button"]')

        this.loggedUser = page.locator("//a[contains(text(),'Logged')]")
        this.errorMsg = page.getByText('incorrect')
        //this.errorMsg = page.locator('[data-qa="login-password"]+p')

        this.productPageLink = page.locator('[href="/products"]')        
    }

    async LoginAs(username: string, password: string): Promise<void>
    {
        await this.page.waitForLoadState('load')
        await this.emailAddress.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
    async clickProductPage()
    {
        await this.productPageLink.click()
    }
}

