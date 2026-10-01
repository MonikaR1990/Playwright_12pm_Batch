import {test} from '@playwright/test'

test('Single File Upload', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#singleFileInput').setInputFiles('E:\\Data.txt')
})

test('Multiple File Upload', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#multipleFilesInput').setInputFiles(['E:\\Data.txt', 'E:\\Data.docx', 'E:\\Data1.txt'])
})