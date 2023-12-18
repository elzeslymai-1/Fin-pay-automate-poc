import { expect } from '@wdio/globals'
import { splashScreenComponent } from '../mainComponent/component/splashScreenComponent.js'
import { Action } from '../mainComponent/mainFunction/Action.js'
import { Assertion } from '../mainComponent/mainFunction/Assert.js'

const component = new splashScreenComponent()
const action = new Action()
const assert = new Assertion()

describe('Splash Screen Page Scenario', () => {
    beforeAll(async () => {
        await action.launchApps(`${process.env.BUNDLE_ID}`)
    })

    it('[Wording] => Check Page Wording', async () => {
        await action.waitForDisplayed(component.splashScreenWelcomeText)
        await assert.checkText(component.splashScreenWelcomeText, 'Welcome to the \nFIN PAY')
    })

    it('[Wording] => Check Description Page Wording', async () => {
        await action.waitForDisplayed(component.splashScreenDescriptionText)
        await assert.checkText(component.splashScreenDescriptionText, 'To get started, create a new wallet or import \none from a seed phrase.')
    })

    it('[Displayed] => Create New Wallet Btn Should be Displayed',async ()=>{
        await assert.checkElemenDisplayed(component.splashScreenCreateWalletBtn)
    })

    it('[Displayed] => Import Wallet Btn Should be Displayed',async ()=>{
        await assert.checkElemenDisplayed(component.splashScreenImportWalletBtn)
    })

    it('[Tap] => Create new Wallet Btn', async () => {
        await action.waitForDisplayed(component.splashScreenCreateWalletBtn)
        await action.click(component.splashScreenCreateWalletBtn)

        await action.waitForDisplayed(component.assertTabCreateNewWalletBtn)
        await assert.checkText(component.assertTabCreateNewWalletBtn, 'Create wallet')

        await action.click(component.createWalletBackBtn)
    })

    it('[Tap] => Import Wallet Btn', async () => {
        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await action.click(component.splashScreenImportWalletBtn)

        await action.waitForDisplayed(component.assertTabImportWalletBtn)
        await assert.checkText(component.assertTabImportWalletBtn,'Import Wallet')

        await action.click(component.createWalletBackBtn)
    })

    afterAll(async () => {
        await action.closeApps('com.finstabledev.finsdefiwallet')
        //await action.removeApps('com.finstabledev.finsdefiwallet')
    })
})