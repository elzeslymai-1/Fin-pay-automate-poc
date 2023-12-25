import { expect } from '@wdio/globals'
import { backUpComponent } from '../component/backUpComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new backUpComponent()
const action = new Action()
const assert = new Assertion()

describe('Back Up Test Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.BUNDLE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)

        await action.click(component.successBackupBtn)
    })

    // === Check Android Access Music Module ===
    it('[Display] Check Android Access Music Btn',async () => {
        await action.waitForDisplayed(component.androidAccessAllowBtn)
        await assert.checkText(component.androidAccessAllowBtn, 'Allow')

        await action.waitForDisplayed(component.androidAccessDontAllowBtn)
    })

    it('[Tap] Check Android Access Music Allow Btn Tap',async () => {
        await action.waitForDisplayed(component.androidAccessAllowBtn)
        
        await action.click(component.androidAccessAllowBtn)
    })

    // === Check Android Access Photo Module ===
    it('[Display] Check Android Access Photo Btn',async () => {
        await action.waitForDisplayed(component.androidAccessAllowAllBtn)
        await assert.checkText(component.androidAccessAllowAllBtn, 'Allow all')

        await action.waitForDisplayed(component.androidAccessDontAllowBtn)

        await action.waitForDisplayed(component.androidAccessSelectPhotoBtn)
        await assert.checkText(component.androidAccessSelectPhotoBtn, 'Select photos and videos')
    })

    it('[Tap] Check Android Access Photo AllowAll Btn Tap',async () => {
        await action.waitForDisplayed(component.androidAccessAllowAllBtn)
        
        await action.click(component.androidAccessAllowAllBtn)
    })

    // === Check Back Up Pop-up ===
    it('[Tap] Check Back Up Pop-up Btn Tap',async () => {
        await action.waitForDisplayed(component.backupInfoPopupBtn)
        await assert.checkText(component.backupInfoPopupBtn, "I'm ready")

        await action.click(component.backupInfoPopupBtn)
    })

    // === Check Back Up Page (12 Words) ===
    it('[Wording] Check Back Up Title Text',async () => {
        await action.waitForDisplayed(component.backupPageTitleText)
        await assert.checkText(component.backupPageTitleText, 'Back up Your Mnemonic phrase')
    })

    it('[Wording] Check 12 Word Text',async () => {
        await action.waitForDisplayed(component.backupPage12Text)
        await assert.checkText(component.backupPage12Text, '12')
    })

    it('[Display] Check Back Btn',async () => {
        await action.waitForDisplayed(component.backupPageBackBtn)
    })

    it('[Display] Check Copy Btn',async () => {
        await action.waitForDisplayed(component.backupPageCopyBtn)
        await assert.checkText(component.backupPageCopyBtn, 'copy to clipboard')
    })

    it('[Display] Check Check Box',async () => {
        await action.waitForDisplayed(component.backupPageCheckbox)
    })

    it('[Display] Check Continue Btn',async () => {
        await action.waitForDisplayed(component.backupPageContinueBtn)
        await assert.checkText(component.backupPageContinueBtn, 'Continue')
    })

    it('[Tap] Check Back Btn Tap',async () => {
        await action.waitForDisplayed(component.backupPageBackBtn)

        await action.click(component.backupPageBackBtn)

        await action.waitForDisplayed(component.successText)
        await assert.checkText(component.successText, "You're all done!")

        await action.waitForDisplayed(component.successBackupBtn)
        await action.click(component.successBackupBtn)

        await action.waitForDisplayed(component.backupInfoPopupBtn)
        await assert.checkText(component.backupInfoPopupBtn, "I'm ready")

        await action.click(component.backupInfoPopupBtn)
    })

    it('[Tap] Check Copy Btn Tap',async () => {
        await action.waitForDisplayed(component.backupPageCopyBtn)

        await action.click(component.backupPageCopyBtn)

        await action.waitForDisplayed(component.backupPageCopiedText)

        await action.click(component.backupPageBackBtn)

        await action.waitForDisplayed(component.successText)
        await assert.checkText(component.successText, "You're all done!")

        await action.waitForDisplayed(component.successBackupBtn)
        await action.click(component.successBackupBtn)

        await action.waitForDisplayed(component.backupInfoPopupBtn)
        await assert.checkText(component.backupInfoPopupBtn, "I'm ready")

        await action.click(component.backupInfoPopupBtn)
    })

    it('[Tap] Check Check Box Btn Tap',async () => {
        await action.waitForDisplayed(component.backupPageCheckbox)

        await action.click(component.backupPageCheckbox)

        await action.waitForDisplayed(component.backupPageContinueBtn)
        await assert.checkAttr(component.backupPageContinueBtn, 'enabled', 'true')
    })

    it('[Tap] Check Continue Btn Tap',async () => {
        await action.waitForDisplayed(component.backupPageContinueBtn)
        await assert.checkAttr(component.backupPageContinueBtn, 'enabled', 'true')

        await action.click(component.backupPageContinueBtn)

        await action.waitForDisplayed(component.backupPageRememberPhraseText)
        
        await action.click(component.backupPageBackBtn)

        await action.waitForDisplayed(component.successText)
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.BUNDLE_ID}`)
    })
})