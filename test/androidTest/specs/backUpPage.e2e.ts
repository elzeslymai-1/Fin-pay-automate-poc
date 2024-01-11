import { backUpComponent } from '../component/backUpComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new backUpComponent()
const action = new Action()
const assert = new Assertion()

describe('Back Up Pop Test Senario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)

        await action.click(component.successBackupBtn)
    })

    it('[Wording] Check Pop-up Title Text', async () => {
        //assert
        await assert.checkText(component.backupPopupText, "Do this step in private place")
    })

    it('[Wording] Check Pop-up Description Text', async () => {
        //assert
        await assert.checkText(component.backupPopupDescriptionText, "Your recovery phrase is what grants you ( and anyone who has it ) access to your funds. Be sure to store it in a safe place.")
    })

    it('[Wording] Check Pop-up Btn Text', async () => {
        //assert
        await assert.checkText(component.backupPopupBtn, "Continue")
    })

    it('[Display] Check Pop-up Continue Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.backupPopupBtn)
    })

    it('[Tap] Check Pop-up Btn Tap', async () => {
        // action
        await action.click(component.backupPopupBtn)

        // assert
        await assert.checkElementDisplayed(component.backupTitleText)
    })
})

describe('Back Up (12-Words) Test Senario', () => {
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

    it('[Wording] Check 12 Word Text', async () => {
        // assert
        await assert.checkText(component.backup12Text, '12')
    })

    it('[Wording] Check Back Btn Text', async () => {
        // assert
        await assert.checkText(component.backupBackBtn, '')
    })

    it('[Wording] Check Copy Btn Text', async () => {
        // assert
        await assert.checkText(component.backupCopyBtn, 'copy to clipboard')
    })

    it('[Wording] Check Continue Btn', async () => {
        // assert
        await assert.checkText(component.backupContinueBtn, 'Continue')
    })

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
        await assert.checkDisabled(component.backupContinueBtn)
    })

    it('[Tap] Check Back Btn Tap', async () => {
        // action
        await action.click(component.backupBackBtn)

        // assert
        await assert.checkText(component.successText, "You're all done!")

        // after
        await action.click(component.successBackupBtn)

        // handle pop-up
        await assert.checkText(component.backupPopupText, "Do this step in private place")
        await action.click(component.backupPopupBtn)
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
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})

describe('Back Up (24-Words) Test Senario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet24wordBtn)

        await action.click(component.createWalletContinueBtn)

        await action.waitForExist(component.successBackupBtn, 30000, false)
        await action.click(component.successBackupBtn)

        await action.click(component.backupPopupBtn)
    })

    it('[Wording] Check 24 Word Text', async () => {
        // swipe
        await action.swipe('up')

        // assert
        await assert.checkText(component.backup24Text, '24')
    })
})

describe('Correct Mnemonic Phrase Test Senario', () => {
    beforeAll(async () => {
        await action.click(component.backupCheckbox)

        await action.click(component.backupContinueBtn)
    })
    it('[Wording] Check Correct Mnemonic Phrase Title Text',async () => {
        // assert
        await assert.checkText(component.correctMnemonicTitleText, 'Back up Mnemonic phrase')
    })

    it('[Wording] Check Correct Mnemonic Phrase Header Text',async () => {
        // assert
        await assert.checkText(component.correctMnemonicHeaderText, 'Your Mnemonic phrase')
    })

    it('[Wording] Check Correct Mnemonic Phrase Description Text',async () => {
        // assert
        await assert.checkText(component.correctMnemonicDescriptionText, 'Remember to record your words in the same order as they appear below.')
    })

    it('[Wording] Check Correct Mnemonic Phrase Continue Btn',async () => {
        // assert
        await assert.checkText(component.correctMnemonicContinueBtn, 'Continue')
    })

    it('[Display] Check Correct Mnemonic Phrase Continue Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.correctMnemonicContinueBtn)
        await assert.checkDisabled(component.correctMnemonicContinueBtn)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})