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
    customtokenTitleText = `android=new UiSelector().text("Custom token").className("android.view.View")`
    customtokenTokenHeaderText = `android=new UiSelector().text("Token").className("android.widget.TextView")`
    customtokenCustomTokenHeaderText = `android=new UiSelector().text("Custom Token").className("android.widget.TextView")`
    customtokenBackBtn = `android=new UiSelector().text("").className("android.widget.TextView")`
    customtokenSearchTextField = `android=new UiSelector().className("android.widget.EditText")`
    customtokenSearchPlaceholderText = `android=new UiSelector().text("Search...").className("android.widget.EditText")`
    customtokenRemoveBtn = `android=new UiSelector().text("").className("android.widget.TextView")`

    customtokenNetworkGoerliBtn = `android=new UiSelector().text("G").className("android.widget.TextView")`

    customtokenKubToken = `android=new UiSelector().text("KUB").className("android.widget.TextView")`
    customtokenWToken = `android=new UiSelector().text("WToken").className("android.widget.TextView")`
    customtokenGoerliToken = `android=new UiSelector().text("Goerli").className("android.widget.TextView")`
    customtokenFintestToken = `android=new UiSelector().text("FinTestToken").className("android.widget.TextView")`

    customtokenAddcustomtokenBtn = `android=new UiSelector().text("Add Custom Token").className("android.widget.TextView")`
    customtokenTokenAddressTextField = `android=new UiSelector().text("Token address (0x...)").className("android.widget.EditText")`
    customtokenAddFintoken = `android=new UiSelector().text("FinTestToken").className("android.widget.TextView")`
    customtokenCheckbox = `android=new UiSelector().className("android.widget.CheckBox")`
    customtokenConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`

    // Network Component
    networkTitleText = `android=new UiSelector().text("Select Network").className("android.widget.TextView")`
    networkBitkubChain = `android=new UiSelector().text("Bitkub Chain Testnet").className("android.widget.TextView")`
    networkGoerliChain = `android=new UiSelector().text("goerli").className("android.widget.TextView")`
    networkAddnetworkBtn = `android=new UiSelector().text("Add Network").className("android.widget.TextView")`

    addnetworkCustomTab = `android=new UiSelector().text("CUSTOM NETWORK").className("android.widget.TextView")`
    customTabAddNetwork = `android=new UiSelector().text("Add Custom Network").className("android.widget.TextView")`
    customNetworkURLTextField = `android=new UiSelector().className("android.widget.EditText").index(7)`
    customNetworkConfirmBtn = `android=new UiSelector().text("Confirm").className("android.widget.TextView")`
    switchToGoerli = `android=new UiSelector().text("Switch to goerli").className("android.widget.TextView")`

    // XPath
    customtokenNetworkKUBBtn = `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView`
}