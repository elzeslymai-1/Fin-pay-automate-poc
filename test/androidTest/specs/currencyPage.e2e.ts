import { currencyComponent } from '../component/currencyComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new currencyComponent()
const action = new Action()
const assert = new Assertion()

describe('Currency Page Test Senario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)

        await action.click(component.successContinueBtn)

        await action.click(component.homeSettingBtn)

        await action.click(component.settingCurrencyBtn)
    })

    it('[Display] Check Currency Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.currencyBackBtn)
    })

    it('[Display] Check Currency Search TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.currencySearchTextField)
    })

    it('[Wording] Check Currency Back Btn text', async () => {
        // assert
        await assert.checkText(component.currencyBackBtn, '')
    })

    it('[Wording] Check Currency Title text', async () => {
        // assert
        await assert.checkText(component.currencyTitleText, 'Currency')
    })

    it('[Tap] Check Currency Back Btn tap', async () => {
        // action
        await action.click(component.currencyBackBtn)

        // assert
        await assert.checkElementDisplayed(component.settingTitleText)

        // after (back to Currency)
        await action.click(component.settingCurrencyBtn)
    })

    it('[Tap] Check Change Currency Btn tap', async () => {
        // action
        await action.click(component.currencyJPY)

        await action.click(component.currencyBackBtn)

        // assert
        await assert.checkText(component.settingCurrencyJPYText, 'JPY')

        // action
        await action.click(component.homeBtn)

        // assert
        await assert.checkText(component.homeWalletJPYBalance, '¥0')
        await assert.checkText(component.homeKUBTokenJPYBalance, '¥0')
        await assert.checkText(component.homeWTKTokenJPYBalance, '¥0')

        // action
        await action.click(component.homeSendBtn)

        await action.click(component.sendSelectTokenKUBBtn)

        // assert
        await assert.checkText(component.selectTokenKUBBalance, '¥0')
        await assert.checkText(component.selectTokenWTKBalance, '¥0')

        // action (back to Home)
        await action.click(component.selectTokenBackBtn)

        await action.click(component.sendBackBtn)

        // action
        await action.click(component.homeReceiveBtn)

        // assert
        await assert.checkText(component.receiveTokenKUBBalance, '¥0')
        await assert.checkText(component.receiveTokenWTKBalance, '¥0')

        // after (back to Currency)
        await action.click(component.receiveBackBtn)

        await action.click(component.homeSettingBtn)

        await action.click(component.settingCurrencyBtn)
    })

    it('[Search] Check Search Btn', async () => {
        // action
        await action.enterText(component.currencySearchTextField, 'Japanese')

        // assert
        await assert.checkText(component.currencyJPY, 'JPY - Japanese Yen')

        // action (wait for not exist)
        await action.waitForExist(component.currencyEUR, 2000, true)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})