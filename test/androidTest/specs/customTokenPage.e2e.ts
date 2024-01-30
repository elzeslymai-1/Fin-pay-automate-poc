import { customTokenComponent } from '../component/customTokenComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new customTokenComponent()
const action = new Action()
const assert = new Assertion()

describe('Custom Token Page Test Scenario', () => {

    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)

        await action.click(component.successContinueBtn)

        await action.click(component.homeSettingBtn)

        await action.click(component.settingCustomTokenBtn)
    })

    it('[Display] => Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.customTokenBackBtn)
    })

    it('[Display] => Check Network Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.customTokenNetworkBtn)
    })

    it('[Display] => Check Search TextField',async () => {
        // assert
        await assert.checkElementDisplayed(component.customTokenSearchTextField)
    })

    it('[Display] => Check Add Custom Token Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.customTokenAddCustomTokenBtn)
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.customTokenTitleText, 'Custom token')
    })

    it('[Wording] => Check Search Placeholder Text',async () => {
        // assert
        await assert.checkText(component.customTokenSearchTextField, 'Search...')
    })

    it('[Wording] => Check Token Header Text',async () => {
        // assert
        await assert.checkText(component.customTokenTokenHeaderText, 'Token')
    })

    it('[Wording] => Check Custom Token Header Text',async () => {
        // assert
        await assert.checkText(component.customTokenCustomTokenHeaderText, 'Custom Token')
    })

    it('[Wording] => Check Add Custom Token Btn Text',async () => {
        // assert
        await assert.checkText(component.customTokenAddCustomTokenBtn, 'Add Custom Token')
    })

    it('[Tap] => Check Back Btn Tap',async () => {
        // action
        await action.click(component.customTokenBackBtn)

        // assert
        await assert.checkElementDisplayed(component.settingCustomTokenBtn)

        // after (back to Custom Token)
        await action.click(component.settingCustomTokenBtn)
    })

    it('[Function] => Check Change Network Btn Tap',async () => {
        // action
        await action.click(component.customTokenNetworkBtn)
        
        // assert
        await assert.checkText(component.networkTitleText, 'Select Network')

        // action (for add network goerli)
        await action.click(component.networkAddNetworkBtn)

        await action.click(component.addNetworkCustomTab)

        await action.click(component.customTabAddNetwork)

        await action.enterText(component.customNetworkURLTextField, `${process.env.TEST_URL}`)
        await action.pause(3000)

        await action.click(component.customNetworkConfirmBtn)

        await action.click(component.switchToGoerli)

        await action.click(component.homeSettingBtn)
        await action.click(component.settingCustomTokenBtn)

        // assert
        await assert.checkElementDisplayed(component.customTokenGoerliToken)

        // action
        await action.click(component.customTokenNetworkGoerliBtn)

        await action.click(component.networkBitkubChain)

        // assert
        await assert.checkElementDisplayed(component.customTokenKubToken)
    })

    it('[Search] => Check Add Custom Token no result',async () => {
        // action
        await action.click(component.customTokenAddCustomTokenBtn)

        await action.enterText(component.customTokenTokenAddressTextField, 'tokenaddress')
        await action.pause(10000)

        // assert
        await assert.checkElementDisplayed(component.customTokenNoResultText)

        // after (back to Custom token)
        await action.click(component.customTokenBackBtn)
    })
    
    it('[Function] => Check Add Custom Token Btn',async () => {
        // action
        await action.click(component.customTokenNetworkBtn)

        await action.click(component.networkGoerliChain)
        
        await action.click(component.customTokenAddCustomTokenBtn)

        await action.enterText(component.customTokenTokenAddressTextField, `${process.env.TEST_ADDTOKEN}`)

        // assert
        await assert.checkText(component.customTokenAddFinToken, 'FinTestToken')

        // action
        await action.click(component.customTokenCheckbox)

        await action.click(component.customTokenConfirmBtn)

        // assert
        await assert.checkElementDisplayed(component.customTokenFinTestToken)
    })

    it('[Function] => Check Remove Custom Token Btn',async () => {
        // action
        await action.click(component.customTokenRemoveBtn)

        // assert
        await assert.checkElementNotDisplayed(component.customTokenFinTestToken)

        // after (change network to BitKubTestnet)
        await action.click(component.customTokenNetworkGoerliBtn)

        await action.click(component.networkBitkubChain)
    })

    it('[Search] => Check Search TextField',async () => {
        //action        
        await action.enterText(component.customTokenSearchTextField, 'kub')

        // assert
        await assert.checkText(component.customTokenKubToken, 'KUB')
        await assert.checkElementNotDisplayed(component.customTokenWToken)

        await action.clearText(component.customTokenSearchTextField)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})