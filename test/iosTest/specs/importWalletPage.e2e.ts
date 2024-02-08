import { ImportWalletComponent } from '../component/importWalletComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new ImportWalletComponent()
const action = new Action()
const assert = new Assertion()

describe('Import Wallet Page Scenario', () => {
    beforeAll(async () => {
        await action.installApps('apps/FinPay.app')
        await action.launchApps(`${process.env.BUNDLE_ID}`)
        await action.click(component.splashScreenImportWalletBtn)
    })

    it('[Display] Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.importWalletBackBtn)
    })

    it('[Display] Check Private Key Field Displayed', async () => {
        //assert
        await assert.checkElementDisplayed(component.importWalletPrivatekeyField)
    })

    it('[Display] Check Paste Btn Displayed', async () => {
        //assert
        await assert.checkElementDisplayed(component.importWalletPrivatekeyField)
    })

    it('[Display] Check Import Wallet Btn Displayed', async () => {
        //assert
        await assert.checkElementDisplayed(component.importWalletImportBtn)
    })

    it('[Display] Check Import Wallet Btn Should be Disabled', async () => {
        //assert
        await assert.checkElementDisplayed(component.importWalletImportBtn)
        await assert.checkDisabled(component.importWalletImportBtn)
    })

    it('[Wording] Check Back Btn Wording', async () => {
        //assert
        await assert.checkText(component.importWalletBackBtn, '')
    })

    it('[Wording] Check Import Wallet Title Wording', async () => {
        //assert
        await assert.checkText(component.importWalletTitleText, 'Import Wallet')
    })

    it('[Wording] Check Import Wallet Header Wording', async () => {
        //assert
        await assert.checkText(component.importWalletHeaderText, 'Enter Mnemonic')
    })

    it('[Wording] Check Import Wallet Description Wording', async () => {
        //assert
        await assert.checkText(component.importWalletDescriptionText, 'Input your mnemonic phrases with spacing. Supports 12-word, 24-word mnemonic phrases for all wallet types.')
    })

    it('[Wording] Check Import wallet Btn Wording', async () => {
        // assert
        await assert.checkText(component.importWalletImportBtn, 'Import Wallet')
    })

    it('[Tap] Check Back Btn Tap', async () => {
        await action.click(component.importWalletBackBtn)

        //assert
        await assert.checkElementDisplayed(component.splashScreenImportWalletBtn)

        //after
        await action.click(component.splashScreenImportWalletBtn)
    })

    it('[Tap] Check Paste Btn Tap', async () => {
        await action.setClipboard(`${process.env.MNEMONIC_PHRASE}`)
        await action.click(component.importWalletPasteBtn)
        await action.acceptAlert()

        //assert
        await assert.checkEnabled(component.importWalletImportBtn)

        //after
        await action.click(component.importWalletBackBtn)
    })

    it('[Functional] Check Mnemonic Phrase Wrong Format', async () => {
        await action.click(component.splashScreenImportWalletBtn)

        await action.setClipboard('test test')
        await action.click(component.importWalletPasteBtn)
        await action.acceptAlert()

        //assert
        await assert.checkText(component.importWalletMnemonicErrorMessageText, 'Invalid mnemonic phrase.')
        await assert.checkDisabled(component.importWalletImportBtn)

        //after
        await action.click(component.importWalletBackBtn)
    })

    it('[Functional] Check Import Wallet Failed', async () => {
        await action.click(component.splashScreenImportWalletBtn)

        await action.setClipboard('t t t t t t t t t t t t')
        await action.click(component.importWalletPasteBtn)
        await action.acceptAlert()

        await action.click(component.importWalletImportBtn)

        //assert
        await assert.checkText(component.importWalletMnemonicErrorMessageText, 'Invalid mnemonic phrase.')
        await assert.checkDisabled(component.importWalletImportBtn)

        //after
        await action.click(component.importWalletBackBtn)
    })

    it('[Functional] Check Import Wallet Success', async () => {
        await action.click(component.splashScreenImportWalletBtn)

        await action.setClipboard(`${process.env.MNEMONIC_PHRASE}`)
        await action.click(component.importWalletPasteBtn)
        await action.acceptAlert()

        await action.click(component.importWalletImportBtn)

        //assert
        await assert.checkText(component.importWalletLoadingText, 'LOADING WALLET...')
        await action.pause(3000)
        await assert.checkText(component.importWalletSuccessText, 'IMPORT WALLET SUCCESS')
        await action.pause(3000)
        await assert.checkElementDisplayed(component.homeTabHomeBtn)
    })

    afterAll(async () => {
        // remove apps
        await action.removeApps(`${process.env.BUNDLE_ID}`)
    })
})