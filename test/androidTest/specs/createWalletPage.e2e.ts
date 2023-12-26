import { expect } from '@wdio/globals'
import { createWalletComponent } from '../component/createWalletComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new createWalletComponent()
const action = new Action()
const assert = new Assertion()

describe('Create Wallet Page Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)
    })

    // === Check Create Wallet Page ===
    it('[Wording] Check Create wallet',async () => {
        await action.waitForDisplayed(component.createWalletTitleText)
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')
    })

    it('[Display] Check Back Btn',async () => {
        await action.waitForDisplayed(component.createWalletBackBtn)
        await assert.checkText(component.createWalletBackBtn, '')
    })

    it('[Display] Check Infomation Btn',async () => {
        await action.waitForDisplayed(component.createWalletInfoIconBtn)
        await assert.checkText(component.createWalletInfoIconBtn, '')
    })

    it('[Display] Check 12-word Btn',async () => {
        await action.waitForDisplayed(component.createWallet12wordBtn)
        await assert.checkText(component.createWallet12wordBtn, '12-word Mnemonic wallet')
    })

    it('[Display] Check 24-word Btn',async () => {
        await action.waitForDisplayed(component.createWallet24wordBtn)
        await assert.checkText(component.createWallet24wordBtn, '24-word Mnemonic wallet')
    })

    it('[Display] Check Continue Btn',async () => {
        await action.waitForDisplayed(component.createWalletContinueBtn)
        await assert.checkText(component.createWalletContinueBtn, 'Continue')
    })

    it('[Tap] Check Back Btn tap',async () => {
        await action.waitForDisplayed(component.createWalletBackBtn)
        await assert.checkText(component.createWalletBackBtn, '')

        await action.click(component.createWalletBackBtn)

        await action.waitForDisplayed(component.splashScreenWelcomeText)
        await assert.checkElemenDisplayed(component.splashScreenWelcomeText)
        
        await action.waitForDisplayed(component.splashScreenCreateWalletBtn)
        await assert.checkText(component.splashScreenCreateWalletBtn, 'Create a new wallet')
        
        await action.click(component.splashScreenCreateWalletBtn)
    })

    it('[Tap] Check Infomation Btn tap',async () => {
        await action.waitForDisplayed(component.createWalletInfoIconBtn)
        await assert.checkText(component.createWalletInfoIconBtn, '')

        await action.click(component.createWalletInfoIconBtn)

        await action.waitForDisplayed(component.infoTitleText)
        await assert.checkText(component.infoTitleText, 'Mnemonic code')
        
        await action.waitForDisplayed(component.infoCloseBtn)
        await assert.checkText(component.infoCloseBtn, 'Close')

        await action.click(component.infoCloseBtn)
    })

    it('[Tap] Check 12-word Btn tap', async () => {
        await action.waitForDisplayed(component.createWallet12wordBtn)
        await assert.checkText(component.createWallet12wordBtn, '12-word Mnemonic wallet')
        
        await action.click(component.createWallet12wordBtn)

        await action.waitForDisplayed(component.createWalletContinueBtn)
        await assert.checkNotDisabled(component.createWalletContinueBtn)
    })

    it('[Tap] Check 24-word Btn tap',async () => {
        await action.waitForDisplayed(component.createWallet24wordBtn)
        await assert.checkText(component.createWallet24wordBtn, '24-word Mnemonic wallet')

        await action.click(component.createWallet24wordBtn)

        await action.waitForDisplayed(component.createWalletContinueBtn)
        await assert.checkNotDisabled(component.createWalletContinueBtn)
    })

    // === Check Information Page ===
    it('[Wording] Check Mnemonic code',async () => {
        await action.waitForDisplayed(component.createWalletInfoIconBtn)
        await assert.checkText(component.createWalletInfoIconBtn, '')

        await action.click(component.createWalletInfoIconBtn)

        await action.waitForDisplayed(component.infoTitleText)
        await assert.checkText(component.infoTitleText, 'Mnemonic code')
    })

    it('[Display] Check Infomation Close Icon',async () => {
        await action.waitForDisplayed(component.infoCloseIconBtn)
        await assert.checkText(component.infoCloseIconBtn, '')
    })

    it('[Display] Check Infomation Close Btn',async () => {
        await action.waitForDisplayed(component.infoCloseBtn)
        await assert.checkText(component.infoCloseBtn, 'Close')
    })

    it('[Tap] Check Infomation Close Btn',async () => {
        await action.waitForDisplayed(component.infoCloseBtn)
        await assert.checkText(component.infoCloseBtn, 'Close')

        await action.click(component.infoCloseBtn)

        await action.waitForDisplayed(component.createWalletTitleText)
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')
    })

    it('[Tap] Check Infomation Close Icon',async () => {
        await action.waitForDisplayed(component.createWalletInfoIconBtn)
        await assert.checkText(component.createWalletInfoIconBtn, '')

        await action.click(component.createWalletInfoIconBtn)

        await action.waitForDisplayed(component.infoCloseIconBtn)
        await assert.checkText(component.infoCloseIconBtn, '')

        await action.click(component.infoCloseIconBtn)

        await action.waitForDisplayed(component.createWalletTitleText)
        await assert.checkText(component.createWalletTitleText, 'Create Wallet')
    })

    // === Check Create Wallet 12-word Action ===
    it('[Tap] Check Continue with 12-word Btn',async () => {
        await action.waitForDisplayed(component.createWallet12wordBtn)
        await assert.checkText(component.createWallet12wordBtn, '12-word Mnemonic wallet')

        await action.click(component.createWallet12wordBtn)

        await action.waitForDisplayed(component.createWalletContinueBtn)
        await assert.checkText(component.createWalletContinueBtn, 'Continue')

        await action.click(component.createWalletContinueBtn)

        await action.waitForDisplayed(component.loadIcon)
        await assert.checkAttr(component.loadIcon, 'displayed', 'true')

        await action.waitForDisplayed(component.loadText)
        await assert.checkText(component.loadText, 'LOADING WALLET...')

        await action.waitForDisplayed(component.successText)
        await assert.checkText(component.successText, "You're all done!")

        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })

    // === Check Create Wallet 24-word Action ===
    it('[Tap] Check Continue with 24-word Btn',async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.waitForDisplayed(component.splashScreenCreateWalletBtn)
        await assert.checkText(component.splashScreenCreateWalletBtn, 'Create a new wallet')

        await action.click(component.splashScreenCreateWalletBtn)

        await action.waitForDisplayed(component.createWallet24wordBtn)
        await assert.checkText(component.createWallet24wordBtn, '24-word Mnemonic wallet')

        await action.click(component.createWallet24wordBtn)

        await action.waitForDisplayed(component.createWalletContinueBtn)
        await assert.checkText(component.createWalletContinueBtn, 'Continue')

        await action.click(component.createWalletContinueBtn)

        await action.waitForDisplayed(component.loadIcon)
        await assert.checkAttr(component.loadIcon, 'displayed', 'true')

        await action.waitForDisplayed(component.loadText)
        await assert.checkText(component.loadText, 'LOADING WALLET...')

        await action.waitForDisplayed(component.successText)
        await assert.checkText(component.successText, "You're all done!")
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})