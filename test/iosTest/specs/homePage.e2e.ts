import { HomeComponent } from '../component/homeComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import { ImportWalletModel } from '../component/importWalletComponent.js'
import AllureReporter from '@wdio/allure-reporter'

const action = new Action()
const assert = new Assertion()
const component = new HomeComponent()
const importWalletModel = new ImportWalletModel()

describe('Home Page', () => {

    // Home Menu Bar Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.installApps(`${process.env.PATH_IOS_APP}`)
            await action.launchApps(`${process.env.BUNDLE_ID}`)

            await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Home Menu Bar Test Scenario')   // add sub suite for allure report
        })

        it('[Display] Check Home Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeTabHomeBtn)
        })

        it('[Display] Check History Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeTabHistoryBtn)
        })

        it('[Display] Check DApps Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeTabDappBtn)
        })

        it('[Display] Check DApps Btn should be Disabled', async () => {
            // assert
            await assert.checkDisabled(component.homeTabDappBtn)
        })

        it('[Display] Check Setting Btn', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeTabSettingBtn)
        })

        it('[Wording] Check Menu Home Btn Wording', async () => {
            // action
            await action.click(component.homeTabHistoryBtn)

            // assert
            await assert.checkTextContain(component.homeTabHomeBtn, 'Home')
        })

        it('[Wording] Check Menu History Btn Wording', async () => {
            // action
            await action.click(component.homeTabHomeBtn)

            // assert
            await assert.checkTextContain(component.homeTabHistoryBtn, 'History')
        })

        it('[Wording] Check Menu DApps Btn', async () => {
            // assert
            await assert.checkTextContain(component.homeTabDappBtn, 'DApps')
        })

        it('[Wording] Check Menu Setting Btn', async () => {
            // assert
            await assert.checkTextContain(component.homeTabSettingBtn, 'Setting')
        })

        it('[Tap] Check Menu History Btn Tap', async () => {
            // action
            await action.click(component.homeTabHistoryBtn)

            // assert
            await assert.checkElementDisplayed(component.historyTitleText)
        })

        xit('[Tap] Check Menu DApps Btn Tap', async () => {
            // action
            await action.click(component.homeTabDappBtn)

            // assert
            await assert.checkElementDisplayed(component.dappsTitleText)
        })

        it('[Tap] Check Menu Setting Btn Tap', async () => {
            // action
            await action.click(component.homeTabSettingBtn)

            // assert
            await assert.checkElementDisplayed(component.settingTitleText)
        })

        it('[Tap] Check Menu Home Btn Tap', async () => {
            // action
            await action.click(component.homeTabHomeBtn)

            // assert
            await assert.checkElementDisplayed(component.homeWalletIconBtn)
        })
    })

    // Home Page Test Scenario
    describe('', () => {
        beforeEach(async () => {
            AllureReporter.addSubSuite('Home Page Test Scenario')   // add sub suite for allure report
        })

        it('[Display] Check Wallet Icon Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeWalletIconBtn)
        })

        it('[Display] Check Network Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeNetworkBtn)
        })

        it('[Display] Check Notification Btn Displayed', async () => {
            // assert (under development feature)
            await assert.checkElementDisplayed(component.homeNotificationIconBtn)
        })

        xit('[Display] Check Notification Btn should be Disable', async () => {
            // assert
            await assert.checkDisabled(component.homeNotificationIconBtn)
        })

        it('[Display] Check Copy Address Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeCopyAddressBtn)
        })

        it('[Display] Check Balance Text Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeBalanceText)
        })

        it('[Display] Check Send Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeSendBtn)
        })

        it('[Display] Check Receive Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeReceiveBtn)
        })

        it('[Display] Check Scan Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeScanBtn)
        })

        it('[Display] Check Buy Btn Displayed', async () => {
            // assert (under development feature)
            await assert.checkElementDisplayed(component.homeBuyBtn)
        })

        it('[Display] Check Buy Btn should be Disable', async () => {
            // assert
            await assert.checkDisabled(component.homeBuyBtn)
        })

        it('[Display] Check Search TextField Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.homeSearchTextField)
        })

        it('[Display] Check KUB Symbol Text Displayed', async () => {
            // assert (Test net chain token)
            await assert.checkElementDisplayed(component.homeTokenCardKubSymbolText)
        })

        it('[Display] Check KUB Name Text Displayed', async () => {
            // assert (Test net chain token)
            await assert.checkElementDisplayed(component.homeTokenCardKubNameText)
        })

        it('[Display] Check WTK Symbol Text Displayed', async () => {
            // assert (Test net chain token)
            await assert.checkElementDisplayed(component.homeTokenCardWtkSymbolText)
        })

        it('[Display] Check WTK Name Text Displayed', async () => {
            // assert (Test net chain token)
            await assert.checkElementDisplayed(component.homeTokenCardWtkNameText)
        })

        it('[Wording] Check Wallet Icon Btn Wording', async () => {
            // assert
            await assert.checkText(component.homeWalletIconBtn, '')
        })

        it('[Wording] Check Network Btn Text Wording', async () => {
            // assert
            await assert.checkText(component.homeNetworkBtnText, 'Bitkub Chain Testnet')
        })

        it('[Wording] Check Notification Btn Text Wording', async () => {
            // assert
            await assert.checkText(component.homeNotificationIconBtn, '')
        })

        it('[Wording] Check Copy Address Btn Text Wording', async () => {
            // assert
            await assert.checkText(component.homeCopyAddressBtn, '')
        })

        it('[Wording] Check Balance Text Wording Wording', async () => {
            // assert
            await assert.checkText(component.homeBalanceText, '$0')
        })

        it('[Wording] Check Send Btn Text Wording', async () => {
            // assert
            await assert.checkTextContain(component.homeSendBtn, 'Send')
        })

        it('[Wording] Check Receive Btn Text Wording', async () => {
            // assert
            await assert.checkTextContain(component.homeReceiveBtn, 'Receive')
        })

        it('[Wording] Check Scan Btn Text Wording', async () => {
            // assert
            await assert.checkTextContain(component.homeScanBtn, 'Scan')
        })

        it('[Wording] Check Buy Btn Text Wording', async () => {
            // assert
            await assert.checkTextContain(component.homeBuyBtn, 'Buy')
        })

        it('[Wording] Check Search TextField placeholder Wording', async () => {
            // assert
            await assert.checkText(component.homeSearchTextField, 'Search...')
        })

        it('[Wording] Check KUB Token Symbol text Wording', async () => {
            // assert
            await assert.checkText(component.homeTokenCardKubSymbolText, 'KUB')
        })

        it('[Wording] Check KUB Token Name text Wording', async () => {
            // assert
            await assert.checkText(component.homeTokenCardKubSymbolText, 'KUB')
        })

        it('[Wording] Check KUB Token Balance text Wording', async () => {
            // assert
            await assert.checkText(component.homeTokenCardKubBalanceText, '0')
        })

        it('[Wording] Check KUB Token Value text Wording', async () => {
            // assert
            await assert.checkText(component.homeTokenCardKubValueText, '$0')
        })

        it('[Wording] Check WTK Token Symbol Text Wording', async () => {
            // assert
            await assert.checkText(component.homeTokenCardWtkSymbolText, 'WTK')
        })

        it('[Wording] Check WTK Token Name Text Wording', async () => {
            // assert
            await assert.checkText(component.homeTokenCardWtkNameText, 'WToken')
        })

        it('[Wording] Check WTK Token Balance text Wording', async () => {
            // assert
            await assert.checkText(component.homeTokenCardWtkBalanceText, '0')
        })

        it('[Wording] Check WTK Token Value text Wording', async () => {
            // assert
            await assert.checkText(component.homeTokenCardWtkValueText, '$0')
        })

        it('[Tap] Check Tap Wallet Icon Btn', async () => {
            // action
            await action.click(component.homeWalletIconBtn)

            // assert
            await assert.checkElementDisplayed(component.walletModalTitleText)

            // after
            await action.swipe('down')
        })

        it('[Tap] Check Tap Network Btn', async () => {
            // action
            await action.click(component.homeNetworkBtn)

            // assert
            await assert.checkElementDisplayed(component.networkTitleText)

            // after
            await action.swipe('down')
        })

        it('[Tap] Check Tap Copy Address Btn Tap', async () => {
            // action
            await action.click(component.homeCopyAddressBtn)
            // assert
            await assert.checkText(component.homeCopyToastText, 'alert')        // Toast Copied return message : alert
        })

        it('[Tap] Check Tap Send Btn Tap', async () => {
            // action
            await action.click(component.homeSendBtn)

            // assert
            await assert.checkElementDisplayed(component.sendTitleText)

            // after (back to Home)
            await action.click(component.sendBackBtn)
        })

        it('[Tap] Check Tap Receive Btn Tap', async () => {
            // action
            await action.click(component.homeReceiveBtn)

            // assert
            await assert.checkElementDisplayed(component.receiveSelectTokenTitleText)

            // after (back to Home)
            await action.click(component.receiveSelectTokenBackBtn)
        })

        it('[Tap] Check Tap Scan Btn Tap', async () => {
            // action
            await action.click(component.homeScanBtn)

            // action (for handle permission access)
            await action.acceptAlert()

            // assert
            await assert.checkElementDisplayed(component.scanTitleText)

            // after (back to Home)
            await action.click(component.scanBackBtn)
        })

        it('[Tap] Check KUB Token Card Btn Tap', async () => {
            // action (KUB)
            await action.click(component.homeTokenCardKubSymbolText)

            // assert
            await assert.checkText(component.tokenCardKUBTitleText, 'KUB')

            // after (back to Home)
            await action.click(component.tokenCardBackBtn)
        })

        it('[Tap] Check WTK Token Card Btn Tap', async () => {
            // action (WTK)
            await action.click(component.homeTokenCardWtkSymbolText)

            // assert
            await assert.checkText(component.tokenCardWTKTitleText, 'WTK')

            // after (back to Home)
            await action.click(component.tokenCardBackBtn)
        })

        it('[Functional] Check Search no result function', async () => {
            // action
            await action.enterText(component.homeSearchTextField, 'ETH')

            // assert
            await assert.checkText(component.homeSearchNoResultText, 'No result')

            // after 
            await action.clearText(component.homeSearchTextField)
        })

        it('[Functional] Check Search KUB', async () => {
            // action
            await action.enterText(component.homeSearchTextField, 'KUB')

            // assert
            await assert.checkElementNotDisplayed(component.homeTokenCardWtkSymbolText)

            // after
            await action.clearText(component.homeSearchTextField)
        })

        it('[Functional] Check Search WTK', async () => {
            // action
            await action.enterText(component.homeSearchTextField, 'WTK')

            // assert
            await assert.checkElementNotDisplayed(component.homeTokenCardKubSymbolText)

            // after
            await action.clearText(component.homeSearchTextField)
        })

        it('[Functional] Check Change Network Chain', async () => {
            // action 
            await action.click(component.homeNetworkBtn)

            await action.click(component.networkAddNetworkBtn)

            await action.click(component.networkManagementCustomTab)

            await action.click(component.networkManagementAddCustomNetworkBtn)

            await action.setClipboard(`${process.env.GOERLI_TEST_NET_URL}`)

            // open option menu
            await action.click(component.customNetworkNetworkUrlTextField)
            await action.click(component.customNetworkNetworkUrlTextField)

            // paste clipboard
            await action.click(component.iosPasteBtn)
            await action.pause(5000)
            await action.tapKeyboard()

            await action.click(component.customNetworkConfirmBtn)

            await action.click(component.addNetworkSuccessSwitchNetworkBtn)

            // assert
            await assert.checkText(component.homeTokenCardETHBtn, 'ETH Goerli 0 $0')

        })
    })

    // Token Card Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.click(component.homeTokenCardETHBtn)
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Token Card Test Scenario')   // add sub suite for allure report
        })

        it('[Display] Check Back Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.tokenCardBackBtn)
        })

        it('[Display] Check Send Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.tokenCardSendBtn)
        })

        it('[Display] Check Receive Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.tokenCardReceiveBtn)
        })

        it('[Display] Check Buy Btn Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.tokenCardBuyBtn)
        })

        xit('[Display] Check Buy Btn Should be Disabled', async () => {
            // assert
            await assert.checkDisabled(component.tokenCardBuyBtn)
        })

        it('[Display] Check QR Code tab Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.tokenCardQRCodeTabBtn)
        })

        it('[Display] Check Information tab Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.tokenCardInfoTabBtn)
        })

        it('[Wording] Check Token Card title text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardETHTitleText, 'ETH')
        })

        it('[Wording] Check Token Card Chain name text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardETHChainNameText, 'goerli')
        })

        it('[Wording] Check Token Card Token Symbol text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardETHTokenSymbolText, 'ETH')
        })

        it('[Wording] Check Token Card Token Name text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardETHTokenNameText, 'Goerli')
        })

        it('[Wording] Check Send Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.tokenCardSendBtn, 'Send')
        })

        it('[Wording] Check Receive Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.tokenCardReceiveBtn, 'Receive')
        })

        it('[Wording] Check Buy Btn Wording', async () => {
            // assert
            await assert.checkTextContain(component.tokenCardBuyBtn, 'Buy')
        })

        it('[Wording] Check Token Card QR Code tab Wording', async () => {
            // assert
            await assert.checkTextContain(component.tokenCardQRCodeTabBtn, 'QR Code')
        })

        it('[Wording] Check Token Card Information tab Wording', async () => {
            // assert
            await assert.checkTextContain(component.tokenCardInfoTabBtn, 'Information')
        })

        it('[Wording] Check Token Card Warning Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardETHWarningText, 'Only send goerli (ETH) network assets to this address. Sending any other coins may result in permanent loss.')
        })

        it('[Tap] Check Tap Token Card Back Btn', async () => {
            // action
            await action.click(component.tokenCardBackBtn)

            // assert
            await assert.checkElementDisplayed(component.homeTabHomeBtn)

            // after (back to Token Card)
            await action.click(component.homeTokenCardETHBtn)
        })

        it('[Tap] Check Tap Token Card Send Btn', async () => {
            // action
            await action.click(component.tokenCardSendBtn)

            // assert
            await assert.checkElementDisplayed(component.sendTitleText)

            // after (back to Token Card)
            await action.click(component.sendBackBtn)
        })

        it('[Tap] Check Tap Token Card Receive Btn', async () => {
            // action
            await action.click(component.tokenCardReceiveBtn)

            // assert
            await assert.checkElementDisplayed(component.receiveTokenTitleText)

            // after (back to Token Card)
            await action.click(component.receiveTokenBackBtn)
        })

        it('[Tap] Check Tap Token Card Information Tab', async () => {
            // action
            await action.click(component.tokenCardInfoTabBtn)

            // assert
            await assert.checkText(component.tokenCardInfoTabHeaderText, 'Token Info')
        })

        it('[Tap] Check Tap Token Card QR Code Tab', async () => {
            // action
            await action.click(component.tokenCardQRCodeTabBtn)

            // assert
            await assert.checkText(component.tokenCardETHWarningText, 'Only send goerli (ETH) network assets to this address. Sending any other coins may result in permanent loss.')
        })

        it('[Functional] Check When Change Network [Bitkub Testnet]', async () => {
            // action
            await action.click(component.tokenCardBackBtn)
            await action.click(component.homeNetworkBtn)      // Network Btn
            await action.click(component.networkBitkubBtn)  // Bitkub Testnet Btn (Network Pop-up)
            await action.click(component.homeTokenCardKubSymbolText)  // KUB Token Card

            // assert
            await assert.checkText(component.tokenCardKUBTitleText, 'KUB')
            await assert.checkText(component.tokenCardKUBChainNameText, 'Bitkub Chain Testnet')
            await assert.checkText(component.tokenCardKUBTokenSymbolText, 'KUB')
            await assert.checkText(component.tokenCardKUBTokenNameText, 'KUB')
            await assert.checkText(component.tokenCardKUBWarningText, 'Only send Bitkub Chain Testnet (KUB) network assets to this address. Sending any other coins may result in permanent loss.')
        })
    })

    // Token Card Information Tab Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.click(component.tokenCardInfoTabBtn)
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Token Card Information Tab Test Scenario')   // add sub suite for allure report
        })

        it('[Wording] Check Information Tab Header Text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardInfoTabHeaderText, 'Token Info')
        })

        it('[Wording] Check Token Symbol Text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardInfoTabTokenSymbolText, 'Token Symbol')
        })

        it('[Wording] Check Token Symbol Value Text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardKUBInfoTabTokenSymbolValueText, 'KUB')
        })

        it('[Wording] Check Token Name Text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardInfoTabTokenNameText, 'Token Name')
        })

        it('[Wording] Check Token Name Value Text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardKUBInfoTabTokenNameValueText, 'KUB')
        })

        it('[Wording] Check Total Circulation Text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardInfoTabCirculationText, 'Total circulation')
        })

        it('[Wording] Check About Text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardInfoTabAboutText, 'About')
        })

        it(('[Functional] Check Value When Change Network'), async () => {
            // action
            await action.click(component.tokenCardBackBtn)
            await action.click(component.homeNetworkBtn)      // Network Btn
            await action.click(component.networkGoerliBtn)  // goerli Btn (Network Pop-up)
            await action.click(component.homeTokenCardETHBtn)  // ETH Token Card
            await action.click(component.tokenCardInfoTabBtn)  // Information Tab

            // assert
            await assert.checkText(component.tokenCardETHInfoTabTokenSymbolValueText, 'ETH')
            await assert.checkText(component.tokenCardETHInfoTabTokenNameValueText, 'Goerli')
        })

    })

    // Token Card QR Code Tab Test Scenario
    describe('', () => {
        beforeAll(async () => {
            await action.click(component.tokenCardQRCodeTabBtn)
        })

        beforeEach(async () => {
            AllureReporter.addSubSuite('Token Card QR Code Tab Test Scenario')   // add sub suite for allure report
        })

        it('[Display] Check Warning Text Displayed', async () => {
            // assert
            await assert.checkElementDisplayed(component.tokenCardETHWarningText)
        })

        it('[Wording] Check Warning Text Text Wording', async () => {
            // assert
            await assert.checkText(component.tokenCardETHWarningText, 'Only send goerli (ETH) network assets to this address. Sending any other coins may result in permanent loss.')
        })

        it('[Functional] Check Value When Change Network', async () => {
            // action
            await action.click(component.tokenCardBackBtn)
            await action.click(component.homeNetworkBtn)      // Network Btn
            await action.click(component.networkBitkubBtn)  // Bitkub Testnet Btn (Network Pop-up)
            await action.click(component.homeTokenCardKubSymbolText)  // KUB Token Card
            await action.click(component.tokenCardQRCodeTabBtn)  // Information Tab

            // assert
            await assert.checkText(component.tokenCardKUBWarningText, 'Only send Bitkub Chain Testnet (KUB) network assets to this address. Sending any other coins may result in permanent loss.')
        })

        afterAll(async () => {
            // remove apps
            await action.removeApps(`${process.env.BUNDLE_ID}`)
        })
    })
})