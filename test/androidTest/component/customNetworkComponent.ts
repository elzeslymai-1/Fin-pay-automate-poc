export class customNetworkComponent {

    // Network Management Component
    networkmanagementTitleText = `android=new UiSelector().text("Add Network").className("android.view.View")`
    networkmanagementXBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    networkmanagementPopularTab = `android=new UiSelector().text("POPULAR").className("android.widget.TextView")`

    networkmanagementCustomTab = `android=new UiSelector().text("CUSTOM NETWORK").className("android.widget.TextView")`

    // Popular Tab Component
    popularTabBitkubChainTestnet = `android=new UiSelector().text("Bitkub Chain Testnet").className("android.widget.TextView")`

    // Custom Network Tab Component
    customTabAddcustomnetBtn = `android=new UiSelector().text("Add Custom Network").className("android.widget.TextView")`
    customTabGoerliRemoveBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    // Confirm Remove Pop-up Component
    confirmRemoveTitleText = `android=new UiSelector().text("Remove goerli Chain").className("android.widget.TextView")`
    confirmRemoveText = `android=new UiSelector().text("Assets on removed networks will no longer be displayed.").className("android.widget.TextView")`

    confirmRemoveRemoveBtn = `android=new UiSelector().text("Remove").className("android.widget.TextView")`
    confirmRemoveCancelBtn = `android=new UiSelector().text("Cancel").className("android.widget.TextView")`

    // Custom Network Component
    customnetTitleText = `android=new UiSelector().text("Custom Network").className("android.view.View")`
    customnetBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    customnetXBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    customnetWarningText = `android=new UiSelector().text("A Malicious network provider can lie about the state of the blockchain and record your network activity. Only add networks you trust.").className("android.widget.TextView")`

    customnetNetworkNameText = `android=new UiSelector().text("Network Name").className("android.widget.TextView")`
    customnetNetworkNameInfoBtn = `android=new UiSelector().text("").className("android.widget.TextView").index(2)`
    customnetNetworkNameInfoText = `android=new UiSelector().text("The name associated with this network.").className("android.widget.TextView")`
    customnetNetworkNameTextField = `android=new UiSelector().className("android.widget.EditText").index(3)`

    customnetNetworkURLText = `android=new UiSelector().text("Network URL").className("android.widget.TextView")`
    customnetNetworkURLInfoBtn = `android=new UiSelector().text("").className("android.widget.TextView").index(6)`
    customnetNetworkURLInfoText = `android=new UiSelector().text("The URL used to access this network.").className("android.widget.TextView")`
    customnetNetworkUrlTextField = `android=new UiSelector().className("android.widget.EditText").index(7)`

    customnetChainIDText = `android=new UiSelector().text("Chain ID").className("android.widget.TextView")`
    customnetChainIDInfoBtn = `android=new UiSelector().text("").className("android.widget.TextView").index(10)`
    customnetChainIDInfoText = `android=new UiSelector().text("The chain ID used to sign transactions for this network.").className("android.widget.TextView")`
    customnetChainIDTextField = `android=new UiSelector().className("android.widget.EditText").index(11)`
    
    customnetSymbolText = `android=new UiSelector().text("Symbol").className("android.widget.TextView")`
    customnetSymbolInfoBtn = `android=new UiSelector().text("").className("android.widget.TextView").index(14)`
    customnetSymbolInfoText = `android=new UiSelector().text("The ticker symbol displayed for this network’s currency.").className("android.widget.TextView")`
    customnetSymbolTextField = `android=new UiSelector().className("android.widget.EditText").index(15)`
    
    customnetBlockExplorText = `android=new UiSelector().text("Block Explorer URL (Optional)").className("android.widget.TextView")`
    customnetBlockExplorInfoBtn = `android=new UiSelector().text("").className("android.widget.TextView").index(18)`
    customnetBlockExplorInfoText = `android=new UiSelector().text("The URL used as the block explorer for this network.").className("android.widget.TextView")`
    customnetBlockExplorTextField = `android=new UiSelector().className("android.widget.EditText").index(19)`

    customnetCancelBtn = `android=new UiSelector().text("Cancel").className("android.widget.TextView")`
    customnetConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    customnetNetworkNameRequired = `android=new UiSelector().text("Network Name is required").className("android.widget.TextView")`
    customnetSymbolRequired = `android=new UiSelector().text("Symbol is required").className("android.widget.TextView")`

    // Add Network Success
    addnetsuccessTitleText = `android=new UiSelector().text("Add a network success").className("android.widget.TextView")`
    addnetsuccessSwitchgoerliBtn = `android=new UiSelector().text("Switch to goerli").className("android.widget.TextView")`
    addnetsuccessDismissBtn = `android=new UiSelector().text("Dismiss").className("android.widget.TextView")`

    // Home with Goerli chain Component
    homeGoerlichain = `android=new UiSelector().text("goerli").className("android.widget.TextView")`
    homeETHToken = `android=new UiSelector().text("ETH").className("android.widget.TextView")`

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