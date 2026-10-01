import { test, expect } from '@playwright/test'

import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'

test('Add Product to Cart Test', async({page})=>{
    const home = new HomePage(page)
    const login = new LoginPage(page)

    await home.gotoHomePage() //application url open
    await home.clickSignupLoginBtn()

    await login.LoginAs("newtesting@gmail.com", "newtesting@123")
    await login.clickProductPage()  //product page opem

    const product = new ProductPage(page)
    const cart = new CartPage(page)

    //Verify the Product Page is Loaded
    expect(await product.isProductPageLoaded()).toBeTruthy()

    //Add First Product
    await product.addProductToCart(4) //Winter Top  //600
    await product.clickContinueShopping()

    //Add Second Product
    await product.addProductToCart(7) //Fancy Green Top 
    await product.clickViewCart()

    //Confirm Cart Page is Loaded
    expect(await cart.isCartPageLoaded()).toBeTruthy()

    //Validate Product Count
    //expect(await cart.getCartProductCount()).toBeGreaterThan(1)
    expect(await cart.getCartProductCount()).toBe(2)
    
    //Validate Product Name
    expect(await cart.getProductName(0)).toBe('Winter Top')
    expect(await cart.getProductName(1)).toBe('Fancy Green Top')
    expect(await cart.getProductName(1)).toContain('Fancy Green Top')

    //Validate Product Price
    expect(await cart.getProductPrice(0)).toBe('Rs. 600')
    expect(await cart.getProductPrice(1)).toBe('Rs. 700')
    
    //Validate Product Price
    expect(await cart.getProductQuantity(0)).toBe(1)

})


