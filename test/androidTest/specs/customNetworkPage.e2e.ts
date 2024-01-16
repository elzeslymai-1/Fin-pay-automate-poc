import { customNetworkComponent } from '../component/customNetworkComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new customNetworkComponent()
const action = new Action()
const assert = new Assertion()

describe('Network Management Page Test Scenario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_APK}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)
        await action.pause(3000)

        await action.click(component.successContinueBtn)

        await action.click(component.homeSettingBtn)

        await action.click(component.settingNetworkManageBtn)
    })

    it('[Display] Check X Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkmanagementXBtn)
    })

    it('[Display] Check Popular tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkmanagementPopularTab)
    })

    it('[Display] Check Custom Network tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkmanagementCustomTab)
    })

    it('[Display] Check Add Custom Network Btn', async () => {
        // action (to display Btn)
        await action.click(component.networkmanagementCustomTab)

        // assert
        await assert.checkElementDisplayed(component.customTabAddcustomnetBtn)

        // after (back to Popular)
        await action.click(component.networkmanagementPopularTab)
    })

    it('[Wording] Check Title text', async () => {
        // assert
        await assert.checkText(component.networkmanagementTitleText, 'Add Network')
    })

    it('[Wording] Check X Btn text', async () => {
        // assert
        await assert.checkText(component.networkmanagementXBtn, '')
    })

    it('[Wording] Check Popular tab text', async () => {
        // assert
        await assert.checkText(component.networkmanagementPopularTab, 'POPULAR')
    })

    it('[Wording] Check Custom Network tab text', async () => {
        // assert
        await assert.checkText(component.networkmanagementCustomTab, 'CUSTOM NETWORK')
    })

    it('[Wording] Check Add Custom Network Btn text', async () => {
        // action (to display Btn)
        await action.click(component.networkmanagementCustomTab)

        // assert
        await assert.checkText(component.customTabAddcustomnetBtn, 'Add Custom Network')

        // after (back to Popular)
        await action.click(component.networkmanagementPopularTab)
    })

    it('[Tap] Check X Btn tap', async () => {
        // action
        await action.click(component.networkmanagementXBtn)

        // assert
        await assert.checkElementDisplayed(component.settingTitleText)

        // after (back to Network Management)
        await action.click(component.settingNetworkManageBtn)
    })

    it('[Tap] Check Custom Network tab tap', async () => {
        // action
        await action.click(component.networkmanagementCustomTab)

        // assert
        await assert.checkElementDisplayed(component.customTabAddcustomnetBtn)
    })

    it('[Tap] Check Popular tab tap', async () => {
        // action
        await action.click(component.networkmanagementPopularTab)

        // assert
        await assert.checkElementDisplayed(component.popularTabBitkubChainTestnet)
    })

    it('[Tap] Check Add Custom Network Btn tap', async () => {
        // action
        await action.click(component.networkmanagementCustomTab)

        await action.click(component.customTabAddcustomnetBtn)

        // assert
        await assert.checkText(component.customnetTitleText, 'Custom Network')
    })
})

describe('Custom Network Page Test Scenario', () => {
    it('[Display] Check Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetBackBtn)
    })

    it('[Display] Check X Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetXBtn)
    })

    it('[Display] Check Network Name Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetNetworkNameInfoBtn)
    })

    it('[Display] Check Network Name TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetNetworkNameTextField)
    })

    it('[Display] Check Network URL Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetNetworkURLInfoBtn)
    })

    it('[Display] Check Network URL TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetNetworkUrlTextField)
    })

    it('[Display] Check Chain ID Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetChainIDInfoBtn)
    })

    it('[Display] Check Chain ID TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetChainIDTextField)
    })

    it('[Display] Check Symbol Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetSymbolInfoBtn)
    })

    it('[Display] Check Symbol TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetSymbolTextField)
    })

    it('[Display] Check Block Explorer URL (Optional) Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetBlockExplorInfoBtn)
    })

    it('[Display] Check Block Explorer URL (Optional) TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetBlockExplorTextField)
    })

    it('[Display] Check Cancel Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetCancelBtn)
    })

    it('[Display] Check Confirm Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customnetConfirmBtn)
    })

    it('[Display] Check Confirm Btn should be disable', async () => {
        // assert
        await assert.checkDisabled(component.customnetConfirmBtn)
    })

    it('[Wording] Check Back Btn text', async () => {
        // assert
        await assert.checkText(component.customnetBackBtn, '')
    })

    it('[Wording] Check X Btn text', async () => {
        // assert
        await assert.checkText(component.customnetXBtn, '')
    })

    it('[Wording] Check Title text', async () => {
        // assert
        await assert.checkText(component.customnetTitleText, 'Custom Network')
    })

    it('[Wording] Check Warning text', async () => {
        // assert
        await assert.checkText(component.customnetWarningText, 'A Malicious network provider can lie about the state of the blockchain and record your network activity. Only add networks you trust.')
    })

    it('[Wording] Check Network Name Info Btn text', async () => {
        // assert
        await assert.checkText(component.customnetNetworkNameInfoBtn, '')
    })

    it('[Wording] Check Network Name text', async () => {
        // assert
        await assert.checkText(component.customnetNetworkNameText, 'Network Name')
    })

    it('[Wording] Check Network URL Info Btn text', async () => {
        // assert
        await assert.checkText(component.customnetNetworkURLInfoBtn, '')
    })

    it('[Wording] Check Network URL text', async () => {
        // assert
        await assert.checkText(component.customnetNetworkURLText, 'Network URL')
    })

    it('[Wording] Check Chain ID Info Btn text', async () => {
        // assert
        await assert.checkText(component.customnetChainIDInfoBtn, '')
    })

    it('[Wording] Check Chain ID text', async () => {
        // assert
        await assert.checkText(component.customnetChainIDText, 'Chain ID')
    })

    it('[Wording] Check Symbol Info Btn text', async () => {
        // assert
        await assert.checkText(component.customnetSymbolInfoBtn, '')
    })

    it('[Wording] Check Symbol text', async () => {
        // assert
        await assert.checkText(component.customnetSymbolText, 'Symbol')
    })

    it('[Wording] Check Block Explorer URL (Optional) Info Btn text', async () => {
        // assert
        await assert.checkText(component.customnetBlockExplorInfoBtn, '')
    })

    it('[Wording] Check Block Explorer URL (Optional) text', async () => {
        // assert
        await assert.checkText(component.customnetBlockExplorText, 'Block Explorer URL (Optional)')
    })

    it('[Wording] Check Cancel Btn text', async () => {
        // assert
        await assert.checkText(component.customnetCancelBtn, 'Cancel')
    })

    it('[Wording] Check Confirm Btn text', async () => {
        // assert
        await assert.checkText(component.customnetConfirmBtn, 'Confirm')
    })

    it('[Tap] Check Back Btn tap', async () => {
        // action
        await action.click(component.customnetBackBtn)

        // assert
        await assert.checkElementDisplayed(component.networkmanagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customTabAddcustomnetBtn)
    })

    it('[Tap] Check X Btn tap', async () => {
        // action
        await action.click(component.customnetXBtn)

        // assert
        await assert.checkElementDisplayed(component.networkmanagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customTabAddcustomnetBtn)
    })

    it('[Tap] Check Network Name Info Btn tap', async () => {
        // action
        await action.click(component.customnetNetworkNameInfoBtn)

        // assert
        await assert.checkText(component.customnetNetworkNameInfoText, 'The name associated with this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Network URL Info Btn tap', async () => {
        // action
        await action.click(component.customnetNetworkURLInfoBtn)

        // assert
        await assert.checkText(component.customnetNetworkURLInfoText, 'The URL used to access this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Chain ID Info Btn tap', async () => {
        // action
        await action.click(component.customnetChainIDInfoBtn)

        // assert
        await assert.checkText(component.customnetChainIDInfoText, 'The chain ID used to sign transactions for this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Symbol Info Btn tap', async () => {
        // action
        await action.click(component.customnetSymbolInfoBtn)

        // assert
        await assert.checkText(component.customnetSymbolInfoText, 'The ticker symbol displayed for this network’s currency.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Block Explorer URL (Optional) Info Btn tap', async () => {
        // action
        await action.click(component.customnetBlockExplorInfoBtn)

        // assert
        await assert.checkText(component.customnetBlockExplorInfoText, 'The URL used as the block explorer for this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Cancel Btn tap', async () => {
        // action
        await action.click(component.customnetCancelBtn)

        // assert
        await assert.checkElementDisplayed(component.networkmanagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customTabAddcustomnetBtn)
    })

    it('[Validation] Check Error Message Text Field', async () => {
        // action
        await action.click(component.customnetNetworkNameTextField)

        // Press 'Done' on android keyboard device
        await action.Tap(1335, 2831)

        await action.click(component.customnetSymbolTextField)

        // Press 'Done' on android keyboard device
        await action.Tap(1335, 2831)

        // assert
        await assert.checkText(component.customnetNetworkNameRequired, 'Network Name is required')
        await assert.checkText(component.customnetSymbolRequired, 'Symbol is required')
    })

    it('[Function] Check Add Custom Network Success', async () => {
        // action
        await action.enterText(component.customnetNetworkUrlTextField, `${process.env.TEST_URL}`)
        await action.pause(2000)

        // assert
        await assert.checkText(component.customnetNetworkNameTextField, 'goerli')

        // action
        await action.click(component.customnetConfirmBtn)

        await action.click(component.addnetsuccessSwitchgoerliBtn)

        // assert
        await assert.checkText(component.homeGoerlichain, 'goerli')
        await assert.checkText(component.homeETHToken, 'ETH')

        // after (back to Network Management)
        await action.click(component.homeSettingBtn)
        await action.click(component.settingNetworkManageBtn)
    })
})

describe('Confirm Remove Chain Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.networkmanagementCustomTab)

        await action.click(component.customTabGoerliRemoveBtn)
    })

    it('[Display] Check Cancel Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.confirmRemoveCancelBtn)
    })

    it('[Display] Check Confirm Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.confirmRemoveRemoveBtn)
    })

    it('[Wording] Check Title Text', async () => {
        // assert
        await assert.checkText(component.confirmRemoveTitleText, 'Remove goerli Chain')
    })

    it('[Wording] Check Text', async () => {
        // assert
        await assert.checkText(component.confirmRemoveText, 'Assets on removed networks will no longer be displayed.')
    })

    it('[Wording] Check Remove Btn text', async () => {
        // assert
        await assert.checkText(component.confirmRemoveRemoveBtn, 'Remove')
    })

    it('[Wording] Check Cancel Btn text', async () => {
        // assert
        await assert.checkText(component.confirmRemoveCancelBtn, 'Cancel')
    })

    it('[Tap] Check Cancel Btn tap', async () => {
        // action
        await action.click(component.confirmRemoveCancelBtn)

        // assert
        await assert.checkElementDisplayed(component.networkmanagementTitleText)

        // after (back to Confirm Remove pop-up)
        await action.click(component.customTabGoerliRemoveBtn)
    })

    it('[Tap] Check Remove Btn', async () => {
        // action
        await action.click(component.confirmRemoveRemoveBtn)

        // action (should not exist)
        await action.waitForExist(component.customTabGoerliRemoveBtn, 3000, true)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})