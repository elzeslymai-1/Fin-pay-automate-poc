import { CustomTokenComponent } from '../component/customTokenComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import { CustomNetworkModel } from '../component/customNetworkComponent.js'
import { ImportWalletModel } from '../component/importWalletComponent.js'
import AllureReporter from '@wdio/allure-reporter'

const component = new CustomTokenComponent()
const action = new Action()
const assert = new Assertion()
const customNetworkModel = new CustomNetworkModel()
const importWalletModel = new ImportWalletModel()

describe('Setting Custom Token Page', () => {

    // Custom Token Page Test Scenario
    describe('', () => {
        beforeAll(async () => {
            // before
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app

            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await action.click(component.homeTabSettingBtn)     // go to setting page
            await action.click(component.settingCustomTokenBtn)     // go to custom page
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Custom Token Page Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check Back Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.customTokenBackBtn)
        })

        it('[Display] => Check Network Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.customTokenNetworkBtn)
        })

        it('[Display] => Check Search TextField Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.customTokenSearchTextField)
        })

        it('[Display] => Check Add Custom Token Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.customTokenAddCustomTokenBtn)
        })

        it('[Wording] Check Back Btn Wording', async () => {
            // assert
            await assert.checkText(component.customTokenBackBtn, '')
        })

        it('[Wording] => Check Title Wording', async () => {
            // assert
            await assert.checkText(component.customTokenTitleText, 'Custom token')
        })

        it('[Wording] => Check Search Placeholder Wording', async () => {
            // assert
            await assert.checkText(component.customTokenSearchTextField, 'Search...')
        })

        it('[Wording] => Check Token Header Wording', async () => {
            // assert
            await assert.checkText(component.customTokenTokenHeaderText, 'Token')
        })

        it('[Wording] => Check Custom Token Header Wording', async () => {
            // assert
            await assert.checkText(component.customTokenCustomTokenHeaderText, 'Custom Token')
        })

        it('[Wording] => Check Add Custom Token Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.customTokenAddCustomTokenBtn, 'Add Custom Token')
        })

        it('[Wording] => Check No Custom Token Wording', async () => {
            // action
            await action.click(component.customTokenNetworkBtn)     // open Network modal
            await customNetworkModel.addCustomNetwork(`${process.env.GOERLI_TEST_NET_URL}`)    // add Network
            await action.click(component.homeTabSettingBtn)    // go to setting page
            await action.click(component.settingCustomTokenBtn)     // go to custom token page

            // assert
            await assert.checkText(component.customTokenNoTokenText, 'No custom token')

            // after
            await action.click(component.customTokenNetworkBtn)     // open Network modal
            await action.click(component.networkBitkubBtn)     // select bitkub network
        })

        it('[Tap] => Check Back Btn Tap', async () => {
            // action
            await action.click(component.customTokenBackBtn)

            // assert
            await assert.checkText(component.settingTitleText, 'Setting')

            // after
            await action.click(component.settingCustomTokenBtn)
        })

        it('[Tap] => Check Network Btn Tap', async () => {
            // action
            await action.click(component.customTokenNetworkBtn)

            // assert
            await assert.checkText(component.networkTitleText, 'Select Network')

            // after
            await action.swipe('down')
        })

        it('[Tap] => Check Add Custom Token Btn Tap', async () => {
            // action
            await action.click(component.customTokenAddCustomTokenBtn)

            // assert
            await assert.checkText(component.addTokenTitleText, 'Custom token')

            // after (back to Custom Token)
            await action.click(component.addTokenBackBtn)
        })

        xit('[Tap] => Check Remove Btn Tap', async () => {
            // action
            await action.click(component.customTokenRemoveBtn)

            // assert
            await assert.checkElementNotDisplayed(component.customTokenWTokenBtn)

            // after (back to Add Token)
            await action.click(component.customTokenAddCustomTokenBtn)
        })

        it('[Functional] => Check Search TextField', async () => {
            //action        
            await action.enterText(component.customTokenSearchTextField, 'kub')

            // assert
            await assert.checkTextContain(component.customTokenKubTokenBtn, 'KUB')    // Check KUB Token still displayed
            await assert.checkElementNotDisplayed(component.customTokenWTokenBtn)    // Check W Token not displayed

            // after
            await action.clearText(component.customTokenSearchTextField)
        })

        it('[Function] => Check Change Network Btn Tap', async () => {
            // action
            await action.click(component.customTokenNetworkBtn)     // open Network modal
            await action.click(component.networkGoerliBtn)     // select goerli network

            // assert
            await assert.checkTextContain(component.customTokenGoerliToken, 'Goerli')
        })
    })

    // Add Custom Token Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.click(component.customTokenNetworkBtn)     // open Network modal
            await action.click(component.networkBitkubBtn)     // select bitkub network

            await action.click(component.customTokenAddCustomTokenBtn)      // go to add custom token page
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Add Custom Token Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check Back Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.addTokenBackBtn)
        })

        it('[Display] => Check Token address TextField Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.addTokenAddressTextField)
        })

        it('[Display] => Check Paste Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.addTokenPasteBtn)
        })

        it('[Display] => Check CheckBox Btn Displayed', async () => {
            // action
            await action.setClipboard(`${process.env.FST_TOKEN_ADDRESS}`)   // set address to clipboard
            await action.click(component.addTokenPasteBtn)
            await action.acceptAlert()

            // assert
            await assert.checkElementDisplayed(component.addTokenCheckboxBtn)
        })

        it('[Display] => Check Cancel Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.addTokenCancelBtn)
        })

        it('[Display] => Check Confirm Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.addTokenConfirmBtn)
        })

        it('[Display] => Check Confirm should be disable', async () => {
            // assert
            await assert.checkDisabled(component.addTokenConfirmBtn)
        })

        it('[Wording] => Check Back Btn Wording', async () => {
            // assert
            await assert.checkText(component.addTokenBackBtn, '')
        })

        it('[Wording] => Check Title Text', async () => {
            // assert
            await assert.checkText(component.addTokenTitleText, 'Custom token')
        })

        it('[Wording] => Check Token address Head Text', async () => {
            // assert
            await assert.checkText(component.addTokenAddressHeadText, 'Token address')
        })

        it('[Wording] => Check Paste Btn Text', async () => {
            // assert
            await assert.checkText(component.addTokenPasteBtn, '')
        })

        it('[Wording] => Check Token Name Wording', async () => {
            // assert
            await assert.checkText(component.addTokenFSTTokenNameText, 'fins token')
        })

        it('[Wording] => Check Token Symbol Wording', async () => {
            // assert
            await assert.checkText(component.addTokenFSTTokenSymbolText, 'FST')
        })

        it('[Wording] => Check Token address form Wording', async () => {
            // assert
            await assert.checkText(component.addTokenAddressText, 'Token Address')
        })

        it('[Wording] => Check Token symbol form Wording', async () => {
            // assert
            await assert.checkText(component.addTokenSymbolText, 'Token Symbol')
        })

        it('[Wording] => Check Token symbol Value Wording', async () => {
            // assert
            await assert.checkText(component.addTokenSymbolValueText, 'FST')
        })

        it('[Wording] => Check Token name form Wording', async () => {
            // assert
            await assert.checkText(component.addTokenNameText, 'Token Name')
        })

        it('[Wording] => Check Token name Value Wording', async () => {
            // assert
            await assert.checkText(component.addTokenNameValueText, 'fins token')
        })

        it('[Wording] => Check Token balance form Wording', async () => {
            // assert
            await assert.checkText(component.addTokenBalanceText, 'Token Balance')
        })

        it('[Wording] => Check Token balance Value Wording', async () => {
            // assert
            await assert.checkText(component.addTokenBalanceValueText, '0.0')
        })

        it('[Wording] => Check Warning Wording', async () => {
            // assert
            await assert.checkText(component.addTokenWarningText, 'By adding this as a custom token, you confirm that all further interactions with it are at your own risk.')
        })

        it('[Wording] => Check CheckBox Wording', async () => {
            // assert
            await assert.checkText(component.addTokenCheckboxBtn, 'I understand and agree')
        })

        it('[Wording] => Check Cancel Btn Wording', async () => {
            // assert
            await assert.checkText(component.addTokenCancelBtn, 'Cancel')
        })

        it('[Wording] => Check Confirm Btn Wording', async () => {
            // assert
            await assert.checkText(component.addTokenConfirmBtn, 'Confirm')
        })

        it('[Tap] => Check Back Btn Tap', async () => {
            // action
            await action.click(component.addTokenBackBtn)

            // assert
            await assert.checkText(component.customTokenTitleText, 'Custom token')

            // after (back to Add Token)
            await action.click(component.customTokenAddCustomTokenBtn)
        })

        it('[Tap] => Check Paste Btn Tap', async () => {
            // action
            await action.click(component.addTokenPasteBtn)

            // assert
            await assert.checkText(component.addTokenFSTTokenNameText, 'fins token')
        })

        it('[Tap] => Check CheckBox Btn Tap', async () => {
            // action
            await action.click(component.addTokenCheckboxBtn)

            // assert
            await assert.checkNotDisabled(component.addTokenConfirmBtn)
        })

        it('[Tap] => Check Cancel Btn Tap', async () => {
            // action
            await action.click(component.addTokenCancelBtn)

            // assert
            await assert.checkText(component.customTokenTitleText, 'Custom token')

            // after (back to Add Token)
            await action.click(component.customTokenAddCustomTokenBtn)
        })

        it('[Tap] => Check Confirm Btn Tap', async () => {
            // action
            await action.click(component.addTokenPasteBtn)
            await action.click(component.addTokenCheckboxBtn)
            await action.click(component.addTokenConfirmBtn)

            // assert
            await assert.checkElementDisplayed(component.customTokenFinTestToken)

            // after
            await action.click(component.customTokenAddCustomTokenBtn)
        })

        it('[Functional] => Check Add Custom Token Already Exist', async () => {
            // action
            await action.click(component.addTokenPasteBtn)

            // assert
            await assert.checkText(component.addTokenAlreadyExistText, 'Token already exist')

            // after
            await action.click(component.addTokenBackBtn)
        })

        it('[Search] => Check Add Custom Token no result', async () => {
            // action
            await action.click(component.customTokenAddCustomTokenBtn)
            await action.enterText(component.addTokenAddressTextField, '0x1234567890')
            await action.pause(10000)

            assert
            await assert.checkElementDisplayed(component.addTokenNoResultText)
        })

        afterAll(async () => {
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })
})