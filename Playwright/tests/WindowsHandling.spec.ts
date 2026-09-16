import {test, Page} from '@playwright/test'

test('Windows Handling 1', async({page})=>{
    await page.goto("https://letcode.in/window")

    //Promise.all()==> used to handle multiple asynchronous process and you want to completed all
    //page.waitForEvent ==> Wait untill the current page opens a popup/newtab
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), //newPage
        page.locator('#home').click() //clickResult
    ])

    console.log(newPage.url())
   // console.log(newPage)
    await newPage.locator('[href="/button"]').click()

})

//let fruits = ["Apple", "Orange", "Mango"]
// const [f1, f2] =  ["Apple", "Orange", "Mango"]
// console.log(f1)

test('Multiple Windows', async({page, context})=>{

    await Promise.all([
        context.waitForEvent('page'), //alert page
        context.waitForEvent('page'), //dropdown page
        page.locator('#multi').click() //click reuslt
    ])

    let alertPage: Page | undefined;
    let dropDownPage: Page | undefined;

    for(const p of context.pages())
    {
        await page.waitForLoadState('load')
        if(p.url().includes('/alert'))
        {
            alertPage = p
            await alertPage.bringToFront()
            console.log(await alertPage.title())
            await alertPage.getByText('Contact').first().click()
            await alertPage.waitForTimeout(3000)

        }
        if(p.url().includes('/dropdowns'))
        {
            dropDownPage = p
            await dropDownPage.bringToFront()
            console.log(await dropDownPage.title())
            await dropDownPage.locator('#fruits').selectOption('1')
            await dropDownPage.waitForTimeout(3000)

        }
    }
    


})

//pages()

//https://letcode.in/window
//https://letcode.in/window
//https://letcode.in/dropdowns