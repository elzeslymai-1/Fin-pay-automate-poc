import { backUpComponent } from '../component/backUpComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new backUpComponent()
const action = new Action()
const assert = new Assertion()

describe('Back Up Pop Test Scenario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)

        await action.click(component.successBackupBtn)
    })

    it('[Display] Check Pop-up Continue Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupPopupContinueBtn)
    })

    it('[Wording] Check Pop-up Header Text', async () => {
        //assert
        await assert.checkText(component.backupPopupText, "Do this step in private place")
    })

    it('[Wording] Check Pop-up Description Text', async () => {
        //assert
        await assert.checkText(component.backupPopupDescriptionText, "Your recovery phrase is what grants you ( and anyone who has it ) access to your funds. Be sure to store it in a safe place.")
    })

    it('[Wording] Check Pop-up Continue Btn Text', async () => {
        //assert
        await assert.checkText(component.backupPopupContinueBtn, "Continue")
    })

    it('[Tap] Check Pop-up Btn Tap', async () => {
        // action
        await action.click(component.backupPopupContinueBtn)

        // assert
        await assert.checkElementDisplayed(component.backupTitleText)
    })
})

describe('Back Up Mnemonic Test Scenario', () => {

    it('[Display] Check Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupBackBtn)
    })

    it('[Display] Check Copy Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupCopyBtn)
    })

    it('[Display] Check Check Box', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupCheckbox)
    })

    it('[Display] Check Continue Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupContinueBtn)
    })

    it('[Display] Check Continue Btn Should be Disabled', async () => {
        // assert
        await assert.checkDisabled(component.backupContinueBtn)
    })

    it('[Wording] Check Back Up Title Text', async () => {
        // assert
        await assert.checkText(component.backupTitleText, 'Back up Mnemonic phrase')
    })

    it('[Wording] Check Back Up Header Text', async () => {
        // assert
        await assert.checkText(component.backupHeaderText, 'Your Mnemonic phrase')
    })

    it('[Wording] Check Back Up Description Text', async () => {
        // assert
        await assert.checkText(component.backupDescriptionText, 'Remember to record your words in the same order as they appear below.')
    })

    it('[Wording] Check Back Btn Text', async () => {
        // assert
        await assert.checkText(component.backupBackBtn, '')
    })

    it('[Wording] Check Copy Btn Text', async () => {
        // assert
        await assert.checkText(component.backupCopyBtn, 'copy to clipboard')
    })

    it('[Wording] Check Check Box Text', async () => {
        // assert
        await assert.checkText(component.backupCheckboxText, 'I understand that if I lose my recovery phrase, I will not be able to access my funds.')
    })

    it('[Wording] Check Continue Btn', async () => {
        // assert
        await assert.checkText(component.backupContinueBtn, 'Continue')
    })

    it('[Tap] Check Back Btn Tap', async () => {
        // action
        await action.click(component.backupBackBtn)

        // assert
        await assert.checkText(component.successText, "You're all done!")

        // after
        await action.click(component.successBackupBtn)
        await action.click(component.backupPopupContinueBtn)
    })

    it('[Tap] Check Copy Btn Tap', async () => {
        // action
        await action.click(component.backupCopyBtn)
        // await action.waitForDisplayed(component.backupCopyText)
    })

    it('[Tap] Check Check Box Btn Tap', async () => {
        // action
        await action.click(component.backupCheckbox)

        // assert
        await assert.checkNotDisabled(component.backupContinueBtn)
    })

    it('[Tap] Check Continue Btn Tap', async () => {
        // action
        await action.click(component.backupContinueBtn)

        // assert
        await assert.checkElementDisplayed(component.correctMnemonicTitleText)

        // after
        await action.closeApps(`${process.env.PACKAGE_ID}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)
    })

    it('[Functional] Backup with 12-Mnemonic Phrase', async () => {
        //action
        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWallet12wordBtn)
        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)
        await action.click(component.successBackupBtn)
        await action.click(component.backupPopupContinueBtn)

        // assert
        await assert.checkText(component.backup12Text, '12')

        // after
        await action.closeApps(`${process.env.PACKAGE_ID}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)
    })

    it('[Functional] Backup with 24-Mnemonic Phrase', async () => {
        //action
        await action.click(component.splashScreenCreateWalletBtn)
        await action.click(component.createWallet24wordBtn)
        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)
        await action.click(component.successBackupBtn)
        await action.click(component.backupPopupContinueBtn)
        await action.pause(1000)
        await action.swipe('up')

        // assert
        await assert.checkText(component.backup24Text, '24')
    })
})

describe('Correct Mnemonic Phrase Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.backupCheckbox)

        await action.click(component.backupContinueBtn)
    })

    it('[Display] Check Mnemonic Phrase Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.correctMnemonicBackBtn)
    })
    
    it('[Display] Check Mnemonic Phrase Continue Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.correctMnemonicContinueBtn)
        await assert.checkDisabled(component.correctMnemonicContinueBtn)
    })

    it('[Wording] Check Mnemonic Phrase Title Text', async () => {
        // assert
        await assert.checkText(component.correctMnemonicTitleText, 'Back up Mnemonic phrase')
    })

    it('[Wording] Check Mnemonic Phrase Header Text', async () => {
        // assert
        await assert.checkText(component.correctMnemonicHeaderText, 'Your Mnemonic phrase')
    })

    it('[Wording] Check Mnemonic Phrase Description Text', async () => {
        // assert
        await assert.checkText(component.correctMnemonicDescriptionText, 'Remember to record your words in the same order as they appear below.')
    })

    it('[Wording] Check Mnemonic Phrase Back Btn Text', async () => {
        // assert
        await assert.checkText(component.correctMnemonicBackBtn, '')
    })

    it('[Wording] Check Mnemonic Phrase Continue Btn', async () => {
        // assert
        await assert.checkText(component.correctMnemonicContinueBtn, 'Continue')
    })

    it('[Tap] Check Correct Mnemonic Phrase Back Btn Tap',async () => {
        // action
        await action.click(component.correctMnemonicBackBtn)

        // assert
        await assert.checkElementDisplayed(component.backupTitleText)

        // after
        await action.click(component.backupPopupContinueBtn)
        await action.click(component.backupCheckbox)
        await action.click(component.backupContinueBtn)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})