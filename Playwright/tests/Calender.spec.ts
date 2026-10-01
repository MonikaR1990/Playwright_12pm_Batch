import { test } from '@playwright/test'

test('Date Picker 1', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('input#datepicker').click()
    await page.locator('input#datepicker').fill('09/17/1990')
    await page.waitForTimeout(3000)
})

test('Date Picker 2', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('input#txtDate').click()
    await page.locator('.ui-datepicker-month').selectOption('4')
    await page.locator('.ui-datepicker-year').selectOption({label: '2017'})
    await page.locator('[data-date="23"]').click()

    await page.waitForTimeout(3000)
})