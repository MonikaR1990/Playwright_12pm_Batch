import {Page, Locator} from '@playwright/test'

export class ProductPage
{
    
    page: Page
    productPageHeader: Locator
    productBadge: Locator
    addToCartBtn: Locator
    continueShopping: Locator
    viewCartLink: Locator
    
    constructor(page: Page)
    {
        this.page = page
        this.productPageHeader = page.locator('.title.text-center')
        this.productBadge = page.locator('.product-image-wrapper')
        this.addToCartBtn = page.locator('.btn.btn-default add-to-cart')
        //this.continueShopping = page.locator(".btn.btn-success.close-modal.btn-block")
        this.continueShopping = page.getByText("Continue Shopping")
        this.viewCartLink = page.locator('[href="/view_cart"]').last()
    }
    async isProductPageLoaded(): Promise<boolean>
    {
        await this.page.waitForLoadState('load')
        return await this.productPageHeader.isVisible()
    }
    async addProductToCart(index: number): Promise<void>
    {
        await this.productBadge.nth(index).hover()

        await this.addToCartBtn.nth(index).click()
    }
    async clickContinueShopping(): Promise<void>
    {
        await this.continueShopping.click()
    }
    async clickViewCart()
    {
        await this.viewCartLink.click()
    }

}


//is that product page
//add the product to the cart
//click the continue shopping
//click view Cart link 
