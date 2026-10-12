import { Page, Locator } from '@playwright/test'

export class LoginPage
{
    page: Page
    email: Locator
    password: Locator
    loginBtn: Locator
    userProfile: Locator
    errorMsg: Locator
    constructor(page: Page)
    {
        this.page = page
        this.email = page.locator('#Email')
        this.password = page.locator('#Password')
        this.loginBtn = page.locator('[value="Log in"]')
        
        this.userProfile = page.locator("//a[contains(text(), '@')]")
        this.errorMsg = page.locator('.message-error')
    }
    
    async gotoLoginPage(): Promise<void>
    {
        await this.page.goto("https://demowebshop.tricentis.com/login")
    }
    async enterLoginDetails(username: string, password: string): Promise<void>
    {
        await this.email.fill(username)
        await this.password.fill(password)
    }
    async clickLogin(): Promise<void>
    {
        await this.loginBtn.click()
    }
    async verifyLogin(): Promise<string | null>
    {
        return await this.userProfile.textContent()
    }
    async isErrorMsgVisible(): Promise<boolean>
    {
        return await this.errorMsg.isVisible()
    }
}