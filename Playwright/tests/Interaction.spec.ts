import {test} from '@playwright/test'

test('Interactions', async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
    /*

    //fill() (Quick enter text)
    await page.locator('#name').fill("Gowtham")
    await page.fill('#name', 'Gowtham')

    //click()
    await page.locator('.start').click()
    await page.click('.start')

    //clear()
    await page.locator('#name').clear()

    //pressSequentially() (Charcter by Character typing)
    await page.getByPlaceholder('Enter Phone').pressSequentially("67687687687")
    

    await page.getByPlaceholder('Enter Phone').pressSequentially("6786876888", {delay: 200}) 

    await page.goto("https://www.google.com/") 
    
    //Keyborad Keys
    await page.getByRole('combobox', {name:'Search'}).fill("Selenium")

    await page.getByRole('combobox', {name:'Search'}).press('Enter')

    await page.getByRole('combobox', {name:'Search'}).press('Tab')

   

    await page.getByRole('combobox', {name:'Search'}).press('ArrowDown')

    await page.getByRole('combobox', {name:'Search'}).press('ArrowUp')

    await page.getByRole('combobox', {name:'Search'}).press('ArrowLeft')

    await page.getByRole('combobox', {name:'Search'}).press('ArrowRight')

    await page.getByRole('combobox', {name:'Search'}).press('Control+A')

    await page.getByRole('combobox', {name:'Search'}).press('Control+C')

    await page.getByRole('combobox', {name:'Search'}).press('Control+V')

    await page.locator("//span[text()='AI Mode']/parent::div").click() 

    //radio button (click(), check())

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#male').click()

    await page.locator('#male').check()

    //check box (check(), uncheck())

    await page.locator('#sunday').check()
    await page.locator('#sunday').uncheck()

    await page.check('#sunday')
    await page.uncheck('#sunday')

    //DropDown

    await page.locator('#country').selectOption('uk') //Select by value (option tag attribute)

    await page.locator('#country').selectOption({label:'France'}) //Select by visible text so must use label property

    await page.locator('#country').selectOption({index:3}) //Select by index must use index property

    await page.selectOption('#country', 'france')

    //Multiple dropdown values

    await page.locator('#colors').selectOption(['red','blue', 'green'])

    //hover (mouse hover)

    await page.getByText('Point Me').hover()

    await page.hover("//button[text()=''Point Me']")

    await page.getByText('Mobiles').click()

    //Double Click
    await page.getByText('Copy Text').dblclick()
    await page.dblclick("//button[text()='Copy Text']")

    //Right Click
    await page.getByText('Copy Text').click({button:'right'})

    //Drag and Drop
    await page.dragAndDrop('#draggable', '#droppable')

    //Mouse Actions
    await page.mouse.move(100, 200)
    await page.mouse.down()
    await page.mouse.up()
    
    //Upload
    await page.locator('#singleFileInput').setInputFiles('E:\\Data.txt')

    await page.locator('#multipleFilesInput').setInputFiles(['E:\\Data.txt', 'E:\\Data1.txt', 'E:\\Data.docx'])

    //Keyboard Interaction 

    //focus

    await page.locator('#Wikipedia1_wikipedia-search-input').focus()
    await page.keyboard.type("Java")
    await page.keyboard.press('Enter')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')

    //Scroll
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()

    //click
    await page.locator('.dropbtn').click({force: true})
    await page.locator('.dropbtn').click({timeout: 5000})
    await page.locator('.dropbtn').click({button: 'right'}) */

    //screenshot
    await page.screenshot({path:'E:\\testing.jpg', fullPage: true})

    //Text Interaction (an element's visible text retrive)
    const text = await page.getByText('Data Entry Form').textContent()
    console.log(text)

    const innerText = await page.getByText('Data Entry Form').innerText()
    console.log(innerText)

    //Input Value
    await page.locator('#name').fill("Tufale")

    const value = await page.locator('#name').inputValue()
    console.log(value)

    //Attribute
    const attributeValue = await page.locator('#name').getAttribute('placeholder')
    console.log(attributeValue)

    //count
    const count = await page.locator('input').count()
    console.log(count)

    //First/Last/nth
    const h2Content1 = await page.locator('h2').first().textContent()
    console.log(h2Content1)

    const h2Content2 = await page.locator('h2').last().textContent()
    console.log(h2Content2)

    const h2Content3 = await page.locator('h2').nth(3).textContent()
    console.log(h2Content3)


    await page.waitForTimeout(3000)


})