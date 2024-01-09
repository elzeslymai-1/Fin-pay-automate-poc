import { importWalletComponent } from '../component/importWalletComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new importWalletComponent()
const action = new Action()
const assert = new Assertion()

describe ('Import Wallet Page Scenario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenImportWalletBtn)
    })

    it('[Display] Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.importWalletBackBtn)
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
        await assert.checkElementDisplayed(component.importWalletImportBtn)
        await assert.checkDisabled(component.importWalletImportBtn)
    })

    it('[Wording] Check Back Btn Wording',async () => {
        // assert
        await assert.checkText(component.importWalletBackBtn, '')
    })

    it('[Wording] Check Import Wallet Btn Wording',async () => {
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

    it('[Wording] Check Import Wallet Description Wording',async () => {
        // assert
        await assert.checkText(component.importWalletDescriptionText, 'Input your mnemonic phrases with spacing. Supports 12-word, 24-word mnemonic phrases and private keys for all wallet types.')
    })

    it('[Tap] Check Back Btn Tap',async () => {
        await action.click(component.importWalletBackBtn)

        // assert
        await assert.checkElementDisplayed(component.splashScreenWelcomeText)

        // after
        await action.click(component.splashScreenImportWalletBtn)
    })

    it('[Tap] Check Paste Btn Tap',async () => {
        await action.setClipboard('copytoclipboard')

        await action.click(component.importWalletPasteBtn)
    })

    //* === Check Private Key Wrong Format ===
    it('[Functional] Check Private Key Wrong Format',async () => {
        await action.enterText(component.importWalletPrivatekeyField, 'test test test test test test test test test test test test test test test test test test test test test test test test test test')
        
        // assert
        await assert.checkElementDisplayed(component.importWalletWrongPrivatekeyText)
        await assert.checkText(component.importWalletWrongPrivatekeyText, 'Invalid mnemonic phrase.')

        await assert.checkDisabled(component.importWalletImportBtn)

        // after
        await action.clearText(component.importWalletPrivatekeyField)
    })

    //* === Check Private Key Fail ===
    it('[Functional] Check Private Key Fail',async () => {
        await action.click(component.importWalletPrivatekeyField)
        await action.enterText(component.importWalletPrivatekeyField, 'his how have has water fire seven one two tree monster bruh')

        // assert
        await assert.checkNotDisabled(component.importWalletImportBtn)

        // action
        await action.click(component.importWalletImportBtn) // This one for de-select from keyboard
        await action.click(component.importWalletImportBtn)
        
        // assert
        await assert.checkElementDisplayed(component.importWalletWrongPrivatekeyText)
        await assert.checkText(component.importWalletWrongPrivatekeyText, 'Invalid mnemonic phrase.')

    })

    //* === Check Private Key Success ===
    it('[Functional] Check Private Key Success',async () => {
        await action.click(component.importWalletPrivatekeyField)
        await action.enterText(component.importWalletPrivatekeyField, `${process.env.MNEMONIC_PHRASE}`)

        // assert
        await assert.checkNotDisabled(component.importWalletImportBtn)

        // action
        await action.click(component.importWalletImportBtn) // This one for de-select from keyboard
        await action.click(component.importWalletImportBtn)
        
        // assert
        await assert.checkElementDisplayed(component.loadText)
        await assert.checkElementDisplayed(component.importSuccessText)
    })

    afterAll(async () => {
        // remove app
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})