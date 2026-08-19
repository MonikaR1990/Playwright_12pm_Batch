import {test} from '@playwright/test'

test('Google Launch', async({ page })=>{
    await page.goto("https://www.google.com/")
})
test('Yahoo Launch', async({ page })=>{
    await page.goto("https://in.search.yahoo.com/?fr2=inr")
})


