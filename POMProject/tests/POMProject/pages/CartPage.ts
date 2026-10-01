import { Page, Locator } from '@playwright/test'

export class CartPage
{
    page: Page
    cartProducts: Locator
    productName: Locator
    productPrice: Locator
    productQuantity: Locator
    productTotalPrice: Locator
    shoppingCartTitle: Locator
    constructor(page: Page)
    {
        this.page = page
        this.cartProducts = page.locator('.cart_product')
        this.productName = page.locator('.cart_description h4 a')
        //this.productName = page.locator('[href*="product_details"]')
        this.productPrice = page.locator('.cart_price p')
        this.productQuantity = page.locator('.cart_quantity button')
        this.productTotalPrice = page.locator('.cart_total_price')
        this.shoppingCartTitle = page.locator("//li[contains(text(),'Shopping')]")
        //this.shoppingCartTitle = page.getByText('Shopping Cart')
        
    }
    async isCartPageLoaded(): Promise<boolean>
    {
        await this.page.waitForLoadState('load')
        return await this.shoppingCartTitle.isVisible()
    }
    async getCartProductCount(): Promise<number>
    {
        return await this.cartProducts.count()
    }
    async getProductName(index: number): Promise<string | null>
    {
        return await this.productName.nth(index).textContent()
    }
    async getProductPrice(index: number): Promise<string | null>  //Rs.
    {
        return await this.productPrice.nth(index).textContent()
    }
    async getProductQuantity(index: number): Promise<number>
    {
        const quantity = await this.productQuantity.nth(index).textContent()  //"1" or "2"
        return Number(quantity)    //"1" --> 1
    }

}