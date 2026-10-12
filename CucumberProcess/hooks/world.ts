import { World, IWorldOptions } from '@cucumber/cucumber'
import { Browser, BrowserContext, Page } from '@playwright/test'

export class CustomWorld extends World
{
    browser !: Browser  //Definite Assignment Assertion Operator
    context !: BrowserContext
    page !: Page

    constructor(option: IWorldOptions)
    {
        super(option)
    }
}


//World --> Cucumber provides this class
//World is the base class that our custom World will extend

//IWorldOptions is a TypeScript Interface provided by Cucumber (It is used to pass the information)

//Browser ==> Represents the Browser Instance
//BrowserContext ==> Represents the Isolated Browser Session
//Page ==> Represents the Browser Tab/Page
//chromium ==> used to launch chromium browser


//browser !: Browser ==> "Don't worry I promise I will assign a value to tis property before I use it"