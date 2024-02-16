import { CurrencyComponent } from '../component/currencyComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import { ImportWalletModel } from '../component/importWalletComponent.js'
import AllureReporter from '@wdio/allure-reporter'

const action = new Action()
const assert = new Assertion()
const component = new CurrencyComponent()
const importWalletModel = new ImportWalletModel()

describe('Setting Currency Page', () => {

    // Currency Page Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app

            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await action.click(component.homeTabSettingBtn)     // go to setting page
            await action.click(component.settingCurrencyUSDBtn)     // go to currency page
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Currency Page Test Scenario')   // add sub suite for allure report
        })

        it('[Display] Check Back Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyBackBtn)
        })

        it('[Display] Check Search TextField Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencySearchTextField)
        })

        it('[Display] Check USD Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyUSDBtn)
        })

        it('[Display] Check EUR Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyEURBtn)
        })

        it('[Display] Check JPY Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyJPYBtn)
        })

        it('[Display] Check CNY Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyCNYBtn)
        })

        it('[Display] Check THB Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyTHBBtn)
        })

        it('[Display] Check GBP Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyGBPBtn)
        })

        it('[Display] Check GBP Btn Should be Disable', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyGBPBtn)
        })

        it('[Display] Check RUB Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyRUBBtn)
        })

        it('[Display] Check RUB Btn Should be Disable', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyRUBBtn)
        })

        it('[Display] Check CAD Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyCADBtn)
        })

        it('[Display] Check CAD Btn Should be Disable', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyCADBtn)
        })

        it('[Display] Check TRY Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyTRYBtn)
        })

        it('[Display] Check TRY Btn Should be Disable', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyTRYBtn)
        })

        it('[Display] Check BRL Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyBRLBtn)
        })

        it('[Display] Check BRL Btn Should be Disable', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyBRLBtn)
        })

        it('[Display] Check KHR Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyKHRBtn)
        })

        it('[Display] Check KHR Btn Should be Disable', async () => {
            // assert
            await assert.checkElementDisplayed(component.currencyKHRBtn)
        })

        it('[Wording] Check Currency Title text', async () => {
            // assert
            await assert.checkText(component.currencyTitleText, 'Currency')
        })

        it('[Wording] Check Currency Back Btn text', async () => {
            // assert
            await assert.checkText(component.currencyBackBtn, '')
        })

        it('[Wording] Check Currency Search place holder text', async () => {
            // assert
            await assert.checkText(component.currencySearchTextField, 'Search...')
        })

        it('[Wording] Check USD Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyUSDBtn, 'USD - United States Dollar')
        })

        it('[Wording] Check EUR Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyEURBtn, 'EUR - Euro')
        })

        it('[Wording] Check JPY Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyJPYBtn, 'JPY - Japanese Yen')
        })

        it('[Wording] Check CNY Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyCNYBtn, 'CNY - Chinese Yuan')
        })

        it('[Wording] Check THB Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyTHBBtn, 'THB - Thai Baht')
        })

        it('[Wording] Check GBP Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyGBPBtn, 'GBP - Pound Sterling')
        })

        it('[Wording] Check RUB Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyRUBBtn, 'RUB - Russian Ruble')
        })

        it('[Wording] Check CAD Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyCADBtn, 'CAD - Canadian Dollar')
        })

        it('[Wording] Check TRY Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyTRYBtn, 'TRY - Turkish Lira')
        })

        it('[Wording] Check BRL Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyBRLBtn, 'BRL - Brazilian Real')
        })

        it('[Wording] Check KHR Btn Wording', async () => {
            // assert
            await assert.checkText(component.currencyKHRBtn, 'KHR - Riel')
        })

        it('[Tap] Check Currency Back Btn tap', async () => {
            // action
            await action.click(component.currencyBackBtn)

            // assert
            await assert.checkElementDisplayed(component.settingTitleText)

            // after (back to Currency)
            await action.click(component.settingCurrencyUSDBtn)
        })

        it('[Functional] Check Search not found', async () => {
            // action
            await action.enterText(component.currencySearchTextField, 'Martians')

            // assert
            await assert.checkElementDisplayed(component.currencySearchNotfoundText)

            // after (clear text)
            await action.clearText(component.currencySearchTextField)
        })

        it('[Functional] Check Search Btn', async () => {
            // action
            await action.enterText(component.currencySearchTextField, 'Japanese')

            // assert
            await assert.checkTextContain(component.currencyJPYBtn, 'JPY - Japanese Yen')
            await assert.checkElementNotDisplayed(component.currencyUSDBtn)

            // after (clear text)
            await action.clearText(component.currencySearchTextField)
        })

        it('[Functional] Check Change Currency Btn tap', async () => {
            // action
            await action.click(component.currencyJPYBtn)

            await action.click(component.currencyBackBtn)

            // assert
            await assert.checkTextContain(component.settingCurrencyJPYBtn, 'JPY')

            // action
            await action.click(component.homeTabHomeBtn)

            // assert
            await assert.checkText(component.homeBalanceText, '¥0')
            await assert.checkText(component.homeTokenCardKubValueText, '¥0')
            await assert.checkText(component.homeTokenCardWtkValueText, '¥0')

            // action
            await action.click(component.homeSendBtn)

            await action.click(component.sendSelectTokenBtn)

            // assert
            await assert.checkTextContain(component.sendSelectTokenKUBValueText, '¥0')
            await assert.checkTextContain(component.sendSelectTokenWTKValueText, '¥0')

            // action (back to Home)
            await action.click(component.sendSelectTokenBackBtn)

            await action.click(component.sendBackBtn)

            // action
            await action.click(component.homeReceiveBtn)

            // assert
            await assert.checkTextContain(component.receiveSelectTokenKUBValueText, '¥0')
            await assert.checkTextContain(component.receiveSelectTokenWTKValueText, '¥0')

            // after (back to Currency)
            await action.click(component.receiveBackBtn)

            await action.click(component.homeTabSettingBtn)

            await action.click(component.settingCurrencyJPYBtn)
        })

        afterAll(async () => {
            // remove apps
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })
})