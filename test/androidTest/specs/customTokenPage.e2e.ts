import { customTokenComponent } from '../component/customTokenComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new customTokenComponent()
const action = new Action()
const assert = new Assertion()

describe('Custom Token Page Test Senario', () => {

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

    it('[Display] Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.customtokenBackBtn)
    })

    it('[Display] Check Network Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.customtokenNetworkKUBBtn)
    })

    it('[Display] Check Search TextField',async () => {
        // assert
        await assert.checkElementDisplayed(component.customtokenSearchTextField)
    })

    it('[Display] Check Add Custom Token Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.customtokenAddcustomtokenBtn)
    })

    it('[Wording] Check Title Text',async () => {
        // assert
        await assert.checkText(component.customtokenTitleText, 'Custom token')
    })

    it('[Wording] Check Search Placeholder Text',async () => {
        // assert
        await assert.checkText(component.customtokenSearchPlaceholderText, 'Search...')
    })

    it('[Wording] Check Token Header Text',async () => {
        // assert
        await assert.checkText(component.customtokenTokenHeaderText, 'Token')
    })

    it('[Wording] Check Custom Token Header Text',async () => {
        // assert
        await assert.checkText(component.customtokenCustomTokenHeaderText, 'Custom Token')
    })

    it('[Wording] Check Add Custom Token Btn Text',async () => {
        // assert
        await assert.checkText(component.customtokenAddcustomtokenBtn, 'Add Custom Token')
    })

    it('[Tap] Check Back Btn Tap',async () => {
        // action
        await action.click(component.customtokenBackBtn)

        // assert
        await assert.checkElementDisplayed(component.settingCustomTokenBtn)

        // after (back to Custom Token)
        await action.click(component.settingCustomTokenBtn)
    })

    it('[Function] Check Change Network Btn Tap',async () => {
        // action
        await action.click(component.customtokenNetworkKUBBtn)
        
        // assert
        await assert.checkText(component.networkTitleText, 'Select Network')

        // action (for add network goerli)
        await action.click(component.networkAddnetworkBtn)

        await action.click(component.addnetworkCustomTab)

        await action.click(component.customTabAddNetwork)

        await action.enterText(component.customNetworkURLTextField, `${process.env.TEST_URL}`)
        await action.pause(3000)

        await action.click(component.customNetworkConfirmBtn)

        await action.click(component.switchToGoerli)

        await action.click(component.homeSettingBtn)
        await action.click(component.settingCustomTokenBtn)

        // assert
        await assert.checkElementDisplayed(component.customtokenGoerliToken)

        // action
        await action.click(component.customtokenNetworkGoerliBtn)

        await action.click(component.networkBitkubChain)

        // assert
        await assert.checkElementDisplayed(component.customtokenKubToken)
    })
    
    it('[Function] Check Add Custom Token Btn',async () => {
        // action
        await action.click(component.customtokenNetworkKUBBtn)

        await action.click(component.networkGoerliChain)
        
        await action.click(component.customtokenAddcustomtokenBtn)

        await action.enterText(component.customtokenTokenAddressTextField, `${process.env.TEST_ADDTOKEN}`)

        // assert
        await assert.checkText(component.customtokenAddFintoken, 'FinTestToken')

        // action
        await action.click(component.customtokenCheckbox)

        await action.click(component.customtokenConfirmBtn)

        // assert
        await assert.checkElementDisplayed(component.customtokenFintestToken)
    })
    it('[Function] Check Remove Custom Token Btn',async () => {
        // action
        await action.click(component.customtokenRemoveBtn)

        await action.waitForExist(component.customtokenFintestToken, 3000, true)

        // after (change network to BitKubTestnet)
        await action.click(component.customtokenNetworkGoerliBtn)

        await action.click(component.networkBitkubChain)
    })

    it('[Search] Check Search TextField',async () => {
        //action        
        await action.enterText(component.customtokenSearchTextField, 'kub')

        // assert
        await assert.checkText(component.customtokenKubToken, 'KUB')

        // action
        await action.waitForExist(component.customtokenWToken, 2000, true)

        await action.clearText(component.customtokenSearchTextField)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})