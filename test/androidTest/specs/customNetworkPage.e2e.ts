import { customNetworkComponent } from '../component/customNetworkComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'

const component = new customNetworkComponent()
const action = new Action()
const assert = new Assertion()

describe('Network Management Page Test Scenario', () => {
    beforeAll(async () => {
        await action.installApps(`${process.env.PATH_ANDROID_APP}`)
        await action.launchAndroidApps(`${process.env.PACKAGE_ID}`)

        await action.click(component.splashScreenCreateWalletBtn)

        await action.click(component.createWallet12wordBtn)

        await action.click(component.createWalletContinueBtn)
        await action.pause(5000)

        await action.click(component.successContinueBtn)

        await action.click(component.homeSettingBtn)

        await action.click(component.settingNetworkManageBtn)
    })

    it('[Display] => Check X Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkManagementXBtn)
    })

    it('[Display] => Check Popular tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkManagementPopularTab)
    })

    it('[Display] => Check Custom Network tab', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkManagementCustomTab)
    })

    it('[Display] => Check Add Custom Network Btn', async () => {
        // action (to display Btn)
        await action.click(component.networkManagementCustomTab)

        // assert
        await assert.checkElementDisplayed(component.customTabAddCustomNetworkBtn)

        // after (back to Popular)
        await action.click(component.networkManagementPopularTab)
    })

    it('[Wording] => Check Title text', async () => {
        // assert
        await assert.checkText(component.networkManagementTitleText, 'Add Network')
    })

    it('[Wording] => Check X Btn text', async () => {
        // assert
        await assert.checkText(component.networkManagementXBtn, '')
    })

    it('[Wording] => Check Popular tab text', async () => {
        // assert
        await assert.checkText(component.networkManagementPopularTab, 'POPULAR')
    })

    it('[Wording] => Check Custom Network tab text', async () => {
        // assert
        await assert.checkText(component.networkManagementCustomTab, 'CUSTOM NETWORK')
    })

    it('[Wording] => => Check No Custom Network Text',async () => {
        // action (to display Text)
        await action.click(component.networkManagementCustomTab)

        // assert
        await assert.checkText(component.customTabNoNetworkText, 'No Custom Network')

        // after (back to Popular)
        await action.click(component.networkManagementPopularTab)
    })

    it('[Wording] => Check Add Custom Network Btn text', async () => {
        // action (to display Btn)
        await action.click(component.networkManagementCustomTab)

        // assert
        await assert.checkText(component.customTabAddCustomNetworkBtn, 'Add Custom Network')

        // after (back to Popular)
        await action.click(component.networkManagementPopularTab)
    })

    it('[Tap] => Check X Btn tap', async () => {
        // action
        await action.click(component.networkManagementXBtn)

        // assert
        await assert.checkElementDisplayed(component.settingTitleText)

        // after (back to Network Management)
        await action.click(component.settingNetworkManageBtn)
    })

    it('[Tap] => Check Custom Network tab tap', async () => {
        // action
        await action.click(component.networkManagementCustomTab)

        // assert
        await assert.checkElementDisplayed(component.customTabAddCustomNetworkBtn)
    })

    it('[Tap] => Check Popular tab tap', async () => {
        // action
        await action.click(component.networkManagementPopularTab)

        // assert
        await assert.checkElementDisplayed(component.popularTabBitkubChainTestnet)
    })

    it('[Tap] => Check Add Custom Network Btn tap', async () => {
        // action
        await action.click(component.networkManagementCustomTab)

        await action.click(component.customTabAddCustomNetworkBtn)

        // assert
        await assert.checkText(component.customNetworkTitleText, 'Custom Network')
    })
})

describe('Custom Network Page Test Scenario', () => {
    it('[Display] => Check Back Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkBackBtn)
    })

    it('[Display] => Check X Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkXBtn)
    })

    it('[Display] => Check Network Name Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkNameInfoBtn)
    })

    it('[Display] => Check Network Name TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkNameTextField)
    })

    it('[Display] => Check Network URL Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkURLInfoBtn)
    })

    it('[Display] => Check Network URL TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkURLTextField)
    })

    it('[Display] => Check Chain ID Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkChainIDInfoBtn)
    })

    it('[Display] => Check Chain ID TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkChainIDTextField)
    })

    it('[Display] => Check Symbol Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkSymbolInfoBtn)
    })

    it('[Display] => Check Symbol TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkSymbolTextField)
    })

    it('[Display] => Check Block Explorer URL (Optional) Info Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkExplorerInfoBtn)
    })

    it('[Display] => Check Block Explorer URL (Optional) TextField', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkExplorerTextField)
    })

    it('[Display] => Check Cancel Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkCancelBtn)
    })

    it('[Display] => Check Confirm Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkConfirmBtn)
    })

    it('[Display] => Check Confirm Btn should be disable', async () => {
        // assert
        await assert.checkDisabled(component.customNetworkConfirmBtn)
    })

    it('[Wording] => Check Back Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkBackBtnText, '')
    })

    it('[Wording] => Check X Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkXBtn, '')
    })

    it('[Wording] => Check Title text', async () => {
        // assert
        await assert.checkText(component.customNetworkTitleText, 'Custom Network')
    })

    it('[Wording] => Check Warning text', async () => {
        // assert
        await assert.checkText(component.customNetworkWarningText, 'A Malicious network provider can lie about the state of the blockchain and record your network activity. Only add networks you trust.')
    })

    it('[Wording] => Check Network Name Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkNameInfoBtnText, '')
    })

    it('[Wording] => Check Network Name text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkNameText, 'Network Name')
    })

    it('[Wording] => Check Network URL Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkURLInfoBtnText, '')
    })

    it('[Wording] => Check Network URL text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkURLText, 'Network URL')
    })

    it('[Wording] => Check Chain ID Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkChainIDInfoBtnText, '')
    })

    it('[Wording] => Check Chain ID text', async () => {
        // assert
        await assert.checkText(component.customNetworkChainIDText, 'Chain ID')
    })

    it('[Wording] => Check Symbol Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkSymbolInfoBtnText, '')
    })

    it('[Wording] => Check Symbol text', async () => {
        // assert
        await assert.checkText(component.customNetworkSymbolText, 'Symbol')
    })

    it('[Wording] => Check Block Explorer URL (Optional) Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkExplorerInfoBtnText, '')
    })

    it('[Wording] => Check Block Explorer URL (Optional) text', async () => {
        // assert
        await assert.checkText(component.customNetworkExplorerText, 'Block Explorer URL (Optional)')
    })

    it('[Wording] => Check Cancel Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkCancelBtnText, 'Cancel')
    })

    it('[Wording] => Check Confirm Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkConfirmBtnText, 'Confirm')
    })

    it('[Tap] => Check Back Btn tap', async () => {
        // action
        await action.click(component.customNetworkBackBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customTabAddCustomNetworkBtn)
    })

    it('[Tap] => Check X Btn tap', async () => {
        // action
        await action.click(component.customNetworkXBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customTabAddCustomNetworkBtn)
    })

    it('[Tap] => Check Network Name Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkNetworkNameInfoBtn)

        // assert
        await assert.checkText(component.customNetworkNetworkNameInfoText, 'The name associated with this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.click(component.customNetworkLayout)
    })

    it('[Tap] => Check Network URL Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkNetworkURLInfoBtn)

        // assert
        await assert.checkText(component.customNetworkNetworkURLInfoText, 'The URL used to access this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.click(component.customNetworkLayout)
    })

    it('[Tap] => Check Chain ID Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkChainIDInfoBtn)

        // assert
        await assert.checkText(component.customNetworkChainIDInfoText, 'The chain ID used to sign transactions for this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.click(component.customNetworkLayout)
    })

    it('[Tap] => Check Symbol Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkSymbolInfoBtn)

        // assert
        await assert.checkText(component.customNetworkSymbolInfoText, 'The ticker symbol displayed for this network’s currency.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.click(component.customNetworkLayout)
    })

    it('[Tap] => Check Block Explorer URL (Optional) Info Btn tap', async () => {
        // action
        await action.click(component.customNetworkExplorerInfoBtn)

        // assert
        await assert.checkText(component.customNetworkExplorerInfoText, 'The URL used as the block explorer for this network.')
        await action.pause(1000)

        // after (tap out of pop-up)
        await action.click(component.customNetworkLayout)
    })

    it('[Tap] => Check Cancel Btn tap', async () => {
        // action
        await action.click(component.customNetworkCancelBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customTabAddCustomNetworkBtn)
    })

    it('[Function] => Check Add Custom Network Success', async () => {
        // action
        await action.enterText(component.customNetworkNetworkURLTextField, `${process.env.GOERLI_TEST_NET_URL}`)
        await action.pause(2000)

        // assert
        await assert.checkText(component.customNetworkNetworkNameTextField, 'goerli')

        // action
        await action.click(component.customNetworkConfirmBtn)

        await action.click(component.addNetworkSuccessSwitchGoerliBtn)

        // assert
        await assert.checkText(component.homeChain, 'goerli')
        await assert.checkText(component.homeETHToken, 'ETH')

        // after (back to Network Management)
        await action.click(component.homeSettingBtn)
        await action.click(component.settingNetworkManageBtn)
    })

    it('[Validation] => Check Message Network Name Required', async () => {
        // action (go to Add Custom Network)
        await action.click(component.networkManagementCustomTab)

        await action.click(component.customTabAddCustomNetworkBtn)

        // action
        await action.click(component.customNetworkNetworkNameTextField)

        // action for deselect the textfield
        await action.click(component.customNetworkWarningText)

        // assert
        await assert.checkText(component.customNetworkNetworkNameError, 'Network Name is required')
    })

    it('[Validation] => Check Message Symbol Required', async () => {
        // action
        await action.click(component.customNetworkSymbolTextField)

        // action for deselect the textfield
        await action.click(component.customNetworkWarningText)

        // assert
        await assert.checkText(component.customNetworkSymbolError, 'Symbol is required')
    })

    it('[Validation] => Check Message Chain ID already exist', async () => {
        // action
        await action.enterText(component.customNetworkNetworkURLTextField, `${process.env.GOERLI_TEST_NET_URL}`)
        await action.pause(2000)

        // action for deselect the textfield
        await action.click(component.customNetworkWarningText)

        // assert
        await assert.checkText(component.customNetworkChainIdError, 'This chain Id 5 already exists')
    })

    it('[Validation] => Check Message Wrong Chain ID', async () => {
        // action
        await action.enterText(component.customNetworkChainIDTextField, '55')

        // action for deselect the textfield
        await action.click(component.customNetworkWarningText)

        // assert
        await assert.checkText(component.customNetworkChainIdError, 'The RPC URL you have entered returned a different chain ID (5). Please update the Chain ID to match the RPC URL of the network you are trying to add.')
    })

    it('[Validation] => Check Message Invalid URL',async () => {
        // action
        await action.enterText(component.customNetworkNetworkURLTextField, 'HTTPS')

        // action for deselect the textfield
        await action.click(component.customNetworkWarningText)

        // assert
        await assert.checkText(component.customNetworkURLError, 'Invalid Network URL')
    })

    it('[Validation] => Check Message Block Explorer Format', async () => {
        // action
        await action.enterText(component.customNetworkExplorerTextField, 'text')

        // action for deselect the textfield
        await action.click(component.customNetworkWarningText)

        // assert
        await assert.checkText(component.customNetworkExplorerError, 'Invalid block explorer url.')

        // after (back to Network Management)
        await action.click(component.customNetworkCancelBtn)
    })
})

describe('Add Network Success Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.networkManagementCustomTab)

        await action.click(component.customTabGoerliRemoveBtn)

        await action.click(component.confirmRemoveRemoveBtn)

        await action.click(component.customTabAddCustomNetworkBtn)

        await action.enterText(component.customNetworkNetworkURLTextField, `${process.env.GOERLI_TEST_NET_URL}`)
        await action.pause(3000)

        await action.click(component.customNetworkConfirmBtn)
    })

    it('[Display] => Check Switch to Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.addNetworkSuccessSwitchGoerliBtn)
    })

    it('[Display] => Check Dismiss Btn',async () => {
        // assert
        await assert.checkElementDisplayed(component.addNetworkSuccessDismissBtn)
    })

    it('[Wording] => Check Title Text',async () => {
        // assert
        await assert.checkText(component.addNetworkSuccessTitleText, 'Add a network success')
    })

    it('[Wording] => Check Description Text',async () => {
        // assert
        await assert.checkText(component.addNetworkSuccessDescriptionText, 'Now! you have the goerli network added to your wallet.')
    })

    it('[Wording] => Check Switch to Btn Text',async () => {
        // assert
        await assert.checkText(component.addNetworkSuccessSwitchGoerliBtn, 'Switch to goerli')
    })

    it('[Wording] => Check Dismiss Btn Text',async () => {
        // assert
        await assert.checkText(component.addNetworkSuccessDismissBtn, 'Dismiss')
    })

    it('[Tap] => Check Switch to Btn Tap',async () => {
        // action
        await action.click(component.addNetworkSuccessSwitchGoerliBtn)

        // assert
        await assert.checkText(component.homeChain, 'goerli')

        // action
        await action.click(component.homeSettingBtn)
        await action.click(component.settingNetworkManageBtn)

        await action.click(component.networkManagementCustomTab)

        // assert
        await assert.checkElementDisplayed(component.customTabGoerliBtn)

        // after (remove and back to Add Custom Network Success)
        await action.click(component.customTabGoerliRemoveBtn)

        await action.click(component.confirmRemoveRemoveBtn)

        await action.click(component.customTabAddCustomNetworkBtn)

        await action.enterText(component.customNetworkNetworkURLTextField, `${process.env.GOERLI_TEST_NET_URL}`)
        await action.pause(3000)

        await action.click(component.customNetworkConfirmBtn)
    })

    it('[Tap] => Check Dismiss Btn Tap',async () => {
        // action
        await action.click(component.addNetworkSuccessDismissBtn)

        // assert
        await assert.checkText(component.homeChain, 'Bitkub Chain Testnet')

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

    it('[Display] => Check Cancel Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.confirmRemoveCancelBtn)
    })

    it('[Display] => Check Confirm Btn', async () => {
        // assert
        await assert.checkElementDisplayed(component.confirmRemoveRemoveBtn)
    })

    it('[Wording] => Check Title Text', async () => {
        // assert
        await assert.checkText(component.confirmRemoveTitleText, 'Remove goerli Chain')
    })

    it('[Wording] => Check Text', async () => {
        // assert
        await assert.checkText(component.confirmRemoveText, 'Assets on removed networks will no longer be displayed.')
    })

    it('[Wording] => Check Remove Btn text', async () => {
        // assert
        await assert.checkText(component.confirmRemoveRemoveBtnText, 'Remove')
    })

    it('[Wording] => Check Cancel Btn text', async () => {
        // assert
        await assert.checkText(component.confirmRemoveCancelBtnText, 'Cancel')
    })

    it('[Tap] => Check Cancel Btn tap', async () => {
        // action
        await action.click(component.confirmRemoveCancelBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after (back to Confirm Remove pop-up)
        await action.click(component.customTabGoerliRemoveBtn)
    })

    it('[Tap] => Check Remove Btn', async () => {
        // action
        await action.click(component.confirmRemoveRemoveBtn)

        // assert
        await assert.checkElementNotDisplayed(component.customTabGoerliBtn)
        await assert.checkElementDisplayed(component.customTabNoNetworkText)
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.PACKAGE_ID}`)
    })
})