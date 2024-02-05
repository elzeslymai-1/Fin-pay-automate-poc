import { splashScreenComponent } from '../component/splashScreenComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new splashScreenComponent()
const action = new Action()
const assert = new Assertion()

describe('Splash Screen Page Scenario', () => {
    beforeAll(async () => {
        // await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)
    })

    it('[Display] => Check Create wallet Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.splashScreenCreateWalletBtn)
    })

    it('[Display] => Check Import wallet Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.splashScreenImportWalletBtn)
    })

    it('[Wording] => Check Create wallet Btn Text', async () => {
        // assert
        await assert.checkText(component.splashScreenCreateWalletBtnText, 'Create a new wallet')
    })

    it('[Wording] => Check Import wallet Btn Text', async () => {
        // assert
        await assert.checkText(component.splashScreenImportWalletBtnText, 'Import a wallet')
    })

    it('[Wording] => Check Header [1] Text', async () => {
        // assert
        await assert.checkText(component.splashScreenHeaderText, 'Welcome to the \nFIN PAY')
    })

    it('[Wording] => Check Description [1] Text', async () => {
        // assert
        await assert.checkText(component.splashScreenDescriptionText, 'To get started, create a new wallet or import \none from a seed phrase.')
    })

    it('[Wording] => Check Header [2] Text',async () => {
        // swipe
        await action.swipe('left')

        // assert
        await assert.checkText(component.splashScreenHeaderText2, 'All your crypto in one place')
    })

    it('[Wording] => Check Description [2] Text',async () => {
        // assert
        await assert.checkText(component.splashScreenDescriptionText2, 'Now you can trade crypto directly from the\nCrypto wallet with your existing.')
    })

    it('[Wording] => Check Header [3] Text',async () => {
        // swipe
        await action.swipe('left')

        // assert
        await assert.checkText(component.splashScreenHeaderText3, 'Discover the best of Web3')
    })

    it('[Wording] => Check Description [3] Text',async () => {
        // assert
        await assert.checkText(component.splashScreenDescriptionText3, 'Find and connect to leading apps and\ncollections with the in-app browser.')
    })

    it('[Tap] => Create wallet Btn', async () => {
        await action.click(component.splashScreenCreateWalletBtn)

        // assert
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')

        // after
        await action.click(component.createWalletBackBtn)
    })

    it('[Tap] => Import wallet Btn', async () => {
        await action.click(component.splashScreenImportWalletBtn)

        // assert
        await assert.checkText(component.importWalletTitleText, 'Import Wallet')

        // after
        await action.click(component.importWalletBackBtn)
    })

    afterAll(async () => {
        // remove apps
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})