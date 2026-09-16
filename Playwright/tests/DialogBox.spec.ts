import {test} from '@playwright/test'

test('Alert 1', async({page})=>{
    await page.goto("https://letcode.in/alert/")
    
    page.on('dialog', async dialog=>{
        //await page.waitForTimeout(3000)
        await dialog.accept()
    }) //we register the listener before the click. 
    // because the click is what triggers the dialog

    await page.locator('#accept').click()
})
test('Alert 2', async({page})=>{
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async d=>{
        await page.waitForTimeout(3000)
        console.log(d.message())
        await d.dismiss()
    })

    await page.locator('#confirm').click()

})

test('Prompt', async({page})=>{
    await page.goto("https://letcode.in/alert/")

    page.on('dialog', async dialog=>{
        //await page.waitForTimeout(3000)
        console.log(dialog.message())
        await dialog.accept("Hello JavaScript")
    })

    await page.locator('#prompt').click()
})


//dialog
//accept() or accept("any string")
//dismiss()
//message()
