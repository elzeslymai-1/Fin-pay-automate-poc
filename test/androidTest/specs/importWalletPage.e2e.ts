import { importWalletComponent } from '../component/importWalletComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new importWalletComponent()
const action = new Action()
const assert = new Assertion()

describe ('Import Wallet Page Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenImportWalletBtn)
    })

    // === Check Import Wallet Page ===
    it('[Wording] Check Import Wallet',async () => {
        await action.waitForDisplayed(component.importWalletTitleText)
        await assert.checkText(component.importWalletTitleText, 'Import Wallet')
    })

    it('[Wording] Check Import Wallet Header',async () => {
        await action.waitForDisplayed(component.importWalletHeaderText)
        await assert.checkText(component.importWalletHeaderText, 'Enter Mnemonic or Private Key')
    })

    it('[Display] Check Back Btn',async () => {
        await action.waitForDisplayed(component.importWalletBackBtn)
        await assert.checkText(component.importWalletBackBtn, '')
    })

    it('[Display] Check Private Key Field',async () => {
        await action.waitForDisplayed(component.importWalletPrivatekeyField)
        await assert.checkElemenDisplayed(component.importWalletPrivatekeyField)
    })

    it('[Display] Check Paste Btn',async () => {
        await action.waitForDisplayed(component.importWalletPasteBtn)
        await assert.checkElemenDisplayed(component.importWalletPasteBtn)
    })

    it('[Display] Check Import Wallet Btn',async () => {
        await action.waitForDisplayed(component.importWalletImportBtn)
        await assert.checkText(component.importWalletImportBtn, 'Import Wallet')
    })

    it('[Tap] Check Back Btn Tap',async () => {
        await action.waitForDisplayed(component.importWalletBackBtn)
        await assert.checkText(component.importWalletBackBtn, '')

        await action.click(component.importWalletBackBtn)

        await action.waitForDisplayed(component.splashScreenWelcomeText)
        await assert.checkElemenDisplayed(component.splashScreenWelcomeText)

        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await assert.checkText(component.splashScreenImportWalletBtn, 'Import a wallet')

        await action.click(component.splashScreenImportWalletBtn)
    })

    it('[Tap] Check Paste Btn Tap',async () => {
        await action.waitForDisplayed(component.importWalletPasteBtn)
        await assert.checkElemenDisplayed(component.importWalletPasteBtn)

        await action.waitForDisplayed(component.importWalletPrivatekeyField)
        await assert.checkElemenDisplayed(component.importWalletPrivatekeyField)

        await action.click(component.importWalletPrivatekeyField)

        await action.enterText(component.importWalletPrivatekeyField, 'paste test')

        await action.click(component.importWalletPasteBtn)
    })

    // === Check Private Key Wrong Format ===
    it('[Tap] Check Private Key Wrong Format',async () => {
        await action.waitForDisplayed(component.importWalletPrivatekeyField)
        await assert.checkElemenDisplayed(component.importWalletPrivatekeyField)

        await action.click(component.importWalletPrivatekeyField)

        await action.enterText(component.importWalletPrivatekeyField, 'test test')

        await action.waitForDisplayed(component.importWalletWrongPrivatekeyText)
        await assert.checkElemenDisplayed(component.importWalletWrongPrivatekeyText)

        await action.clearText(component.importWalletPrivatekeyField)

        await action.enterText(component.importWalletPrivatekeyField, 'test test test test test test test test test test test test test test test test test test test test test test test test test test')

        await action.waitForDisplayed(component.importWalletWrongPrivatekeyText)
        await assert.checkElemenDisplayed(component.importWalletWrongPrivatekeyText)

        await action.clearText(component.importWalletPrivatekeyField)
    })

    // === Check Private Key Fail ===
    // *** This one curently can't perform test due to stuck at loading screen.

    // === Check Private Key Success ===
    // *** This case will create cache, Have to clear it first to run again.
    it('[Tap] Check Private Key Success',async () => {
        await action.waitForDisplayed(component.importWalletPrivatekeyField)
        await assert.checkElemenDisplayed(component.importWalletPrivatekeyField)

        await action.click(component.importWalletPrivatekeyField)

        await action.enterText(component.importWalletPrivatekeyField, `${process.env.TEST_PRIVATEKEY}`)
        
        await action.waitForDisplayed(component.importWalletImportBtn)
        await assert.checkAttr(component.importWalletImportBtn, 'enabled', 'true')

        await action.click(component.importWalletImportBtn) // This one for de-select from keyboard

        await action.click(component.importWalletImportBtn)

        await action.waitForDisplayed(component.loadText)
        await assert.checkText(component.loadText, 'LOADING WALLET...')

        await action.waitForDisplayed(component.importSuccessText)
        await assert.checkText(component.importSuccessText, 'IMPORT WALLET SUCCESS')
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})