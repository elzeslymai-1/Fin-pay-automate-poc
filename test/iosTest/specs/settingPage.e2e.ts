import { SettingComponent } from '../component/settingPageComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import { ImportWalletModel } from '../component/importWalletComponent.js'
import AllureReporter from '@wdio/allure-reporter'

const action = new Action()
const assert = new Assertion()
const component = new SettingComponent()
const importWalletModel = new ImportWalletModel()

describe('Setting Page', () => {

    // Setting Page Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app

            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await action.click(component.homeTabSettingBtn)     // go to setting page
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Setting Page Test Scenario')   // add sub suite for allure report
        })

        it('[Display] Check My Wallet Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.settingMyWalletBtn)
        })

        it('[Display] Check My Wallet Btn Should be Disable', async () => {
            // assert
            await assert.checkDisabled(component.settingMyWalletBtn)
        })

        it('[Display] Check Currency Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.settingCurrencyBtn)
        })

        it('[Display] Check Network Management Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.settingNetworkManageBtn)
        })

        it('[Display] Check Import Wallet Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.settingImportWalletBtn)
        })

        it('[Display] Check Import Wallet Btn Should be Disable', async () => {
            // assert
            await assert.checkDisabled(component.settingImportWalletBtn)
        })

        it('[Display] Check Custom Token Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.settingCustomTokenBtn)
        })

        it('[Display] Check Notification Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.settingNotificationBtn)
        })

        it('[Display] Check Notification Btn Should be Disable', async () => {
            // assert
            await assert.checkDisabled(component.settingNotificationBtn)
        })

        it('[Display] Check Contacts Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.settingContactsBtn)
        })

        it('[Display] Check Contacts Btn Should be Disable', async () => {
            // assert
            await assert.checkDisabled(component.settingContactsBtn)
        })

        it('[Display] Check Sessions Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.settingSessionsBtn)
        })

        it('[Wording] Check Setting Title Wording', async () => {
            // assert
            await assert.checkText(component.settingTitleText, 'Setting')
        })

        it('[Wording] Check General Wording', async () => {
            // assert
            await assert.checkText(component.settingGeneralText, 'General')
        })

        it('[Wording] Check My Wallet Wording', async () => {
            // assert
            await assert.checkTextContain(component.settingMyWalletBtn, 'My Wallet')
        })

        it('[Wording] Check My Wallet Should has Amount Wording Correctly', async () => {
            // assert
            await assert.checkTextContain(component.settingMyWalletBtn, '1 wallets')
        })

        it('[Wording] Check Currency Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.settingCurrencyBtn, 'Currency')
        })

        it('[Wording] Check Currency Should has Default Currency Correctly', async () => {
            // assert
            await assert.checkTextContain(component.settingCurrencyBtn, 'USD')
        })

        it('[Wording] Check Network Management Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.settingNetworkManageBtn, 'Network Management')
        })

        it('[Wording] Check Import Wallet Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.settingImportWalletBtn, 'Import Wallet')
        })

        it('[Wording] Check Custom Token Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.settingCustomTokenBtn, 'Custom Token')
        })

        it('[Wording] Check Others Wording', async () => {
            // assert
            await assert.checkText(component.settingOthersText, 'Others')
        })

        it('[Wording] Check Notification Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.settingNotificationBtn, 'Notification')
        })

        it('[Wording] Check Contact Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.settingContactsBtn, 'Contacts')
        })

        it('[Wording] Check Sessions Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.settingSessionsBtn, 'Sessions')
        })

        it('[Tap] Check Currency Btn Tap', async () => {
            // action        
            await action.click(component.settingCurrencyBtn)

            // assert
            await assert.checkElementDisplayed(component.currencyTitleText)

            // after
            await action.click(component.currencyBackBtn)
        })

        it('[Tap] Check Network Management Btn', async () => {
            // action
            await action.click(component.settingNetworkManageBtn)

            // assert
            await assert.checkElementDisplayed(component.networkManagementTitleText)

            // after
            await action.click(component.networkManagementCloseIconBtn)
        })

        it('[Tap] Check Custom Token Btn', async () => {
            // action
            await action.click(component.settingCustomTokenBtn)

            // assert
            await assert.checkElementDisplayed(component.customTokenTitleText)

            // after
            await action.click(component.customTokenBackBtn)
        })

        it('[Tap] Check Sessions Btn Tap', async () => {
            // action        
            await action.click(component.settingSessionsBtn)

            // assert
            await assert.checkText(component.sessionsTitleText, 'Sessions')

            // after
            await action.click(component.sessionsBackBtn)
        })

        afterAll(async () => {
            // remove apps
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })
})