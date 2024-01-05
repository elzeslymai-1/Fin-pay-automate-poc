import { splashScreenComponent } from '../component/splashScreenComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new splashScreenComponent()
const action = new Action()
const assert = new Assertion()

describe('Splash Screen Page Scenario', () => {
    beforeAll(async () => {
        await action.launchApps(`${process.env.BUNDLE_ID}`)
    })

    it('[Wording] => Check Welcome Page Wording [1]', async () => {    
        //assert
        await action.waitForDisplayed(component.splashScreenWelcomeText1)
        await assert.checkText(component.splashScreenWelcomeText1, 'Welcome to the \nFIN PAY')
    })

    it('[Wording] => Check Description Page Wording [1]', async () => {
        //assert
        await action.waitForDisplayed(component.splashScreenDescriptionText1)
        await assert.checkText(component.splashScreenDescriptionText1, 'To get started, create a new wallet or import \none from a seed phrase.')
    })

    it('[Wording] => Check Welcome Page Wording [2]', async () => {
        await action.swipe({x:400, y:300},{x:50, y:300})
    
        //assert
        await action.waitForDisplayed(component.splashScreenWelcomeText2)
        await assert.checkText(component.splashScreenWelcomeText2, 'All your crypto in one place')
    })

    it('[Wording] => Check Description Page Wording [2]', async () => {
        //assert
        await action.waitForDisplayed(component.splashScreenDescriptionText2)
        await assert.checkText(component.splashScreenDescriptionText2, 'Now you can trade crypto directly from the\nCrypto wallet with your existing.')
    })

    it('[Wording] => Check Welcome Page Wording [3]', async () => {
        await action.swipe({x:400, y:300},{x:50, y:300})
    
        //assert
        await action.waitForDisplayed(component.splashScreenWelcomeText3)
        await assert.checkText(component.splashScreenWelcomeText3, 'Discover the best of Web3')
    })

    it('[Wording] => Check Description Page Wording [3]', async () => {
        //assert
        await action.waitForDisplayed(component.splashScreenDescriptionText3)
        await assert.checkText(component.splashScreenDescriptionText3, 'Find and connect to leading apps and\ncollections with the in-app browser.')
    })

    it('[Displayed] => Create New Wallet Btn Should be Displayed',async ()=>{
        //assert
        await action.waitForDisplayed(component.splashScreenCreateWalletBtn)
        await assert.checkElementDisplayed(component.splashScreenCreateWalletBtn)
    })

    it('[Displayed] => Import Wallet Btn Should be Displayed',async ()=>{
        //assert
        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await assert.checkElementDisplayed(component.splashScreenImportWalletBtn)
    })

    it('[Tap] => Create new Wallet Btn', async () => {
        await action.waitForDisplayed(component.splashScreenCreateWalletBtn)
        await action.click(component.splashScreenCreateWalletBtn)

        //assert
        await action.waitForDisplayed(component.createNewWalletHeaderText)
        await assert.checkText(component.createNewWalletHeaderText, 'Create Wallet')

        //after
        await action.click(component.createWalletBackBtn)
    })

    it('[Tap] => Import Wallet Btn', async () => {
        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await action.click(component.splashScreenImportWalletBtn)

        //assert
        await action.waitForDisplayed(component.importWalletHeaderText)
        await assert.checkText(component.importWalletHeaderText,'Import Wallet')

        //after
        await action.click(component.createWalletBackBtn)
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.BUNDLE_ID}`)
    })
})