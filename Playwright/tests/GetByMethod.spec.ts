import {test} from '@playwright/test'

test('GetBy Methods', async({page})=>{
    // await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.getByText('Data Entry').click()
    // await page.getByPlaceholder('Enter Name').fill("Bala")


    await page.goto("https://www.amazon.in/")
    // await page.getByRole('searchbox', {name: 'Search Amazon.in'}).fill("Laptop")
    // await page.getByRole('button', {name:'Go'}).click()
    // await page.getByRole('combobox', {name: 'searchDropdownDescription'}).selectOption('Baby')
    // await page.getByRole('link', {name: 'AmazonBasics'}).click()

    // await page.getByTitle('Search in').selectOption('Baby') //based on title attribute 
    // await page.getByTestId('switch-accounts-button').click() //based on data-testid attribute

    // await page.getByAltText('Vinoth Tech Solutions').click() //based on alt attribute (only image elements)

    // await page.getByRole('img', {name:'Vinoth Tech Solutions'}).click()

    await page.getByLabel('Search Amazon.in').fill("Laptop")
    await page.waitForTimeout(5000)


    await page.getByLabel('First name:').fill("Gowtham")

})

//getByRole ==> name -> property --> visible text, aria-label, aria-describedby, value (no for input tag)