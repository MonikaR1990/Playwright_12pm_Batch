import {test} from '@playwright/test'

test('Auto Wait', async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('#twotabsearchtextbox').fill("Laptop")
})
//waitForSelector or waitFor
//waitForLoadState
//waitForURL
//waitForEvent
//waitForTimeOut

test('waitFor', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com")
    const loginLink = page.locator('.ico-login')
    //await loginLink.waitFor({state:'visible', timeout: 50000})
    await loginLink.waitFor() //it waits for the element to be visible
    await loginLink.click()


    //waitFor() --> waits for an element state
    //state:
    //visible - Elements is visible
    //hidden - Element is hidden not present
    //attached - Element exists in DOM
    //detached - Element is removed from DOM
    
})
test('waitForSelector', async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login")
    //waitForSelector() is used to wait untill an element matching an css selector reaches a particular state
    await page.waitForSelector('#Email', {state: 'visible'}) //attached + visible
    await page.waitForSelector('#Email', {state: 'attached'})

    //<input id="username" style="display: none">
})

//attached                 visible
//Exist in DOM             Exist and is Visible
//User may not see it      user can see it

//30 sec ==> 30000 milliseconds

test('WaitForLoadState', async({page})=>{
    await page.goto("https://www.amazon.in/")

    await page.waitForLoadState('load')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForLoadState('networkidle')

    await page.locator('#twotabsearchtextbox').fill('Laptop')


    //3. State
    //1. load (wait until the entire page is loaded - HTML loaded, CSS, Scripts, Images, Videos, animation)
    //2. domcontentloaded
    // tloaded - wait until the HTML document has been loaded and Parsed ()
    //3. networkIdeal - Playwright waits untill there no active network connection for a short period of time

})
/*
GET /api/products
GET /api/users


Browser open page
    |
HTML Document
    |
API call -> products
    |
API call -> User details
    |
Images download


Go to URL
    |
Wait for page navigation (autowait)
    |
Wait while network requests are happening
    |
Network becomes idle
    |
continue test

//domcontentloaded
HTML
|
DOM CREATED
|
CONTINUE

//load
HTML
|
CSS
|
Javascript/resources
|
Images/Videos/resources
|
load event
|
continue


HTML
|
CSS
|
JS
|
API
|
API
|
Images
|
Network becomes quiet
|
Continue


*///wait untill the navigation is completed and the browser reaches the expexted url 
test('Wait For URL', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")
    await page.locator('#login-button').click()

    await page.waitForURL('https://www.saucedemo.com/inventory.html')
    await page.waitForURL(/inventory.html/) //wait for the url change after reach product page and then continue test

    const title = await page.locator('.title').textContent()
    console.log(title)

})

//waitForEvent
//new tab open
//popup appears
//Dialog box
//File download


//API
//waitForRequest
//waitForResponse


//waitForTimeOut
test('Wait For Time Out', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill("standard_user")
    await page.locator('#password').fill("secret_sauce")

    //await page.waitForTimeout(3000) //3 secs pause

    await page.locator('#login-button').click()

    const title = await page.locator('.title').textContent()
    console.log(title)

    await page.waitForTimeout(3000) //3 secs wait


})
