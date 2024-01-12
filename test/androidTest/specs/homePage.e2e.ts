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

    it('[Tap] Check Menu History Btn Tap',async () => {
        // action
        await action.click(component.menuHistoryBtn)

        // assert
        await assert.checkElementDisplayed(component.historyTitleText)
    })

    it('[Tap] Check Menu DApps Btn Tap',async () => {
        // action
        await action.click(component.menuDappBtn)

        // assert
        await assert.checkElementDisplayed(component.dappTrendingTitleText)
    })

    it('[Tap] Check Menu Setting Btn Tap',async () => {
        // action
        await action.click(component.menuSettingBtn)

        // assert
        await assert.checkElementDisplayed(component.settingTitleText)
    })

    it('[Tap] Check Menu Home Btn Tap',async () => {
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

    it('[Display] Check Search TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.homeSearchTextField)
    })

    it('[Wording] Check Wallet Icon Btn',async () => {
        // assert
        await assert.checkText(component.homeWalletIconBtn, '')
    })

    it('[Wording] Check Network Btn Text',async () => {
        // assert
        await assert.checkText(component.homeNetworkBtn, '')
    })

    it('[Wording] Check Send Btn Text',async () => {
        // assert
        await assert.checkText(component.homeSendBtn, '')
    })

    it('[Wording] Check Receive Btn Text',async () => {
        // assert
        await assert.checkText(component.homeReceiveBtn, '')
    })

    it('[Wording] Check Scan Btn Text',async () => {
        // assert
        await assert.checkText(component.homeScanBtn, 'Scan')
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

        // after (bacl to Home)
        await action.click(component.scanBackBtn)
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
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })

})