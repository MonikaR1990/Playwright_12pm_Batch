import { test } from '../tests/SearchFixture.spec'
import { expect } from '@playwright/test'

test('Verify Amazon Search Results by URL', async({searchPage})=>{
    await expect(searchPage).toHaveURL(/Laptop/)
})

test('Verify Amazon Search Results by Title', async({searchPage})=>{
    await expect(searchPage).toHaveTitle('Amazon.in : Laptop')
})

test('Verify Amazon Search Results by Element', async({searchPage})=>{
    
    const searchResult = searchPage.locator('.a-color-state.a-text-bold')
    
    await expect(searchResult).toHaveText('Laptop')
})