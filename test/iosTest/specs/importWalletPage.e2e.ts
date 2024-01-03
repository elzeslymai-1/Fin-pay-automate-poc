import { importWalletComponent } from '../component/importWalletComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new importWalletComponent()
const action = new Action()
const assert = new Assertion()

describe('Import Wallet Page Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.BUNDLE_ID}`)
        await action.click(component.splashScreenImportWalletBtn)
    })

    // === Check Import Wallet Page ===
    it('[Wording] Check Import Wallet Header', async () => {
        //assert
        await action.waitForDisplayed(component.importWalletTitleText)
        await assert.checkText(component.importWalletTitleText, 'Import Wallet')
    })

    it('[Wording] Check Import Wallet Topic', async () => {
        //assert
        await action.waitForDisplayed(component.importWalletHeaderText)
        await assert.checkText(component.importWalletHeaderText, 'Enter Mnemonic or Private Key')
    })

    it('[Wording] Check Import Wallet Description', async () => {
        //assert
        await action.waitForDisplayed(component.importWalletDescriptionText)
        await assert.checkText(component.importWalletDescriptionText, 'Input your mnemonic phrases with spacing. Supports 12-word, 24-word mnemonic phrases and private keys for all wallet types.')
    })

    it('[Display] Check Back Btn', async () => {
        //assert
        await action.waitForDisplayed(component.importWalletBackBtn)
        await assert.checkElemenDisplayed(component.importWalletBackBtn)
        await assert.checkText(component.importWalletBackBtn, '')
    })

    it('[Display] Check Private Key Field', async () => {
        //assert
        await action.waitForDisplayed(component.importWalletPrivatekeyField)
        await assert.checkElemenDisplayed(component.importWalletPrivatekeyField)
    })

    it('[Display] Check Paste Btn', async () => {
        //assert
        await action.waitForDisplayed(component.importWalletPrivatekeyField)
        await assert.checkElemenDisplayed(component.importWalletPrivatekeyField)
    })

    it('[Display] Check Import Wallet Btn', async () => {
        //assert
        await action.waitForDisplayed(component.importWalletImportBtn)
        await assert.checkElemenDisplayed(component.importWalletImportBtn)
        await assert.checkText(component.importWalletImportBtn, 'Import Wallet')
    })


    it('[Display] Check Import Wallet Btn Should be Disabled', async () => {
        //assert
        await action.waitForDisplayed(component.importWalletImportBtn)
        await assert.checkDisabled(component.importWalletImportBtn)
    })

    it('[Tap] Check Back Btn Tap', async () => {
        await action.waitForDisplayed(component.importWalletBackBtn)
        await action.click(component.importWalletBackBtn)

        //assert
        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await assert.checkElemenDisplayed(component.splashScreenImportWalletBtn)

        //after
        await action.click(component.splashScreenImportWalletBtn)
    })

    it('[Tap] Check Paste Btn Tap', async () => {
        await action.setClipboard(`${process.env.MNEMONIC_PHRASE}`)

        await action.waitForDisplayed(component.importWalletPasteBtn)
        await action.click(component.importWalletPasteBtn)

        await action.acceptAlert()

        //assert
        await action.waitForDisplayed(component.importWalletImportBtn)
        await assert.checkEnabled(component.importWalletImportBtn)

        //after
        await action.click(component.importWalletBackBtn)
    })

    it('[Functional] Check Mnemonic Phrase Wrong Format', async () => {
        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await action.click(component.splashScreenImportWalletBtn)

        await action.setClipboard('test test')

        await action.waitForDisplayed(component.importWalletPasteBtn)
        await action.click(component.importWalletPasteBtn)

        await action.acceptAlert()

        //assert
        await action.waitForDisplayed(component.importWalletMnemonicErrorMessageText)
        await assert.checkText(component.importWalletMnemonicErrorMessageText, 'Invalid mnemonic phrase.')

        await action.waitForDisplayed(component.importWalletImportBtn)
        await assert.checkDisabled(component.importWalletImportBtn)

        //after
        await action.click(component.importWalletBackBtn)
    })

    it('[Functional] Check Import Wallet Failed', async () => {
        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await action.click(component.splashScreenImportWalletBtn)

        await action.setClipboard('t t t t t t t t t t t t')

        await action.waitForDisplayed(component.importWalletPasteBtn)
        await action.click(component.importWalletPasteBtn)

        await action.acceptAlert()

        await action.waitForDisplayed(component.importWalletImportBtn)
        await action.click(component.importWalletImportBtn)

        //assert
        await action.waitForDisplayed(component.importWalletMnemonicErrorMessageText)
        await assert.checkText(component.importWalletMnemonicErrorMessageText, 'Invalid mnemonic phrase.')

        await action.waitForDisplayed(component.importWalletImportBtn)
        await assert.checkDisabled(component.importWalletImportBtn)

        //after
        await action.click(component.importWalletBackBtn)
    })

    it('[Functional] Check Import Wallet Success', async () => {
        await action.waitForDisplayed(component.splashScreenImportWalletBtn)
        await action.click(component.splashScreenImportWalletBtn)

        // await action.setClipboard('t t t t t t t t t t t t')
        await action.setClipboard(`${process.env.MNEMONIC_PHRASE}`)

        await action.waitForDisplayed(component.importWalletPasteBtn)
        await action.click(component.importWalletPasteBtn)

        await action.acceptAlert()

        await action.waitForDisplayed(component.importWalletImportBtn)
        await action.click(component.importWalletImportBtn)

        //assert
        await action.waitForDisplayed(component.importWalletLoadingText)
        await assert.checkText(component.importWalletLoadingText, 'LOADING WALLET...')

        await action.pause(3000)

        await action.waitForDisplayed(component.importWalletSuccessText)
        await assert.checkText(component.importWalletSuccessText, 'IMPORT WALLET SUCCESS')

        await action.pause(3000)

        await assert.checkElemenDisplayed(component.homeTabHomeBtn)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.BUNDLE_ID}`)
    })
})