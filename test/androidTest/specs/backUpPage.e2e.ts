import { expect } from '@wdio/globals'
import { backUpComponent } from '../component/backUpComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new backUpComponent()
const action = new Action()
const assert = new Assertion()

describe('Back Up Test Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)

        await action.click(component.successBackupBtn)
    })

    // === Check Back Up Pop-up ===
    it('[Wording] Check Back Up Pop-up Text',async () => {
        await action.waitForDisplayed(component.backupPagePopupText)
        await assert.checkText(component.backupPagePopupText, "Do this step in private place")
    })

    it('[Tap] Check Back Up Pop-up Btn Tap',async () => {
        await action.waitForDisplayed(component.backupPagePopupBtn)
        await assert.checkText(component.backupPagePopupBtn, "Continue")

        await action.click(component.backupPagePopupBtn)
    })

    // === Check Back Up Page (12 Words) ===
    it('[Wording] Check Back Up Title Text',async () => {
        await action.waitForDisplayed(component.backupPageTitleText)
        await assert.checkText(component.backupPageTitleText, 'Back up Mnemonic phrase')
    })

    it('[Wording] Check 12 Word Text',async () => {
        await action.waitForDisplayed(component.backupPage12Text)
        await assert.checkText(component.backupPage12Text, '12')
    })

    it('[Display] Check Back Btn',async () => {
        await action.waitForDisplayed(component.backupPageBackBtn)
        await assert.checkText(component.backupPageBackBtn, '')
    })

    it('[Display] Check Copy Btn',async () => {
        await action.waitForDisplayed(component.backupPageCopyBtn)
        await assert.checkText(component.backupPageCopyBtn, 'copy to clipboard')
    })

    it('[Display] Check Check Box',async () => {
        await action.waitForDisplayed(component.backupPageCheckbox)
        await assert.checkAttr(component.backupPageCheckbox, 'className', 'android.widget.CheckBox')
    })

    it('[Display] Check Continue Btn',async () => {
        await action.waitForDisplayed(component.backupPageContinueBtn)
        await assert.checkText(component.backupPageContinueBtn, 'Continue')
    })

    it('[Tap] Check Back Btn Tap',async () => {
        await action.waitForDisplayed(component.backupPageBackBtn)
        await assert.checkText(component.backupPageBackBtn, '')

        await action.click(component.backupPageBackBtn)

        await action.waitForDisplayed(component.successText)
        await assert.checkText(component.successText, "You're all done!")

        await action.waitForDisplayed(component.successBackupBtn)
        await action.click(component.successBackupBtn)

        await action.waitForDisplayed(component.backupPagePopupBtn)
        await assert.checkText(component.backupPagePopupBtn, "Continue")

        await action.click(component.backupPagePopupBtn)
    })

    it('[Tap] Check Copy Btn Tap',async () => {
        await action.waitForDisplayed(component.backupPageCopyBtn)
        await assert.checkText(component.backupPageCopyBtn, 'copy to clipboard')

        await action.click(component.backupPageCopyBtn)
    })

    it('[Tap] Check Check Box Btn Tap',async () => {
        await action.waitForDisplayed(component.backupPageCheckbox)
        await assert.checkAttr(component.backupPageCheckbox, 'className', 'android.widget.CheckBox')

        await action.click(component.backupPageCheckbox)

        await action.waitForDisplayed(component.backupPageContinueBtn)
        await assert.checkAttr(component.backupPageContinueBtn, 'enabled', 'true')
    })

    it('[Tap] Check Continue Btn Tap',async () => {
        await action.waitForDisplayed(component.backupPageContinueBtn)
        await assert.checkAttr(component.backupPageContinueBtn, 'enabled', 'true')

        await action.click(component.backupPageContinueBtn)

        await action.waitForDisplayed(component.backupPageRememberPhraseText)
        await assert.checkText(component.backupPageRememberPhraseText, 'Remember to record your words in the same order as they appear below.')
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})