import { SendComponent } from '../component/sendComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import { ImportWalletModel } from '../component/importWalletComponent.js'
import { SendModel } from '../component/sendComponent.js'
import { CustomTokenModel } from '../component/customTokenComponent.js'
import AllureReporter from '@wdio/allure-reporter'

const action = new Action()
const assert = new Assertion()
const component = new SendComponent()
const importWalletModel = new ImportWalletModel()
const sendModel = new SendModel()
const customTokenModel = new CustomTokenModel()

describe('Send Page', () => {

    // Send Page Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app
            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await action.click(component.homeSendBtn)     // go to send page
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Send Page Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check Back Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.sendBackBtn)
        })

        it('[Display] => Check Select token Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.sendSelectTokenKUBBtn)
        })

        it('[Display] => Check To TextField Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.sendToTextField)
        })

        it('[Display] => Check Available Balance Text Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.sendAvailableBalanceText)
        })

        it('[Display] => Check Amount TextField Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.sendAmountTextField)
        })

        it('[Display] => Check Max Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.sendAmountMaxBtn)
        })

        it('[Display] => Check Next Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.sendNextBtn)
        })

        it('[Display] => Check Next Btn should be disable Displayed', async () => {
            // assert
            await assert.checkDisabled(component.sendNextBtn)
        })

        it('[Wording] => Check Back Btn Wording', async () => {
            // assert
            await assert.checkText(component.sendBackBtn, '')
        })

        it('[Wording] => Check Title Wording', async () => {
            // assert
            await assert.checkText(component.sendTitleText, 'Send')
        })

        it('[Wording] => Check Select Token Header Wording', async () => {
            // assert
            await assert.checkText(component.sendSelectTokenHeaderText, 'Select Token')
        })

        it('[Wording] => Check Select Token KUB Wording', async () => {
            // assert
            await assert.checkText(component.sendSelectTokenKUBBtn, 'KUB')
        })

        it('[Wording] => Check To Header Wording', async () => {
            // assert
            await assert.checkText(component.sendToHeaderText, 'To')
        })

        it('[Wording] => Check To PlaceHolder Wording', async () => {
            // assert
            await assert.checkText(component.sendToTextField, 'Receive address')
        })

        it('[Display] => Check Available Balance Text Wording', async () => {
            // assert
            await assert.checkText(component.sendAvailableBalanceText, 'Available: 0 KUB')
        })

        it('[Wording] => Check Amount Header Wording', async () => {
            // assert
            await assert.checkText(component.sendAmountHeaderText, 'Amount')
        })

        it('[Wording] => Check Amount PlaceHolder Wording', async () => {
            // assert
            await assert.checkText(component.sendAmountTextField, '0.00')
        })

        it('[Wording] => Check Max Btn Wording', async () => {
            // assert
            await assert.checkText(component.sendAmountMaxBtn, 'Max')
        })

        it('[Wording] => Check Next Btn Wording', async () => {
            // assert
            await assert.checkText(component.sendNextBtn, 'Next')
        })

        it('[Tap] => Check Tap Back Btn', async () => {
            // action
            await action.click(component.sendBackBtn)

            // assert
            await assert.checkElementDisplayed(component.homeSendBtn)

            // after (back to Send)
            await action.click(component.homeSendBtn)
        })

        it('[Tap] => Check Tap Select Token Btn', async () => {
            // action
            await action.click(component.sendSelectTokenKUBBtn)

            // assert
            await assert.checkElementDisplayed(component.selectTokenTitleText)

            // action (back to Send)
            await action.click(component.selectTokenBackBtn)
        })

        it('[Tap] => Check Tap Max Btn', async () => {
            // action
            await action.click(component.sendSelectTokenKUBBtn)
            await action.click(component.selectTokenWTKBtn)
            await action.click(component.sendAmountMaxBtn)

            // config for get balance
            const balanceConfig = {
                rpc: `${process.env.BITKUB_TEST_NET_RPC}`,
                tokenAddress: `${process.env.WTK_TOKEN_ADDRESS}`,
                walletAddress: `${process.env.RECEIVE_WALLET_ADDRESS}`
            };

            // assert for check balance with real balance
            await assert.checkTokenBalance(component.sendAmountValueTextField, balanceConfig)

            // after (clear text)
            await action.click(component.sendBackBtn)
            await action.click(component.homeSendBtn)
        })

        it('[Functional] => Check Send Token with Invalid Address', async () => {
            // action
            await action.enterText(component.sendToTextField, 'address')
            await action.click(component.sendAmountMaxBtn)
            await action.click(component.sendNextBtn)

            // assert
            await assert.checkText(component.sendToInvalidAddressText, 'Recipient address is invalid')

            // after
            await action.click(component.sendBackBtn)
            await action.click(component.homeSendBtn)
        })

        it('[Functional] => Check Send Token with Insufficient Gas', async () => {
            // action
            await action.click(component.sendSelectTokenKUBBtn)
            await action.click(component.selectTokenWTKBtn)

            await action.enterText(component.sendToTextField, `${process.env.RECEIVE_WALLET_ADDRESS}`)
            await action.click(component.sendAmountMaxBtn)
            await action.click(component.sendNextBtn)

            // assert
            await assert.checkElementDisplayed(component.insufficientGasTitleText)

            // after
            await action.click(component.insufficientGasOKBtn)
            await action.click(component.sendBackBtn)
            await action.click(component.homeSendBtn)
        })

        it('[Functional] => Check Send Token with Insufficient Balance', async () => {
            // action
            await action.enterText(component.sendToTextField, `${process.env.RECEIVE_WALLET_ADDRESS}`)
            await action.enterText(component.sendAmountTextField, '1')
            await action.click(component.sendNextBtn)

            // assert
            await assert.checkElementDisplayed(component.insufficientBalanceTitleText)

            // after (close error popup)
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })

        it('[Functional] => Check That All Fields are Filled in Correctly.', async () => {
            // action
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app
            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_WITH_BALANCE}`)   // import wallet
            await action.click(component.homeSendBtn)     // go to send page

            await action.enterText(component.sendToTextField, `${process.env.RECEIVE_WALLET_ADDRESS}`)
            await action.enterText(component.sendAmountTextField, '1')

            // assert
            await assert.checkNotDisabled(component.sendNextBtn)
        })

        it('[Tap] => Check Tap Next Btn', async () => {
            // action
            await action.click(component.sendNextBtn)

            // assert
            await assert.checkElementDisplayed(component.confirmSendTitleText)

            // after
            await action.click(component.confirmSendBackBtn)
        })

        xit('[Functional] => Send Token Success', async () => {
            // action
            await action.click(component.sendAmountMaxBtn)
            await sendModel.setSendDetails('0.1')

            await action.click(component.sendBackBtn)
            await sendModel.sendToken('FST', `${process.env.RECEIVE_WALLET_ADDRESS}`, '0.1')    // send token

            // back to send page for check balance
            await action.click(component.sendSuccessViewBtn)
            await action.click(component.homeTabHomeBtn)
            await action.click(component.homeSendBtn)
            await action.click(component.sendSelectTokenKUBBtn)
            await action.click('-ios class chain:**/XCUIElementTypeOther[`name == "F FST fins token $0  999,980.08699999 FST"`][2]')    // need to have test-id s
            await action.click(component.sendAmountMaxBtn)

            // assert
            const balanceConfig = {
                rpc: `${process.env.BITKUB_TEST_NET_RPC}`,
                tokenAddress: `${process.env.FST_TOKEN_ADDRESS}`,
                walletAddress: `${process.env.SEND_WALLET_ADDRESS}`
            };
            await sendModel.compareTokenAmount(balanceConfig)    // assert on model
        })

        afterAll(async () => {
            // remove apps
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })

    // Insufficient Balance Modal Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app
            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
            await customTokenModel.addToken('FST')  // Add FST Token to wallet

            await action.click(component.homeSendBtn)     // go to send page
            await action.click(component.sendSelectTokenKUBBtn)
            await action.click(component.selectTokenWTKBtn)
            await action.enterText(component.sendToTextField, `${process.env.RECEIVE_WALLET_ADDRESS}`)
            await action.enterText(component.sendAmountTextField, '1')
            await action.click(component.sendNextBtn)
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Insufficient Balance Modal Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check OK Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.insufficientBalanceOKBtn)
        })

        it('[Wording] => Check Modal Title Wording', async () => {
            // assert
            await assert.checkText(component.insufficientBalanceTitleText, 'Insufficient Balance')
        })

        it('[Wording] => Check Modal Description Wording', async () => {
            // assert
            await assert.checkText(component.insufficientBalanceWTKDescriptionText, 'You do not have enough WTK in this account')
        })

        it('[Wording] => Check OK Btn Wording', async () => {
            // assert
            await assert.checkText(component.insufficientBalanceOKBtn, 'OK')
        })

        it('[Tap] => Check Tap OK Btn', async () => {
            // action
            await action.click(component.insufficientBalanceOKBtn)

            // assert
            await assert.checkElementNotDisplayed(component.insufficientBalanceOKBtn)
        })

        it('[Functional] Check Modal Description Wording When Change Token', async () => {
            // action
            await action.click(component.sendSelectTokenWTKBtn)
            await action.click(component.selectTokenFSTBtn)
            await action.click(component.sendNextBtn)

            // assert
            await assert.checkText(component.insufficientBalanceFSTDescriptionText, 'You do not have enough FST in this account')

            // after
            await action.click(component.insufficientBalanceOKBtn)
        })
    })

    // Insufficient Gas limit Modal Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.click(component.sendSelectTokenFSTBtn)
            await action.click(component.selectTokenWTKBtn)
            await action.click(component.sendAmountMaxBtn)
            await action.click(component.sendNextBtn)
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Insufficient Gas limit Modal Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check OK Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.insufficientGasOKBtn)
        })

        it('[Wording] => Check Modal Title Wording', async () => {
            // assert
            await assert.checkText(component.insufficientGasTitleText, 'Transaction Error')
        })

        it('[Wording] => Check Modal Description Wording', async () => {
            // assert
            await assert.checkText(component.insufficientGasDescriptionText, 'Insufficient balance a gas limit for the transaction, please try again later.')
        })

        it('[Wording] => Check OK Btn Wording', async () => {
            // assert
            await assert.checkText(component.insufficientGasOKBtn, 'OK')
        })

        it('[Tap] => Check Tap OK Btn', async () => {
            // action
            await action.click(component.insufficientGasOKBtn)

            // assert
            await assert.checkElementNotDisplayed(component.insufficientGasOKBtn)
        })
    })

    // Select Token Page Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.click(component.sendSelectTokenWTKBtn)
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Select Token Page Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check Back Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.selectTokenBackBtn)
        })

        it('[Display] => Check Search TextField Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.selectTokenSearchTextField)
        })

        it('[Display] => Check KUB Token Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.selectTokenKUBBtn)
        })

        it('[Display] => Check WTK Token Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.selectTokenWTKBtn)
        })

        it('[Display] => Check FST Token Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.selectTokenFSTBtn)
        })

        it('[Wording] => Check Title Wording', async () => {
            // assert
            await assert.checkText(component.selectTokenTitleText, 'Select Token')
        })

        it('[Wording] => Check Search PlaceHolder Wording', async () => {
            // assert
            await assert.checkText(component.selectTokenSearchTextField, 'Search...')
        })

        it('[Wording] => Check KUB Token Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.selectTokenKUBBtn, 'KUB')
        })

        it('[Wording] => Check KUB Token Fullname Wording', async () => {
            // assert
            await assert.checkTextContain(component.selectTokenKUBBtn, 'KUB')
        })

        it('[Wording] => Check WTK Token Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.selectTokenWTKBtn, 'WTK')
        })

        it('[Wording] => Check WTK Token Fullname Wording', async () => {
            // assert
            await assert.checkTextContain(component.selectTokenWTKBtn, 'WToken')
        })

        it('[Wording] => Check FST Token Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.selectTokenFSTBtn, 'FST')
        })

        it('[Wording] => Check FST Token Fullname Wording', async () => {
            // assert
            await assert.checkTextContain(component.selectTokenFSTBtn, 'fins token')
        })

        it('[Wording] => Check Bottom Wording', async () => {
            // assert
            await assert.checkText(component.selectTokenBottomText, 'Didn’t see your token? Import')
        })

        it('[Tap] => Check Tap WTK Token Btn', async () => {
            // action
            await action.click(component.selectTokenWTKBtn)

            // assert
            await assert.checkElementDisplayed(component.sendSelectTokenWTKBtn)

            // after (back to Select Token)
            await action.click(component.sendSelectTokenWTKBtn)
        })

        it('[Tap] => Check Tap KUB Token Btn', async () => {
            // action
            await action.click(component.selectTokenKUBBtn)

            // assert
            await assert.checkElementDisplayed(component.sendSelectTokenKUBBtn)

            // after (back to Select Token)
            await action.click(component.sendSelectTokenKUBBtn)
        })

        it('[Tap] => Check Tap FST Token Btn', async () => {
            // action
            await action.click(component.selectTokenFSTBtn)

            // assert
            await assert.checkElementDisplayed(component.sendSelectTokenFSTBtn)

            // after (back to Select Token)
            await action.click(component.sendSelectTokenFSTBtn)
        })

        it('[Functional] => Check Search function', async () => {
            // action
            await action.enterText(component.selectTokenSearchTextField, 'kub')

            // assert
            await assert.checkElementDisplayed(component.selectTokenKUBBtn)
            await assert.checkElementNotDisplayed(component.selectTokenWTKBtn)

            // action
            await action.enterText(component.selectTokenSearchTextField, 'fst')

            // assert
            await assert.checkElementDisplayed(component.selectTokenFSTBtn)
            await assert.checkElementNotDisplayed(component.selectTokenWTKBtn)
            await assert.checkElementNotDisplayed(component.selectTokenKUBBtn)

            // after (back to Send)
            await action.clearText(component.selectTokenSearchTextField)
        })

        afterAll(async () => {
            // remove apps
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })

    // Confirm Send Page Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)     // install apps
            await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app
            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_WITH_BALANCE}`)   // import wallet

            await customTokenModel.addToken('FST')     // add token

            await action.click(component.homeSendBtn)     // go to send page
            await action.enterText(component.sendToTextField, `${process.env.RECEIVE_WALLET_ADDRESS}`)
            await action.enterText(component.sendAmountTextField, '0.00001')
            await action.click(component.sendNextBtn)
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Confirm Send Page Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check Back Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.confirmSendBackBtn)
        })

        it('[Display] => Check Cancel Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.confirmSendCancelBtn)
        })

        it('[Display] => Check Confirm Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.confirmSendConfirmBtn)
        })

        it('[Wording] => Check Title Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendTitleText, 'Confirm Send')
        })

        it('[Wording] => Check You Send Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendYouSendText, 'You send')
        })

        xit('[Wording] => Check Send Token Amount Value', async () => {
            // assert
            await assert.checkText(component.confirmSendAmount1KUBText, '')
        })

        it('[Wording] => Check From Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendFromText, 'From')
        })

        it('[Wording] => Check To Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendToText, 'To')
        })

        it('[Wording] => Check Coin Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendCoinText, 'Coin')
        })

        xit('[Wording] => Check Sent Token Name Value', async () => {
            // assert
            await assert.checkText(component.confirmSendCoinKUBValueText, '')
        })

        it('[Wording] => Check Transfer amount Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendAmountText, 'Transfer amount')
        })

        xit('[Wording] => Check Transfer amount Value', async () => {
            // assert
            await assert.checkText(component.confirmSendAmountValue1KUBText, '')
        })

        it('[Wording] => Check Network Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendNetworkText, 'Network')
        })

        xit('[Wording] => Check Network Value', async () => {
            // assert
            await assert.checkText(component.confirmSendNetworkBitkubValueText, '')
        })

        it('[Wording] => Check Network fee Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendFeeText, 'Network fee')
        })

        xit('[Wording] => Check Network fee Value', async () => {
            // assert
            await assert.checkTextContain(component.confirmSendFeeValueText, '')
        })

        it('[Wording] => Check Warning Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendWarningText, 'Ensure that the address is correct and on the same network. Transactions cannot be cancelled.')
        })

        it('[Wording] => Check Cancel Btn Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendCancelBtn, 'Cancel')
        })

        it('[Wording] => Check Confirm Btn Wording', async () => {
            // assert
            await assert.checkText(component.confirmSendConfirmBtn, 'Confirm')
        })

        it('[Tap] => Check Tap Back Btn', async () => {
            // action
            await action.click(component.confirmSendBackBtn)

            // assert
            await assert.checkElementDisplayed(component.sendNextBtn)

            // after (back to Confirm Send)
            await action.click(component.sendNextBtn)
        })

        it('[Tap] => Check Cancel Btn Tap', async () => {
            // action
            await action.click(component.confirmSendCancelBtn)

            // assert
            await assert.checkElementDisplayed(component.sendNextBtn)

            // after (back to Confirm Send)
            await action.click(component.sendNextBtn)
            await action.pause(2000)
        })

        it('[Tap] => Check Confirm Btn Tap', async () => {
            // action
            await action.click(component.confirmSendConfirmBtn)

            // assert
            await assert.checkElementDisplayed(component.pendingText)
            await action.pause(7000)
            await assert.checkElementDisplayed(component.sendSuccessTitleText)
        })
    })

    // Send Success Page Test Scenario
    describe('', () => {
        beforeEach(async () => {
            AllureReporter.addSubSuite('Send Success Page Test Scenario')   // add sub suite for allure report
        })

        it('[Display] => Check View Transaction Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.sendSuccessViewBtn)
        })

        it('[Wording] => Check Title Wording', async () => {
            // assert
            await assert.checkText(component.sendSuccessTitleText, 'We are sending your token')
        })

        it('[Wording] => Check Description Wording', async () => {
            // assert
            await assert.checkText(component.sendSuccessDescriptionText, 'It may take a few minutes for the token to send and appear in your wallet.')
        })

        it('[Wording] => Check View Transaction Btn Wording', async () => {
            // assert
            await assert.checkText(component.sendSuccessViewBtn, 'View Transaction')
        })

        it('[Tap] => Check Tap View Transaction Btn', async () => {
            // action
            await action.click(component.sendSuccessViewBtn)

            // assert
            await assert.checkElementDisplayed(component.historyTitleText)
        })

        afterAll(async () => {
            // remove apps
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })
})