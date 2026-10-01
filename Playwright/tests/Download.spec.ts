import {test} from '@playwright/test'

test('Download', async({page})=>{
    await page.goto("https://letcode.in/file")

    //start wait for the download event //a download event is going to happen, so listen for the download event
    const downloadPromise = page.waitForEvent('download')

    //Click the Download Button
    await page.locator('#xls').click()

    //Capture the downloaded file
    const downloadFile = await downloadPromise

    //Save the File
    await downloadFile.saveAs(`downloadedFile/` + downloadFile.suggestedFilename())

    //suggestedFilename --> gives the filename suggested by website

    const tempDownload = await downloadFile.path()
    console.log(tempDownload)
 
    //path() ==> temporary save the download file
    //saveAs ==> permanant save



})
