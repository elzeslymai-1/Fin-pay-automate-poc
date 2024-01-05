import { expect } from '@wdio/globals'
import { currencyPageComponent } from '../component/currencyPageComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new currencyPageComponent()
const action = new Action()
const assert = new Assertion()

describe('Currency Page Test Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.waitForDisplayed(component.homeSettingBtn)

        await action.click(component.homeSettingBtn)

        await action.waitForDisplayed(component.settingTitleText)
        await assert.checkText(component.settingTitleText, 'Setting')
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

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })
})