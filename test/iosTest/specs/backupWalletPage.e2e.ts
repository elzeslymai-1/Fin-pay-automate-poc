import { backUpWalletComponent } from '../component/backupWalletComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new backUpWalletComponent()
const action = new Action()
const assert = new Assertion()

describe('Backup Modal Test Scenario', () => {
    beforeAll(async () => {
        await action.installApps('apps/FinsDefiWallet.app')
        await action.launchApps(`${process.env.BUNDLE_ID}`)

        // create wallet
        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWalletMnemonic12WordBtn)
        await action.click(component.createWalletContinueBtn)
        await action.pause(4000)
        await action.click(component.createWalletSuccessBackupBtn)
    })

    it('[Display] Check Modal Continue Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupWalletModalContinueBtn)
    })

    it('[Wording] Check Modal Header Wording', async () => {
        //assert
        await assert.checkText(component.backupWalletModalHeaderText, "Do this step in private place")
    })
    it('[Wording] Check Modal Description Wording', async () => {
        //assert
        await assert.checkText(component.backupWalletModalDescriptionText, "Your recovery phrase is what grants you ( and anyone who has it ) access to your funds. Be sure to store it in a safe place.")
    })

    it('[Wording] Check Modal Continue Btn Wording', async () => {
        //assert
        await assert.checkText(component.backupWalletModalContinueBtn, "Continue")
    })

    it('[Tap] Check Tap Modal Btn', async () => {
        // action
        await action.click(component.backupWalletModalContinueBtn)

        // assert
        await assert.checkElementDisplayed(component.backupWalletTitleText)
    })
})

describe('Back Up Mnemonic Test Scenario', () => {

    it('[Display] Check Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupWalletBackBtn)
    })
    
    it('[Display] Check Copy Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupWalletCopyBtn)
    })
    
    it('[Display] Check Check Box', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupWalletCheckboxBtn)
    })
    
    it('[Display] Check Continue Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupWalletContinueBtn)
    })
    
    it('[Display] Check Continue Btn Should be Disabled', async () => {
        // assert
        await assert.checkDisabled(component.backupWalletContinueBtn)
    })

    it('[Wording] Check Back Btn Wording', async () => {
        // assert
        await assert.checkText(component.backupWalletBackBtn, '')
    })

    it('[Wording] Check Back Up Title Wording', async () => {
        // assert
        await assert.checkText(component.backupWalletTitleText, 'Back up Mnemonic phrase')
    })

    it('[Wording] Check Back Up Header Wording', async () => {
        // assert
        await assert.checkText(component.backupWalletHeaderText, 'Your Mnemonic phrase')
    })

    it('[Wording] Check Back Up Description Wording', async () => {
        // assert
        await assert.checkText(component.backupWalletDescriptionText, 'Remember to record your words in the same order as they appear below.')
    })

    it('[Wording] Check Copy Btn Wording', async () => {
        // assert
        await assert.checkText(component.backupWalletCopyBtn, 'copy to clipboard')
    })

    it('[Wording] Check Check Box Wording', async () => {
        // assert
        await assert.checkText(component.backupWalletCheckboxBtn, 'I understand that if I lose my recovery phrase, I will not be able to access my funds.')
    })

    it('[Wording] Check Continue Btn Wording', async () => {
        // assert
        await assert.checkText(component.backupWalletContinueBtn, 'Continue')
    })

    it('[Tap] Check Tap Back Btn', async () => {
        // action
        await action.click(component.backupWalletBackBtn)

        // assert
        await assert.checkText(component.createWalletSuccessHeaderText, "You're all done!")

        // after
        await action.click(component.createWalletSuccessBackupBtn)
        await action.click(component.backupWalletModalContinueBtn)
    })

    it('[Tap] Check Tap Copy Btn', async () => {
        // action
        await action.click(component.backupWalletCopyBtn)

        // assert
        await assert.checkElementDisplayed(component.backupWalletCopyText)
    })

    it('[Tap] Check Tap Check Box Btn', async () => {
        // action
        await action.click(component.backupWalletCheckboxBtn)

        // assert
        await assert.checkNotDisabled(component.backupWalletContinueBtn)
    })

    it('[Tap] Check Tap Continue Btn', async () => {
        // action
        await action.click(component.backupWalletContinueBtn)

        // assert
        await assert.checkElementDisplayed(component.pickMnemonicTitleText)

        // after
        await action.closeApps(`${process.env.BUNDLE_ID}`)
        await action.launchAndroidApps(`${process.env.BUNDLE_ID}`)
    })

    it('[Functional] Backup with 12-Mnemonic Phrase', async () => {
        //action
        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWalletMnemonic12WordBtn)
        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)
        await action.click(component.createWalletSuccessBackupBtn)
        await action.click(component.backupWalletModalContinueBtn)

        // assert
        await assert.checkText(component.backupWallet12Text, '12')

        // after
        await action.closeApps(`${process.env.BUNDLE_ID}`)
        await action.launchAndroidApps(`${process.env.BUNDLE_ID}`)
    })

    it('[Functional] Backup with 24-Mnemonic Phrase', async () => {
        //action
        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWalletMnemonic24WordBtn)
        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)
        await action.click(component.createWalletSuccessBackupBtn)
        await action.click(component.backupWalletModalContinueBtn)
        await action.pause(1000)
        await action.swipe('up')

        // assert
        await assert.checkText(component.backupWallet24Text, '24')
    })
})

describe('Correct Mnemonic Phrase Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.backupWalletCheckboxBtn)

        await action.click(component.backupWalletContinueBtn)
    })

    it('[Display] Check Mnemonic Phrase Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.pickMnemonicBackBtn)
    })

    it('[Display] Check Mnemonic Phrase Continue Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.pickMnemonicContinueBtn)
    })

    it('[Display] Check Mnemonic Phrase Continue Btn Should be Disabled', async () => {
        // assert
        await assert.checkDisabled(component.pickMnemonicContinueBtn)
    })

    it('[Wording] Check Mnemonic Phrase Back Btn Wording', async () => {
        // assert
        await assert.checkText(component.pickMnemonicBackBtn, '')
    })

    it('[Wording] Check Mnemonic Phrase Title Wording', async () => {
        // assert
        await assert.checkText(component.pickMnemonicTitleText, 'Back up Mnemonic phrase')
    })

    it('[Wording] Check Mnemonic Phrase Header Wording', async () => {
        // assert
        await assert.checkText(component.pickMnemonicHeaderText, 'Your Mnemonic phrase')
    })

    it('[Wording] Check Mnemonic Phrase Description Wording', async () => {
        // assert
        await assert.checkText(component.pickMnemonicDescriptionText, 'Remember to record your words in the same order as they appear below.')
    })

    it('[Wording] Check Mnemonic Phrase Continue Btn Wording', async () => {
        // assert
        await assert.checkText(component.pickMnemonicContinueBtn, 'Continue')
    })

    it('[Tap] Check Tap Back Btn', async () => {
        // action
        await action.click(component.pickMnemonicBackBtn)
        await action.click(component.backupWalletModalContinueBtn)

        // assert
        await assert.checkText(component.backupWalletTitleText, 'Back up Mnemonic phrase')
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.BUNDLE_ID}`)
    })
})