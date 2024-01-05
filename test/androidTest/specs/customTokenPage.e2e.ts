import { expect } from '@wdio/globals'
import { customTokenComponent } from '../component/customTokenComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new customTokenComponent()
const action = new Action()
const assert = new Assertion()

describe('Custom Token Page Test Senario', () => {

    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.waitForDisplayed(component.homeSettingBtn)

        await action.click(component.homeSettingBtn)

        await action.waitForDisplayed(component.settingTitleText)
        await assert.checkText(component.settingTitleText, 'Setting')
    })

    // === Check Custom Token Page ===
    it('[Tap] Check Custom Token Btn',async () => {
        await action.waitForDisplayed(component.settingCustomTokenBtn)

        await action.click(component.settingCustomTokenBtn)

        await action.waitForDisplayed(component.customtokenTitleText)
        await assert.checkText(component.customtokenTitleText, 'Custom token')

        await action.waitForDisplayed(component.customtokenBackBtn)
        await assert.checkElementDisplayed(component.customtokenBackBtn)
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
        await assert.checkElementDisplayed(component.customtokenKubToken)
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
        await assert.checkElementDisplayed(component.customtokenFinToken)
    })
    it('[Tap] Check Remove Custom Token Btn',async () => {
        await action.waitForDisplayed(component.customtokenRemoveBtn)

        await action.click(component.customtokenRemoveBtn)

        await action.waitForExist(component.customtokenFinToken, 2000, true)

        await action.click(component.customtokenBackBtn)
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})