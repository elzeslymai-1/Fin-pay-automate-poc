import { splashScreenComponent } from '../component/splashScreenComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new splashScreenComponent()
const action = new Action()
const assert = new Assertion()

describe('Splash Screen Page Scenario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)
    })

    it('[Display] => Check Create wallet Btn', async () => {
        // assert
        await assert.checkText(component.splashScreenCreateWalletBtn, 'Create a new wallet')
    })

    it('[Display] => Check Import wallet Btn', async () => {
        // assert
        await assert.checkText(component.splashScreenImportWalletBtn, 'Import a wallet')
    })

    it('[Wording] => Check Welcome', async () => {
        // assert
        await assert.checkText(component.splashScreenWelcomeText, 'Welcome to the \nFIN PAY')
    })

    it('[Wording] => Check Description', async () => {
        // assert
        await assert.checkText(component.splashScreenDescriptionText, 'To get started, create a new wallet or import \none from a seed phrase.')
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
        // close apps
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})