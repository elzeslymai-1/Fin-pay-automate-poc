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
    customTokenFinTestToken = `android=new UiSelector().text("FinTestToken").className("android.widget.TextView")`

    customTokenAddCustomTokenBtn = `android=new UiSelector().text("Add Custom Token").className("android.widget.TextView")`
    customTokenTokenAddressTextField = `android=new UiSelector().text("Token address (0x...)").className("android.widget.EditText")`
    customTokenAddFinToken = `android=new UiSelector().text("FinTestToken").className("android.widget.TextView")`
    customTokenNoResultText = `android=new UiSelector().text("No Result").className("android.widget.TextView")`
    customTokenCheckbox = `android=new UiSelector().className("android.widget.CheckBox")`
    customTokenConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

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