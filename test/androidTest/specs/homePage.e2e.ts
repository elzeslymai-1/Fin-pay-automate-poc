import { expect } from '@wdio/globals'
import { homeComponent } from '../component/homeComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new homeComponent()
const action = new Action()
const assert = new Assertion()

describe('Home Page Test Senario', () => {
    beforeAll(async () => {
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)
    })

    // === Check Menu Bar ===
    it('[Display] Check Home Btn', async () => {
        await action.waitForDisplayed(component.homeBtn)
        await assert.checkText(component.homeBtn, 'Home')
    })

    it('[Display] Check History Btn', async () => {
        await action.waitForDisplayed(component.homeHistoryBtn)
        await assert.checkText(component.homeHistoryBtn, 'History')
    })

    it('[Display] Check DApps Btn', async () => {
        await action.waitForDisplayed(component.homeDappBtn)
        await assert.checkText(component.homeDappBtn, 'DApps')
    })

    it('[Display] Check Setting Btn', async () => {
        await action.waitForDisplayed(component.homeSettingBtn)
        await assert.checkText(component.homeSettingBtn, 'Setting')
    })

    // === Check Home Page ===
    it('[Display] Check Wallet Icon Btn', async () => {
        await action.waitForDisplayed(component.homeWalletIconBtn)
        await assert.checkText(component.homeWalletIconBtn, '')
    })

    it('[Display] Check Network Btn', async () => {
        await action.waitForDisplayed(component.homeNetworkBtn)
        await assert.checkText(component.homeNetworkBtn, '')
    })

    it('[Display] Check Send Btn', async () => {
        await action.waitForDisplayed(component.homeSendBtn)
        await assert.checkText(component.homeSendBtn, '')
    })

    it('[Display] Check Receive Btn', async () => {
        await action.waitForDisplayed(component.homeReceiveBtn)
        await assert.checkText(component.homeReceiveBtn, '')
    })

    it('[Display] Check Scan Btn', async () => {
        await action.waitForDisplayed(component.homeScanBtn)
        await assert.checkText(component.homeScanBtn, 'Scan')
    })

    it('[Display] Check Search Btn', async () => {
        await action.waitForDisplayed(component.homeSearchIconBtn)
        await assert.checkText(component.homeSearchIconBtn, '')
    })

    // === Check Menu Tap ===
    it('[Tap] Check History Btn Tap', async () => {
        await action.waitForDisplayed(component.homeHistoryBtn)
        await action.click(component.homeHistoryBtn)

        await action.waitForDisplayed(component.historyTitleText)
        await assert.checkText(component.historyTitleText, 'Transactions History')
    })

    it('[Tap] Check DApps Btn Tap', async () => {
        await action.waitForDisplayed(component.homeDappBtn)
        await action.click(component.homeDappBtn)

        await action.waitForDisplayed(component.dappTrendingTitleText)
        await assert.checkText(component.dappTrendingTitleText, 'Trending DApps')
    })

    it('[Tap] Check Setting Btn Tap', async () => {
        await action.waitForDisplayed(component.homeSettingBtn)
        await action.click(component.homeSettingBtn)

        await action.waitForDisplayed(component.settingTitleText)
        await assert.checkText(component.settingTitleText, 'Setting')
    })

    it('[Tap] Check Home Btn Tap', async () => {
        await action.waitForDisplayed(component.homeBtn)
        await action.click(component.homeBtn)

        await action.waitForDisplayed(component.homeWalletIconBtn)
        await assert.checkText(component.homeWalletIconBtn, '')
    })

    // === Check Home Page Tap ===
    it('[Tap] Check Wallet Icon Btn Tap', async () => {
        await action.waitForDisplayed(component.homeWalletIconBtn)
        await action.click(component.homeWalletIconBtn)

        await action.waitForDisplayed(component.walletTitleText)
        await assert.checkText(component.walletTitleText, 'Wallets')

        // To close wallet pop-up
        await action.click(component.homeWalletIconBtn)
    })

    it('[Tap] Check Network Btn Tap', async () => {
        await action.waitForDisplayed(component.homeNetworkBtn)
        await action.click(component.homeNetworkBtn)

        await action.waitForDisplayed(component.networkTitleText)
        await assert.checkText(component.networkTitleText, 'Select Network')

        // To close network pop-up
        await action.click(component.homeNetworkBtn)
    })

    it('[Tap] Check Send Btn Tap', async () => {
        await action.waitForDisplayed(component.homeSendBtn)
        await action.click(component.homeSendBtn)

        await action.waitForDisplayed(component.sendTitleText)
        await assert.checkText(component.sendTitleText, 'Send')

        await action.waitForDisplayed(component.sendBackBtn)
        await action.click(component.sendBackBtn)
    })

    it('[Tap] Check Receive Btn Tap', async () => {
        await action.waitForDisplayed(component.homeReceiveBtn)
        await action.click(component.homeReceiveBtn)

        await action.waitForDisplayed(component.receiveTitleText)
        await assert.checkText(component.receiveTitleText, 'Select Token')

        await action.waitForDisplayed(component.receiveBackBtn)
        await action.click(component.receiveBackBtn)
    })

    it('[Tap] Check Scan Btn Tap', async () => {
        await action.waitForDisplayed(component.homeScanBtn)
        await action.click(component.homeScanBtn)

        await action.waitForDisplayed(component.androidCameraAccessText)
        await assert.checkText(component.androidCameraAccessText, 'Allow Fins: Defi Wallet to take pictures and record video?')

        await action.waitForDisplayed(component.androidWhileuseappBtn)
        await assert.checkText(component.androidWhileuseappBtn, 'While using the app')

        await action.click(component.androidWhileuseappBtn)

        await action.waitForDisplayed(component.scanTitleText)
        await assert.checkText(component.scanTitleText, 'Scan QR code')

        await action.waitForDisplayed(component.scanBackBtn)
        await action.click(component.scanBackBtn)
    })

    it('[Tap] Check Search Btn', async () => {
        await action.waitForDisplayed(component.homeSearchIconBtn)
        await assert.checkText(component.homeSearchIconBtn, '')

        await action.waitForDisplayed(component.homeSearchTextField)
        await assert.checkElemenDisplayed(component.homeSearchTextField)

        await action.click(component.homeSearchTextField)
        await action.enterText(component.homeSearchTextField, 'KUB')

        // To hide keyboard layout
        await action.hideKeyboard()

        await action.waitForDisplayed(component.bitkubTestnetKUB)
        await assert.checkText(component.bitkubTestnetKUB, 'KUB')
    })

    afterAll(async () => {
        await action.closeApps(`${process.env.PACKAGE_ID}`)
    })

})