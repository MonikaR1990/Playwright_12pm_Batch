import {test} from '@playwright/test'

test('Xpath', async({page})=>{
    await page.goto("https://www.amazon.in/")
    // await page.locator("//input[@id='twotabsearchtextbox']").fill("Laptop")
    // await page.locator("//input[@id='nav-search-submit-button']").click()
    // await page.locator("//input[@id='twotabsearchtextbox'][@placeholder='Search Amazon.in'][@role='searchbox']").fill("Laptop")

    const categories = await page.locator("//select[@id='searchDropdownBox']/child::option").allTextContents()
    console.log(categories)
})

test('Amazon Categories XPath', async ({ page }) => {

    await page.goto('https://www.amazon.in/', {waitUntil: 'domcontentloaded'});

    await page.locator("//select[@id='searchDropdownBox']").waitFor();

    const categories = await page.locator("//select[@id='searchDropdownBox']/child::option").allTextContents();

    console.log(categories);

    
});

//Xpath
//1. Single Attribute --> //input[@id='twotabsearchtextbox']
//2. Multiple Attributes --> //input[@id='twotabsearchtextbox'][@placeholder='Search Amazon.in'][@role='searchbox']
//3. and, or operation --> //input[@class='form-control' and @placeholder='Enter Name']  (all attributes must match)
//                     --> //input[@class='form-control' or @placeholder='Enter Name'] (one attribute is enough to match)
//4. contains --> //input[contains(@placeholder, 'Search')]
//5. startswith --> //input[starts-with(@placeholder, 'Search')] //input[starts-with(@id, 'nav-search')]
//6. endswith -->  no ends with in xpath
//7. Exact Visible Text ==> //a[text()='AmazonBasics']
//8. Partial Visible Text ==> //a[contains(text(),'Service')]
//9. Startswith Visible Text ==> //a[starts-with(text(),'Customer')]
//10. Find Parent using Child ==> //option[text()='Baby']/parent::select
//11. Find Child using Parent ==> //select/child::option
//12. Find Ancestor using Descentant ==>  //select/ancestor::form
//13. Find Descendant using Ancestor ==> //form/descendant::select
//14. Find following all family realted tags by following ==> //label/following::input
//15. Find own sibling element ==> //label/following-sibling::input
//16. Find preceding all family Elements ==> //input[@id='twotabsearchtextbox']/preceding::label
//17. Find preceding own sibling element ==> //input[@id='twotabsearchtextbox']/preceding-sibling::label

