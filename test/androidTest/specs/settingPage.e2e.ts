import { settingComponent } from '../component/settingComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new settingComponent()
const action = new Action()
const assert = new Assertion()

describe('Setting Page Test Senario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)

        await action.click(component.successContinueBtn)

        await action.click(component.homeSettingBtn)
    })

    // === Check Setting Page ===
    it('[Display] Check My Wallet Btn',async () => {
        // assert (under development feature)
        await assert.checkElementDisplayed(component.settingMywalletBtn)
        // await assert.checkDisabled(component.settingMywalletBtn)
    })

    it('[Display] Check Currency Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.settingCurrencyBtn)
    })

    it('[Display] Check Network Management Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.settingNetworkManageBtn)
    })

    it('[Display] Check Import Wallet Btn',async () => {
        // assert (under development feature)
        await assert.checkElementDisplayed(component.settingImportWalletBtn)
        // await assert.checkDisabled(component.settingImportWalletBtn)
    })

    it('[Display] Check Custom Token Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.settingCustomTokenBtn)
    })

    it('[Display] Check Notification Btn',async () => {
        // assert (under development feature)
        await assert.checkElementDisplayed(component.settingNotificationBtn)
        // await assert.checkDisabled(component.settingNotificationBtn)
    })

    it('[Display] Check Contacts Btn',async () => {
        // assert (under development feature)
        await assert.checkElementDisplayed(component.settingContactsBtn)
        // await assert.checkDisabled(component.settingContactsBtn)
    })

    it('[Display] Check Sessions Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.settingSessionsBtn)
    })

    it('[Wording] Check Setting Title Text',async () => {
        // assert
        await assert.checkText(component.settingTitleText, 'Setting')
    })

    it('[Wording] Check Setting General Text',async () => {
        // assert
        await assert.checkText(component.settingGeneralText, 'General')
    })

    it('[Wording] Check Setting Currency Btn Text',async () => {
        // assert
        await assert.checkText(component.settingCurrencyBtn, 'Currency')
    })

    it('[Wording] Check Setting Network Management Btn Text',async () => {
        // assert
        await assert.checkText(component.settingNetworkManageBtn, 'Network Management')
    })

    it('[Wording] Check Setting Custom Token Btn Text',async () => {
        // assert
        await assert.checkText(component.settingCustomTokenBtn, 'Custom Token')
    })

    it('[Wording] Check Setting Others Text',async () => {
        // assert
        await assert.checkText(component.settingOthersText, 'Others')
    })

    it('[Wording] Check Setting Sessions Btn Text',async () => {
        // assert
        await assert.checkText(component.settingSessionsBtn, 'Sessions')
    })

    it('[Tap] Check Currency Btn Tap',async () => {
        // action        
        await action.click(component.settingCurrencyBtn)

        // assert
        await assert.checkElementDisplayed(component.currencyTitleText)

        // after (back to Setting)
        await action.click(component.currencyBackBtn)
    })

    it('[Tap] Check Network Management Btn',async () => {
        // action
        await action.click(component.settingNetworkManageBtn)

        // assert
        await assert.checkElementDisplayed(component.networkmanagementTitleText)

        // after (back to Setting)
        await action.click(component.networkmanagementCloseIconBtn)
    })

    it('[Tap] Check Custom Token Btn',async () => {
        // action
        await action.click(component.settingCustomTokenBtn)

        // assert
        await assert.checkElementDisplayed(component.customtokenTitleText)

        // after (back to Setting)
        await action.click(component.customtokenBackBtn)
    })

    it('[Tap] Check Sessions Btn Tap',async () => {
        // action        
        await action.click(component.settingSessionsBtn)

        // assert
        await assert.checkText(component.sessionsTitleText, 'Sessions')

        // after (back to Setting)
        await action.click(component.sessionsBackBtn)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})