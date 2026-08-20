import {test} from '@playwright/test'

test('CSS Selector', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#name').fill("Harini")
    await page.locator('#email').fill("harini@gmail.com")
    await page.locator('.start').click()
    await page.locator('[placefolder="Enter Phone"]').fill("8798797987")
    await page.locator('input#name').fill("Harini")
    await page.locator('input.start').click()
    await page.locator('input[placefolder="Enter Phone"]').fill("8798797987")
    await page.locator('.form-control#name').fill("6786786876")
    await page.locator('[name="gender"][value="male"]').click()
    await page.locator('#country > option').click()

    await page.goto("https://the-internet.herokuapp.com/login")
    await page.locator('button').click()
    await page.locator('[name*="user"]').fill("Bala")
    await page.locator('[name^="user"]').fill("Bala")
    await page.locator('[name$="user"]').fill("Bala")
    await page.locator('.large-6.small-12.columns > input').click()

    await page.locator('input[aria-label*="Search"]').fill("Laptop")   //amazon page  

})

//CSS Selector

//1. id --> #idvalue
//2. classname --> .classvalue
//3. other attributes --> [attribute="value"]
//4. Tag + id --> tagname#idvalue
//5. Tag + class --> tagname.classname
//6. Tag + other attributes --> tagname[attribute="value"]
//7. Multiple attributes --> .classname#id   #id.classname
//7. Multiple attributes --> [name="gender"][value="male"]
//8. Tag Selector --> tagname
//9. Attribute Contains --> [name*="user"]
//10. Attribute startswith --> [name*="user"]
//11. Attribute endswith --> [name$="user"]
//12. Direct Child --> #country > option (parent --> child) (>)
//13. Desecendant Selector --> .form-group  label (both child and grand child) (space)
//                          .form-group > label (both child and grand child) (> direct child)
//14. Adjecent Sibling --> label+input (+) select the immediately following sibling
//15. Genral Sibling --> 

//label+input

//label~input

//<label>Username</label>
//<span>some text</span>
//<input>

// <div >
//     <h2>Login</h2>
//     <p>Error</p>      h2+p 
//     <p>Invalid</p>    h2~p
//     <span>Help</span>
// </div>

// <div >
//     <input>
//       <input>
//        <input>
//      <input>
// </div>

//input:first-child
//input:last-child
//input:nth-child(1)
//input:nth-child(2)




