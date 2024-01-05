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

    // // === Check Custom Token Page ===
    // it('[Tap] Check Custom Token Btn',async () => {
    //     await action.waitForDisplayed(component.settingCustomTokenBtn)

    //     await action.click(component.settingCustomTokenBtn)

    //     await action.waitForDisplayed(component.customtokenTitleText)
    //     await assert.checkText(component.customtokenTitleText, 'Custom token')

    //     await action.waitForDisplayed(component.customtokenBackBtn)
    //     await assert.checkElemenDisplayed(component.customtokenBackBtn)
    // })
    // it('[Tap] Check Custom Token Network Btn',async () => {
    //     await action.waitForDisplayed(component.customtokenTitleText)
    //     await assert.checkText(component.customtokenTitleText, 'Custom token')

    //     // Click network icon
    //     await action.Tap(1313, 241)

    //     await action.waitForDisplayed(component.customtokenNetworkTitleText)
    //     await assert.checkText(component.customtokenNetworkTitleText, 'Select Network')

    //     await action.waitForDisplayed(component.customtokenNetworkBitkubChain)

    //     await action.click(component.customtokenNetworkBitkubChain)

    //     await action.waitForDisplayed(component.customtokenKubToken)
    //     await assert.checkElemenDisplayed(component.customtokenKubToken)
    // })
    // it('[Tap] Check Custom Token Search Btn',async () => {
    //     await action.waitForDisplayed(component.customtokenSearchTextField)
        
    //     await action.enterText(component.customtokenSearchTextField, 'kub')

    //     await action.waitForDisplayed(component.customtokenKubToken)
    //     await assert.checkText(component.customtokenKubToken, 'KUB')

    //     await action.waitForExist(component.customtokenWToken, 2000, true)

    //     await action.clearText(component.customtokenSearchTextFieldKub)
    // })
    // it('[Tap] Check Add Custom Token Btn',async () => {
    //     // Click network icon
    //     await action.Tap(1313, 241)

    //     await action.waitForDisplayed(component.customtokenNetworkGoerliChain)

    //     await action.click(component.customtokenNetworkGoerliChain)

    //     await action.waitForDisplayed(component.customtokenAddcustomtokenBtn)
    //     await assert.checkText(component.customtokenAddcustomtokenBtn, 'Add Custom Token')
        
    //     await action.click(component.customtokenAddcustomtokenBtn)

    //     await action.waitForDisplayed(component.customtokenTokenAddressTextField)

    //     await action.enterText(component.customtokenTokenAddressTextField, `${process.env.TEST_ADDTOKEN}`)

    //     await action.waitForDisplayed(component.customtokenAddFintoken)
    //     await assert.checkText(component.customtokenAddFintoken, 'FinTestToken')

    //     await action.click(component.customtokenCheckbox)

    //     await action.waitForDisplayed(component.customtokenConfirmBtn)

    //     await action.click(component.customtokenConfirmBtn)

    //     await action.waitForDisplayed(component.customtokenFinToken)
    //     await assert.checkElemenDisplayed(component.customtokenFinToken)
    // })
    // it('[Tap] Check Remove Custom Token Btn',async () => {
    //     await action.waitForDisplayed(component.customtokenRemoveBtn)

    //     await action.click(component.customtokenRemoveBtn)

    //     await action.waitForExist(component.customtokenFinToken, 2000, true)

    //     await action.click(component.customtokenBackBtn)
    // })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})