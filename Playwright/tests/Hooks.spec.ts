import {expect, test} from '@playwright/test'

test.beforeAll(async()=>{
    console.log("Start")
    //Connect to Database (Start a server)
    //Create Test data
})

test.beforeEach(async({page})=>{
    console.log("Before Each Test")
    await page.goto("https://letcode.in/")  
    //Navigate to application (URL)
    //Login
    //Common setup
    
})

test('Testcase 1', async({page})=>{
    console.log("Test Case 1")
    await expect(page).toHaveTitle('LetCode with Koushik | Software Test Automation Hub')
})

test('Testcase 2', async({page})=>{
    console.log("Test Case 2")
    await expect(page).toHaveURL('https://letcode.in/')
})

test('Testcase 3', async({page})=>{
    console.log("Test Case 3")
    const sandbox = page.locator("//span[contains(text(),'Sandbox')]/parent::div")
    await expect(sandbox).toBeVisible()
})  

test.afterEach(async({page})=>{
    console.log("After Each Test")
    await page.screenshot({path:`letCodeScreenShot/test_${Date.now()}.jpg`, fullPage: true})

    //Take Screen
    //Clean Test Data
    //Logout
})
test.afterAll(async()=>{
    console.log("Close")
    //Close database connection
    //Clean up resources
    //Test Data delete
})

//beforeAll() --> Once run before all tests
//beforeEach() --> runs before each tests
//afterAll() --> Once run after all tests
//afterEach() --> runs after each tests