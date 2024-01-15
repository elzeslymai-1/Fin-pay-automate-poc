import { homeComponent } from '../component/homeComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new homeComponent()
const action = new Action()
const assert = new Assertion()

describe('Home Menu Bar Test Senario', () => {
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

describe('Home Page Test Senario', () => {
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
        await assert.checkElementDisplayed(component.homeBuyBtn)
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

    it('[Tap] Check Token Card Btn Tap', async () => {
        // action (KUB)
        await action.click(component.bitkubTestnetKUB)

        // assert
        await assert.checkElementDisplayed(component.tokencardKUBTitletext)

        // after (back to Home)
        await action.click(component.tokencardBackBtn)

        // action (WTK)
        await action.click(component.bitkubTestnetWTK)

        // assert
        await assert.checkElementDisplayed(component.tokencardWTKTitletext)

        // after (back to Home)
        await action.click(component.tokencardBackBtn)
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
})

describe('[KUB] Token Card Test Senario', () => {
    beforeAll(async () => {
        await action.click(component.bitkubTestnetKUB)
    })

    it('[Display] Check Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokencardBackBtn)
    })

    it('[Display] Check Send Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokencardSendBtn)
    })

    it('[Display] Check Receive Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokencardReceiveBtn)
    })

    it('[Display] Check Buy Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokencardBuyBtn)
    })

    it('[Display] Check QR Code tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokencardQRCodeTab)
    })

    it('[Display] Check Information tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.tokencardInfoTab)
    })

    it('[Wording] Check Token Card title text', async () => {
        // assert
        await assert.checkText(component.tokencardKUBTitletext, 'KUB')
    })

    it('[Wording] Check Token Card Chain name text', async () => {
        // assert
        await assert.checkText(component.tokencardKUBChainNameText, 'Bitkub Chain Testnet')
    })

    it('[Wording] Check Token Card Token Name text', async () => {
        // assert
        await assert.checkText(component.tokencardKUBTokenNameText, 'KUB')
    })

    it('[Wording] Check Token Card Token Fullname text', async () => {
        // assert
        await assert.checkText(component.tokencardKUBTokenFullNameText, 'KUB')
    })

    it('[Wording] Check Token Card Send Btn text', async () => {
        // assert
        await assert.checkText(component.tokencardSendBtn, 'Send')
    })

    it('[Wording] Check Token Card Receive Btn text', async () => {
        // assert
        await assert.checkText(component.tokencardReceiveBtn, 'Receive')
    })

    it('[Wording] Check Token Card Buy Btn text', async () => {
        // assert
        await assert.checkText(component.tokencardBuyBtn, 'Buy')
    })

    it('[Wording] Check Token Card QR Code tab text', async () => {
        // assert
        await assert.checkText(component.tokencardQRCodeTab, 'QR Code')
    })

    it('[Wording] Check Token Card Information tab text', async () => {
        // assert
        await assert.checkText(component.tokencardInfoTab, 'Information')
    })

    it('[Wording] Check Token Card Warning text', async () => {
        // assert
        await assert.checkText(component.tokencardKUBWarningText, 'Only send Bitkub Chain Testnet (KUB) network assets to this address. Sending any other coins may result in permanent loss.')
    })

    it('[Tap] Check Token Card Back Btn tap', async () => {
        // action
        await action.click(component.tokencardBackBtn)

        // assert
        await assert.checkElementDisplayed(component.menuHomeBtn)

        // after (back to Token Card)
        await action.click(component.bitkubTestnetKUB)
        await action.pause(1000)
    })

    it('[Tap] Check Token Card Send Btn tap', async () => {
        // action
        await action.click(component.tokencardSendBtn)

        // assert
        await assert.checkElementDisplayed(component.tokencardSendTitleText)

        // after (back to Token Card)
        await action.click(component.tokencardSendBackBtn)
    })

    it('[Tap] Check Token Card Receive Btn tap', async () => {
        // action
        await action.click(component.tokencardReceiveBtn)

        // assert
        await assert.checkElementDisplayed(component.tokencardReceiveTitleText)

        // after (back to Token Card)
        await action.click(component.tokencardReceiveBackBtn)
    })

    it('[Tap] Check Token Card QR Code tab tap', async () => {
        // action
        await action.click(component.tokencardInfoTab)

        // assert
        await assert.checkText(component.tokencardInfoText, 'Token Info')
        await assert.checkText(component.tokencardInfoSymbolText, 'Token Symbol')
        await assert.checkText(component.tokencardInfoNameText, 'Token Name')
        await assert.checkText(component.tokencardInfoCirculationText, 'Total circulation')
        await assert.checkText(component.tokencardInfoAboutText, 'About')

        // after (back to Home)
        await action.click(component.tokencardBackBtn)
    })
})

describe('[WTK] Token Card Test Senario', () => {
    beforeAll(async () => {
        await action.click(component.bitkubTestnetWTK)
    })

    it('[Wording] Check Token Card title text', async () => {
        // assert
        await assert.checkText(component.tokencardWTKTitletext, 'WTK')
    })

    it('[Wording] Check Token Card Chain name text', async () => {
        // assert
        await assert.checkText(component.tokencardWTKChainNameText, 'Bitkub Chain Testnet')
    })

    it('[Wording] Check Token Card Token Name text', async () => {
        // assert
        await assert.checkText(component.tokencardWTKTokenNameText, 'WTK')
    })

    it('[Wording] Check Token Card Token Fullname text', async () => {
        // assert
        await assert.checkText(component.tokencardWTKTokenFullNameText, 'WToken')
    })

    it('[Wording] Check Token Card Warning text', async () => {
        // assert
        await assert.checkText(component.tokencardWTKWarningText, 'Only send Bitkub Chain Testnet (WTK) network assets to this address. Sending any other coins may result in permanent loss.')
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})