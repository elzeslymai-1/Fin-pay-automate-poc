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

    it('[Tap] => Check Network Btn Tap',async () => {
        // action
        await action.click(component.customTokenNetworkBtn)

        // assert
        await assert.checkElementDisplayed(component.networkTitleText)

        // after (close network pop-up)
        await action.click(component.customTokenTitleText)
    })

    it('[Tap] => Check Add Custom Token Btn Tap',async () => {
        // action
        await action.click(component.customTokenAddCustomTokenBtn)

        // assert
        await assert.checkElementDisplayed(component.addTokenTitleText)

        // after (back to Custom Token)
        await action.click(component.addTokenBackBtn)
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

    it('[Search] => Check Search TextField',async () => {
        //action        
        await action.enterText(component.customTokenSearchTextField, 'kub')

        // assert
        await assert.checkText(component.customTokenKubToken, 'KUB')
        await assert.checkElementNotDisplayed(component.customTokenWToken)

        await action.clearText(component.customTokenSearchTextField)
    })
})

describe('Add Custom Token Test Scenario',() => {
    beforeAll(async() => {
        await action.click(component.customTokenAddCustomTokenBtn)
    })

    it('[Display] => Check Back Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.addTokenBackBtn)
    })

    it('[Display] => Check Token address TextField',async () => {
        // assert
        await assert.checkElementDisplayed(component.addTokenAddressTextField)
    })

    it('[Display] => Check Paste Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.addTokenPasteBtn)
    })

    it('[Display] => Check CheckBox',async () => {
        // action
        await action.enterText(component.addTokenAddressTextField, `${process.env.TEST_ADDTOKEN}`)

        // assert
        await assert.checkElementDisplayed(component.addTokenCheckbox)
    })

    it('[Display] => Check Cancel Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.addTokenCancelBtn)
    })

    it('[Display] => Check Confirm Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.addTokenConfirmBtn)
    })

    it('[Display] => Check Confirm should be disable',async () => {
        // assert
        await assert.checkDisabled(component.addTokenConfirmBtn)
    })

    it('[Display] => Check Back Btn Text',async () => {
        // assert
        await assert.checkText(component.addTokenBackBtn, '')
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.addTokenTitleText, 'Custom token')
    })

    it('[Wording] => Check Token address Head Text',async () => {
        // assert
        await assert.checkText(component.addTokenAddressHeadText, 'Token address')
    })

    it('[Wording] => Check Paste Btn Text',async () => {
        // assert
        await assert.checkText(component.addTokenPasteBtn, '')
    })

    it('[Wording] => Check Fins token Text',async () => {
        // assert
        await assert.checkText(component.addTokenFinToken, 'fins token')
    })

    it('[Wording] => Check Token address form Text',async () => {
        // assert
        await assert.checkText(component.addTokenAddress, 'Token Address')
    })

    it('[Wording] => Check Token symbol form Text',async () => {
        // assert
        await assert.checkText(component.addTokenSymbol, 'Token Symbol')
    })

    it('[Wording] => Check Token name form Text',async () => {
        // assert
        await assert.checkText(component.addTokenName, 'Token Name')
    })

    it('[Wording] => Check Token balance form Text',async () => {
        // assert
        await assert.checkText(component.addTokenBalance, 'Token Balance')
    })

    it('[Wording] => Check Warning Text',async () => {
        // assert
        await assert.checkText(component.addTokenWarningText, 'By adding this as a custom token, you confirm that all further interactions with it are at your own risk.')
    })

    it('[Wording] => Check CheckBox Text',async () => {
        // assert
        await assert.checkText(component.addTokenCheckboxText, 'I understand and agree')
    })

    it('[Wording] => Check Cancel Btn Text',async () => {
        // assert
        await assert.checkText(component.addTokenCancelBtn, 'Cancel')
    })

    it('[Wording] => Check Confirm Btn Text',async () => {
        // assert
        await assert.checkText(component.addTokenConfirmBtn, 'Confirm')
    })

    it('[Tap] => Check Back Btn Tap',async () => {
        // action
        await action.click(component.addTokenBackBtn)

        // assert
        await assert.checkElementDisplayed(component.customTokenAddCustomTokenBtn)

        // after (back to Add Token)
        await action.click(component.customTokenAddCustomTokenBtn)
    })

    it('[Tap] => Check Paste Btn Tap',async () => {
        // aciton
        await action.setClipboard('PasteButton')

        await action.click(component.addTokenPasteBtn)

        // assert
        await assert.checkText(component.addTokenAddressTextField, 'PasteButton')

        // after (clear text)
        await action.clearText(component.addTokenAddressTextField)
    })

    it('[Tap] => Check CheckBox Btn Tap',async () => {
        // action
        await action.enterText(component.addTokenAddressTextField, `${process.env.TEST_ADDTOKEN}`)
        await action.pause(3000)

        await action.click(component.addTokenCheckbox)

        // assert
        await assert.checkNotDisabled(component.addTokenConfirmBtn)
    })

    it('[Tap] => Check Cancel Btn Tap',async () => {
        // aciton
        await action.click(component.addTokenCancelBtn)

        // assert
        await assert.checkElementDisplayed(component.customTokenAddCustomTokenBtn)

        // after (back to Add Token)
        await action.click(component.customTokenAddCustomTokenBtn)
    })

    it('[Tap] => Check Confirm Btn Tap',async () => {
        // action
        await action.enterText(component.addTokenAddressTextField, `${process.env.TEST_ADDTOKEN}`)
        await action.pause(3000)

        await action.click(component.addTokenCheckbox)

        await action.click(component.addTokenConfirmBtn)

        // assert
        await assert.checkElementDisplayed(component.customTokenFinTestToken)
    })

    it('[Tap] => Check Remove Btn Tap',async () => {
        // action
        await action.click(component.customTokenRemoveBtn)

        // assert
        await assert.checkElementNotDisplayed(component.customTokenWToken)

        // after (back to Add Token)
        await action.click(component.customTokenAddCustomTokenBtn)
    })

    it('[Search] => Check token already exist',async () => {
        // action
        await action.enterText(component.addTokenAddressTextField, `${process.env.TEST_ADDTOKEN}`)

        // assert
        await assert.checkElementDisplayed(component.addTokenAlreadyExistText)
    })

    //* This case is still bug, sometime don't show 'No Result' text.
    it('[Search] => Check Add Custom Token no result',async () => {
        // action
        await action.enterText(component.addTokenAddressTextField, 'tokenaddress')
        await action.pause(10000)

        // assert
        await assert.checkElementDisplayed(component.addTokenNoResultText)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})