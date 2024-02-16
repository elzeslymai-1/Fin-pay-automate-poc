import { Action } from "../../mainComponent/mainFunction/Action.js"

const action = new Action()

export class CustomNetworkComponent {
    // iOS Component
    iosPasteBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Paste"`]'

    // Menu Bar
    homeTabHomeBtn = '~Home, tab, 1 of 4'
    homeTabSettingBtn = '~Setting, tab, 4 of 4'

    // Home Page Component
    homeNetworkBtn = '~home-chainselect-btn'
    homeNetworkBtnText = '~home-chainselect-name'

    // Setting Page Component
    settingNetworkManageBtn = '-ios class chain:**/XCUIElementTypeOther[`name == " Network Management "`][2]'
    settingTitleText = '-ios class chain:**/XCUIElementTypeOther[`name == "Setting"`][5]'

    // Network pop-up Component
    networkTitleText = '~bottomsheet-header-title'
    networkAddNetworkBtn = '~bottomsheet-addnetwork-btn'

    networkBitkubBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "bottomsheet-chain-name"`][1]'
    networkGoerliBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == "bottomsheet-chain-name"`][2]'

    // Network Management Component
    networkManagementTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Add Network"`]'
    networkManagementCloseIconBtn = '~addnetwork-header-closebtn'
    networkManagementPopularTab = '~addnetwork-tab-popular'
    networkManagementCustomTab = '~addnetwork-tab-custom'

    // Custom Network Tab Component
    customNetworkTabNoCustomNetworkText = '~No Custom Network'
    customNetworkTabRemoveGoerliNetworkBtn = '~addnetwork-chainlist-remove-5'
    customNetworkTabRemoveBNBNetworkBtn = '~addnetwork-chainlist-remove-56'
    customNetworkTabAddCustomNetworkBtn = '-ios class chain:**/XCUIElementTypeOther[`name == "Add Custom Network"`][2]'

    customNetworkTabGoerliNetworkBtn = '~addnetwork-chainlist-goerli'

    // Popular Network Tab Component
    popularTabBitkubNetworkBtn = '~addnetwork-chainlist-Bitkub Chain Testnet'

    // Add Custom Network Page Component
    customNetworkBackBtn = '~addcustomnetwork-header-backbtn'
    customNetworkCloseIconBtn = '~addcustomnetwork-header-closebtn'
    customNetworkTitleText = '-ios class chain:**/XCUIElementTypeStaticText[`name == "Custom Network"`]'
    customNetworkWarningText = '~addcustomnetwork-warning-text'

    customNetworkNetworkNameText = '~addcustomnetwork-form-name'
    customNetworkNetworkNameInfoBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == ""`][1]'
    customNetworkNetworkNameInfoText = '-ios class chain:**/XCUIElementTypeOther[`name == "The name associated with this network."`][3]'
    customNetworkNetworkNameTextField = '~addcustomnetwork-input-name'
    customNetworkNetworkNameError = '~addcustomnetwork-texterror-name'

    customNetworkNetworkURLText = '~addcustomnetwork-form-url'
    customNetworkNetworkURLInfoBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == ""`][2]'
    customNetworkNetworkURLInfoText = '-ios class chain:**/XCUIElementTypeOther[`name == "The URL used to access this network."`][3]'
    customNetworkNetworkURLTextField = '~addcustomnetwork-input-url'
    customNetworkURLError = '~addcustomnetwork-texterror-url'

    customNetworkChainIDText = '~addcustomnetwork-form-chainid'
    customNetworkChainIDInfoBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == ""`][3]'
    customNetworkChainIDInfoText = '-ios class chain:**/XCUIElementTypeOther[`name == "The chain ID used to sign transactions for this network."`][3]'
    customNetworkChainIDTextField = '~addcustomnetwork-input-chainid'
    customNetworkChainIdError = '~addcustomnetwork-texterror-chainid'

    customNetworkSymbolText = '~addcustomnetwork-form-symbol'
    customNetworkSymbolInfoBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == ""`][4]'
    customNetworkSymbolInfoText = '-ios class chain:**/XCUIElementTypeOther[`name == "The ticker symbol displayed for this network’s currency."`][3]'
    customNetworkSymbolTextField = '~addcustomnetwork-input-symbol'
    customNetworkSymbolError = '~addcustomnetwork-texterror-symbol'

    customNetworkExplorerText = '~addcustomnetwork-form-blockexplorer'
    customNetworkExplorerInfoBtn = '-ios class chain:**/XCUIElementTypeStaticText[`name == ""`][5]'
    customNetworkExplorerInfoText = '-ios class chain:**/XCUIElementTypeOther[`name == "The URL used as the block explorer for this network."`][3]'
    customNetworkExplorerTextField = '~addcustomnetwork-input-blockexplorer'
    customNetworkExplorerError = '~addcustomnetwork-texterror-blockexplorer'

    customNetworkCancelBtn = '~addcustomnetwork-btn-cancel'
    customNetworkConfirmBtn = '~addcustomnetwork-btn-confirm'

    // Add Network Success Modal Component
    addNetworkSuccessTitleText = '~addcustomchain-bottomsheet-title'
    addNetworkSuccessDescriptionText = '~addcustomchain-bottomsheet-subtitle'
    addNetworkSuccessSwitchNetworkBtn = '~addcustomchain-bottomsheet-switchbtn'
    addNetworkSuccessDismissBtn = '~addcustomchain-bottomsheet-dismissbtn'

    // Remove Network Modal Component
    removeNetworkTitleText = '~removechain-bottomsheet-title'
    removeNetworkDescriptionText = '~removechain-bottomsheet-subtitle'
    removeNetworkConfirmRemoveBtn = '~removechain-bottomsheetbtn-remove'
    removeNetworkCancelBtn = '~removechain-bottomsheetbtn-cancel'
}

export class CustomNetworkModel extends CustomNetworkComponent {


    async addCustomNetwork(rpcURL: string) {
        await action.click(this.networkAddNetworkBtn)

        await action.click(this.networkManagementCustomTab)

        await action.click(this.customNetworkTabAddCustomNetworkBtn)

        await action.setClipboard(rpcURL)   // set rpcURL to clipboard value

        // open option menu
        await action.click(this.customNetworkNetworkURLTextField)
        await action.click(this.customNetworkNetworkURLTextField)

        // paste clipboard
        await action.click(this.iosPasteBtn)
        await action.tapKeyboard()   // out of keyboard
        await action.pause(5000)

        await action.click(this.customNetworkConfirmBtn)

        await action.click(this.addNetworkSuccessSwitchNetworkBtn)
    }
}