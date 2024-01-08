import { createWalletComponent } from '../component/createWalletComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new createWalletComponent()
const action = new Action()
const assert = new Assertion()

describe('Create Wallet Page Scenario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)
    })

    // === Check Create Wallet Page ===
    it('[Display] Check Back Btn', async () => {
        // assert
        await assert.checkText(component.createWalletBackBtn, '')
    })

    it('[Display] Check Mnemonic Info Btn', async () => {
        // assert
        await assert.checkText(component.createWalletInfoIconBtn, '')
    })

    it('[Display] Check Mnemonic 12-word Btn', async () => {
        // assert
        await assert.checkText(component.createWallet12wordBtn, '12-word Mnemonic wallet')
    })

    it('[Display] Check Mnemonic 24-word Btn', async () => {
        // assert
        await assert.checkText(component.createWallet24wordBtn, '24-word Mnemonic wallet')
    })

    it('[Display] Check Continue Btn', async () => {
        // assert
        await assert.checkText(component.createWalletContinueBtn, 'Continue')
    })

    it('[Wording] Check Create Wallet Title Wording', async () => {
        // assert
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')
    })

    it('[Tap] Check Back Btn tap', async () => {
        await action.click(component.createWalletBackBtn)

        // assert
        await assert.checkElementDisplayed(component.splashScreenWelcomeText)

        // after
        await action.click(component.splashScreenCreateWalletBtn)
    })

    it('[Tap] Check Information Btn tap', async () => {
        await action.click(component.createWalletInfoIconBtn)

        // assert
        await assert.checkText(component.infoTitleText, 'Mnemonic code')

        // after
        await action.click(component.infoCloseBtn)
    })

    it('[Tap] Check 12-word Btn tap', async () => {
        await action.click(component.createWallet12wordBtn)

        // assert
        await assert.checkNotDisabled(component.createWalletContinueBtn)
    })

    it('[Tap] Check 24-word Btn tap', async () => {
        await action.click(component.createWallet24wordBtn)

        // assert
        await assert.checkNotDisabled(component.createWalletContinueBtn)
    })

    // === Check Create Wallet 12-word Action ===
    it('[Functional] Check Continue with 12-word Btn', async () => {
        await action.click(component.createWallet12wordBtn)
        await action.click(component.createWalletContinueBtn)

        // assert
        await assert.checkText(component.loadText, 'LOADING WALLET...')
        await assert.checkText(component.successText, "You're all done!")

        // after
        await action.closeApps(`${process.env.PACKAGE_ID}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)
    })

    // === Check Create Wallet 24-word Action ===
    it('[Functional] Check Continue with 24-word Btn', async () => {
        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWallet24wordBtn)
        await action.click(component.createWalletContinueBtn)

        // assert
        await assert.checkText(component.loadText, 'LOADING WALLET...')
        await assert.checkText(component.successText, "You're all done!")
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})

describe('Mnemonic Info Page Scenario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWalletInfoIconBtn)
    })

    // === Check Information Page ===
    it('[Display] Check Information Close Icon', async () => {
        // assert
        await assert.checkText(component.infoCloseIconBtn, '')
    })
    
    it('[Display] Check Information Close Btn', async () => {
        // assert
        await assert.checkText(component.infoCloseBtn, 'Close')
    })

    it('[Wording] Check Mnemonic Info Title Page Wording', async () => {
        // assert
        await assert.checkText(component.infoTitleText, 'Mnemonic code')
    })

    it('[Tap] Check Information Close Btn', async () => {
        await action.click(component.infoCloseBtn)

        // assert
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')

        // after
        await action.click(component.createWalletInfoIconBtn)
    })

    it('[Tap] Check Information Close Icon', async () => {
        await action.click(component.infoCloseIconBtn)

        // assert
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})