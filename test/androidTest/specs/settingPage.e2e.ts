import { expect } from '@wdio/globals'
import { settingComponent } from '../component/settingComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new settingComponent()
const action = new Action()
const assert = new Assertion()

describe('Setting Page Test Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.waitForDisplayed(component.homeSettingBtn)

        await action.click(component.homeSettingBtn)

        await action.waitForDisplayed(component.settingTitleText)
        await assert.checkText(component.settingTitleText, 'Setting')
    })

    // === Check Setting Page ===
    it('[Wording] Check Setting Title Text',async () => {
        await action.waitForDisplayed(component.settingTitleText)
        await assert.checkText(component.settingTitleText, 'Setting')
    })
    it('[Display] Check Currency Btn',async () => {
        await action.waitForDisplayed(component.settingCurrencyBtn)
        await assert.checkElemenDisplayed(component.settingCurrencyBtn)
    })
    it('[Display] Check Network Management Btn',async () => {
        await action.waitForDisplayed(component.settingNetworkManageBtn)
        await assert.checkElemenDisplayed(component.settingNetworkManageBtn)
    })
    it('[Display] Check Custom Token Btn',async () => {
        await action.waitForDisplayed(component.settingCustomTokenBtn)
        await assert.checkElemenDisplayed(component.settingCustomTokenBtn)
    })
    it('[Display] Check Sessions Btn',async () => {
        await action.waitForDisplayed(component.settingSessionsBtn)
        await assert.checkElemenDisplayed(component.settingSessionsBtn)
    })
    it('[Tap] Check Currency Btn Tap',async () => {
        await action.waitForDisplayed(component.settingCurrencyBtn)
        
        await action.click(component.settingCurrencyBtn)

        await action.waitForDisplayed(component.currencyTitleText)
        await assert.checkText(component.currencyTitleText, 'Currency')

        await action.click(component.currencyBackBtn)
    })
    it('[Tap] Check Network Management Btn',async () => {
        await action.waitForDisplayed(component.settingNetworkManageBtn)
        
        await action.click(component.settingNetworkManageBtn)

        await action.waitForDisplayed(component.networkmanagementTitleText)
        await assert.checkText(component.networkmanagementTitleText, 'Add Network')

        await action.click(component.networkmanagementCloseIconBtn)
    })
    it('[Tap] Check Custom Token Btn',async () => {
        await action.waitForDisplayed(component.settingCustomTokenBtn)
        
        await action.click(component.settingCustomTokenBtn)

        await action.waitForDisplayed(component.customtokenTitleText)
        await assert.checkText(component.customtokenTitleText, 'Custom token')

        await action.click(component.customtokenBackBtn)
    })
    it('[Tap] Check Sessions Btn Tap',async () => {
        await action.waitForDisplayed(component.settingSessionsBtn)
        
        await action.click(component.settingSessionsBtn)

        await action.waitForDisplayed(component.sessionsTitleText)
        await assert.checkText(component.sessionsTitleText, 'Sessions')

        await action.click(component.sessionsBackBtn)
    })

    // === Check Currency Page ===
    it('[Tap] Check Search Btn',async () => {
        await action.waitForDisplayed(component.settingCurrencyBtn)

        await action.click(component.settingCurrencyBtn)

        await action.waitForDisplayed(component.currencyTitleText)
        await assert.checkText(component.currencyTitleText, 'Currency')

        await action.waitForDisplayed(component.currencySearchTextField)

        await action.enterText(component.currencySearchTextField, 'Japanese')

        await action.waitForDisplayed(component.currencyJPY)
        await assert.checkText(component.currencyJPY, 'JPY - Japanese Yen')

        await action.waitForExist(component.currencyEUR, 2000, true)

        await action.click(component.currencyBackBtn)
    })

    // === Check Network Management Page ===
    it('[Tap] Check Network Management Btn',async () => {
        await action.waitForDisplayed(component.settingNetworkManageBtn)

        await action.click(component.settingNetworkManageBtn)

        await action.waitForDisplayed(component.networkmanagementTitleText)
        await assert.checkText(component.networkmanagementTitleText, 'Add Network')

        await action.waitForDisplayed(component.networkmanagementCustomTab)
        await assert.checkText(component.networkmanagementCustomTab, 'CUSTOM NETWORK')

        await action.waitForDisplayed(component.networkmanagementPopularTab)
        await assert.checkText(component.networkmanagementPopularTab, 'POPULAR')

        await action.click(component.networkmanagementCustomTab)

        await action.waitForDisplayed(component.networkmanagementAddcustomnetBtn)
    })
    it('[Tap] Check Add Custom Network Btn',async () => {
        await action.waitForDisplayed(component.networkmanagementAddcustomnetBtn)

        await action.click(component.networkmanagementAddcustomnetBtn)

        await action.waitForDisplayed(component.customnetTitleText)
        await assert.checkText(component.customnetTitleText, 'Custom Network')
    })
    it('[Display] Check Error Message Text Field',async () => {
        await action.waitForDisplayed(component.customnetNetworkNameTextField)

        await action.click(component.customnetNetworkNameTextField)

        // Press 'Done' on android keyboard
        await action.Tap(1335, 2831)

        await action.waitForDisplayed(component.customnetNetworkNameRequired)
        await assert.checkText(component.customnetNetworkNameRequired, 'Network Name is required')

        await action.waitForDisplayed(component.customnetSymbolTextField)

        await action.click(component.customnetSymbolTextField)

        // Press 'Done' on android keyboard
        await action.Tap(1335, 2831)

        await action.waitForDisplayed(component.customnetSymbolRequired)
        await assert.checkText(component.customnetSymbolRequired, 'Symbol is required')
    })
    it('[Tap] Check Add Custom Network Success',async () => {
        await action.waitForDisplayed(component.customnetNetworkUrlTextField)

        await action.enterText(component.customnetNetworkUrlTextField, `${process.env.TEST_URL}`)

        await action.waitForDisplayed(component.customnetNetworkNameTextField)
        await assert.checkText(component.customnetNetworkNameTextField, 'goerli')

        await action.click(component.customnetConfirmBtn)

        await action.waitForDisplayed(component.addnetsuccessSwitchgoerliBtn)

        await action.click(component.addnetsuccessSwitchgoerliBtn)

        await action.waitForDisplayed(component.homeBtn)

        await action.waitForDisplayed(component.homeGoerlichain)
        await assert.checkText(component.homeGoerlichain, 'goerli')

        // Go back to Setting page
        await action.click(component.homeSettingBtn)
    })

    // === Check Custom Token Page ===
    it('[Tap] Check Custom Token Btn',async () => {
        await action.waitForDisplayed(component.settingCustomTokenBtn)

        await action.click(component.settingCustomTokenBtn)

        await action.waitForDisplayed(component.customtokenTitleText)
        await assert.checkText(component.customtokenTitleText, 'Custom token')

        await action.waitForDisplayed(component.customtokenBackBtn)
        await assert.checkElemenDisplayed(component.customtokenBackBtn)
    })
    it('[Tap] Check Custom Token Network Btn',async () => {
        await action.waitForDisplayed(component.customtokenTitleText)
        await assert.checkText(component.customtokenTitleText, 'Custom token')

        // Click network icon
        await action.Tap(1313, 241)

        await action.waitForDisplayed(component.customtokenNetworkTitleText)
        await assert.checkText(component.customtokenNetworkTitleText, 'Select Network')

        await action.waitForDisplayed(component.customtokenNetworkBitkubChain)

        await action.click(component.customtokenNetworkBitkubChain)

        await action.waitForDisplayed(component.customtokenKubToken)
        await assert.checkElemenDisplayed(component.customtokenKubToken)
    })
    it('[Tap] Check Custom Token Search Btn',async () => {
        await action.waitForDisplayed(component.customtokenSearchTextField)
        
        await action.enterText(component.customtokenSearchTextField, 'kub')

        await action.waitForDisplayed(component.customtokenKubToken)
        await assert.checkText(component.customtokenKubToken, 'KUB')

        await action.waitForExist(component.customtokenWToken, 2000, true)

        await action.clearText(component.customtokenSearchTextFieldKub)
    })
    it('[Tap] Check Add Custom Token Btn',async () => {
        // Click network icon
        await action.Tap(1313, 241)

        await action.waitForDisplayed(component.customtokenNetworkGoerliChain)

        await action.click(component.customtokenNetworkGoerliChain)

        await action.waitForDisplayed(component.customtokenAddcustomtokenBtn)
        await assert.checkText(component.customtokenAddcustomtokenBtn, 'Add Custom Token')
        
        await action.click(component.customtokenAddcustomtokenBtn)

        await action.waitForDisplayed(component.customtokenTokenAddressTextField)

        await action.enterText(component.customtokenTokenAddressTextField, `${process.env.TEST_ADDTOKEN}`)

        await action.waitForDisplayed(component.customtokenAddFintoken)
        await assert.checkText(component.customtokenAddFintoken, 'FinTestToken')

        await action.click(component.customtokenCheckbox)

        await action.waitForDisplayed(component.customtokenConfirmBtn)

        await action.click(component.customtokenConfirmBtn)

        await action.waitForDisplayed(component.customtokenFinToken)
        await assert.checkElemenDisplayed(component.customtokenFinToken)
    })
    it('[Tap] Check Remove Custom Token Btn',async () => {
        await action.waitForDisplayed(component.customtokenRemoveBtn)

        await action.click(component.customtokenRemoveBtn)

        await action.waitForExist(component.customtokenFinToken, 2000, true)

        await action.click(component.customtokenBackBtn)
    })

    // === Check Network Management Page (Remove) ===
    it('[Tap] Check Remove Custom Network Btn',async () => {
        await action.waitForDisplayed(component.settingNetworkManageBtn)
        
        await action.click(component.settingNetworkManageBtn)

        await action.waitForDisplayed(component.networkmanagementCustomTab)

        await action.click(component.networkmanagementCustomTab)

        await action.waitForDisplayed(component.networkmanagementRemoveCustomnetBtn)
        await assert.checkElemenDisplayed(component.networkmanagementRemoveCustomnetBtn)

        await action.click(component.networkmanagementRemoveCustomnetBtn)

        await action.waitForDisplayed(component.confirmremoveBtn)
        await assert.checkText(component.confirmremoveBtn, 'Remove')

        await action.click(component.confirmremoveBtn)

        await action.waitForDisplayed(component.networkmanagementCloseIconBtn)

        await action.click(component.networkmanagementCloseIconBtn)
    })
})