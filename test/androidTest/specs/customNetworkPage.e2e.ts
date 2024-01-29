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
        await assert.checkElementDisplayed(component.networkManagementXBtn)
    })

    it('[Display] Check Popular tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkManagementPopularTab)
    })

    it('[Display] Check Custom Network tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkManagementCustomTab)
    })

    it('[Display] Check Add Custom Network Btn', async () => {
        // action (to display Btn)
        await action.click(component.networkManagementCustomTab)

        // assert
        await assert.checkElementDisplayed(component.customTabAddCustomNetworkBtn)

        // after (back to Popular)
        await action.click(component.networkManagementPopularTab)
    })

    it('[Wording] Check Title text', async () => {
        // assert
        await assert.checkText(component.networkManagementTitleText, 'Add Network')
    })

    it('[Wording] Check X Btn text', async () => {
        // assert
        await assert.checkText(component.networkManagementXBtn, '')
    })

    it('[Wording] Check Popular tab text', async () => {
        // assert
        await assert.checkText(component.networkManagementPopularTab, 'POPULAR')
    })

    it('[Wording] Check Custom Network tab text', async () => {
        // assert
        await assert.checkText(component.networkManagementCustomTab, 'CUSTOM NETWORK')
    })

    it('[Wording] Check Add Custom Network Btn text', async () => {
        // action (to display Btn)
        await action.click(component.networkManagementCustomTab)

        // assert
        await assert.checkText(component.customTabAddCustomNetworkBtn, 'Add Custom Network')

        // after (back to Popular)
        await action.click(component.networkManagementPopularTab)
    })

    it('[Tap] Check X Btn tap', async () => {
        // action
        await action.click(component.networkManagementXBtn)

        // assert
        await assert.checkElementDisplayed(component.settingTitleText)

        // after (back to Network Management)
        await action.click(component.settingNetworkManageBtn)
    })

    it('[Tap] Check Custom Network tab tap', async () => {
        // action
        await action.click(component.networkManagementCustomTab)

        // assert
        await assert.checkElementDisplayed(component.customTabAddCustomNetworkBtn)
    })

    it('[Tap] Check Popular tab tap', async () => {
        // action
        await action.click(component.networkManagementPopularTab)

        // assert
        await assert.checkElementDisplayed(component.popularTabBitkubChainTestnet)
    })

    it('[Tap] Check Add Custom Network Btn tap', async () => {
        // action
        await action.click(component.networkManagementCustomTab)

        await action.click(component.customTabAddCustomNetworkBtn)

        // assert
        await assert.checkText(component.customNetworkTitleText, 'Custom Network')
    })
})

describe('Custom Network Page Test Scenario', () => {
    it('[Display] Check Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkBackBtn)
    })

    it('[Display] Check X Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkXBtn)
    })

    it('[Display] Check Network Name Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkNameInfoBtn)
    })

    it('[Display] Check Network Name TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkNameTextField)
    })

    it('[Display] Check Network URL Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkURLInfoBtn)
    })

    it('[Display] Check Network URL TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkUrlTextField)
    })

    it('[Display] Check Chain ID Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkChainIDInfoBtn)
    })

    it('[Display] Check Chain ID TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkChainIDTextField)
    })

    it('[Display] Check Symbol Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkSymbolInfoBtn)
    })

    it('[Display] Check Symbol TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkSymbolTextField)
    })

    it('[Display] Check Block Explorer URL (Optional) Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkBlockExplorerInfoBtn)
    })

    it('[Display] Check Block Explorer URL (Optional) TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkBlockExplorerTextField)
    })

    it('[Display] Check Cancel Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkCancelBtn)
    })

    it('[Display] Check Confirm Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkConfirmBtn)
    })

    it('[Display] Check Confirm Btn should be disable', async () => {
        // assert
        await assert.checkDisabled(component.customNetworkConfirmBtn)
    })

    it('[Wording] Check Back Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkBackBtn, '')
    })

    it('[Wording] Check X Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkXBtn, '')
    })

    it('[Wording] Check Title text', async () => {
        // assert
        await assert.checkText(component.customNetworkTitleText, 'Custom Network')
    })

    it('[Wording] Check Warning text', async () => {
        // assert
        await assert.checkText(component.customNetworkWarningText, 'A Malicious network provider can lie about the state of the blockchain and record your network activity. Only add networks you trust.')
    })

    it('[Wording] Check Network Name Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkNameInfoBtn, '')
    })

    it('[Wording] Check Network Name text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkNameText, 'Network Name')
    })

    it('[Wording] Check Network URL Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkURLInfoBtn, '')
    })

    it('[Wording] Check Network URL text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkURLText, 'Network URL')
    })

    it('[Wording] Check Chain ID Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkChainIDInfoBtn, '')
    })

    it('[Wording] Check Chain ID text', async () => {
        // assert
        await assert.checkText(component.customNetworkChainIDText, 'Chain ID')
    })

    it('[Wording] Check Symbol Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkSymbolInfoBtn, '')
    })

    it('[Wording] Check Symbol text', async () => {
        // assert
        await assert.checkText(component.customNetworkSymbolText, 'Symbol')
    })

    it('[Wording] Check Block Explorer URL (Optional) Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkBlockExplorerInfoBtn, '')
    })

    it('[Wording] Check Block Explorer URL (Optional) text', async () => {
        // assert
        await assert.checkText(component.customNetworkBlockExplorerText, 'Block Explorer URL (Optional)')
    })

    it('[Wording] Check Cancel Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkCancelBtn, 'Cancel')
    })

    it('[Wording] Check Confirm Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkConfirmBtn, 'Confirm')
    })

    it('[Tap] Check Back Btn tap', async () => {
        // action
        await action.click(component.customNetworkBackBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customTabAddCustomNetworkBtn)
    })

    it('[Tap] Check X Btn tap', async () => {
        // action
        await action.click(component.customNetworkXBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customTabAddCustomNetworkBtn)
    })

    it('[Tap] Check Network Name Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkNetworkNameInfoBtn)

        // assert
        await assert.checkText(component.customNetworkNetworkNameInfoText, 'The name associated with this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Network URL Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkNetworkURLInfoBtn)

        // assert
        await assert.checkText(component.customNetworkNetworkURLInfoText, 'The URL used to access this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Chain ID Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkChainIDInfoBtn)

        // assert
        await assert.checkText(component.customNetworkChainIDInfoText, 'The chain ID used to sign transactions for this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Symbol Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkSymbolInfoBtn)

        // assert
        await assert.checkText(component.customNetworkSymbolInfoText, 'The ticker symbol displayed for this network’s currency.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Block Explorer URL (Optional) Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkBlockExplorerInfoBtn)

        // assert
        await assert.checkText(component.customNetworkBlockExplorerInfoText, 'The URL used as the block explorer for this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.Tap(1000, 2800)
    })

    it('[Tap] Check Cancel Btn tap', async () => {
        // action
        await action.click(component.customNetworkCancelBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customTabAddCustomNetworkBtn)
    })

    it('[Validation] Check Error Message Text Field', async () => {
        // action
        await action.click(component.customNetworkNetworkNameTextField)

        // Press 'Done' on android keyboard device
        await action.Tap(1335, 2831)

        await action.click(component.customNetworkSymbolTextField)

        // Press 'Done' on android keyboard device
        await action.Tap(1335, 2831)

        // assert
        await assert.checkText(component.customNetworkNetworkNameRequired, 'Network Name is required')
        await assert.checkText(component.customNetworkSymbolRequired, 'Symbol is required')
    })

    it('[Function] Check Add Custom Network Success', async () => {
        // action
        await action.enterText(component.customNetworkNetworkUrlTextField, `${process.env.TEST_URL}`)
        await action.pause(2000)

        // assert
        await assert.checkText(component.customNetworkNetworkNameTextField, 'goerli')

        // action
        await action.click(component.customNetworkConfirmBtn)

        await action.click(component.addNetworkSuccessSwitchGoerliBtn)

        // assert
        await assert.checkText(component.homeGoerliChain, 'goerli')
        await assert.checkText(component.homeETHToken, 'ETH')

        // after (back to Network Management)
        await action.click(component.homeSettingBtn)
        await action.click(component.settingNetworkManageBtn)
    })
})

describe('Confirm Remove Chain Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.networkManagementCustomTab)

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
        await assert.checkElementDisplayed(component.networkManagementTitleText)

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