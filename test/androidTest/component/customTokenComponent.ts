export class customTokenComponent {

    // BeforeAll Components
    homeSettingBtn = `android=new UiSelector().text("Setting").className("android.widget.TextView")`
    settingTitleText = `android=new UiSelector().text("Setting").className("android.view.View")`
    homeBtn = `android=new UiSelector().text("Home").className("android.widget.TextView")`
    settingCustomTokenBtn = `android=new UiSelector().text("Custom Token").className("android.widget.TextView")`
    splashScreenCreateWalletBtn = `android=new UiSelector().text("Create a new wallet").className("android.widget.TextView")`
    createWallet12wordBtn = `android=new UiSelector().text("12-word Mnemonic wallet").className("android.widget.TextView")`
    createWalletContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`
    successContinueBtn = `android=new UiSelector().text("Continue").className("android.widget.TextView")`

    // Custom Token Page Component
    customTokenTitleText = `android=new UiSelector().text("Custom token").className("android.view.View")`
    customTokenTokenHeaderText = `android=new UiSelector().text("Token").className("android.widget.TextView")`
    customTokenCustomTokenHeaderText = `android=new UiSelector().text("Custom Token").className("android.widget.TextView")`
    
    customTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    customTokenNetworkBtn = `android=new UiSelector().resourceId("home-chainselect-btn")`
    customTokenSearchTextField = `android=new UiSelector().resourceId("home-walletmodal-search")`
    customTokenRemoveBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    customTokenNetworkGoerliBtn = `android=new UiSelector().text("G").className("android.widget.TextView")`

    customTokenKubToken = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    customTokenWToken = `android=new UiSelector().text("WToken").className("android.widget.TextView")`
    customTokenGoerliToken = `android=new UiSelector().text("Goerli").className("android.widget.TextView")`
    customTokenFinTestToken = `android=new UiSelector().text("fins token").className("android.widget.TextView")`

    customTokenAddCustomTokenBtn = `android=new UiSelector().text("Add Custom Token").className("android.widget.TextView")`

    // Add Token Component
    addTokenTitleText = `android=new UiSelector().text("Custom token").className("android.view.View")`
    addTokenAddressHeadText = `android=new UiSelector().text("Token address").className("android.widget.TextView")`
    addTokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    addTokenAddressTextField = `android=new UiSelector().className("android.widget.EditText")`
    addTokenPasteBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    
    addTokenFinToken = `android=new UiSelector().text("fins token").className("android.widget.TextView")`
    addTokenAddress = `android=new UiSelector().text("Token Address").className("android.widget.TextView")`
    addTokenSymbol = `android=new UiSelector().text("Token Symbol").className("android.widget.TextView")`
    addTokenName = `android=new UiSelector().text("Token Name").className("android.widget.TextView")`
    addTokenBalance = `android=new UiSelector().text("Token Balance").className("android.widget.TextView")`
    addTokenWarningText = `android=new UiSelector().text("By adding this as a custom token, you confirm that all further interactions with it are at your own risk.").className("android.widget.TextView")`
    addTokenNoResultText = `android=new UiSelector().text("No Result").className("android.widget.TextView")`
    addTokenAlreadyExistText = `android=new UiSelector().text("Token already exist").className("android.widget.TextView")`
    
    addTokenCheckbox = `android=new UiSelector().className("android.widget.CheckBox")`
    addTokenCheckboxText = `android=new UiSelector().text("I understand and agree").className("android.widget.TextView")`
    addTokenCancelBtn = `android=new UiSelector().text("Cancel").className("android.widget.TextView")`
    addTokenConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    // Network Component
    networkTitleText = `android=new UiSelector().text("Select Network").className("android.widget.TextView")`
    networkBitkubChain = `android=new UiSelector().text("Bitkub Chain Testnet").resourceId("bottomsheet-chain-name")`
    networkGoerliChain = `android=new UiSelector().text("goerli").resourceId("bottomsheet-chain-name")`
    networkAddNetworkBtn = `android=new UiSelector().text("Add Network").className("android.widget.TextView")`

    addNetworkCustomTab = `android=new UiSelector().text("CUSTOM NETWORK").className("android.widget.TextView")`
    customTabAddNetwork = `android=new UiSelector().text("Add Custom Network").className("android.widget.TextView")`
    customNetworkURLTextField = `android=new UiSelector().className("android.widget.EditText").index(7)`
    customNetworkConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`
    switchToGoerli = `android=new UiSelector().text("Switch to goerli").className("android.widget.TextView")`
}