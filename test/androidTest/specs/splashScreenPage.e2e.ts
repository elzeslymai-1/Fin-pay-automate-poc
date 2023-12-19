import { expect } from '@wdio/globals'
import { splashScreenComponent } from '../component/splashScreenComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new splashScreenComponent()
const action = new Action()
const assert = new Assertion()

describe('Splash Screen Page Scenario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.BUNDLE_ID}`)
    })

    it('[Wording] => Check Welcome', async () => {
        await action.waitForDisplayed(component.splashScreenWelcomeText)
        await assert.checkText(component.splashScreenWelcomeText, 'Welcome to the \nFIN PAY')
    })

    it('[Wording] => Check Description', async () => {
        await action.waitForDisplayed(component.splashScreenDescriptionText)
        await assert.checkText(component.splashScreenDescriptionText, 'To get started, create a new wallet or import \none from a seed phrase.')
    })

    it('[Display] => Check Create wallet Btn', async () => {
        await action.waitForDisplayed(component.splashScreenCreateWalletBtn)
        await assert.checkText(component.splashScreenCreateWalletBtn, 'Create a new wallet')
    })

    it('[Display] => Check Import wallet Btn', async () => {
        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await assert.checkText(component.splashScreenImportWalletBtn, 'Import a wallet')
    })

    it('[Tap] => Create wallet Btn', async () => {
        await action.waitForDisplayed(component.splashScreenCreateWalletBtn)
        await action.click(component.splashScreenCreateWalletBtn)

        await action.waitForDisplayed(component.createWalletTitleText)
        await assert.checkText(component.createWalletTitleText, 'Create wallet')

        await action.waitForDisplayed(component.createWalletBackBtn)
        await action.click(component.createWalletBackBtn)
    })

    it('[Tap] => Import wallet Btn', async () => {
        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await action.click(component.splashScreenImportWalletBtn)

        await action.waitForDisplayed(component.importWalletTitleText)
        await assert.checkText(component.importWalletTitleText, 'Import Wallet')

        await action.waitForDisplayed(component.importWalletBackBtn)
        await action.click(component.importWalletBackBtn)
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.BUNDLE_ID}`)
    })
})