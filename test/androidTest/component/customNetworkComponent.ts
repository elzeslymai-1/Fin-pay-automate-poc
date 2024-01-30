export class customNetworkComponent {

    // Network Management Component
    networkManagementTitleText = `android=new UiSelector().text("Add Network").className("android.view.View")`

    networkManagementXBtn = `android=new UiSelector().resourceId("addnetwork-header-closebtn")`

    networkManagementPopularTab = `android=new UiSelector().text("POPULAR").className("android.widget.TextView")`
    networkManagementCustomTab = `android=new UiSelector().text("CUSTOM NETWORK").className("android.widget.TextView")`

    // Popular Tab Component
    popularTabBitkubChainTestnet = `android=new UiSelector().resourceId("addnetwork-chainlist-Bitkub Chain Testnet")`

    // Custom Network Tab Component
    customTabNoNetworkText = `android=new UiSelector().text("No Custom Network").className("android.widget.TextView")`
    customTabAddCustomNetworkBtn = `android=new UiSelector().text("Add Custom Network").className("android.widget.TextView")`
    customTabGoerliRemoveBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Confirm Remove Pop-up Component
    confirmRemoveTitleText = `android=new UiSelector().resourceId("removechain-bottomsheet-title")`
    confirmRemoveText = `android=new UiSelector().resourceId("removechain-bottomsheet-subtitle")`

    confirmRemoveRemoveBtn = `android=new UiSelector().resourceId("removechain-bottomsheetbtn-remove")`
    confirmRemoveRemoveBtnText = `android=new UiSelector().text("Remove").className("android.widget.TextView")`

    confirmRemoveCancelBtn = `android=new UiSelector().resourceId("removechain-bottomsheetbtn-cancel")`
    confirmRemoveCancelBtnText = `android=new UiSelector().text("Cancel").className("android.widget.TextView")`

    // Custom Network Component
    customNetworkLayout = `android=new UiSelector().className("android.widget.FrameLayout")`

    customNetworkTitleText = `android=new UiSelector().text("Custom Network").className("android.view.View")`

    customNetworkBackBtn = `android=new UiSelector().resourceId("addcustomnetwork-header-backbtn")`
    customNetworkBackBtnText = `android=new UiSelector().text("").className("android.widget.TextView")`

    customNetworkXBtn = `android=new UiSelector().resourceId("addcustomnetwork-header-closebtn")`

    customNetworkWarningText = `android=new UiSelector().resourceId("addcustomnetwork-warning-text")`

    customNetworkNetworkNameInfoBtn = `android=new UiSelector().resourceId("addcustomnetwork-tooltip-name")`
    customNetworkNetworkNameText = `android=new UiSelector().resourceId("addcustomnetwork-form-name")`
    customNetworkNetworkNameInfoBtnText = `android=new UiSelector().text("").className("android.widget.TextView")`
    customNetworkNetworkNameInfoText = `android=new UiSelector().resourceId("tooltip-text-name")`
    customNetworkNetworkNameTextField = `android=new UiSelector().resourceId("addcustomnetwork-input-name")`

    customNetworkNetworkURLText = `android=new UiSelector().resourceId("addcustomnetwork-form-url")`
    customNetworkNetworkURLInfoBtn = `android=new UiSelector().resourceId("addcustomnetwork-tooltip-url")`
    customNetworkNetworkURLInfoBtnText = `android=new UiSelector().text("").className("android.widget.TextView").index(0)`
    customNetworkNetworkURLInfoText = `android=new UiSelector().resourceId("tooltip-text-url")`
    customNetworkNetworkURLTextField = `android=new UiSelector().resourceId("addcustomnetwork-input-url")`

    customNetworkChainIDText = `android=new UiSelector().resourceId("addcustomnetwork-form-chainid")`
    customNetworkChainIDInfoBtn = `android=new UiSelector().resourceId("addcustomnetwork-tooltip-chainid")`
    customNetworkChainIDInfoBtnText = `android=new UiSelector().text("").className("android.widget.TextView").index(0)`
    customNetworkChainIDInfoText = `android=new UiSelector().resourceId("tooltip-text-chainid")`
    customNetworkChainIDTextField = `android=new UiSelector().resourceId("addcustomnetwork-input-chainid")`
    
    customNetworkSymbolText = `android=new UiSelector().resourceId("addcustomnetwork-form-symbol")`
    customNetworkSymbolInfoBtn = `android=new UiSelector().resourceId("addcustomnetwork-tooltip-symbol")`
    customNetworkSymbolInfoBtnText = `android=new UiSelector().text("").className("android.widget.TextView").index(0)`
    customNetworkSymbolInfoText = `android=new UiSelector().resourceId("tooltip-text-symbol")`
    customNetworkSymbolTextField = `android=new UiSelector().resourceId("addcustomnetwork-input-symbol")`
    
    customNetworkExplorerText = `android=new UiSelector().resourceId("addcustomnetwork-form-blockexplorer")`
    customNetworkExplorerInfoBtn = `android=new UiSelector().resourceId("addcustomnetwork-tooltip-blockexplorer")`
    customNetworkExplorerInfoBtnText = `android=new UiSelector().text("").className("android.widget.TextView").index(0)`
    customNetworkExplorerInfoText = `android=new UiSelector().resourceId("tooltip-text-blockexplorer")`
    customNetworkExplorerTextField = `android=new UiSelector().resourceId("addcustomnetwork-input-blockexplorer")`

    customNetworkCancelBtn = `android=new UiSelector().resourceId("addcustomnetwork-btn-cancel")`
    customNetworkCancelBtnText = `android=new UiSelector().text("Cancel").className("android.widget.TextView")`

    customNetworkConfirmBtn = `android=new UiSelector().resourceId("addcustomnetwork-btn-confirm")`
    customNetworkConfirmBtnText = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    customNetworkNetworkNameError = `android=new UiSelector().resourceId("addcustomnetwork-texterror-name")`    
    customNetworkURLError = `android=new UiSelector().resourceId("addcustomnetwork-texterror-url")`
    customNetworkChainIdError = `android=new UiSelector().resourceId("addcustomnetwork-texterror-chainid")`
    customNetworkSymbolError = `android=new UiSelector().resourceId("addcustomnetwork-texterror-symbol")`
    customNetworkExplorerError = `android=new UiSelector().resourceId("addcustomnetwork-texterror-blockexplorer")`

    // Add Network Success
    addNetworkSuccessTitleText = `android=new UiSelector().resourceId("addcustomchain-bottomsheet-title")`
    addNetworkSuccessDescriptionText = `android=new UiSelector().resourceId("addcustomchain-bottomsheet-subtitle")`
    addNetworkSuccessSwitchGoerliBtn = `android=new UiSelector().text("Switch to goerli").className("android.widget.TextView")`
    addNetworkSuccessDismissBtn = `android=new UiSelector().text("Dismiss").className("android.widget.TextView")`

    // Home with Goerli chain Component
    homeChain = `android=new UiSelector().resourceId("home-chainselect-name")`
    homeETHToken = `android=new UiSelector().resourceId("home-walletcardsymbol-ETH")`

    // BeforeAll Component
    homeSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`
    settingTitleText = `android=new UiSelector().text("Setting").className("android.view.View")`
    homeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    settingNetworkManageBtn = `android=new UiSelector().text("Network Management").className("android.widget.TextView")`
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
}