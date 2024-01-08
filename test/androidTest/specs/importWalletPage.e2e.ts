import { importWalletComponent } from '../component/importWalletComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new importWalletComponent()
const action = new Action()
const assert = new Assertion()

describe ('Import Wallet Page Scenario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenImportWalletBtn)
    })

    it('[Display] Check Back Btn',async () => {
        // assert
        await assert.checkText(component.importWalletBackBtn, '')
    })

    it('[Display] Check Private Key Field',async () => {
        // assert
        await assert.checkElementDisplayed(component.importWalletPrivatekeyField)
    })

    it('[Display] Check Paste Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.importWalletPasteBtn)
    })

    it('[Display] Check Import Wallet Btn',async () => {
        // assert
        await assert.checkText(component.importWalletImportBtn, 'Import Wallet')
    })

    it('[Wording] Check Import Wallet Title Wording',async () => {
        // assert
        await assert.checkText(component.importWalletTitleText, 'Import Wallet')
    })

    it('[Wording] Check Import Wallet Header Wording',async () => {
        // assert
        await assert.checkText(component.importWalletHeaderText, 'Enter Mnemonic or Private Key')
    })

    it('[Tap] Check Back Btn Tap',async () => {
        await action.click(component.importWalletBackBtn)

        // assert
        await assert.checkElementDisplayed(component.splashScreenWelcomeText)

        // after
        await action.click(component.splashScreenImportWalletBtn)
    })

    it('[Tap] Check Paste Btn Tap',async () => {
        await action.click(component.importWalletPrivatekeyField)

        await action.enterText(component.importWalletPrivatekeyField, 'paste test')

        await action.click(component.importWalletPasteBtn)
    })

    // === Check Private Key Wrong Format ===
    it('[Functional] Check Private Key Wrong Format',async () => {
        await action.click(component.importWalletPrivatekeyField)
        await action.enterText(component.importWalletPrivatekeyField, 'test test test test test test test test test test test test test test test test test test test test test test test test test test')
        
        // assert
        await assert.checkElementDisplayed(component.importWalletWrongPrivatekeyText)

        // after
        await action.clearText(component.importWalletPrivatekeyField)
    })

    // === Check Private Key Fail ===

    // === Check Private Key Success ===
    // *** This case will create cache, Have to clear it first to run again.
    it('[Functional] Check Private Key Success',async () => {
        await action.click(component.importWalletPrivatekeyField)
        await action.enterText(component.importWalletPrivatekeyField, `${process.env.MNEMONIC_PHRASE}`)

        await action.click(component.importWalletImportBtn) // This one for de-select from keyboard
        await action.click(component.importWalletImportBtn)
        
        // assert
        await assert.checkText(component.loadText, 'LOADING WALLET...')
        await assert.checkText(component.importSuccessText, 'IMPORT WALLET SUCCESS')
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})