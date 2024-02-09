import { CustomNetworkComponent } from '../component/customNetworkComponent.js'
import { Action } from '../../mainComponent/mainFunction/Action.js'
import { Assertion } from '../../mainComponent/mainFunction/Assert.js'
import { CustomNetworkModel } from '../component/customNetworkComponent.js'
import { ImportWalletModel } from '../component/importWalletComponent.js'

const component = new CustomNetworkComponent()
const action = new Action()
const assert = new Assertion()
const importWalletModel = new ImportWalletModel()
const customNetworkModel = new CustomNetworkModel()

describe('Custom Network Page Test Scenario', () => {
    beforeAll(async () => {
        // before
        await action.installApps('apps/FinPay.app')     // install apps
        await action.launchApps(`${process.env.BUNDLE_ID}`)     //launch app
        await importWalletModel.importWallet(`${process.env.MNEMONIC_PHRASE_NO_BALANCE}`)   // import wallet
        await action.click(component.homeTabSettingBtn)     // go to setting page
        await action.click(component.settingNetworkManageBtn)     // go to network management page
    })

    it('[Display] => Check X Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkManagementCloseIconBtn)
    })

    it('[Display] => Check Popular tab Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkManagementPopularTab)
    })

    it('[Display] => Check Custom Network tab Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.networkManagementCustomTab)
    })

    it('[Display] => Check Add Custom Network Btn Displayed', async () => {
        // action
        await action.click(component.networkManagementCustomTab)    // go to custom network tab

        // assert
        await assert.checkElementDisplayed(component.customNetworkTabAddCustomNetworkBtn)

        // after (back to Popular)
        await action.click(component.networkManagementPopularTab)
    })

    it('[Wording] => Check Title Wording', async () => {
        // assert
        await assert.checkText(component.networkManagementTitleText, 'Add Network')
    })

    it('[Wording] => Check X Btn Wording', async () => {
        // assert
        await assert.checkText(component.networkManagementCloseIconBtn, '')
    })

    it('[Wording] => Check Popular tab Wording', async () => {
        // assert
        await assert.checkText(component.networkManagementPopularTab, 'tab')    // popular tab element return value = tab
    })

    it('[Wording] => Check Custom Network tab Wording', async () => {
        // assert
        await assert.checkText(component.networkManagementCustomTab, 'tab') // custom network tab element return value = tab
    })

    it('[Wording] => Check No Custom Network Wording', async () => {
        // action
        await action.click(component.networkManagementCustomTab)    // go to custom network tab

        // assert
        await assert.checkText(component.customNetworkTabNoCustomNetworkText, 'No Custom Network')
    })

    it('[Wording] => Check Add Custom Network Btn Wording', async () => {
        // assert
        await assert.checkText(component.customNetworkTabAddCustomNetworkBtn, 'Add Custom Network')
    })

    it('[Tap] => Check Tap X Btn tap', async () => {
        // action
        await action.click(component.networkManagementCloseIconBtn)

        // assert
        await assert.checkText(component.settingTitleText, 'Setting')

        // after
        await action.click(component.settingNetworkManageBtn)
    })

    it('[Tap] => Check Tap Custom Network tab', async () => {
        // action
        await action.click(component.networkManagementCustomTab)

        // assert
        await assert.checkElementDisplayed(component.customNetworkTabAddCustomNetworkBtn)
    })

    it('[Tap] => Check Tap Popular tab', async () => {
        // action
        await action.click(component.networkManagementPopularTab)

        // assert
        await assert.checkElementDisplayed(component.popularTabBitkubNetworkBtn)
    })

    it('[Tap] => Check Tap Add Custom Network Btn', async () => {
        // action
        await action.click(component.networkManagementCustomTab)

        await action.click(component.customNetworkTabAddCustomNetworkBtn)

        // assert
        await assert.checkText(component.customNetworkTitleText, 'Custom Network')
    })
})

describe('Add Custom Network Page Test Scenario', () => {
    it('[Display] => Check Back Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkBackBtn)
    })

    it('[Display] => Check X Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkCloseIconBtn)
    })

    it('[Display] => Check Network Name Info Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkNameInfoBtn)
    })

    it('[Display] => Check Network Name TextField Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkNameTextField)
    })

    it('[Display] => Check Network URL Info Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkURLInfoBtn)
    })

    it('[Display] => Check Network URL TextField Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkNetworkURLTextField)
    })

    it('[Display] => Check Chain ID Info Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkChainIDInfoBtn)
    })

    it('[Display] => Check Chain ID TextField Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkChainIDTextField)
    })

    it('[Display] => Check Symbol Info Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkSymbolInfoBtn)
    })

    it('[Display] => Check Symbol TextField Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkSymbolTextField)
    })

    it('[Display] => Check Block Explorer URL Info Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkExplorerInfoBtn)
    })

    it('[Display] => Check Block Explorer URL TextField Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkExplorerTextField)
    })

    it('[Display] => Check Cancel Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkCancelBtn)
    })

    it('[Display] => Check Confirm Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.customNetworkConfirmBtn)
    })

    it('[Display] => Check Confirm Btn should be disable Displayed', async () => {
        // assert
        await assert.checkDisabled(component.customNetworkConfirmBtn)
    })

    it('[Wording] => Check Back Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkBackBtn, '')
    })

    it('[Wording] => Check X Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkCloseIconBtn, '')
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
        await assert.checkText(component.customNetworkNetworkNameInfoBtn, '')
    })

    it('[Wording] => Check Network Name text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkNameText, 'Network Name')
    })

    it('[Wording] => Check Network URL Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkURLInfoBtn, '')
    })

    it('[Wording] => Check Network URL text', async () => {
        // assert
        await assert.checkText(component.customNetworkNetworkURLText, 'Network URL')
    })

    it('[Wording] => Check Chain ID Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkChainIDInfoBtn, '')
    })

    it('[Wording] => Check Chain ID text', async () => {
        // assert
        await assert.checkText(component.customNetworkChainIDText, 'Chain ID')
    })

    it('[Wording] => Check Symbol Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkSymbolInfoBtn, '')
    })

    it('[Wording] => Check Symbol text', async () => {
        // assert
        await assert.checkText(component.customNetworkSymbolText, 'Symbol')
    })

    it('[Wording] => Check Block Explorer URL Info Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkExplorerInfoBtn, '')
    })

    it('[Wording] => Check Block Explorer URL text', async () => {
        // assert
        await assert.checkText(component.customNetworkExplorerText, 'Block Explorer URL (Optional)')
    })

    it('[Wording] => Check Cancel Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkCancelBtn, 'Cancel')
    })

    it('[Wording] => Check Confirm Btn text', async () => {
        // assert
        await assert.checkText(component.customNetworkConfirmBtn, 'Confirm')
    })

    it('[Tap] => Check Tap Back Btn', async () => {
        // action
        await action.click(component.customNetworkBackBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customNetworkTabAddCustomNetworkBtn)
    })

    it('[Tap] => Check Tap X Btn', async () => {
        // action
        await action.click(component.customNetworkCloseIconBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after (back to Custom Network)
        await action.click(component.customNetworkTabAddCustomNetworkBtn)
    })

    it('[Tap] => Check Tap Network Name Info Btn', async () => {
        // action
        await action.click(component.customNetworkNetworkNameInfoBtn)

        // assert
        await assert.checkText(component.customNetworkNetworkNameInfoText, 'The name associated with this network.')

        // after (tap out of pop-up)
        await action.swipe('down')
    })

    it('[Tap] => Check Tap Network URL Info Btn', async () => {
        // action
        await action.click(component.customNetworkNetworkURLInfoBtn)

        // assert
        await assert.checkText(component.customNetworkNetworkURLInfoText, 'The URL used to access this network.')

        // after (tap out of pop-up)
        await action.swipe('down')
    })

    it('[Tap] => Check Tap Chain ID Info Btn', async () => {
        // action
        await action.click(component.customNetworkChainIDInfoBtn)

        // assert
        await assert.checkText(component.customNetworkChainIDInfoText, 'The chain ID used to sign transactions for this network.')

        // after (tap out of pop-up)
        await action.swipe('down')
    })

    it('[Tap] => Check Tap Symbol Info Btn', async () => {
        // action
        await action.click(component.customNetworkSymbolInfoBtn)

        // assert
        await assert.checkText(component.customNetworkSymbolInfoText, 'The ticker symbol displayed for this network’s currency.')

        // after (tap out of pop-up)
        await action.swipe('down')
    })

    it('[Tap] => Check Tap Block Explorer URL Info Btn', async () => {
        // action
        await action.click(component.customNetworkExplorerInfoBtn)

        // assert
        await assert.checkText(component.customNetworkExplorerInfoText, 'The URL used as the block explorer for this network.')

        // after (tap out of pop-up)
        await action.swipe('down')
    })

    it('[Tap] => Check Tap Cancel Btn', async () => {
        // action
        await action.click(component.customNetworkCancelBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after
        await action.click(component.networkManagementCloseIconBtn)     // back to setting page
        await action.click(component.homeTabHomeBtn)    // back to home page
    })

    it('[Function] => Check Add Custom Network Success', async () => {
        // action
        await action.click(component.homeNetworkBtn)
        await customNetworkModel.addCustomNetwork(`${process.env.TEST_URL}`)

        // assert
        await assert.checkText(component.homeNetworkBtnText, 'goerli')

        // after
        await action.click(component.homeTabSettingBtn)
        await action.click(component.settingNetworkManageBtn)
    })

    it('[Functional] => Check Message Network Name Required', async () => {
        // action
        await action.click(component.networkManagementCustomTab)    // go to custom network tab
        await action.click(component.customNetworkTabAddCustomNetworkBtn)  // go to add custom network
        await action.enterText(component.customNetworkNetworkNameTextField, ' ')     // tap on network name textfield
        await action.click(component.customNetworkWarningText)     // Out of textfield

        // assert
        await assert.checkText(component.customNetworkNetworkNameError, 'Network Name is required')
    })

    it('[Functional] => Check Message Symbol Required', async () => {
        // action
        await action.enterText(component.customNetworkSymbolTextField, ' ')     // tap on symbol textfield
        await action.click(component.customNetworkWarningText)     // Out of textfield

        // assert
        await assert.checkText(component.customNetworkSymbolError, 'Symbol is required')
    })

    it('[Functional] => Check Message Wrong Chain ID', async () => {
        // action
        await action.enterText(component.customNetworkChainIDTextField, '55')
        await action.tabKeyboard('return')   // Out of textfield

        // assert
        await assert.checkText(component.customNetworkChainIdError, 'The RPC URL you have entered returned a different chain ID (). Please update the Chain ID to match the RPC URL of the network you are trying to add.')
    })

    it('[Functional] => Check Message Invalid URL', async () => {
        // action
        await action.enterText(component.customNetworkNetworkURLTextField, 'HTTPS')
        await action.tabKeyboard('return')   // Out of textfield

        // assert
        await assert.checkText(component.customNetworkURLError, 'Invalid Network URL')
    })

    it('[Functional] => Check Message Block Explorer Format', async () => {
        // action
        await action.enterText(component.customNetworkExplorerTextField, 'text')
        await action.tabKeyboard('return')   // Out of textfield

        // assert
        await assert.checkText(component.customNetworkExplorerError, 'Invalid block explorer url.')

        // after (back to Network Management)
        await action.click(component.customNetworkCancelBtn)
        await action.click(component.customNetworkTabAddCustomNetworkBtn)
    })

    it('[Functional] => Check Add Existing Network', async () => {
        // action
        await action.setClipboard(`${process.env.TEST_URL}`)
        await action.click(component.customNetworkNetworkURLTextField)
        await action.click(component.customNetworkNetworkURLTextField)   // open option menu

        // paste clipboard
        await action.click(component.iosPasteBtn)
        await action.pause(5000)
        await action.tabKeyboard('return')

        // assert
        await assert.checkText(component.customNetworkChainIdError, 'This chain Id 5 already exists')

        // after
        await action.click(component.customNetworkCancelBtn)
    })
})

describe('Add Network Success Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.customNetworkTabRemoveGoerliNetworkBtn)  // remove network
        await action.click(component.removeNetworkConfirmRemoveBtn)    // confirm remove network

        await action.click(component.customNetworkTabAddCustomNetworkBtn)  // go to add custom network

        // add network
        await action.setClipboard(`${process.env.TEST_URL}`)
        await action.click(component.customNetworkNetworkURLTextField)
        await action.click(component.customNetworkNetworkURLTextField)   // open option menu
        await action.click(component.iosPasteBtn)   // paste clipboard
        await action.pause(5000)
        await action.tabKeyboard('return')   // Out of textfield
        await action.click(component.customNetworkConfirmBtn)   // confirm add network
    })

    it('[Display] => Check Switch to Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.addNetworkSuccessSwitchNetworkBtn)
    })

    it('[Display] => Check Dismiss Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.addNetworkSuccessDismissBtn)
    })

    it('[Wording] => Check Title Text', async () => {
        // assert
        await assert.checkText(component.addNetworkSuccessTitleText, 'Add a network success')
    })

    it('[Wording] => Check Description Text', async () => {
        // assert
        await assert.checkText(component.addNetworkSuccessDescriptionText, 'Now! you have the goerli network added to your wallet.')
    })

    it('[Wording] => Check Switch to Btn Text', async () => {
        // assert
        await assert.checkText(component.addNetworkSuccessSwitchNetworkBtn, 'Switch to goerli')
    })

    it('[Wording] => Check Dismiss Btn Text', async () => {
        // assert
        await assert.checkText(component.addNetworkSuccessDismissBtn, 'Dismiss')
    })

    it('[Tap] => Check Dismiss Btn Tap', async () => {
        // action
        await action.click(component.addNetworkSuccessDismissBtn)

        // assert
        await assert.checkText(component.homeNetworkBtnText, 'Bitkub Chain Testnet')

        // after (back to Network Management)
        await action.click(component.homeTabSettingBtn)     // go to setting page
        await action.click(component.settingNetworkManageBtn)   // go to network management
        await action.click(component.networkManagementCustomTab)    // go to custom network tab
    })

    it('[Functional] => Check Network Name at Success Modal Should Display Correctly', async () => {
        // action
        await action.click(component.customNetworkTabRemoveGoerliNetworkBtn)  // remove network
        await action.click(component.removeNetworkConfirmRemoveBtn)    // confirm remove network
        await action.click(component.customNetworkTabAddCustomNetworkBtn)  // go to add custom network

        // add network
        await action.setClipboard(`${process.env.BSC_TEST_NET_URL}`)    // bnb testnet
        await action.click(component.customNetworkNetworkURLTextField)
        await action.click(component.customNetworkNetworkURLTextField)   // open option menu
        await action.click(component.iosPasteBtn)   // paste clipboard
        await action.pause(5000)
        await action.tabKeyboard('return')   // Out of textfield
        await action.click(component.customNetworkConfirmBtn)   // confirm add network

        // assert
        await assert.checkText(component.addNetworkSuccessSwitchNetworkBtn, 'Switch to bnb')
    })

    it('[Tap] => Check Tap Switch Network Btn', async () => {
        // action
        await action.click(component.addNetworkSuccessSwitchNetworkBtn)

        // assert
        await assert.checkText(component.homeNetworkBtnText, 'bnb')
    })
})

describe('Remove Chain Modal Test Scenario', () => {
    beforeAll(async () => {
        await action.click(component.homeTabSettingBtn)     // go to setting page
        await action.click(component.settingNetworkManageBtn)   // go to network management
        await action.click(component.networkManagementCustomTab)    // go to custom network tab

        await action.click(component.customNetworkTabRemoveBNBNetworkBtn)
    })

    it('[Display] => Check Cancel Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.removeNetworkCancelBtn)
    })

    it('[Display] => Check Confirm Btn Displayed', async () => {
        // assert
        await assert.checkElementDisplayed(component.removeNetworkConfirmRemoveBtn)
    })

    it('[Wording] => Check Title Wording', async () => {
        // assert
        await assert.checkText(component.removeNetworkTitleText, 'Remove bnb Chain')
    })

    it('[Wording] => Check Description Wording', async () => {
        // assert
        await assert.checkText(component.removeNetworkDescriptionText, 'Assets on removed networks will no longer be displayed.')
    })

    it('[Wording] => Check Confirm Remove Btn Wording', async () => {
        // assert
        await assert.checkText(component.removeNetworkConfirmRemoveBtn, 'Remove')
    })

    it('[Wording] => Check Cancel Btn Wording', async () => {
        // assert
        await assert.checkText(component.removeNetworkCancelBtn, 'Cancel')
    })

    it('[Tap] => Check Tap Cancel Btn', async () => {
        // action
        await action.click(component.removeNetworkCancelBtn)

        // assert
        await assert.checkElementDisplayed(component.networkManagementTitleText)

        // after
        await action.click(component.customNetworkTabRemoveBNBNetworkBtn)
    })

    it('[Tap] => Check Remove Btn', async () => {
        // action
        await action.click(component.removeNetworkConfirmRemoveBtn)

        // assert
        await assert.checkElementNotDisplayed(component.customNetworkTabRemoveBNBNetworkBtn)

        // after
        await action.click(component.networkManagementCloseIconBtn)
        await action.click(component.homeTabHomeBtn)
    })

    it('[Functional] => Check Network Name at Remove Modal Should Display Correctly', async () => {
        // action
        await action.click(component.homeNetworkBtn)    // open select network modal
        await customNetworkModel.addCustomNetwork(`${process.env.TEST_URL}`)    // add network
        await action.click(component.homeTabSettingBtn)     // go to setting page
        await action.click(component.settingNetworkManageBtn)   // go to network management
        await action.click(component.networkManagementCustomTab)    // go to custom network tab
        await action.click(component.customNetworkTabRemoveGoerliNetworkBtn)   // open remove network modal

        // assert
            await assert.checkText(component.removeNetworkTitleText, 'Remove goerli Chain')
    })

    afterAll(async () => {
        await action.removeApps(`${process.env.BUNDLE_ID}`)
    })
})