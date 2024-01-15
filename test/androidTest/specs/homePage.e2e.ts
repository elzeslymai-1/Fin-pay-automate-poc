import { homeComponent } from '../component/homeComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new homeComponent()
const action = new Action()
const assert = new Assertion()

describe('Home Menu Bar Test Scenario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)

        await action.click(component.successContinueBtn)
    })

    it('[Display] Check Home Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.menuHomeBtn)
    })

    it('[Display] Check History Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.menuHistoryBtn)
    })

    it('[Display] Check DApps Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.menuDappBtn)
    })

    it('[Display] Check Setting Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.menuSettingBtn)
    })

    it('[Wording] Check Menu Home Btn', async () => {
        // assert
        await assert.checkText(component.menuHomeBtn, 'Home')
    })

    it('[Wording] Check Menu History Btn', async () => {
        // assert
        await assert.checkText(component.menuHistoryBtn, 'History')
    })

    it('[Wording] Check Menu DApps Btn', async () => {
        // assert
        await assert.checkText(component.menuDappBtn, 'DApps')
    })

    it('[Wording] Check Menu Setting Btn', async () => {
        // assert
        await assert.checkText(component.menuSettingBtn, 'Setting')
    })

    it('[Tap] Check Menu History Btn Tap', async () => {
        // action
        await action.click(component.menuHistoryBtn)

        // assert
        await assert.checkElementDisplayed(component.historyTitleText)
    })

    it('[Tap] Check Menu DApps Btn Tap', async () => {
        // action
        await action.click(component.menuDappBtn)

        // assert
        await assert.checkElementDisplayed(component.dappTrendingTitleText)
    })

    it('[Tap] Check Menu Setting Btn Tap', async () => {
        // action
        await action.click(component.menuSettingBtn)

        // assert
        await assert.checkElementDisplayed(component.settingTitleText)
    })

    it('[Tap] Check Menu Home Btn Tap', async () => {
        // action
        await action.click(component.menuHomeBtn)

        // assert
        await assert.checkElementDisplayed(component.homeWalletIconBtn)
    })
})

describe('Home Page Test Scenario', () => {
    it('[Display] Check Wallet Icon Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.homeWalletIconBtn)
    })

    it('[Display] Check Network Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.homeNetworkBtn)
    })

    it('[Display] Check Notification Btn', async () => {
        // assert (under development feature)
        await assert.checkElementDisplayed(component.homeNotiIconBtn)
    })

    it('[Display] Check Notification Btn should be Disable', async () => {
        // assert
        await assert.checkDisabled(component.homeNotiIconBtn)
    })

    it('[Display] Check Copy Address Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.homeCopyAddressBtn)
    })

    it('[Display] Check Send Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.homeSendBtn)
    })

    it('[Display] Check Receive Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.homeReceiveBtn)
    })

    it('[Display] Check Scan Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.homeScanBtn)
    })

    it('[Display] Check Buy Btn', async () => {
        // assert (under development feature)
        await assert.checkElementDisplayed(component.homeBuyBtnXpath)
    })

    it('[Display] Check Buy Btn should be Disable', async () => {
        // assert
        await assert.checkDisabled(component.homeBuyBtnXpath)
    })

    it('[Display] Check Search TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.homeSearchTextField)
    })

    it('[Display] Check KUB Test net token', async () => {
        // assert (Test net chain token)
        await assert.checkElementDisplayed(component.bitkubTestnetKUB)
    })

    it('[Display] Check WTK Test net token', async () => {
        // assert (Test net chain token)
        await assert.checkElementDisplayed(component.bitkubTestnetWTK)
    })

    it('[Wording] Check Wallet Icon Btn', async () => {
        // assert
        await assert.checkText(component.homeWalletIconBtn, '')
    })

    it('[Wording] Check Network Btn Text', async () => {
        // assert
        await assert.checkText(component.homeNetworkBtn, '')
    })

    it('[Wording] Check Notification Btn Text', async () => {
        // assert
        await assert.checkText(component.homeNotiIconBtn, '')
    })

    it('[Wording] Check Copy Address Btn Text', async () => {
        // assert
        await assert.checkText(component.homeCopyAddressBtn, '')
    })

    it('[Wording] Check Send Btn Text', async () => {
        // assert
        await assert.checkText(component.homeSendBtn, 'Send')
    })

    it('[Wording] Check Receive Btn Text', async () => {
        // assert
        await assert.checkText(component.homeReceiveBtn, 'Receive')
    })

    it('[Wording] Check Scan Btn Text', async () => {
        // assert
        await assert.checkText(component.homeScanBtn, 'Scan')
    })

    it('[Wording] Check Buy Btn Text', async () => {
        // assert
        await assert.checkText(component.homeBuyBtn, 'Buy')
    })

    it('[Wording] Check KUB token text', async () => {
        // assert
        await assert.checkText(component.bitkubTestnetKUB, 'KUB')
    })

    it('[Wording] Check WTK token Text', async () => {
        // assert
        await assert.checkText(component.bitkubTestnetWTK, 'WTK')
    })

    it('[Tap] Check Wallet Icon Btn Tap', async () => {
        // action
        await action.click(component.homeWalletIconBtn)

        // assert
        await assert.checkElementDisplayed(component.walletTitleText)

        // assert (under development feature)
        await assert.checkDisabled(component.walletSettingBtnXpath)

        // after (close pop-up)
        await action.click(component.homeWalletIconBtn)
    })

    it('[Tap] Check Network Btn Tap', async () => {
        // action
        await action.click(component.homeNetworkBtn)

        // assert
        await assert.checkElementDisplayed(component.networkTitleText)

        // after (close pop-up)
        await action.click(component.homeNetworkBtn)
    })

    it('[Tap] Check Copy Address Btn Tap',async () => {
        // action
        await action.click(component.homeCopyAddressBtn)
        // Missing assert
    })

    it('[Tap] Check Send Btn Tap', async () => {
        // action
        await action.click(component.homeSendBtn)

        // assert
        await assert.checkElementDisplayed(component.sendTitleText)

        // after (back to Home)
        await action.click(component.sendBackBtn)
    })

    it('[Tap] Check Receive Btn Tap', async () => {
        // action
        await action.click(component.homeReceiveBtn)

        // assert
        await assert.checkElementDisplayed(component.receiveTitleText)

        // after (back to Home)
        await action.click(component.receiveBackBtn)
    })

    it('[Tap] Check Scan Btn Tap', async () => {
        // action
        await action.click(component.homeScanBtn)

        // action (for handle permission access)
        await action.click(component.androidWhileuseappBtn)

        // assert
        await assert.checkElementDisplayed(component.scanTitleText)

        // after (back to Home)
        await action.click(component.scanBackBtn)
    })

    it('[Tap] Check KUB Token Card Btn Tap', async () => {
        // action (KUB)
        await action.click(component.bitkubTestnetKUB)

        // assert
        await assert.checkElementDisplayed(component.tokenCardKUBTitleText)

        // after (back to Home)
        await action.click(component.tokenCardBackBtn)
    })

    it('[Tap] Check WTK Token Card Btn Tap', async () => {
        // action (WTK)
        await action.click(component.bitkubTestnetWTK)

        // assert
        await assert.checkElementDisplayed(component.tokenCardWTKTitleText)

        // after (back to Home)
        await action.click(component.tokenCardBackBtn)
    })

    it('[Search] Check Search Function', async () => {
        // action
        await action.enterText(component.homeSearchTextField, 'KUB')

        // assert
        await assert.checkElementDisplayed(component.bitkubTestnetKUB)

        // action (for check exist)
        await action.waitForExist(component.bitkubTestnetWTK, 2000, true)

        // action
        await action.enterText(component.homeSearchTextField, 'WTK')

        // assert
        await assert.checkElementDisplayed(component.bitkubTestnetWTK)

        // action (for check exist)
        await action.waitForExist(component.bitkubTestnetKUB, 2000, true)

        // after (clear text)
        await action.clearText(component.homeSearchTextField)
    })

    it('[Function] Change Network Chain',async () => {
        // action
        await action.click(component.homeNetworkBtn)

        await action.click(component.networkAddNetworkBtn)

        await action.click(component.networkManagementCustomTab)

        await action.click(component.networkManagementAddcustomnetBtn)

        // (Add and Switch to Goerli Chainnet)
        await action.enterText(component.customnetNetworkUrlTextField, `${process.env.TEST_URL}`)
        await action.pause(5000)

        await action.click(component.customnetConfirmBtn)

        await action.click(component.addnetSuccessSwitchgoerliBtn)

        // action (Check Network Chain Name)
        await action.click(component.goerliETH)

        // assert
        await assert.checkText(component.tokenCardETHChainNameText, 'goerli')

        // after (back to Home) (change network chain to Bitkub Testnet)
        await action.click(component.tokenCardBackBtn)

        await action.click(component.homeNetworkBtn)

        await action.click(component.networkBitkubBtn)
    })
})

describe('[KUB] Token Card Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.bitkubTestnetKUB)
    })

    it('[Display] Check Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardBackBtn)
    })

    it('[Display] Check Send Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardSendBtn)
    })

    it('[Display] Check Receive Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardReceiveBtn)
    })

    it('[Display] Check Buy Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardBuyBtn)
    })

    it('[Display] Check QR Code tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardQRCodeTab)
    })

    it('[Display] Check Information tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardInfoTab)
    })

    it('[Wording] Check Token Card title text', async () => {
        // assert
        await assert.checkText(component.tokenCardKUBTitleText, 'KUB')
    })

    it('[Wording] Check Token Card Chain name text', async () => {
        // assert
        await assert.checkText(component.tokenCardKUBChainNameText, 'Bitkub Chain Testnet')
    })

    it('[Wording] Check Token Card Token Name text', async () => {
        // assert
        await assert.checkText(component.tokenCardKUBTokenNameText, 'KUB')
    })

    it('[Wording] Check Token Card Token Fullname text', async () => {
        // assert
        await assert.checkText(component.tokenCardKUBTokenFullNameText, 'KUB')
    })

    it('[Wording] Check Token Card Send Btn text', async () => {
        // assert
        await assert.checkText(component.tokenCardSendBtn, 'Send')
    })

    it('[Wording] Check Token Card Receive Btn text', async () => {
        // assert
        await assert.checkText(component.tokenCardReceiveBtn, 'Receive')
    })

    it('[Wording] Check Token Card Buy Btn text', async () => {
        // assert
        await assert.checkText(component.tokenCardBuyBtn, 'Buy')
    })

    it('[Wording] Check Token Card QR Code tab text', async () => {
        // assert
        await assert.checkText(component.tokenCardQRCodeTab, 'QR Code')
    })

    it('[Wording] Check Token Card Information tab text', async () => {
        // assert
        await assert.checkText(component.tokenCardInfoTab, 'Information')
    })

    it('[Wording] Check Token Card Warning text', async () => {
        // assert
        await assert.checkText(component.tokenCardKUBWarningText, 'Only send Bitkub Chain Testnet (KUB) network assets to this address. Sending any other coins may result in permanent loss.')
    })

    it('[Tap] Check Token Card Back Btn tap', async () => {
        // action
        await action.click(component.tokenCardBackBtn)

        // assert
        await assert.checkElementDisplayed(component.menuHomeBtn)

        // after (back to Token Card)
        await action.click(component.bitkubTestnetKUB)
        await action.pause(1000)
    })

    it('[Tap] Check Token Card Send Btn tap', async () => {
        // action
        await action.click(component.tokenCardSendBtn)

        // assert
        await assert.checkElementDisplayed(component.tokenCardSendTitleText)

        // after (back to Token Card)
        await action.click(component.tokenCardSendBackBtn)
    })

    it('[Tap] Check Token Card Receive Btn tap', async () => {
        // action
        await action.click(component.tokenCardReceiveBtn)

        // assert
        await assert.checkElementDisplayed(component.tokenCardReceiveTitleText)

        // after (back to Token Card)
        await action.click(component.tokenCardReceiveBackBtn)
    })

    it('[Tap] Check Token Card QR Code tab tap', async () => {
        // action
        await action.click(component.tokenCardInfoTab)

        // assert
        await assert.checkText(component.tokenCardInfoText, 'Token Info')
        await assert.checkText(component.tokenCardInfoSymbolText, 'Token Symbol')
        await assert.checkText(component.tokenCardInfoNameText, 'Token Name')
        await assert.checkText(component.tokenCardInfoCirculationText, 'Total circulation')
        await assert.checkText(component.tokenCardInfoAboutText, 'About')

        // after (back to Home)
        await action.click(component.tokenCardBackBtn)
    })
})

describe('[WTK] Token Card Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.bitkubTestnetWTK)
    })

    it('[Display] Check Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardBackBtn)
    })

    it('[Display] Check Send Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardSendBtn)
    })

    it('[Display] Check Receive Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardReceiveBtn)
    })

    it('[Display] Check Buy Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardBuyBtn)
    })

    it('[Display] Check QR Code tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardQRCodeTab)
    })

    it('[Display] Check Information tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokenCardInfoTab)
    })

    it('[Wording] Check Token Card title text', async () => {
        // assert
        await assert.checkText(component.tokenCardWTKTitleText, 'WTK')
    })

    it('[Wording] Check Token Card Chain name text', async () => {
        // assert
        await assert.checkText(component.tokenCardWTKChainNameText, 'Bitkub Chain Testnet')
    })

    it('[Wording] Check Token Card Token Name text', async () => {
        // assert
        await assert.checkText(component.tokenCardWTKTokenNameText, 'WTK')
    })

    it('[Wording] Check Token Card Token Fullname text', async () => {
        // assert
        await assert.checkText(component.tokenCardWTKTokenFullNameText, 'WToken')
    })

    it('[Wording] Check Token Card Warning text', async () => {
        // assert
        await assert.checkText(component.tokenCardWTKWarningText, 'Only send Bitkub Chain Testnet (WTK) network assets to this address. Sending any other coins may result in permanent loss.')
    })

    it('[Tap] Check Token Card Back Btn tap', async () => {
        // action
        await action.click(component.tokenCardBackBtn)

        // assert
        await assert.checkElementDisplayed(component.menuHomeBtn)

        // after (back to Token Card)
        await action.click(component.bitkubTestnetKUB)
        await action.pause(1000)
    })

    it('[Tap] Check Token Card Send Btn tap', async () => {
        // action
        await action.click(component.tokenCardSendBtn)

        // assert
        await assert.checkElementDisplayed(component.tokenCardSendTitleText)

        // after (back to Token Card)
        await action.click(component.tokenCardSendBackBtn)
    })

    it('[Tap] Check Token Card Receive Btn tap', async () => {
        // action
        await action.click(component.tokenCardReceiveBtn)

        // assert
        await assert.checkElementDisplayed(component.tokenCardReceiveTitleText)

        // after (back to Token Card)
        await action.click(component.tokenCardReceiveBackBtn)
    })

    it('[Tap] Check Token Card QR Code tab tap', async () => {
        // action
        await action.click(component.tokenCardInfoTab)

        // assert
        await assert.checkText(component.tokenCardInfoText, 'Token Info')
        await assert.checkText(component.tokenCardInfoSymbolText, 'Token Symbol')
        await assert.checkText(component.tokenCardInfoNameText, 'Token Name')
        await assert.checkText(component.tokenCardInfoCirculationText, 'Total circulation')
        await assert.checkText(component.tokenCardInfoAboutText, 'About')

        // after (back to Home)
        await action.click(component.tokenCardBackBtn)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})